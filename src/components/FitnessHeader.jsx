/* eslint-disable react/prop-types */
import { MdDirectionsRun } from "react-icons/md";
import { Link } from "react-router-dom";
import StravaLogo from "./StravaLogo";

import classes from "./FitnessHeader.module.css";

function FitnessHeader(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        {props.children}
        <MdDirectionsRun />
        Fitness
      </h1>

      <p>
        <Link to="/fitness/strava" className={classes.button}>
        <StravaLogo/>
          Strava
        </Link>
      </p>
      <p>
        <Link to="/fitness" className={classes.button}>
          <MdDirectionsRun size={18} />
          Fitness
        </Link>
      </p>
    </header>
  );
}

export default FitnessHeader;
