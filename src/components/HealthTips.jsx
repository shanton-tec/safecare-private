import React from "react";
import {
  FaAppleAlt,
  FaTint,
  FaWalking,
  FaBed,
  FaHeartbeat,
  FaLeaf
} from "react-icons/fa";

function HealthTips() {

  const tips = [
    {
      icon: <FaAppleAlt size={45} color="#22c55e" />,
      title: "Healthy Diet",
      tip: "Eat fresh fruits, vegetables, whole grains, and protein-rich foods every day."
    },
    {
      icon: <FaTint size={45} color="#3b82f6" />,
      title: "Stay Hydrated",
      tip: "Drink at least 8 glasses of water daily to maintain proper hydration."
    },
    {
      icon: <FaWalking size={45} color="#f97316" />,
      title: "Daily Exercise",
      tip: "Walk for 30 minutes every day to improve heart health and mobility."
    },
    {
      icon: <FaBed size={45} color="#8b5cf6" />,
      title: "Good Sleep",
      tip: "Sleep for 7–8 hours every night to help your body recover."
    },
    {
      icon: <FaHeartbeat size={45} color="#ef4444" />,
      title: "Heart Care",
      tip: "Monitor blood pressure regularly and avoid excess salt and sugar."
    },
    {
      icon: <FaLeaf size={45} color="#16a34a" />,
      title: "Mental Wellness",
      tip: "Practice meditation, spend time with family, and stay socially active."
    }
  ];

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
        <h1>❤️ Health Tips</h1>

        <p>
          Daily wellness recommendations for a healthier and happier life.
        </p>

      </div>

      {/* Tips Grid */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px"
        }}
      >

        {tips.map((item, index) => (

          <div
            key={index}
            className="feature-card"
          >

            {item.icon}

            <h2>{item.title}</h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.7"
              }}
            >
              {item.tip}
            </p>

          </div>

        ))}

      </div>

      {/* Daily Reminder */}

      <div
        className="feature-card"
        style={{
          marginTop: "30px"
        }}
      >

        <h2>📅 Today's Health Checklist</h2>

        <br />

        <p>✅ Drink 8 glasses of water</p>

        <p>✅ Take medicines on time</p>

        <p>✅ Walk for at least 30 minutes</p>

        <p>✅ Eat fresh fruits and vegetables</p>

        <p>✅ Sleep for 7–8 hours</p>

        <p>✅ Spend time with family and friends</p>

      </div>

      {/* Emergency Advice */}

      <div
        className="feature-card"
        style={{
          marginTop: "25px",
          borderLeft: "6px solid #ef4444"
        }}
      >

        <h2>🚨 Emergency Advice</h2>

        <br />

        <p>
          If you experience chest pain, severe dizziness, difficulty breathing,
          or a fall, press the <strong>SOS</strong> button immediately and
          contact your caregiver or emergency services.
        </p>

      </div>

    </div>
  );
}

export default HealthTips;