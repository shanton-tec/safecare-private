import React, { useState } from "react";
import {
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaTint,
  FaHeartbeat,
  FaUserEdit,
  FaCamera
} from "react-icons/fa";

function Profile() {

  const [profile, setProfile] = useState({
    name: "Shanton",
    age: "21",
    gender: "Male",
    phone: "+91 9876543210",
    email: "shanton@example.com",
    blood: "O+",
    emergency: "+91 9876543210"
  });

  return (
    <div>

      {/* Header */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#4f46e5)",
          color: "white",
          borderRadius: "25px",
          padding: "30px",
          marginBottom: "25px",
          display: "flex",
          alignItems: "center",
          gap: "25px"
        }}
      >

        <div
          style={{
            position: "relative"
          }}
        >

          <FaUserCircle
            size={110}
          />

          <button
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              border: "none",
              background: "#fff",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer"
            }}
          >
            <FaCamera color="#2563eb" />
          </button>

        </div>

        <div>

          <h1>{profile.name}</h1>

          <h3>Care Receiver</h3>

          <p>ElderShield Health Profile</p>

        </div>

      </div>

      {/* Profile Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px"
        }}
      >

        {/* Personal */}

        <div
          className="feature-card"
        >

          <h2>👤 Personal Details</h2>

          <br />

          <p><strong>Name:</strong> {profile.name}</p>

          <p><strong>Age:</strong> {profile.age}</p>

          <p><strong>Gender:</strong> {profile.gender}</p>

          <p>

            <FaPhoneAlt />

            {" "}

            {profile.phone}

          </p>

          <p>

            <FaEnvelope />

            {" "}

            {profile.email}

          </p>

        </div>

        {/* Medical */}

        <div
          className="feature-card"
        >

          <h2>❤️ Medical Details</h2>

          <br />

          <p>

            <FaTint color="red" />

            Blood Group :

            <strong>

              {" "}

              {profile.blood}

            </strong>

          </p>

          <p>

            <FaHeartbeat color="red" />

            Heart Rate :

            <strong>

              {" "}

              72 BPM

            </strong>

          </p>

          <p>

            Blood Pressure :

            <strong>

              {" "}

              120 / 80

            </strong>

          </p>

          <p>

            Temperature :

            <strong>

              {" "}

              36.8°C

            </strong>

          </p>

        </div>

        {/* Emergency */}

        <div
          className="feature-card"
        >

          <h2>🚨 Emergency Contact</h2>

          <br />

          <p>

            Primary Contact

          </p>

          <h3>

            {profile.emergency}

          </h3>

          <button
            className="primary-btn"
          >

            📞 Call

          </button>

        </div>

        {/* Health Summary */}

        <div
          className="feature-card"
        >

          <h2>

            📊 Health Summary

          </h2>

          <br />

          <p>

            ✅ Heart Rate Stable

          </p>

          <p>

            ✅ Blood Pressure Normal

          </p>

          <p>

            ✅ Hydration Good

          </p>

          <p>

            ✅ Daily Activity Moderate

          </p>

          <button
            className="primary-btn"
          >

            <FaUserEdit />

            {" "}

            Edit Profile

          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;