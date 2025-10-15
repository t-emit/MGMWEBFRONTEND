// src/pages/Academic/IT/ITLaboratoryPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
// Data for IT laboratories, extracted from the HTML and given unique IDs
export const itLaboratories = [
  { srNo: 1, id: 'multimedia-and-database-laboratory', name: 'Multimedia and Database Laboratory', area: '88.36 sq.mt.', incharge: 'Mr. Waghmare Anil B.' },
  { srNo: 2, id: 'web-technologies-laboratory', name: 'Web Technologies Laboratory', area: '62.08 sq. mt.', incharge: 'Mr. Yadav R. S.' },
  { srNo: 3, id: 'operating-system-linux-laboratory', name: 'Operating System & Linux Laboratory', area: '62.08 sq. mt.', incharge: 'Mr. Ambulgekar R. M.' },
  { srNo: 4, id: 'internet-laboratory', name: 'Internet Laboratory', area: '170.72 sq. mt.', incharge: 'Mr. Bandewar S. P.' },
  { srNo: 5, id: 'server-room', name: 'Server Room', area: '12.78 sq. mt.', incharge: 'Ritesh Gangasingh Bais' },
];

const ITLaboratoryPage = () => {
  const location = useLocation(); // Hook to get the current URL path
  const currentDeptPath = "/academics/information-technology"; // Base path for IT department

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-900 to-cyan-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Laboratories</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Explore the advanced laboratory facilities in the Information Technology Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300`}>
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 overflow-x-auto">
          {itDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
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
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-cyan-800 border-b-2 border-cyan-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Information Technology Laboratories
        </h2>

        <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-cyan-700 to-cyan-800">
              <tr>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg">Sr. No.</th>
                <th scope="col" className="py-4 px-4 md:px-6">Laboratory Name</th>
                <th scope="col" className="py-4 px-4 md:px-6">Area</th>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg">Laboratory Incharge</th>
              </tr>
            </thead>
            <tbody>
              {itLaboratories.map((lab, index) => (
                <tr key={lab.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-cyan-50 transition-colors duration-150`}>
                  <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                    {lab.srNo}
                  </td>
                  <td className="py-4 px-4 md:px-6">
                    <Link to={`${currentDeptPath}/labs/${lab.id}`} className="font-semibold text-blue-800 hover:underline">
                      {lab.name}
                    </Link>
                  </td>
                  <td className="py-4 px-4 md:px-6">
                    {lab.area}
                  </td>
                  <td className="py-4 px-4 md:px-6">
                    {lab.incharge}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4">&nbsp;</p>
      </div>
    </div>
  );
};

export default ITLaboratoryPage;