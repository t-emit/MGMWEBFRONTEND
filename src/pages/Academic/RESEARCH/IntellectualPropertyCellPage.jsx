// src/pages/Academic/research/IntellectualPropertyCellPage.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Data for the IP Cell Committee
const committeeMembers = [
  { name: 'Dr. G. S. Lathkar', designation: 'Director', department: '----' },
  { name: 'Dr. S. L. Kotgire', designation: 'Professor', department: 'Electronics & Telecommunication' },
  { name: 'Dr. A. M. Rajurkar', designation: 'Professor & Head', department: 'Computer Science & Engineering' },
  { name: 'Dr. M. G. Harkare', designation: 'Professor', department: 'Mechanical Engineering' },
  { name: 'Dr. D. V. Pattewar', designation: 'Professor & Head', department: 'Civil Engineering' },
];

// Data for IP Cell Activities
const ipCellActivities = [
    {
        title: "Expert Lecture on “Intellectual Property Rights”",
        speaker: "Mr. V. L. Dharurkar",
        date: "5th October 2016",
        description: "An expert lecture was organized on Intellectual Property Rights to highlight the importance of promoting IP licensing practices. Mr. Dharurkar emphasized that in today’s globally competitive environment, IP fosters creativity, innovation, and the transfer of technology. He explained how intangible assets are key drivers for businesses to sustain their competitive advantage and achieve superior performance.",
        images: [
            { src: "/images/intellectual-img1.jpg", caption: "Mr. V. L. Dharurkar addressing teaching faculties" },
            { src: "/images/intellectual-img2.jpg", caption: "Mr. V. L. Dharurkar with participants" }
        ]
    },
    {
        title: "Expert Lecture on “Intellectual Property Rights”",
        speaker: "Mr. B. M. Naik",
        date: "15th September 2012",
        description: "An expert lecture was organized to promote the creation, protection, and enforcement of Intellectual Property Rights amongst undergraduate students. Mr. Naik focused on assuring creative minds that their efforts are recognized and secured. He stressed that IP is the fuel that powers prosperity by fostering invention and innovation, and it's crucial for organizations to actively manage their IP to thrive in the global economy.",
        images: []
    }
];


// Define the sub-navigation tabs for the Research section
const researchDepartmentTabs = [
    { name: "Research Profile", path: "/academics/research" },
    { name: "Intellectual Property Cell", path: "/academics/research/ip-cell" },
];

const IntellectualPropertyCellPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-800 to-cyan-800 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-teal-800 print:shadow-none">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.789-2.756 9.348m-2.244-2.244A9.002 9.002 0 0112 2c5.012 0 9.049 4.02 9.049 9.01 0 4.13-2.65 7.64-6.25 8.785M12 11V3m0 8h.01" /></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Intellectual Property Cell</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Protecting and managing the intellectual assets of our institute to foster innovation.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Research Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {researchDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                  ${isActive
                    ? 'bg-cyan-100 text-cyan-800 border-2 border-cyan-300 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-700 border border-gray-200'
                  }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none">
        <h2 className="text-3xl font-bold mb-6 text-cyan-900 border-b-2 border-cyan-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-cyan-600 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.789-2.756 9.348m-2.244-2.244A9.002 9.002 0 0112 2c5.012 0 9.049 4.02 9.049 9.01 0 4.13-2.65 7.64-6.25 8.785M12 11V3m0 8h.01"></path></svg>
          About the IP Cell
        </h2>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none text-gray-700 mb-8 print:text-sm">
          <p className="leading-relaxed">
            Considering the importance of Intellectual Property Rights and in the interest of the legitimacy of research and development work being carried out in the institute, a committee headed by the Director has been formed which consists of senior professors from each Department.
          </p>
        </div>

        {/* Committee Members Table */}
        <div className="overflow-x-auto relative rounded-xl shadow-md mb-12 border border-gray-200 print:shadow-none">
          <table className="w-full text-sm text-left text-gray-700 print:text-xs">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-cyan-700 to-cyan-800 print:bg-gray-800">
              <tr>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg">Sr. No.</th>
                <th scope="col" className="py-4 px-4 md:px-6">Name</th>
                <th scope="col" className="py-4 px-4 md:px-6">Designation</th>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg">Department</th>
              </tr>
            </thead>
            <tbody>
              {committeeMembers.map((member, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-cyan-50 transition-colors`}>
                  <td className="py-4 px-4 md:px-6 font-medium text-gray-900">{index + 1}</td>
                  <td className="py-4 px-4 md:px-6 font-medium">{member.name}</td>
                  <td className="py-4 px-4 md:px-6">{member.designation}</td>
                  <td className="py-4 px-4 md:px-6">{member.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* IP Cell Activities */}
        <h2 className="text-3xl font-bold mb-6 text-cyan-900 border-b-2 border-cyan-100 pb-4 flex items-center print:text-2xl">
          IP Cell Activities
        </h2>
        <div className="space-y-12">
            {ipCellActivities.map((activity, index) => (
                <div key={index} className="p-6 rounded-lg border border-gray-200 bg-gray-50">
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-center text-lg font-semibold text-gray-700">By: {activity.speaker}</p>
                    <p className="text-center text-md text-gray-600 mb-4">{activity.date}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{activity.description}</p>
                    {activity.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {activity.images.map((image, imgIndex) => (
                                <div key={imgIndex} className="text-center">
                                    <img 
                                        src={image.src} 
                                        alt={image.caption} 
                                        className="rounded-lg shadow-md mx-auto mb-2 border-4 border-white"
                                    />
                                    <p className="text-sm text-gray-600 italic">{image.caption}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default IntellectualPropertyCellPage;