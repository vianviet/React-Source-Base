import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
  fallback?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuthenticated, fallback = '/login' }) => {
  return isAuthenticated ? <>{children}</> : <Navigate to={fallback} />;
};

export default PrivateRoute;