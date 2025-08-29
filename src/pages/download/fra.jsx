// src/pages/download/FeesRegulatoryAuthorityPage.jsx

import React from 'react';
import { FaDownload } from 'react-icons/fa';

// --- Data for the Fees Regulatory Authority Page ---
// --- Data for the Fees Regulatory Authority Page ---
const authorityDocuments = [
    { 
      title: "FEES REGULATING AUTHORITY - 2024-25 INFO", // Matched with the most descriptive title
      link: "/pdfs/fees_reg_auth/FEES REGULATING AUTHORITY - 2024-25.pdf" 
    },
    { 
      title: "FRA Computation Engg Nanded - 2023-24", 
      link: "/pdfs/fees_reg_auth/download-20220812110417.pdf" 
    },
    { 
      title: "FRA Engg. Nanded Information - 2023-24", 
      link: "/pdfs/fees_reg_auth/download-20220812110354.pdf" 
    },
    { 
      title: "FRA Income & Exp Engg. Nanded - 2023-24", 
      link: "/pdfs/fees_reg_auth/download-20220812110327.pdf" 
    },
    { 
      title: "FRA ME Computation Engg Nanded", 
      link: "/pdfs/fees_reg_auth/download-20220812110259.pdf" 
    },
    // Note: The "FRA Proposal 2025-26" was not in the screenshot,
    // so I have removed it. You can add it back if the file exists.
];
const FeesRegulatoryAuthorityPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Fees Regulatory Authority
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[8%]">Sr.No</th>
                                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[82%]">Title</th>
                                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[10%]">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {authorityDocuments.map((doc, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                                        <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                                        <td className="border border-gray-300 p-3">{doc.title}</td>
                                        <td className="border border-gray-300 p-3 text-center">
                                            <a 
                                                href={doc.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="inline-block p-2 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors"
                                                title={`Download ${doc.title}`}
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

export default FeesRegulatoryAuthorityPage;