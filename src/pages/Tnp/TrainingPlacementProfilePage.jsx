// src/pages/TNP/TrainingPlacementProfilePage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tnpTabs, tnpProfileData } from './tnpConstants';

const TrainingPlacementProfilePage = () => {
  const location = useLocation();
  const { tpo, introduction, vision, mission, objectives } = tnpProfileData;

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Training and Placement Cell</h1>
        <p className="text-xl opacity-90">Bridging the gap between academia and industry.</p>
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
          About the T&P Cell
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 clearfix">
          <div className="float-right w-full sm:w-80 ml-0 sm:ml-6 mb-6 rounded-lg overflow-hidden shadow-md border border-gray-200">
            <img
              alt={`Photo of ${tpo.name}`}
              className="w-full h-auto object-cover"
              src={tpo.image}
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/titre.png'; }}
            />
            <div className="p-4 bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-800 mb-1">{tpo.name}</h3>
              <p className="text-gray-600 mb-2">{tpo.designation}</p>
              <a href={`mailto:${tpo.email}`} className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center break-all">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                {tpo.email}
              </a>
            </div>
          </div>

          {introduction.map((paragraph, index) => (
            <p key={index} className="leading-relaxed mb-4 text-justify">{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 space-y-8 clear-both">
          <div>
            <h3 className="text-2xl font-bold text-indigo-800 mb-3 border-l-4 border-indigo-500 pl-4">Vision</h3>
            <p className="text-gray-700 pl-4">{vision}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-indigo-800 mb-3 border-l-4 border-indigo-500 pl-4">Mission</h3>
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
              {mission.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-indigo-800 mb-3 border-l-4 border-indigo-500 pl-4">Objectives</h3>
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
              {objectives.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrainingPlacementProfilePage;