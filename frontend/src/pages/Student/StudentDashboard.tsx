import DashboardLayout from "../../components/layout/DashboardLayout";
import ATSScoreCard from "../../components/dashboard/ATSScoreCard";
import CompanyOpportunities from "../../components/dashboard/CompanyOpportunities";

const StudentDashboard = () => {
  return (

    <DashboardLayout>

      <h1>Student Dashboard</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"20px",
        marginTop:"30px"
      }}>

        <ATSScoreCard />
        <CompanyOpportunities />

      </div>

    </DashboardLayout>

  );
};

export default StudentDashboard;