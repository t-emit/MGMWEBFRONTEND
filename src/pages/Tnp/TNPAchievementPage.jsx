// src/pages/TNP/TNPAchievementPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tnpTabs, tnpAchievementsData } from './tnpConstants';

const TNPAchievementPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Placement Achievements</h1>
        <p className="text-xl opacity-90">Celebrating the success of our students in securing top placements.</p>
      </div>

      <nav className="mb-8 bg-white rounded-lg shadow-md p-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {tnpTabs.map((tab) => (
            <Link key={tab.name} to={tab.path} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === tab.path ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : 'text-gray-700 hover:bg-gray-50 border border-gray-200'}`}>
              {tab.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4">
          Placement Highlights
        </h2>

        <div className="space-y-12">
          {/* High Packages Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">High Package Placements by Year</h3>
            <div className="space-y-6">
              {tnpAchievementsData.highPackages.map((achievement, index) => (
                <div key={index}>
                  <p className="text-center font-bold text-lg mb-2">{achievement.year}</p>
                  <div className="rounded-lg overflow-hidden border shadow-md">
                    <img 
                      src={achievement.image} 
                      alt={achievement.alt} 
                      className="w-full h-auto"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/Tnp/High Package 2023-24_page-0001.jpg;' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr/>

          {/* Other Images Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Other Placement Highlights</h3>
            <div className="space-y-6">
              {tnpAchievementsData.otherImages.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden border shadow-md">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-auto"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/images/Tnp/High Package 2022-23.jpeg'; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TNPAchievementPage;
