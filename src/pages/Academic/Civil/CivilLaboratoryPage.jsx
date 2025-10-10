// src/pages/Academic/Civil/CivilLaboratoryPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { civilDepartmentTabs, civilLaboratories, allCivilFacultyData } from './civilConstants'; // Import updated lab and faculty data

const CivilLaboratoryPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/civil-engineering"; // Base path for Civil department

  // Helper to find faculty details for incharge if needed for linking
  const getFacultyForIncharge = (inchargeName) => {
    return allCivilFacultyData.find(f => f.name === inchargeName);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Laboratory theme (e.g., a beaker or lab flask) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4h-2V2h-4v2H8c-1.1 0-1.99.9-1.99 2L6 18c0 1.1.89 2 1.99 2H16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H9v-2h6v2zm3-4H6V6h12v8z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Laboratories</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Explore the state-of-the-art laboratories and facilities of the Civil Engineering Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {civilDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-6.75-3H9z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11V9m0 2a2 2 0 100 4m0-4a2 2 0 110 4m4-4h2m-2 0h-2m-4 0H8m-2 0H4"></path>
          </svg>
          Civil Engineering Laboratories
        </h2>

        {/* Laboratories Table */}
        <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
          <table className="w-full text-sm text-left text-gray-700 print:text-xs">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
              <tr>
                <th scope="col" className="py-3 px-3 md:px-4 rounded-tl-lg print:py-2 print:px-2">Sr. No.</th>
                <th scope="col" className="py-3 px-3 md:px-4 print:py-2 print:px-2">Laboratory Name</th>
                <th scope="col" className="py-3 px-3 md:px-4 print:py-2 print:px-2">Area</th>
                <th scope="col" className="py-3 px-3 md:px-4 rounded-tr-lg print:py-2 print:px-2">Laboratory Incharge</th>
              </tr>
            </thead>
            <tbody>
              {civilLaboratories.map((lab, index) => {
                const inchargeFaculty = lab.incharge ? getFacultyForIncharge(lab.incharge) : null;
                return (
                  <tr key={lab.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                    <td className="py-3 px-3 md:px-4 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-2">
                      {lab.srNo}
                    </td>
                    <td className="py-3 px-3 md:px-4 print:py-2 print:px-2">
                      <Link to={`${currentDeptPath}/labs/${lab.id}`} className="font-semibold text-blue-700 hover:underline">
                        {lab.name}
                      </Link>
                    </td>
                    <td className="py-3 px-3 md:px-4 text-center print:py-2 print:px-2">
                      {lab.area}
                    </td>
                    <td className="py-3 px-3 md:px-4 text-center print:py-2 print:px-2">
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

        {/* You could add a general description about the labs here if desired */}
        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <p className="mb-4">
            The Civil Engineering Department is equipped with modern laboratories that provide hands-on experience
            and facilitate advanced research for students and faculty. Each laboratory is designed to complement
            theoretical knowledge with practical application across various specializations within Civil Engineering.
          </p>
          <p>
            From testing the strength of materials to analyzing soil properties and environmental parameters,
            our labs are central to fostering innovation and developing skilled engineers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CivilLaboratoryPage;