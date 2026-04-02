import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoginForm from "../../components/auth/LoginForm";

const AuthPage = () => {
  const { isAuthenticated, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      if (role === "student") {
        navigate("/student");
      } else if (role === "tpo") {
        navigate("/tpo");
      } else if (role === "professor") {
        navigate("/professor");
      }
    }
  }, [isAuthenticated, role, navigate]);

  return <LoginForm />;
};

export default AuthPage;