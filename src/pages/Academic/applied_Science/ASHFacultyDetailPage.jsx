// src/pages/Academic/applied_Science/ASHFacultyDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allASHFacultyData } from './ashConstants';

const ASHFacultyDetailPage = () => {
    const { facultyId } = useParams();
    const [facultyDetails, setFacultyDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const currentDeptPath = "/academics/applied-science";

    useEffect(() => {
        const foundFaculty = allASHFacultyData.find(f => f.id === facultyId);
        setFacultyDetails(foundFaculty);
        setLoading(false);
    }, [facultyId]);

    if (loading) return <div className="text-center py-8 mt-28">Loading...</div>;
    if (!facultyDetails) return <div className="text-red-600 text-center py-8 mt-28">Faculty member not found.</div>;

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-12 shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{facultyDetails.name}'s Profile</h1>
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100">
                <div className="flex flex-col md:flex-row items-start md:space-x-8">
                    <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
                        <img
                            src={facultyDetails.img}
                            alt={facultyDetails.name}
                            className="w-full h-auto rounded-lg shadow-md border"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                        />
                    </div>
                    <div className="md:w-2/3 text-gray-700 leading-relaxed">
                        <h2 className="text-3xl font-bold mb-4 text-indigo-800">{facultyDetails.name}</h2>
                        <p className="text-lg mb-2"><strong>Designation:</strong> {facultyDetails.designation}</p>
                        <p className="text-lg mb-2"><strong>Specialization:</strong> {facultyDetails.specialization}</p>
                        <p className="text-lg mb-4">
                            <strong>Email:</strong> 
                            <a href={`mailto:${facultyDetails.email}`} className="text-indigo-600 hover:underline ml-2">{facultyDetails.email}</a>
                        </p>
                        <div className="mt-8">
                            <Link to={`${currentDeptPath}/faculty`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                                &larr; Back to Faculty List
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ASHFacultyDetailPage;