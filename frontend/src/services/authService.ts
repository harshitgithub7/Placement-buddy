const ROLE_KEY = "placement_role";

export const authService = {
  login: (role: string) => {
    localStorage.setItem(ROLE_KEY, role);
  },

  logout: () => {
    localStorage.removeItem(ROLE_KEY);
  },

  getRole: (): string | null => {
    return localStorage.getItem(ROLE_KEY);
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(ROLE_KEY);
  },
};