import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAdmin } = useAuth();
  const location = useLocation();

  if (!isAdmin) {
    // Redirect to login page with the return url and preserve any existing query params
    const currentPath = location.pathname + location.search;
    const returnUrl = encodeURIComponent(currentPath);
    return <Navigate to={`/admin/login?returnUrl=${returnUrl}`} replace state={{ from: currentPath }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;