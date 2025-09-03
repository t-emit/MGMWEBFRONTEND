// src/pages/facilities/SportsPage.jsx

import React from 'react';
import MediaCarousel from '../../components/MediaCarousel';

// --- Data for the Sports Page ---
const introParagraphs = [
    "The Department of sports was established in the year 1988 by Hon’ble Director Dr.Mrs.Geeta Lathkar. It gave a boost to the growth & development of sports in college curricular made possible the inclusion of a few popular games such as Basketball, Cricket, Tennis & Football in ICT. With a view to tap the sports talent & testing its worthiness the college took an important step forward to explore its sports men to higher levels of competitive sports. Team was allowed to participate in ICT. Later on participating in ICT and representation in the IUT gradually increased and today our college is proud of the teams for their participation in more than 22 sports events (Men & Women). For the first time in 1999 the college had taken the responsibility of hoisting ICT of SRTMU, Nanded. It was very first time the games such as Basketball, Cricket & Football were organized for girls. Apart from it, Basketball, Badminton Cricket and table tennis for women was introduced for the first time in the college curricular. The college authority initiated the steps to develop its own infrastructure of sports in 1990. During the time Basketball Court & Cricket ground was prepared for the first time in college. The college ground is spread over an area of 1.75 acre of land and all the programs of ICT & IUT coaching camps are conducted on college play ground. College provides the facilities for conducting almost all common games such as Kabbadi, Kho-kho, Volleyball, Basketball, Cricket and Football. Due to the assistance provided by the college many college students have shown outstanding performance in university tournaments.",
    "The foundation laid by the director Dr.Mrs Geeta Lathkar and contribution of earlier sports committees has helped the sports players to improve their performance which ultimately yielded good result.The sports department facilitates all the players for their performances and achievements throughout the year. The college is planning to erect infrastructure for gymnasium in near future.",
];

const gamesList = {
    outdoor: "Football, Cricket, Basketball, Volleyball, Atheletics, Kabaddi, etc.",
    indoor: "Chess, Badminton, Table Tennis, Boxing."
};

const gallerySlides = [
    { imageSrc: "/images/facilities/sports/basketball-team-boys.jpg" },
    { imageSrc: "/images/facilities/sports/DSC_0007_2016.jpg" },
    { imageSrc: "/images/facilities/sports/DSC_0008_2016.jpg" },
    { imageSrc: "/images/facilities/sports/DSC_0050_2016.jpg" },
    { imageSrc: "/images/facilities/sports/court1.jpg", title: "Basketball Court" },
    { imageSrc: "/images/facilities/sports/court2.jpg", title: "Basketball Court" },
    { imageSrc: "/images/facilities/sports/court3.jpg", title: "Football Field Dimensions" },
    { imageSrc: "/images/facilities/sports/court4.jpg", title: "Football Field" },
    { imageSrc: "/images/facilities/sports/court5.jpg", title: "Football Field" },
];

const SportsPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Sports Facilities
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
                    <section className="text-gray-700 leading-relaxed space-y-4">
                        {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                    </section>

                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-lg text-gray-800">Outdoor games:</h3>
                                <p className="text-gray-700">{gamesList.outdoor}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800">Indoor games:</h3>
                                <p className="text-gray-700">{gamesList.indoor}</p>
                            </div>
                        </div>
                    </section>

                    <section className="border-t pt-8">
                        <MediaCarousel slides={gallerySlides} />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SportsPage;