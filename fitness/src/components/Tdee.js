import React from "react";
import "../assets/css/Tdee.css";

const Tdee = ({ bmr }) => {
  const datas = [
    { name: "Sedentary", value: 1.2 },
    { name: "Lightly Active", value: 1.375 },
    { name: "Moderatively Active", value: 1.55 },
    { name: "Very Active", value: 1.725 },
    { name: "Super Active", value: 1.9 },
  ];

  return (
    <div className="tdee-container">
      <div className="tdee-headings row">
        <span className="col-6">
          <b>Exercise</b>
        </span>
        <span className="col-6">
          <b>Calorie Intake</b>
        </span>
      </div>

      {datas.map((el) => (
        <>
          <br />
          <div className="row">
            <div className="col-6">{el.name}</div>
            <div className="col-6">{bmr * el.value}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Tdee;
