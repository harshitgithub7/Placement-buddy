import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children, role }: any) => {
  return (
    <div style={styles.layout}>
      
      <Sidebar role={role} />

      <div style={styles.main}>
        <Topbar />

        {/*responsive content wrapper*/}
        <div style={styles.container}>
          {children}
        </div>
      </div>

    </div>
  );
};

export default DashboardLayout;

// Styles 
const styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    background: "#0f172a",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    minWidth: 0,
    width: "100%"
  },
  container: {
    padding: "24px 32px",
    width: "100%", 
    boxSizing: "border-box" as const,
  },
};