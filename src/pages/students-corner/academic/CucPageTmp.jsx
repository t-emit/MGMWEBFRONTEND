// src/pages/students-corner/CucPage.jsx

import React from 'react';
import AccordionItem from '../../../components/AccordinItem';

import { FaFilePdf } from 'react-icons/fa';

const CucYearlyData = ({ councilMembers, events, eventTableHeaders }) => {
  return (
    <div className="p-4 space-y-12">
      {/* Student Council Table */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Students' Council</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Sr. No.</th>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Name</th>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Post</th>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Class</th>
              </tr>
            </thead>
            <tbody>
              {councilMembers.map((member, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                  <td className="border border-gray-300 p-3">{member.name}</td>
                  <td className="border border-gray-300 p-3">{member.post}</td>
                  <td className="border border-gray-300 p-3">{member.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Events List Table */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">The List of Events</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                {eventTableHeaders.map((header, index) => (
                   <th key={index} className="border border-gray-300 p-3 text-left font-semibold text-gray-700">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                  <td className="border border-gray-300 p-3">{event.name}</td>
                  <td className="border border-gray-300 p-3">{event.date}</td>
                  <td className="border border-gray-300 p-3">
                    {event.link === 'Upcoming' ? (
                      <span className="font-semibold text-gray-500">Upcoming</span>
                    ) : (
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-indigo-600 hover:text-indigo-800 hover:underline"
                      >
                        <FaFilePdf className="mr-2" />
                        View PDF
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

// --- Data for CUC 2024-25 with CORRECTED PDF links ---
const CucPage = () => {
const cucData24_25 = {
  councilMembers: [
    { name: 'Omkar Angulwar', post: 'Vice President', class: 'B.Tech (CSE)' },
    { name: 'Snehal Savankar', post: 'Secretary', class: 'TY-CSE' },
    { name: 'Harsh Battalwar', post: 'Jt. Secretary', class: 'B.Tech (CSE)' },
    { name: 'Pranav Kalaskar', post: 'Jt. Secretary', class: 'B.Tech (CSE)' },
    { name: 'Kashish Aswani', post: 'Treasurer', class: 'TY-CSE' },
    { name: 'Aditya Kulkarni', post: 'Technical event head', class: 'TY-CSE' },
    { name: 'Vasavi Kawtikwar', post: 'Cultural Event head', class: 'TY-CSE' },
    { name: 'Gajanan Jagdambe, Saurabh Kulkarni', post: 'Media Head', class: 'TY-CSE' },
    { name: 'Ishwari Nandedkar', post: 'Board Member', class: 'SY-CSE' },
    { name: 'Vaishnavi Titare', post: 'Board Member', class: 'SY-CSE' },
    { name: 'Sarvesh Kulkarni', post: 'Board Member', class: 'SY-CSE' },
    { name: 'Vidhi Sharma', post: 'Board Member', class: 'SY-CSE' },
  ],
  events: [
    { name: "Oxford International School Students' Visit to MGM Campus", date: "12th August 2024", link: "/pdfs/cuc/Oxfordvisit2024.pdf" },
    { name: "Teachers’ Day Program", date: "9th September 2024", link: "/pdfs/cuc/CUC-Teachers-Day-2024.pdf" },
    { name: "Speech Competition", date: "9th September 2024", link: "/pdfs/cuc/Speechcomp2024.pdf" },
    { name: 'Expert talk by Dr. Omprakash Tembhurne on "Research to Reality..."', date: "14th September 2024", link: "/pdfs/cuc/CUC Expert Talk on 14th Sept 2024.pdf" },
    { name: "Engineers’ Day Program", date: "15th September 2024", link: "/pdfs/cuc/CUC Engineer's Day Celebration 2024.pdf" },
    { name: "ZP School Visit", date: "19th October 2024", link: "/pdfs/cuc/CUC-ZP-Visit.pdf" },
    { name: "Expert talk by Dr. Vrushali Kinhalkar", date: "11th November 2024", link: "Upcoming" },
    { name: "Orphanage Visit", date: "14th November 2024", link: "Upcoming" },
  ],
  eventTableHeaders: ['Sr. No.', 'Name of Event', 'Date of Conduction', 'Link']
};

// --- Data for CUC 2023-24 with CORRECTED PDF links ---
const cucData23_24 = {
    councilMembers: [
        { name: 'Lohekar Maniratna', post: 'Vice President', class: 'B.Tech (CSE)' },
        { name: 'Pratyusha Ansapure', post: 'Secretary', class: 'B.Tech (CSE)' },
        { name: 'Farooqui Atoofa', post: 'Jt. Secretary', class: 'TY-CSE' },
        { name: 'Pranav Kalaskar', post: 'Treasurer', class: 'TY-CSE' },
        { name: 'Omkar Angulwar', post: 'Technical event head', class: 'TY-CSE' },
        { name: 'Harsh Battalwar', post: 'Cultural Event head', class: 'TY-CSE' },
        { name: 'Aditya Kulkarni', post: 'Media Head', class: 'SY-CSE' },
        { name: 'Ananya Deshmukh', post: 'Board Member', class: 'TY-CSE' },
        { name: 'Khushi Khadalkar', post: 'Board Member', class: 'SY-CSE' },
        { name: 'Snehal Savankar', post: 'Board Member', class: 'SY-CSE' },
        { name: 'Saeed Qazi', post: 'Board Member', class: 'SY-CSE' },
    ],
    events: [
        { name: "Teachers’ Day Program", date: "5th September 2023", link: "/pdfs/cuc/CUC-Teachers-Day-2023.pdf" },
        { name: "Expert Talk", date: "15th September 2023", link: "/pdfs/cuc/CUC Expert Talk on 15th Sept.pdf" },
        { name: "Engineers’ Day Program", date: "15th September 2023", link: "/pdfs/cuc/CUC Engineer's Day Celebration 2023.pdf" },
        { name: "ZP Visit", date: "20th February 2024", link: "/pdfs/cuc/CUC-ZP-Visit.pdf" },
        { name: "Orphanage Visit", date: "24th February 2024", link: "/pdfs/cuc/CUC Orphanage Visit.pdf" },
        { name: "Poster Making Competition", date: "11th March 2024", link: "/pdfs/cuc/CUC Poster Presentation report.pdf" },
        { name: "Craft Fusion", date: "26th March 2024", link: "/pdfs/cuc/Crafts Fusion.pdf" },
    ],
    eventTableHeaders: ['Sr. No.', 'Name of Event', 'Date of Conduction', 'Link']
};

// --- Data for CUC 2022-23 with CORRECTED PDF links ---
const cucData22_23 = {
    councilMembers: [
        { name: 'Govind Deshmukh', post: 'Vice President', class: 'B.Tech (CSE)' },
        { name: 'Sukhbir Singh Sohal', post: 'Secretary', class: 'TY-CSE' },
        { name: 'Eshwari Kulkarni', post: 'Jt. Secretary', class: 'TY-CSE' },
        { name: 'Ayush Pawar', post: 'Treasurer', class: 'B.Tech (CSE)' },
        { name: 'Shrikant Dumpalwar', post: 'Treasurer', class: 'TY-CSE' },
        { name: 'Mamdi Shubham', post: 'Technical event head', class: 'B.Tech (CSE)' },
        { name: 'Maniratna Lohekar', post: 'Technical event head', class: 'TY-CSE' },
        { name: 'Karan Jadhav', post: 'Cultural Event head', class: 'TY-CSE' },
        { name: 'Pratyusha Anaspure', post: 'Cultural Event head', class: 'TY-CSE' },
        { name: 'Pranav Kalaskar', post: 'Board Member', class: 'SY-CSE' },
        { name: 'Vedant Kahalekar', post: 'Board Member', class: 'SY-CSE' },
        { name: 'Kangulwar Surekha', post: 'Board Member', class: 'SY-CSE' },
        { name: 'Shruti Kubde', post: 'Board Member', class: 'SY-CSE' },
        { name: 'Avani Kulkarni', post: 'Board Member', class: 'SY-CSE' },
        { name: 'Farooqui Atoofa', post: 'Board Member', class: 'SY-CSE' },
        { name: 'Inamdar Atharva', post: 'Board Member', class: 'SY-CSE' },
        { name: 'Omkar Angulwar', post: 'Board Member', class: 'SY-CSE' },
        { name: 'Aniket Bais', post: 'Board Member', class: 'SY-CSE' },
    ],
    events: [
        { name: "Photography Contest", date: "15th September 2022", link: "/pdfs/cuc/CUC Photography contest report.pdf" },
        { name: "Engineers’ Day Program", date: "15th September 2022", link: "/pdfs/cuc/CUC Engineer's Day Celebration 2022-23.pdf" },
        { name: "Extempore Competition", date: "15th October 2022", link: "#" }, // NOTE: No PDF for this was in the screenshot
        { name: "Poster Making Competition", date: "7th November 2022", link: "/pdfs/cuc/CUC Poster MAking report 2022-23.pdf" },
        { name: "Orphanage Visit", date: "29th April 2023", link: "/pdfs/cuc/CUC Orphanage Visit 2022-23.pdf" },
        { name: "The Dominators League", date: "9th May 2023", link: "/pdfs/cuc/Dominatorsleague-2022-23.pdf" },
    ],
    eventTableHeaders: ['Sr. No.', 'Name of Event', 'Date of Conduction', 'View Report'] 
}



  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            CUC (Computer Users' Club)
          </h1>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
          {/* Introduction Section */}
          <section className="text-gray-700 leading-relaxed space-y-4">
            <p>The Computer Users' Club is the most active club at MGM's College of Engineering. Established by the first graduating class of the Computer Science and Engineering Department in 1989, this club provides a platform for students to develop their skills and share their perspectives. The club organizes various technical and social events to keep students engaged throughout the year. Dr. A. M. Rajurkar, Head of the CSE Department, serves as the President of the club, with Ms. N. S. Pande as the faculty coordinator.</p>
            <p>The selection of the Students' Council for the CUC is conducted through interviews by a panel of faculty members, including the Head of the CSE Department, senior lecturers, and the CUC faculty coordinators. Students interested in council positions submit their performance records, and final selections are based on interviews. The Students' Council comprises a Vice President, Secretaries, Treasurer, Event Heads and Board Members.</p>
          </section>

          {/* Accordion for Yearly Data */}
          <div className="border-t pt-6">
            <AccordionItem title="Computer Users’ Club Archive: 2024-25" defaultOpen={true}>
              <CucYearlyData {...cucData24_25} />
            </AccordionItem>
            <AccordionItem title="Computer Users’ Club Archive: 2023-24">
              <CucYearlyData {...cucData23_24} />
            </AccordionItem>
            <AccordionItem title="Computer Users’ Club Archive: 2022-23">
               {/* NOTE: You need to fill in the data for 2022-23 above */}
              <CucYearlyData {...cucData22_23} />
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CucPage;