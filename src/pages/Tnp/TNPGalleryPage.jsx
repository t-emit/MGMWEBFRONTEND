// src/pages/TNP/TNPGalleryPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tnpTabs, tnpGalleryData } from './tnpConstants';

const TNPGalleryPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">T&P Gallery</h1>
        <p className="text-xl opacity-90">Moments from our placement drives, training sessions, and events.</p>
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

      {/* Main Content Area - Gallery */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4">
          Event Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {tnpGalleryData.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg border">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg'; }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TNPGalleryPage;