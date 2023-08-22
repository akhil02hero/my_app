import React from "react";
import equipment from "../images/equipment.png";
import "../assets/css/Home.css";
import ScrollBar from "../context/ScrollBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-opening-message">
          <b className="gradient-text big-text">Explore Fitness</b>
          <div>
            <p className="text-two">
              Let’s get fit together and let’s have a strong body
            </p>
            <p
              className="small-text"
              style={{
                paddingTop: "10px",
                lineHeight: "30px",
                width: "50ch",
              }}
            >
              We are here to help you to make a healthy body and mind through
              the power of fitness
            </p>
          </div>
        </div>
        <div className="image-equipment-container">
          <img className="equipment" src={equipment} alt="equipment"></img>
        </div>
        <p className="huge-text">
          WE ARE SO HAPPY FOR YOU TO START AN AMAZING JOURNEY WITH US.
        </p>

        <div className="click-button-redirect1 text-center">
          <ScrollBar />
        </div>
        <div className="demo-container" id="demo-container">
          <div className="water-tracker-demo">
            <div className="water_bottle">
              <div className="bottle-caps">
                <div className="bottle_cap"></div>
              </div>
              <div className="water_level">
                <div className="waters"></div>
              </div>
            </div>
            <p
              style={{
                width: "520px",
                height: "300px",
                position: "absolute",
                top: "100px",
                left: "200px",
              }}
            >
              Stay hydrated by using our custom WaterTracker designed
              exclusively for your needs. Keep track of your water intake
              effortlessly and make sure you're getting enough hydration
              throughout the day.
              <br />
              <button className="go-to-water-level">
                <Link to="/waterlevel">Water Tracker</Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
