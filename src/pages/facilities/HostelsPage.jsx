// src/pages/facilities/HostelsPage.jsx

import React from 'react';
import MediaCarousel from '../../components/MediaCarousel';

const introText = "Hostel facilities for Boys and girls are available in the campus spreading over 2630 Sq.m area. These hostels can accommodate 74 and 92 boys and girls respectively. Spacious 3 bed living rooms, 24 hours hot water and power supply, R O purified drinking water, Internet etc. are provided. Hostel mess is run on co-operative basis and so it’s very affordable for students. A hygienic and well maintained canteen with homely preparations is also available for the inmates of the hostels as well as day scholars and staff of the campus.";

const gallerySlides = [
    { imageSrc: "/images/facilities/hostels/girls-hostel.jpg", title: "View of Girls Hostel" },
    { imageSrc: "/images/facilities/hostels/boys-hostel.jpg", title: "View of Boys Hostel" },
    { imageSrc: "/images/facilities/hostels/corridor.jpg", title: "Corridor" },
    { imageSrc: "/images/facilities/hostels/inner-corridor.jpg", title: "Inner Corridor" },
];

const HostelsPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Hostels
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

export default HostelsPage;