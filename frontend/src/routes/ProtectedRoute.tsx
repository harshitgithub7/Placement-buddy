import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react/jsx-dev-runtime";

type Props = {  
    children: JSX.Element;
    allowedRole: string;
};

const ProtectedRoute = ({ children, allowedRole }: Props) => {
  const { isAuthenticated, role } = useAuth();

  // Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Wrong role
  if (role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  // Allowed
  return children;
};

export default ProtectedRoute;