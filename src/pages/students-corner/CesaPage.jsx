// src/pages/students-corner/CesaPage.jsx

import React from 'react';
import AccordionItem from '../../components/AccordinItem'; // Import our new component
import CesaArchive from './CesaArchive';

const CesaPage = () => {
  return (
    // Main page container with padding for the fixed header
    <div className="bg-gray-50 min-h-screen py-12 pt-32">
      <div className="container mx-auto px-4">
        
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            CESA (Civil Engineering Students Association)
          </h1>
        </div>

        {/* Accordion Menu */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          
          {/* Top-level item, not an accordion */}
          <div className="py-4 border-b border-dotted border-gray-300">
             <p className="text-indigo-700 font-semibold">CESA</p>
          </div>

          <AccordionItem title="CESA REPORT" defaultOpen={true}>
            {/* This is a nested accordion item */}
            <AccordionItem title="CESA REPORT 2023-24">
              {/* Content for the report */}
              <div className="py-4">
                <p className="mb-4 font-semibold text-gray-800">Viewing Report: 2023-24</p>
                {/* 
                  We are embedding the PDF here using an iframe. 
                  This is much better than a giant image for user experience (zoom, text search, etc.)
                */}
                <iframe 
                  src="/pdfs/CESA REPORT 2023-24.pdf" 
                  title="CESA Report 2023-24"
                  className="w-full h-[80vh] border rounded-md"
                >
                  Your browser does not support PDFs. Please download the PDF to view it.
                </iframe>
              </div>
            </AccordionItem>
          </AccordionItem>
          
           
          <AccordionItem title="Old Archive Data" defaultOpen={true}>
            <CesaArchive />
          </AccordionItem>

        </div>
      </div>
    </div>
  );
};

export default CesaPage;