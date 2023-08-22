import React, { useState } from "react";
import "../assets/css/BMRCalculator.css";
import Tdee from "./Tdee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const BMRCalculator = ({ bmr, bmiValue }) => {
  const [tdee, settdee] = useState(false);
  const showTdee = () => [settdee(!tdee)];
  return (
    <div style={{ color: "white" }}>
      <p className="callout-info alert alert-info alert-dismissible fade show container mt-3 text-center">
        BMI : {bmiValue.toFixed(1)} BMR :{bmr.toFixed(1)}
      </p>
      <div
        className={`bmr-button-container ${tdee ? "text-end" : "text-start"}`}
      >
        {tdee ? (
          <>
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{ color: "#fff", marginLeft: "20px", fontSize: "32px" }}
              onClick={showTdee}
            />
          </>
        ) : (
          <div className="open">
            <p>Find Your TDEE</p>
            <FontAwesomeIcon
              icon={faCircleDown}
              style={{ color: "#fff", marginLeft: "20px", fontSize: "32px" }}
              onClick={showTdee}
            />
          </div>
        )}
      </div>
      {tdee ? <Tdee bmr={bmr}></Tdee> : <></>}
    </div>
  );
};

export default BMRCalculator;
