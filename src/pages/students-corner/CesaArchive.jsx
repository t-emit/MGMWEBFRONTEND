// src/pages/students-corner/CesaArchive.jsx

import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import EventDetail from './Eventdetail'; // Import our new event component

// --- Data extracted from the HTML ---

const officeBearers = [
  { title: "CESA Faculty Coordinator", person: "Mr.Aniket A. Bhore, Assistant Professor, Department of Civil Engineering" },
  { title: "CESA Student Co-ordinator", person: "Mr.Pranav Rakhewar, B.Tech Civil Engg." },
  { title: "CESA Vice President", person: "Mr.Rahul Shivlad, TY B.Tech Civil Engg." },
];

const studentCouncil = [
  { name: "Mr.Pranav Rakhewar (FY)", responsibility: "President" },
  { name: "Mr.Rahul Shivlad (TY)", responsibility: "Vice president" },
  { name: "Mr. Mohd. Faizan (TY)", responsibility: "Secretary" },
  { name: "Mr.Ritesh Berje (TY)", responsibility: "Treasurer" },
  { name: "Miss Rutuja Kotgire (FY)", responsibility: "Ladies Representative." },
  { name: "Miss Tejaswini Girgoankar(TY)", responsibility: "Member" },
  { name: "Miss Pallavi Jogdand (SY)", responsibility: "Member" },
  { name: "Miss Pallavi Gadekar (SY)", responsibility: "Member" },
];

const eventsOrganized = [
    { name: "Cricket competition", participants: "45", date: "02-March 2023", coordinator: "Mr.Pranav Rakhewar" },
    { name: "Carrom Competition", participants: "25", date: "04-March 2023", coordinator: "Ms.Swati Mahore" },
    { name: "Chess Competition", participants: "20", date: "05-March 2023", coordinator: "Mr.Rahul Shivlad" },
    { name: "Essay competition", participants: "9", date: "15-September 2022", coordinator: "Mr.Ritesh Berje" },
    { name: "Model making competition", participants: "9", date: "16-September 2022", coordinator: "Mr.Harshwardhan Hambarde" },
    { name: "Technical Rangoli competition", participants: "11", date: "15-September 2022", coordinator: "Ms.Rutuja Kodgire" },
    { name: "Technical Quiz competition", participants: "89", date: "16-September 2022", coordinator: "Mr.Mohd.Kamran" },
    { name: "Poster competition", participants: "13", date: "16-September 2022", coordinator: "Ms.Pallavi Jogdand" },
    { name: "Traffic awareness program", participants: "49", date: "13-Jan 2023", coordinator: "Mr.Rahul Shivlad" },
    { name: "Music & instrumental program", participants: "30", date: "02-Oct 2022", coordinator: "Mr.Pranav Rakhewar" },
];

const eventsDetails = [
  {
    title: "1) Cricket Tournament",
    description: ["An Inter-Department Cricket Tournament kickstarted on 1st March 2023 at MGM College of Engineering Sports ground, organized by the Student Council. The college is all set to throw a huge extracurricular Cricket Tournament with several matches lined up. The first match was inaugurated at around 11:30 am by the dignitaries of the college which included the Vice Principal, HOD, and several others. The first match was set between B.Tech Final year students with TY Students out of which TY B.Tech Civil stood as the winner."],
    images: [
      { src: "/images/cesa/cesa-img-2.jpg" },
      { src: "/images/cesa/cesa-img-3.jpg" }
    ],
    resultsTable: {
      title: "Cricket Tournament Result",
      headers: ["Sr. No.", "Participant names", "Prize"],
      rows: [
        [{ content: "1" }, { content: "Mohammad Kamran" }, { content: <p className="text-center">Winner Team Members</p>, rowSpan: 11 }],
        ["2", "Damkondwar Santosh"], ["3", "Quazi Majeeduddin"], ["4", "Nikhil sumthankar"], ["5", "Shaikh Gufran"], ["6", "Swami sairaj"], ["7", "Siddiqui Aadil"], ["8", "Katore Subash"], ["9", "Lakshmikant deshmukh"], ["10", "Mohammad Azhar"], ["11", "vishal shete"],
        [{ content: "1" }, { content: "Chandapure Ganesh" }, { content: <p className="text-center">Runner-Up Team Members</p>, rowSpan: 11 }],
        ["2", "Rakhewar Pranav"], ["3", "Shivlad Rahul"], ["4", "Berje ritesh"], ["5", "madhav narlewad"], ["6", "ajit deshmukh"], ["7", "vaibhav chodry"], ["8", "vikas pawar"], ["9", "sidishwar"], ["10", "dev darlwad"], ["11", "shivaji wathore"],
      ]
    }
  },
  {
    title: "2) Carrom Tournament",
    description: ["CESA Club organized an Inter-Department \"Carrom Tournament.\" The event showcased the sporting spirit of the institution, with 43 students participating enthusiastically. The tournament took place from 01 March to 4th March 2023, culminating in a grand final. The batch of students in each batch 2 students are there for the competition and if that batch wins they will be selected for the next round and the process is going on until we get the winners."],
    images: [
        { src: "/images/cesa/cesa-img-4.jpg", caption: "Semifinal match Men’s single" },
        { src: "/images/cesa/cesa-img-5.jpg" },
        { src: "/images/cesa/cesa-img-6.jpg", caption: "Final Carrom Match Men’s single" },
    ],
    resultsTable: {
        title: "Carrom Tournament",
        headers: ["Sr. No.", "Participant", "Result"],
        rows: [
            ["1", "Damkondwar Santosh", "(Winner)"],
            ["2", "Madhapure Prerna", "(Runner-up)"],
        ]
    }
  },
  {
    title: "3) Chess Competition",
    description: [
        "The Chess tournament organized by the CESA from 1 March to 4 March 2022 was an exemplary success with the participation of around 33 pupils. It showcased exceptional strategic thinking and sportsmanship, fostering a competitive yet friendly atmosphere. Participants displayed their skills with intense matches and moments of brilliance. It was a successful event that highlighted the intellectual and competitive spirit within the college community, promoting the game of chess as a platform for personal growth and camaraderie."
    ],
    images: [
        { src: "/images/cesa/cesa-img-7.jpg" },
        { src: "/images/cesa/cesa-img-8.jpg" },
        { src: "/images/cesa/cesa-img-9.jpg", caption: "Chess match Quarterfinal & Semi final" }
    ],
    resultsTable: {
        title: "Chess Competition",
        headers: ["Sr. No.", "Participant", "Result"],
        rows: [
            ["1", "Shivlad Rahul", "(Winner)"],
            ["2", "Damkondwar Santosh", "(Runner-up)"],
        ]
    }
  },
  {
    title: "4) Essay Competition",
    description: [
        "As part of Engineers Day Celebration, CESA conducted an Essay Writing Competition on 15th September 2023 on the topic “Role of Civil Engineer in Society”."
    ],
    images: [
        { src: "/images/cesa/cesa-img-10.jpg" },
        { src: "/images/cesa/cesa-img-11.jpg" }
    ],
    resultsTable: {
        title: "Essay Competition",
        headers: ["Sr. No.", "Participant", "Result"],
        rows: [
            ["1", "Panpatte Shriniwas", "(Winner)"],
            ["2", "Ambekar Vyankatesh", "(Runner-up)"],
        ]
    }
  },
  {
    title: "5) Model Making Competition",
    description: [], // No description paragraph provided
    images: [
        { src: "/images/cesa/cesa-img-12.jpg" },
        { src: "/images/cesa/cesa-img-13.jpg" },
        { src: "/images/cesa/cesa-img-14.jpg" }
    ],
    resultsTable: {
        title: "Model Making Competition",
        headers: ["Sr. No.", "Participant", "Result"],
        rows: [
            ["1", "Kadam Janhavi", "(Winner)"],
            ["2", "Group of Mohd Shaoib, Shaikh Naved, Aadil Ali, Sayed Misbahuddin", "(Runner-up)"],
        ]
    }
  },
  {
    title: "6) Technical Rangoli Competition",
    description: [
        "Organizing Rangoli competition events helps students to remain in close touch with their culture. This Rangoli-making competition motivated the students to perform and outshine their creative skills and most importantly, work as a team to bring laurels to their house. The purpose of rangoli is beyond decoration and creating a technical concept through the mind-sets of the brain among the students."
    ],
    images: [
        { src: "/images/cesa/cesa-img-15.jpg", caption: "Students explaining concept of Technical Rangoli" },
        { src: "/images/cesa/cesa-img-16.jpg", caption: "Preparation of Technical Rangoli" },
        { src: "/images/cesa/cesa-img-17.jpg" },
        { src: "/images/cesa/cesa-img-18.jpg", caption: "Guest visit to Technical Rangoli Event" },
        { src: "/images/cesa/cesa-img-19.jpg" },
        { src: "/images/cesa/cesa-img-20.jpg" },
        { src: "/images/cesa/cesa-img-21.jpg" },
        { src: "/images/cesa/cesa-img-22.jpg" },
    ],
    resultsTable: null // No results table for this event
  },
  {
    title: "7) Traffic Awareness",
    description: [
        "The traffic awareness program aims to create awareness about traffic, rules, and safety on the road among the students and citizens of Nanded City with the collaboration of the Traffic Department Nanded. It aims to educate people about road safety so that injuries, deaths and other casualties that may occur due to transport can be reduced."
    ],
    images: [
        { src: "/images/cesa/cesa-img-23.jpg" },
        { src: "/images/cesa/cesa-img-24.jpg" },
        { src: "/images/cesa/cesa-img-25.jpg" },
        { src: "/images/cesa/cesa-img-26.jpg" },
        { src: "/images/cesa/cesa-img-27.jpg" },
        { src: "/images/cesa/cesa-img-28.jpg" },
    ],
    resultsTable: null // No results table for this event
  },
  {
    title: "8) Musical & Instrumental Competition",
    description: [
        "A music competition is a event designed to identify and award outstanding musical ensembles, soloists, composers, conductors and musicologists."
    ],
    images: [
        { src: "/images/cesa/cesa-img-30.jpg", aspectRatio: '16/9' },
        { src: "/images/cesa/cesa-img-31.jpg", aspectRatio: '16/9' },
        { src: "/images/cesa/cesa-img-32.jpg" , aspectRatio: '16/9'},
    ],
    resultsTable: null // No results table for this event
  }
  
  // ... You can continue this pattern for all other events (Chess, Essay, etc.)
];

const CesaArchive = () => {
  return (
    <div className="p-4 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">CESA Archive</h2>
        <p className="text-md text-gray-600">(Civil Engineering Students Association)</p>
      </div>

      {/* --- Initial Info Section --- */}
      <section>
        <h3 className="text-xl font-semibold text-indigo-800 mb-2">About CESA</h3>
        <p className="text-gray-700 leading-relaxed">Civil Engineering Student’s Association (CESA) is an association of students, for the students, and by the students. CESA provides a platform for students to plan, organize, and execute various activities, to exchange ideas by organizing/participating in technical programs. CESA prepares the plan of curricular and extra-curricular activities to be conducted in each academic Year. It is formed to motivate students to participate and development of extra skills other than academics.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-indigo-800 mb-2">CESA Vision</h3>
        <p className="text-gray-700 leading-relaxed">To create, promote, plan, organize, and execute the curricular & extracurricular activities in the interest of student development.</p>
        </section>
        <section>
        <h3 className="text-xl font-semibold text-indigo-800 mb-2">CESA Mission</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>To provide a platform for regular and frequent discussions and exchange of views among students.</li>
            <li>To provide opportunities for students to develop their leadership and organizational qualities.</li>                   
            <li>To develop students’ academic, professional, and personality development skills through various programs, and activities arranged by association.</li>
            <li>To create awareness amongst the students about professional societies, encouraging them to be a member of these societies</li>
        </ul>
        </section>
      {/* Office Bearers, Tables, etc. */}
      <section>
        <h3 className="text-xl font-semibold text-indigo-800 mb-4">CESA Office Bearers:</h3>
        <ul className="space-y-2 text-gray-700 list-none pl-0">
            {officeBearers.map((bearer, index) => (
                <li key={index} className="flex items-start"><FaChevronRight className="text-indigo-500 mt-1 mr-3 flex-shrink-0" /><span><strong>{bearer.title}:</strong> {bearer.person}</span></li>
            ))}
        </ul>
      </section>

      <section>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Year</th>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Student Council</th>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Responsibility</th>
              </tr>
            </thead>
            <tbody>
              {studentCouncil.map((member, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  {index === 0 && <td rowSpan={studentCouncil.length} className="border border-gray-300 p-3 font-medium align-middle text-center">2022-2023</td>}
                  <td className="border border-gray-300 p-3">{member.name}</td>
                  <td className="border border-gray-300 p-3">{member.responsibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex justify-center mt-8">
        <img src="/images/cesa/cesa-img-1.jpg" alt="CESA Members 2022-2023" className="max-w-xl w-full rounded-lg shadow-xl border-4 border-white"/>
      </section>

      {/* --- Events Organized Table --- */}
      <section>
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">Events Organized by CESA in the Academic Year (2022–23):</h3>
          <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                      <tr>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Name of Event</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">No. of participants</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Date</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Name of Coordinator</th>
                      </tr>
                  </thead>
                  <tbody>
                      {eventsOrganized.map((event, index) => (
                          <tr key={index} className="odd:bg-white even:bg-gray-50">
                              <td className="border border-gray-300 p-3">{event.name}</td>
                              <td className="border border-gray-300 p-3">{event.participants}</td>
                              <td className="border border-gray-300 p-3">{event.date}</td>
                              <td className="border border-gray-300 p-3">{event.coordinator}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </section>

      {/* --- Detailed Event Descriptions --- */}
      <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Academic year 2022-23 Event Details</h2>
          {eventsDetails.map((event, index) => (
              <EventDetail key={index} event={event} />
          ))}
      </div>

    </div>
  );
};

export default CesaArchive;