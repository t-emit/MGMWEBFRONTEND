// src/pages/academics/information-technology/FacultyDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { itDepartmentTabs, allItFacultyData } from './itConstants';
const FacultyDetailPage = () => {
const { facultyId } = useParams();
const [faculty, setFaculty] = useState(null);
const [loading, setLoading] = useState(true);
const currentDeptPath = "/academics/information-technology";

useEffect(() => {
    // Simulate fetching data
    const foundFaculty = allItFacultyData.find(f => f.id === facultyId);
    setFaculty(foundFaculty);
    setLoading(false);
}, [facultyId]);

if (loading) return <div className="container mx-auto mt-32 text-center">Loading...</div>;
if (!faculty) return <div className="container mx-auto mt-32 text-center text-red-600">Faculty member not found.</div>;

return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-900 to-cyan-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-teal-900 print:shadow-none print:rounded-none print:p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">{faculty.name}</h1>
            <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">{faculty.designation}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400 print:hidden"></div>
        </div>

        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6 print:hidden">
            <Link to="/" className="hover:text-cyan-600">Home</Link> / <Link to="/academics" className="hover:text-cyan-600">Academics</Link> / <Link to={currentDeptPath} className="hover:text-cyan-600">IT</Link> / <Link to={`${currentDeptPath}/faculty`} className="hover:text-cyan-600">Faculty</Link> / <span className="text-cyan-600 font-medium">{faculty.name}</span>
        </div>

        {/* Department Sub-Navigation Tabs */}
        <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
            <div className="px-4 py-2 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
            {itDepartmentTabs.map((tab) => {
                // Highlight 'Faculty Profile' tab
                const isActive = tab.path === `${currentDeptPath}/faculty`;
                return (
                <Link
                    key={tab.name}
                    to={tab.path}
                    className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                    ${isActive
                        ? 'bg-cyan-100 text-cyan-700 border-2 border-cyan-300 shadow-inner'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border border-gray-200'
                    }`}
                >
                    {tab.name}
                </Link>
                );
            })}
            </div>
        </nav>

        {/* Main Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Image */}
                <div className="md:w-1/3 flex-shrink-0 print:w-1/4">
                    <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 print:shadow-none print:border">
                        <img
                            src={faculty.img}
                            alt={faculty.name}
                            className="w-full h-auto object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                        />
                    </div>
                </div>

                {/* Details */}
                <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 print:text-2xl">{faculty.name}</h2>
                    <p className="text-xl text-cyan-700 font-medium mb-4 print:text-lg">{faculty.designation}</p>

                    <div className="grid grid-cols-1 gap-4 text-gray-700 mb-6 print:text-sm">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 print:border-none print:p-0 print:bg-white">
                            <p className="font-semibold text-gray-900 mb-1">Specialization</p>
                            <p>{faculty.specialization !== 'Not Available' ? faculty.specialization : '-'}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 print:border-none print:p-0 print:bg-white">
                            <p className="font-semibold text-gray-900 mb-1">Email</p>
                            {faculty.email && faculty.email !== 'NA' ? (
                                <a href={`mailto:${faculty.email}`} className="text-cyan-600 hover:underline print:text-gray-700 print:no-underline">{faculty.email}</a>
                            ) : '-'}
                        </div>
                        {/* Add more fields here like Qualification, Experience, etc. if available in data */}
                    </div>

                    {/* Placeholder for Tabs (Bio, Publications, etc.) - Consistent with typical detail page structure */}
                    <div className="mt-8 print:hidden">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                <button className="border-cyan-500 text-cyan-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                                    Biography
                                </button>
                                {/* Add other tabs here */}
                            </nav>
                        </div>
                        <div className="py-4 text-gray-600 prose">
                            <p>Detailed biography, research interests, and publications data will be populated here.</p>
                        </div>
                    </div>

                    <div className="mt-6 print:hidden">
                        <Link to={`${currentDeptPath}/faculty`} className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium">
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