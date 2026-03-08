import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "../pages/Auth/AuthPage";
import StudentDashboard from "../pages/Student/StudentDashboard";
import TPODashboard from "../pages/TPO/TPODashboard";
import ProfessorDashboard from "../pages/Professor/ProfessorDashboard";

const AppRoutes = () => {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<AuthPage />} />

        <Route path="/student" element={<StudentDashboard />} />

        <Route path="/tpo" element={<TPODashboard />} />

        <Route path="/professor" element={<ProfessorDashboard />} />

      </Routes>

    </BrowserRouter>
  );

};

export default AppRoutes;