import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAdmin: boolean;
  login: (key: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This would be your admin key - in a real app, this should be more secure
const ADMIN_KEY = 'lozos-admin-2025';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin status is stored in sessionStorage
    const storedAdminStatus = sessionStorage.getItem('isAdmin') === 'true';
    if (storedAdminStatus) {
      setIsAdmin(true);
    }

    // Check URL for admin key
    const searchParams = new URLSearchParams(location.search);
    const keyFromUrl = searchParams.get('key');
    if (keyFromUrl === ADMIN_KEY) {
      setIsAdmin(true);
      sessionStorage.setItem('isAdmin', 'true');
      // Remove key from URL but maintain the path
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const login = (key: string) => {
    if (key === ADMIN_KEY) {
      setIsAdmin(true);
      sessionStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('isAdmin');
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