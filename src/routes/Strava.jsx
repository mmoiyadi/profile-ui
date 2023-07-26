import { useLoaderData } from "react-router-dom";
import classes from "./Strava.module.css"

const METERS_IN_KM = 1000;
const SECONDS_IN_HOUR = 3600;

function formatDistance(distanceInMeter){
  return (distanceInMeter / METERS_IN_KM).toFixed(1) + " km";
}

function formatDuration(durationInMin){
  return (durationInMin / SECONDS_IN_HOUR).toFixed(1) +  " hr";
}

function Strava() {
  const stravaData = useLoaderData();
  return (
    <>
      
      <div className={classes.stcontainer}>
      <h3>Current Year Stats</h3>
      <table className={classes.table}>
        <th className={classes.th}>&nbsp;</th>
        <th className={classes.th}>Count</th>
        <th className={classes.th}>Distance</th>
        <th className={classes.th}>Moving Time</th>
        <tr>
        <td className={classes.td}>Run</td>
        <td className={classes.td}>{stravaData.run.count}</td>
        <td className={classes.td}>{formatDistance(stravaData.run.distance)}</td>
        <td className={classes.td}>{formatDuration(stravaData.run.movingTime)}</td>
        </tr>
        <tr>
        <td className={classes.td}>Swim</td>
        <td className={classes.td}>{stravaData.swim.count}</td>
        <td className={classes.td}>{formatDistance(stravaData.swim.distance)}</td>
        <td className={classes.td}>{formatDuration(stravaData.swim.movingTime)}</td>
        </tr>

        <tr>
        <td className={classes.td}>Ride</td>
        <td className={classes.td}>{stravaData.ride.count}</td>
        <td className={classes.td}>{formatDistance(stravaData.ride.distance)}</td>
        <td className={classes.td}>{formatDuration(stravaData.ride.movingTime)}</td>
        </tr>
       

      </table>

      <a style={{display:"inline-block", backgroundColor:"#FC5200", color:"#fff",padding:"5px 10px 5px 30px",fontSize:"11px",fontFamily:"Helvetica, Arial, sans-serif",whiteSpace:"nowrap",textDecoration:"none",backgroundRepeat:"no-repeat",backgroundPosition:"10px center",borderRadius:"3px",backgroundImage:"url('https://badges.strava.com/logo-strava-echelon.png')"}} href='https://strava.com/athletes/22804963' target="_clean">
  Follow me on
  <img src='https://badges.strava.com/logo-strava.png' alt='Strava' style={{marginLeft:"2px",verticalAlign:"text-bottom"}} />
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
