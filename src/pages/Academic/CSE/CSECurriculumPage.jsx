// src/pages/Academics/ComputerScience/CSECurriculumPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cseDepartmentTabs, cseCurriculumData } from './cseConstants';

// Helper for consistent table header styling
const TableHeader = ({ children }) => (
  <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
    <tr>{children}</tr>
  </thead>
);

// Helper for consistent table row styling
const TableRow = ({ children, index, className = '' }) => (
  <tr className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b ${className}`}>
    {children}
  </tr>
);

// Quick Navigation Component (replicated from research page)
const QuickNavigation = ({ sections, activeSection, onSectionClick }) => (
  <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm mb-6 print:hidden rounded-lg">
    <div className="container mx-auto px-4 py-3">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">Jump to Section:</h3>
      <div className="flex flex-wrap gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              activeSection === section.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// Collapsible Section Component (replicated from research page)
const CollapsibleSection = ({ id, title, children, defaultOpen = false }) => { // Default to false for curriculum tabs
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <section id={id} className="mb-8 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden print:shadow-none print:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors print:p-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 flex items-center print:text-xl">
          {title}
        </h2>
        <svg
          className={`w-6 h-6 text-indigo-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-6 pb-6 print:px-4 print:pb-4">
          {children}
        </div>
      </div>
    </section>
  );
};

const CSECurriculumPage = () => {
  const location = useLocation();

  // Define navigation sections for the Curriculum page
  const navigationSections = [
    { id: 'syllabus-docs', label: 'Syllabus Documents' },
    // Add more sections here if the curriculum page expands with other content
  ];

  const handleSectionClick = (sectionId) => {
    // This logic is for smooth scrolling to sections when using Quick Navigation
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header/navbar if any
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl  print:mt-4 print:max-w-none">
      {/* Hero Section - Matched Research Page Structure */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Syllabus/Curriculum Icon SVG (e.g., a book or document) - No Emojis */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-4 7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1H9zm0-4c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1H9z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Computer Science & Engineering</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Explore the academic curriculum and syllabus for the CSE Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs - Matched Research Page Structure */}
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

      {/* Quick Navigation - Added for consistency */}
      {/* <QuickNavigation
        sections={navigationSections}
        activeSection={location.hash.replace('#', '') || 'syllabus-docs'} // Determine active section based on URL hash
        onSectionClick={handleSectionClick}
      /> */}

      {/* Main Content Area - Matched Research Page Structure */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        
        {/* Syllabus Section (Collapsible) - Now closed by default */}
        <CollapsibleSection
          id="syllabus-docs"
          title="Department Syllabus Documents"
          defaultOpen={false} // Start closed as requested
        >
          <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
               
                <tbody>
                  {cseCurriculumData.syllabus.map((yearSection, yearIndex) => (
                    <React.Fragment key={yearIndex}>
                      <tr> {/* Added tr for TableHeader for semantic HTML */}
                    <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3 text-center">Sr.No</th>
                    <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3 text-left">Heading</th>
                    <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3 text-center">Download</th>
                  </tr>
                      <tr className="bg-indigo-100 text-indigo-800 font-semibold text-center print:bg-indigo-100">
                        <td colSpan="3" className="py-3 px-4 md:px-6 print:py-2 print:px-3">
                          {yearSection.yearSection}
                        </td>
                      </tr>
                      {yearSection.files.map((file, fileIndex) => (
                        <TableRow key={`${yearIndex}-${fileIndex}`} index={fileIndex}>
                          <td className="py-4 px-4 md:px-6 text-center font-medium print:py-2 print:px-3">{file.srNo}</td>
                          <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">{file.heading}</td>
                          <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                            <a href={file.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                              <i className="fas fa-download text-lg"></i> {/* Reverted to icon */}
                            </a>
                          </td>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
          </div>
        </CollapsibleSection>

      </div> {/* End Main Content Area */}
    </div>
  );
};

export default CSECurriculumPage;