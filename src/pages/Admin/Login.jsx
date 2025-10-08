import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('https://mgmweb-backend.onrender.com/api/auth/login', { email, password });
            
            // On successful login, save the token and redirect
            localStorage.setItem('admin_token', response.data.token);
            navigate('/admin/events'); // Go to the events management page
        } catch (err) {
            setError('Failed to log in. Please check your credentials.');
            console.error('Login error:', err);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '30px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h2>Admin Login</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;