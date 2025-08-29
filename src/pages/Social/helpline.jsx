// src/pages/social/MgmHelplinePage.jsx

import React from 'react';
import { FaDownload } from 'react-icons/fa';

// --- Data for the MGM Helpline Page ---
const helplineDocuments = [
    { 
        title: "Gender Equity Cell", 
        link: "/pdfs/Helpline/GenderEquityCell.pdf" 
    },
    // You can add more documents to this array in the future
];


const MgmHelplinePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        MGM Helpline
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[10%]">Sr. No.</th>
                                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[80%]">Title</th>
                                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[10%]">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {helplineDocuments.map((doc, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                                        <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                                        <td className="border border-gray-300 p-3 font-semibold">{doc.title}</td>
                                        <td className="border border-gray-300 p-3 text-center">
                                            <a 
                                                href={doc.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="inline-block p-2 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors"
                                                title="Download PDF"
                                            >
                                                <FaDownload className="h-5 w-5" />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MgmHelplinePage;