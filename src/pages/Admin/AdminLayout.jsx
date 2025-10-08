import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#2c3e50', color: 'white', padding: '20px' }}>
        <h2 style={{ fontSize: '1.5em', textAlign: 'center', marginBottom: '30px' }}>MGM Admin</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <NavLink to="/admin/events" style={({ isActive }) => ({ color: isActive ? '#3498db' : 'white', textDecoration: 'none' })}>
            Manage Events
          </NavLink>
          <NavLink to="/admin/faculty" style={({ isActive }) => ({ color: isActive ? '#3498db' : 'white', textDecoration: 'none' })}>
  Manage Faculty
</NavLink>
          {/* We will add more links here as we build new features */}
        </nav>
        <button 
          onClick={handleLogout} 
          style={{ width: '100%', padding: '10px', marginTop: '40px', background: '#e74c3c', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '40px', background: '#ecf0f1' }}>
        {/* The specific admin page will be rendered here */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;