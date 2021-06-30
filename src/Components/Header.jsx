import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core/styles";

import Title from "../img/title.png";
import "./CSS/Header.scss";

const Style = makeStyles({
  btn: {
    backgroundColor: "rgb(219, 107, 26)",
    fontWeight: "bold",
    color: "white",
    margin: "0 .5rem",
    fontSize: "inherit",
    "&:hover": {
      color: "black",
    },
  },
});

const Header = () => {
  const classes = Style();
  return (
    <div className="header_container">
      <div className="header_intro">
        <div className="book">
          <Button
            variant="contained"
            className={classes.btn}
            startIcon={<LocationOnIcon />}
          >
            Locate US
          </Button>
          <Button variant="contained" className={classes.btn}>
            BOOK NOW
          </Button>
        </div>
        <div className="title">
          <img src={Title} alt="ERROR" />
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" className="navlink" exact activeClassName="navlinkactive">
          {" "}
          Home{" "}
        </NavLink>{" "}
        <div className="space">|</div>
        <NavLink to="/menu" className="navlink" activeClassName="navlinkactive">
          {" "}
          Menus{" "}
        </NavLink>{" "}
        <div className="space">|</div>
        <NavLink to="/timing" className="navlink" activeClassName="navlinkactive">
          {" "}
          Timing{" "}
        </NavLink>{" "}
        <div className="space">|</div>
        <NavLink to="/about" className="navlink" activeClassName="navlinkactive">
          {" "}
          About Us{" "}
        </NavLink>{" "}
        <div className="space">|</div>
        <NavLink to="/contact" className="navlink" activeClassName="navlinkactive">
          {" "}
          Contact Us{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
