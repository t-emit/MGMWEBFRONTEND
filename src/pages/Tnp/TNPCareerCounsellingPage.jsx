// src/pages/TNP/TNPCareerCounsellingPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tnpTabs, careerCounsellingData } from './tnpConstants';

const TNPCareerCounsellingPage = () => {
  const location = useLocation();
  const { title, introduction, mainObjectives, higherStudies, guidanceActivities, counsellingPdf } = careerCounsellingData;

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Counselling</h1>
        <p className="text-xl opacity-90">Guiding students towards a successful professional journey.</p>
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
        <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-2 border-indigo-100 pb-4">
          {title}
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>{introduction}</p>
          
          <a href={counsellingPdf} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-bold text-lg my-4 inline-block">
            View Detailed Career Counselling Information (PDF)
          </a>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6">Main Objectives:</h3>
          <ul className="list-disc pl-6 space-y-2">
            {mainObjectives.map((item, index) => <li key={index}>{item}</li>)}
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6">{higherStudies.title}:</h3>
          <p>{higherStudies.description}</p>
          <ul className="list-disc pl-6 space-y-2">
            {higherStudies.points.map((item, index) => <li key={index}>{item}</li>)}
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8">{guidanceActivities.title}:</h3>
          <div className="space-y-8">
            {guidanceActivities.activities.map((activity, index) => (
              <div key={index} className="mt-4">
                <p className="mb-4">{activity.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activity.images.map((img, imgIndex) => (
                    <img key={imgIndex} src={img.src} alt={img.alt} className="w-full rounded-lg shadow-md border" />
                  ))}
                </div>
                <p className="text-center text-sm text-gray-600 mt-2 italic">{activity.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TNPCareerCounsellingPage;