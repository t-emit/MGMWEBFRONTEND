// src/pages/IEDC.jsx

import React from 'react';

const IEDC = () => {
  return (
    // Outer container matching AcademicCellPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with AcademicCellPage's h1 styling */}
        <header className="mb-8" aria-labelledby="iedc-title">
          <h1 id="iedc-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Innovation & Entrepreneurship Development Cell
          </h1>
        </header>

        {/* Main content section - Consistent with AcademicCellPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Innovation & Entrepreneurship Development Cell Resources">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              IEDC Resources and Policies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Innovation & Entrepreneurship Development Cell (IEDC) at MGM's College of Engineering, Nanded, 
              is dedicated to fostering a vibrant ecosystem for innovation, startups, and entrepreneurial activities 
              among our students and faculty. We provide guidance, resources, and support to transform ideas into successful ventures. 
              Below are key documents and resources related to the IEDC initiatives and relevant policies:
            </p>

            {/* List of links, styled for readability and consistency */}
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <a 
                  style={{ fontWeight: 'bold' }} 
                  href="http://mgmcen.ac.in/docs/IEDC__Committee_Members.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-700 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  aria-label="View IEDC Committee Members PDF"
                >
                  IEDC Committee Members
                </a>
              </li> 
              <li>
                <a 
                  style={{ fontWeight: 'bold' }} 
                  href="https://mgmcen.ac.in/docs/institution%20innovation%20and%20startup%20policy%20(1).pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-700 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  aria-label="View IEDC Policy Document PDF"
                >
                  IEDC Policy Document
                </a> 
              </li>
              <li>
                <a 
                  style={{ fontWeight: 'bold' }} 
                  href="http://mgmcen.ac.in/docs/institution innovation and startup policy.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-700 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  aria-label="View National Innovation and Startup Policy for students and Faculty PDF"
                >
                  National Innovation and Startup Policy for students and Faculty
                </a>
              </li>
              <li>
                <a 
                  style={{ fontWeight: 'bold' }} 
                  href="http://mgmcen.ac.in/docs/Maharashtra_startupPolicy.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-700 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  aria-label="View Maharashtra State Innovative Start-up Policy 2018-2023 PDF"
                >
                  Maharashtra State Innovative Start-up Policy 2018-2023.
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IEDC;