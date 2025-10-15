// src/pages/academics/information-technology/ItTrainingPlacementPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itTrainingPrograms, itPlacementsData } from './itConstants';

const ItTrainingPlacementPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/information-technology";

  // State to manage the visibility of each main accordion section
  const [isTrainingVisible, setTrainingVisible] = useState(true); // Default to open
  const [isPlacementsVisible, setPlacementsVisible] = useState(true); // Default to open

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Training & Placement</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Discover the training programs and key placement records for the Information Technology department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6 print:hidden">
          <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <Link to={currentDeptPath} className="hover:text-indigo-600">IT</Link> / <span className="text-indigo-600 font-medium">Training & Placement</span>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 overflow-x-auto">
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          IT Career Development
        </h2>

        {/* Main Accordion Container */}
        <div className="space-y-6">

          {/* Training Section */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden print:shadow-none print:border">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200 print:bg-white"
              onClick={() => setTrainingVisible(!isTrainingVisible)}
            >
              <h3 className="text-xl font-semibold text-indigo-800 text-left print:text-lg">
                Training Programs
              </h3>
              <img
                src={isTrainingVisible ? '/images/details_close.png' : '/images/details_open.png'}
                alt="Toggle"
                className="w-6 h-6 print:hidden"
              />
            </button>
            {isTrainingVisible && (
              <div className="p-4 border-t border-gray-200 bg-white print:p-0 print:border-none">
                <div className="prose prose-lg max-w-none text-gray-700 print:text-sm text-justify">
                  <p className="mb-4">{itTrainingPrograms.intro}</p>
                  <ul className="list-disc list-inside space-y-4">
                    {itTrainingPrograms.programs.map((program, index) => (
                      <li key={index}>
                        <strong>{program.title}:</strong>
                        <span dangerouslySetInnerHTML={{ __html: ` ${program.description}` }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Placements Section */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden print:shadow-none print:border">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200 print:bg-white"
              onClick={() => setPlacementsVisible(!isPlacementsVisible)}
            >
              <h3 className="text-xl font-semibold text-indigo-800 text-left print:text-lg">
                Key Placements
              </h3>
              <img
                src={isPlacementsVisible ? '/images/details_close.png' : '/images/details_open.png'}
                alt="Toggle"
                className="w-6 h-6 print:hidden"
              />
            </button>
            {isPlacementsVisible && (
              <div className="p-4 border-t border-gray-200 bg-white print:p-0 print:border-none">
                <div className="overflow-x-auto relative rounded-lg border border-gray-200 print:border-none">
                  <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                    <thead className="text-xs text-white uppercase bg-indigo-600 print:bg-gray-800">
                      <tr>
                        <th scope="col" className="py-3 px-4 rounded-tl-lg text-center w-16 print:px-2">Sr. No</th>
                        <th scope="col" className="py-3 px-4 print:px-2">Name of Student</th>
                        <th scope="col" className="py-3 px-4 print:px-2">Class</th>
                        <th scope="col" className="py-3 px-4 rounded-tr-lg print:px-2">Organization</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itPlacementsData.map((student, index) => (
                        <tr key={student.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b hover:bg-indigo-50 transition-colors duration-150 print:border-b`}>
                          <td className="py-3 px-4 text-center font-medium print:py-2 print:px-2">{student.id}</td>
                          <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-2">{student.name}</td>
                          <td className="py-3 px-4 print:py-2 print:px-2">{student.class}</td>
                          <td className="py-3 px-4 print:py-2 print:px-2">{student.organization}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItTrainingPlacementPage;