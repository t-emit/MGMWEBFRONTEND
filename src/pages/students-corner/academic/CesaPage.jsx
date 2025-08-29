// src/pages/students-corner/CesaPage.jsx

import React from 'react';
import AccordionItem from '../../../components/AccordinItem';
import MediaCarousel from '../../../components/MediaCarousel'; // Using the advanced carousel
import { FaChevronRight } from 'react-icons/fa';

// --- Data for the entire CESA page, all in one place ---

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
const CricketTournamenResult=[
    { SrNo: "1", Participantsnames: "Mohammad Kamran", Prize: "Winner Team Members" },
]
// Data for the image carousels
const eventGalleries = {
  cricket: {
    title: "1) Cricket Tournament",
    description:"An Inter-Department Cricket Tournament kickstarted on 1st March 2023 at MGM College of Engineering Sports ground, organized by the Student Council. The college is all set to throw a huge extracurricular Cricket Tournament with several matches lined up. The first match was inaugurated at around 11:30 am by the dignitaries of the college which included the Vice Principal, HOD, and several others. The first match was set between B.Tech Final year students with TY Students out of which TY B.Tech Civil stood as the winner.",
    slides: [
      { imageSrc: "/images/cesa/cesa-img-2.jpg", title: "Cricket Tournament" },
      { imageSrc: "/images/cesa/cesa-img-3.jpg", title: "Cricket Tournament" }
    ],
  resultsTable: {
          headers: ["Sr. No.", "Participant names", "Prize"],
          rows: [
            { srNo: 1, name: "Mohammad Kamran", prize: { text: "Winner Team Members", rowSpan: 11 } },
            { srNo: 2, name: "Damkondwar Santosh" },
            { srNo: 3, name: "Quazi Majeeduddin" },
            { srNo: 4, name: "Nikhil sumthankar" },
            { srNo: 5, name: "Shaikh Gufran" },
            { srNo: 6, name: "Swami sairaj" },
            { srNo: 7, name: "Siddiqui Aadil" },
            { srNo: 8, name: "Katore Subash" },
            { srNo: 9, name: "Lakshmikant deshmukh" },
            { srNo: 10, name: "Mohammad Azhar" },
            { srNo: 11, name: "vishal shete" },
            { srNo: 1, name: "Chandapure Ganesh", prize: { text: "Runner-Up Team Members", rowSpan: 11 } },
            { srNo: 2, name: "Rakhewar Pranav" },
            { srNo: 3, name: "Shivlad Rahul" },
            { srNo: 4, name: "Berje ritesh" },
            { srNo: 5, name: "madhav narlewad" },
            { srNo: 6, name: "ajit deshmukh" },
            { srNo: 7, name: "vaibhav chodry" },
            { srNo: 8, name: "vikas pawar" },
            { srNo: 9, name: "sidishwar" },
            { srNo: 10, name: "dev darlwad" },
            { srNo: 11, name: "shivaji wathore" },
          ]
        }
      },
      
  carrom: {
    title: "2) Carrom Tournament",
    description:"CESA Club organized an Inter-Department Carrom Tournament. The event showcased the sporting spirit of the institution, with 43 students participating enthusiastically. The tournament took place from 01 March to 4th March 2023, culminating in a grand final. The batch of students in each batch 2 students are there for the competition and if that batch wins they will be selected for the next round and the process is going on until we get the winners.",
    slides: [
      { imageSrc: "/images/cesa/cesa-img-4.jpg", title: "Carrom Tournament", subtitle: "Semifinal match Men’s single" },
      { imageSrc: "/images/cesa/cesa-img-5.jpg", title: "Carrom Tournament" },
      { imageSrc: "/images/cesa/cesa-img-6.jpg", title: "Carrom Tournament", subtitle: "Final Carrom Match Men’s single" },
    ],
  resultsTable: {
          headers: ["Sr. No.", "Participant", "Result"],
          rows: [
            { srNo: 1, name: "Damkondwar Santosh", result: "(Winner)" },
            { srNo: 2, name: "Madhapure Prerna", result: "(Runner-up)" },
          ]
        }
      },
  chess: {
    title: "3) Chess Competition",
    description:"The Chess tournament organized by the CESA from 1 March to 4 March 2022 was an exemplary success with the participation of around 33 pupils. It showcased exceptional strategic thinking and sportsmanship, fostering a competitive yet friendly atmosphere. Participants displayed their skills with intense matches and moments of brilliance. It was a successful event that highlighted the intellectual and competitive spirit within the college community, promoting the game of chess as a platform for personal growth and camaraderie.",
    slides: [
      { imageSrc: "/images/cesa/cesa-img-7.jpg", title: "Chess Competition" },
      { imageSrc: "/images/cesa/cesa-img-8.jpg", title: "Chess Competition" },
      { imageSrc: "/images/cesa/cesa-img-9.jpg", title: "Chess Competition", subtitle: "Quarterfinal & Semi final" }
    ],
  resultsTable: {
            headers: ["Sr. No.", "Participant", "Result"],
            rows: [
                { srNo: 1, name: "Shivlad Rahul", result: "(Winner)" },
                { srNo: 2, name: "Damkondwar Santosh", result: "(Runner-up)" },
            ]
        }
      },
  essay: {
    title: "4) Essay Competition",
    description:"As part of Engineers Day Celebration, CESA conducted an Essay Writing Competition on 15th September 2023 on the topic Role of Civil Engineer in Society.",
    slides: [
        { imageSrc: "/images/cesa/cesa-img-10.jpg" },
        { imageSrc: "/images/cesa/cesa-img-11.jpg" }
    ],
  resultsTable: {
            headers: ["Sr. No.", "Participant", "Result"],
            rows: [
                { srNo: 1, name: "Panpatte Shriniwas", result: "(Winner)" },
                { srNo: 2, name: "Ambekar Vyankatesh", result: "(Runner-up)" },
            ]
        }
      },
  modelMaking: {
    title: "5) Model Making Competition",
    slides: [
        { imageSrc: "/images/cesa/cesa-img-12.jpg" },
        { imageSrc: "/images/cesa/cesa-img-13.jpg" },
        { imageSrc: "/images/cesa/cesa-img-14.jpg" }
    ],
    resultsTable: {
            headers: ["Sr. No.", "Participant", "Result"],
            rows: [
                { srNo: 1, name: "Kadam Janhavi", result: "(Winner)" },
                { srNo: 2, name: "Group of Mohd Shaoib, Shaikh Naved, Aadil Ali, Sayed Misbahuddin", result: "(Runner-up)" },
            ]
        }
  },
  rangoli: {
    title: "6) Technical Rangoli Competition",
    description:"Organizing Rangoli competition events helps students to remain in close touch with their culture. This Rangoli-making competition motivated the students to perform and outshine their creative skills and most importantly, work as a team to bring laurels to their house. The purpose of rangoli is beyond decoration and creating a technical concept through the mind-sets of the brain among the students.",
    slides: [
        { imageSrc: "/images/cesa/cesa-img-15.jpg", title: "Technical Rangoli", subtitle: "Students explaining concept" },
        { imageSrc: "/images/cesa/cesa-img-16.jpg", title: "Technical Rangoli", subtitle: "Preparation" },
        { imageSrc: "/images/cesa/cesa-img-17.jpg" },
        { imageSrc: "/images/cesa/cesa-img-18.jpg", title: "Technical Rangoli", subtitle: "Guest visit" },
        { imageSrc: "/images/cesa/cesa-img-19.jpg" },
        { imageSrc: "/images/cesa/cesa-img-20.jpg" },
        { imageSrc: "/images/cesa/cesa-img-21.jpg" },
        { imageSrc: "/images/cesa/cesa-img-22.jpg" },
    ]
  },
  traffic: {
    title: "7) Traffic Awareness",
    description:"The traffic awareness program aims to create awareness about traffic, rules, and safety on the road among the students and citizens of Nanded City with the collaboration of the Traffic Department Nanded. It aims to educate people about road safety so that injuries, deaths and other casualties that may occur due to transport can be reduced.",
    slides: [
        { imageSrc: "/images/cesa/cesa-img-23.jpg" },
        { imageSrc: "/images/cesa/cesa-img-24.jpg" },
        { imageSrc: "/images/cesa/cesa-img-25.jpg" },
        { imageSrc: "/images/cesa/cesa-img-26.jpg" },
        { imageSrc: "/images/cesa/cesa-img-27.jpg" },
        { imageSrc: "/images/cesa/cesa-img-28.jpg" },
    ]
  },
  musical: {
    title: "8) Musical & Instrumental Competition",
    description:"A music competition is a event designed to identify and award outstanding musical ensembles, soloists, composers, conductors and musicologists.",
    slides: [
        { imageSrc: "/images/cesa/cesa-img-30.jpg", aspectRatio: '16/9' },
        { imageSrc: "/images/cesa/cesa-img-31.jpg", aspectRatio: '16/9' },
        { imageSrc: "/images/cesa/cesa-img-32.jpg" , aspectRatio: '16/9'},
    ]
  }
};


// A small, internal component for the archive content
const CesaArchiveContent = () => {
    return (
        <div className="p-4 space-y-12">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">CESA Archive</h2>
                <p className="text-md text-gray-600">(Civil Engineering Students Association)</p>
            </div>
            <section>
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">About CESA</h3>
                <p className="text-gray-700 leading-relaxed">Civil Engineering Student’s Association (CESA) is an association of students, for the students, and by the students. CESA provides a platform for students to plan, organize, and execute various activities, to exchange ideas by organizing/participating in technical programs. CESA prepares the plan of curricular and extra-curricular activities to be conducted in each academic Year. It is formed to motivate students to participate and development of extra skills other than academics.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">CESA Vision</h3>
              <p className="text-gray-700 leading-relaxed">To create, promote, plan, organize, and execute the curricular & extracurricular activities in the interest of student development.</p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">CESA Mission</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>To provide a platform for regular and frequent discussions and exchange of views among students.</li>
                    <li>To provide opportunities for students to develop their leadership and organizational qualities.</li>
                    <li>To develop students’ academic, professional, and personality development skills through various programs, and activities arranged by association.</li>
                    <li>To create awareness amongst the students about professional societies, encouraging them to be a member of these societies</li>
                </ul>
            </section>
            <section>
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">CESA Office Bearers:</h3>
                <ul className="space-y-2 text-gray-700 list-none pl-0">
                    {officeBearers.map((bearer, index) => (
                        <li key={index} className="flex items-start"><FaChevronRight className="text-indigo-500 mt-1 mr-3 flex-shrink-0" /><span><strong>{bearer.title}:</strong> {bearer.person}</span></li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Student Council 2022-2023:</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Student Council</th>
                                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Responsibility</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentCouncil.map((member, index) => (
                                <tr key={index} className="odd:bg-white even:bg-gray-50">
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

            <section>
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Events Organized (2022–23):</h3>
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

            <div className="mt-12 space-y-16">
                <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Event Galleries (2022-23)</h2>
                {Object.values(eventGalleries).map((gallery, index) => (
                    <section key={index}>
                        <h3 className="text-2xl font-bold text-gray-800">{gallery.title}</h3>
                        {gallery.description && (
                            <p className="text-gray-700 leading-relaxed mt-2 mb-4">
                                {gallery.description}
                            </p>
                        )}
                        <MediaCarousel slides={gallery.slides} />
                       {/* --- CONDITIONAL TABLE RENDERING --- */}
                        {gallery.resultsTable && (
                            <div className="overflow-x-auto mt-8">
                                <table className="w-full max-w-4xl mx-auto border-collapse border border-gray-300">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            {gallery.resultsTable.headers.map((header, hIndex) => (
                                                <th key={hIndex} className="border border-gray-300 p-3 text-left font-semibold text-gray-700">{header}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gallery.resultsTable.rows.map((row, rIndex) => (
                                            <tr key={rIndex} className="odd:bg-white even:bg-gray-50">
                                                {/* This handles the special structure of the cricket table */}
                                                {Object.values(row).map((cell, cIndex) => {
                                                    if (typeof cell === 'object' && cell !== null && cell.rowSpan) {
                                                        return <td key={cIndex} rowSpan={cell.rowSpan} className="border border-gray-300 p-3 text-center align-middle font-semibold">{cell.text}</td>;
                                                    } else if (typeof cell !== 'object') {
                                                        return <td key={cIndex} className="border border-gray-300 p-3">{cell}</td>;
                                                    }
                                                    return null;
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </section>
                ))}
            </div>
        </div>
    );
};


const CesaPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            CESA (Civil Engineering Students Association)
          </h1>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <AccordionItem title="CESA REPORT 2023-24" defaultOpen={false}>
              <div className="py-4">
                <iframe 
                  src="/pdfs/CESA REPORT 2023-24.pdf" 
                  title="CESA Report 2023-24"
                  className="w-full h-[80vh] border rounded-md"
                ></iframe>
              </div>
          </AccordionItem>
          
          <AccordionItem title="Archive Data (2022-23)" defaultOpen={true}>
            <CesaArchiveContent />
          </AccordionItem>
        </div>
      </div>
    </div>
  );
};

export default CesaPage;