import React, { useState } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaMicrophone,
  FaHeartbeat,
  FaPills,
  FaAppleAlt
} from "react-icons/fa";

function AIChatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I am ElderShield AI. How can I help you today?"
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: input
    };

    let reply =
      "I'm here to assist with health tips, medicines, diet, and emergency guidance.";

    const msg = input.toLowerCase();

    if (msg.includes("medicine"))
      reply = "💊 Please take medicines at the prescribed time.";

    if (msg.includes("water"))
      reply = "💧 Drink at least 8 glasses of water every day.";

    if (msg.includes("exercise"))
      reply = "🏃 Walk for 30 minutes daily to stay active.";

    if (msg.includes("emergency"))
      reply = "🚨 Press the SOS button immediately and contact your caregiver.";

    if (msg.includes("diet"))
      reply = "🥗 Eat fruits, vegetables, whole grains, and protein-rich food.";

    if (msg.includes("bp"))
      reply = "🩸 Maintain a healthy diet, reduce salt intake, and monitor your blood pressure regularly.";

    setMessages([
      ...messages,
      userMessage,
      {
        sender: "bot",
        text: reply
      }
    ]);

    setInput("");
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "25px",
        padding: "25px",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "20px"
        }}
      >
        <FaRobot
          size={45}
          color="#2563eb"
        />

        <div>
          <h2 style={{ margin: 0 }}>
            ElderShield AI
          </h2>

          <p
            style={{
              color: "#64748b"
            }}
          >
            Smart Health Assistant
          </p>
        </div>
      </div>

      {/* Suggestions */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px"
        }}
      >
        <button
          className="primary-btn"
          onClick={() => setInput("Medicine")}
        >
          <FaPills /> Medicine
        </button>

        <button
          className="primary-btn"
          onClick={() => setInput("Diet")}
        >
          <FaAppleAlt /> Diet
        </button>

        <button
          className="primary-btn"
          onClick={() => setInput("Exercise")}
        >
          <FaHeartbeat /> Exercise
        </button>

        <button
          className="primary-btn"
          onClick={() => setInput("Emergency")}
        >
          🚨 Emergency
        </button>
      </div>

      {/* Chat Area */}

      <div
        style={{
          height: "420px",
          overflowY: "auto",
          background: "#f8fafc",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "20px"
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.sender === "user"
                  ? "flex-end"
                  : "flex-start",
              marginBottom: "15px"
            }}
          >
            <div
              style={{
                background:
                  msg.sender === "user"
                    ? "#2563eb"
                    : "#e2e8f0",
                color:
                  msg.sender === "user"
                    ? "white"
                    : "black",
                padding: "14px 18px",
                borderRadius: "18px",
                maxWidth: "70%"
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}

      <div
        style={{
          display: "flex",
          gap: "10px"
        }}
      >
        <input
          className="input-box"
          placeholder="Ask ElderShield AI..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
        />

        <button
          className="primary-btn"
          onClick={sendMessage}
        >
          <FaPaperPlane />
        </button>

        <button className="primary-btn">
          <FaMicrophone />
        </button>
      </div>
    </div>
  );
}

export default AIChatbot;