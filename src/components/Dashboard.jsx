import React, { useState } from "react";

import "./Dashboard.css";
import Entertainment from "./Entertainment";
import Settings from "./Settings";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Home from "./Home";
import WaterTracker from "./WaterTracker";
import MedicineReminder from "./MedicineReminder";
import HealthTips from "./HealthTips";
import MoodTracker from "./MoodTracker";
import EmergencySOS from "./EmergencySOS";
import AIChatbot from "./AIChatbot";
import Reports from "./Reports";
import Profile from "./Profile";
import HealthStats from "./HealthStats";
import LiveLocationSOS from "./LiveLocationSOS";
import DoctorAppointment from "./DoctorAppointment";
import NotificationCenter from "./NotificationCenter";
import HardwareMonitor from "./HardwareMonitor";

function Dashboard() {

  const [activePage, setActivePage] =
    useState("home");

  const logout = () => {
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };

  return (

    <div>

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        logout={logout}
      />

      <div className="dashboard">

        <Navbar />

        {activePage === "home" && (
          <Home
            setActivePage={setActivePage}
          />
        )}

        {activePage === "hardware" && (
          <HardwareMonitor />
        )}

        {activePage === "health" && (
          <HealthStats />
        )}

        {activePage === "water" && (
          <WaterTracker />
        )}

        {activePage === "medicine" && (
          <MedicineReminder />
        )}

        {activePage === "doctor" && (
          <DoctorAppointment />
        )}

        {activePage === "notifications" && (
          <NotificationCenter />
        )}

        {activePage === "tips" && (
          <HealthTips />
        )}

        {activePage === "mood" && (
          <MoodTracker />
        )}

        {activePage === "sos" && (
          <EmergencySOS />
        )}

        {activePage === "location" && (
          <LiveLocationSOS />
        )}

        {activePage === "ai" && (
          <AIChatbot />
        )}

        {activePage === "reports" && (
          <Reports />
        )}

        {activePage === "profile" && (
          <Profile />
        )}

       {activePage === "settings" && (
  <Settings logout={logout} />
)}
{activePage === "entertainment" && (
    <Entertainment />
)}

      </div>

    </div>

  );

}

export default Dashboard;