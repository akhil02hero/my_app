import React, { useState } from "react";
import "../assets/css/BMICalculator.css";
import BMRCalculator from "./BMRCalculator";

const BMICalculator = () => {
  const [unit, setUnit] = useState("standard");
  const [weight, setWeight] = useState("");
  const [bmiValue, setbmiValue] = useState(0);
  const [bmr, setbmr] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [height, setHeight] = useState("");
  const [age, setAge] = useState(0);

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const calculateBmi = () => {
    if (unit === "standard") {
      const value = (weight / height ** 2) * 703;
      setbmiValue(value);
    } else if (unit === "metrics") {
      const value = weight / (height / 100) ** 2;
      setbmiValue(value);
    }
    setbmr(10 * weight + 6.25 * height - 5 * age + 5);
  };

  const onButtonFocused = () => {
    setButtonClicked(true);
  };

  const onButtonBlur = () => {
    setButtonClicked(false);
  };

  return (
    <>
      <div className="caclulator-container">
        <div className="bmi-calculator">
          <div className="radio-container">
            <div className="radios">
              <span
                className={`glider ${
                  unit === "standard" ? "glider-standard" : "glider-metric"
                }`}
              ></span>
              <label className="standard radio-label">
                <input
                  type="radio"
                  id="standard"
                  value="standard"
                  checked={unit === "standard"}
                  onChange={handleUnitChange}
                />
                Standard
              </label>
              <label className="metrics radio-label">
                <input
                  type="radio"
                  id="metrics"
                  value="metrics"
                  checked={unit === "metrics"}
                  onChange={handleUnitChange}
                />
                Metrics
              </label>
            </div>
          </div>
          <div className="bmi-form">
            <div className="bmi-row row">
              <label className="bmi-input-label col-2">Weight: </label>
              <input
                type="number"
                className="bmi-input col-6"
                value={weight}
                onChange={handleWeightChange}
              />
              <p className="col-2">{unit === "standard" ? "lbs" : "kg"}</p>
            </div>

            <div className="bmi-row row">
              <label className="bmi-input-label col-2">Height:</label>
              <input
                type="number"
                className="bmi-input col-6"
                value={height}
                onChange={handleHeightChange}
              />
              <p className="col-2">{unit === "standard" ? "in" : "cm"}</p>
            </div>

            <div className="bmi-row row">
              <label className="bmi-input-label col-2">Age: </label>
              <input
                type="number"
                className="bmi-input col-6"
                value={age}
                onChange={handleAgeChange}
              />
              <p className="col-2">Years</p>
            </div>

            <div>
              <button
                className={`bubbly-button ${buttonClicked ? "animate" : ""}`}
                type="button"
                onMouseEnter={onButtonFocused}
                onMouseOut={onButtonBlur}
                onClick={calculateBmi}
              >
                Calculate BMI
              </button>
            </div>
          </div>
        </div>
        {bmiValue > 0 ? (
          <BMRCalculator bmiValue={bmiValue} bmr={bmr}></BMRCalculator>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default BMICalculator;
