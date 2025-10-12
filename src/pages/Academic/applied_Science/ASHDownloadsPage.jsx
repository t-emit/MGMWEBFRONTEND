import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, ashDownloadsData } from './ashConstants';

const ASHDownloadsPage = () => {
  const location = useLocation();
  const [openId, setOpenId] = useState('syllabus');

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Downloads</h1>
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
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 space-y-4">
        {ashDownloadsData.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg">
                <button onClick={() => toggle(section.id)} className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-bold text-indigo-900 flex justify-between items-center">
                    {section.title}
                    <span>{openId === section.id ? '−' : '+'}</span>
                </button>
                {openId === section.id && (
                    <div className="p-4 bg-white">
                        {section.files.length > 0 ? (
                            <ul className="space-y-2">
                                {section.files.map((file, i) => (
                                    <li key={i} className="flex items-center justify-between border-b pb-2 last:border-b-0">
                                        <span className="text-sm text-gray-700"><span className="font-semibold mr-2">{file.srNo}.</span> {file.heading}</span>
                                        <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">Download</a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-gray-500 italic text-center">No files available in this category.</p>
                        )}
                    </div>
                )}
            </div>
        ))}
      </div>
    </div>
  );
};
export default ASHDownloadsPage;