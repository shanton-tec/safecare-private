import React, { useState, useEffect } from "react";
import {
  FaCapsules,
  FaPlus,
  FaTrash,
  FaClock
} from "react-icons/fa";

function MedicineReminder() {
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("medicines")) || []
  );

  useEffect(() => {
    localStorage.setItem("medicines", JSON.stringify(list));
  }, [list]);

  const addMedicine = () => {
    if (!medicine || !time) return;

    setList([
      ...list,
      {
        id: Date.now(),
        medicine,
        time,
        status: "Pending"
      }
    ]);

    setMedicine("");
    setTime("");
  };

  const removeMedicine = (id) => {
    setList(list.filter((m) => m.id !== id));
  };

  const markCompleted = (id) => {
    setList(
      list.map((m) =>
        m.id === id
          ? { ...m, status: "Completed" }
          : m
      )
    );
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "25px",
        padding: "30px",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)"
      }}
    >
      <h2 style={{ marginBottom: "25px" }}>
        💊 Medicine Reminder
      </h2>

      <input
        className="input-box"
        placeholder="Medicine Name"
        value={medicine}
        onChange={(e) =>
          setMedicine(e.target.value)
        }
      />

      <br />
      <br />

      <input
        className="input-box"
        type="time"
        value={time}
        onChange={(e) =>
          setTime(e.target.value)
        }
      />

      <br />
      <br />

      <button
        className="primary-btn"
        onClick={addMedicine}
      >
        <FaPlus /> Add Medicine
      </button>

      <hr style={{ margin: "30px 0" }} />

      {list.length === 0 && (
        <div
          style={{
            textAlign: "center",
            color: "#64748b"
          }}
        >
          <FaCapsules
            size={70}
            color="#94a3b8"
          />
          <h3>No Medicines Added</h3>
        </div>
      )}

      {list.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#f8fafc",
            padding: "18px",
            borderRadius: "18px",
            marginBottom: "18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <h3 style={{ margin: 0 }}>
              💊 {item.medicine}
            </h3>

            <p
              style={{
                marginTop: "8px",
                color: "#64748b"
              }}
            >
              <FaClock /> {item.time}
            </p>

            <span
              style={{
                background:
                  item.status === "Completed"
                    ? "#dcfce7"
                    : "#fef3c7",
                color:
                  item.status === "Completed"
                    ? "#166534"
                    : "#92400e",
                padding: "5px 12px",
                borderRadius: "20px",
                fontSize: "13px"
              }}
            >
              {item.status}
            </span>
          </div>

          <div>
            {item.status !== "Completed" && (
              <button
                className="primary-btn"
                style={{
                  marginRight: "10px"
                }}
                onClick={() =>
                  markCompleted(item.id)
                }
              >
                ✔ Taken
              </button>
            )}

            <button
              className="primary-btn"
              style={{
                background: "#ef4444"
              }}
              onClick={() =>
                removeMedicine(item.id)
              }
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MedicineReminder;