// src/pages/students-corner/AchievementsOutdoorPage.jsx

import React from 'react';
import AccordionItem from '../../../components/AccordinItem'; // Corrected the path
import { FaFilePdf } from 'react-icons/fa';
import MediaCarousel from '../../../components/MediaCarousel'; // Import the carousel component

// --- Data for the page ---
const outdoorPdfLinks = [
    { title: "Outdoor Sports Activity - 2023-24", link: "/pdfs/sports/outdoor/Sports Achievements-2023-24.pdf" },
    { title: "Sports Department Activity", link: "/pdfs/sports/outdoor/SportsDepartmentActivity.pdf" },
];

// Data formatted for the MediaCarousel
const archiveSlides = [
    { imageSrc: "/images/sports-out/1.jpg", title: "Championship Trophy", subtitle: "General and Runner Up 2016-17" },
    { imageSrc: "/images/sports-out/2.jpg", title: "Akshay Rathod", subtitle: "Gold in ICT Swimming Competition" },
    { imageSrc: "/images/sports-out/3.jpg", title: "Satish Munde & Tejal Yeramwar", subtitle: "ICT B Zone Basketball Winners" },
    { imageSrc: "/images/sports-out/4.jpg", title: "Rahul Chandel", subtitle: "National Fencing Competition Winner" },
    { imageSrc: "/images/sports-out/5.jpg", title: "Football Team", subtitle: "Won ICT Rolling Trophy 2016-17" },
    { imageSrc: "/images/sports-out/6.jpg", title: "Lawn Tennis Team", subtitle: "ICT B Zone General Championship" },
    { imageSrc: "/images/sports-out/7.jpg", title: "Basketball Team", subtitle: "ICT B Zone Winner 2016-17" },
    { imageSrc: "/images/sports-out/8.jpg", title: "Badminton Team", subtitle: "ICT B Zone General Championship" },
    { imageSrc: "/images/sports-out/9.jpg", title: "Cricket Team", subtitle: "Participated in ICT B Zone" },
    { imageSrc: "/images/sports-out/10.jpg", title: "Futsal Team", subtitle: "Runner up - National level Meet 2015-16" },
];


const AchievementsOutdoorPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Achievements - Outdoor
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <AccordionItem title="Outdoor Sports Activity Reports" defaultOpen={true}>
                        <ul className="p-4 space-y-3">
                            {outdoorPdfLinks.map((pdf, index) => (
                                <li key={index}>
                                    <a href={pdf.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800 hover:underline font-semibold">
                                        <FaFilePdf className="mr-2 text-red-500" />
                                        {pdf.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>

                    <AccordionItem title="Old Archive Data" defaultOpen={true}>
                        {/* The long list of images is now replaced by the carousel */}
                        <MediaCarousel slides={archiveSlides} />
                    </AccordionItem>
                </div>
            </div>
        </div>
    );
};

export default AchievementsOutdoorPage;