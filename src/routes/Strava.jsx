import { useLoaderData } from "react-router-dom";
import classes from "./Strava.module.css";
import { FaRunning, FaHashtag, FaMap, FaRegClock } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";
import { BiSwim } from "react-icons/bi";
import Switch from "react-switch";
import { useState } from "react";
import "../Common.css";


const METERS_IN_KM = 1000;
const SECONDS_IN_HOUR = 3600;

function formatDistance(distanceInMeter) {
  return (distanceInMeter / METERS_IN_KM).toFixed(1) + " KM";
}

function formatDuration(durationInMin) {
  return (durationInMin / SECONDS_IN_HOUR).toFixed(1) + " HRS";
}

function Strava() {
  const stravaData = useLoaderData();
  const [isAllTime, setIsAllTime] = useState(false);
  const [runStatsObj, setRunStatsObj] = useState(stravaData.ytdRun);
  const [swimStatsObj, setSwimStatsObj] = useState(stravaData.ytdSwim);
  const [rideStatsObj, setRideStatsObj] = useState(stravaData.ytdRide);


  function handleChange(checked) {
    console.log(checked);
    setIsAllTime(checked);
    if (checked) {
      setRunStatsObj(stravaData.allRun);
      setSwimStatsObj(stravaData.allSwim);
      setRideStatsObj(stravaData.allRide);
    } else {
      setRunStatsObj(stravaData.ytdRun);
      setSwimStatsObj(stravaData.ytdSwim);
      setRideStatsObj(stravaData.ytdRide);
    }
  }
  
 
  return (
    <>
    
      <div className={classes.stcontainer}>
        {isAllTime && <h3>All Time Stats</h3>}
        {!isAllTime && <h3>Current Year Stats</h3>}
        <label style={{ display: "inline" }}>
          <span></span>
          <Switch
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleChange}
            checked={isAllTime}
          />
        </label>
        <table>
          <th>&nbsp;</th>
          <th title='Count'><FaHashtag/></th>
          <th title='Distance'><FaMap/></th>
          <th title='Moving Time'><FaRegClock/></th>
          <tr>
            <td title="Run">
              <FaRunning />
            </td>
            <td>{runStatsObj.count}</td>

            <td>{formatDistance(runStatsObj.distance)}</td>
            <td>{formatDuration(runStatsObj.movingTime)}</td>
          </tr>
          <tr>
            <td title="Swim">
              <BiSwim />
            </td>

            <td>{swimStatsObj.count}</td>

            <td>{formatDistance(swimStatsObj.distance)}</td>
            <td>{formatDuration(swimStatsObj.movingTime)}</td>
          </tr>

          <tr>
            <td title="Ride">
              <IoMdBicycle />
            </td>

            <td>{rideStatsObj.count}</td>

            <td>{formatDistance(rideStatsObj.distance)}</td>
            <td>{formatDuration(rideStatsObj.movingTime)}</td>
          </tr>
        </table>

        <a
          style={{
            display: "inline-block",
            backgroundColor: "#FC5200",
            color: "#fff",
            padding: "5px 10px 5px 30px",
            fontSize: "11px",
            fontFamily: "Helvetica, Arial, sans-serif",
            whiteSpace: "nowrap",
            textDecoration: "none",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "10px center",
            borderRadius: "3px",
            backgroundImage:
              "url('https://badges.strava.com/logo-strava-echelon.png')",
          }}
          href="https://strava.com/athletes/22804963"
          target="_clean"
        >
          Follow me on
          <img
            src="https://badges.strava.com/logo-strava.png"
            alt="Strava"
            style={{ marginLeft: "2px", verticalAlign: "text-bottom" }}
          />
        </a>
        
      </div>
    </>
  );
}

export default Strava;

export async function loader() {
  const response = await fetch("http://mmoiyadi.in.net/api/strava/stats");
  const resData = await response.json();
  return resData;
}
