// src/pages/Academics/InformationTechnology/ITDepartmentalActivityPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itDepartmentalActivities } from './itConstants';

const ITDepartmentalActivityPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/information-technology";

  // Helper component for rendering image galleries
  const ImageGallery = ({ images }) => {
    if (!images || images.length === 0) return null;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 my-6 print:grid-cols-2 print:gap-4">
        {images.map((img, idx) => (
          <figure key={idx} className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 print:border print:shadow-none print:p-2">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover rounded-md mb-2 shadow-md transform hover:scale-105 transition-transform duration-300 print:w-auto print:h-auto print:object-contain"
              loading="lazy"
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-image.jpg'; }}
            />
            {img.caption && (
              <figcaption className="text-center text-sm italic text-gray-600 print:text-xs">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  };

  // Helper component for activity sections to avoid repetition (now dynamic)
  const renderActivitySection = (activity, isSubsection = false) => (
    <div key={activity.id} className={`${isSubsection ? 'mt-8 border-t border-gray-100 pt-6' : 'mb-12 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 print:p-4 print:bg-white print:border'}`}>
      <h3 className={`font-bold ${isSubsection ? 'text-xl text-indigo-700' : 'text-2xl md:text-3xl text-indigo-800'} mb-2 print:text-lg`}>
        {activity.title}
      </h3>
      {!isSubsection && activity.speakers && (
        <p className="text-md font-semibold text-gray-600 mb-1 print:text-sm">{activity.speakers}</p>
      )}
      {!isSubsection && activity.date && (
        <p className="text-sm text-gray-500 mb-4 italic print:text-xs">{activity.date}</p>
      )}
      {activity.description && (
        <div className="prose prose-lg max-w-none text-gray-700 print:text-sm text-justify" dangerouslySetInnerHTML={{ __html: activity.description }}></div>
      )}
      <ImageGallery images={activity.images} />

      {activity.subsections && (
        <div className="mt-8 space-y-8">
          {activity.subsections.map(sub => renderActivitySection(sub, true))}
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 9a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Departmental Activity</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Highlights of events, workshops, and initiatives by the IT Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6 print:hidden">
          <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <Link to={currentDeptPath} className="hover:text-indigo-600">IT</Link> / <span className="text-indigo-600 font-medium">Departmental Activity</span>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden`}>
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {itDepartmentTabs.map((tab) => {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Information Technology: Departmental Activities
        </h2>

        {itDepartmentalActivities.map(activity => renderActivitySection(activity))}

        <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />
      </div>

    </div>
  );
};

export default ITDepartmentalActivityPage;