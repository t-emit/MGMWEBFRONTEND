import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/events'; // Your backend URL

function ManageEvents() {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [imageFile, setImageFile] = useState(null); // State for the actual file
    const navigate = useNavigate();

    // Fetch all events when the component loads
    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get(API_URL);
            setEvents(response.data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!imageFile) {
            alert("Please select an image to upload.");
            return;
        }

        // Use FormData because we are sending a file
        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('description', description);
        formData.append('link', link);
        formData.append('image', imageFile); // 'image' must match the backend upload.single('image')

        try {
            const token = localStorage.getItem('admin_token');
            if (!token) {
                navigate('/admin/login'); // Redirect if no token
                return;
            }

            // We must include the token in the headers to be authorized
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            };
            
            await axios.post(API_URL, formData, config);
            
            // Clear form and refresh the list
            setTitle('');
            setDate('');
            setDescription('');
            setLink('');
            setImageFile(null);
            document.getElementById('image-input').value = null; // Reset file input
            fetchEvents();
        } catch (error) {
            console.error("Error creating event:", error);
            alert("Failed to create event. You may need to log in again.");
        }
    };
    
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                const token = localStorage.getItem('admin_token');
                if (!token) {
                    navigate('/admin/login');
                    return;
                }
                
                // Also need the token for deleting
                const config = {
                    headers: { 'Authorization': `Bearer ${token}` }
                };

                await axios.delete(`${API_URL}/${id}`, config);
                fetchEvents(); // Refresh list after deleting
            } catch (error) {
                console.error("Error deleting event:", error);
                alert("Failed to delete event. You may need to log in again.");
            }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
    };

    return (
        <div style={{ padding: '50px', maxWidth: '900px', margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Manage News & Events</h1>
                <button onClick={handleLogout} style={{ height: '40px', backgroundColor: '#555', color: 'white' }}>Logout</button>
            </div>
            
            {/* Add New Event Form */}
            <form onSubmit={handleSubmit} style={{ margin: '40px 0', display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
                <h3>Add New Event</h3>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Date (e.g., June 10, 2024)" value={date} onChange={(e) => setDate(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                <input type="text" placeholder="Link (e.g., https://example.com)" value={link} onChange={(e) => setLink(e.target.value)} />
                
                {/* === UPDATED IMAGE INPUT === */}
                <label htmlFor="image-input">Event Image:</label>
                <input 
                    id="image-input"
                    type="file" 
                    onChange={(e) => setImageFile(e.target.files[0])} 
                    required 
                />
                
                <button type="submit" style={{marginTop: '10px'}}>Add Event</button>
            </form>

            {/* List of Existing Events */}
            <div>
                <h3>Current Events</h3>
                {events.map(event => (
                    <div key={event._id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '5px' }}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                            <img src={event.imageUrl} alt={event.title} style={{width: '80px', height: '80px', objectFit: 'cover'}} />
                            <div>
                                <h4>{event.title}</h4>
                                <p style={{color: '#666', fontSize: '0.9em'}}>{event.date}</p>
                            </div>
                        </div>
                        <button onClick={() => handleDelete(event._id)} style={{backgroundColor: 'red', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px'}}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManageEvents;