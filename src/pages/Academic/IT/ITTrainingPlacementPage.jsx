import React, { useState } from 'react';
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
const ItTrainingPlacementPage = () => {
  const location = useLocation(); // Hook to get the current URL path

  // State to manage the visibility of each main accordion section
  const [isPlacementsVisible, setPlacementsVisible] = useState(false);
  const [isTrainingVisible, setTrainingVisible] = useState(false);

  // Data for Key Placements
  const placementsData = [
    { id: 1, name: "Mohd Adeem Parvez", class: "BE-IT", organization: "Syntel Corporation, Chennai" },
    { id: 2, name: "Aarti Kabra", class: "BE-IT", organization: "Mastek Corporation, Mumbai" },
    { id: 3, name: "Anuradha Dhole", class: "BE-IT", organization: "Mastek Corporation, Mumbai" },
    { id: 4, name: "Shrdha Mantri", class: "BE-IT", organization: "Mastek Corporation, Mumbai" },
    { id: 5, name: "Poonam Kashetwar", class: "BE-IT", organization: "Mastek Corporation, Mumbai" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Training and Placement</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Discover the training programs and key placement records for the Information Technology department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md">
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
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          IT Career Development
        </h2>

        {/* Main Accordion Container */}
        <div className="space-y-6">

          {/* Training Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3
              className={`flex items-center justify-between text-2xl font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-200 rounded-lg p-3 -m-3 md:-m-4 ${isTrainingVisible ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-800'}`}
              onClick={() => setTrainingVisible(!isTrainingVisible)}
            >
              <span>Training Programs</span>
              <svg className={`w-6 h-6 transform transition-transform duration-300 ${isTrainingVisible ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </h3>
            {isTrainingVisible && (
              <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg bg-white p-4 rounded-lg shadow-sm">
                <p className="mb-4">
                  A skilled IT Professional is in very high demand in the industry. Hence, the department conducts various training programmes for the development of technical and soft skills in students.
                </p>
                <ul className="space-y-4 list-disc list-inside">
                  <li>
                    <strong>Oracle: SQL fundamentals-9i:</strong> Started in 2007, this course provides hands-on experience in Database Technology and SQL. It is conducted in collaboration with Oracle Corporation for third-year students to make them industry-ready.
                  </li>
                  <li>
                    <strong>Microsoft .NET:</strong> Recognizing that .NET technology is a buzzword in the IT industry, the department conducts training on this platform for final-year students in collaboration with Microsoft Training Partners.
                  </li>
                  <li>
                    <strong>Soft Skills Training:</strong> To develop the complete personality of the students, we organize 4 hours of training every week from industry experts for second and third-year students, in collaboration with Innovations Unlimited, Bangalore.
                  </li>
                  <li>
                    <strong>Embedded Workshop:</strong> SPJ Embedded Technologies Pvt. Ltd., Pune, in association with the IT Department, conducted a workshop on embedded systems with ARM7 and 8051 microcontrollers. The resource person was Mr. Jivan Katariya (Director SPJ Systems). During the workshop, third and final year IT students enjoyed working on LPC 2148 development boards and gained hands-on experience in Embedded C programming. Topics covered included:
                    <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
                      <li>LED interfacing</li>
                      <li>Buzzer output</li>
                      <li>Stepper motor Interfacing</li>
                      <li>LCD Interfacing</li>
                      <li>Keyboard Interfacing, etc.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Placements Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3
              className={`flex items-center justify-between text-2xl font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-200 rounded-lg p-3 -m-3 md:-m-4 ${isPlacementsVisible ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-800'}`}
              onClick={() => setPlacementsVisible(!isPlacementsVisible)}
            >
              <span>Key Placements</span>
              <svg className={`w-6 h-6 transform transition-transform duration-300 ${isPlacementsVisible ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </h3>
            {isPlacementsVisible && (
              <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg bg-white p-4 rounded-lg shadow-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-indigo-600 text-white">
                      <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Sr. No</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name of Student</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Class</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Organization</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      {placementsData.map((student, index) => (
                        <tr key={student.id} className={index % 2 === 0 ? "bg-indigo-50" : "bg-white"}>
                          <td className="text-center py-3 px-4">{student.id}</td>
                          <td className="text-left py-3 px-4">{student.name}</td>
                          <td className="text-left py-3 px-4">{student.class}</td>
                          <td className="text-left py-3 px-4">{student.organization}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItTrainingPlacementPage;