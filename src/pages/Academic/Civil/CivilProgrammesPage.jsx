// src/pages/Academic/Civil/CivilProgrammesPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { civilDepartmentTabs, civilProgrammesCourses, civilProgrammesCommittees } from './civilConstants';

const CivilProgrammesPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/civil-engineering"; // Base path for Civil department

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Civil Engineering theme */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.88-7-7.93s3.05-7.44 7-7.93v15.86z"></path>
            <path d="M12 11h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c-.55 0-1 .45-1 1s-.45-1-1-1z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Programmes</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Overview of academic programmes offered by the Civil Engineering Department.
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Civil Engineering Programmes Offered
        </h2>

        {/* Programmes Table */}
        <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
          <table className="w-full text-sm text-left text-gray-700 print:text-xs">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
              <tr>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Course Name</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Start Year</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Duration (Years)</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Type</th>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Intake Capacity</th>
              </tr>
            </thead>
            <tbody>
              {civilProgrammesCourses.map((course, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                  <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">
                    {course.srNo}
                  </td>
                  <td className="py-4 px-4 md:px-6 print:py-2 print:px-3">
                    <span className="font-medium">{course.name}</span>
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    {course.startYear}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    {course.duration}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    {course.type}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    {course.intake}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Course Outcomes and Departmental Committee Links */}
        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <ul className="list-disc pl-8 space-y-2 mb-6">
            <li>
              <a href={civilProgrammesCommittees[0].url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-bold">
                {civilProgrammesCommittees[0].name}
              </a>
            </li>
          </ul>

          <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />

          <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
            <i className="fas fa-users-gear text-indigo-500 mr-3"></i> Departmental Committees
          </h3>
          <ul className="list-disc pl-8 space-y-2">
            {civilProgrammesCommittees.slice(1).map((committee, index) => (
              <li key={index}>
                <a href={committee.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-bold">
                  {committee.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CivilProgrammesPage;