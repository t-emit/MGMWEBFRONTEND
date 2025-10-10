// src/pages/Academic/Civil/CivilConsultancyPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { civilDepartmentTabs, civilConsultancyResources } from './civilConstants'; // Import consultancy data

const CivilConsultancyPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/civil-engineering"; // Base path for Civil department

  // State to manage which accordion item is open
  const [openSection, setOpenSection] = useState('consultancy-section'); // Default open: Consultancy

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Consultancy theme (e.g., handshake, gear, or document icon) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.88-7-7.93s3.05-7.44 7-7.93v15.86z"></path>
            <path d="M12 11h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c-.55 0-1 .45-1 1s-.45-1-1-1z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Consultancy & Resources</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Expertise offered and valuable learning resources from the Civil Engineering Department.
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-3M8 21h8m-4 2v-4"></path>
          </svg>
          Departmental Consultancy & Resources
        </h2>

        <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          {civilConsultancyResources.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                onClick={() => toggleSection(section.id)}
              >
                <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                  {section.title}
                </h3>
                <svg
                  className={`w-6 h-6 text-indigo-500 transition-transform duration-200 ${
                    openSection === section.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openSection === section.id && (
                <div className="p-4 border-t border-gray-200 bg-white print:p-0 print:border-none">
                  {section.type === 'iframe' && (
                    <div className="space-y-4">
                      {/* Using Tailwind's aspect-ratio plugin or manually for responsive iframes */}
                      <div className="relative" style={{ paddingTop: '75%' }}> {/* 4:3 aspect ratio (75%), adjust as needed */}
                        <iframe
                          src={section.iframeSrc}
                          className="absolute inset-0 w-full h-full border rounded-md"
                          title={section.title}
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-center print:hidden">
                        <a
                          href={section.iframeSrc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:underline font-medium"
                        >
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2a1 1 0 10-2 0v2H5V7h2a1 1 0 000-2H5z"></path></svg>
                          {section.linkText || `View ${section.title}`}
                        </a>
                      </p>
                      {/* For print, display a link instead of embedding iframe */}
                      <p className="hidden print:block text-center text-gray-800 text-sm">
                        <a href={section.iframeSrc} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                          {section.linkText || `View ${section.title}`} at {section.iframeSrc}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CivilConsultancyPage;