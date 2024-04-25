import React from 'react'

export default function BmiIndicator() {

    const getIndicatorPosition = ({ bmiValue }) => {

       if(bmiValue){
         
        if (bmiValue < 18.5) {
            return 0; // Underweight
          } else if (bmiValue < 25) {
            return 50; // Normal weight
          } else if (bmiValue < 30) {
            return 100; // Overweight
          } else {
            return 150; // Obese
          }
       }
      };


    return (
        <div>

<div className="bmi-category-indicator">
      <svg width="200" height="100">
        {/* Draw the semicircle */}
        <path
          d="M 20 50 A 80 80 0 0 1 180 50"
          fill="none"
          stroke="#ccc"
          strokeWidth="10"
        />
        {/* Draw the indicator line */}
        <line
          x1="20"
          y1="50"
          x2="180"
          y2="50"
          stroke="#007bff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${getIndicatorPosition()} 150`}
        />
      </svg>
    </div>
            
        </div>
    )
}
