// src/pages/academics/information-technology/FacultyDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Navigation tabs for the Information Technology department
const itDepartmentTabs = [
  { name: "Faculty Detail", path: "/academics/information-technology/faculty-detail" },
  { name: "Faculty Profile", path: "/academics/information-technology/faculty-profile" },
  { name: "Information Technology", path: "/academics/information-technology" },
  { name: "IT Achievements", path: "/academics/information-technology/achievements" },
  { name: "IT Curriculum", path: "/academics/information-technology/curriculum" },
  { name: "IT Departmental Activity", path: "/academics/information-technology/departmental-activity" },
  { name: "IT Laboratory Detail", path: "/academics/information-technology/laboratory-detail" },
  { name: "IT Laboratory", path: "/academics/information-technology/laboratory" },
  { name: "IT Profile", path: "/academics/information-technology/profile" },
  { name: "IT Programmes", path: "/academics/information-technology/programmes" },
  { name: "IT Research Publication", path: "/academics/information-technology/research-publication" },
  { name: "ITSA", path: "/academics/information-technology/itsa" },
  { name: "IT Training Placement", path: "/academics/information-technology/training-placement" },
  { name: "IT Vision Mission", path: "/academics/information-technology/vision-mission" },
  { name: "IT Consultancy", path: "/academics/information-technology/consultancy" },
  { name: "IT Departmental Committees", path: "/academics/information-technology/departmental-committees" },
];

// Import all faculty data from the department's profile page
import { allItFacultyData } from './FacultyProfilePage'; 

const FacultyDetailPage = () => {
    const { facultyId } = useParams(); // Get facultyId from URL
    const [facultyDetails, setFacultyDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const currentDeptPath = "/academics/information-technology"; // Base path for IT department

    useEffect(() => {
        setLoading(true);
        setError(null);
        
        // Find the faculty member from the imported local data array
        const foundFaculty = allItFacultyData.find(f => f.id === facultyId);

        if (foundFaculty) {
            setFacultyDetails(foundFaculty);
        } else {
            setError('Faculty member not found.');
        }
        setLoading(false);
    }, [facultyId]); // Re-run effect if facultyId changes

    if (loading) return <div className="text-center py-8 mt-32 text-gray-700">Loading faculty profile...</div>;
    if (error) return <div className="text-red-600 text-center py-8 mt-32">{error}</div>;
    if (!facultyDetails) return <div className="text-center py-8 mt-32 text-gray-700">Faculty profile not found.</div>;

    return (
        <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-teal-900 to-cyan-900 rounded-xl p-8 md:p-12 text-white mb-12 shadow-2xl relative overflow-hidden">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">{facultyDetails.name}'s Profile</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10">Detailed information about our faculty member.</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-cyan-800 border-b-2 border-cyan-200 pb-4 flex items-center">
                    <svg className="w-8 h-8 mr-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    {facultyDetails.name}
                </h2>

                <div className="flex flex-col md:flex-row items-start md:space-x-8">
                    <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
                        <img
                            src={facultyDetails.img}
                            alt={facultyDetails.name}
                            className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                        />
                    </div>
                    <div className="md:w-2/3 text-gray-700 leading-relaxed">
                        <p className="text-lg mb-2"><strong>Designation:</strong> <span className="font-medium">{facultyDetails.designation}</span></p>
                        <p className="text-lg mb-2"><strong>Specialization:</strong> <span className="font-medium">{facultyDetails.specialization}</span></p>
                        <p className="text-lg mb-2">
                            <strong>Email:</strong> {facultyDetails.email && facultyDetails.email !== 'NA' ?
                            <a href={`mailto:${facultyDetails.email}`} className="text-cyan-600 hover:underline">{facultyDetails.email}</a> : <span className="font-medium">Not Available</span>}
                        </p>
                        
                        <p className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm italic">
                            This is a placeholder for a more detailed biography, research interests,
                            publications, teaching philosophy, and other relevant information for {facultyDetails.name}.
                            You would typically fetch this additional content from an API or a data source.
                        </p>
                        <div className="mt-8">
                            <Link to={`${currentDeptPath}/faculty`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                                &larr; Back to Faculty List
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyDetailPage;