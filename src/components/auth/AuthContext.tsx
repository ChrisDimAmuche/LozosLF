import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface AuthContextType {
  isAdmin: boolean;
  login: (key: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This is a simple key for demo purposes. In production, use a more secure method
const ADMIN_KEY = 'lozo-admin-2024';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check session storage on mount
    const adminSession = sessionStorage.getItem('lozo-admin-session');
    if (adminSession === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const login = async (key: string): Promise<boolean> => {
    if (key === ADMIN_KEY) {
      setIsAdmin(true);
      sessionStorage.setItem('lozo-admin-session', 'true');
      
      // Get the return URL from the location state or default to /admin
      const returnUrl = new URLSearchParams(location.search).get('returnUrl') || '/admin';
      navigate(returnUrl);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('lozo-admin-session');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};