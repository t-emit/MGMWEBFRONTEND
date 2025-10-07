import React from 'react';
// The external dependency 'react-icons/fa' caused a compilation error.
// The icons have been replaced with inline SVGs for compatibility.

/**
 * VisiotechUnifiedPage
 * Combines the "About Us" information and the "Poster" view into a single, 
 * responsive page using Tailwind CSS.
 */
const VisiotechUnifiedPage = () => {
    // Inline SVG for a PDF/Document icon
    const PdfIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-xl text-white">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <path d="M14 2v6h6" />
        </svg>
    );

    // Inline SVG for an External Link icon
    const ExternalLinkIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-xl text-white">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );

    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-20 sm:pt-40 font-['Inter']">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Unified Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-5xl font-extrabold text-indigo-800 border-b-4 border-indigo-300 pb-4 inline-block">
                        VISIOTECH 2024
                    </h1>
                    <p className="text-xl text-gray-600 mt-2">About Our Event & Official Poster</p>
                </div>

                <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl text-center space-y-12">
                    
                    {/* 1. Visiotech Logo & Website Link */}
                    <div className="border-b border-gray-200 pb-8">
                        <a 
                            href="http://www.visiotech2024.info/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block transition-transform duration-300 hover:scale-[1.02]"
                            aria-label="Visit the official Visiotech website"
                        >
                            <img 
                                src="/images/visiotechlogo.jpg" 
                                alt="VISIOTECH Logo"
                                className="max-w-xs w-full mx-auto rounded-xl shadow-lg"
                            />
                        </a>
                    </div>
                    
                    {/* 2. About Report Section (PDF Download) */}
                    <section className="pt-4 border-b border-gray-100 pb-10">
                        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Official Event Report</h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Get all the details about VISIOTECH 2024 by downloading the comprehensive "About Us" report below.
                        </p>
                        <a 
                            href="/pdfs/visiotech/About Us Visiotech 2024.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-10 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-4 focus:ring-indigo-300"
                        >
                            {PdfIcon}
                            Download "About Us" PDF
                        </a>
                    </section>

                    {/* 3. Poster Image Section */}
                    <section className="pt-8">
                        <h2 className="text-3xl font-bold text-indigo-800 mb-6">Official Event Poster</h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            View the stunning official poster that captures the spirit of VISIOTECH 2024.
                        </p>
                        <div className="max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden transition-all duration-500 hover:shadow-indigo-300/50">
                            {/* NOTE: If the image fails to load, the alt text provides context. */}
                            <img 
                                src="/images/visiotech/Poster VISIOTECH 2024.jpg" 
                                alt="VISIOTECH 2024 Official Event Poster"
                                className="w-full h-auto"
                            />
                        </div>
                    </section>
                    
                    {/* 4. External Website Link (Final Call to Action) */}
                    <section className="border-t border-gray-200 pt-10">
                        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Visit the Official Website</h2>
                        <p className="text-gray-600 mb-6">
                            For the most current announcements, schedules, and registration details, please visit the official page.
                        </p>
                        <a 
                            href="http://www.visiotech2024.info/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-10 py-3 bg-green-600 text-white font-semibold rounded-full shadow-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                        >
                            {ExternalLinkIcon}
                            visiotech2024.info
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default VisiotechUnifiedPage;
