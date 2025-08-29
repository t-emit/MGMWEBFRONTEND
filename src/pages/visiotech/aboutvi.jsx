// src/pages/visiotech/AboutVisiotechPage.jsx

import React from 'react';
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const AboutVisiotechPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        VISIOTECH - About Us
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-8">
                    {/* Visiotech Logo */}
                    <a href="http://www.visiotech2024.info/" target="_blank" rel="noopener noreferrer" className="inline-block">
                        <img 
                            src="/images/visiotechlogo.jpg" 
                            alt="VISIOTECH Logo"
                            className="max-w-xs w-full mx-auto rounded-lg shadow-md transition-transform hover:scale-105"
                        />
                    </a>
                    
                    {/* Section for PDF Download */}
                    <section className="border-t pt-8">
                         <h2 className="text-2xl font-bold text-indigo-800 mb-4">About VISIOTECH 2024 Report</h2>
                        <p className="text-gray-600 mb-6">Click the button below to view the full report in a new tab.</p>
                        <a 
                            href="/pdfs/visiotech/About Us Visiotech 2024.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                        >
                            <FaFilePdf className="mr-3" />
                            Download "About Us" PDF
                        </a>
                    </section>

                     {/* Section for External Website Link */}
                    <section className="border-t pt-8">
                        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Official Website</h2>
                        <p className="text-gray-600 mb-6">Visit the official website for the latest information.</p>
                        <a 
                            href="http://www.visiotech2024.info/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
                        >
                            <FaExternalLinkAlt className="mr-3" />
                            www.visiotech2024.info
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutVisiotechPage;