// src/pages/Academics/InformationTechnology/ITConsultancyPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itConsultancyServices } from './itConstants';

const ITConsultancyPage = () => {
    const location = useLocation();

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
            {/* Hero Section - UPDATED COLORS */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 100 2h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 011-1h1a1 1 0 100-2H6a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Consultancy Services</h1>
                <p className="text-xl opacity-90 max-w-3xl relative z-10 print:text-lg">
                    Bridging academia and industry with expert IT solutions.
                </p>
                {/* Hero Section Bottom Border - UPDATED COLORS */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
            </div>

            {/* Department Sub-Navigation Tabs - UPDATED COLORS */}
            <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
                <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
                    {itDepartmentTabs.map((tab) => {
                        const isActive = location.pathname === tab.path;
                        return (
                            <Link
                                key={tab.name}
                                to={tab.path}
                                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                                    ${isActive
                                        ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300 shadow-inner' // Active color changed
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 border border-gray-200' // Hover color changed
                                    }`}
                            >
                                {tab.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Main Content Area */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
                {/* Main Heading - UPDATED COLORS */}
                <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
                    <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.25V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h7.25m4.75 0l4-4m0 0l-4-4m4 4H10"></path>
                    </svg>
                    IT Department Consultancy
                </h2>

                <div className="prose prose-lg max-w-none text-gray-700 print:text-sm">
                    <p className="leading-relaxed mb-8">
                        The Information Technology Department offers expert consultancy services, leveraging the extensive knowledge and experience of its faculty. We collaborate with industries and organizations to provide technical solutions, project guidance, and corporate training programs.
                    </p>

                    {/* Sub Heading - UPDATED COLORS */}
                    <h3 className="text-2xl font-bold text-indigo-700 mb-6 pb-2 border-b border-indigo-100 print:text-xl">Areas of Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 print:gap-4">
                        {itConsultancyServices.map(service => (
                            <div key={service.title} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow print:border print:p-4 print:bg-white">
                                <div className="flex items-start mb-3">
                                    {/* Icon Background and Text - UPDATED COLORS */}
                                    <div className="flex-shrink-0 p-2 bg-indigo-100 rounded-lg text-indigo-600 mr-4 print:hidden">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-2 print:text-lg">{service.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed print:text-xs">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default ITConsultancyPage;