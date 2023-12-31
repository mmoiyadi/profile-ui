/* eslint-disable react/prop-types */
import { MdPostAdd, MdOutlinePerson, MdOutlineHome } from "react-icons/md";
import {FaHeartbeat, FaBookReader} from "react-icons/fa";
import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";
import ProfilePic from "./ProfilePic";

function MainHeader(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        {props.children}
        <MdOutlinePerson />
        <ProfilePic />
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
          <FaHeartbeat size={18} />
          Fitness
        </Link>
      </p>
      <p>
        <Link to="/reading" className={classes.button} >
          <FaBookReader size={18} />
          Reading
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
