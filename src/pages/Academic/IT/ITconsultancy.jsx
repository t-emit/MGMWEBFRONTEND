// src/pages/Academics/InformationTechnology/ITConsultancyPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navigation tabs for the Information Technology department
// Added "IT Consultancy" to the list
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

// Data for the consultancy services offered
const consultancyServices = [
  {
    title: "Software Development",
    description: "Custom web and mobile application development tailored to your business needs.",
    icon: "M10 20l4-4m0 0l4-4m-4 4H4"
  },
  {
    title: "Data Analytics & ML",
    description: "Leveraging data to uncover insights and build intelligent machine learning models.",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
  },
  {
    title: "Cloud Computing",
    description: "Solutions for cloud migration, infrastructure setup, and serverless architecture.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security audits, vulnerability assessments, and mitigation strategies.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
];

const ITConsultancyPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 100 2h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 011-1h1a1 1 0 100-2H6a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">IT Consultancy Services</h1>
        <p className="text-xl opacity-90 max-w-3xl relative z-10">
          Bridging the gap between academia and industry with expert solutions in Information Technology.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100">
        <div className="prose max-w-none">
          <p className="lead text-lg text-gray-600">
            The Information Technology Department offers expert consultancy services, leveraging the extensive knowledge and experience of its faculty. We collaborate with industries and organizations to provide technical solutions, project guidance, and corporate training programs.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4 pb-2 border-b-2 border-indigo-200">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {consultancyServices.map(service => (
              <div key={service.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md hover:border-indigo-300 transition-all">
                <div className="flex items-center mb-3">
                    <svg className="w-8 h-8 text-indigo-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path></svg>
                    <h4 className="text-xl font-bold text-gray-800">{service.title}</h4>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-indigo-700 mt-10 mb-4 pb-2 border-b-2 border-indigo-200">Our Mission</h3>
          <p className="text-gray-700">
            Our department is dedicated to bridging the gap between academia and industry by offering valuable consultancy services. We strive to apply our expertise to real-world challenges, fostering innovation and contributing to the technological advancement of society.
          </p>

          <div className="mt-10 p-6 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
            <h4 className="font-bold text-lg text-indigo-800">Initiate a Consultancy Project</h4>
            <p className="mt-2 text-gray-700">
              For more details or to begin a collaboration, please reach out to the <strong>Head of Department</strong> or the designated consultancy coordinator through the official college contact channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITConsultancyPage;