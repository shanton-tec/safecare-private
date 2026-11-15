import React, { useState, useEffect } from "react";
import {
  FaSmile,
  FaMeh,
  FaFrown,
  FaLaughBeam,
  FaSadTear
} from "react-icons/fa";

function MoodTracker() {

  const [selectedMood, setSelectedMood] = useState("");

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("moodHistory")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "moodHistory",
      JSON.stringify(history)
    );
  }, [history]);

  const moods = [
    {
      emoji: <FaLaughBeam size={45} color="#16a34a" />,
      name: "Excellent",
      message: "Keep smiling! 😊"
    },
    {
      emoji: <FaSmile size={45} color="#22c55e" />,
      name: "Happy",
      message: "Have a wonderful day!"
    },
    {
      emoji: <FaMeh size={45} color="#eab308" />,
      name: "Neutral",
      message: "Take some rest and stay positive."
    },
    {
      emoji: <FaFrown size={45} color="#f97316" />,
      name: "Sad",
      message: "Talk with your family or friends."
    },
    {
      emoji: <FaSadTear size={45} color="#ef4444" />,
      name: "Very Sad",
      message: "Please reach out to your caregiver."
    }
  ];

  const saveMood = (mood) => {
    setSelectedMood(mood.name);

    const newEntry = {
      mood: mood.name,
      date: new Date().toLocaleString()
    };

    setHistory([newEntry, ...history]);
  };

  return (
    <div>

      {/* Header */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#4f46e5)",
          color: "white",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "25px"
        }}
      >
        <h1>😊 Mood Tracker</h1>

        <p>
          Track your emotional well-being every day.
        </p>
      </div>

      {/* Mood Selection */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}
      >

        {moods.map((mood) => (

          <div
            key={mood.name}
            className="feature-card"
            style={{ cursor: "pointer" }}
            onClick={() => saveMood(mood)}
          >

            {mood.emoji}

            <h3>{mood.name}</h3>

            <p>{mood.message}</p>

          </div>

        ))}

      </div>

      {/* Current Mood */}

      <div
        className="feature-card"
        style={{
          marginBottom: "25px"
        }}
      >

        <h2>Today's Mood</h2>

        <br />

        <h1
          style={{
            color: "#2563eb"
          }}
        >
          {selectedMood || "Not Selected"}
        </h1>

      </div>

      {/* Mood History */}

      <div className="feature-card">

        <h2>📅 Mood History</h2>

        <br />

        {history.length === 0 ? (

          <p>No mood records available.</p>

        ) : (

          history.map((item, index) => (

            <div
              key={index}
              style={{
                background: "#f8fafc",
                padding: "15px",
                borderRadius: "12px",
                marginBottom: "12px"
              }}
            >

              <strong>{item.mood}</strong>

              <br />

              <small>{item.date}</small>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default MoodTracker;