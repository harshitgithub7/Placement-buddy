import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ATSScoreCard from "../../components/dashboard/ATSScoreCard";
import CompanyOpportunities from "../../components/dashboard/CompanyOpportunities";
import { useAuth } from "../../context/AuthContext";
import { dashboardService } from "../../services/dashboardService";

type DashboardData = {
  atsScore: number;
  appliedCompanies: number;
  upcomingInterviews: number;
  opportunities: {
    id: number;
    company: string;
    role: string;
  }[];
};

const StudentDashboard = () => {
  const { role } = useAuth();
  const [data, setData] = useState<DashboardData | null>(null);

  const formatRole = (role: string | null) => {
    if (!role) return "";
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dashboardService.getStudentData();
        setData(res);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout role="student">
      <div style={styles.page}>
        
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Welcome, {formatRole(role)}</h1>
          <p style={styles.subtext}>
            Here’s an overview of your placement activity
          </p>
        </div>

        {/* Content */}
        {!data ? (
          <div style={styles.loading}>Loading dashboard...</div>
        ) : (
          <div style={styles.grid}>
            <ATSScoreCard score={data.atsScore} />
            <CompanyOpportunities opportunities={data.opportunities} />
          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;

// 🔥 FINAL STYLES
const styles = {
  page: {
    width: "100%",
    maxWidth: "1400px", // 🔥 prevents over-stretching
    margin: "0 auto",
    padding: "10px 0",
  },
  header: {
    marginBottom: "30px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
  },
  subtext: {
    color: "#94a3b8",
    fontSize: "14px",
    marginTop: "6px",
  },
  loading: {
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "24px",
    width: "100%",
  },
};