import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./LoginForm.css";

const LoginForm = () => {
  const [role, setRole] = useState<string>("student");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Save role in context + localStorage
    login(role);

    // Redirect based on role
    if (role === "student") {
      navigate("/student");
    } else if (role === "tpo") {
      navigate("/tpo");
    } else if (role === "professor") {
      navigate("/professor");
    }
  };

  return (
    <div className="login-container">
     <div className="login-card">
        <h2>Placement Buddy</h2>
        <p>Select your role to continue</p>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="login-select"
        >
          <option value="student">Student</option>
          <option value="tpo">TPO</option>
          <option value="professor">Professor</option>
          <option value="alumni">Alumni</option>
        </select>

        <button onClick={handleLogin} className="login-btn">
           Login
        </button>
      </div>
  </div>
);
};

export default LoginForm;