// src/pages/Academics/ComputerScience/CSECurriculumPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cseDepartmentTabs, cseCurriculumData } from './cseConstants';

// Helper for consistent table header styling
const TableHeader = ({ children }) => (
  <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
    <tr>{children}</tr>
  </thead>
);

// Helper for consistent table row styling
const TableRow = ({ children, index, className = '' }) => (
  <tr className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b ${className}`}>
    {children}
  </tr>
);

const CSECurriculumPage = () => {
  const location = useLocation();
  const [isSyllabusExpanded, setIsSyllabusExpanded] = useState(true); // Syllabus section starts open

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl  print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Syllabus/Curriculum Icon SVG (e.g., a book or document) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-4 7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1H9zm0-4c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1H9z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Computer Science & Engineering</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Explore the academic curriculum and syllabus for the CSE Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2">
          {cseDepartmentTabs.map((tab) => {
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
          <svg className="w-8 h-8 mr-3 text-indigo-600 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          Syllabus
        </h2>

        {/* Syllabus Section (Accordion) */}
        <div className="mb-8">
          <div
            className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg shadow-sm cursor-pointer hover:bg-indigo-100 transition-colors"
            onClick={() => setIsSyllabusExpanded(!isSyllabusExpanded)}
          >
            <h3 className="text-xl font-bold text-indigo-800">Department Syllabus Documents</h3>
            <svg
              className={`w-6 h-6 text-indigo-600 transform transition-transform duration-300 ${isSyllabusExpanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isSyllabusExpanded ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
          >
            <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200">
              <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                <TableHeader>
                  <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Sr.No</th>
                  <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Heading</th>
                  <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Download</th>
                </TableHeader>
                <tbody>
                  {cseCurriculumData.syllabus.map((yearSection, yearIndex) => (
                    <React.Fragment key={yearIndex}>
                      <tr className="bg-indigo-100 text-indigo-800 font-semibold text-center print:bg-indigo-100">
                        <td colSpan="3" className="py-3 px-4 md:px-6 print:py-2 print:px-3">
                          {yearSection.yearSection}
                        </td>
                      </tr>
                      {yearSection.files.map((file, fileIndex) => (
                        <TableRow key={`${yearIndex}-${fileIndex}`} index={fileIndex}>
                          <td className="py-4 px-4 md:px-6 text-center font-medium print:py-2 print:px-3">{file.srNo}</td>
                          <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">{file.heading}</td>
                          <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                            <a href={file.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                              <i className="fas fa-download text-lg"></i>
                            </a>
                          </td>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div> {/* End Main Content Area */}
    </div>
  );
};

export default CSECurriculumPage;