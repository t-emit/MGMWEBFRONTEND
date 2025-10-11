// src/pages/Academic/applied_Science/ASHProfilePage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, departmentProfileData } from './ashConstants';

const ASHProfilePage = () => {
  const location = useLocation();
  const { hod, introduction } = departmentProfileData;

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Applied Science & Humanities</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Foundational department fostering the core principles of engineering.
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
          Department Profile
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700">
          {/* HOD Card */}
          <div className="float-right w-full sm:w-80 ml-0 sm:ml-6 mb-6 rounded-lg overflow-hidden shadow-md border border-gray-200">
            <img
              alt={`${hod.name}, ${hod.designation}`}
              className="w-full h-auto object-cover"
              src={hod.image}
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-person.jpg'; }}
            />
            <div className="p-4 bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-800 mb-1">{hod.name}</h3>
              <p className="text-gray-600 mb-2">{hod.designation}</p>
              <a href={`mailto:${hod.email}`} className="text-indigo-600 hover:underline text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                {hod.email}
              </a>
            </div>
          </div>

          {/* Introduction Paragraphs */}
          {introduction.map((paragraph, index) => (
            <p key={index} className="leading-relaxed mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ASHProfilePage;