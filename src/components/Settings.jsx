import React, { useState, useEffect } from "react";
import {
  FaGlobe,
  FaMoon,
  FaUniversalAccess,
  FaBell,
  FaMicrophone,
  FaRobot,
  FaMicrochip,
  FaPhoneAlt,
  FaCloud,
  FaLock,
  FaInfoCircle,
  FaSignOutAlt,
  FaChevronRight
} from "react-icons/fa";

import "./Settings.css";

function Settings({ logout }) {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [elderMode, setElderMode] = useState(
    localStorage.getItem("elder") === "true"
  );

  const [notifications, setNotifications] = useState(true);
  const [voice, setVoice] = useState(true);
  const [ai, setAi] = useState(true);

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }

  }, [darkMode]);

  useEffect(() => {

    if (elderMode) {
      document.body.classList.add("elder-mode");
      localStorage.setItem("elder", "true");
    } else {
      document.body.classList.remove("elder-mode");
      localStorage.setItem("elder", "false");
    }

  }, [elderMode]);

  return (

<div className="settings-page">

<h1>⚙️ Settings</h1>

<div className="settings-list">

<SettingCard
icon={<FaGlobe />}
title="Language"
subtitle="English / தமிழ்"
/>

<SettingToggle
icon={<FaMoon />}
title="Dark Mode"
state={darkMode}
setState={setDarkMode}
/>

<SettingToggle
icon={<FaUniversalAccess />}
title="Elder Mode"
state={elderMode}
setState={setElderMode}
/>

<SettingToggle
icon={<FaBell />}
title="Notifications"
state={notifications}
setState={setNotifications}
/>

<SettingToggle
icon={<FaMicrophone />}
title="Voice Assistant"
state={voice}
setState={setVoice}
/>

<SettingToggle
icon={<FaRobot />}
title="AI Assistant"
state={ai}
setState={setAi}
/>

<SettingCard
icon={<FaMicrochip />}
title="Connected Devices"
subtitle="ESP32 Connected"
/>

<SettingCard
icon={<FaPhoneAlt />}
title="Emergency Contacts"
subtitle="Manage Contacts"
/>

<SettingCard
icon={<FaCloud />}
title="Backup & Sync"
subtitle="Cloud Backup"
/>

<SettingCard
icon={<FaLock />}
title="Privacy & Security"
subtitle="Password, Face Login"
/>

<SettingCard
icon={<FaInfoCircle />}
title="About ElderShield"
subtitle="Version 1.0"
/>

<button
className="logout-btn"
onClick={logout}
>

<FaSignOutAlt />

Logout

</button>

</div>

</div>

  );

}
function SettingCard({
  icon,
  title,
  subtitle
}) {

  return (

    <div
      className="setting-card"
      onClick={() => {

        switch (title) {

          case "Language":
            alert("Language settings will open here.");
            break;

          case "Connected Devices":
            alert("ESP32\nHeart Sensor\nGPS\nBluetooth");
            break;

          case "Emergency Contacts":
            alert("Manage Emergency Contacts");
            break;

          case "Backup & Sync":
            alert("Cloud Backup & Data Restore");
            break;

          case "Privacy & Security":
            alert("Change Password\nFace Login\nFingerprint");
            break;

          case "About ElderShield":
            alert(
              "ElderShield\n\nVersion 1.0\n\nDeveloped by:\nShanton Jeffry Rudolf B"
            );
            break;

          default:
            break;

        }

      }}
    >

      <div className="setting-left">

        <div className="setting-icon">

          {icon}

        </div>

        <div>

          <h3>{title}</h3>

          <p>{subtitle}</p>

        </div>

      </div>

      <FaChevronRight />

    </div>

  );

}

function SettingToggle({

  icon,
  title,
  state,
  setState

}) {

  return (

    <div className="setting-card">

      <div className="setting-left">

        <div className="setting-icon">

          {icon}

        </div>

        <h3>{title}</h3>

      </div>

      <label className="switch">

        <input
          type="checkbox"
          checked={state}
          onChange={() => setState(!state)}
        />

        <span className="slider"></span>

      </label>

    </div>

  );

}

export default Settings;