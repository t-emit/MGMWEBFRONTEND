// src/pages/alumni/AlumniPageLayout.jsx

import React from 'react';
import AlumniSidebar from './AlumniSidebar';

// This component now accepts a title and subtitle
const AlumniPageLayout = ({ title, subtitle, children }) => {
  return (
    // The main page container with background color and padding for the fixed header
    <div className="bg-gray-50 py-12 pt-32">
      <div className="container mx-auto px-4">
        
        {/* 1. SHARED, CENTERED HEADING SECTION */}
        {/* This now sits above the grid, making it common to both columns */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800">{title}</h1>
          {/* We only show the subtitle if it's provided */}
          {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>}
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>

        {/* 2. GRID FOR CONTENT AND SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {/* Main Content Area (form, list, etc.) */}
          <main className="lg:col-span-2">
            {children}
          </main>
          
          {/* Sidebar Area */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <AlumniSidebar />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AlumniPageLayout;