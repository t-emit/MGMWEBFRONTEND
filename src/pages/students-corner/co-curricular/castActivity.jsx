// src/pages/students-corner/CastActivityPage.jsx

import React from 'react';
import MediaCarousel from '../../../components/MediaCarousel';

// --- Reusable Section Component for consistent styling ---
const Section = ({ title, children }) => (
    <section className="border-t pt-8">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
            {children}
        </div>
    </section>
);

// --- Data for the CAST Activity Page ---
const introduction = "It is a need of the day to popularize Astronomy and Space science in place like Marathwada region. No such type of center exists in this region at present... This center plays vital role in promoting amateur astronomers for their observations and development of scientific temper among common people... The center has been established with this thought and named as Mahatma Gandhi Mission's Center for Astronomy and Space Technology (CAST).";
const awardInfo = "During International Astronomy Year 2009 MGM’s CAST Center participated in seven International events and won second prize in ‘Most complete Astronomy club, group, or society member participation’ category of “100 Hours of Astronomy” event. 2308 Centers of 105 countries around the globe had participated in this event.";
const objectives = [
    "To provide a Center for excellence for teaching, research and development in Astronomy and Space Technology.",
    "To organize School & University level orientation courses / workshops in Astronomy & Space Technology",
    "To undertake advanced level research in current topics as well as programs for science popularization.",
    "To encourage & undertake collaborative research programs with scientists in India and abroad",
];
const facilities = [
    "14” MEADE LX 200 GPS – Fully Automated Astronomical Telescope with Imaging System",
    "Badder and H-Alpha Solar Telescope for Sun observation",
    "NanoMetrix – Digital Seismograph for monitoring swarm earthquake activities.",
    "Davis Pro Advanced Automated Weather Station for monitoring real time 15 weather parameters of Nanded city",
];
const workDone = [
    "Keeping Daily Meteorological data -(Max – Min Temp, Max – Min Humidity and Rainfall) of Nanded city from last 15 years.",
    "Short and Long term Weather forecasting and analysis of metrological events at Marathwada level and made available for newspaper for public outreach.",
    "Research on Sun – Earth Space Relation & Solar Sunspots Impact on Earth’s Climate.(Forecasting in year 2008 about Little Ice is coming on Earth)",
    "Designing and Development of Lightning Instruments (Lightning Radar and Electric Field Mill) in CAST Center.",
    "Students worked for their final year projects on various new ideas.",
];

const mainActivitiesSlides = [
    { imageSrc: '/images/cast/image1.jpg', title: 'Late Prof. Narayan Chandra Rana Memorial Observatory', subtitle: 'Night view' },
    { imageSrc: '/images/cast/image2.jpg', title: 'Dr. Sachin Naravdiya, Scientist', subtitle: 'Observing Solar flairs in H-Alpha Solar Telescope' },
    { imageSrc: '/images/cast/image3.jpg', title: 'Observing Planets and Moon', subtitle: 'Through 14” LX200 MEADE telescope' },
    { imageSrc: '/images/cast/image4.jpg', title: 'Night sky observation session' },
    { imageSrc: '/images/cast/image5.jpg', title: 'Inauguration of “Mission Comet ISON” Exhibition', subtitle: 'By Director Dr. Mrs. Geeta S. Lathkar' },
    { imageSrc: '/images/cast/image6.jpg', title: 'Inauguration of Advanced Weather Station', subtitle: 'By Shri. Dheeraj Kumar, District Collector, Nanded' },
];

const activities2015_16 = {
    title: "Activities conducted during Year 2015-16",
    activities: [
        "Geminid Meteor Shower Observation carried out from Barul & Patnur on 13th -14th December 2015",
        "Five Planets (Mercury, Venus, Mars, Jupiter and Saturn) Public Observation session on 02nd -03rd February 2016",
        "Seventeenth Foundation day of CAST Center celebrated on 14th February 2016",
        "Partial Solar Eclipse observed from Observatory on 09th March 2016",
        "Adlebaran Occutation was observed on 14th March 2016",
        "“Eratosthenes experiment” to measure Earths Circumference carried out on 21st March 2016",
        "Penumbral Lunar Eclipse was observed on 23 March 2016",
        "Transit of Mercury was observed on 09th May 2016",
    ],
   
};
// --- THIS IS THE NEW COMBINED ARRAY FOR THE CAROUSEL ---
const activities2015_16_slides = [
    // Geminid Meteor Shower
    { imageSrc: '/images/cast/image7.jpg', title: "Geminid Meteor Shower Observation" }, 
    { imageSrc: '/images/cast/image8.jpg', title: "Geminid Meteor Shower Observation" },
    // Five Planets
    { imageSrc: '/images/cast/image9.jpg', title: "Five Planets Public Observation" },
    { imageSrc: '/images/cast/image10.jpg', title: "Five Planets Public Observation" },
    // Foundation Day
    { imageSrc: '/images/cast/image11.jpg', title: "Seventeenth Foundation day of CAST Center" },
    // Partial Solar Eclipse
    { imageSrc: '/images/cast/image12.jpg', title: "Partial Solar Eclipse Observation" },
    // Adlebaran Occutation
    { imageSrc: '/images/cast/image13.jpg', title: "Adlebaran Occutation" },
    { imageSrc: '/images/cast/image14.jpg', title: "Adlebaran Occutation" },
    { imageSrc: '/images/cast/image15.jpg', title: "Adlebaran Occutation" },
    { imageSrc: '/images/cast/image16.jpg', title: "Adlebaran Occutation" },
    { imageSrc: '/images/cast/image17.jpg', title: "Adlebaran Occutation" },
    // Eratosthenes experiment
    { imageSrc: '/images/cast/image18.jpg', title: "Eratosthenes experiment" },
    { imageSrc: '/images/cast/image19.jpg', title: "Eratosthenes experiment" },
    // Penumbral Lunar Eclipse
    { imageSrc: '/images/cast/image20.jpg', title: "Penumbral Lunar Eclipse", aspectRatio: '16/9' }, // Wide image
    // Transit of Mercury
    { imageSrc: '/images/cast/image21.jpg', title: "Transit of Mercury", aspectRatio: '16/9' }, // Wide image
    { imageSrc: '/images/cast/image22.jpg', title: "Transit of Mercury" },
];
// In CastActivityPage.jsx, add this new constant

const mainActivitiesList = [
    "Vigyan Prasar (Govt Of India) sponsored “National Orientation Workshop on Transit of Venus” was Organised by CAST Center during 11 to 13 May 2012 (55 Participants from Madhya Pradesh, Gujarat and Maharashtra were registered)",
    "TOV Expedition: Observed Transit of Venus on 06th June 2012 from Pachmarhi (MP)",
    "An informative Exhibition on MARS ORBITER MISSION INSERSION IN MARS ORBIT was organized at Center during 21 to 24 September 2014",
    "Participated in International Geminid Meteor Shower on 15 Dec. 2015 from Patnoor as per International Meteor Organisation, Germany.",
];

const CastActivityPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            CAST Activity
          </h1>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg space-y-12">
            <Section title="Introduction">
                <p>{introduction}</p>
                <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                    <h3 className="font-bold text-yellow-800">GLOBAL AWARD WINNING CENTER</h3>
                    <p className="text-yellow-700">{awardInfo}</p>
                </div>
            </Section>

            <Section title="Objectives">
                <ol className="list-decimal list-inside space-y-2">{objectives.map((item, index) => <li key={index}>{item}</li>)}</ol>
            </Section>

            <Section title="Facilities at Center">
                <ol className="list-decimal list-inside space-y-2">{facilities.map((item, index) => <li key={index}>{item}</li>)}</ol>
            </Section>

            <Section title="Work Done by the Center">
                <ol className="list-decimal list-inside space-y-2">{workDone.map((item, index) => <li key={index}>{item}</li>)}</ol>
            </Section>

            <Section title="Main Activities Conducted (2009-2015)">
    <ol className="list-decimal list-inside space-y-2">
        {mainActivitiesList.map((item, index) => <li key={index}>{item}</li>)}
    </ol>
                <MediaCarousel slides={mainActivitiesSlides} />
            </Section>

           
<Section title={activities2015_16.title}>
    {/* The list of activities remains the same */}
    <ol className="list-decimal list-inside space-y-2 mb-8">
        {activities2015_16.activities.map((item, index) => <li key={index}>{item}</li>)}
    </ol>

    {/* --- THIS IS THE UPDATED PART --- */}
    {/* Replace the old mapping with a single MediaCarousel */}
    <MediaCarousel slides={activities2015_16_slides} />
</Section>
        </div>
      </div>
    </div>
  );
};

export default CastActivityPage;