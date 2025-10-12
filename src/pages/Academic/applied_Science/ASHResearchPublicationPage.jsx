import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, ashResearchPublicationsSummary, ashResearchPublications } from './ashConstants';

const ASHResearchPublicationPage = () => {
  const location = useLocation();
  // Set the first category to be open by default
  const [openId, setOpenId] = useState(ashResearchPublications[0]?.id || null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-7xl">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Publication</h1>
        <p className="text-xl opacity-90">Scholarly contributions from the Department of Applied Science & Humanities.</p>
      </div>

      <nav className="mb-8 bg-white rounded-lg shadow-md p-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {ashDepartmentTabs.map((tab) => (
            <Link key={tab.name} to={tab.path} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === tab.path ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : 'text-gray-700 hover:bg-gray-50 border border-gray-200'}`}>
              {tab.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-bold text-lg text-blue-900 mb-2">Publication Summary:</h3>
            <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
                {ashResearchPublicationsSummary.map((item, i) => (
                    <li key={i}>
                        <strong>{item.label}:</strong> {item.count}
                    </li>
                ))}
            </ul>
        </div>

        <div className="space-y-4">
          {ashResearchPublications.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(section.id)}
                className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-gray-100 focus:outline-none font-bold text-indigo-800 flex justify-between items-center transition-colors"
              >
                <span>{section.category}</span>
                <span className={`transform transition-transform duration-300 ${openId === section.id ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </button>
              {openId === section.id && (
                <div className="p-4 bg-white border-t border-gray-200">
                  {section.facultyPublications.map((facPub, idx) => (
                    <div key={idx} className="mb-8 last:mb-0">
                      <h4 className="text-xl font-semibold text-gray-800 mb-3 border-b-2 border-indigo-100 pb-2">{facPub.facultyName}</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left text-gray-700">
                          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                            <tr>
                              <th className="px-3 py-2">Sr.</th>
                              <th className="px-3 py-2">Paper Details</th>
                              <th className="px-3 py-2">Year/Duration</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {facPub.papers.map((paper, pIdx) => (
                              <tr key={pIdx} className="hover:bg-gray-50">
                                <td className="px-3 py-3 align-top text-center">{paper.srNo}</td>
                                <td className="px-3 py-3 align-top">
                                  <div className="font-semibold text-gray-900">{paper.title}</div>
                                  <div className="text-xs text-gray-500 italic mt-1 whitespace-pre-wrap">{paper.authors}</div>
                                  <div className="text-xs text-indigo-700 mt-1">
                                    {paper.journalName || paper.conferenceName}
                                    {paper.volumeNo && ` | Vol. ${paper.volumeNo}`}
                                    {paper.issueNo && ` | Issue ${paper.issueNo}`}
                                    {paper.pageRange && ` | pp. ${paper.pageRange}`}
                                    {paper.heldAt && ` | at ${paper.heldAt}`}
                                  </div>
                                </td>
                                <td className="px-3 py-3 align-top text-center">{paper.year || paper.duration}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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