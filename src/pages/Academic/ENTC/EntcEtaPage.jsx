// src/pages/Academic/Entc/ETAPage.jsx
import React, { useState } from 'react'; // Import useState
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
    const [openSection, setOpenSection] = useState('about'); // Default to 'about' open

    const toggleSection = (sectionId) => {
        setOpenSection(openSection === sectionId ? null : sectionId);
    };

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

    // Reusable function for rendering Council tables (styled like the download table)
    const renderCouncilTable = (members, keyPrefix) => (
        <div className="overflow-x-auto relative rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                <thead className="text-xs text-white uppercase bg-teal-600 print:bg-gray-800"> {/* Changed to teal-600 for contrast/variety */}
                    <tr>
                        <th scope="col" className="py-3 px-4 rounded-tl-lg md:px-6 print:py-2 print:px-3">Sr. No.</th>
                        <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name</th>
                        <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Class</th>
                        <th scope="col" className="py-3 px-4 rounded-tr-lg md:px-6 print:py-2 print:px-3">Position</th>
                    </tr>
                </thead>
                <tbody>
                    {members.length > 0 ? (
                        members.map((member, index) => (
                            <tr key={`${keyPrefix}-${index}`} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-teal-50 transition-colors duration-150 print:border-b`}>
                                <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">{member.srNo}</td>
                                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.name}</td>
                                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.class}</td>
                                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.position}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-4 px-4 text-center text-gray-500 italic">No council members listed for this year.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );

    // Reusable function for rendering Activity tables (styled like the download table)
    const renderActivityTable = (activities, title, keyPrefix) => (
        <div className="overflow-x-auto relative rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                <thead className="text-xs text-white uppercase bg-indigo-600 print:bg-gray-800"> {/* Using indigo for activities table header */}
                    <tr>
                        <th scope="col" className="py-3 px-4 rounded-tl-lg md:px-6 print:py-2 print:px-3">Sr. No.</th>
                        <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Activity</th>
                        <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Date</th>
                        <th scope="col" className="py-3 px-4 rounded-tr-lg md:px-6 print:py-2 print:px-3">Participating Class</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.length > 0 ? (
                        activities.map((activity, index) => (
                            <tr key={`${keyPrefix}-${index}`} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150 print:border-b`}>
                                <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">{activity.srNo || index + 1}</td>
                                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{activity.activity}</td>
                                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{activity.date}</td>
                                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{activity.participatingClass}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-4 px-4 text-center text-gray-500 italic">No activities listed for this period.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );

    // Helper component for creating a collapsible section
    const CollapsibleSection = ({ id, title, children }) => {
        const isOpen = openSection === id;
        const buttonId = `img${id}`;

        return (
            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <button
                    className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
                    onClick={() => toggleSection(id)}
                >
                    <h3 className="text-xl font-semibold text-blue-700 text-left print:text-lg">
                        {title}
                    </h3>
                    <img
                        id={buttonId}
                        src={isOpen ? '/images/details_close.png' : '/images/details_open.png'}
                        alt="Toggle"
                        className="w-6 h-6"
                    />
                </button>
                {isOpen && (
                    <div className="p-4 border-t border-gray-200 bg-white print:p-0 print:border-none">
                        {children}
                    </div>
                )}
            </div>
        );
    };


    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
            {/* Hero Section - Matched to EntcCurriculumPage */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">{etaPageHero.title}</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
                    {etaHeroTagline}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
            </div>

            {/* Breadcrumb / Location Indicator (Kept as it adds useful context) */}
            <div className="text-sm text-gray-600 mb-6 print:hidden">
                <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <Link to="/academics/electronincs-telecommunication-engineering" className="hover:text-indigo-600">E&TC</Link> / <span className="text-indigo-600 font-medium">ETA</span>
            </div>

            {/* Department Sub-Navigation Tabs - Matched to EntcCurriculumPage */}
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

            {/* Main Content Area - Matched to EntcCurriculumPage */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
                <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
                    <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4" />
                    </svg>
                    {etaPageMainHeading}
                </h2>

                <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">

                    {/* About ETA Section (Collapsible) */}
                    <CollapsibleSection id="about" title="About Electronics Technocrats Association (ETA)">
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
                    </CollapsibleSection>

                    {/* ETA Council 2024-25 (Collapsible) */}
                    <CollapsibleSection id="council-24-25" title="ETA Council (2024-25)">
                        {renderCouncilTable(entcEtaCouncil2024_25, 'council-24-25')}
                    </CollapsibleSection>

                    {/* ETA Council 2023-24 (Collapsible) */}
                    <CollapsibleSection id="council-23-24" title="ETA Council (2023-24)">
                        {renderCouncilTable(entcEtaCouncil2023_24, 'council-23-24')}
                    </CollapsibleSection>

                    {/* Activities 2023-24 Images (Collapsible) */}
                    <CollapsibleSection id="activities-23-24-img" title="ETA Activities Glimpses (2023-24)">
                        {renderImageGallery(entcEtaActivities2023_24_Images)}
                    </CollapsibleSection>

                    {/* ETA Activities 2019-20 (1st Sem) (Collapsible) */}
                    <CollapsibleSection id="activities-19-20-sem1" title="ETA Activities (2019-20) - 1st Semester">
                        {renderActivityTable(entcEtaActivities2019_20_1stSem, 'Activities 1st Sem', 'activities-19-20-sem1')}
                    </CollapsibleSection>

                    {/* ETA Activities 2019-20 (2nd Sem) (Collapsible) */}
                    <CollapsibleSection id="activities-19-20-sem2" title="ETA Activities (2019-20) - 2nd Semester">
                        {renderActivityTable(entcEtaActivities2019_20_2ndSem, 'Activities 2nd Sem', 'activities-19-20-sem2')}
                    </CollapsibleSection>

                    {/* ETA Activities 2019-20 Images (Collapsible) */}
                    <CollapsibleSection id="activities-19-20-img" title="Glimpses of ETA Activities (2019-20)">
                        {renderImageGallery(entcEtaActivities2019_20_Images)}
                    </CollapsibleSection>

                    {/* Webinar Images (Collapsible) */}
                    <CollapsibleSection id="webinars" title="Webinars and Workshops">
                        {renderImageGallery(entcWebinarImages)}
                    </CollapsibleSection>
                </div>

                {/* Concluding Text (Outside of collapsibles) */}
                <div className="prose prose-lg max-w-none text-gray-700 mt-10 border-t border-gray-200 pt-6 print:text-sm">
                    <p className="mb-4">
                        The **Electronics Technocrats Association (ETA)** is dedicated to fostering an environment of technical excellence,
                        leadership, and community engagement among students. Through its diverse activities, ETA aims to empower students
                        with practical skills, collaborative experience, and a strong sense of professional and social responsibility.
                    </p>
                    <p className="font-semibold text-indigo-700">
                        Join ETA to explore your potential, connect with peers, and contribute to the vibrant academic life of the E&TC department.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ETAPage;