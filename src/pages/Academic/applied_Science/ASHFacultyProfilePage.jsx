// src/pages/Academic/applied_Science/ASHFacultyProfilePage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, ashTeachingStaff } from './ashConstants';

const ASHFacultyProfilePage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/applied-science";

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Faculty Profile</h1>
        <p className="text-xl opacity-90 max-w-2xl">
          Meet the experienced faculty of the Applied Science & Humanities Department.
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
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-100 pb-4">
          Teaching Staff
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ashTeachingStaff.map((faculty) => (
            <div key={faculty.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1">
              <Link to={`${currentDeptPath}/faculty/${faculty.id}`} className="block">
                <img
                  src={faculty.img}
                  alt={faculty.name}
                  className="w-full h-48 object-cover object-top"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-blue-800 hover:underline">{faculty.name}</h4>
                  <p className="text-sm text-gray-600">{faculty.designation}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ASHFacultyProfilePage;