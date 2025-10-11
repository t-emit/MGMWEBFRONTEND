// src/pages/Academic/Entc/EntcDepartmentalCommitteesPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { entcDepartmentTabs, entcDepartmentalCommittees } from './entcConstants';

const EntcDepartmentalCommitteesPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.458-4.192A4.001 4.001 0 0110 4c.828 0 1.636.19 2.378.542l.716-.716A1 1 0 0114 4a1 1 0 011 1 1 1 0 01-1.707.707l-.716-.716zM5.707 6.293A1 1 0 015 6a1 1 0 01-1-1 1 1 0 011.707-.707l.716.716A4.001 4.001 0 0110 4a4.001 4.001 0 01-2.378-.542l-.716.716zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm15 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-9.316 6.949a1 1 0 01-1.265-.633l-4-12a1 1 0 111.898-.632l4 12a1 1 0 01-1.265.633z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Departmental Committees</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Key committees driving governance, academic excellence, and student welfare in the E&TC Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {entcDepartmentTabs.map((tab) => {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2m0 0l3-3m-3 3l-3-3m6 0a2 2 0 100-4 2 2 0 000 4zm0 0l-3-3"></path>
          </svg>
          E&TC Department Committees
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entcDepartmentalCommittees.map((committee, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 print:shadow-none print:border print:rounded-none">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{committee.name}</h3>
              <p className="text-gray-700 text-sm mb-4">{committee.description}</p>
              {committee.url && (
                <a
                  href={committee.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
                >
                  View Details
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <p className="mb-4">
            These committees play a vital role in the effective functioning and continuous improvement of the
            Electronics & Telecommunication Engineering Department. They ensure transparent decision-making,
            student-centric policies, and alignment with institutional goals and industry standards.
          </p>
          <p>
            Through their dedicated efforts, the department strives to provide a nurturing and dynamic environment
            for both students and faculty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntcDepartmentalCommitteesPage;