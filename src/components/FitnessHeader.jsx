/* eslint-disable react/prop-types */
import { MdDirectionsRun } from "react-icons/md";
import { FaHeartbeat} from "react-icons/fa";
import {IoMdStats} from "react-icons/io";
import { Link } from "react-router-dom";
//import StravaLogo from "./StravaLogo";

import classes from "./FitnessHeader.module.css";

function FitnessHeader(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        {props.children}
        <FaHeartbeat />
        Fitness
      </h1>

      <p>
        <Link to="/fitness/strava" className={classes.button}>
        {/* <StravaLogo/> */}
        <IoMdStats/>
          Stats
        </Link>
      </p>
      <p>
        <Link to="/fitness/marathon" className={classes.button}>
          <MdDirectionsRun size={18} />
          Marathon
        </Link>
      </p>
    </header>
  );
}

export default FitnessHeader;
