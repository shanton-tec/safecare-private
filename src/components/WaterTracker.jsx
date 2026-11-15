import React, { useState, useEffect } from "react";
import {
  FaTint,
  FaPlus,
  FaRedo,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

import "./WaterTracker.css";

function WaterTracker() {
  const DAILY_GOAL = 8;

  const [glasses, setGlasses] = useState(
    Number(localStorage.getItem("waterGlasses")) || 0
  );

  const [lastDrink, setLastDrink] = useState(
    localStorage.getItem("lastDrink") || "--:--"
  );

  useEffect(() => {
    localStorage.setItem("waterGlasses", glasses);
    localStorage.setItem("lastDrink", lastDrink);
  }, [glasses, lastDrink]);

  const addGlass = () => {
    if (glasses < DAILY_GOAL) {
      setGlasses(glasses + 1);
      setLastDrink(new Date().toLocaleTimeString());
    }
  };

  const resetTracker = () => {
    setGlasses(0);
    setLastDrink("--:--");
  };

  const progress = (glasses / DAILY_GOAL) * 100;

  return (
    <div className="feature-card fade">

      <div className="water-header">

        <div>
          <h1>💧 Water Tracker</h1>
          <p>Daily Hydration Monitor</p>
        </div>

        <FaTint
          size={60}
          color="#2563eb"
        />

      </div>

      <div className="water-grid">

        <div className="status-card">
          <FaTint
            size={35}
            color="#2563eb"
          />

          <div>
            <h3>Today's Intake</h3>
            <h2>{glasses} / {DAILY_GOAL}</h2>
          </div>
        </div>

        <div className="status-card">
          <FaClock
            size={35}
            color="#f97316"
          />

          <div>
            <h3>Last Drink</h3>
            <h2>{lastDrink}</h2>
          </div>
        </div>

      </div>

      <h3 style={{ marginTop: "25px" }}>
        Daily Progress
      </h3>

      <div className="water-progress">

        <div
          className="water-progress-fill"
          style={{
            width: `${progress}%`
          }}
        />

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px"
        }}
      >

        <strong>
          {Math.round(progress)}%
        </strong>

        <strong>
          Remaining: {DAILY_GOAL - glasses}
        </strong>

      </div>

      <div className="water-summary">

        <h2>Today's Summary</h2>

        <p>
          💧 Goal :
          <strong> 8 Glasses</strong>
        </p>

        <p>
          🥤 Drank :
          <strong> {glasses}</strong>
        </p>

        <p>
          🚰 Remaining :
          <strong> {DAILY_GOAL - glasses}</strong>
        </p>

      </div>

      <div className="water-buttons">

        <button
          className="primary-btn"
          onClick={addGlass}
        >

          <FaPlus />

          {" "}Add Glass

        </button>

        <button
          className="primary-btn"
          style={{
            background: "#ef4444"
          }}
          onClick={resetTracker}
        >

          <FaRedo />

          {" "}Reset

        </button>

      </div>

      {glasses === DAILY_GOAL && (

        <div className="goal-box">

          <FaCheckCircle
            size={40}
          />

          <br />
          <br />

          🎉 Congratulations!

          <br />

          Daily Goal Achieved

        </div>

      )}

    </div>
  );
}

export default WaterTracker;