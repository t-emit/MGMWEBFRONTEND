// src/pages/Academic/Civil/CivilCurriculumPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { civilDepartmentTabs, civilSyllabus } from './civilConstants'; // Import syllabus data

const CivilCurriculumPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/civil-engineering"; // Base path for Civil department

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Curriculum theme (e.g., a book) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v14H4zm16-4V5H6v10h14zm-4-4h-4v-2h4v2z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Curriculum</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Detailed academic curriculum and syllabi for Civil Engineering programs.
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.25a.75.75 0 11-1.5 0v-2.5a.75.75 0 011.5 0v2.5zM7.5 10a.75.75 0 010-1.5h.008a.75.75 0 010 1.5H7.5zm.008 3.5a.75.75 0 100-1.5h.008a.75.75 0 100 1.5H7.508zm3.008-3.5a.75.75 0 010-1.5h.008a.75.75 0 010 1.5h-.008zm.008 3.5a.75.75 0 100-1.5h.008a.75.75 0 100 1.5h-.008zM12.5 10a.75.75 0 010-1.5h.008a.75.75 0 010 1.5H12.5zm.008 3.5a.75.75 0 100-1.5h.008a.75.75 0 100 1.5H12.508zM17.5 10a.75.75 0 010-1.5h.008a.75.75 0 010 1.5H17.5zm.008 3.5a.75.75 0 100-1.5h.008a.75.75 0 100 1.5H17.508zM21 9a2 2 0 00-2-2h-3.586l-1.914-1.914A1 1 0 0013 4h-2a1 1 0 00-1 1v1h-.5a2 2 0 00-2 2v2H3a2 2 0 00-2 2v2a2 2 0 002 2h18a2 2 0 002-2v-2a2 2 0 00-2-2h-2zm-18 4h3a1 1 0 011 1v2a1 1 0 01-1 1H3v-4zm18 4h-3a1 1 0 01-1-1v-2a1 1 0 011-1h3v4z"></path>
          </svg>
          Civil Engineering Curriculum & Syllabi
        </h2>

        {/* Syllabus Section */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-4 mt-8 print:text-xl">Syllabus Downloads</h3>
        <p className="text-gray-700 mb-6 print:text-sm">Click on the links below to download the detailed syllabi for our various programs and academic years.</p>

        <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
          <table className="w-full text-sm text-left text-gray-700 print:text-xs">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
              <tr>
                <th scope="col" className="py-3 px-3 md:px-4 rounded-tl-lg print:py-2 print:px-2">Sr. No.</th>
                <th scope="col" className="py-3 px-3 md:px-4 print:py-2 print:px-2">Heading</th>
                <th scope="col" className="py-3 px-3 md:px-4 rounded-tr-lg print:py-2 print:px-2 text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              {civilSyllabus.map((item, index) => (
                <tr key={item.srNo} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                  <td className="py-3 px-3 md:px-4 font-medium text-gray-900 whitespace-nowrap text-center print:py-2 print:px-2">
                    {item.srNo}
                  </td>
                  <td className="py-3 px-3 md:px-4 print:py-2 print:px-2">
                    <span className="font-medium text-gray-800">{item.heading}</span>
                  </td>
                  <td className="py-3 px-3 md:px-4 text-center print:py-2 print:px-2">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline print:text-gray-700 print:no-underline">
                      <svg className="w-5 h-5 mr-1 print:hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note about other curriculum-related content, if applicable */}
        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <p>
            For information regarding assignments, resource materials, or other downloads,
            please refer to the relevant sections or department communications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CivilCurriculumPage;