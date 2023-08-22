import React, { useState, useEffect } from "react";
import "../assets/css/WaterTracker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleRight,
  faPen,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import WaterTrackerDetail from "./WaterTrackerDetail";

const WaterTracker = () => {
  const [waterData, setWaterData] = useState([]);
  const [id, setId] = useState(null);
  const [editableElementId, setEditableElementId] = useState(false);
  const [waterLevel, setWaterLevel] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputMaxValue, setInputMaxValue] = useState("");
  const [maxWaterLevel, setMaxWaterLevel] = useState(2000);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleMaxInputChange = (e) => {
    setInputMaxValue(e.target.value);
  };

  const handleButtonClick = () => {
    const inputValueInt = parseInt(inputValue, 10);
    if (!isNaN(inputValueInt)) {
      const time = new Date();
      setWaterData([
        ...waterData,
        {
          id: waterData.length + 1,
          time: time.toLocaleTimeString(),
          date: time.toLocaleDateString(),
          water: inputValueInt,
        },
      ]);
    }
  };

  useEffect(() => {
    console.log("waterData:", waterData);
    const sum = waterData.reduce((accumulator, currentObj) => {
      return accumulator + currentObj.water;
    }, 0);
    setWaterLevel(sum);
  }, [waterData]);

  const handleMaxButtonClick = () => {
    const inputMaxValueInt = parseInt(inputMaxValue, 10);
    const clampedValue = Math.min(Math.max(inputMaxValueInt, 1000), 5000);
    setMaxWaterLevel(clampedValue);
    setInputMaxValue(clampedValue.toString());
  };

  const handleWaterChange = (id, value) => {
    // Find the object in the waterData array based on its id
    const updatedData = waterData.map((element) =>
      element.id === id ? { ...element, water: parseInt(value) } : element
    );
    setWaterData(updatedData);
  };

  const handleEditClick = (i, id) => {
    setId(i);
    setEditableElementId(id);
  };

  const isWaterLevelFull = waterLevel >= maxWaterLevel;
  const waterLevelPercentage = (waterLevel * 100) / maxWaterLevel;

  return (
    <div className="WaterLevelTracker">
      <p className="water-message">
        {isWaterLevelFull
          ? "You reached the maximum water level, Great work"
          : `Let's Go you need to drink ${maxWaterLevel - waterLevel} ml`}
      </p>
      <div className="waterbottle">
        <div className="bottle-cap">
          <div className="bottlecap"></div>
        </div>
        <div className="waterlevel">
          <div
            className="water"
            style={{
              height: isWaterLevelFull ? "100%" : `${waterLevelPercentage}%`,
            }}
          ></div>
        </div>
      </div>
      <br />
      <div className="input-form">
        <div className="water-level-input">
          <label className="custom-label">Drink More : </label>
          <input
            type="number"
            className="custom-input"
            value={inputValue}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon
            icon={faCircleRight}
            className="iconposition"
            style={{ color: "#fff", marginLeft: "20px" }}
            onClick={handleButtonClick}
          />
        </div>
        <br />
        <div className="max-water-level-input">
          <label className="custom-label"> Water Level : </label>
          <input
            type="number"
            className="custom-input"
            value={inputMaxValue}
            onChange={handleMaxInputChange}
          />
          <FontAwesomeIcon
            icon={faPen}
            className="iconposition"
            style={{ color: "#fff", marginLeft: "20px" }}
            onClick={handleMaxButtonClick}
          />
        </div>
      </div>
      <br />

      <p> This is Water Section</p>

      {waterData.length > 0 ? (
        waterData.map((water) => (
          <WaterTrackerDetail
            faCheck={faCheck}
            faPen={faPen}
            waterData={waterData}
            id={id}
            water={water}
            editableElementId={editableElementId}
            handleWaterChange={handleWaterChange}
            handleEditClick={handleEditClick}
          ></WaterTrackerDetail>
        ))
      ) : (
        <p className="callout-info alert alert-info alert-dismissible fade show container text-center">
          No Data Found
        </p>
      )}

      {inputMaxValue >= 5001 && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>You Exceeded your Human Limit!</strong>
        </div>
      )}
    </div>
  );
};

export default WaterTracker;
