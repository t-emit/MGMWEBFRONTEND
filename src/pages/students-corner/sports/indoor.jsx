// src/pages/students-corner/AchievementsIndoorPage.jsx

import React from 'react';
import AccordionItem from '../../../components/AccordinItem';
import { FaFilePdf } from 'react-icons/fa';

// --- Data for the page ---
const indoorPdfLinks = [
    { title: "Indoor Sports 2024-2025", link: "/pdfs/sports/indoor/Indoor_Sports_Activity-2024-25.pdf" },
    // { title: "Sports Department Activity", link: "/pdfs/sports/indoor/Sports_Department_Activity.pdf" },
];

const ictWinners = [
    { event: "Badminton – Inter zone Winners", name: "Radhika Dudhmande", class: "ME CSE" },
    { event: "Badminton – Inter zone Winners", name: "Prajakta Kulkarni", class: "ME CSE" },
    { event: "Badminton – Inter zone Winners", name: "Mansi Kabra", class: "TE CSE" },
    { event: "Badminton – Inter zone Winners", name: "Jayanti Deshmukh", class: "SE CSE" },
    { event: "Badminton – Inter zone Winners", name: "Kale Rutumbara", class: "TE IT" },
];

const ictThird = [
    { event: "Table Tennis", name: "Ravina Surve", class: "SE IT" },
    { event: "Table Tennis", name: "Pooja Wagh", class: "TE IT" },
    { event: "Table Tennis", name: "Jayanti Deshmukh", class: "SE CSE" },
];

const interZoneRunners = [
    { event: "Chess", name: "Togale SS", class: "BE CSE" },
    { event: "Chess", name: "Mehewar VV", class: "BE CSE" },
    { event: "Chess", name: "Swapnil Dampalwar", class: "BE Mech" },
    { event: "Chess", name: "Warudkar Ninad", class: "TE CSe" },
    { event: "Chess", name: "Chandanani Monica", class: "TECivil" },
    { event: "Chess", name: "Shriram BB", class: "TE Cse" },
];


const AchievementsIndoorPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Achievements - Indoor
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg space-y-10">
                    <AccordionItem title="Indoor Sports Activity Reports" defaultOpen={true}>
                        <ul className="p-4 space-y-3">
                            {indoorPdfLinks.map((pdf, index) => (
                                <li key={index}>
                                    <a href={pdf.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800 hover:underline font-semibold">
                                        <FaFilePdf className="mr-2 text-red-500" />
                                        {pdf.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>

                    <hr />

                    {/* ICT Winners Table */}
                    <section>
                        <h2 className="text-2xl font-bold text-indigo-800 mb-4">ICT Winners – Prizes</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">Sr. No.</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-5/12">Event</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-4/12">Name</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-2/12">Class</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ictWinners.map((item, index) => (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                                            <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                                            <td className="border border-gray-300 p-3">{item.event}</td>
                                            <td className="border border-gray-300 p-3">{item.name}</td>
                                            <td className="border border-gray-300 p-3">{item.class}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ICT Third Place Table */}
                    <section>
                        <h2 className="text-2xl font-bold text-indigo-800 mb-4">ICT Third – Prizes</h2>
                        <div className="overflow-x-auto">
                           <table className="w-full border-collapse border border-gray-300">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">Sr. No.</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-5/12">Event</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-4/12">Name</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-2/12">Class</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ictThird.map((item, index) => (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                                            <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                                            <td className="border border-gray-300 p-3">{item.event}</td>
                                            <td className="border border-gray-300 p-3">{item.name}</td>
                                            <td className="border border-gray-300 p-3">{item.class}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    
                    {/* Inter Zone Runners Table */}
                    <section>
                        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Inter Zone Runners – Prizes</h2>
                        <div className="overflow-x-auto">
                           <table className="w-full border-collapse border border-gray-300">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">Sr. No.</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-5/12">Event</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-4/12">Name</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-2/12">Class</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {interZoneRunners.map((item, index) => (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                                            <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                                            <td className="border border-gray-300 p-3">{item.event}</td>
                                            <td className="border border-gray-300 p-3">{item.name}</td>
                                            <td className="border border-gray-300 p-3">{item.class}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AchievementsIndoorPage;