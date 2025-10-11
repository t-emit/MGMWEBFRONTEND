// src/pages/Academic/applied_Science/ASHAchievementPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, ashAchievements } from './ashConstants';

const ASHAchievementPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          {/* SVG for Achievements theme (e.g., a trophy) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A6.01 6.01 0 0012 20c2.05 0 3.84-1.03 4.88-2.61A4.97 4.97 0 0021 12v-1c0-1.1-.9-2-2-2zm-9 13.9A4.01 4.01 0 018.01 13H8V8h2.01c.05-.71.22-1.38.49-2H8V4h8v2h-2.5c.27.62.44 1.29.49 2H16v5h-.01a4.01 4.01 0 01-3.99 5.9z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Achievements</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Celebrating the accomplishments of our students and faculty.
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4">
          Departmental Achievements
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 mt-10">
          {ashAchievements.map((yearGroup, yearIndex) => (
            <div key={yearIndex} className="mb-10">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Academic Year: {yearGroup.year}
              </h3>
              <div className="overflow-x-auto relative rounded-xl shadow-md border">
                <table className="w-full text-sm text-left text-gray-700">
                  <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800">
                    <tr>
                      <th scope="col" className="py-3 px-4">Sr. No.</th>
                      <th scope="col" className="py-3 px-4">Name of Student</th>
                      <th scope="col" className="py-3 px-4">Activity</th>
                      <th scope="col" className="py-3 px-4">Activity Held At</th>
                      <th scope="col" className="py-3 px-4">Prize</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearGroup.entries.map((achievement, entryIndex) => (
                      <tr key={entryIndex} className={`${entryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50`}>
                        <td className="py-3 px-4 font-medium">{achievement.srNo}</td>
                        <td className="py-3 px-4 whitespace-pre-line font-medium">{achievement.name}</td>
                        <td className="py-3 px-4 whitespace-pre-line">{achievement.activity}</td>
                        <td className="py-3 px-4 whitespace-pre-line">{achievement.heldAt}</td>
                        <td className="py-3 px-4 font-semibold">{achievement.prize}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ASHAchievementPage;