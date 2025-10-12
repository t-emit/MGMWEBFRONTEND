import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, departmentProfileData } from './ashConstants';

const ASHProfilePage = () => {
  const location = useLocation();
  const { hod, introduction } = departmentProfileData;

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Applied Science & Humanities</h1>
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 clearfix">
        <div className="md:float-right md:w-80 md:ml-6 mb-6 rounded-lg overflow-hidden shadow-md border border-gray-200 bg-gray-50">
            <img src={hod.img} alt={hod.name} className="w-full h-64 object-cover object-top" onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg'; }}/>
            <div className="p-4">
                <h3 className="text-lg font-bold text-indigo-800">{hod.name}</h3>
                <p className="text-sm text-gray-600">{hod.designation}</p>
                <a href={`mailto:${hod.email}`} className="text-sm text-indigo-600 hover:underline block mt-1 break-all">{hod.email}</a>
            </div>
        </div>
        <div className="prose max-w-none text-gray-700 text-justify">
          {introduction.map((para, index) => <p key={index} className="mb-4">{para}</p>)}
        </div>
      </div>
    </div>
  );
};
export default ASHProfilePage;