// src/pages/Academic/applied_Science/ASHLaboratoryPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, ashLaboratories, allASHFacultyData } from './ashConstants';

const ASHLaboratoryPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/applied-science";

  const getFacultyForIncharge = (inchargeName) => {
    return allASHFacultyData.find(f => f.name === inchargeName);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4h-2V2h-4v2H8c-1.1 0-1.99.9-1.99 2L6 18c0 1.1.89 2 1.99 2H16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H9v-2h6v2zm3-4H6V6h12v8z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Laboratories</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Explore the state-of-the-art facilities of the Applied Science & Humanities Department.
        </p>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2">
          {ashDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out text-sm font-medium
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4">
          Department Laboratory Facilities
        </h2>
        
        <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800">
              <tr>
                <th scope="col" className="py-3 px-4">Sr. No.</th>
                <th scope="col" className="py-3 px-4">Laboratory Name</th>
                <th scope="col" className="py-3 px-4">Area</th>
                <th scope="col" className="py-3 px-4">Laboratory Incharge</th>
              </tr>
            </thead>
            <tbody>
              {ashLaboratories.map((lab, index) => {
                const inchargeFaculty = lab.incharge ? getFacultyForIncharge(lab.incharge) : null;
                return (
                  <tr key={lab.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50`}>
                    <td className="py-3 px-4 font-medium text-gray-900">{lab.srNo}</td>
                    <td className="py-3 px-4">
                      <Link to={`${currentDeptPath}/labs/${lab.id}`} className="font-semibold text-blue-700 hover:underline">
                        {lab.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4">{lab.area}</td>
                    <td className="py-3 px-4">
                      {inchargeFaculty ? (
                        <Link to={`${currentDeptPath}/faculty/${inchargeFaculty.id}`} className="text-indigo-600 hover:underline">
                          {lab.incharge}
                        </Link>
                      ) : (
                        lab.incharge || 'N/A'
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ASHLaboratoryPage;