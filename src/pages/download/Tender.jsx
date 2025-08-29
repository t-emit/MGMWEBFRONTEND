// src/pages/download/TenderPage.jsx

import React from 'react';
import { FaFileExcel } from 'react-icons/fa'; // Using a specific icon for Excel files

// --- Data for the Tender Page ---
const tenderDocuments = [
    {
        title: "Tender Notice and Details", // You can give it a more descriptive title
        link: "/pdfs/Tender/download-20182006142533.xls"
    },
    // To add more tenders, just add another object to this array.
];

const TenderPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Tender Notices
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
                                {tenderDocuments.map((doc, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                                        <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                                        <td className="border border-gray-300 p-3">{doc.title}</td>
                                        <td className="border border-gray-300 p-3 text-center">
                                            <a 
                                                href={doc.link} 
                                                download // This attribute suggests the browser should download the file
                                                className="inline-block p-2 rounded-full text-green-600 hover:bg-green-100 transition-colors"
                                                title={`Download ${doc.title}`}
                                            >
                                                <FaFileExcel className="h-6 w-6" />
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

export default TenderPage;