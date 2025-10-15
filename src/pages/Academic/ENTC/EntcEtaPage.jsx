// src/pages/Academic/Entc/ETAPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  entcDepartmentTabs,
  etaPageHero,       // Import ETA specific hero content (for title)
  etaHeroTagline,    // NEW: Import ETA specific hero tagline
  etaPageMainHeading, // Import ETA specific main heading
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
      {/* Hero Section - Matching DEPT Profile page header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">{etaPageHero.title}</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          {etaHeroTagline} {/* Using the specific tagline for the hero subtitle */}
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Breadcrumb / Location Indicator */}
      <div className="text-sm text-gray-600 mb-6 print:text-xs print:text-black">
        <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <Link to="/academics/electronincs-telecommunication-engineering" className="hover:text-indigo-600">E&TC</Link> / <span className="text-indigo-600 font-medium">ETA</span>
      </div>

      {/* Department Sub-Navigation Tabs - Exactly as in EntcDepartmentalCommitteesPage */}
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

      {/* Main Content Area - Layout matched with EntcDepartmentalCommitteesPage */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* Icon for association/community - same as new hero icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4" />
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
              <thead className="text-xs text-white uppercase bg-indigo-600 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Class</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Position</th>
                </tr>
              </thead>
              <tbody>
                {entcEtaCouncil2024_25.map((member, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
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
              <thead className="text-xs text-white uppercase bg-indigo-600 print:bg-gray-800">
                <tr>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Sr. No.</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Class</th>
                  <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Position</th>
                </tr>
              </thead>
              <tbody>
                {entcEtaCouncil2023_24.map((member, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
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

        {/* Concluding Text */}
        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <p className="mb-4">
            The Electronics Technocrats Association (ETA) is dedicated to fostering an environment of technical excellence,
            leadership, and community engagement among students. Through its diverse activities, ETA aims to empower students
            with practical skills, collaborative experience, and a strong sense of professional and social responsibility.
          </p>
          <p>
            Join ETA to explore your potential, connect with peers, and contribute to the vibrant academic life of the E&TC department.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ETAPage;