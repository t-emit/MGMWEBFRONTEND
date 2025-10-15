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

// Data for the 2015-16 ITSA Council
const itsaCouncil2015 = [
  { sr: 1, name: "Surve Ravina", post: "General Secretary", class: "BE" },
  { sr: 2, name: "Basarkar Monika", post: "Event Organiser Secretary", class: "BE" },
  { sr: 3, name: "Koratkar Diksha", post: "Wall Magazine Secretary", class: "BE" },
  { sr: 4, name: "Swapnil Swamy", post: "Treasures Secretary", class: "BE" },
  { sr: 5, name: "Swarnil Swamy", post: "Joint Secretary", class: "BE" },
  { sr: 6, name: "Salman Khan", post: "Joint Secretary", class: "BE" },
  { sr: 7, name: "Bhagyshri Indrale", post: "Joint Secretary", class: "BE" },
  { sr: 8, name: "Aniket Dusey", post: "Joint Secretary", class: "TE" },
  { sr: 9, name: "Harsha Aswani", post: "Joint Treasurer", class: "SE" },
  { sr: 10, name: "Aftab Khan", post: "Joint Event Organizer", class: "BE" },
  { sr: 11, name: "Sneha Dalal", post: "Joint Event Organizer", class: "BE" },
  { sr: 12, name: "Kulakarni Megha", post: "Joint Event Organizer", class: "BE" },
  { sr: 13, name: "Neha Raghojiwar", post: "Joint Event Organizer", class: "TE" },
  { sr: 14, name: "NavalKishor Dubey", post: "Joint Event Organizer", class: "TE" },
  { sr: 15, name: "Vinayak Mahajan", post: "Joint Event Organizer", class: "TE" },
  { sr: 16, name: "Rutuja Mane", post: "Joint Event Organizer", class: "TE" },
  { sr: 17, name: "Priyanka Gathadi", post: "Joint Event Organizer", class: "TE" },
  { sr: 18, name: "Pooja Thakur", post: "Joint Event Organizer", class: "SE" },
  { sr: 19, name: "Urusa Afsheen", post: "Joint Event Organizer", class: "SE" },
  { sr: 20, name: "Sonal Joshi", post: "Joint Event Organizer", class: "SE" },
  { sr: 21, name: "Aditi Lande", post: "Joint Event Organizer", class: "SE" },
  { sr: 22, name: "Jyoti Panchal", post: "Joint Wall Magazine Secretary", class: "BE" },
  { sr: 23, name: "Uttam Galande", post: "Joint Wall Magazine Secretary", class: "BE" },
  { sr: 24, name: "Swapnil Swamy", post: "Joint Wall Magazine Secretary", class: "BE" },
  { sr: 25, name: "Shilpa Bodhane", post: "Joint Wall Magazine Secretary", class: "TE" },
  { sr: 26, name: "Neha Raghojiwar", post: "Joint Wall Magazine Secretary", class: "TE" },
  { sr: 27, name: "Malashri Patil", post: "Joint Wall Magazine Secretary", class: "TE" },
  { sr: 28, name: "Pratik Zawar", post: "Joint Wall Magazine Secretary", class: "TE" },
  { sr: 29, name: "Pooja Thakur", post: "Joint Wall Magazine Secretary", class: "SE" },
  { sr: 30, name: "Urusa Afsheen", post: "Joint Wall Magazine Secretary", class: "SE" },
  { sr: 31, name: "Akshay Bhande", post: "Joint Wall Magazine Secretary", class: "SE" },
  { sr: 32, name: "Monika Basarkar", post: "Joint Treasure Secretary", class: "BE" },
  { sr: 33, name: "Nikhil Dachawar", post: "Joint Treasure Secretary", class: "TE" },
  { sr: 34, name: "Pratik Zawar", post: "Joint Treasure Secretary", class: "TE" },
  { sr: 35, name: "Rahul Maniyar", post: "Joint Treasure Secretary", class: "SE" },
  { sr: 36, name: "Akshay Bhande", post: "Joint Treasure Secretary", class: "SE" },
];


const ITSAPage = () => {
  const location = useLocation(); // Hook to get the current URL path

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section for ITSA */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Information Technology Student Association (ITSA)</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Providing a platform for students to explore, express, and engage in technical and co-curricular activities.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md">
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
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          About ITSA
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="leading-relaxed mb-4">
            Information Technology Student Association (ITSA) was formed in 2008 and is a very active student club in the college. It organizes various activities like Gaming Events, Aptitude Tests, and industrial visits to various IT industries for the students of the IT department.
          </p>
          <p className="leading-relaxed mb-6">
            This club provides a platform for students to explore themselves and express their views. It keeps students engaged throughout the year with events such as Teacher’s Day, Engineer’s Day, Gandhi Jayanti, and various Training Programs. The student council is selected through mock interviews conducted by a panel of faculty members, including the Head of the Department, senior lecturers, and ITSA faculty coordinators.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-6 border-b border-indigo-100 pb-3">ITSA Council 2015-16</h2>
          <div className="overflow-x-auto relative rounded-lg shadow-md mb-8 border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6">Name of Student</th>
                  <th scope="col" className="py-3 px-4 md:px-6">Position</th>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg">Class</th>
                </tr>
              </thead>
              <tbody>
                {itsaCouncil2015.map((member, index) => (
                  <tr key={member.sr} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b hover:bg-indigo-50 transition-colors`}>
                    <td className="py-3 px-4 md:px-6">{member.sr}.</td>
                    <td className="py-3 px-4 md:px-6">{member.name}</td>
                    <td className="py-3 px-4 md:px-6">{member.post}</td>
                    <td className="py-3 px-4 md:px-6">{member.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-6 border-b border-indigo-100 pb-3">ITSA Activities</h2>
          
          {/* Teachers Day */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">1) Teachers Day</h3>
            <p className="mb-4">A skit on Savitribai Phule was performed by students to celebrate the day.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <figure>
                <img src="http://mgmcen.ac.in/images/gallery/18072014021006-ITSA1.JPG" alt="Teachers Day Celebration" className="rounded-lg shadow-md" />
              </figure>
              <figure>
                <img src="http://mgmcen.ac.in/images/gallery/18072014021040-ITSA2.JPG" alt="Skit on Savitribai Phule" className="rounded-lg shadow-md" />
                <figcaption className="text-center text-sm mt-2 text-gray-600">Group photo of students with the Director.</figcaption>
              </figure>
            </div>
          </div>

          {/* Engineers Day */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">2) Engineers Day</h3>
            <p className="mb-4">The event was inaugurated by the Chairman, and included activities like a 'Best out of Waste' competition.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <figure>
                <img src="http://mgmcen.ac.in/images/gallery/18072014022134-ITSA4.JPG" alt="Inauguration by Chairman" className="rounded-lg shadow-md" />
                <figcaption className="text-center text-sm mt-2 text-gray-600">Inauguration by Chairman Sir.</figcaption>
              </figure>
              <figure>
                <img src="http://mgmcen.ac.in/images/gallery/18072014022240-ITSA6.JPG" alt="Best out of waste competition" className="rounded-lg shadow-md" />
                <figcaption className="text-center text-sm mt-2 text-gray-600">Best out of Waste activity.</figcaption>
              </figure>
            </div>
          </div>

          {/* Gandhi Jayanti */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">3) Gandhi Jayanti</h3>
            <p className="mb-4">Activities included a Wall Magazine inauguration by the Chairman and a skit on Mahatma Gandhi.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <figure>
                <img src="http://mgmcen.ac.in/images/gallery/18072014022646-ITSA7.JPG" alt="Wall Magazine Inauguration" className="rounded-lg shadow-md" />
                <figcaption className="text-center text-sm mt-2 text-gray-600">Wall Magazine Inauguration.</figcaption>
              </figure>
              <figure>
                <img src="http://mgmcen.ac.in/images/gallery/18072014022854-ITSA9.JPG" alt="Skit on Mahatma Gandhi" className="rounded-lg shadow-md" />
                 <figcaption className="text-center text-sm mt-2 text-gray-600">Skit on Mahatma Gandhi.</figcaption>
              </figure>
            </div>
          </div>
          
          {/* Workshop */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">4) Workshop on Embedded Systems (8051 and ARM)</h3>
            <p className="mb-4">The department organized a hands-on workshop on ARM 7 for TE students, with Mr. Jivan Kataria as the resource person who provided valuable information and practical knowledge.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src="http://mgmcen.ac.in/images/gallery/18072014023224-ITSA11.JPG" alt="Workshop on Embedded Systems" className="rounded-lg shadow-md" />
              <img src="http://mgmcen.ac.in/images/gallery/18072014023254-ITSA12.JPG" alt="Students at Workshop" className="rounded-lg shadow-md" />
            </div>
          </div>

          {/* Group Day */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">5) Group Day</h3>
            <p className="mb-4">A Group Day was celebrated with the theme "WE BUILD NATION".</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src="http://mgmcen.ac.in/images/gallery/18072014023450-ITSA13.JPG" alt="Group Day Celebration" className="rounded-lg shadow-md" />
              <img src="http://mgmcen.ac.in/images/gallery/18072014023507-ITSA14.JPG" alt="Group Day Theme" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSAPage;