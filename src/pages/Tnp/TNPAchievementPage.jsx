// src/pages/TNP/TNPAchievementPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tnpTabs, tnpAchievementsData } from './tnpConstants';

const TNPAchievementPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Placement Achievements</h1>
        <p className="text-xl opacity-90">Celebrating the success of our students.</p>
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
          Our Success Stories
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8 text-justify">
          <p>
            MGM's College of Engineering has a proud tradition of excellent placements. Our students consistently secure positions in top companies, reflecting their strong academic foundation and practical skills.
            Here are some highlights of our recent placement achievements.
          </p>
          {/* <p className="text-sm text-gray-500 mt-2">
            <strong className="text-red-600">Note:</strong> If the images below are not visible, please ensure they exist in your project's
            `public/images/tnp/achievements/` folder with the exact filenames specified in `tnpConstants.js`.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tnpAchievementsData.map((achievement, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-200">
              <img
                src={achievement.image}
                alt={achievement.alt}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{achievement.year}</h3>
                <p className="text-gray-600">{achievement.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TNPAchievementPage;