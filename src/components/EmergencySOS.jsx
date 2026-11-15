import React, { useState } from "react";
import {
  FaExclamationTriangle,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHospital,
  FaWifi,
  FaVolumeUp,
  FaCheckCircle
} from "react-icons/fa";

function EmergencySOS() {

  const [status, setStatus] = useState("SAFE");

  const activateSOS = () => {
    setStatus("EMERGENCY");

    alert(
      "🚨 Emergency Alert Sent Successfully!"
    );
  };

  return (
    <div>

      {/* Header */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#ef4444,#dc2626)",
          color:"white",
          padding:"30px",
          borderRadius:"20px",
          marginBottom:"25px"
        }}
      >

        <h1>🚨 Emergency SOS</h1>

        <p>
          One Touch Emergency Alert System
        </p>

      </div>

      {/* Status Cards */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px",
          marginBottom:"25px"
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

          <FaMapMarkerAlt
            size={40}
            color="#2563eb"
          />

          <h2>GPS</h2>

          <p>Location Ready</p>

        </div>

        <div className="feature-card">

          <FaVolumeUp
            size={40}
            color="#f97316"
          />

          <h2>Buzzer</h2>

          <p>Standby</p>

        </div>

        <div className="feature-card">

          <FaCheckCircle
            size={40}
            color="#22c55e"
          />

          <h2>Status</h2>

          <p>{status}</p>

        </div>

      </div>

      {/* SOS Button */}

      <div
        className="feature-card"
        style={{
          textAlign:"center",
          padding:"40px"
        }}
      >

        <button
          onClick={activateSOS}
          style={{
            width:"220px",
            height:"220px",
            borderRadius:"50%",
            border:"none",
            background:"#ef4444",
            color:"white",
            fontSize:"32px",
            cursor:"pointer",
            fontWeight:"bold",
            boxShadow:
            "0 0 40px rgba(239,68,68,.5)"
          }}
        >

          <FaExclamationTriangle
            size={60}
          />

          <br/>

          SOS

        </button>

        <h2
          style={{
            marginTop:"25px"
          }}
        >
          Press only during emergencies
        </h2>

      </div>

      {/* Emergency Services */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",
          gap:"20px",
          marginTop:"25px"
        }}
      >

        <div className="feature-card">

          <FaPhoneAlt
            size={35}
            color="#22c55e"
          />

          <h2>Emergency Contact</h2>

          <p>Family Member</p>

          <button
            className="primary-btn"
          >
            📞 Call
          </button>

        </div>

        <div className="feature-card">

          <FaHospital
            size={35}
            color="#2563eb"
          />

          <h2>Nearest Hospital</h2>

          <p>
            Government Hospital
          </p>

          <button
            className="primary-btn"
          >
            View Route
          </button>

        </div>

      </div>

      {/* ESP32 Ready */}

      <div
        className="feature-card"
        style={{
          marginTop:"25px"
        }}
      >

        <h2>
          🔌 Hardware Status
        </h2>

        <br/>

        <p>
          ✅ ESP32 Connected
        </p>

        <p>
          ✅ Fall Sensor Active
        </p>

        <p>
          ✅ SOS Push Button Ready
        </p>

        <p>
          ✅ Buzzer Ready
        </p>

        <p>
          ✅ Wi-Fi Connected
        </p>

      </div>
<div className="feature-card" style={{ marginTop: "35px" }}>

<h2>🌿 Relaxation & Meditation</h2>

<p>
Relax your mind with peaceful sounds and guided meditation.
</p>

<div className="relax-grid">

<button
className="relax-btn"
onClick={() =>
window.open(
"https://www.youtube.com/results?search_query=rain+sounds",
"_blank"
)
}
>
🌧 Rain Sounds
</button>

<button
className="relax-btn"
onClick={() =>
window.open(
"https://www.youtube.com/results?search_query=ocean+waves+relaxing",
"_blank"
)
}
>
🌊 Ocean Waves
</button>

<button
className="relax-btn"
onClick={() =>
window.open(
"https://www.youtube.com/results?search_query=forest+birds+sounds",
"_blank"
)
}
>
🌳 Forest Birds
</button>

<button
className="relax-btn"
onClick={() =>
window.open(
"https://www.youtube.com/results?search_query=fireplace+relaxing",
"_blank"
)
}
>
🔥 Fireplace
</button>

<button
className="relax-btn"
onClick={() =>
window.open(
"https://www.youtube.com/results?search_query=guided+meditation",
"_blank"
)
}
>
🧘 Meditation
</button>

<button
className="relax-btn"
onClick={() =>
window.open(
"https://www.youtube.com/results?search_query=deep+breathing+exercise",
"_blank"
)
}
>
💨 Breathing Exercise
</button>

</div>

</div>
<div className="feature-card" style={{ marginTop: "35px" }}>

<h2>👨‍👩‍👧 Family Corner</h2>

<p>
Stay connected with your loved ones anytime.
</p>

<div className="family-grid">

<div className="family-card">

<h3>📞 Call Family</h3>

<p>Quickly call your family member.</p>

<button
className="family-btn"
onClick={() => window.location.href="tel:+919876543210"}
>
Call Now
</button>

</div>

<div className="family-card">

<h3>💬 WhatsApp</h3>

<p>Send a message instantly.</p>

<button
className="family-btn"
onClick={()=>
window.open(
"https://wa.me/919876543210",
"_blank"
)}
>
Open WhatsApp
</button>

</div>

<div className="family-card">

<h3>📹 Video Call</h3>

<p>Start a Google Meet call.</p>

<button
className="family-btn"
onClick={()=>
window.open(
"https://meet.google.com",
"_blank"
)}
>
Video Call
</button>

</div>

<div className="family-card">

<h3>📸 Family Photos</h3>

<p>View family memories.</p>

<button
className="family-btn"
onClick={()=>
window.open(
"https://photos.google.com",
"_blank"
)}
>
Open Photos
</button>

</div>

</div>

</div>
    </div>
  );
}

export default EmergencySOS;
