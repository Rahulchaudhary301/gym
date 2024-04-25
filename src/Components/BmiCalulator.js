import React, { useEffect, useState } from "react";
import BmiIndicator from "./BmiIndicator";
import { FaArrowUp } from "react-icons/fa6";

export default function BmiCalulator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to meters

    if (weightInKg > 0 && heightInM > 0) {
      const bmi = weightInKg / (heightInM * heightInM);
      setBmiResult(bmi.toFixed(1)); // Display BMI rounded to 1 decimal place
    } else {
      setBmiResult(null); // Reset BMI result if weight or height is invalid
    }
  };

  const getBMIStatus = () => {
    if (bmiResult == null) {
      return "";
    }

    else if (bmiResult < 18.5) {
      return "Normal weight";
    }

    else if (bmiResult < 25) {
      return "Normal weight";
    } else if (bmiResult < 30) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  };


  const clearr = () => {
    document.querySelector('.indicator').classList.add('withmm')
    setBmiResult(null)
  }



  return (
    <div className="bmical">
      <h1>BMI Calculator</h1>
      <div className="BmiContainer">
        <div className="bmiBody">
          <div className="bmiInputData">
            <div className="BMICalculator">

              <div>
                <label className="llb">Weight (kg):</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <label className="llb">Height (cm):</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="bmibutt">
               <button className="btn1 bmii gebut" onClick={calculateBMI}>Calculate BMI</button>
              </div>
            </div>
          </div>



          <div className="resulbmibody">
            <h2>Result</h2>
            <p>Status:<span> {getBMIStatus()}</span></p>
            <div className="bbb">
              <div className="bmi-category-indicator">
                <div
                  className={`indicator ${getBMIStatus().toLowerCase()}`}
                  style={{ width: `${(bmiResult - 15) * 4}%` }}
                ></div>
              </div>
            </div>



            {/* <div className="resulIndicator">
              <div className="indi">

              <div className="indicc">
                <FaArrowUp />
              </div>

              </div>
              

            </div> */}




          </div>
        </div>
      </div>
    </div>
  );
}
