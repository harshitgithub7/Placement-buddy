import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/authService";

type AuthContextType = {
  role: string | null;
  isAuthenticated: boolean;
  login: (role: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// Provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = authService.getRole();
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const login = (role: string) => {
    authService.login(role);
    setRole(role);
  };

  const logout = () => {
    authService.logout();
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        role,
        isAuthenticated: !!role,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};