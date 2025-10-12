import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, careerOrientationData } from './ashConstants';

const ASHCareerOrientationPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{careerOrientationData.title}</h1>
      </div>
      <nav className="mb-8 bg-white rounded-lg shadow-md p-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {ashDepartmentTabs.map((tab) => (
            <Link key={tab.name} to={tab.path} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === tab.path ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : 'text-gray-700 hover:bg-gray-50 border border-gray-200'}`}>
              {tab.name}
            </Link>
          ))}
        </div>
      </nav>
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 prose max-w-none text-gray-700">
        {careerOrientationData.content.map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </div>
  );
};
export default ASHCareerOrientationPage;