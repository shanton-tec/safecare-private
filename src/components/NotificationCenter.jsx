import React, { useState } from "react";
import {
  FaBell,
  FaPills,
  FaTint,
  FaUserMd,
  FaExclamationTriangle,
  FaCheckCircle
} from "react-icons/fa";

function NotificationCenter() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: <FaPills color="#22c55e" />,
      title: "Medicine Reminder",
      message: "Take BP Tablet at 8:00 AM",
      time: "5 mins ago",
      read: false
    },
    {
      id: 2,
      icon: <FaTint color="#3b82f6" />,
      title: "Water Reminder",
      message: "Drink one glass of water.",
      time: "20 mins ago",
      read: false
    },
    {
      id: 3,
      icon: <FaUserMd color="#8b5cf6" />,
      title: "Doctor Appointment",
      message: "Appointment Tomorrow - 10:30 AM",
      time: "Today",
      read: true
    },
    {
      id: 4,
      icon: <FaExclamationTriangle color="#ef4444" />,
      title: "Emergency Alert",
      message: "SOS System Ready",
      time: "Now",
      read: true
    }
  ]);

  const markRead = (id) => {
    setNotifications(
      notifications.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
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
        <h1>
          <FaBell /> Notifications
        </h1>

        <p>
          Stay updated with medicines, health,
          appointments and emergency alerts.
        </p>
      </div>

      {/* Notification List */}

      {notifications.map((item) => (

        <div
          key={item.id}
          style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "20px",
            marginBottom: "18px",
            boxShadow:
              "0 8px 20px rgba(0,0,0,.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >

          <div
            style={{
              display: "flex",
              gap: "18px",
              alignItems: "center"
            }}
          >

            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: "#f1f5f9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "22px"
              }}
            >
              {item.icon}
            </div>

            <div>

              <h3 style={{ margin: 0 }}>
                {item.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  marginTop: "8px"
                }}
              >
                {item.message}
              </p>

              <small
                style={{
                  color: "#94a3b8"
                }}
              >
                {item.time}
              </small>

            </div>

          </div>

          {!item.read ? (
            <button
              className="primary-btn"
              onClick={() =>
                markRead(item.id)
              }
            >
              <FaCheckCircle />
              {" "}Mark Read
            </button>
          ) : (
            <span
              style={{
                color: "#22c55e",
                fontWeight: "bold"
              }}
            >
              ✔ Read
            </span>
          )}

        </div>

      ))}

    </div>
  );
}

export default NotificationCenter;