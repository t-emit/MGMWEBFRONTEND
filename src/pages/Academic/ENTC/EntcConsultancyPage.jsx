// src/pages/Academic/Entc/EntcConsultancyPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { entcDepartmentTabs, entcConsultancyResources } from './entcConstants';

const EntcConsultancyPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Consultancy</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Expert services and technical solutions offered by the E&TC Department to industry and community.
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.25V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7.25m4.75 0l4-4m0 0l-4-4m4 4H10"></path>
          </svg>
          E&TC Department Consultancy Services
        </h2>

        {entcConsultancyResources.map((resource) => (
          <div key={resource.id} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{resource.title}</h3>
            {resource.type === 'text' && (
              <p className="prose prose-lg max-w-none text-gray-700 leading-relaxed print:text-sm">
                {resource.content}
              </p>
            )}
            {/* Add other resource types like PDF, image, iframe if needed for consultancy */}
          </div>
        ))}

        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <p className="mb-4">
            Our department is dedicated to bridging the gap between academia and industry by offering valuable
            consultancy services. We strive to apply our expertise to real-world challenges, fostering innovation
             and contributing to the technological advancement of society.
          </p>
          <p>
            For more details or to initiate a consultancy project, please reach out to the Head of Department or the designated consultancy coordinator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntcConsultancyPage;