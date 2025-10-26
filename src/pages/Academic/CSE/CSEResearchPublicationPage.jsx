// src/pages/Academics/ComputerScience/CSEResearchPublicationPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cseDepartmentTabs, cseResearchData } from './cseConstants';

// Helper for consistent table header styling
const TableHeader = ({ columns }) => (
  <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
    <tr>
      {columns.map((col, index) => (
        <th
          key={index}
          scope="col"
          className={`py-4 px-4 print:py-2 print:px-3 ${col.headerClass || ''}`}
        >
          {col.label}
        </th>
      ))}
    </tr>
  </thead>
);

// Helper for consistent table row styling
const TableRow = ({ children, index, className = '' }) => (
  <tr
    className={`${
      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
    } border-b hover:bg-indigo-50 transition-colors print:border-b ${className}`}
  >
    {children}
  </tr>
);

// Helper to render cell content safely and with good spacing
const TableCellContent = ({ content, isCentered = false }) => {
  const alignClass = isCentered ? 'text-center' : 'text-left';
  // Check if content looks like HTML (e.g., contains '</p>' or '<br>')
  const requiresHtml = typeof content === 'string' && (content.includes('</') || content.includes('<br'));

  return (
    <div className={`py-3.5 px-4 print:py-2 print:px-3 ${alignClass} space-y-1`}>
      {requiresHtml ? (
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      ) : (
        <p>{content || '—'}</p> // Display a dash if content is empty
      )}
    </div>
  );
};

// Generic Table Component for standard publications
const GenericTable = ({ data, columns }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-600 py-4">No data available for this section.</p>;
  }

  return (
    <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
      <table className="w-full text-sm text-left text-gray-700 print:text-xs">
        <TableHeader columns={columns} />
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index} index={index}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className={col.cellClass || 'text-left align-top'}>
                  <TableCellContent
                    content={item[col.key]}
                    isCentered={col.isCentered}
                  />
                </td>
              ))}
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Quick Navigation Component
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

// Collapsible Section Component with Accessibility enhancements
const CollapsibleSection = ({ id, title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = `content-${id}`;

  return (
    <section id={id} className="mb-8 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden print:shadow-none print:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
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
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div id={contentId} className={`transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-6 pb-6 print:px-4 print:pb-4">
          {children}
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const CSEResearchPublicationPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('overview');

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
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };
    
  // Special rendering for Research Grants to handle rowspan and ensure consistent styling
  const renderResearchGrantsTable = (data) => {
    if (!data || data.length === 0) {
        return <p className="text-center text-gray-600 py-4">No data available for this section.</p>;
    }

    const grantColumns = [
        { label: 'Sr. No.', headerClass: 'text-center w-16 min-w-[60px]' },
        { label: 'Project Title/ International Conference', headerClass: 'text-left min-w-[300px]' },
        { label: 'Funding Agency', headerClass: 'text-left min-w-[150px]' },
        { label: 'Grant Received (in Rs.)', headerClass: 'text-center w-32 min-w-[120px]' },
        { label: 'Investigators', headerClass: 'text-left min-w-[150px]' },
        { label: 'Year of Sanction', headerClass: 'text-center w-28 min-w-[100px]' },
        { label: 'Duration (in years)', headerClass: 'text-center w-24 min-w-[80px]' },
    ];
  
    return (
        <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
            <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                <TableHeader columns={grantColumns} />
                <tbody>
                    {data.map((row, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            {/* Main row for each grant */}
                            <TableRow index={rowIndex}>
                                <td rowSpan={row.rowspan || 1} className="align-top">
                                    <TableCellContent content={row.srNo} isCentered={true} />
                                </td>
                                <td rowSpan={row.rowspan || 1} className="align-top">
                                    <TableCellContent content={row.projectTitle} />
                                </td>
                                <td className="align-top">
                                    <TableCellContent content={row.fundingAgency} />
                                </td>
                                <td className="align-top">
                                    <TableCellContent content={row.grantReceived} isCentered={true} />
                                </td>
                                <td rowSpan={row.rowspan || 1} className="align-top">
                                    <TableCellContent content={row.investigators} />
                                </td>
                                <td rowSpan={row.rowspan || 1} className="align-top">
                                    <TableCellContent content={row.yearOfSanction} isCentered={true} />
                                </td>
                                <td rowSpan={row.rowspan || 1} className="align-top">
                                    <TableCellContent content={row.duration} isCentered={true} />
                                </td>
                            </TableRow>
                            {/* Additional rows for grants with multiple funding agencies */}
                            {row.additionalRows && row.additionalRows.map((subRow, subIndex) => (
                                <TableRow key={`${rowIndex}-sub-${subIndex}`} index={rowIndex} className="bg-gray-100/50 hover:!bg-indigo-100">
                                    {/* These cells are for the additional funding info */}
                                    <td className="align-top">
                                        <TableCellContent content={subRow.fundingAgency} />
                                    </td>
                                    <td className="align-top">
                                        <TableCellContent content={subRow.grantReceived} isCentered={true} />
                                    </td>
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
  const renderAuthorPapers = (data) => {
    if (!data || data.length === 0) {
      return <p className="text-center text-gray-600 py-4">No data available for this section.</p>;
    }
    return (
      <div className="space-y-6">
        {data.map((authorData, authorIndex) => (
          <div key={authorIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="text-xl font-bold text-purple-700 mb-3 pb-2 border-b border-purple-200">
              {authorData.authorName}
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 print:text-sm">
              <ol className="list-decimal list-outside space-y-3 pl-6">
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

  // Column definitions for various tables
  const researchGuidesColumns = [
    { label: 'Sr. No.', key: 'srNo', headerClass: 'text-center w-16 min-w-[60px]', cellClass: 'text-center', isCentered: true },
    { label: 'Name of the Research Guide', key: 'name', headerClass: 'text-left' },
    { label: 'PhD Awarded', key: 'phdAwarded', headerClass: 'text-center w-32 min-w-[100px]', isCentered: true },
    { label: 'Ongoing', key: 'ongoing', headerClass: 'text-center w-24 min-w-[80px]', isCentered: true },
  ];

  const journalPubsColumns = [
    { label: 'Sr. No.', key: 'srNo', headerClass: 'text-center w-16 min-w-[60px]', isCentered: true },
    { label: 'Title of paper', key: 'title', headerClass: 'text-left min-w-[300px]' },
    { label: 'Name of the author/s', key: 'authors', headerClass: 'text-left min-w-[150px]' },
    { label: 'Name of journal', key: 'journalName', headerClass: 'text-left min-w-[200px]' },
    { label: 'Year of publication', key: 'year', headerClass: 'text-center w-28 min-w-[100px]', isCentered: true },
    { label: 'ISSN number/ DOI', key: 'issn_doi', headerClass: 'text-left min-w-[150px]' },
  ];

  const conferencePubsColumns = [
    { label: 'Sr. No.', key: 'srNo', headerClass: 'text-center w-16 min-w-[60px]', isCentered: true },
    { label: 'Name of the Faculty', key: 'facultyName', headerClass: 'text-left min-w-[120px]' },
    { label: 'Title of the paper', key: 'title', headerClass: 'text-left min-w-[300px]' },
    { label: 'Name of the conference', key: 'conferenceName', headerClass: 'text-left min-w-[180px]' },
    { label: 'Year of publication', key: 'year', headerClass: 'text-center w-28 min-w-[100px]', isCentered: true },
    { label: 'ISBN number', key: 'isbn', headerClass: 'text-left min-w-[150px]' },
    { label: 'Name of the publisher', key: 'publisher', headerClass: 'text-left min-w-[120px]' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Computer Science & Engineering</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Research & Publication activities of the CSE Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md print:hidden">
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
                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium ${
                  isActive
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none">
        <CollapsibleSection id="overview" title="Research & Publication Overview" defaultOpen={true}>
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

        <CollapsibleSection id="research-guides" title="Research Guides" defaultOpen={false}>
          <GenericTable data={cseResearchData.researchGuides} columns={researchGuidesColumns} />
        </CollapsibleSection>

        <CollapsibleSection id="research-grants" title="Research Grants" defaultOpen={false}>
          {renderResearchGrantsTable(cseResearchData.researchGrants)}
        </CollapsibleSection>

        <CollapsibleSection id="journal-pubs" title="Publications (Journals - last 5 years)" defaultOpen={false}>
          <GenericTable data={cseResearchData.journalPublications} columns={journalPubsColumns} />
        </CollapsibleSection>

        <CollapsibleSection id="conference-pubs" title="Publications (Conferences - last 5 years)" defaultOpen={false}>
          <GenericTable data={cseResearchData.conferencePublications} columns={conferencePubsColumns} />
        </CollapsibleSection>

        <CollapsibleSection id="international-journals" title="Papers in International Journals (Detailed)" defaultOpen={false}>
          {renderAuthorPapers(cseResearchData.internationalJournalsByAuthor)}
        </CollapsibleSection>

        <CollapsibleSection id="national-journals" title="Papers in National Journals (Detailed)" defaultOpen={false}>
          {renderAuthorPapers(cseResearchData.nationalJournalsByAuthor)}
        </CollapsibleSection>

        <CollapsibleSection id="international-conferences" title="Papers in International Conferences (Detailed)" defaultOpen={false}>
          {renderAuthorPapers(cseResearchData.internationalConferencesByAuthor)}
        </CollapsibleSection>

        <CollapsibleSection id="national-conferences" title="Papers in National Conferences (Detailed)" defaultOpen={false}>
          {renderAuthorPapers(cseResearchData.nationalConferencesByAuthor)}
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default CSEResearchPublicationPage;