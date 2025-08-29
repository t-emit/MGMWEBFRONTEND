// src/pages/download/CurrentAdvertisementPage.jsx

import React from 'react';
import { FaDownload } from 'react-icons/fa';

// --- Data for the Current Advertisements Page ---
const advertisements = [
    {
        title: "Registration for admission to institute level & probable vacancies for First Year B.Tech, Direct Second Year B.Tech. and M.Tech courses",
        link: "/pdfs/advertisements/download-20211201142721.pdf"
    },
    // To add a new advertisement, just add another object here. For example:
    // {
    //     title: "Walk-in Interviews for Assistant Professor Positions",
    //     link: "/pdfs/advertisements/walk-in-interview-notice.pdf"
    // }
];


const CurrentAdvertisementPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Current Advertisements
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
                                {advertisements.length > 0 ? (
                                    advertisements.map((ad, index) => (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                                            <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                                            <td className="border border-gray-300 p-3">{ad.title}</td>
                                            <td className="border border-gray-300 p-3 text-center">
                                                <a 
                                                    href={ad.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="inline-block p-2 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors"
                                                    title="Download PDF"
                                                >
                                                    <FaDownload className="h-5 w-5" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center p-6 text-gray-500">
                                            There are currently no new advertisements.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentAdvertisementPage;