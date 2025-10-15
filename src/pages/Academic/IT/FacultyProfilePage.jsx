// src/pages/academics/information-technology/FacultyProfilePage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itTeachingStaff, itSupportingStaff } from './itConstants';
const FacultyProfilePage = () => {
const location = useLocation();
const currentDeptPath = "/academics/information-technology";
return (
<div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
{/* Hero Section */}
<div className="bg-gradient-to-r from-teal-900 to-cyan-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-teal-900 print:shadow-none print:rounded-none print:p-6">
<div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
<svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 9a1 1 0 011-1h1a1 1 0 010 2H5a1 1 0 01-1-1zm11 0a1 1 0 100 2h1a1 1 0 100-2h-1zM6.343 4.929a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm7.071 7.071a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1-1zm-4.929-2.657a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM4.929 6.343a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zm7.071 7.071a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
</div>
<h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Faculty Profile</h1>
<p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
Meet the dedicated and experienced faculty members of the Information Technology Department.
</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400 print:hidden"></div>
</div>
code
Code
{/* Department Sub-Navigation Tabs */}
  <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
    <div className="px-4 py-2 border-b border-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 overflow-x-auto">
      {itDepartmentTabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <Link
            key={tab.name}
            to={tab.path}
            className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
              ${isActive
                ? 'bg-cyan-100 text-cyan-700 border-2 border-cyan-300 shadow-inner'
                : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border border-gray-200'
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
    <h2 className="text-3xl font-bold mb-8 text-cyan-800 border-b-2 border-cyan-100 pb-4 flex items-center print:text-2xl">
    <svg className="w-8 h-8 mr-3 text-cyan-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      Information Technology Faculty
    </h2>

    {/* Teaching Staff Section */}
    <h3 className="text-2xl font-bold text-cyan-700 mb-6 mt-10 border-b border-cyan-100 pb-2 print:text-xl">Teaching Staff</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 print:grid-cols-3 print:gap-4">
      {itTeachingStaff.map((faculty) => (
        <div key={faculty.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 print:shadow-none print:border">
          <Link to={`${currentDeptPath}/faculty/${faculty.id}`} className="block group">
            <div className="overflow-hidden h-56">
                <img
                src={faculty.img}
                alt={faculty.name}
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                loading="lazy"
                />
            </div>
            <div className="p-4 text-center">
              <h4 className="text-lg font-bold text-gray-800 group-hover:text-cyan-700 transition-colors mb-1 print:text-base">{faculty.name}</h4>
              <p className="text-sm text-gray-600 font-medium mb-2 print:text-xs">{faculty.designation}</p>
              {/* Specialization removed from card to match ENTC style if needed, keeping for now based on original IT file */}
              <p className="text-xs text-gray-500 mb-3 line-clamp-2 print:hidden">{faculty.specialization}</p>
              {faculty.email && faculty.email !== 'NA' && (
                <span className="text-cyan-600 text-xs inline-flex items-center print:text-gray-800">
                  <svg className="w-3 h-3 mr-1 print:hidden" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  {faculty.email}
                </span>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>

    {/* Supporting Staff Section */}
    <h3 className="text-2xl font-bold text-cyan-700 mb-6 mt-12 border-b border-cyan-100 pb-2 print:text-xl print:mt-8">Supporting Staff</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 print:grid-cols-3 print:gap-4">
      {itSupportingStaff.map((staff) => (
        <div key={staff.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden border border-gray-200 print:shadow-none print:border">
            <div className="overflow-hidden h-56">
                <img
                src={staff.img}
                alt={staff.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                loading="lazy"
                />
            </div>
            <div className="p-4 text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-1 print:text-base">{staff.name}</h4>
              <p className="text-sm text-gray-600 font-medium mb-2 print:text-xs">{staff.designation}</p>
              {staff.email && staff.email !== 'NA' && staff.email !== '' && (
                <a href={`mailto:${staff.email}`} className="text-cyan-600 hover:underline text-xs inline-flex items-center print:text-gray-800 print:no-underline">
                  <svg className="w-3 h-3 mr-1 print:hidden" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  {staff.email}
                </a>
              )}
            </div>
        </div>
      ))}
    </div>
  </div>
</div>
);
};
export default FacultyProfilePage;