import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const token = localStorage.getItem('admin_token');

    // If there's a token, show the page they asked for (the <Outlet />).
    // Otherwise, redirect them to the login page.
    return token ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;