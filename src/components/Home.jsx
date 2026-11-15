import React from "react";
import {
  FaHeartbeat,
  FaTint,
  FaPills,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaRobot,
  FaUserMd,
  FaChartBar
} from "react-icons/fa";

import "./Home.css";

function Home({ setActivePage }) {

  return (

<div>

{/* Hero Banner */}

<div className="hero">

<div>

<h1>

Welcome to ElderShield 🛡️

</h1>

<p>

Smart Elderly Safety & Health Monitoring System

</p>

<br/>

<button
className="primary-btn"
onClick={()=>setActivePage("health")}
>

View Health

</button>

</div>

<div className="hero-icon">

👴👵

</div>

</div>

{/* Status Cards */}

<div className="stats">

<div className="stat-card">

<div
className="stat-icon"
style={{
background:"#ef4444"
}}
>

<FaHeartbeat/>

</div>

<div>

<h3>Heart Rate</h3>

<h2>72 BPM</h2>

</div>

</div>

<div className="stat-card">

<div
className="stat-icon"
style={{
background:"#3b82f6"
}}
>

<FaTint/>

</div>

<div>

<h3>Water</h3>

<h2>5 / 8 Glasses</h2>

</div>

</div>

<div className="stat-card">

<div
className="stat-icon"
style={{
background:"#22c55e"
}}
>

<FaPills/>

</div>

<div>

<h3>Medicine</h3>

<h2>4 Today</h2>

</div>

</div>

<div className="stat-card">

<div
className="stat-icon"
style={{
background:"#f97316"
}}
>

<FaShieldAlt/>

</div>

<div>

<h3>Status</h3>

<h2>SAFE</h2>

</div>

</div>

</div>

{/* Main Grid */}

<div className="dashboard-grid">

{/* Left */}

<div className="left-column">

<div className="feature-card">

<h2>

❤️ Health Overview

</h2>

<div className="health-item">

<span>Heart Rate</span>

<strong>72 BPM</strong>

</div>

<div className="health-item">

<span>Blood Pressure</span>

<strong>120 / 80</strong>

</div>

<div className="health-item">

<span>Temperature</span>

<strong>36.8°C</strong>

</div>

<div className="health-item">

<span>Water Intake</span>

<strong>5 / 8</strong>

</div>

<div className="health-item">

<span>Daily Steps</span>

<strong>4521</strong>

</div>

</div>

<div className="feature-card">

<h2>

⚡ Quick Actions

</h2>

<div className="quick-grid">

<button
className="primary-btn"
onClick={()=>setActivePage("hardware")}
>

🔌 Hardware

</button>

<button
className="primary-btn"
onClick={()=>setActivePage("medicine")}
>

💊 Medicine

</button>

<button
className="primary-btn"
onClick={()=>setActivePage("doctor")}
>

<FaUserMd/>

 Doctor

</button>

<button
className="primary-btn"
onClick={()=>setActivePage("ai")}
>

<FaRobot/>

 AI

</button>

<button
className="primary-btn"
onClick={()=>setActivePage("reports")}
>

<FaChartBar/>

 Reports

</button>

</div>

</div>

</div>

{/* Right */}

<div className="right-column">

<div className="feature-card">

<h2>

🚨 Emergency

</h2>

<br/>

<h1 className="emergency-safe">

SAFE

</h1>

<p>

ESP32 Connected

</p>

<p>

Wi-Fi Connected

</p>

<p>

Sensors Active

</p>

</div>

<div className="feature-card">

<h2>

📍 Live Location

</h2>

<br/>

<div
style={{
textAlign:"center",
fontSize:"70px"
}}
>

<FaMapMarkerAlt color="#2563eb"/>

</div>

<p
style={{
textAlign:"center"
}}
>

GPS Ready

</p>

<button
className="primary-btn"
onClick={()=>setActivePage("location")}
>

Open Map

</button>

</div>

</div>

</div>

</div>

  );

}

export default Home;