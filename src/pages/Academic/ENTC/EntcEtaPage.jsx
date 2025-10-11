// src/pages/Academic/Entc/ETAPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  entcDepartmentTabs,
  etaPageHero,       // NEW: Import ETA specific hero content
  etaPageMainHeading, // NEW: Import ETA specific main heading
  entcEtaAbout,
  entcEtaCouncil2024_25,
  entcEtaCouncil2023_24,
  entcEtaActivities2023_24_Images,
  entcEtaActivities2019_20_1stSem,
  entcEtaActivities2019_20_2ndSem,
  entcEtaActivities2019_20_Images,
  entcWebinarImages,
} from './entcConstants'; // Import ETA-specific data from constants

const ETAPage = () => {
  const location = useLocation();

  const renderImageGallery = (images) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-48 object-cover object-center transform hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {img.caption && (
            <p className="p-3 text-sm text-gray-600 bg-gray-50 border-t border-gray-100">
              {img.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  const renderActivityTable = (activities, title) => (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 print:text-xl">{title}</h3>
      <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
        <table className="w-full text-sm text-left text-gray-700 print:text-xs">
          <thead className="text-xs text-white uppercase bg-teal-600 print:bg-gray-800">
            <tr>
              <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Sr. No.</th>
              <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Activity</th>
              <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Date</th>
              <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Participating Class</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-teal-50 transition-colors print:border-b`}>
                <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">{activity.srNo || index + 1}</td>
                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{activity.activity}</td>
                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{activity.date}</td>
                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{activity.participatingClass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section - Matched with EntcVisionMissionPage but with a new color scheme */}
      <div className="bg-gradient-to-r from-teal-700 to-green-700 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-teal-700 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">{etaPageHero.title}</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          {etaPageHero.subtitle}
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-green-300 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs - Exactly as in EntcVisionMissionPage */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {entcDepartmentTabs.map((tab) => {
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

      {/* Main Content Area - Layout matched with EntcVisionMissionPage */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-teal-800 border-b-2 border-teal-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-teal-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-5m-5 0H7m-1 0H4a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4l2-2h4a2 2 0 012 2v11a2 2 0 01-2 2h-4zm-1-9a1 1 0 100-2 1 1 0 000 2zm1-7a1 1 0 100-2 1 1 0 000 2z"></path>
          </svg>
          {etaPageMainHeading}
        </h2>

        {/* About ETA Section */}
        <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 print:text-xl">About</h3>
            <p className="text-gray-700 leading-relaxed mb-4 print:text-sm">
              {entcEtaAbout.description}
            </p>
            <h4 className="text-xl font-semibold text-gray-800 mb-2 print:text-lg">{entcEtaAbout.objectivesTitle}</h4>
            <p className="text-gray-600 mb-3 print:text-sm">{entcEtaAbout.objectivesSubtitle}</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 print:text-sm">
              {entcEtaAbout.objectives.map((obj, index) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
        </section>

        {/* ETA Council 2024-25 */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 print:text-xl">ETA Council (2024-25)</h3>
          <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
              <thead className="text-xs text-white uppercase bg-teal-600 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Class</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Position</th>
                </tr>
              </thead>
              <tbody>
                {entcEtaCouncil2024_25.map((member, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-teal-50 transition-colors print:border-b`}>
                    <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">{member.srNo}</td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.name}</td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.class}</td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ETA Council 2023-24 */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 print:text-xl">ETA Council (2023-24)</h3>
          <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
              <thead className="text-xs text-white uppercase bg-teal-600 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Class</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Position</th>
                </tr>
              </thead>
              <tbody>
                {entcEtaCouncil2023_24.map((member, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-teal-50 transition-colors print:border-b`}>
                    <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">{member.srNo}</td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.name}</td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.class}</td>
                    <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ETA Activities 2023-24 Images */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 print:text-xl">ETA Activities (2023-24)</h3>
          {renderImageGallery(entcEtaActivities2023_24_Images)}
        </section>

        {/* ETA Activities 2019-20 (1st Sem) */}
        {renderActivityTable(entcEtaActivities2019_20_1stSem, 'ETA Activities (2019-20) - 1st Semester')}

        {/* ETA Activities 2019-20 (2nd Sem) */}
        {renderActivityTable(entcEtaActivities2019_20_2ndSem, 'ETA Activities (2019-20) - 2nd Semester')}

        {/* ETA Activities 2019-20 Images */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 print:text-xl">Glimpses of ETA Activities (2019-20)</h3>
          {renderImageGallery(entcEtaActivities2019_20_Images)}
        </section>

        {/* Webinar Images */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 print:text-xl">Webinars</h3>
          {renderImageGallery(entcWebinarImages)}
        </section>
      </div>
    </div>
  );
};

export default ETAPage;