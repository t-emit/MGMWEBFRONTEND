import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cseProgramAssessmentCommittee, cseDepartmentAdvisoryBoard, cseDepartmentTabs } from './cseConstants'; // Import from constants

const CseDepartmentCommitteesPage = () => {
  const location = useLocation();

  // State to manage the visibility of each main accordion section
  const [isPacVisible, setPacVisible] = useState(false);
  const [isDabVisible, setDabVisible] = useState(false);

  // Reusable component to render committee tables
  const CommitteeTable = ({ members }) => (
    <div className="overflow-x-auto relative shadow-md rounded-lg mt-6 border border-gray-300">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-white uppercase bg-indigo-700">
          <tr>
            {['Sr. No.', 'Name', 'Designation', 'Status'].map((header, index) => (
              <th key={index} scope="col" className={`py-3 px-4 md:px-6 ${index === 0 ? 'rounded-tl-lg' : ''} ${index === 3 ? 'rounded-tr-lg' : ''} whitespace-nowrap`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((member, rowIndex) => (
            <tr key={`member-${rowIndex}`} className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150`}>
              <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-pre-line">{member.srNo}</td>
              <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-pre-line">{member.name}</td>
              <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-pre-line">{member.designation}</td>
              <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-pre-line">{member.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        {/* Subtle background SVG for visual interest */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">CSE Departmental Committees</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Overview of the Program Assessment Committee (PAC) and Departmental Advisory Board (DAB).
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs - NON-STICKY */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300`}>
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 overflow-x-auto">
          {cseDepartmentTabs.map((tab) => {
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

      {/* Main Content Area - Consistent card design and improved readability */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Departmental Committees
        </h2>

        <div className="space-y-6"> {/* Increased spacing between accordion items */}

          {/* Program Assessment Committee (PAC) Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3
              className={`flex items-center justify-between text-2xl font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-200 rounded-lg p-3 -m-3 md:-m-4 ${isPacVisible ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-800'}`}
              onClick={() => setPacVisible(!isPacVisible)}
            >
              <span>Program Assessment Committee (PAC)</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isPacVisible ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </h3>
            {isPacVisible && (
              <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg bg-white p-4 rounded-lg shadow-sm">
                <p className="mb-4">{cseProgramAssessmentCommittee.description}</p>
                <h4 className="text-xl font-bold text-indigo-700 mb-3">Roles and responsibilities of the PAC:</h4>
                <ul className="list-decimal list-inside pl-4 space-y-2 mb-6">
                  {cseProgramAssessmentCommittee.roles.map((role, index) => (
                    <li key={index} className="pl-2">{role}</li>
                  ))}
                </ul>
                <h4 className="text-xl font-bold text-indigo-700 mb-3">Program Assessment Committee Members</h4>
                <CommitteeTable members={cseProgramAssessmentCommittee.members} />
              </div>
            )}
          </div>

          {/* Department Advisory Board (DAB) Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3
              className={`flex items-center justify-between text-2xl font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-200 rounded-lg p-3 -m-3 md:-m-4 ${isDabVisible ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-800'}`}
              onClick={() => setDabVisible(!isDabVisible)}
            >
              <span>Department Advisory Board (DAB)</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isDabVisible ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </h3>
            {isDabVisible && (
              <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg bg-white p-4 rounded-lg shadow-sm">
                <p className="mb-4">{cseDepartmentAdvisoryBoard.description}</p>
                <h4 className="text-xl font-bold text-indigo-700 mb-3">Roles and responsibilities of DAB:</h4>
                <ul className="list-decimal list-inside pl-4 space-y-2 mb-6">
                  {cseDepartmentAdvisoryBoard.roles.map((role, index) => (
                    <li key={index} className="pl-2">{role}</li>
                  ))}
                </ul>
                <h4 className="text-xl font-bold text-indigo-700 mb-3">Department Advisory Board Members</h4>
                <CommitteeTable members={cseDepartmentAdvisoryBoard.members} />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CseDepartmentCommitteesPage;