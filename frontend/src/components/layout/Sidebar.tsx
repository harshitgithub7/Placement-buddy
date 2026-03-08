import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#1e293b",
      color: "white",
      padding: "20px"
    }}>

      <h2 style={{marginBottom:"30px"}}>Placement Buddy</h2>

      <nav style={{display:"flex", flexDirection:"column", gap:"15px"}}>

        <Link to="/student" style={{color:"white", textDecoration:"none"}}>
          Dashboard
        </Link>

        <Link to="/companies" style={{color:"white", textDecoration:"none"}}>
          Companies
        </Link>

        <Link to="/applications" style={{color:"white", textDecoration:"none"}}>
          Applications
        </Link>

        <Link to="/calendar" style={{color:"white", textDecoration:"none"}}>
          Placement Calendar
        </Link>

        <Link to="/mentors" style={{color:"white", textDecoration:"none"}}>
          Talk to Mentor
        </Link>

      </nav>

    </div>
  );
};

export default Sidebar;