// src/pages/academics/information-technology/FacultyProfilePage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navigation tabs for the Information Technology department
const itDepartmentTabs = [
  { name: "Faculty Detail", path: "/academics/information-technology/faculty-detail" },
  { name: "Faculty Profile", path: "/academics/information-technology/faculty-profile" },
  { name: "Information Technology", path: "/academics/information-technology" },
  { name: "IT Achievements", path: "/academics/information-technology/achievements" },
  { name: "IT Curriculum", path: "/academics/information-technology/curriculum" },
  { name: "IT Departmental Activity", path: "/academics/information-technology/departmental-activity" },
  { name: "IT Laboratory Detail", path: "/academics/information-technology/laboratory-detail" },
  { name: "IT Laboratory", path: "/academics/information-technology/laboratory" },
  { name: "IT Profile", path: "/academics/information-technology/profile" },
  { name: "IT Programmes", path: "/academics/information-technology/programmes" },
  { name: "IT Research Publication", path: "/academics/information-technology/research-publication" },
  { name: "ITSA", path: "/academics/information-technology/itsa" },
  { name: "IT Training Placement", path: "/academics/information-technology/training-placement" },
  { name: "IT Vision Mission", path: "/academics/information-technology/vision-mission" },
  { name: "IT Consultancy", path: "/academics/information-technology/consultancy" },
  { name: "IT Departmental Committees", path: "/academics/information-technology/departmental-committees" },
];

// Faculty data extracted from the provided HTML
const teachingStaff = [
  { id: 'hashmi-syed-asrar', img: '/images/department/faculty/Department_5-20140801052801.JPG', name: 'Mr. Hashmi Syed Asrar', designation: 'Assistant Professor & Head', specialization: 'Computer Networks, Data Mining', email: 'hashmi_sa@mgmcen.ac.in' },
  { id: 'manisha-manjramkar', img: '/images/department/faculty/Department_5-20140801052934.jpg', name: 'Miss. Manisha Amrutrao Manjramkar', designation: 'Assistant Professor', specialization: 'Network Security, Database Management Systems', email: 'manjramkar_ma@mgmcen.ac.in' },
  { id: 'yadav-rs', img: '/images/department/faculty/Department_5-20140801052833.jpg', name: 'Mr. Yadav R. S.', designation: 'Assistant Professor', specialization: 'Data Warehousing and Data Mining, Computer Networking', email: 'yadavrs@mgmcen.ac.in' },
  { id: 'ambulgekar-rm', img: '/images/department/faculty/Department_5-20180309164110.jpg', name: 'Mr. Ambulgekar R. M.', designation: 'Assistant Professor', specialization: 'Computer Networks, Wireless Sensor Networks, Embedded Systems', email: 'ambulgekar_rm@mgmcen.ac.in' },
  { id: 'bandewar-sp', img: '/images/department/faculty/Department_5-20140801053000.jpg', name: 'Mr. Bandewar S. P.', designation: 'Assistant Professor', specialization: 'Embedded System', email: 'bandewar_sp@mgmcen.ac.in' },
  { id: 'wadje-jayshree', img: '/images/department/faculty/Department_5-20140801053025.jpg', name: 'Miss. Wadje Jayshree Digamberrao', designation: 'Assistant Professor', specialization: 'Image Processing, Network Security', email: 'wadje_jd@mgmcen.ac.in' },
  { id: 'waghmare-anil', img: '/images/department/faculty/Department_5-20180309164338.jpg', name: 'Mr. Waghmare Anil B.', designation: 'Assistant Professor', specialization: 'Image Processing, Computer Networking', email: 'waghmare_ab@mgmcen.ac.in' },
  { id: 'ritesh-bais', img: '/images/department/faculty/Department_5-20240910191225.jpg', name: 'Ritesh Gangasingh Bais', designation: 'Assistant Professor', specialization: 'ME CNIS', email: 'bais_riteshsingh@mgmcen.ac.in' },
];

const supportingStaff = [
  { id: 'sachin-deone', img: '/images/department/faculty/Department_5-20161108192559.jpg', name: 'Sachin Bhanudasrao Deone', designation: 'Lab Assistant', specialization: 'Not Available', email: 'sachin.deone@gmail.com' },
  { id: 'bharat-patil', img: '/images/department/faculty/Department_5-20161108192633.jpg', name: 'Bharat Nagnath Patil', designation: 'Lab Assistant', specialization: 'Not Available', email: 'patil_bharat@mgmcen.ac.in' },
  { id: 'sayyed-hussein', img: '/images/department/faculty/Department_5-20161108192713.jpg', name: 'Sayyed Hussein Sayyed allabaksh', designation: 'Peon', specialization: 'Not Available', email: 'sayyed1.ha@gmail.com' },
];

// Combine all faculty data for easy lookup in a detail page
export const allItFacultyData = [...teachingStaff, ...supportingStaff];

const FacultyProfilePage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/information-technology";

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-900 to-cyan-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 9a1 1 0 011-1h1a1 1 0 010 2H5a1 1 0 01-1-1zm11 0a1 1 0 100 2h1a1 1 0 100-2h-1zM6.343 4.929a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm7.071 7.071a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1-1zm-4.929-2.657a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM4.929 6.343a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zm7.071 7.071a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Faculty Profile</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Meet the dedicated and experienced faculty members of the Information Technology Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300`}>
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
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-cyan-800 border-b-2 border-cyan-200 pb-4 flex items-center">
        <svg className="w-8 h-8 mr-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          Information Technology Faculty
        </h2>

        {/* Teaching Staff Section */}
        <h3 className="text-2xl font-bold text-cyan-700 mb-6 mt-10 border-b border-cyan-100 pb-2">Teaching Staff</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teachingStaff.map((faculty) => (
            <div key={faculty.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Link to={`${currentDeptPath}/faculty/${faculty.id}`} className="block">
                <img
                  src={faculty.img}
                  alt={faculty.name}
                  className="w-full h-48 object-cover object-top"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-teal-800 hover:underline">{faculty.name}</h4>
                  <p className="text-sm text-gray-600">{faculty.designation}</p>
                  <p className="text-xs text-gray-500 mt-1">{faculty.specialization}</p>
                  {faculty.email && faculty.email !== 'NA' && (
                    <a href={`mailto:${faculty.email}`} className="text-cyan-600 hover:text-cyan-800 text-xs mt-2 inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      {faculty.email}
                    </a>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Supporting Staff Section */}
        <h3 className="text-2xl font-bold text-cyan-700 mb-6 mt-12 border-b border-cyan-100 pb-2">Supporting Staff</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {supportingStaff.map((staff) => (
            <div key={staff.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Link to={`${currentDeptPath}/faculty/${staff.id}`} className="block">
                <img
                  src={staff.img}
                  alt={staff.name}
                  className="w-full h-48 object-cover object-top"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-teal-800 hover:underline">{staff.name}</h4>
                  <p className="text-sm text-gray-600">{staff.designation}</p>
                  {staff.email && staff.email !== 'NA' && staff.email !== '' && (
                    <a href={`mailto:${staff.email}`} className="text-cyan-600 hover:text-cyan-800 text-xs mt-2 inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      {staff.email}
                    </a>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyProfilePage;