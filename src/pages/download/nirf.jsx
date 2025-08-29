// src/pages/download/NirfPage.jsx

import React from 'react';
import { FaDownload } from 'react-icons/fa';

// --- Data for the NIRF Page ---
const nirfReports = [
    { title: "Academic Year - 2024", link: "/pdfs/nirf/download-20240505091159.pdf" },
    { title: "Academic Year - 2022", link: "/pdfs/nirf/download-20240505091115.pdf" },
    { title: "Academic Year - 2021", link: "/pdfs/nirf/download-20240505091059.pdf" },
    { title: "Academic Year - 2020", link: "/pdfs/nirf/download-20240505091041.pdf" },
    { title: "Full Report-MHRD, National Institutional Ranking Framework (NIRF) 2023-24", link: "/pdfs/nirf/NIRF.pdf" }, // Assuming NIRF.pdf is the 23-24 full report
    { title: "Full Report-MHRD, National Institutional Ranking Framework (NIRF) 2022-23", link: "/pdfs/nirf/download-20230602123752.pdf" },
    { title: "Full Report-MHRD, National Institutional Ranking Framework (NIRF) 2021-22", link: "/pdfs/nirf/download-20221702122956.pdf" },
    { title: "Full Report-MHRD, National Institutional Ranking Framework (NIRF) 2020-21", link: "/pdfs/nirf/download-20212302185311.pdf" },
    { title: "Full Report-MHRD, National Institutional Ranking Framework (NIRF) 2019-20", link: "/pdfs/nirf/download-20200801182308.pdf" },
    { title: "Full Report-MHRD, National Institutional Ranking Framework (NIRF) 2017-18", link: "/pdfs/nirf/download-20183006115401.pdf" },
    { title: "Full Report-MHRD, National Institutional Ranking Framework (NIRF) 2016-17", link: "/pdfs/nirf/download-20183006115525.pdf" },
];

const NirfPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        NIRF Reports
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
                                {nirfReports.map((report, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                                        <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                                        <td className="border border-gray-300 p-3">{report.title}</td>
                                        <td className="border border-gray-300 p-3 text-center">
                                            <a 
                                                href={report.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="inline-block p-2 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors"
                                                title={`Download ${report.title}`}
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

export default NirfPage;