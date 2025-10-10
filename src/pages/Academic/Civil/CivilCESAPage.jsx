// src/pages/Academic/Civil/CivilCESAPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  civilDepartmentTabs,
  cesaReports,
  cesaAbout,
  cesaEvents2022_23Overview,
  cesaDetailedEvents,
} from './civilConstants'; // Import CESA constants

const CivilCESAPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/civil-engineering";

  // State to manage accordion sections
  const [openSection, setOpenSection] = useState('cesa-reports'); // Default open: CESA Reports

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for CESA theme (e.g., a group of people, or a globe for association) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S13.66 5 12 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zM4 15c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.21 0 4-1.79 4-4s-1.79-4-4-4zm8 0c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.21 0 4-1.79 4-4s-1.79-4-4-4zm8 0c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">CESA</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Civil Engineering Students' Association - fostering growth beyond academics.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {civilDepartmentTabs.map((tab) => {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2m4-12l3 3m0 0l3-3m-3 3V2m-2 16h8"></path>
          </svg>
          Civil Engineering Students' Association (CESA)
        </h2>

        {/* CESA Reports Accordion Section */}
        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={() => toggleSection('cesa-reports')}
            >
              <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                CESA Reports
              </h3>
              <svg
                className={`w-6 h-6 text-indigo-500 transition-transform duration-200 ${
                  openSection === 'cesa-reports' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openSection === 'cesa-reports' && (
              <div className="p-4 border-t border-gray-200 bg-white prose prose-lg max-w-none text-gray-700 print:text-sm">
                <ul className="list-disc pl-8 space-y-2">
                  {cesaReports.map((report, index) => (
                    <li key={index}>
                      <a href={report.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-bold print:text-gray-800">
                        CESA REPORT {report.year}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Old Archive Data Accordion Section */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={() => toggleSection('old-archive')}
            >
              <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                Old Archive Data
              </h3>
              <svg
                className={`w-6 h-6 text-indigo-500 transition-transform duration-200 ${
                  openSection === 'old-archive' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openSection === 'old-archive' && (
              <div className="p-4 border-t border-gray-200 bg-white prose prose-lg max-w-none text-gray-700 print:text-sm">
                <h3 className="text-2xl font-bold text-indigo-800 text-center mb-4 print:text-xl">{cesaAbout.title}</h3>
                <p className="text-center italic mb-4 print:text-sm">{cesaAbout.subtitle}</p>

                <h4 className="text-xl font-bold text-blue-700 mb-2 print:text-lg">About CESA</h4>
                <p className="mb-4">{cesaAbout.aboutText}</p>

                <h4 className="text-xl font-bold text-blue-700 mb-2 print:text-lg">{cesaAbout.vision.title}</h4>
                <p className="mb-4">{cesaAbout.vision.text}</p>

                <h4 className="text-xl font-bold text-blue-700 mb-2 print:text-lg">{cesaAbout.mission.title}</h4>
                <ul className="list-disc pl-8 space-y-1 mb-4">
                  {cesaAbout.mission.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold text-blue-700 mb-2 print:text-lg">{cesaAbout.officeBearers.title}</h4>
                <ul className="list-disc pl-8 space-y-1 mb-4">
                  <li><strong>CESA Faculty Coordinator:</strong> {cesaAbout.officeBearers.facultyCoordinator}</li>
                  <li><strong>CESA Student Co-ordinator:</strong> {cesaAbout.officeBearers.studentCoordinator}</li>
                  <li><strong>CESA Vice President:</strong> {cesaAbout.officeBearers.vicePresident}</li>
                </ul>

                <h4 className="text-xl font-bold text-blue-700 mb-2 print:text-lg">Student Council ({cesaAbout.studentCouncil.year})</h4>
                <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 mb-4 print:shadow-none print:border print:rounded-none">
                  <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                    <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
                      <tr>
                        <th scope="col" className="py-3 px-3 print:py-2 print:px-2">Year</th>
                        <th scope="col" className="py-3 px-3 print:py-2 print:px-2">Student Council</th>
                        <th scope="col" className="py-3 px-3 print:py-2 print:px-2">Responsibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cesaAbout.studentCouncil.members.map((member, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                          {index === 0 && <td rowSpan={cesaAbout.studentCouncil.members.length} className="py-3 px-3 font-bold align-top print:py-2 print:px-2">{cesaAbout.studentCouncil.year}</td>}
                          <td className="py-3 px-3 print:py-2 print:px-2">{member.name}</td>
                          <td className="py-3 px-3 print:py-2 print:px-2">{member.responsibility}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {cesaAbout.image1 && (
                  <div className="flex justify-center my-6 print:my-4">
                    <img src={cesaAbout.image1.src} alt={cesaAbout.image1.alt} className="max-w-full h-auto rounded-md shadow-md border border-gray-200" style={{ maxWidth: '406px' }} />
                  </div>
                )}

                <h4 className="text-xl font-bold text-blue-700 mt-8 mb-4 print:text-lg">{cesaEvents2022_23Overview.title}</h4>
                <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 mb-8 print:shadow-none print:border print:rounded-none">
                  <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                    <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
                      <tr>
                        <th scope="col" className="py-3 px-3 print:py-2 print:px-2">Name of Event</th>
                        <th scope="col" className="py-3 px-3 print:py-2 print:px-2">No. of participants</th>
                        <th scope="col" className="py-3 px-3 print:py-2 print:px-2">Date</th>
                        <th scope="col" className="py-3 px-3 print:py-2 print:px-2">Name of Coordinator</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cesaEvents2022_23Overview.events.map((event, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                          <td className="py-3 px-3 print:py-2 print:px-2">{event.name}</td>
                          <td className="py-3 px-3 text-center print:py-2 print:px-2">{event.participants}</td>
                          <td className="py-3 px-3 text-center print:py-2 print:px-2">{event.date}</td>
                          <td className="py-3 px-3 print:py-2 print:px-2">{event.coordinator}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />

                {/* Detailed Events Section */}
                <h4 className="text-2xl font-bold text-indigo-800 mb-4 print:text-xl">Academic year 2022-23 Detailed Events</h4>
                <div className="space-y-8">
                  {cesaDetailedEvents.map((event) => (
                    <div key={event.id} className="border-b border-gray-200 pb-6 last:border-b-0 print:pb-3">
                      <h5 className="text-xl font-bold text-blue-700 mb-3 print:text-lg">{event.title}</h5>
                      {event.description && <p className="mb-4">{event.description}</p>}

                      {event.images && event.images.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
                          {event.images.map((img, imgIndex) => (
                            <div key={imgIndex} className="flex flex-col items-center">
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="max-w-full h-auto rounded-md object-cover border border-gray-200"
                                style={{ maxHeight: '300px' }} // Adjusted for better compactness
                                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-event.jpg'; }} // Fallback image
                              />
                              {img.caption && <p className="text-sm text-gray-500 mt-1 text-center print:text-xxs">{img.caption}</p>}
                            </div>
                          ))}
                        </div>
                      )}

                      {event.results && (
                        <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 mt-4 print:shadow-none print:border print:rounded-none">
                          <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                            <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
                              <tr>
                                <th colSpan={event.results.winnerTeam || event.results.winners ? 3 : 1} className="py-3 px-3 text-center print:py-2 print:px-2">
                                  {event.results.title}
                                </th>
                              </tr>
                              {event.results.winnerTeam && (
                                <tr>
                                  <th scope="col" className="py-3 px-3 print:py-2 print:px-2">Sr. No.</th>
                                  <th scope="col" className="py-3 px-3 print:py-2 print:px-2">Participant names</th>
                                  <th scope="col" className="py-3 px-3 print:py-2 print:px-2">Prize</th>
                                </tr>
                              )}
                            </thead>
                            <tbody>
                              {event.results.winnerTeam && (
                                <>
                                  {event.results.winnerTeam.members.map((member, i) => (
                                    <tr key={`winner-${i}`} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                                      <td className="py-2 px-3 print:py-1 print:px-2">{i + 1}</td>
                                      <td className="py-2 px-3 print:py-1 print:px-2">{member}</td>
                                      {i === 0 && <td rowSpan={event.results.winnerTeam.members.length} className="py-2 px-3 align-top font-semibold text-center print:py-1 print:px-2">{event.results.winnerTeam.label}</td>}
                                    </tr>
                                  ))}
                                  {event.results.runnerUpTeam && (
                                    <>
                                      {event.results.runnerUpTeam.members.map((member, i) => (
                                        <tr key={`runnerup-${i}`} className={`${(event.results.winnerTeam.members.length + i) % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                                          <td className="py-2 px-3 print:py-1 print:px-2">{i + 1}</td>
                                          <td className="py-2 px-3 print:py-1 print:px-2">{member}</td>
                                          {i === 0 && <td rowSpan={event.results.runnerUpTeam.members.length} className="py-2 px-3 align-top font-semibold text-center print:py-1 print:px-2">{event.results.runnerUpTeam.label}</td>}
                                        </tr>
                                      ))}
                                    </>
                                  )}
                                </>
                              )}
                              {event.results.winners && ( // For simpler results like Carrom, Chess, Essay, Model Making
                                <>
                                  {event.results.winners.map((winner, i) => (
                                    <tr key={`simple-winner-${i}`} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                                      <td className="py-2 px-3 print:py-1 print:px-2">{i + 1}</td>
                                      <td className="py-2 px-3 print:py-1 print:px-2">{winner.name}</td>
                                      <td className="py-2 px-3 print:py-1 print:px-2">{winner.prize}</td>
                                    </tr>
                                  ))}
                                </>
                              )}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilCESAPage;