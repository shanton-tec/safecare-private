import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock, FaHeartbeat } from "react-icons/fa";

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter username and password");
      return;
    }

    localStorage.setItem("loggedIn", "true");
    setLoggedIn();
  };

  return (
    <div className="login-container">

      <div className="left-panel">
        <div className="logo-circle">
          <FaHeartbeat />
        </div>

        <h1>ElderShield</h1>

        <h3>Smart Elderly Safety & Emergency Alert System</h3>

        <p>
          Caring for your loved ones with
          real-time health monitoring,
          emergency alerts and intelligent
          healthcare support.
        </p>
      </div>

      <div className="right-panel">

        <div className="login-card">

          <h2>Welcome Back</h2>

          <p>Login to continue</p>

          <div className="input-group">
            <FaUser className="icon"/>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="icon"/>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleLogin}>
            Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;