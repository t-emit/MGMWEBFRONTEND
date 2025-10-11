// src/pages/Academic/Entc/EntcDepartmentalActivityPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { entcDepartmentTabs, entcDepartmentalActivities, entcDepartmentalActivityGallery } from './entcConstants';

const EntcDepartmentalActivityPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/electronincs-telecommunication-engineering"; // Base path for E&TC department

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Departmental Activities</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Highlights of events, workshops, and initiatives organized by the E&TC Department.
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          E&TC Departmental Activities
        </h2>

        {/* Activity List Section */}
        <div className="mb-10">
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg md:text-xl leading-relaxed print:text-sm">
            {entcDepartmentalActivities.map((activity) => (
              <li key={activity.id} className="relative pl-4">
                <span className="absolute left-0 top-0 text-indigo-600 font-bold">&#8226;</span>
                {activity.type === 'pdf' && activity.pdf && (
                  <a
                    href={activity.pdf.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 hover:text-indigo-900 hover:underline transition-colors font-medium"
                  >
                    {activity.title}
                  </a>
                )}
                {/* Add other activity types (text, rich-text, image) if needed, similar to civil's structure */}
              </li>
            ))}
          </ul>
        </div>

        {/* Separator */}
        <hr className="my-8 border-gray-200" />

        {/* Image Gallery Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-indigo-700 mb-6 border-b border-indigo-100 pb-2 print:text-xl">Activity Highlights Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {entcDepartmentalActivityGallery.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300 print:shadow-none print:border print:rounded-none">
                <a href={image.src} data-lightbox="entc-activities" data-title={image.alt}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out print:h-32"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-image.jpg'; }} // Fallback image
                  />
                  <div className="p-3 bg-gray-50 text-center text-sm text-gray-600 group-hover:text-indigo-700 print:text-xs print:bg-white">
                    {image.alt}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <p className="mb-4">
            The Electronics & Telecommunication Engineering Department regularly organizes various activities
            to enrich the academic and professional development of its students and faculty. These include
            workshops, expert lectures, technical competitions, and awareness programs.
          </p>
          <p>
            Our aim is to provide a dynamic platform for knowledge sharing, skill enhancement, and fostering
            a collaborative learning environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntcDepartmentalActivityPage;