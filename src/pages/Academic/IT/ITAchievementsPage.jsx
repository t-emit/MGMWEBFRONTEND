// src/pages/Academics/InformationTechnology/ITAchievementsPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itAchievementsData } from './itConstants';

// Navigation tabs for the Information Technology department
const itDepartmentTabs = [
  { name: "Faculty Detail", path: "/academics/information-technology/faculty-detail" },
  { name: "Faculty Profile", path: "/academics/information-technology/faculty-profile" },
  { name: "Information Technology", path: "/academics/information-technology" },
  { name: "IT Achievements", path: "/academics/information-technology/achievements" },
  { name: "IT Curriculum", path: "/academics/information-technology/curriculum" },
  { name: "IT Departmental Activity", path: "/academics/information-technology/departmental-activity" },
  { name: "IT Laboratory Detail", path: "/academics/information-technology/laboratory-detail" },
  { name: "IT Laboratory", path: "/academics/information-technology/laboratory" },
  { name: "IT Profile", path: "/academics/information-technology/profile" },
  { name: "IT Programmes", path: "/academics/information-technology/programmes" },
  { name: "IT Research Publication", path: "/academics/information-technology/research-publication" },
  { name: "ITSA", path: "/academics/information-technology/itsa" },
  { name: "IT Training Placement", path: "/academics/information-technology/training-placement" },
  { name: "IT Vision Mission", path: "/academics/information-technology/vision-mission" },
  { name: "IT Consultancy", path: "/academics/information-technology/consultancy" },
  { name: "IT Departmental Committees", path: "/academics/information-technology/departmental-committees" },
];

// Reusable component for rendering an achievement table
const AchievementTable = ({ title, data, isPlacementTable = false }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold text-indigo-700 mb-4 pb-2 border-b-2 border-indigo-200">{title}</h3>
    <div className="overflow-x-auto relative rounded-lg shadow-md border border-gray-200">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800">
          <tr>
            <th scope="col" className="py-3 px-4 w-16 text-center">Sr.No</th>
            <th scope="col" className="py-3 px-4">Name of Student</th>
            <th scope="col" className="py-3 px-4">Class</th>
            <th scope="col" className="py-3 px-4">{isPlacementTable ? 'Organization' : 'Event'}</th>
            {!isPlacementTable && <th scope="col" className="py-3 px-4 text-center">Rank</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors`}>
              <td className="py-4 px-4 text-center font-medium">{item.srNo}</td>
              <td className="py-4 px-4 font-medium text-gray-900">{item.studentName}</td>
              <td className="py-4 px-4">{item.class}</td>
              <td className="py-4 px-4">{isPlacementTable ? item.organization : item.event}</td>
              {!isPlacementTable && <td className="py-4 px-4 text-center">{item.rank}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ITAchievementsPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Departmental Achievements</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Highlighting the success and recognition earned by our Information Technology students and faculty.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Information Technology Achievements
        </h2>

        <div className="space-y-10">
          <AchievementTable title="Academic Achievements" data={itAchievementsData.academic} />
          <AchievementTable title="Sports Achievements" data={itAchievementsData.sports} />
          <AchievementTable title="Cultural Achievements" data={itAchievementsData.cultural} />
          <AchievementTable title="Key Placements" data={itAchievementsData.placements} isPlacementTable={true} />
        </div>
      </div>
    </div>
  );
};

export default ITAchievementsPage;