import { Link, useNavigate } from "react-router-dom";
import { ShieldPlus } from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="main-container">
      <div className="auth-card glass">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <ShieldPlus size={60} color="#38bdf8" />
        </div>

        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">
          Join SafeCare for better health support
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="input-box"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="input-box"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-box"
        />

        <button className="primary-btn" onClick={handleRegister}>
          Register
        </button>

        <p className="link-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;