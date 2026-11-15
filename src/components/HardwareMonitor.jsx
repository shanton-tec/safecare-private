import React, { useEffect, useMemo, useState } from "react";
import {
  FaWifi,
  FaHeartbeat,
  FaExclamationTriangle,
  FaMicrochip,
  FaSyncAlt
} from "react-icons/fa";
import "./HardwareMonitor.css";

const DEFAULT_URL = "http://192.168.4.1";

function HardwareMonitor() {
  const [esp32Url, setEsp32Url] = useState(
    localStorage.getItem("esp32Url") || DEFAULT_URL
  );
  const [status, setStatus] = useState({
    connected: false,
    fallDetected: false,
    x: 0,
    y: 0,
    z: 1,
    total: 1,
    timestamp: null
  });
  const [demoMode, setDemoMode] = useState(true);
  const [lastError, setLastError] = useState("");
  const [loading, setLoading] = useState(false);

  const cleanUrl = useMemo(
    () => esp32Url.trim().replace(/\/+$/, ""),
    [esp32Url]
  );

  const saveUrl = () => {
    localStorage.setItem("esp32Url", cleanUrl);
    setLastError("");
  };

  const pollESP32 = async () => {
    if (demoMode) {
      setStatus((prev) => ({
        ...prev,
        connected: true,
        timestamp: new Date().toISOString()
      }));
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${cleanUrl}/api/status`, {
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      setStatus({
        connected: true,
        fallDetected: Boolean(data.fallDetected),
        x: Number(data.x ?? 0),
        y: Number(data.y ?? 0),
        z: Number(data.z ?? 1),
        total: Number(data.total ?? 1),
        timestamp: data.timestamp || new Date().toISOString()
      });
      setLastError("");
    } catch (error) {
      setStatus((prev) => ({ ...prev, connected: false }));
      setLastError(
        `Cannot reach ESP32 at ${cleanUrl}. Check Wi-Fi and the ESP32 API.`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    pollESP32();
    const timer = setInterval(pollESP32, 1500);
    return () => clearInterval(timer);
  }, [demoMode, cleanUrl]);

  const simulateFall = () => {
    setDemoMode(true);
    setStatus((prev) => ({
      ...prev,
      connected: true,
      fallDetected: true,
      x: 0.8,
      y: 0.2,
      z: 0.3,
      total: 0.88,
      timestamp: new Date().toISOString()
    }));
  };

  const clearFall = () => {
    setStatus((prev) => ({
      ...prev,
      fallDetected: false,
      x: 0.04,
      y: -0.06,
      z: 1.0,
      total: 1.0,
      timestamp: new Date().toISOString()
    }));
  };

  const formatTime = (value) =>
    value ? new Date(value).toLocaleTimeString() : "--";

  return (
    <div className="hardware-page">
      <div className="hardware-hero">
        <div>
          <h1>🔌 ElderShield Hardware</h1>
          <p>ESP32 + MPU6050 fall-detection monitoring</p>
        </div>
        <div className={status.connected ? "connection-pill online" : "connection-pill"}>
          <FaWifi />
          {status.connected ? "Connected" : "Disconnected"}
        </div>
      </div>

      <div className="hardware-grid">
        <div className="hardware-card">
          <FaMicrochip size={34} />
          <span>ESP32</span>
          <strong>{status.connected ? "ONLINE" : "OFFLINE"}</strong>
        </div>

        <div className="hardware-card">
          <FaHeartbeat size={34} />
          <span>MPU6050</span>
          <strong>{status.connected ? "ACTIVE" : "WAITING"}</strong>
        </div>

        <div className={`hardware-card ${status.fallDetected ? "danger-card" : ""}`}>
          <FaExclamationTriangle size={34} />
          <span>Fall Detection</span>
          <strong>{status.fallDetected ? "FALL DETECTED" : "NORMAL"}</strong>
        </div>
      </div>

      <div className="hardware-section">
        <div className="section-heading">
          <div>
            <h2>Live MPU6050 Data</h2>
            <p>Values received from the ESP32</p>
          </div>
          <button className="refresh-btn" onClick={pollESP32} disabled={loading}>
            <FaSyncAlt /> {loading ? "Checking..." : "Refresh"}
          </button>
        </div>

        <div className="sensor-grid">
          <div><span>X</span><strong>{status.x.toFixed(2)} G</strong></div>
          <div><span>Y</span><strong>{status.y.toFixed(2)} G</strong></div>
          <div><span>Z</span><strong>{status.z.toFixed(2)} G</strong></div>
          <div><span>Total</span><strong>{status.total.toFixed(2)} G</strong></div>
        </div>

        <p className="last-update">
          Last update: {formatTime(status.timestamp)}
        </p>
      </div>

      <div className="hardware-section">
        <h2>ESP32 Connection</h2>
        <p>Enter the ESP32 IP address when we enable Wi-Fi API mode.</p>

        <div className="url-row">
          <input
            value={esp32Url}
            onChange={(e) => setEsp32Url(e.target.value)}
            placeholder="http://192.168.1.100"
          />
          <button className="primary-btn" onClick={saveUrl}>Save</button>
        </div>

        <label className="demo-toggle">
          <input
            type="checkbox"
            checked={demoMode}
            onChange={(e) => setDemoMode(e.target.checked)}
          />
          Demo mode (use this until the ESP32 Wi-Fi API is added)
        </label>

        {lastError && <p className="hardware-error">{lastError}</p>}
      </div>

      <div className="hardware-section">
        <h2>🧪 Test Fall Alert</h2>
        <p>Use this tonight to test the ElderShield website without changing the ESP32 wiring.</p>
        <div className="test-buttons">
          <button className="fall-test-btn" onClick={simulateFall}>
            Simulate Fall
          </button>
          <button className="safe-test-btn" onClick={clearFall}>
            Clear / Safe
          </button>
        </div>
      </div>

      {status.fallDetected && (
        <div className="fall-alert">
          <FaExclamationTriangle size={32} />
          <div>
            <h2>🚨 FALL DETECTED</h2>
            <p>ElderShield should trigger the emergency workflow.</p>
            <button
              className="primary-btn"
              onClick={() => window.dispatchEvent(new CustomEvent("eldershield-fall"))}
            >
              Open Emergency Alert
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HardwareMonitor;
