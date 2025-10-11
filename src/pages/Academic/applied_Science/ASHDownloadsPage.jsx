

// src/pages/Academic/applied_Science/ASHDownloadsPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, ashDownloadsData } from './ashConstants';

const ASHDownloadsPage = () => {
  const location = useLocation();
  const [openCategory, setOpenCategory] = useState('syllabus'); // Default 'syllabus' to be open

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM9 16c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1H9zm0-4c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1H9z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Downloads</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Access important documents like syllabi, assignments, and resource materials.
        </p>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
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
          Downloadable Resources
        </h2>

        <div className="space-y-4">
          {ashDownloadsData.map((category) => (
            <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => toggleCategory(category.id)}
              >
                <h3 className="text-xl font-semibold text-indigo-800">{category.title}</h3>
                <svg className={`w-6 h-6 transform transition-transform ${openCategory === category.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {openCategory === category.id && (
                <div className="p-4 bg-white border-t">
                  {category.files.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-700">
                        <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800">
                          <tr>
                            <th scope="col" className="py-3 px-4 w-16">Sr.No</th>
                            <th scope="col" className="py-3 px-4">Heading</th>
                            <th scope="col" className="py-3 px-4 w-24 text-center">Download</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.files.map((file, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50`}>
                              <td className="py-3 px-4 font-medium">{file.srNo}</td>
                              <td className="py-3 px-4">{file.heading}</td>
                              <td className="py-3 px-4 text-center">
                                <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                                  <i className="fas fa-download text-lg"></i>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 py-4">No files available in this category at the moment.</p>
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

export default ASHDownloadsPage;