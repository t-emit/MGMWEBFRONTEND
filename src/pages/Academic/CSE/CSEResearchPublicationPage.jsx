// src/pages/Academics/ComputerScience/CSEResearchPublicationPage.jsx
import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cseDepartmentTabs, cseResearchData } from './cseConstants'; 

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

const CSEResearchPublicationPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Define navigation sections
  const navigationSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'research-guides', label: 'Research Guides' },
    { id: 'research-grants', label: 'Research Grants' },
    { id: 'journal-pubs', label: 'Journal Publications' },
    { id: 'conference-pubs', label: 'Conference Publications' },
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

  // Special rendering for Research Grants due to rowspan
  const renderResearchGrantsTable = (data) => {
    if (!data || data.length === 0) return <p className="text-gray-600">No data available.</p>;

    return (
      <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
        <table className="w-full text-sm text-left text-gray-700 print:text-xs">
          <TableHeader>
            <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Sr. No.</th>
            <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Project Title/ International Conference</th>
            <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Funding Agency</th>
            <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Grant Received (in Rs.)</th>
            <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Investigators</th>
            <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Year of Sanction</th>
            <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Duration (in years)</th>
          </TableHeader>
          <tbody>
            {data.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <TableRow index={rowIndex}>
                  <td rowSpan={row.rowspan || 1} className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    {row.srNo}
                  </td>
                  <td rowSpan={row.rowspan || 1} className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    <p dangerouslySetInnerHTML={{ __html: row.projectTitle }}></p>
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    <p dangerouslySetInnerHTML={{ __html: row.fundingAgency }}></p>
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    <p dangerouslySetInnerHTML={{ __html: row.grantReceived }}></p>
                  </td>
                  <td rowSpan={row.rowspan || 1} className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    <p dangerouslySetInnerHTML={{ __html: row.investigators }}></p>
                  </td>
                  <td rowSpan={row.rowspan || 1} className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    <p dangerouslySetInnerHTML={{ __html: row.yearOfSanction }}></p>
                  </td>
                  <td rowSpan={row.rowspan || 1} className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    <p dangerouslySetInnerHTML={{ __html: row.duration }}></p>
                  </td>
                </TableRow>
                {row.additionalRows && row.additionalRows.map((subRow, subIndex) => (
                  <TableRow key={`${rowIndex}-sub-${subIndex}`} index={rowIndex + 0.5}>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                      <p dangerouslySetInnerHTML={{ __html: subRow.fundingAgency }}></p>
                    </td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                      <p dangerouslySetInnerHTML={{ __html: subRow.grantReceived }}></p>
                    </td>
                    {/* Empty cells for columns spanned by the main row */}
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"></td>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Render author papers section
  const renderAuthorPapers = (data, type) => (
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

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.88-7-7.93s3.05-7.44 7-7.93v15.86z"></path>
            <path d="M12 11h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Computer Science & Engineering</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Research & Publication activities of the CSE Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2">
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
            <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: cseResearchData.introduction }}></p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {cseResearchData.summary.map((item, index) => (
                <li key={index} className="pl-2"><strong>{item.label}:&nbsp;{item.value}</strong></li>
              ))}
            </ul>
            <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: cseResearchData.researchGrantsIntro }}></p>
          </div>
        </CollapsibleSection>

        {/* Research Guides */}
        <CollapsibleSection 
          id="research-guides"
          title="Research Guides"
          icon="👨‍🏫"
        >
          <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
              <TableHeader>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Sr. No.</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Name of the Research Guide</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">PhD Awarded</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Ongoing</th>
              </TableHeader>
              <tbody>
                {cseResearchData.researchGuides.map((item, index) => (
                  <TableRow key={index} index={index}>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">{item.srNo}</td>
                    <td className="py-4 px-4 md:px-6 print:py-2 print:px-3">{item.name}</td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">{item.phdAwarded}</td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">{item.ongoing}</td>
                  </TableRow>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>

        {/* Research Grants */}
        <CollapsibleSection 
          id="research-grants"
          title="Research Grants"
          icon="💰"
        >
          {renderResearchGrantsTable(cseResearchData.researchGrants)}
        </CollapsibleSection>

        {/* Publications (Journals - last 5 years) */}
        <CollapsibleSection 
          id="journal-pubs"
          title="Publications (Journals - last 5 years)"
          icon="📄"
        >
          <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
              <TableHeader>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Sr. No.</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Title of paper</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Name of the author/s</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Name of journal</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Calendar Year of publication</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">ISSN number/ DOI</th>
              </TableHeader>
              <tbody>
                {cseResearchData.journalPublications.map((item, index) => (
                  <TableRow key={index} index={index}>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">{item.srNo}</td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.title }}></p></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.authors }}></p></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.journalName }}></p></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.year }}></p></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.issn_doi }}></p></td>
                  </TableRow>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>

        {/* Publications (Conferences - last 5 years) */}
        <CollapsibleSection 
          id="conference-pubs"
          title="Publications (Conferences - last 5 years)"
          icon="🎤"
        >
          <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
              <TableHeader>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Sr. No.</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Name of the Faculty</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Title of the paper</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Name of the conference</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Year of publication</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">ISBN number of the proceeding</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Name of the publisher</th>
              </TableHeader>
              <tbody>
                {cseResearchData.conferencePublications.map((item, index) => (
                  <TableRow key={index} index={index}>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.srNo }}></p></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.facultyName }}></p></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.title }}></p></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.conferenceName }}></p></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.year }}></p></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.isbn }}></p></td>
                    <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3"><p dangerouslySetInnerHTML={{ __html: item.publisher }}></p></td>
                  </TableRow>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>

        {/* Papers Published in International Journals (Per Author) */}
        <CollapsibleSection 
          id="international-journals"
          title="Papers Published in International Journals (Detailed)"
          icon="🌍"
        >
          {renderAuthorPapers(cseResearchData.internationalJournalsByAuthor, 'international')}
        </CollapsibleSection>

        {/* Papers Published in National Journals (Per Author) */}
        <CollapsibleSection 
          id="national-journals"
          title="Papers Published in National Journals (Detailed)"
          icon="🇮🇳"
        >
          {renderAuthorPapers(cseResearchData.nationalJournalsByAuthor, 'national')}
        </CollapsibleSection>

        {/* Paper Presented in International Conferences (Per Author) */}
        <CollapsibleSection 
          id="international-conferences"
          title="Paper Presented in International Conferences (Detailed)"
          icon="🎯"
        >
          {renderAuthorPapers(cseResearchData.internationalConferencesByAuthor, 'international-conference')}
        </CollapsibleSection>

        {/* Paper Presented in National Conferences (Per Author) */}
        <CollapsibleSection 
          id="national-conferences"
          title="Paper Presented in National Conferences (Detailed)"
          icon="🏛️"
        >
          {renderAuthorPapers(cseResearchData.nationalConferencesByAuthor, 'national-conference')}
        </CollapsibleSection>

      </div> {/* End Main Content Area */}
    </div>
  );
};

export default CSEResearchPublicationPage;