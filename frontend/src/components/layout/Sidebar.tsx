import { Link } from "react-router-dom";
import { sidebarMenu } from "../../constants/sidebarMenu";
import { useState, useEffect } from "react";

type SidebarProps = {
  role: "student" | "tpo" | "professor";
};

const Sidebar = ({ role }: SidebarProps) => {
  const menu = sidebarMenu[role];
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // reset mobile state
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 🔹 Mobile Toggle */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={styles.toggleBtn}
        >
          ☰
        </button>
      )}

      {/* 🔹 Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          ...(isMobile
            ? {
                position: "fixed",
                transform: isOpen ? "translateX(0)" : "translateX(-100%)",
              }
            : {
                position: "relative",
                transform: "translateX(0)",
              }),
        }}
      >
        <h2 style={styles.logo}>Placement Buddy</h2>

        <nav style={styles.nav}>
          {menu.map((item, index) => (
            <Link key={index} to={item.path} style={styles.link}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* 🔹 Overlay */}
      {isMobile && isOpen && (
        <div
          style={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

// Styles
const styles = {
  sidebar: {
    width: "220px",
    minHeight: "100vh",
    background: "#1e293b",
    color: "white",
    padding: "20px",
    transition: "0.3s ease",
    zIndex: 1000,
    flexShrink: 0, // 🔥 IMPORTANT
  },
  logo: {
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  toggleBtn: {
    position: "fixed" as const,
    top: "15px",
    left: "15px",
    zIndex: 1100,
    background: "#1e293b",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 900,
  },
};