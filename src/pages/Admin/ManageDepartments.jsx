// src/pages/Admin/ManageDepartments.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageDepartments = () => {
    const [departments, setDepartments] = useState([]);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const token = localStorage.getItem('adminToken');

    const fetchDepartments = async () => {
        try {
            const { data } = await axios.get('/api/departments');
            setDepartments(data);
        } catch (err) {
            setError('Failed to fetch departments.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    const handleAddDepartment = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!name || !code) {
            setError('Department Name and Code are required.');
            return;
        }

        try {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const { data } = await axios.post('/api/departments', { name, code, description }, config);
            setDepartments([...departments, data]);
            setMessage('Department added successfully!');
            setName('');
            setCode('');
            setDescription('');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add department.');
        }
    };

    const handleDeleteDepartment = async (id) => {
        if (window.confirm('Are you sure you want to delete this department?')) {
            try {
                const config = { headers: { Authorization: `Bearer ${token}` } };
                await axios.delete(`/api/departments/${id}`, config);
                setDepartments(departments.filter((dept) => dept._id !== id));
                setMessage('Department deleted successfully!');
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to delete department.');
            }
        }
    };

    if (loading) return <div>Loading departments...</div>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Departments</h1>

            {/* Add Department Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Add New Department</h2>
                <form onSubmit={handleAddDepartment} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Department Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., Computer Science & Engineering"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Department Code</label>
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value.toUpperCase())}
                            placeholder="e.g., CSE"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description (Optional)</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="3"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                        ></textarea>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Add Department
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {message && <p className="text-green-500 mt-2">{message}</p>}
                </form>
            </div>

            {/* Department List */}
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left">Name</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left">Code</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((dept) => (
                            <tr key={dept._id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white">{dept.name}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white">{dept.code}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white">
                                    <button
                                        onClick={() => handleDeleteDepartment(dept._id)}
                                        className="text-red-600 hover:text-red-900 font-semibold"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDepartments;