import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; // CORRECT way to get the token

function ManageFaculty() {
    const [faculty, setFaculty] = useState([]);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [department, setDepartment] = useState('');
    const [photoFile, setPhotoFile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const { token } = useAuth(); // Get token from context

    const fetchFaculty = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/faculty`);
            setFaculty(res.data);
        } catch (err) {
            setError('Failed to fetch faculty.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchFaculty();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('department', department);
        if (photoFile) { // Only append photo if one is selected
            formData.append('photo', photoFile);
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            };
            await axios.post('http://localhost:5000/api/faculty', formData, config);
            
            // Clear form and refresh list
            setName('');
            setTitle('');
            setDepartment('');
            setPhotoFile(null);
            document.getElementById('photo-input').value = null; // Reset file input
            fetchFaculty();
        } catch (error) {
            setError("Error creating faculty member.");
            console.error("Error creating faculty:", error);
        }
    };
    
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this faculty member?')) {
            try {
                const config = { headers: { 'Authorization': `Bearer ${token}` } };
                await axios.delete(`http://localhost:5000/api/faculty/${id}`, config);
                setFaculty(faculty.filter(member => member._id !== id));
            } catch (err) {
                setError('Failed to delete faculty member.');
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Faculty</h1>

            {/* Add New Faculty Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Add New Faculty Member</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    <input type="text" placeholder="Title (e.g., Professor)" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Photo (Optional)</label>
                        <input id="photo-input" type="file" onChange={(e) => setPhotoFile(e.target.files[0])} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Faculty</button>
                </form>
            </div>

            {/* Current Faculty List */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Current Faculty</h2>
                {isLoading ? <p>Loading faculty...</p> : (
                    <div className="space-y-4">
                        {faculty.map(member => (
                            <div key={member._id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    {member.profileImageUrl ? (
                                        <img src={member.profileImageUrl} alt={member.name} className="w-12 h-12 object-cover rounded-full" />
                                    ) : (
                                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </div>
                                    )}
                                    <div>
                                        <p className="font-bold">{member.name}</p>
                                        <p className="text-sm text-gray-600">{member.title}, {member.department}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(member._id)} className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600">Delete</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ManageFaculty;