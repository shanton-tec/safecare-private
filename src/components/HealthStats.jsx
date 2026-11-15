import React from "react";
import {
  FaHeartbeat,
  FaTint,
  FaThermometerHalf,
  FaWeight,
  FaLungs,
  FaWalking
} from "react-icons/fa";

function HealthStats() {

  const card = {
    background: "#fff",
    borderRadius: "20px",
    padding: "25px",
    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
    textAlign: "center"
  };

  const stats = [
    {
      icon: <FaHeartbeat size={45} color="#ef4444" />,
      title: "Heart Rate",
      value: "72 BPM",
      status: "Normal ❤️"
    },
    {
      icon: <FaTint size={45} color="#2563eb" />,
      title: "Blood Pressure",
      value: "120 / 80",
      status: "Healthy"
    },
    {
      icon: <FaThermometerHalf size={45} color="#f97316" />,
      title: "Temperature",
      value: "36.8°C",
      status: "Normal"
    },
    {
      icon: <FaWeight size={45} color="#22c55e" />,
      title: "BMI",
      value: "22.1",
      status: "Healthy"
    },
    {
      icon: <FaLungs size={45} color="#8b5cf6" />,
      title: "Oxygen",
      value: "98%",
      status: "Excellent"
    },
    {
      icon: <FaWalking size={45} color="#0ea5e9" />,
      title: "Steps",
      value: "4521",
      status: "Today's Walk"
    }
  ];

  return (
    <div>

      <h1
        style={{
          marginBottom: "25px"
        }}
      >
        ❤️ Health Statistics
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px"
        }}
      >

        {stats.map((item, index) => (

          <div
            key={index}
            style={card}
          >

            {item.icon}

            <h2>{item.title}</h2>

            <h1
              style={{
                color: "#2563eb"
              }}
            >
              {item.value}
            </h1>

            <p
              style={{
                color: "#64748b"
              }}
            >
              {item.status}
            </p>

          </div>

        ))}

      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)"
        }}
      >

        <h2>📈 Overall Health Summary</h2>

        <br />

        <p>❤️ Heart Rate : Stable</p>

        <p>🩸 Blood Pressure : Normal</p>

        <p>🌡 Body Temperature : Normal</p>

        <p>🫁 Oxygen Level : Excellent</p>

        <p>💧 Hydration : Good</p>

        <p>🏃 Daily Activity : Moderate</p>

      </div>

    </div>
  );
}

export default HealthStats;