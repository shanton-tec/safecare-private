import React, { useState } from "react";
import {
  FaUserMd,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
  FaHospital,
  FaCheckCircle
} from "react-icons/fa";

function DoctorAppointment() {

  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      speciality: "General Physician",
      hospital: "City Care Hospital",
      phone: "+91 9876543210"
    },
    {
      id: 2,
      name: "Dr. Raj Kumar",
      speciality: "Cardiologist",
      hospital: "Apollo Hospital",
      phone: "+91 9876543222"
    },
    {
      id: 3,
      name: "Dr. Anitha",
      speciality: "Neurologist",
      hospital: "Government Hospital",
      phone: "+91 9876543333"
    }
  ];

  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const bookAppointment = () => {
    if (!selectedDoctor || !date || !time) {
      setMessage("⚠ Please fill all fields.");
      return;
    }

    setMessage(
      `✅ Appointment booked with ${selectedDoctor} on ${date} at ${time}.`
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
          <FaUserMd /> Doctor Appointment
        </h1>

        <p>
          Book appointments with doctors quickly and easily.
        </p>
      </div>

      {/* Doctor Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}
      >

        {doctors.map((doctor) => (

          <div
            key={doctor.id}
            className="feature-card"
          >

            <FaUserMd
              size={45}
              color="#2563eb"
            />

            <h2>{doctor.name}</h2>

            <p>{doctor.speciality}</p>

            <p>
              <FaHospital />
              {" "}
              {doctor.hospital}
            </p>

            <a href={`tel:${doctor.phone}`}>
              <button className="primary-btn">
                <FaPhoneAlt />
                {" "}
                Call Doctor
              </button>
            </a>

          </div>

        ))}

      </div>

      {/* Appointment Form */}

      <div
        className="feature-card"
      >

        <h2>📅 Book Appointment</h2>

        <br />

        <select
          className="input-box"
          value={selectedDoctor}
          onChange={(e) =>
            setSelectedDoctor(e.target.value)
          }
        >
          <option value="">
            Select Doctor
          </option>

          {doctors.map((doctor) => (
            <option
              key={doctor.id}
              value={doctor.name}
            >
              {doctor.name}
            </option>
          ))}

        </select>

        <br /><br />

        <input
          type="date"
          className="input-box"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        <br /><br />

        <input
          type="time"
          className="input-box"
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
        />

        <br /><br />

        <button
          className="primary-btn"
          onClick={bookAppointment}
        >
          <FaCalendarAlt />
          {" "}
          Book Appointment
        </button>

        {message && (

          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#dcfce7",
              color: "#166534",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <FaCheckCircle />
            {message}
          </div>

        )}

      </div>

      {/* Upcoming Appointment */}

      <div
        className="feature-card"
        style={{
          marginTop: "25px"
        }}
      >

        <h2>⏰ Upcoming Appointment</h2>

        <br />

        <p>
          <FaUserMd />
          {" "}
          Dr. Priya Sharma
        </p>

        <p>
          <FaCalendarAlt />
          {" "}
          12 August 2026
        </p>

        <p>
          <FaClock />
          {" "}
          10:30 AM
        </p>

      </div>

    </div>
  );
}

export default DoctorAppointment;