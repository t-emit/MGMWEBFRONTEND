// src/pages/Academics/AcademicCalendarPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Link is no longer strictly needed for navigation on this page, but kept for consistency if you add future internal links

const AcademicCalendarPage = () => {
    // Removed quickLinks, noticeBoardItems, newsEventsItems as they are no longer used.

    // Aspect ratio for the PDF embed. Adjust as needed.
    // 140% for portrait, 80% for landscape, 100% for square-ish
    const pdfAspectRatioClass = 'pb-[140%] sm:pb-[120%] md:pb-[90%] lg:pb-[70%]';

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl  print:mt-4 print:max-w-none">


            {/* Main Content Area - PDF Embed */}
            {/* This div now takes the full width, as there's no sidebar */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
                <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
                    <svg className="w-8 h-8 mr-3 text-indigo-600 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Current Academic Calendar
                </h2>

                <div className={`relative w-full overflow-hidden rounded-lg shadow-inner ${pdfAspectRatioClass}`}>
                    <iframe
                        src="https://mgmcen.ac.in/pdf/Academic%20calender%20odd%20sem%202025.pdf#toolbar=0&navpanes=0&scrollbar=0"
                        className="absolute inset-0 w-full h-full border-none"
                        title="Academic Calendar PDF"
                        frameBorder="0"
                        loading="lazy"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default AcademicCalendarPage;