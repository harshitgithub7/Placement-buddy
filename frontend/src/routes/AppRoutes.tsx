import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "../pages/Auth/AuthPage";
import StudentDashboard from "../pages/Student/StudentDashboard";
import TPODashboard from "../pages/TPO/TPODashboard";
import ProfessorDashboard from "../pages/Professor/ProfessorDashboard";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth Page */}
        <Route path="/" element={<AuthPage />} />

        {/* Protected Routes */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tpo"
          element={
            <ProtectedRoute allowedRole="tpo">
              <TPODashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/professor"
          element={
            <ProtectedRoute allowedRole="professor">
              <ProfessorDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;