// src/pages/facilities/InfrastructurePage.jsx

import React from 'react';
import MediaCarousel from '../../components/MediaCarousel';

const introText = "The Institute comprises of 20000 Sq.m built-up area with fully furnished and well equipped Classrooms, Laboratories, Library and Canteen Etc. 1Gbps leased line internet facility is provided round the clock within the Campus for all the Students and Faculties. The entire Campus is under CCTV Surveillance for monitoring the student’s activities and Control. Emergency Medical Assistant provided for all the Students and Staff available inside the Campus. A Memorandum of Understanding is also made with a local Hospital for availability of Doctors for counseling and treatment.";

const gallerySlides = [
    { imageSrc: "/images/facilities/infrastructure/entrance-1.jpg", title: "Entrance Area" },
    { imageSrc: "/images/facilities/infrastructure/entrance-2.jpg", title: "Main College Building" },
    { imageSrc: "/images/facilities/infrastructure/entrance-3.jpg", title: "Computer Lab Complex" },
    { imageSrc: "/images/facilities/infrastructure/entrance-4.jpg", title: "Computer Lab Corridor" },
];

const InfrastructurePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Infrastructure
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-gray-700 leading-relaxed mb-8">{introText}</p>
                    
                    <div className="border-t pt-8">
                        <MediaCarousel slides={gallerySlides} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfrastructurePage;