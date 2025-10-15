// src/pages/Academics/InformationTechnology/ITCurriculumPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itCurriculumData } from './itConstants';

const ITCurriculumPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/information-technology";
  const [openSection, setOpenSection] = useState('syllabus'); // Default to 'syllabus' open

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  // Reusable function for rendering download tables (matching ENTC style)
  const renderDownloadTable = (items, keyPrefix) => (
    <div className="overflow-x-auto relative rounded-lg border border-gray-200">
      <table className="w-full text-sm text-left text-gray-700 print:text-xs">
        <thead className="text-xs text-white uppercase bg-indigo-600 print:bg-gray-800">
          <tr>
            <th scope="col" className="py-3 px-4 rounded-tl-lg w-16 text-center print:px-2">Sr.No</th>
            <th scope="col" className="py-3 px-4 print:px-2">Heading</th>
            <th scope="col" className="py-3 px-4 rounded-tr-lg text-center w-32 print:px-2">Download</th>
          </tr>
        </thead>  
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr key={`${keyPrefix}-${index}`} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150 print:border-b`}>
                <td className="py-3 px-4 text-center font-medium print:py-2 print:px-2">{item.srNo}</td>
                <td className="py-3 px-4 font-medium text-gray-900 print:py-2 print:px-2">{item.heading}</td>
                <td className="py-3 px-4 text-center print:py-2 print:px-2">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors print:text-gray-700 print:no-underline">
                    <svg className="w-5 h-5 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    <span className="ml-1 print:hidden">PDF</span>
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-4 px-4 text-center text-gray-500 italic">No items available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  // Helper component for creating a collapsible section (Accordion)
  const AccordionSection = ({ id, title, iconPath, children, defaultOpen = true }) => {
    const isOpen = openSection === id;
    return (
      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-4 print:shadow-none print:border">
        <button
          className={`flex justify-between items-center w-full p-4 focus:outline-none transition-colors duration-200 ${isOpen ? 'bg-indigo-50' : 'bg-white hover:bg-gray-50'} print:bg-white`}
          onClick={() => toggleSection(id)}
        >
          <div className="flex items-center">
            <svg className={`w-6 h-6 mr-3 ${isOpen ? 'text-indigo-600' : 'text-gray-500'} print:hidden`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path>
            </svg>
            <h3 className={`text-xl font-semibold text-left print:text-lg ${isOpen ? 'text-indigo-800' : 'text-gray-700'}`}>
              {title}
            </h3>
          </div>
          
        </button>
        {isOpen && (
          <div className="p-4 border-t border-gray-200 bg-white print:p-0 print:border-none animate-fadeIn">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Curriculum & Downloads</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Access academic syllabi and other departmental documents.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6 print:hidden">
          <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <Link to={currentDeptPath} className="hover:text-indigo-600">IT</Link> / <span className="text-indigo-600 font-medium">Curriculum</span>
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Curriculum Documents
        </h2>

        <div className="mt-6">
            {/* Syllabus Section */}
            <AccordionSection id="syllabus" title="Syllabus" iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                {itCurriculumData.syllabus.map((category, catIndex) => (
                  <div key={catIndex} className="mb-6 last:mb-0">
                    <h4 className="text-lg font-bold text-indigo-700 mb-3 border-b border-indigo-100 pb-1 inline-block print:text-base">
                      {category.category}
                    </h4>
                    {renderDownloadTable(category.links, `syllabus-cat-${catIndex}`)}
                  </div>
                ))}
            </AccordionSection>

            {/* Assignments Section (Empty in source HTML - kept for structure) */}
            <AccordionSection id="assignments" title="Assignments" iconPath="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" defaultOpen={false}>
                {renderDownloadTable(itCurriculumData.assignments, 'assignments')}
            </AccordionSection>

            {/* Resources Section (Empty in source HTML - kept for structure) */}
            <AccordionSection id="resources" title="Resources" iconPath="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" defaultOpen={false}>
                {renderDownloadTable(itCurriculumData.resources, 'resources')}
            </AccordionSection>

            {/* Other Downloads Section (e.g., Timetables) */}
            <AccordionSection id="other-downloads" title="Other Downloads" iconPath="M12 6V4m0 2a2 2 0 100 4m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 0a2 2 0 100 4m0-4h.01M7 7h.01M17 7h.01M7 17h.01M17 17h.01M17 12h.01M7 12h.01" defaultOpen={true}>
                {renderDownloadTable(itCurriculumData.otherDownloads, 'other-downloads')}
            </AccordionSection>
        </div>

      </div>
    </div>
  );
};

export default ITCurriculumPage;