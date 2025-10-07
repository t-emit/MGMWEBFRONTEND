import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/faculty';

function ManageFaculty() {
    const [faculty, setFaculty] = useState([]);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [department, setDepartment] = useState('');
    const [photoFile, setPhotoFile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => { fetchFaculty(); }, []);

    const fetchFaculty = async () => { /* ... similar to fetchEvents ... */ };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('department', department);
        formData.append('photo', photoFile);

        try {
            const token = localStorage.getItem('admin_token');
            const config = { headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}` } };
            await axios.post(API_URL, formData, config);
            // ... clear form and fetchFaculty()
        } catch (error) { console.error("Error creating faculty:", error); }
    };
    
    const handleDelete = async (id) => { /* ... similar to handleDelete in ManageEvents ... */ };

    return (
        <div>
            <h1>Manage Faculty</h1>
            <form onSubmit={handleSubmit} style={{ margin: '40px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h3>Add New Faculty Member</h3>
                <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Title (e.g., Professor)" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
                <label>Photo:</label>
                <input type="file" onChange={(e) => setPhotoFile(e.target.files[0])} required />
                <button type="submit">Add Faculty</button>
            </form>

            <div>
                <h3>Current Faculty</h3>
                {faculty.map(member => (
                    <div key={member._id} style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img src={member.photoUrl} alt={member.name} style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%'}} />
                        <p>{member.name} - {member.title}, {member.department}</p>
                        <button onClick={() => handleDelete(member._id)} style={{backgroundColor: 'red'}}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManageFaculty;