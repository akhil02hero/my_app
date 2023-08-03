import React, { useState } from "react";

const BmiCalculator = () => {
  const [unit, setUnit] = useState("standard");
  const [weight, setWeight] = useState("");
  const [bmiValue, setbmiValue] = useState(0);
  const [bmr, setbmr] = useState(0);
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

  return (
    <div>
      <h2>BMI Calculator</h2>
      <form>
        <div>
          <label>
            <input
              type="radio"
              value="standard"
              checked={unit === "standard"}
              onChange={handleUnitChange}
            />
            Standard Units
          </label>
          <label>
            <input
              type="radio"
              value="metrics"
              checked={unit === "metrics"}
              onChange={handleUnitChange}
            />
            Metrics Units
          </label>
        </div>

        <div>
          <label>
            Weight:{" "}
            <input type="number" value={weight} onChange={handleWeightChange} />
            {unit === "standard" ? "lbs" : "kg"}
          </label>
        </div>

        <div>
          <label>
            Height:{" "}
            <input type="number" value={height} onChange={handleHeightChange} />
            {unit === "standard" ? "inches" : "cm"}
          </label>
        </div>

        <div>
          <label>
            Age: <input type="number" value={age} onChange={handleAgeChange} />
          </label>
        </div>

        <div>
          <button type="button" onClick={calculateBmi}>
            Calculate BMI
          </button>
        </div>
      </form>

      <p> Your BMI value is {Math.floor(bmiValue)}</p>
      <p> Your BMR value is {bmr}</p>

      <p>TDEE </p>
      <table>
        <tr style={{ background: "red" }}>
          <th>Exercise</th>
          <th>Calorie Intake Required</th>
        </tr>
        <tr>
          <td>Sedentary</td>
          <td>{bmr * 1.2}</td>
        </tr>
        <tr>
          <td>Lightly Active</td>
          <td>{bmr * 1.375}</td>
        </tr>
        <tr>
          <td>Moderatively Active</td>
          <td>{bmr * 1.55}</td>
        </tr>
        <tr>
          <td>Very Active</td>
          <td>{bmr * 1.725}</td>
        </tr>
        <tr>
          <td>Super Active</td>
          <td>{bmr * 1.9}</td>
        </tr>
      </table>
    </div>
  );
};

export default BmiCalculator;
