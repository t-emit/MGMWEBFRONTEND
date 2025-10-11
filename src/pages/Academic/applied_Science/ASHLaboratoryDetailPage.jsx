// src/pages/Academic/applied_Science/ASHLaboratoryDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ashLaboratories, allASHFacultyData } from './ashConstants';

const ASHLaboratoryDetailPage = () => {
  const { labId } = useParams();
  const [labDetails, setLabDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentDeptPath = "/academics/applied-science";

  useEffect(() => {
    const foundLab = ashLaboratories.find(lab => lab.id === labId);
    setLabDetails(foundLab);
    setLoading(false);
  }, [labId]);

  if (loading) return <div className="text-center py-8 mt-28">Loading details...</div>;
  if (!labDetails) return <div className="text-red-600 text-center py-8 mt-28">Laboratory not found.</div>;

  const inchargeFaculty = labDetails.incharge ? allASHFacultyData.find(f => f.name === labDetails.incharge) : null;

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{labDetails.name}</h1>
        <p className="text-xl opacity-90 max-w-2xl">Detailed information about our department's facility.</p>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-4">
          Laboratory Overview
        </h2>

        <div className="flex flex-col md:flex-row items-start md:space-x-8">
          <div className="md:w-1/2 text-gray-700 leading-relaxed">
            <p className="text-lg mb-2"><strong>Area:</strong> <span className="font-medium">{labDetails.area}</span></p>
            <p className="text-lg mb-4">
              <strong>Incharge:</strong>
              {inchargeFaculty ? (
                <Link to={`${currentDeptPath}/faculty/${inchargeFaculty.id}`} className="text-indigo-600 hover:underline font-medium ml-2">
                  {labDetails.incharge}
                </Link>
              ) : (
                <span className="font-medium ml-2">{labDetails.incharge || 'Not Available'}</span>
              )}
            </p>
            
            <p className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 italic">
              A detailed description of the {labDetails.name} would be presented here, including information about the equipment, the types of experiments conducted, and its role in the academic curriculum.
            </p>
            
            <div className="mt-8">
              <Link to={`${currentDeptPath}/labs`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                &larr; Back to Laboratories List
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex-shrink-0 mt-6 md:mt-0">
            <img
              src={`/images/labs/ash/${labDetails.id}.jpg`} // Assumes a naming convention for lab images
              alt={`Image of ${labDetails.name}`}
              className="w-full h-auto object-cover rounded-lg shadow-md border"
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-lab.jpg'; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASHLaboratoryDetailPage;