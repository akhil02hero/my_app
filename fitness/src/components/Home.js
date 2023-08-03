import React from "react";
import dumbbell from "../images/dumbbell.png";
import equipment from "../images/equipment.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="dumbbell-fall">
        <img
          style={{
            width: "64px",
            aspectRatio: 1,
          }}
          src={dumbbell}
          alt="Dumbbell"
        />
      </div>
      <div className="home-container">
        <div className="home-opening-message">
          <b className="gradient-text big-text">Explore Fitness</b>
          <div style={{}}>
            <p className="normal-text"> GET HEALTHY BODY</p>
            <p className="normal-text"> WITH PROPER KNOWLEDGE</p>
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
      </div>
    </>
  );
};

export default Home;
