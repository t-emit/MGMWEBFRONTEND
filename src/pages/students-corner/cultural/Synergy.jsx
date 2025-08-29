// src/pages/cultural/SynergyPage.jsx

import React from 'react';
import { FaFilePdf } from 'react-icons/fa'; // Import the PDF icon

const SynergyPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Synergy (Aagman)
                    </h1>
                </div>

                {/* --- THIS SECTION IS UPDATED --- */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    {/* The AccordionItem has been removed and replaced with this content */}
                    <h2 className="text-2xl font-bold text-indigo-800 mb-4">Aagman Event Report</h2>
                    <p className="text-gray-600 mb-6">Click the button below to view the full event report in a new tab.</p>
                    
                    {/* The iframe is replaced with this styled link (button) */}
                    <a 
                        href="/pdfs/AAGMANReport.pdf" // Make sure this PDF exists
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                    >
                        <FaFilePdf className="mr-3" />
                        View Aagman Report
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SynergyPage;