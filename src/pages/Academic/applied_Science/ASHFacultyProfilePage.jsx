import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, ashTeachingStaff } from './ashConstants';

const ASHFacultyProfilePage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/applied-science";

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-7xl">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Faculty Profile</h1>
      </div>
      <nav className="mb-8 bg-white rounded-lg shadow-md p-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {ashDepartmentTabs.map((tab) => (
            <Link key={tab.name} to={tab.path} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === tab.path ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : 'text-gray-700 hover:bg-gray-50 border border-gray-200'}`}>
              {tab.name}
            </Link>
          ))}
        </div>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ashTeachingStaff.map((faculty) => (
          <Link to={`${currentDeptPath}/faculty/${faculty.id}`} key={faculty.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col group">
            <div className="h-64 overflow-hidden relative bg-gray-100">
                <img src={faculty.img} alt={`Photo of ${faculty.name}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg'; }} />
            </div>
            <div className="p-4 text-center bg-gray-50 flex-grow flex flex-col justify-center">
              <h3 className="text-lg font-bold text-indigo-800 mb-1 group-hover:text-indigo-600">{faculty.name}</h3>
              <p className="text-sm text-gray-600">{faculty.designation}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ASHFacultyProfilePage;