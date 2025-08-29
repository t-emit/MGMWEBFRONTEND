// src/pages/alumni/AlumniPageLayout.jsx

import React from 'react';
// AlumniSidebar is no longer needed, so its import is removed.

const AlumniPageLayout = ({ title, subtitle, children }) => {
  return (
    <div className="bg-gray-50 py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* 1. SHARED, CENTERED HEADING SECTION (No changes here) */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800">{title}</h1>
          {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>}
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>

        {/* 2. MAIN CONTENT AREA - UPDATED */}
        {/* The grid has been removed. We now have a simpler layout. */}
        <div className="max-w-6xl mx-auto"> {/* A container to control max width and center the content */}
          <main>
            {children}
          </main>
        </div>
        
      </div>
    </div>
  );
};

export default AlumniPageLayout;