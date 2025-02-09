import React from 'react';
import { useAuth } from './AuthProvider';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    window.location.hash = "#/login"; // Ensures proper redirection in HashRouter
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
