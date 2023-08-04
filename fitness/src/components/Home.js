import React from "react";
import equipment from "../images/equipment.png";
import "./Home.css";

const Home = () => {
  return (
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
            We are here to help you to make a healthy body and mind through the
            power of fitness
          </p>
        </div>
      </div>
      <div className="image-equipment-container">
        <img className="equipment" src={equipment} alt="equipment"></img>
      </div>
      <p className="huge-text">
        WE ARE SO HAPPY FOR YOU TO START AN AMAZING JOURNEY WITH US.
      </p>
    </div>
  );
};

export default Home;
