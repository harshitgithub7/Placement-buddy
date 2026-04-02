import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={styles.topbar}>
      <h3>Placement Buddy</h3>

      <div style={styles.right}>
        <span style={styles.role}>{role?.toUpperCase()}</span>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;

// Simple styles (can replace later)
const styles = {
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#1e293b",
    color: "white",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  role: {
    fontSize: "14px",
    color: "#94a3b8",
  },
  logoutBtn: {
    padding: "6px 12px",
    background: "#ef4444",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  },
};