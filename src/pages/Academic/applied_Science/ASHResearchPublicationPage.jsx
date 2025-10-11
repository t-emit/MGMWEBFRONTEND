// src/pages/Academic/applied_Science/ASHResearchPublicationPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, ashResearchPublicationsSummary, ashResearchPublications } from './ashConstants';

const ASHResearchPublicationPage = () => {
  const location = useLocation();
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpenCategory(id);
  };

  const renderPaperTable = (papers, type) => {
    const isJournal = type.includes('Journal');
    
    // Define columns based on type
    const journalCols = [
      { header: 'Sr. No.', field: 'srNo' }, { header: 'Author(s)', field: 'authors' },
      { header: 'Title', field: 'title' }, { header: 'Journal Name', field: 'journalName' },
      { header: 'Vol. No', field: 'volumeNo' }, { header: 'Issue No', field: 'issueNo' },
      { header: 'Year', field: 'year' }, { header: 'pp', field: 'pageRange' },
    ];
    
    const conferenceCols = [
      { header: 'Sr. No.', field: 'srNo' }, { header: 'Author(s)', field: 'authors' },
      { header: 'Title', field: 'title' }, { header: 'Conference', field: 'conferenceName' },
      { header: 'Held At', field: 'heldAt' }, { header: 'Duration', field: 'duration' },
    ];

    const columns = isJournal ? journalCols : conferenceCols;

    return (
      <div className="overflow-x-auto relative rounded-lg shadow-md border mb-6">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800">
            <tr>
              {columns.map(col => <th key={col.field} scope="col" className="py-2 px-3">{col.header}</th>)}
            </tr>
          </thead>
          <tbody>
            {papers.map((paper, i) => (
              <tr key={i} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50`}>
                {columns.map(col => <td key={col.field} className="py-2 px-3">{paper[col.field] || '-'}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Publication</h1>
        <p className="text-xl opacity-90 max-w-2xl">Scholarly contributions from the Department of Applied Science & Humanities.</p>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md">
         <div className="px-4 py-2 border-b"><h3 className="text-sm font-semibold uppercase">Department Sections:</h3></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2">
          {ashDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-md text-sm font-medium ${isActive ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300' : 'text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 pb-4">
          Faculty Publications
        </h2>

        {/* Summary Links */}
        <div className="mb-8 p-4 bg-blue-50 rounded-lg shadow-sm border">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Publication Summary:</h3>
          <ul className="list-disc pl-6 space-y-2">
            {ashResearchPublicationsSummary.map((summary) => (
              <li key={summary.anchor}>
                <strong>Total Papers in {summary.label}: </strong>
                <a onClick={(e) => { e.preventDefault(); scrollToSection(summary.anchor); }} className="text-indigo-600 hover:underline cursor-pointer font-semibold">
                  {summary.count.toString().padStart(2, '0')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {ashResearchPublications.map((categoryData) => (
            <div key={categoryData.id} id={categoryData.id} className="border rounded-lg shadow-sm overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 bg-blue-100 hover:bg-blue-200"
                onClick={() => toggleCategory(categoryData.id)}
              >
                <h3 className="text-xl font-bold text-blue-800">{categoryData.category}</h3>
                <svg className={`w-6 h-6 transition-transform ${openCategory === categoryData.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {openCategory === categoryData.id && (
                <div className="p-4 border-t bg-white">
                  {categoryData.facultyPublications.map((facultyPub, index) => (
                    <div key={index} className="mb-6">
                      <h4 className="text-lg font-bold text-indigo-700 mb-3">{facultyPub.facultyName}</h4>
                      {renderPaperTable(facultyPub.papers, categoryData.category)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ASHResearchPublicationPage;