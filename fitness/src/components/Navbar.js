import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import GlassofWater from "../images/glass-of-water.png";
import House from "../images/house_619032.png";
import Calculator from "../images/calculator.png";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="logo ">
        <Link to="/">My Fitness</Link>
      </div>
      <ul className="nav-links">
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
          <Link className="home-link" to="/">
            Home
          </Link>
        </div>

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
          <Link to="/waterlevel">WaterTracker</Link>
        </div>
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
          <Link to="/fitnesscalc">Fitness Calculators</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
