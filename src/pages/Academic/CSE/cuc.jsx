import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Define the sub-navigation tabs for the CSE department
const cseDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/computer-science-engineering" },
  { name: "Vision-Mission", path: "/academics/computer-science-engineering/vision-mission" },
  { name: "Programmes", path: "/academics/computer-science-engineering/programmes" },
  { name: "Faculty Profile", path: "/academics/computer-science-engineering/faculty" },
  { name: "Laboratory", path: "/academics/computer-science-engineering/labs" },
  { name: "Training and Placement", path: "/academics/computer-science-engineering/training-placement" },
  { name: "Research & Publication", path: "/academics/computer-science-engineering/research-publication" },
  { name: "Achievements", path: "/academics/computer-science-engineering/achievements" },
  { name: "Departmental Activity", path: "/academics/computer-science-engineering/activities" },
  { name: "CUC", path: "/academics/computer-science-engineering/cuc" },
  { name: "IEI", path: "/academics/computer-science-engineering/csi-iei" },
  { name: "Curriculum ", path: "/academics/computer-science-engineering/curriculum " },
  { name: "consultancy", path: "/academics/computer-science-engineering/consultancy" },
  { name: "Innovation in teaching", path: "/academics/computer-science-engineering/consultancy" },
];

// Data for the CUC board members
const cucBoard2024 = [
  { id: 1, name: 'Omkar Angulwar', post: 'Vice President', class: 'B.Tech (CSE)' },
  { id: 2, name: 'Snehal Savankar', post: 'Secretary', class: 'TY-CSE' },
  { id: 3, name: 'Harsh Battalwar', post: 'Jt. Secretary', class: 'B.Tech (CSE)' },
  { id: 4, name: 'Pranav Kalaskar', post: 'Jt. Secretary', class: 'B.Tech (CSE)' },
  { id: 5, name: 'Kashish Aswani', post: 'Treasurer', class: 'TY-CSE' },
  { id: 6, name: 'Aditya Kulkarni', post: 'Technical event head', class: 'TY-CSE' },
  { id: 7, name: 'Vasavi Kawtikwar', post: 'Cultural Event head', class: 'TY-CSE' },
  { id: 8, name: 'Gajanan Jagdambe, Saurabh Kulkarni', post: 'Media Head', class: 'TY-CSE' },
  { id: 9, name: 'Ishwari Nandedkar', post: 'Board Member', class: 'SY-CSE' },
  { id: 10, name: 'Vaishnavi Titare', post: 'Board Member', class: 'SY-CSE' },
  { id: 11, name: 'Sarvesh Kulkarni', post: 'Board Member', class: 'SY-CSE' },
  { id: 12, name: 'Vidhi Sharma', post: 'Board Member', class: 'SY-CSE' },
];

// Data for CUC events
const cucEvents2024 = [
  { 
    id: 1, 
    name: "Oxford International School Students' Visit to MGM Campus", 
    date: "12th August 2024", 
    link: "https://drive.google.com/file/d/1XK9Xz0ZPKX0pyVpbsjOqKH7QPW5z9WAp/view?usp=drive_link" 
  },
  { 
    id: 2, 
    name: "Teachers' Day Program", 
    date: "9th September 2024", 
    link: "https://drive.google.com/file/d/16yMy7JUYVHJ5RXtU2wDnUuKLLCf2xrUj/view?usp=drive_link" 
  },
  { 
    id: 3, 
    name: "Speech Competition", 
    date: "9th September 2024", 
    link: "https://drive.google.com/file/d/15rRLo1WwP_qv02NdA6RkjJi-5UXn2zvU/view?usp=drive_link" 
  },
  { 
    id: 4, 
    name: "Expert talk by Dr. Omprakash Tembhurne on the topic of \"Research to Reality: Ethical Guidelines for Research Articles and Publications\"", 
    date: "14th September 2024", 
    link: "https://drive.google.com/file/d/1JETX087B9hsV874S39uyv5dtCkZXi4JL/view?usp=drive_link" 
  },
  { 
    id: 5, 
    name: "Engineers' Day Program", 
    date: "15th September 2024", 
    link: "https://drive.google.com/file/d/1tVumYtEiZw5MnCUJf2hTRBGqduc_rYsM/view?usp=drive_link" 
  },
  { 
    id: 6, 
    name: "ZP School Visit", 
    date: "19th October 2024", 
    link: null 
  },
  { 
    id: 7, 
    name: "Expert talk by Dr. Vrushali Kinhalkar", 
    date: "11th November 2024", 
    link: null,
    status: "Upcoming"
  },
  { 
    id: 8, 
    name: "Orphanage Visit", 
    date: "14th November 2024", 
    link: null,
    status: "Upcoming"
  },
];

const CUC = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Computer Users' Club (CUC)</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          The most active student club at MGM's College of Engineering
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {cseDepartmentTabs.map((tab) => {
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          Computer Users' Club
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8 print:text-sm">
          <p className="leading-relaxed mb-4">
            The Computer Users' Club is the most active club at MGM's College of Engineering. Established by the first graduating class of the Computer Science and Engineering Department in 1989, this club provides a platform for students to develop their skills and share their perspectives. The club organizes various technical and social events to keep students engaged throughout the year. Dr. A. M. Rajurkar, Head of the CSE Department, serves as the President of the club, with Ms. N. S. Pande as the faculty coordinator.
          </p>
          <p className="leading-relaxed mb-4">
            The selection of the Students' Council for the CUC is conducted through interviews by a panel of faculty members, including the Head of the CSE Department, senior lecturers, and the CUC faculty coordinators. Students interested in council positions submit their performance records, and final selections are based on interviews. The Students' Council comprises a Vice President, Secretaries, Treasurer, Event Heads and Board Members.
          </p>
        </div>

        {/* CUC Board Members 2024-25 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-indigo-700 print:text-xl">Computer Users' Club 2024-25</h3>
          <p className="text-lg mb-6 text-center text-gray-700 print:text-base">
            Below are the names of the students selected for various board member positions in the Computer Users' Club:
          </p>
          
          <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Post</th>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Class</th>
                </tr>
              </thead>
              <tbody>
                {cucBoard2024.map((member, index) => (
                  <tr key={member.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                    <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">
                      {member.id}
                    </td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">
                      {member.name}
                    </td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">
                      {member.post}
                    </td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">
                      {member.class}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CUC Events 2024 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-indigo-700 print:text-xl">List of Events 2024-25</h3>
          
          <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name of Event</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Date of Conduction</th>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Link</th>
                </tr>
              </thead>
              <tbody>
                {cucEvents2024.map((event, index) => (
                  <tr key={event.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                    <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">
                      {event.id}.
                    </td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">
                      {event.name}
                    </td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">
                      {event.date}
                    </td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">
                      {event.link ? (
                        <a 
                          href={event.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center print:text-gray-700"
                        >
                          <svg className="w-4 h-4 mr-1 print:hidden" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                          </svg>
                          View
                        </a>
                      ) : event.status ? (
                        <span className="text-green-600 font-medium">{event.status}</span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default CUC;