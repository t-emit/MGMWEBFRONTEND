// src/pages/Academics/InformationTechnology/ITResearchPublicationPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itResearchData } from './itConstants'; 

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

// Quick Navigation Component
const QuickNavigation = ({ sections, activeSection, onSectionClick }) => (
  <div className="sticky top-24 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm mb-6 print:hidden">
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

// Collapsible Section Component
const CollapsibleSection = ({ id, title, children, icon, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <section id={id} className="mb-8 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden print:shadow-none print:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors print:p-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 flex items-center print:text-xl">
          {icon && <span className="mr-3">{icon}</span>}
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

const ITResearchPublicationPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Define navigation sections based on available data
  const navigationSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'international-journals', label: 'International Journals' },
    { id: 'national-journals', label: 'National Journals' },
    { id: 'international-conferences', label: 'International Conferences' },
    { id: 'national-conferences', label: 'National Conferences' },
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Render author papers section
  const renderAuthorPapers = (data) => {
    if (!data || data.length === 0) {
      return <p className="text-gray-600">No publications in this category are available at the moment.</p>;
    }
    return (
      <div className="space-y-6">
        {data.map((authorData, authorIndex) => (
          <div key={authorIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="text-xl font-bold text-purple-700 mb-3 pb-2 border-b border-purple-200">
              {authorData.authorName}
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 print:text-sm">
              <ol className="list-decimal list-inside space-y-2 pl-4">
                {authorData.papers.map((paper, paperIndex) => (
                  <li key={paperIndex} className="pl-2 pb-2 border-b border-gray-200 last:border-b-0" dangerouslySetInnerHTML={{ __html: paper }}></li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Information Technology</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Research & Publication activities of the IT Department.
        </p>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2">
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

      {/* Quick Navigation */}
      <QuickNavigation 
        sections={navigationSections} 
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        
        {/* Overview Section */}
        <CollapsibleSection 
          id="overview"
          title="Research & Publication Overview"
          icon="📊"
          defaultOpen={true}
        >
          <div className="prose prose-lg max-w-none text-gray-700 mb-6 print:text-sm">
            <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: itResearchData.introduction }}></p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {itResearchData.summary.map((item, index) => (
                <li key={index} className="pl-2"><strong>{item.label}:&nbsp;{item.value}</strong></li>
              ))}
            </ul>
            <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: itResearchData.researchGrantsIntro }}></p>
          </div>
        </CollapsibleSection>

        {/* Papers Published in International Journals (Per Author) */}
        <CollapsibleSection 
          id="international-journals"
          title="Papers Published in International Journals"
          icon="🌍"
          defaultOpen={true}
        >
          {renderAuthorPapers(itResearchData.internationalJournalsByAuthor)}
        </CollapsibleSection>

        {/* Papers Published in National Journals (Per Author) */}
        <CollapsibleSection 
          id="national-journals"
          title="Papers Published in National Journals"
          icon="🇮🇳"
          defaultOpen={false}
        >
          {renderAuthorPapers(itResearchData.nationalJournalsByAuthor)}
        </CollapsibleSection>

        {/* Paper Presented in International Conferences (Per Author) */}
        <CollapsibleSection 
          id="international-conferences"
          title="Papers Presented in International Conferences"
          icon="🎯"
          defaultOpen={true}
        >
          {renderAuthorPapers(itResearchData.internationalConferencesByAuthor)}
        </CollapsibleSection>

        {/* Paper Presented in National Conferences (Per Author) */}
        <CollapsibleSection 
          id="national-conferences"
          title="Papers Presented in National Conferences"
          icon="🏛️"
          defaultOpen={true}
        >
          {renderAuthorPapers(itResearchData.nationalConferencesByAuthor)}
        </CollapsibleSection>

      </div> {/* End Main Content Area */}
    </div>
  );
};

export default ITResearchPublicationPage;