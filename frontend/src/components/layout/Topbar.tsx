import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";


const Topbar = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const formatRole = (role: string | null) => {
    if (!role) return "";
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <div style={styles.topbar}>
      <div style={styles.inner}>
       <h3 style={(styles.logo)}>Placement Buddy</h3>

       <div style={styles.right}>
        <span style={styles.role}>
          👤 {formatRole(role)}
        </span>

        <button
          onClick={handleLogout}
          style={styles.logoutBtn}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#dc2626")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#ef4444")}>
          Logout
        </button>
        </div>
      </div>
    </div>
  );
};
export default Topbar;

const styles: { [key: string]: CSSProperties } = {
  topbar: {
    width: "100%",
    background: "#1e293b",
    color: "white",
  },

  inner: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "14px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },

  logo: {
    fontSize: "18px",
    fontWeight: "600",
    marginLeft: "50px", //  
    whiteSpace: "nowrap",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  role: {
    fontSize: "14px",
    color: "#94a3b8",
    whiteSpace: "nowrap",
  },

  logoutBtn: {
    padding: "8px 14px", // 
    background: "#ef4444",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    transition: "0.2s",
  },
};