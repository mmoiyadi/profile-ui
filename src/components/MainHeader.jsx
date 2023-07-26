/* eslint-disable react/prop-types */
import { MdPostAdd, MdOutlinePerson, MdDirectionsRun, MdOutlineHome } from "react-icons/md";
import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

function MainHeader(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        {props.children}
        <MdOutlinePerson />
        Profile
      </h1>
      
      <p>
        <Link to="/create-post" className={classes.button} >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
      <p>
        <Link to="/fitness" className={classes.button} >
          <MdDirectionsRun size={18} />
          Fitness
        </Link>
      </p>
      <p>
        <Link to="/" className={classes.button} >
          <MdOutlineHome size={18} />
          Home
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
