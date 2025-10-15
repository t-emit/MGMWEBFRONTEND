// src/pages/Academics/InformationTechnology/ITDepartmentalCommitteesPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itDepartmentalCommittees, itCommitteeRolesPdf } from './itConstants';

const ITDepartmentalCommitteesPage = () => {
    const location = useLocation();
    const currentDeptPath = "/academics/information-technology";

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.458-4.192A4.001 4.001 0 0110 4c.828 0 1.636.19 2.378.542l.716-.716A1 1 0 0114 4a1 1 0 011 1 1 1 0 01-1.707.707l-.716-.716zM5.707 6.293A1 1 0 015 6a1 1 0 01-1-1 1 1 0 011.707-.707l.716.716A4.001 4.001 0 0110 4a4.001 4.001 0 01-2.378-.542l-.716.716zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm15 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-9.316 6.949a1 1 0 01-1.265-.633l-4-12a1 1 0 111.898-.632l4 12a1 1 0 01-1.265.633z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Departmental Committees</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
                    Key committees driving governance, academic excellence, and student welfare in the IT Department.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
            </div>

            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-6 print:hidden">
                <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <Link to={currentDeptPath} className="hover:text-indigo-600">IT</Link> / <span className="text-indigo-600 font-medium">Departmental Committees</span>
            </div>

            {/* Department Sub-Navigation Tabs */}
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
                                    ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300 shadow-inner'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 border border-gray-200'
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
                <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
                    <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2m0 0l3-3m-3 3l-3-3m6 0a2 2 0 100-4 2 2 0 000 4zm0 0l-3-3"></path>
                    </svg>
                    IT Departmental Committees
                </h2>

                <div className="prose prose-lg max-w-none text-gray-700 print:text-sm text-justify">
                    <p className="leading-relaxed mb-6">
                        The Information Technology Department operates with several committees dedicated to ensuring academic excellence, student welfare, and overall departmental efficiency. These committees comprise faculty members who tirelessly work towards achieving the department's vision and mission.
                    </p>

                    <h3 className="text-2xl font-bold text-indigo-700 mb-6 border-b border-indigo-100 pb-2 print:text-xl">Committees and Responsibilities</h3>

                    <div className="overflow-x-auto relative rounded-lg border border-gray-200 shadow-md print:shadow-none print:border-none">
                        <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                            <thead className="text-xs text-white uppercase bg-indigo-600 print:bg-gray-800">
                                <tr>
                                    <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg w-16 text-center print:px-2">Sr. No.</th>
                                    <th scope="col" className="py-3 px-4 md:px-6 print:px-2">Committee Name</th>
                                    <th scope="col" className="py-3 px-4 md:px-6 print:px-2">Convenor / Chairman</th>
                                    {/* <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg text-center w-24 print:hidden">Details</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {itDepartmentalCommittees.map((committee, index) => (
                                    <tr key={committee.srNo} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150 print:border-b`}>
                                        <td className="py-3 px-4 md:px-6 text-center font-medium print:py-2 print:px-2">{committee.srNo}.</td>
                                        <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-2">{committee.name}</td>
                                        <td className="py-3 px-4 md:px-6 print:py-2 print:px-2">{committee.convenor}</td>
                                        {/* <td className="py-3 px-4 md:px-6 text-center print:hidden">
                                            {committee.url && (
                                                <a href={committee.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center text-xs print:hidden">
                                                    View <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                                </a>
                                            )}
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {itCommitteeRolesPdf.url && (
                        <p className="mt-8 text-center print:text-sm print:mt-4">
                            <a href={itCommitteeRolesPdf.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline font-medium print:text-gray-700 print:no-underline">
                                <svg className="w-5 h-5 mr-1 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                {itCommitteeRolesPdf.label}
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ITDepartmentalCommitteesPage;