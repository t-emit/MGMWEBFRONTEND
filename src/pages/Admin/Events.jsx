// frontend/src/pages/Admin/Events.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; // To get the auth token

const API_URL = 'http://localhost:5000/api/events'; // Your backend URL

function ManageEvents() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    
    // Form state
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState('news'); // Default to 'news'

    const { token } = useAuth(); // Get the token from our context

    // Function to fetch all events
    const fetchEvents = async () => {
        try {
            const res = await axios.get('${import.meta.env.VITE_API_URL}/api/events');
            setEvents(res.data);
        } catch (err) {
            setError('Failed to fetch events.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const newEvent = { title, date, description, link, type };
        
        try {
            const res = await axios.post('http://localhost:5000/api/events', newEvent, {
                headers: {
                    'Authorization': `Bearer ${token}` // Send the token for verification
                }
            });
            setEvents([res.data, ...events]); // Add new event to the top of the list
            // Clear form
            setTitle(''); setDate(''); setDescription(''); setLink(''); setType('news');
        } catch (err) {
            setError('Failed to add event. Please try again.');
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await axios.delete(`http://localhost:5000/api/events/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setEvents(events.filter(event => event._id !== id)); // Remove from UI
            } catch (err) {
                setError('Failed to delete event.');
                console.error(err);
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Manage News & Events</h1>

            {/* Add New Event Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Link (Optional)</label>
                        <input type="url" value={link} onChange={(e) => setLink(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Type</label>
                        <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                            <option value="news">News</option>
                            <option value="event">Event</option>
                        </select>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Item</button>
                </form>
            </div>

            {/* Current Events List */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Current Items</h2>
                {isLoading ? <p>Loading...</p> : (
                    <div className="space-y-4">
                        {events.map(event => (
                            <div key={event._id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold">{event.title} <span className="text-xs font-normal text-gray-500 uppercase bg-gray-100 p-1 rounded">{event.type}</span></h3>
                                    <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                                </div>
                                <button onClick={() => handleDelete(event._id)} className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600">Delete</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageEvents;