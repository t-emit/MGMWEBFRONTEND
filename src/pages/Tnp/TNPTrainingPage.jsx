// src/pages/TNP/TNPTrainingPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tnpTabs, tnpTrainingData } from './tnpConstants';

const TNPTrainingPage = () => {
  const location = useLocation();
  // Open the first accordion item by default
  const [openId, setOpenId] = useState(tnpTrainingData[0]?.id || null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Programs & Internships</h1>
        <p className="text-xl opacity-90">Empowering students with industry-relevant skills and opportunities.</p>
      </div>

      {/* T&P Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md p-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {tnpTabs.map((tab) => (
            <Link key={tab.name} to={tab.path} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === tab.path ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : 'text-gray-700 hover:bg-gray-50 border border-gray-200'}`}>
              {tab.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content Area - Accordion */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4">
          Programs and Records
        </h2>
        <div className="space-y-4">
          {tnpTrainingData.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(section.id)}
                className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-gray-100 focus:outline-none font-bold text-indigo-800 flex justify-between items-center transition-colors"
              >
                <span>{section.title}</span>
                <span className={`transform transition-transform duration-300 ${openId === section.id ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </button>

              {openId === section.id && (
                <div className="p-4 bg-white border-t border-gray-200">
                  {section.type === 'pdf' && (
                    <div className="w-full h-[700px] border rounded-md overflow-hidden shadow-inner">
                      <iframe 
                        src={`${section.url}#toolbar=0&navpanes=0`} 
                        title={section.title}
                        className="w-full h-full"
                        aria-label={`PDF viewer for ${section.title}`}
                      >
                        <p>Your browser does not support PDFs. <a href={section.url} target="_blank" rel="noopener noreferrer">Download the PDF</a>.</p>
                      </iframe>
                    </div>
                  )}
                  {section.type === 'links' && (
                    <ul className="space-y-3">
                      {section.links.map((link, index) => (
                        <li key={index} className="border-b pb-3 last:border-b-0 last:pb-0">
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline font-medium flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            Placement List for Academic Year {link.year}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TNPTrainingPage;