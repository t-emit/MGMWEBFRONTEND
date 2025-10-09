// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, isAdmin } = useAuth();

  // ADD THIS CONSOLE LOG
  console.log(
    `[ProtectedRoute] Checking auth... IsAuthenticated: ${isAuthenticated}, IsAdmin: ${isAdmin}`
  );

  if (isAuthenticated && isAdmin) {
    return <Outlet />;
  }

  return <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;