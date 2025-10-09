// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Import BrowserRouter here
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext'; // 2. Import AuthProvider here
import './index.css';

// Your Modal setup is fine
import Modal from 'react-modal';
Modal.setAppElement('#root');

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    {/* 3. AuthProvider is the OUTERMOST wrapper */}
    <AuthProvider>
      {/* 4. BrowserRouter is INSIDE AuthProvider */}
      <BrowserRouter>
        {/* 5. App is INSIDE BrowserRouter */}
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);