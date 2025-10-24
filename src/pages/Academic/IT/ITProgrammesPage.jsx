// src/pages/Academics/InformationTechnology/ITProgrammesPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  itDepartmentTabs,
  itProgrammesCourses,
  itPACMembers,
  itDABMembers,
  itProgrammesPACDescription,
  itProgrammesPACRoles,
  itProgrammesDABDescription,
  itProgrammesDABRoles,
  itCourseOutcomesLinks,
} from './itConstants';

// Reusable table rendering function
const renderTable = (headers, data, keyPrefix) => (
  <div className="overflow-x-auto relative rounded-lg border border-gray-200 shadow-md print:shadow-none print:border-none">
    <table className="w-full text-sm text-left text-gray-700 print:text-xs">
      <thead className="text-xs text-white uppercase bg-indigo-600 print:bg-gray-800">
        <tr>
          {headers.map((header, index) => (
            <th key={index} scope="col" className={`py-3 px-4 md:px-6 print:px-2 ${index === 0 ? 'rounded-tl-lg' : ''} ${index === headers.length - 1 ? 'rounded-tr-lg' : ''}`} dangerouslySetInnerHTML={{ __html: header }}></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={`${keyPrefix}-${rowIndex}`} className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150 print:border-b`}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex} className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ITProgrammesPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/information-technology";

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Programmes</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Academic programmes offered by the Information Technology Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6 print:hidden">
          <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <Link to={currentDeptPath} className="hover:text-indigo-600">IT</Link> / <span className="text-indigo-600 font-medium">Programmes</span>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden`}>
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
          Programmes Offered
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 print:text-sm">
            <p className="leading-relaxed mb-6">
                The Information Technology Department offers a range of comprehensive programs designed to equip students with cutting-edge knowledge and practical skills in various facets of IT. Our curriculum is regularly updated to align with industry demands and technological advancements.
            </p>
        </div>

        <h3 className="text-2xl font-bold text-indigo-700 mb-6 border-b border-indigo-100 pb-2 print:text-xl">UG/PG Courses</h3>
        {renderTable(
          ['Sr.&nbsp;No.', 'Course Name', 'Start Year', 'Duration (Years)', 'Type', 'Intake Capacity'],
          itProgrammesCourses,
          'it-course'
        )}

        <div className="my-8"></div>

        {/* Departmental Committee Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 mb-8 transition-all duration-300 hover:shadow-md print:bg-white print:border">
          <h3 className="flex items-center justify-between text-2xl font-bold text-indigo-800 p-0 mb-0 print:text-xl">
            <span>Departmental Committees</span>
          </h3>
          <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg print:border-none print:pt-0 print:mt-4">
            
            {/* Program Assessment Committee (PAC) */}
            <div className="bg-white p-4 rounded-lg shadow-sm mt-4 print:border print:shadow-none print:p-2">
              <h4 className="text-xl md:text-2xl font-semibold text-center text-indigo-700 mb-4 print:text-lg">Program Assessment Committee (PAC)</h4>
              <p className="mb-4 text-justify">{itProgrammesPACDescription}</p>

              <h5 className="text-lg md:text-xl font-semibold text-indigo-700 mb-3 mt-6 text-center print:text-base">
                Roles and Responsibilities of the PAC:
              </h5>
              <ol className="list-decimal list-inside pl-6 space-y-2 mb-6 print:text-sm print:space-y-1">
                {itProgrammesPACRoles.map((role, index) => (
                    <li key={`pac-role-${index}`}>{role}</li>
                ))}
              </ol>

              <h5 className="text-lg md:text-xl font-semibold text-indigo-700 mb-3 mt-6 text-center print:text-base">
                Program Assessment Committee Members
              </h5>
              {renderTable(
                ['Sr.&nbsp;No.', 'Name', 'Designation', 'Status'],
                itPACMembers,
                'pac-member'
              )}
            </div>

            {/* Department Advisory Board (DAB) */}
            <div className="bg-white p-4 rounded-lg shadow-sm mt-6 print:border print:shadow-none print:p-2">
              <h4 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3 mt-6 text-center print:text-lg">
                Department Advisory Board (DAB)
              </h4>
              <p className="mb-4 text-justify">{itProgrammesDABDescription}</p>
              
              <h5 className="text-lg md:text-xl font-semibold text-indigo-700 mb-3 mt-6 text-center print:text-base">
                Roles and Responsibilities of DAB:
              </h5>
              <ol className="list-decimal list-inside pl-6 space-y-2 mb-6 print:text-sm print:space-y-1">
                {itProgrammesDABRoles.map((role, index) => (
                    <li key={`dab-role-${index}`}>{role}</li>
                ))}
              </ol>

              <h5 className="text-lg md:text-xl font-semibold text-indigo-700 mb-3 mt-6 text-center print:text-base">
                Department Advisory Board Members
              </h5>
              {renderTable(
                ['Sr.&nbsp;No.', 'Name', 'Designation', 'Status'],
                itDABMembers,
                'dab-member'
              )}
            </div>
          </div>
        </div>

        {/* Course Outcomes Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 print:mt-6 print:pt-4 print:border-none">
          <h3 className="text-2xl font-bold text-indigo-800 mb-6 print:text-xl">Course Outcomes</h3>
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm print:bg-white print:border print:p-4">
            <p className="text-gray-700 mb-4 print:text-sm">Access the course outcomes for different programs:</p>
            <ul className="space-y-3">
              {itCourseOutcomesLinks.map((link, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-600 mt-1 mr-3 flex-shrink-0 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-700 hover:text-indigo-900 hover:underline transition-colors print:text-gray-700 print:no-underline"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITProgrammesPage;