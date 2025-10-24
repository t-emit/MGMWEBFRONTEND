// src/pages/TNP/TNPFacultyPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tnpTabs, tnpFaculty } from './tnpConstants';

const TNPFacultyPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">T&P Faculty & Coordinators</h1>
        <p className="text-xl opacity-90">Meet the team behind our student's career success.</p>
      </div>

      {/* T&P Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md p-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {tnpTabs.map((tab) => (
            <Link key={tab.name} to={tab.path} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === tab.path ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : 'text-gray-700 hover:bg-gray-50 border border-gray-200'}`}>
              {tab.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4">
          Training & Placement Team
        </h2>

        {/* Faculty and Coordinators Table */}
        <div className="overflow-x-auto relative rounded-lg shadow-md border">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-800 to-blue-700">
              <tr>
                <th scope="col" className="px-6 py-3">Faculty Name</th>
                <th scope="col" className="px-6 py-3">Role / Specialization</th>
                <th scope="col" className="px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {tnpFaculty.map((member, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50`}>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <p className="font-bold">{member.name}</p>
                    <p className="text-xs text-gray-500">{`(${member.designation})`}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {member.specialization}
                  </td>
                  <td className="px-6 py-4">
                    <a href={`mailto:${member.email}`} className="text-indigo-600 hover:underline break-all">
                      {member.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TNPFacultyPage;