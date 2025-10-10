// src/pages/Academic/Civil/CivilLaboratoryDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { civilLaboratories, allCivilFacultyData } from './civilConstants'; // Import lab and faculty data

const CivilLaboratoryDetailPage = () => {
  const { labId } = useParams(); // Get labId from URL (e.g., 'strength-of-materials-laboratory')
  const [labDetails, setLabDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentDeptPath = "/academics/civil-engineering"; // Base path for Civil department

  useEffect(() => {
    setLoading(true);
    setError(null);
    const foundLab = civilLaboratories.find(lab => lab.id === labId);

    if (foundLab) {
      setLabDetails(foundLab);
    } else {
      setError('Laboratory not found.');
    }
    setLoading(false);
  }, [labId]); // Re-run effect if labId changes

  if (loading) return <div className="text-center py-8 mt-28 text-gray-700 print:mt-4">Loading laboratory details...</div>;
  if (error) return <div className="text-red-600 text-center py-8 mt-28 print:mt-4">{error}</div>;
  if (!labDetails) return <div className="text-center py-8 mt-28 text-gray-700 print:mt-4">Laboratory details not found.</div>;

  const inchargeFaculty = labDetails.incharge ? allCivilFacultyData.find(f => f.name === labDetails.incharge) : null;

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-12 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">{labDetails.name}</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">Detailed information about this specialized laboratory.</p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Main Content Area for individual laboratory details */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11V9m0 2a2 2 0 100 4m0-4a2 2 0 110 4m4-4h2m-2 0h-2m-4 0H8m-2 0H4"></path>
          </svg>
          {labDetails.name}
        </h2>

        <div className="flex flex-col md:flex-row items-start md:space-x-8 print:flex-col print:space-x-0">
          <div className="md:w-1/2 text-gray-700 leading-relaxed print:w-full print:text-sm">
            <p className="text-lg mb-2 print:text-base"><strong>Area:</strong> <span className="font-medium">{labDetails.area}</span></p>
            <p className="text-lg mb-2 print:text-base">
              <strong>Incharge:</strong>
              {inchargeFaculty ? (
                <Link to={`${currentDeptPath}/faculty/${inchargeFaculty.id}`} className="text-indigo-600 hover:underline print:text-gray-700 print:no-underline">
                  <span className="font-medium">{labDetails.incharge}</span>
                </Link>
              ) : (
                <span className="font-medium">{labDetails.incharge || 'Not Available'}</span>
              )}
            </p>
            {/* Placeholder for more detailed content about the lab */}
            <p className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm italic print:text-xs print:bg-white print:p-0 print:border-none print:shadow-none">
              This is a placeholder for a detailed description of the {labDetails.name}.
              It would include information about available equipment, experiments conducted,
              its importance to the curriculum, and any specialized research facilities.
              You would typically fetch this additional content from an API or a more extensive data source.
            </p>
            {/* Add more details like equipment list, images of the lab, etc. */}
            <div className="mt-8 print:hidden">
              <Link to={`${currentDeptPath}/labs`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                &larr; Back to Laboratories List
              </Link>
            </div>
          </div>
          {/* Optional: Add a gallery or diagram of the lab here */}
          <div className="md:w-1/2 flex-shrink-0 mt-6 md:mt-0 print:w-full print:mt-4">
            {/* Example: Replace with actual lab image if available */}
            <img
              src={`/images/civil/labs/${labDetails.id}.jpg`} // Assuming lab-specific images
              alt={labDetails.name}
              className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200 print:shadow-none print:border-none print:rounded-none"
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-lab.jpg'; }} // Fallback image
            />
            <p className="text-center text-gray-500 text-sm mt-2 print:text-xs">Image of the {labDetails.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilLaboratoryDetailPage;