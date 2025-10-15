// src/pages/Academics/InformationTechnology/ITLaboratoryDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { itDepartmentTabs, itLaboratories } from './itConstants'; // Import from itConstants

const ITLaboratoryDetailPage = () => {
    const { labId } = useParams(); // Get labId from URL
    const [labDetails, setLabDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const currentDeptPath = "/academics/information-technology"; // Base path for IT department

    useEffect(() => {
        setLoading(true);
        setError(null);
        // Find the lab in the imported local data
        const foundLab = itLaboratories.find(lab => lab.id === labId);

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

    // Placeholder image for the lab (you can add specific images to itConstants later)
    const labImage = labDetails.image || '/images/placeholder-lab.jpg';

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">{labDetails.name}</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">Detailed information about this laboratory.</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
            </div>

            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-6 print:hidden">
                <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <Link to={currentDeptPath} className="hover:text-indigo-600">IT</Link> / <Link to={`${currentDeptPath}/laboratories`} className="hover:text-indigo-600">Laboratories</Link> / <span className="text-indigo-600 font-medium">{labDetails.name}</span>
            </div>

            {/* Department Sub-Navigation Tabs */}
            <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
                <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
                    {itDepartmentTabs.map((tab) => {
                        const isActive = tab.path === `${currentDeptPath}/laboratories`; // Highlight the main lab tab
                        return (
                            <Link
                                key={tab.name}
                                to={tab.path}
                                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                                  ${isActive
                                    ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300 shadow-inner'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 border border-gray-200'
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
                <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
                    <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.107 1.107 0 011.082.858c.845 3.393 4.249 1.956 4.249 1.956a1.107 1.107 0 01.322 1.306c-1.314 1.32-1.119 3.003-.559 5.342a1.107 1.107 0 01-1.077 1.256c-3.19.231-5.748 2.247-5.748 2.247a1.107 1.107 0 01-1.272.063c-2.34-1.065-4.473-1.124-5.698-.246a1.107 1.107 0 01-.322-1.306c.66-.668.948-1.536.559-5.342a1.107 1.107 0 011.077-1.256c3.19-.231 5.748-2.247 5.748-2.247a1.107 1.107 0 011.272-.063z"></path>
                    </svg>
                    {labDetails.name}
                </h2>

                <div className="flex flex-col md:flex-row items-start md:space-x-8">
                    <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0 print:w-1/4">
                        <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 print:shadow-none print:border">
                            <img
                                src={labImage}
                                alt={labDetails.name}
                                className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none"
                                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-lab.jpg'; }}
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 text-gray-700 leading-relaxed print:text-sm">
                        <p className="text-lg mb-2"><strong>Area:</strong> <span className="font-medium">{labDetails.area}</span></p>
                        <p className="text-lg mb-2"><strong>Incharge:</strong> <span className="font-medium">{labDetails.incharge}</span></p>
                        <p className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm italic print:border-none print:bg-white print:p-0">
                            {labDetails.description || `This is a placeholder for a more detailed description of the ${labDetails.name}. You might include information about specific equipment, available software, and the types of projects conducted here.`}
                        </p>
                        <div className="mt-8 print:hidden">
                            <Link to={`${currentDeptPath}/laboratories`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                &larr; Back to Laboratory List
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITLaboratoryDetailPage;