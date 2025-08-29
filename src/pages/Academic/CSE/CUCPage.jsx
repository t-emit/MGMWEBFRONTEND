import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Define the sub-navigation tabs for the CSE department
// This array should ideally be a shared constant if used across multiple department-related pages.
const cseDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/computer-science-engineering" },
  { name: "Programmes", path: "/academics/computer-science-engineering/programmes" },
  { name: "Faculty Profile", path: "/academics/computer-science-engineering/faculty" },
  { name: "Laboratory", path: "/academics/computer-science-engineering/labs" },
  { name: "Training and Placement", path: "/academics/computer-science-engineering/training-placement" },
  { name: "Research & Publication", path: "/academics/computer-science-engineering/research-publication" },
  { name: "Achievements", path: "/academics/computer-science-engineering/achievements" },
  { name: "Departmental Activity", path: "/academics/computer-science-engineering/activities" },
  { name: "CUC", path: "/academics/computer-science-engineering/cuc" }, // This page's path
  { name: "CSI/IEI", path: "/academics/computer-science-engineering/csi-iei" },
  { name: "Downloads", path: "/academics/computer-science-engineering/downloads" },
  { name: "Resources", path: "/academics/computer-science-engineering/resources" },
];

const CUCPage = () => {
  const location = useLocation(); // Hook to get the current URL path

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section for CUC - Matched to CSE Page Theme */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Reusing the CSE page's icon for consistency with the department's page */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Computer Users’ Club (CUC)</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Engaging students in technical and social activities, fostering skill development and community.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs - Matched to CSE Page Theme */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden`}>
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        {/* Reverted to grid layout as in the reference CSE page */}
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

      {/* Main Content Area - Matched to CSE Page Theme */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        {/* Main section heading - Matched to CSE Page Theme */}
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          {/* Reusing the CSE page's icon for consistency with the department's page */}
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Computer Users’ Club (CUC) Details
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 print:text-sm">
          <p className="leading-relaxed mb-4">
            The Computer Users' Club is the most active club at MGM's College of Engineering. Established by the first graduating class of the Computer Science and Engineering Department in 1989, this club provides a platform for students to develop their skills and share their perspectives. The club organizes various technical and social events to keep students engaged throughout the year. Dr. A. M. Rajurkar, Head of the CSE Department, serves as the President of the club, with Ms. N. S. Pande as the faculty coordinator.
          </p>
          <p className="leading-relaxed mb-6">
            The selection of the Students' Council for the CUC is conducted through interviews by a panel of faculty members, including the Head of the CSE Department, senior lecturers, and the CUC faculty coordinators. Students interested in council positions submit their performance records, and final selections are based on interviews. The Students' Council comprises a Vice President, Secretaries, Treasurer, Event Heads and Board Members.
          </p>

          {/* CUC Section Heading - Matched to CSE Page Theme (Vision/Mission H3 styling) */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-6 border-b border-indigo-100 pb-3 print:text-xl">Computer Users’ Club 2024-25</h2>
          {/* Sub-heading for council members - Matched to CSE Page Theme (similar to PEO/PSO intro text) */}
          <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4 print:text-lg">Below are the names of the students selected for various board member positions in the Computer Users' Club:</h3>
          <div className="overflow-x-auto relative rounded-lg shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
            {/* Table styling - Matched to CSE Page Theme */}
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
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>1</td><td>Omkar Angulwar</td><td>Vice President</td><td>B.Tech (CSE)</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>2</td><td>Snehal Savankar</td><td>Secretary</td><td>TY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>3</td><td>Harsh Battalwar</td><td>Jt. Secretary</td><td>B.Tech (CSE)</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>4</td><td>Pranav Kalaskar</td><td>Jt. Secretary</td><td>B.Tech (CSE)</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>5</td><td>Kashish Aswani</td><td>Treasurer</td><td>TY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>6</td><td>Aditya Kulkarni</td><td>Technical event head</td><td>TY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>7</td><td>Vasavi Kawtikwar</td><td>Cultural Event head</td><td>TY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>8</td><td>Gajanan Jagdambe, Saurabh Kulkarni</td><td>Media Head</td><td>TY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>9</td><td>Ishwari Nandedkar</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>10</td><td>Vaishnavi Titare</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>11</td><td>Sarvesh Kulkarni</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>12</td><td>Vidhi Sharma</td><td>Board Member</td><td>SY-CSE</td></tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-lg font-semibold text-indigo-600 print:text-base">
            <strong>The List of Events </strong>
          </p>
          <div className="overflow-x-auto relative rounded-lg shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
            {/* Table styling - Matched to CSE Page Theme */}
            <table border="0" cellpadding="0" cellspacing="0" className="w-full text-sm text-left text-gray-700 print:text-xs">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name of Event</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Date of Conduction</th>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Link</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>1.</td>
                  <td>Oxford International School Students' Visit to MGM Campus</td>
                  <td>12<sup>th</sup> August 2024</td>
                  <td><a href="https://drive.google.com/file/d/1XK9Xz0ZPKX0pyVpbsjOqKH7QPW5z9WAp/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>2.</td>
                  <td>Teachers’ Day Program</td>
                  <td>9<sup>th</sup> September 2024</td>
                  <td><a href="https://drive.google.com/file/d/16yMy7JUYVHJ5RXtU2wDnUuKLLCf2xrUj/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>3.</td>
                  <td>Speech Competition</td>
                  <td>9<sup>th</sup> September 2024</td>
                  <td><a href="https://drive.google.com/file/d/15rRLo1WwP_qv02NdA6RkjJi-5UXn2zvU/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>4.</td>
                  <td>Expert talk by Dr. Omprakash Tembhurne on the topic of "Research to Reality: Ethical Guidelines for Research Articles and Publications”.</td>
                  <td>14<sup>th</sup> September 2024</td>
                  <td><a href="https://drive.google.com/file/d/1JETX087B9hsV874S39uyv5dtCkZXi4JL/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>5.</td>
                  <td>Engineers’ Day Program</td>
                  <td>15<sup>th</sup> September 2024</td>
                  <td><a href="https://drive.google.com/file/d/1tVumYtEiZw5MnCUJf2hTRBGqduc_rYsM/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>6.</td>
                  <td>ZP School Visit</td>
                  <td>19<sup>th</sup> October 2024</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>7.</td>
                  <td>Expert talk by Dr. Vrushali Kinhalkar</td>
                  <td>11<sup>th</sup> November 2024</td>
                  <td>Upcoming</td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>8.</td>
                  <td>Orphanage Visit</td>
                  <td>14<sup>th</sup> November 2024</td>
                  <td>Upcoming</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4 print:text-lg">
            <br />
            Below are the names of the students selected for various board member positions in the Computer Users' Club:
          </h3>
          <div className="overflow-x-auto relative rounded-lg shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
            {/* Table styling - Matched to CSE Page Theme */}
            <table border="0" cellpadding="0" cellspacing="0" className="w-full text-sm text-left text-gray-700 print:text-xs">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Post</th>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Class</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>1</td><td>Lohekar Maniratna</td><td>Vice President</td><td>B.Tech (CSE)</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>2</td><td>Pratyusha Ansapure</td><td>Secretary</td><td>B.Tech (CSE)</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>3</td><td>Farooqui Atoofa</td><td>Jt. Secretary</td><td>TY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>4</td><td>Pranav Kalaskar</td><td>Treasurer</td><td>TY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>5</td><td>Omkar Angulwar</td><td>Technical event head</td><td>TY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>6</td><td>Harsh Battalwar</td><td>Cultural Event head</td><td>TY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>7</td><td>Aditya Kulkarni</td><td>Media Head</td><td>SY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>8</td><td>Ananya Deshmukh</td><td>Board Member</td><td>TY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>9</td><td>Khushi Khadalkar</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>10</td><td>Snehal Savankar</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>11</td><td>Saeed Qazi</td><td>Board Member</td><td>SY-CSE</td></tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-lg font-semibold text-indigo-600 print:text-base">
            <strong><br />The List of Events:</strong>
          </p>
          <div className="overflow-x-auto relative rounded-lg shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
            {/* Table styling - Matched to CSE Page Theme */}
            <table border="0" cellpadding="0" cellspacing="0" className="w-full text-sm text-left text-gray-700 print:text-xs">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name of Event</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Date of Conduction</th>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">No. of students</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>1.</td>
                  <td>Teachers’ Day Program</td>
                  <td>5<sup>th</sup> September 2023</td>
                  <td><a href="https://drive.google.com/file/d/1mTDnzYIA7YVqizEYqSDJANBbZSLjY95_/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>2.</td>
                  <td>Expert Talk</td>
                  <td>15<sup>th</sup> September 2023</td>
                  <td><a href="https://drive.google.com/file/d/17j-l8hwX8GddCLtFuTJg5MlHEjkre3LY/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>3.</td>
                  <td>Engineers’ Day Program</td>
                  <td>15<sup>th</sup> September 2023</td>
                  <td><a href="https://drive.google.com/file/d/10j876a2JVgAmh5FhCsPo9HxQ_x6MFmp7/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>4.</td>
                  <td>ZP Visit</td>
                  <td>20<sup>th</sup> February 2024</td>
                  <td><a href="https://drive.google.com/file/d/1mkGdYJxB6-HOT57XFJGiW_TuZl9by0yl/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>5.</td>
                  <td>Orphanage Visit</td>
                  <td>24<sup>th</sup> February 2024</td>
                  <td><a href="https://drive.google.com/file/d/1g89x4dY7A5Czg4yxx4B_mXDXNYCILlHA/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>6.</td>
                  <td>Poster Making Competition</td>
                  <td>11<sup>th</sup> March 2024</td>
                  <td><a href="https://drive.google.com/file/d/1WkhSdBOyNq1Q7Z0eMPnJ4WMAFJIhf9ma/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>7.</td>
                  <td>Craft Fusion</td>
                  <td>26<sup>th</sup> March 2024</td>
                  <td><a href="https://drive.google.com/file/d/1XvTfPBFh1Vh2mKNV3fiVSpVLNIBbYYxv/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4 print:text-lg">
            <br />
            Below are the names of the students selected for various board member positions in the Computer Users' Club:
          </h4>
          <div className="overflow-x-auto relative rounded-lg shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
            {/* Table styling - Matched to CSE Page Theme */}
            <table border="0" cellpadding="0" cellspacing="0" className="w-full text-sm text-left text-gray-700 print:text-xs">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Post</th>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Class</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>1</td><td>Govind Deshmukh</td><td>Vice President</td><td>B.Tech (CSE)</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>2</td><td>Sukhbir Singh Sohal</td><td>Secretary</td><td>TY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>3</td><td>Eshwari Kulkarni</td><td>Jt. Secretary</td><td>TY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>4</td><td>Ayush Pawar</td><td>Treasurer</td><td>B.Tech (CSE)</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>5</td><td>Shrikant Dumpalwar</td><td>Treasurer</td><td>TY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>6</td><td>Mamdi Shubham</td><td>Technical event head</td><td>B.Tech (CSE)</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>7</td><td>Maniratna Lohekar</td><td>Technical event head</td><td>TY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>8</td><td>Karan Jadhav</td><td>Cultural Event head</td><td>TY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>9</td><td>Pratyusha Anaspure</td><td>Cultural Event head</td><td>TY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>10</td><td>Pranav Kalaskar</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>11</td><td>Vedant Kahalekar</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>12</td><td>Kangulwar Surekha</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>13</td><td>Shruti Kubde</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>14</td><td>Avani Kulkarni</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>15</td><td>Farooqui Atoofa</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>16</td><td>Inamdar Atharva</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b"><td>17</td><td>Omkar Angulwar</td><td>Board Member</td><td>SY-CSE</td></tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b"><td>18</td><td>Aniket Bais</td><td>Board Member</td><td>SY-CSE</td></tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-lg font-semibold text-indigo-600 print:text-base">
            <strong><br />The List of Events:</strong>
          </p>
          <div className="overflow-x-auto relative rounded-lg shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
            {/* Table styling - Matched to CSE Page Theme */}
            <table border="0" cellpadding="0" cellspacing="0" className="w-full text-sm text-left text-gray-700 print:text-xs">
              <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name of Event</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Date of Conduction</th>
                  <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">No. Of students</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>1.</td>
                  <td>Photography Contest</td>
                  <td>15<sup>th</sup> September 2022</td>
                  <td><a href="https://drive.google.com/file/d/1Cc_Qu4B-p5AYtEd21COM1tGz1qIAvWUy/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>2.</td>
                  <td>Engineers’ Day Program</td>
                  <td>15<sup>th</sup> September 2022</td>
                  <td><a href="https://drive.google.com/file/d/17J_kd7exJ4Jnfjjf22RGEBbergmgx8m9/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>3.</td>
                  <td>Extempore Competition</td>
                  <td>15<sup>th</sup> October 2022</td>
                  <td><a href="https://drive.google.com/file/d/1bmjRPnbT7Aj6fOqfUw6KcB5gIlyfNVVv/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>4.</td>
                  <td>Poster Making Competition</td>
                  <td>7<sup>th</sup> November 2022</td>
                  <td><a href="https://drive.google.com/file/d/1OMIl6PWj5bZHPRgPoa6lOv9psLtseTlU/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-white border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>5.</td>
                  <td>Orphanage Visit</td>
                  <td>29<sup>th</sup> April 2023</td>
                  <td><a href="https://drive.google.com/file/d/1-oLCVHmIR_32ATgt40QU21mGrBtTvk6Z/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-indigo-50 transition-colors print:border-b">
                  <td>6.</td>
                  <td>The Dominators League</td>
                  <td>9<sup>th</sup> May 2023</td>
                  <td><a href="https://drive.google.com/file/d/1ErVt_YZZLXwhKDRx4HBpIGKLoYmlb0eA/view?usp=drive_link" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* No print button, as requested */}

      <style>{`
        /* Styles for Print Media */
        @media print {
          .container {
            width: 100% !important;
            max-width: none !important;
            margin-top: 0 !important;
            padding: 0.5rem !important;
          }
          body {
            font-size: 12pt;
            line-height: 1.4;
          }
          h1, h2, h3, h4 {
            page-break-after: avoid;
          }
          /* Ensure flex behaves like block for print for simpler layout */
          .flex {
            display: block;
          }
          /* Hide elements not needed in print */
          .lg\\:w-96, .print\\:hidden {
            display: none;
          }
          /* Ensure table rows break naturally and show labels */
          table, thead, tbody, th, td, tr {
            display: block;
          }
          tr {
            border: 1px solid #ccc;
            margin-bottom: 0.5rem;
          }
          td {
            border: none;
            position: relative;
            padding-left: 50% !important;
          }
          td:before {
            content: attr(data-label); /* Attempt to use data-label for headers */
            position: absolute;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
            font-weight: bold;
          }
          /* Custom data-labels for CUC tables as original HTML does not have them */
          /* Note: This is a generic approach; for perfect print, specific data-label attributes would be best. */
          /* Table 1: CUC 2024-25 Council */
          table:nth-of-type(1) tr td:nth-child(1):before { content: "Sr. No."; }
          table:nth-of-type(1) tr td:nth-child(2):before { content: "Name"; }
          table:nth-of-type(1) tr td:nth-child(3):before { content: "Post"; }
          table:nth-of-type(1) tr td:nth-child(4):before { content: "Class"; }
          /* Table 2: CUC 2024-25 Events */
          table:nth-of-type(2) tr td:nth-child(1):before { content: "Sr. No."; }
          table:nth-of-type(2) tr td:nth-child(2):before { content: "Name of Event"; }
          table:nth-of-type(2) tr td:nth-child(3):before { content: "Date of Conduction"; }
          table:nth-of-type(2) tr td:nth-child(4):before { content: "Link"; }
          /* Table 3: CUC Previous Council */
          table:nth-of-type(3) tr td:nth-child(1):before { content: "Sr. No."; }
          table:nth-of-type(3) tr td:nth-child(2):before { content: "Name"; }
          table:nth-of-type(3) tr td:nth-child(3):before { content: "Post"; }
          table:nth-of-type(3) tr td:nth-child(4):before { content: "Class"; }
          /* Table 4: CUC Previous Events */
          table:nth-of-type(4) tr td:nth-child(1):before { content: "Sr. No."; }
          table:nth-of-type(4) tr td:nth-child(2):before { content: "Name of Event"; }
          table:nth-of-type(4) tr td:nth-child(3):before { content: "Date of Conduction"; }
          table:nth-of-type(4) tr td:nth-child(4):before { content: "No. of students"; }
          /* Table 5: CUC Older Council */
          table:nth-of-type(5) tr td:nth-child(1):before { content: "Sr. No."; }
          table:nth-of-type(5) tr td:nth-child(2):before { content: "Name"; }
          table:nth-of-type(5) tr td:nth-child(3):before { content: "Post"; }
          table:nth-of-type(5) tr td:nth-child(4):before { content: "Class"; }
          /* Table 6: CUC Older Events */
          table:nth-of-type(6) tr td:nth-child(1):before { content: "Sr. No."; }
          table:nth-of-type(6) tr td:nth-child(2):before { content: "Name of Event"; }
          table:nth-of-type(6) tr td:nth-child(3):before { content: "Date of Conduction"; }
          table:nth-of-type(6) tr td:nth-child(4):before { content: "No. Of students"; }
        }
      `}</style>
    </div>
  );
};

export default CUCPage;