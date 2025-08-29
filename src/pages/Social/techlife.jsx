// src/pages/social/TechLifePage.jsx

import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

// --- Data for the Tech Life Page ---
const techlifeLinks = [
    { title: "Techlife report 22-23", link: "/pdfs/Techlife/report22-23.pdf" },
    { title: "Techlife Activites 22-23", link: "/pdfs/Techlife/TECHLIFEACTIVITES22-23.pdf" },
];


const TechLifePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Tech Life
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports & Activities</h2>
                    <ul className="space-y-4">
                        {techlifeLinks.map((item, index) => (
                             <li key={index} className="border-b border-dotted border-gray-300 last:border-b-0">
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex justify-between items-center w-full py-4 text-left text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors"
                                >
                                    <span className="flex items-center">
                                        <FaFilePdf className="mr-3 text-red-500" />
                                        {item.title}
                                    </span>
                                    <span className="text-sm font-normal text-gray-500">View PDF</span>
                                </a>
                             </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TechLifePage;