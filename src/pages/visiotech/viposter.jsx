// src/pages/visiotech/VisiotechPosterPage.jsx

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const VisiotechPosterPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        VISIOTECH - Poster
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
                    
                    {/* Section for Poster Image */}
                    <section className="border-t pt-8">
                         <h2 className="text-2xl font-bold text-indigo-800 mb-6">VISIOTECH 2024 Official Poster</h2>
                        <div className="max-w-4xl mx-auto">
                           <img 
                                src="/images/visiotech/Poster VISIOTECH 2024.jpg" 
                                alt="VISIOTECH 2024 Poster"
                                className="w-full h-auto rounded-lg shadow-xl border"
                            />
                        </div>
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

export default VisiotechPosterPage;