// src/pages/Academics/InformationTechnology/ITResearchPublicationPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { itDepartmentTabs, itResearchData } from './itConstants';

// --- PLACEHOLDER DATA TO FIX CRITICAL ERRORS ---
// NOTE: In a real application, this data should be defined in 'itConstants.js'.
// This structure is added here temporarily so the page loads without crashing.
const mockPublicationData = {
    // Publications: International Journals
    internationalJournalsByAuthor: [
        {
            authorName: "Mr. Hashmi S.A. (HOD)",
            papers: [
                "**Title 1**: Journal Name, Volume 10, Issue 2, Pages 100-105, 2023. DOI: xxx",
                "**Title 2**: Another Journal of IT, Vol. 5, No. 1, pp. 20-25, 2022.",
            ]
        },
        {
            authorName: "Miss. Manisha Manjramkar",
            papers: [
                "**Title 3**: International Journal of Network Security, Vol. 15, Issue 4, 2024.",
            ]
        },
    ],
    // Publications: National Journals
    nationalJournalsByAuthor: [
        {
            authorName: "Mr. Yadav R. S.",
            papers: [
                "**Title A**: Indian Journal of Computer Science, Vol. 8, Issue 1, 2023.",
            ]
        },
    ],
    // Presentations: International Conferences
    internationalConferencesByAuthor: [
        {
            authorName: "Mr. Ambulgekar R. M.",
            papers: [
                "**Paper X**: Proc. 2nd Int. Conf. on Wireless Sensor Networks, Dubai, 2023.",
            ]
        },
    ],
    // Presentations: National Conferences
    nationalConferencesByAuthor: [
        {
            authorName: "Mr. Bandewar S. P.",
            papers: [
                "**Paper Y**: National Conference on Embedded Systems, Pune, 2022.",
            ]
        },
    ],
};
// --------------------------------------------------


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
                    {icon && <span className="mr-3 text-indigo-500">{icon}</span>}
                    {title}
                </h2>
                <img
                    src={isOpen ? '/images/details_close.png' : '/images/details_open.png'}
                    alt="Toggle"
                    className="w-6 h-6 print:hidden"
                />
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
    const currentDeptPath = "/academics/information-technology";

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
            return <p className="text-gray-600 italic">No publications in this category are available at the moment.</p>;
        }
        return (
            <div className="space-y-6">
                {data.map((authorData, authorIndex) => (
                    <div key={authorIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200 print:border print:bg-white print:p-3">
                        <h3 className="text-xl font-bold text-indigo-700 mb-3 pb-2 border-b border-indigo-200 print:text-lg">
                            {authorData.authorName}
                        </h3>
                        <div className="prose prose-lg max-w-none text-gray-700 print:text-sm">
                            <ol className="list-decimal list-inside space-y-2 pl-4">
                                {authorData.papers.map((paper, paperIndex) => (
                                    <li key={paperIndex} className="pl-2 pb-2 border-b border-gray-200 last:border-b-0 print:border-none print:pb-0" dangerouslySetInnerHTML={{ __html: paper }}></li>
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
                <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Research & Publication</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
                    Explore the research and publication activities of the Information Technology Department.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
            </div>

            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-6 print:hidden">
                <Link to="/" className="hover:text-indigo-600">Home</Link> / <Link to="/academics" className="hover:text-indigo-600">Academics</Link> / <Link to={currentDeptPath} className="hover:text-indigo-600">IT</Link> / <span className="text-indigo-600 font-medium">Research & Publication</span>
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
                    <div className="prose prose-lg max-w-none text-gray-700 mb-6 print:text-sm text-justify">
                        <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: itResearchData.introduction }}></p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                            {itResearchData.summary.map((item, index) => (
                                <li key={index} className="pl-2"><strong>{item.label}:&nbsp;{item.value}</strong></li>
                            ))}
                        </ul>
                        {/* ERROR RESOLVED: Removed the attempt to access itResearchData.researchGrantsIntro as it is undefined in the constants. */}
                    </div>
                </CollapsibleSection>

                {/* Papers Published in International Journals (Per Author) */}
                <CollapsibleSection
                    id="international-journals"
                    title="Papers Published in International Journals"
                    icon="🌍"
                    defaultOpen={true}
                >
                    {/* ERROR RESOLVED: Using mockPublicationData to prevent crash */}
                    {renderAuthorPapers(mockPublicationData.internationalJournalsByAuthor)}
                </CollapsibleSection>

                {/* Papers Published in National Journals (Per Author) */}
                <CollapsibleSection
                    id="national-journals"
                    title="Papers Published in National Journals"
                    icon="🇮🇳"
                    defaultOpen={false}
                >
                    {/* ERROR RESOLVED: Using mockPublicationData to prevent crash */}
                    {renderAuthorPapers(mockPublicationData.nationalJournalsByAuthor)}
                </CollapsibleSection>

                {/* Paper Presented in International Conferences (Per Author) */}
                <CollapsibleSection
                    id="international-conferences"
                    title="Papers Presented in International Conferences"
                    icon="🎯"
                    defaultOpen={true}
                >
                    {/* ERROR RESOLVED: Using mockPublicationData to prevent crash */}
                    {renderAuthorPapers(mockPublicationData.internationalConferencesByAuthor)}
                </CollapsibleSection>

                {/* Paper Presented in National Conferences (Per Author) */}
                <CollapsibleSection
                    id="national-conferences"
                    title="Papers Presented in National Conferences"
                    icon="🏛️"
                    defaultOpen={true}
                >
                    {/* ERROR RESOLVED: Using mockPublicationData to prevent crash */}
                    {renderAuthorPapers(mockPublicationData.nationalConferencesByAuthor)}
                </CollapsibleSection>

            </div> {/* End Main Content Area */}
        </div>
    );
};

export default ITResearchPublicationPage;