// src/pages/students-corner/EnglishLanguageClubPage.jsx

import React from 'react';

// Reusable component for section titles
const SectionTitle = ({ children }) => (
    <h2 className="text-2xl font-bold text-indigo-800 mb-4">{children}</h2>
);

// Reusable component for styled lists
const InfoList = ({ items }) => (
    <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
);

// --- Data for the English Language Club Page ---
const introduction = "English Language Club - the linguist was inaugurated on 24th October 2013 by Hon’ble director of MGM’s College of Engineering , Nanded Dr. Mrs. Geeta Lathkar. ELC wall magazine was inaugurated by the auspicious hands of Hon’ble chairman of MGM Mr. Kamalkishor Kadam on 1st May 2014.";

const objectives = [
    "To make students aware of importance of English.",
    "To create English speaking environment in college campus.",
    "To provide platform to students for the development of Communication Skills.",
    "To enhance students’ English knowledge.",
    "To help them to gain stage courage through different activities."
];

const activitiesConducted = [
    "Grammar test competition.",
    "Speech competition.",
    "Logo competition.",
    "Essay competition."
];

const futureActivities = [
    "Speech competition.",
    "Group discussion.",
    "Role play.",
    "Extempore.",
    "Debate.",
    "Vocabulary test.",
    "Grammar test.",
    "PPT Presentation (Non-technical)."
];

const boardMembers = [
    "Mr. Somwanshi Chandankumar J. (President).",
    "Kabra Mansi (Vice-president).",
    "Dharmadhikari Ashish M.(Secretary).",
    "Deshpande Swarup P.(Treasurer).",
    "Deshmukh Jayanti (Board member).",
    "Swami Swarnil (Board member).",
    "Hanwate Avinash (Board member).",
    "Sharma Kartik (Board member).",
    "Kendhe Aditya (Board member).",
    "Ghuge Priyanka (Board member).",
    "Labhshetwar Vaishnavi (Board member).",
    "Tanurkar Sayali (Board member).",
    "Chandnani Monika (Board member)."
];


const EnglishLanguageClubPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            English Language Club
          </h1>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">The Linguist Establishment</h2>
            <p className="text-gray-700 leading-relaxed">{introduction}</p>
          </section>

          <section>
            <SectionTitle>Objectives of ELC</SectionTitle>
            <InfoList items={objectives} />
          </section>

          <section>
            <SectionTitle>Activities conducted by ELC</SectionTitle>
            <InfoList items={activitiesConducted} />
          </section>

          <section>
            <SectionTitle>Activities to be conducted during the academic year 2014-15</SectionTitle>
            <InfoList items={futureActivities} />
          </section>
          
          <section>
            <SectionTitle>Structure of Board Members of ELC</SectionTitle>
            <InfoList items={boardMembers} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default EnglishLanguageClubPage;