// src/pages/facilities/AstronomyPage.jsx

import React from 'react';
import MediaCarousel from '../../components/MediaCarousel';

// Reusable component for section titles and content
const InfoSection = ({ title, children }) => (
    <section className="py-6 border-b last:border-b-0">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
            {children}
        </div>
    </section>
);

// --- Data for the Astronomy Page ---
const introduction = "It is a need of the day to popularize Astronomy and Space science in Marathwada region... The center is established with this thought in mind and is named as Mahatma Gandhi Mission's Centre for Astronomy and Space Technology (CAST).";
const awardInfo = "During International Astronomy Year 2009 centre was participated in seven International events and won second prize in ‘Most complete Astronomy club, group, or society member participation’ category of “100 Hours of Astronomy” event. For this event 2308 Centers were participated from 105 countries around the globe.";
const objectives = [
    "To provide a centre for excellence for teaching, research and development in Astronomy and Space Technology.",
    "To organize different orientation courses / workshops for school & University level in Astronomy & Space Technology",
    "To undertake advanced level research in current topics as well as programs for science popularization.",
    "To encourage & undertaking of collaborative research programs by its core academic members with scientists in India and other countries."
];
const facilities = [
    "14” MEADE LX 200 GPS – Fully Automated Astronomical Telescope with Imaging System",
    "Badder and H-Alpha Solar Telescope for Sun observation",
    "NanoMetrix – Digital Seismograph for monitoring swarm earthquake activities.",
    "Davis Pro Advanced Automated Weather Station for monitoring real time 15 weather parameters of Nanded city"
];
const workDone = [
    "Keeping Daily Meteorological data - (Max – Min Temp, Max – Min Humidity and Rainfall) of Nanded city from last 14 years.",
    "Short and Long term Weather forecasting and analysis of metrological events at Marathwada level and made available for news paper for public outreach.",
    "Research on Sun – Earth relation & Solar Sunspots Impact on Earth’s Climate. (Forecasting in year 2008 about Little Ice is coming on Earth)",
    "Designing and Development of Lightning Instruments (Lightning Radar and Electric Field Mill) in CAST Centre.",
    "Students worked for their final year projects on various new ideas."
];
const mainActivities = [
    "Vigyan Prasar (Govt Of India) sponsored “National Orientation Workshop on Transit of Venus” was Organised by CAST centre during 11 to 13 May 2012 (55 Participants from Madhya Pradesh, Gujarat and Maharashtra were registered)",
    "TOV Expedition: Observed Transit of Venus on 06th June 2012 from Pachmarhi (MP)",
    "An informative Exhibition on MARS ORBITER MISSION INSERSION IN MARS ORBIT was organized at Centre during 21 to 24 September 2014",
    "Participated in International Geminid Meteor Shower on 17-18 Nov. 2014 from Patnoor as per International Meteor Organisation, Germany."
];

const gallerySlides = [
    { imageSrc: "/images/astronomy/astro1.png", title: "Dr. Sachin Naravdiya, Scientist", subtitle: "Observing Solar flairs in H-Alpha Solar Telescope" },
    { imageSrc: "/images/astronomy/astro2.png", title: "Public Observation", subtitle: "Seeing Planets and Moon features through 14” LX200 MEADE telescope" },
    { imageSrc: "/images/astronomy/astro3.png", title: "Night sky observation session" },
    { imageSrc: "/images/astronomy/astro4.png", title: "Exhibition Inauguration", subtitle: "“Mission Comet ISON” by Director Dr. Mrs. Geeta S. Lathkar" },
    { imageSrc: "/images/astronomy/astro5.png", title: "Advanced Weather Station Inauguration", subtitle: "By Shri. Dheeraj Kumar, District Collector, Nanded" },
];


const AstronomyPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Astronomy and Space Technology
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <InfoSection title="Center for Astronomy and Space Technology - The CAST">
                        <p>{introduction}</p>
                        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                            <h3 className="font-bold text-yellow-800">GLOBAL AWARD WINNING CENTRE</h3>
                            <p className="text-yellow-700">{awardInfo}</p>
                        </div>
                    </InfoSection>

                    <InfoSection title="Objectives"><ul className="list-disc list-inside space-y-2">{objectives.map((item, index) => <li key={index}>{item}</li>)}</ul></InfoSection>
                    <InfoSection title="Facilities at Centre"><ul className="list-disc list-inside space-y-2">{facilities.map((item, index) => <li key={index}>{item}</li>)}</ul></InfoSection>
                    <InfoSection title="Work Done by the Centre"><ol className="list-decimal list-inside space-y-2">{workDone.map((item, index) => <li key={index}>{item}</li>)}</ol></InfoSection>
                    <InfoSection title="Main Activities (2009-2014)"><ul className="list-disc list-inside space-y-2">{mainActivities.map((item, index) => <li key={index}>{item}</li>)}</ul></InfoSection>

                    <InfoSection title="Gallery">
                        <MediaCarousel slides={gallerySlides} />
                    </InfoSection>
                </div>
            </div>
        </div>
    );
};

export default AstronomyPage;