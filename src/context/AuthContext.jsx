// src/context/AuthContext.jsx

import React, {createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('authToken'));

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      try {
        const decodedUser = JSON.parse(atob(storedToken.split('.')[1]));
        if (decodedUser.exp * 1000 > Date.now()) {
          setToken(storedToken);
          setUser(decodedUser); // Make sure user is set on initial load
        } else {
          handleLogout();
        }
      } catch (error) {
        console.error("Failed to decode token on initial load:", error);
        handleLogout();
      }
    }
  }, []); // This effect should run only once on component mount

  const handleLogin = (newToken, userData) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
    setUser(userData); // Set both token and user at the same time
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
  };

  // ====================================================================
  // THE FIX IS HERE: We derive the auth state directly from the state
  // variables, ensuring they are always in sync for any single render.
  // ====================================================================
  const isAuthenticated = !!token;
  const isAdmin = !!user && user.role === 'admin';

  const authContextValue = {
    user,
    token,
    login: handleLogin,
    logout: handleLogout,
    isAuthenticated, // Use the derived value
    isAdmin,         // Use the derived value
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};