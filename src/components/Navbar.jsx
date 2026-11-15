import React from "react";
import {
  FaSearch,
  FaBell,
  FaUserCircle
} from "react-icons/fa";

import "./Navbar.css";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {

  const today = new Date();

  const { toggleLanguage, t } = useLanguage();

  return (

    <div className="topbar">

      <div className="topbar-left">

        <h1>
          {t.welcome} 👋
        </h1>

        <p>
          {today.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </p>

      </div>

      <div className="topbar-right">

        <div className="search-box">

          <FaSearch />

          <input
            placeholder={t.search}
          />

        </div>

        {/* Translate Button */}

        <button
          className="translate-btn"
          onClick={toggleLanguage}
        >
          🌐 {t.language}
        </button>

        <div className="notification">

          <FaBell />

        </div>

        <div className="profile">

          <div className="profile-avatar">

            <FaUserCircle />

          </div>

          <div>

            <h3>
              {t.caregiver}
            </h3>

            <p>
              {t.online}
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Navbar;