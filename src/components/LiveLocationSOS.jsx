import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaLocationArrow,
  FaShareAlt,
  FaUsers,
  FaWifi,
  FaSatellite,
  FaCheckCircle
} from "react-icons/fa";

function LiveLocationSOS() {

  const [location] = useState({
    latitude: "10.7905° N",
    longitude: "78.7047° E",
    place: "Trichy, Tamil Nadu"
  });

  const shareLocation = () => {
    alert("📍 Live location shared with family members.");
  };

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps?q=${location.latitude},${location.longitude}`,
      "_blank"
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
          <FaMapMarkerAlt /> Live Location
        </h1>

        <p>
          Real-Time GPS Tracking & Emergency Location Sharing
        </p>
      </div>

      {/* Status Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "20px",
          marginBottom: "25px"
        }}
      >

        <div className="feature-card">

          <FaWifi
            size={40}
            color="#22c55e"
          />

          <h2>Wi-Fi</h2>

          <p>Connected</p>

        </div>

        <div className="feature-card">

          <FaSatellite
            size={40}
            color="#2563eb"
          />

          <h2>GPS</h2>

          <p>Signal Available</p>

        </div>

        <div className="feature-card">

          <FaCheckCircle
            size={40}
            color="#22c55e"
          />

          <h2>Status</h2>

          <p>Tracking Active</p>

        </div>

      </div>

      {/* Location Card */}

      <div
        className="feature-card"
      >

        <h2>📍 Current Location</h2>

        <br />

        <p>
          <strong>Latitude:</strong>
          {" "}
          {location.latitude}
        </p>

        <p>
          <strong>Longitude:</strong>
          {" "}
          {location.longitude}
        </p>

        <p>
          <strong>Location:</strong>
          {" "}
          {location.place}
        </p>

      </div>

      {/* Action Buttons */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px"
        }}
      >

        <div className="feature-card">

          <FaShareAlt
            size={40}
            color="#2563eb"
          />

          <h2>Share Location</h2>

          <button
            className="primary-btn"
            onClick={shareLocation}
          >
            Share with Family
          </button>

        </div>

        <div className="feature-card">

          <FaLocationArrow
            size={40}
            color="#22c55e"
          />

          <h2>Google Maps</h2>

          <button
            className="primary-btn"
            onClick={openGoogleMaps}
          >
            Open Maps
          </button>

        </div>

        <div className="feature-card">

          <FaUsers
            size={40}
            color="#8b5cf6"
          />

          <h2>Emergency Contacts</h2>

          <p>3 Family Members Connected</p>

        </div>

      </div>

      {/* Hardware */}

      <div
        className="feature-card"
        style={{
          marginTop: "25px"
        }}
      >

        <h2>🔌 Hardware Connection</h2>

        <br />

        <p>✅ ESP32 Connected</p>

        <p>✅ GPS Module Active</p>

        <p>✅ Wi-Fi Connected</p>

        <p>✅ Live Tracking Enabled</p>

      </div>

    </div>
  );
}

export default LiveLocationSOS;