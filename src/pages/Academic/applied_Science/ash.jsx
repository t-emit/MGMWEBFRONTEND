// src/pages/Academic/ASH/AppliedScienceHumanitiesPage.jsx
import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom'; // Import Outlet
import { appliedScienceDepartmentTabs } from '../../../data/appliedScienceDepartmentTabs'; // Correct path

const AppliedScienceHumanitiesPage = () => {
  const location = useLocation();

  // Determine the current active tab for styling
  const getActiveTabClass = (path) => {
    return location.pathname === path
      ? 'bg-purple-100 text-purple-700 border-2 border-purple-300 shadow-inner'
      : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600 border border-gray-200';
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-purple-800 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Applied Science &amp; Humanities</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Comprehensive profile of the Applied Science &amp; Humanities Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs (Now placed here, visible always) */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {appliedScienceDepartmentTabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                ${getActiveTabClass(tab.path)}`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* This is where nested route content will be rendered */}
      <Outlet />
    </div>
  );
};

export default AppliedScienceHumanitiesPage;