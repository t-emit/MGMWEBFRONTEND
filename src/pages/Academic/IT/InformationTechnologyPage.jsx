// src/pages/academics/information-technology/InformationTechnologyPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itDepartmentDetails, itTeachingStaff } from './itConstants';

const InformationTechnologyPage = () => {
    const location = useLocation();

    // Find HOD for sidebar
    const hod = itTeachingStaff.find(staff => staff.designation.includes('Head'));

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
            {/* Hero Section - UPDATED COLORS */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Information Technology</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
                    Department of Information Technology
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
            </div>

            {/* Breadcrumb - UPDATED COLORS */}
            <div className="text-sm text-gray-600 mb-6 print:hidden">
                <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <span className="text-indigo-600 font-medium">Information Technology</span>
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
                {/* Heading - UPDATED COLORS */}
                <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
                    <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1"></path>
                    </svg>
                    Department Profile
                </h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Content */}
                    <div className="flex-1">
                        {/* Department Overview Paragraph */}
                        <div className="prose prose-lg max-w-none text-gray-700 mb-6 print:text-sm text-justify">
                            <p>
                                Today we are living in the era of information technology which has affected our lives greater than the Industry Revolution of the 18th Century. The 21st Century is referred to the IT Century. Information and information technology tools have become an indispensable requirement of Today's world. This course is an effort to prepare the future technologists who are equipped with the skill and knowledge needed to design and develop the IT gadgets which include hardware, software and telecommunication. The graduates of our department are employed in MNCs like Wipro, HSBC, Infosys, PCS, Satyam, Symantec, Adobe, MBT, Oracle etc.
                            </p>
                        </div>

                        {/* Department Details Table - UPDATED COLORS */}
                        <div className="overflow-x-auto relative rounded-lg border border-gray-200">
                            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                                <thead className="text-xs text-white uppercase bg-indigo-600 print:bg-gray-800">
                                    <tr>
                                        <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Detail</th>
                                        <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itDepartmentDetails.map((item, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                                            <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">
                                                {item.label}
                                            </td>
                                            <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">
                                                {item.type === 'email' ? (
                                                    <a href={`mailto:${item.value}`} className="text-indigo-600 hover:underline print:text-gray-700">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <span>{item.value}</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right Sidebar - HOD Information - UPDATED COLORS */}
                    {hod && (
                        <div className="lg:w-80 flex-shrink-0 print:hidden">
                            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 sticky top-24 bg-white">
                                <img
                                    alt={hod.name}
                                    className="w-full h-64 object-cover object-top"
                                    src={hod.img}
                                    onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                                />
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-indigo-800 mb-1">
                                        {hod.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 font-medium">{hod.designation}</p>
                                    <a
                                        href={`mailto:${hod.email}`}
                                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        {hod.email}
                                    </a>
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <Link to="/academics/information-technology/faculty/hashmi-syed-asrar" className="text-sm text-indigo-600 hover:underline">
                                            View Full Profile &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InformationTechnologyPage;