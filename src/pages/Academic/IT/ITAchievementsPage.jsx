// src/pages/Academics/InformationTechnology/ITAchievementsPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itAchievementsData } from './itConstants';

// Reusable component for rendering an achievement table - styled consistently
const AchievementTable = ({ title, data, isPlacementTable = false }) => (
    <div className="mb-10">
        {/* Table Heading - UPDATED COLORS */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-4 print:text-xl">{title}</h3> 
        <div className="overflow-x-auto relative rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                {/* Table Header - UPDATED COLORS */}
                <thead className="text-xs text-white uppercase bg-indigo-600 print:bg-gray-800">
                    <tr>
                        <th scope="col" className="py-3 px-4 w-16 text-center rounded-tl-lg print:px-2">Sr.No</th>
                        <th scope="col" className="py-3 px-4 print:px-2">Name of Student</th>
                        <th scope="col" className="py-3 px-4 print:px-2">Class</th>
                        <th scope="col" className="py-3 px-4 print:px-2">{isPlacementTable ? 'Organization' : 'Event'}</th>
                        {!isPlacementTable && <th scope="col" className="py-3 px-4 text-center rounded-tr-lg print:px-2">Rank</th>}
                        {isPlacementTable && <th scope="col" className="py-3 px-4 rounded-tr-lg print:hidden"></th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                            <td className="py-3 px-4 text-center font-medium print:py-2 print:px-2">{item.srNo}</td>
                            <td className="py-3 px-4 font-medium text-gray-900 print:py-2 print:px-2">{item.studentName}</td>
                            <td className="py-3 px-4 print:py-2 print:px-2">{item.class}</td>
                            <td className="py-3 px-4 print:py-2 print:px-2">{isPlacementTable ? item.organization : item.event}</td>
                            {/* Table Rank Text Color - UPDATED COLORS */}
                            {!isPlacementTable && <td className="py-3 px-4 text-center font-medium text-indigo-700 print:text-black print:py-2 print:px-2">{item.rank}</td>}
                            {isPlacementTable && <td className="print:hidden"></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const ITAchievementsPage = () => {
    const location = useLocation();

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
            {/* Hero Section - UPDATED COLORS */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm1 2h6v1H7V4zm0 3h6v1H7V7zm0 3h6v1H7v-1zm0 3h6v1H7v-1z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Achievements</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
                    Highlighting the success and recognition earned by IT students and faculty.
                </p>
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
                <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
                    <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Departmental Achievements
                </h2>

                <div className="space-y-10 print:space-y-6">
                    {itAchievementsData.academic.length > 0 && <AchievementTable title="Academic Achievements" data={itAchievementsData.academic} />}
                    {itAchievementsData.placements.length > 0 && <AchievementTable title="Key Placements" data={itAchievementsData.placements} isPlacementTable={true} />}
                    {itAchievementsData.sports.length > 0 && <AchievementTable title="Sports Achievements" data={itAchievementsData.sports} />}
                    {itAchievementsData.cultural.length > 0 && <AchievementTable title="Cultural Achievements" data={itAchievementsData.cultural} />}
                </div>
            </div>
        </div>
    );
};

export default ITAchievementsPage;