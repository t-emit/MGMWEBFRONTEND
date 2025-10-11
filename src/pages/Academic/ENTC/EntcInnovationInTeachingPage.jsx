// src/pages/Academic/Entc/EntcInnovationInTeachingPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { entcDepartmentTabs, entcInnovationInTeaching } from './entcConstants';

const EntcInnovationInTeachingPage = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Innovation in Teaching</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Exploring advanced teaching methodologies and learning practices in the E&TC Department.
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          E&TC Department: Innovative Teaching Practices
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8 print:text-sm">
          <p className="mb-4">{entcInnovationInTeaching.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {entcInnovationInTeaching.resources.map((resource) => (
            <div key={resource.id} className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{resource.title}</h3>
              {resource.type === 'pdf' && resource.pdf && (
                <>
                  <a
                    href={resource.pdf.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-base print:text-sm print:text-gray-700 print:no-underline"
                  >
                    {resource.pdf.icon && <img src={resource.pdf.icon} alt="PDF icon" className="w-5 h-5 mr-2 print:hidden" />}
                    {resource.pdf.linkText}
                    <svg className="ml-1 w-4 h-4 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7"></path>
                    </svg>
                  </a>
                  {resource.description && <p className="text-gray-600 text-sm mt-2">{resource.description}</p>}
                </>
              )}
              {resource.type === 'iframe' && resource.iframe && (
                <>
                  {resource.description && <p className="text-gray-600 text-sm mb-3">{resource.description}</p>}
                  <div className="relative overflow-hidden rounded-lg shadow-sm">
                    {/* Placeholder for responsive iframe */}
                    <iframe
                      id={`iframe-${resource.id}`}
                      src={resource.iframe.src}
                      title={resource.title}
                      className="w-full h-[500px] border border-gray-300 rounded-lg" // Adjust height as needed
                      onLoad={(e) => {
                        // Attempt to resize iframe dynamically, though cross-origin is often blocked
                        try {
                          if (e.target.contentWindow && e.target.contentWindow.document && e.target.contentWindow.document.body) {
                            e.target.style.height = e.target.contentWindow.document.body.scrollHeight + 'px';
                          }
                        } catch (error) {
                          console.warn("Could not resize iframe due to cross-origin policy:", error);
                          // Set a default/min height if dynamic resize fails
                          e.target.style.height = '600px';
                        }
                      }}
                      sandbox="allow-scripts allow-same-origin allow-popups allow-forms" // Relaxed sandbox for external content
                    ></iframe>
                  </div>
                  <a
                    href={resource.iframe.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm mt-3 print:hidden"
                  >
                    {resource.iframe.linkText}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7"></path>
                    </svg>
                  </a>
                </>
              )}
            </div>
          ))}
        </div>

        {entcInnovationInTeaching.gallery.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-indigo-700 mb-6 border-b border-indigo-100 pb-2 print:text-xl">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {entcInnovationInTeaching.gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300 print:shadow-none print:border print:rounded-none">
                  <a href={image.src} data-lightbox="entc-innovation-gallery" data-title={image.alt}>
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
        )}

        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <p className="mb-4">
            Our commitment to innovation in teaching ensures that students receive a dynamic and relevant education,
            preparing them for the challenges and opportunities in the fast-evolving field of Electronics & Telecommunication Engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntcInnovationInTeachingPage;