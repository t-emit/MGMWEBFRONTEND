// src/pages/academics/information-technology/ITSAPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itITSA_About, itITSA_Council2015_16, itITSA_Activities } from './itConstants';

const ITSAPage = () => {
    const location = useLocation();
    const currentDeptPath = "/academics/information-technology";

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
            {/* Hero Section for ITSA - UPDATED COLORS */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Information Technology Student Association (ITSA)</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
                    Providing a platform for students to explore, express, and engage in technical and co-curricular activities.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
            </div>

            {/* Breadcrumb - UPDATED COLORS */}
            <div className="text-sm text-gray-600 mb-6 print:hidden">
                <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <Link to={currentDeptPath} className="hover:text-indigo-600">IT</Link> / <span className="text-indigo-600 font-medium">ITSA</span>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2m0 0l3-3m-3 3l-3-3m6 0a2 2 0 100-4 2 2 0 000 4zm0 0l-3-3"></path>
                    </svg>
                    About ITSA
                </h2>

                <div className="prose prose-lg max-w-none text-gray-700 print:text-sm text-justify">
                    <p className="leading-relaxed mb-6">
                        {itITSA_About.description}
                    </p>

                    {/* ITSA Council Heading - UPDATED COLORS */}
                    <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b border-indigo-100 pb-2 text-center print:text-xl">ITSA Council 2015-16</h2>
                    <div className="overflow-x-auto relative rounded-lg border border-gray-200 mb-8">
                        <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                            {/* Table Header - UPDATED COLORS */}
                            <thead className="text-xs text-white uppercase bg-indigo-600 print:bg-gray-800">
                                <tr>
                                    <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg text-center w-16 print:px-2">Sr. No.</th>
                                    <th scope="col" className="py-3 px-4 md:px-6 print:px-2">Name of Student</th>
                                    <th scope="col" className="py-3 px-4 md:px-6 print:px-2">Position</th>
                                    <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg print:px-2">Class</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itITSA_Council2015_16.map((member, index) => (
                                    <tr key={member.sr} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                                        <td className="py-3 px-4 md:px-6 text-center font-medium print:py-2 print:px-2">{member.sr}.</td>
                                        <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-2">{member.name}</td>
                                        <td className="py-3 px-4 md:px-6 print:py-2 print:px-2">{member.post}</td>
                                        <td className="py-3 px-4 md:px-6 print:py-2 print:px-2">{member.class}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* ITSA Activities Heading - UPDATED COLORS */}
                    <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b border-indigo-100 pb-2 text-center print:text-xl">ITSA Activities</h2>

                    {itITSA_Activities.map((activity, index) => (
                        <div key={activity.id} className="mb-10 last:mb-0 p-6 bg-gray-50 rounded-xl border border-gray-200 print:p-4 print:border-none print:bg-white">
                            {/* Activity Title - UPDATED COLORS */}
                            <h3 className="text-xl md:text-2xl font-bold text-indigo-800 mb-4 print:text-lg">{index + 1}) {activity.title}</h3>
                            <p className="mb-6 leading-relaxed text-gray-700 print:text-sm">
                                {activity.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
                                {activity.images.map((img, imgIndex) => (
                                    <figure key={`${activity.id}-img-${imgIndex}`} className="flex flex-col items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 print:border print:shadow-none print:p-2">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-auto rounded-md object-cover transform hover:scale-105 transition-transform duration-300 print:w-auto print:h-auto"
                                            loading="lazy"
                                            onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-image.jpg'; }}
                                        />
                                        {img.caption && (
                                            <figcaption className="text-center text-sm mt-2 text-gray-600 italic print:text-xs">
                                                {img.caption}
                                            </figcaption>
                                        )}
                                    </figure>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ITSAPage;