import React from "react";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";
import GlassofWater from "../images/glass-of-water.png";
import House from "../images/house_619032.png";
import Calculator from "../images/calculator.png";
import SmallProfile from "../images/smallprofile.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">My Fitness</Link>
      </div>
      <ul className="nav-links">
        <Link className="home-link" to="/">
          <div className="shaking-house">
            <img
              className="house-image"
              src={House}
              style={{
                width: "25px",
                aspectRatio: 1,
              }}
              alt="Home"
            />
            Home
          </div>
        </Link>
        <Link to="/waterlevel">
          <div className="shaking-water">
            <img
              className="water-image"
              src={GlassofWater}
              style={{
                width: "25px",
                aspectRatio: 1,
              }}
              alt="Water"
            />
            WaterTracker
          </div>
        </Link>
        <Link to="/fitnesscalc">
          <div className="shaking-calc">
            <img
              className="calc-image"
              src={Calculator}
              style={{
                width: "25px",
                aspectRatio: 1,
              }}
              alt="Water"
            />
            Fitness Calculators
          </div>
        </Link>
        <Link to="/about">
          <div className="shaking-calc">
            <img
              className="calc-image"
              src={SmallProfile}
              style={{
                width: "25px",
                aspectRatio: 1,
              }}
              alt="Water"
            />
            About
          </div>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
