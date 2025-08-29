// src/pages/Academic/CSE/CSELaboratoryDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Import the cseLaboratories data to find individual lab details
import { cseLaboratories } from './CSELaboratoryPage'; // Adjust path if you move data to a common file

const CSELaboratoryDetailPage = () => {
    const { labId } = useParams(); // Get labId from URL (e.g., 'lab-01-programming-lab')
    const [labDetails, setLabDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const currentDeptPath = "/academics/computer-science-engineering"; // Base path for CSE department

    useEffect(() => {
        setLoading(true);
        setError(null);
        // Find the lab in the local data
        const foundLab = cseLaboratories.find(lab => lab.id === labId);

        if (foundLab) {
            setLabDetails(foundLab);
        } else {
            setError('Laboratory not found.');
        }
        setLoading(false);
    }, [labId]); // Re-run effect if labId changes

    if (loading) return <div className="text-center py-8 mt-32 text-gray-700">Loading laboratory details...</div>;
    if (error) return <div className="text-red-600 text-center py-8 mt-32">{error}</div>;
    if (!labDetails) return <div className="text-center py-8 mt-32 text-gray-700">Laboratory details not found.</div>;

    // Placeholder image for the lab. In a real app, you would have specific images per lab.
    const labImage = `/images/placeholder-lab.jpg`; // You should create this placeholder image in public/images/

    return (
        <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
            {/* Hero Section - Consistent with other redesigned pages */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-12 shadow-2xl relative overflow-hidden">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">{labDetails.name}</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10">Detailed information about this laboratory.</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
            </div>

            {/* Main Content Area for individual lab details */}
            <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
                    <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.107 1.107 0 011.082.858c.845 3.393 4.249 1.956 4.249 1.956a1.107 1.107 0 01.322 1.306c-1.314 1.32-1.119 3.003-.559 5.342a1.107 1.107 0 01-1.077 1.256c-3.19.231-5.748 2.247-5.748 2.247a1.107 1.107 0 01-1.272.063c-2.34-1.065-4.473-1.124-5.698-.246a1.107 1.107 0 01-.322-1.306c.66-.668.948-1.536.559-5.342a1.107 1.107 0 011.077-1.256c3.19-.231 5.748-2.247 5.748-2.247a1.107 1.107 0 011.272-.063z"></path></svg>
                    {labDetails.name}
                </h2>

                <div className="flex flex-col md:flex-row items-start md:space-x-8">
                    <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
                        <img
                            src={labImage}
                            alt={labDetails.name}
                            className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-lab.jpg'; }} // Fallback image
                        />
                    </div>
                    <div className="md:w-2/3 text-gray-700 leading-relaxed">
                        <p className="text-lg mb-2"><strong>Area:</strong> <span className="font-medium">{labDetails.area}</span></p>
                        <p className="text-lg mb-2"><strong>Incharge:</strong> <span className="font-medium">{labDetails.incharge}</span></p>
                        {/* Example of additional content you might fetch/display */}
                        <p className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm italic">
                            This is a placeholder for a more detailed description of the {labDetails.name}.
                            You might include information about equipment, software, research projects,
                            and student access policies here. The original HTML only provided basic table data.
                        </p>
                        <div className="mt-8">
                            <Link to={`${currentDeptPath}/labs`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                &larr; Back to Laboratory List
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSELaboratoryDetailPage;