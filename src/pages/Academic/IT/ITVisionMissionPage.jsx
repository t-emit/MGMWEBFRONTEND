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

// Data extracted from the provided HTML
const trainingPrograms = [
    {
        title: 'Oracle: SQL fundamentals-9i',
        description: 'This course is started from 2007. In this course hands on experience is provided on Database Technology and SQL. This course is conducted in collaboration with Oracle Corporation specially for third year students in order to make industry ready.',
    },
    {
        title: 'Microsoft .NET',
        description: 'Nowadays .NET technology is the buzz word in IT industry. Hence realizing the importance of .NET, the department conducts training on this platform for the students of final year. The training is conducted in collaboration with Microsoft Training Partners.',
    },
    {
        title: 'Soft Skills Training',
        description: 'In order to develop the complete personality of the students, we organize 4 hours training every week from the industry experts. It is organized for second year and third year students in collaboration with Innovations Unlimited, Bangalore.',
    },
    {
        title: 'Embedded Workshop',
        description: 'SPJ Embedded Technologies Pvt.LTD, Pune in association with IT Department conducted workshop on embedded systems with ARM7 and with 8051 microcontroller. The resource person was Mr. Jivan Katariya (Director SPJ Systems). During the workshop students of Third year IT and Final year IT enjoyed working on LPC 2148 development boards (kits) developed by SPJ and had hands on in Embedded C programming.',
        topics: [
            'LED interfacing',
            'Buzzer output',
            'Stepper motor Interfacing',
            'LCD Interfacing',
            'Keyboard Interfacing etc',
        ],
    },
];

const keyPlacements = [
    { srNo: 1, name: 'Mohd Adeem Parvez', class: 'BE-IT', organization: 'Syntel Corporation, Chennai' },
    { srNo: 2, name: 'Aarti Kabra', class: 'BE-IT', organization: 'Mastek Corporation, Mumbai' },
    { srNo: 3, name: 'Anuradha Dhole', class: 'BE-IT', organization: 'Mastek Corporation, Mumbai' },
    { srNo: 4, name: 'Shrdha Mantri', class: 'BE-IT', organization: 'Mastek Corporation, Mumbai' },
    { srNo: 5, name: 'Poonam Kashetwar', class: 'BE-IT', organization: 'Mastek Corporation, Mumbai' },
];


const ItTrainingPlacementPage = () => {
  const location = useLocation(); // Hook to get the current URL path

  // State to manage the visibility of each main accordion section
  const [isTrainingVisible, setTrainingVisible] = useState(true);
  const [isPlacementsVisible, setPlacementsVisible] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21.5l2-2.5-2-2.5-2 2.5 2 2.5zM15 2.5l-2 2.5 2 2.5 2-2.5-2-2.5zM15 21.5l2-2.5-2-2.5-2 2.5 2 2.5zM9 2.5l-2 2.5 2 2.5 2-2.5-2-2.5zM3 12l2.5 2 2.5-2-2.5-2L3 12zm18 0l-2.5 2-2.5-2 2.5-2 2.5 2zM8.5 12l2.5 2 2.5-2-2.5-2-2.5 2zm5 0l2.5 2 2.5-2-2.5-2-2.5 2z"></path>
            </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Training and Placement</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Bridging academia and industry through dedicated training programs and successful placement drives.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
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
            <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          Career Development at IT
        </h2>

        {/* Main Accordion Container */}
        <div className="space-y-6">

          {/* Training Programs Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3
              className={`flex items-center justify-between text-2xl font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-200 rounded-lg p-3 -m-3 md:-m-4 ${isTrainingVisible ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-800'}`}
              onClick={() => setTrainingVisible(!isTrainingVisible)}
            >
              <span>Training Programs</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isTrainingVisible ? 'rotate-180' : ''}`}
                fill="currentColor" viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </h3>
            {isTrainingVisible && (
              <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg bg-white p-4 rounded-lg shadow-sm space-y-6">
                <p>
                  A skilled IT Professional has a very high demand in the industry. Hence the department conducts various training programmes for the development of technical and soft skills in the students. The different training programmes conducted by the department are:
                </p>
                
                {trainingPrograms.map((program, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h4>
                        <p>{program.description}</p>
                        {program.topics && (
                            <div className="mt-3">
                                <h5 className="font-semibold text-gray-700">Topics Covered:</h5>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                                    {program.topics.map((topic, i) => (
                                        <li key={i}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}

              </div>
            )}
          </div>

          {/* Key Placements Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3
              className={`flex items-center justify-between text-2xl font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-200 rounded-lg p-3 -m-3 md:-m-4 ${isPlacementsVisible ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-800'}`}
              onClick={() => setPlacementsVisible(!isPlacementsVisible)}
            >
              <span>Key Placements</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isPlacementsVisible ? 'rotate-180' : ''}`}
                fill="currentColor" viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </h3>
            {isPlacementsVisible && (
              <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg bg-white p-4 rounded-lg shadow-sm">
                 <div className="overflow-x-auto relative rounded-lg shadow-md border">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="text-xs text-white uppercase bg-gradient-to-r from-purple-700 to-indigo-800">
                            <tr>
                                <th scope="col" className="py-3 px-6">Sr. No.</th>
                                <th scope="col" className="py-3 px-6">Name of Student</th>
                                <th scope="col" className="py-3 px-6">Class</th>
                                <th scope="col" className="py-3 px-6">Organization</th>
                            </tr>
                        </thead>
                        <tbody>
                            {keyPlacements.map((student, index) => (
                                <tr key={student.srNo} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors`}>
                                    <td className="py-4 px-6 text-center">{student.srNo}</td>
                                    <td className="py-4 px-6 font-medium text-gray-900">{student.name}</td>
                                    <td className="py-4 px-6">{student.class}</td>
                                    <td className="py-4 px-6">{student.organization}</td>
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