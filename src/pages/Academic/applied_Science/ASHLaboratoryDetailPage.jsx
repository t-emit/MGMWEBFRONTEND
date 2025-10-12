import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ashLaboratories, allASHFacultyData } from './ashConstants';

const ASHLaboratoryDetailPage = () => {
  const { labId } = useParams();
  const lab = ashLaboratories.find(l => l.id === labId);

  if (!lab) {
    return (
        <div className="container mx-auto px-4 py-8 mt-28 text-center">
            <h1 className="text-3xl font-bold text-red-600">Laboratory Not Found</h1>
            <Link to="/academics/applied-science/labs" className="mt-6 inline-block px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                &larr; Back to Laboratory List
            </Link>
        </div>
    );
  }

  const incharge = allASHFacultyData.find(f => f.name === lab.incharge);

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-4xl">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6 border-b pb-4">{lab.name}</h1>
        <div className="text-gray-700 space-y-4">
            <p><span className="font-bold text-gray-800">Area:</span> {lab.area}</p>
            <p><span className="font-bold text-gray-800">Lab Incharge:</span> 
                {incharge ? (
                    <Link to={`/academics/applied-science/faculty/${incharge.id}`} className="text-indigo-600 hover:underline ml-2">{lab.incharge}</Link>
                ) : (
                    <span className="ml-2">{lab.incharge}</span>
                )}
            </p>
            <div className="bg-gray-50 p-4 rounded border border-gray-200 italic mt-4">
                <p>Details regarding specific equipment, experiments conducted, and the role of the {lab.name} in the curriculum will be updated here soon.</p>
            </div>
        </div>
        <Link to="/academics/applied-science/labs" className="mt-8 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium">
            &larr; Back to Labs List
        </Link>
      </div>
    </div>
  );
};
export default ASHLaboratoryDetailPage;