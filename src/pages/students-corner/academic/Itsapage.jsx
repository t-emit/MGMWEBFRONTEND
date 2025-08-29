// src/pages/students-corner/ItsaPage.jsx

import React from 'react';
import MediaCarousel from '../../../components/MediaCarousel';

// --- Data for the ITSA Page ---

const itsaCouncil = [
    { srNo: 1, name: 'Surve Ravina', class: 'BE', position: 'General Secretary' },
    { srNo: 2, name: 'Basarkar Monika', class: 'BE', position: 'Event Organiser Secretary' },
    { srNo: 3, name: 'Koratkar Diksha', class: 'BE', position: 'Wall Magazine Secretary' },
    { srNo: 4, name: 'Swapnil Swamy', class: 'BE', position: 'Treasures Secretary' },
    { srNo: 5, name: 'Swarnil Swamy', class: 'BE', position: 'Joint Secretary' },
    { srNo: 6, name: 'Salman Khan', class: 'BE', position: 'Joint Secretary' },
    { srNo: 7, name: 'Bhagyshri Indrale', class: 'BE', position: 'Joint Secretary' },
    { srNo: 8, name: 'Aniket Dusey', class: 'TE', position: 'Joint Secretary' },
    { srNo: 9, name: 'Harsha Aswani', class: 'SE', position: 'Joint Treasurer' },
    { srNo: 10, name: 'Aftab Khan', class: 'BE', position: 'Joint Event Organizer' },
    { srNo: 11, name: 'Sneha Dalal', class: 'BE', position: 'Joint Event Organizer' },
    { srNo: 12, name: 'Kulakarni Megha', class: 'BE', position: 'Joint Event Organizer' },
    { srNo: 13, name: 'Neha Raghojiwar', class: 'TE', position: 'Joint Event Organizer' },
    { srNo: 14, name: 'NavalKishor Dubey', class: 'TE', position: 'Joint Event Organizer' },
    { srNo: 15, name: 'Vinayak Mahajan', class: 'TE', position: 'Joint Event Organizer' },
    { srNo: 16, name: 'Rutuja Mane', class: 'TE', position: 'Joint Event Organizer' },
    { srNo: 17, name: 'Priyanka Gathadi', class: 'TE', position: 'Joint Event Organizer' },
    { srNo: 18, name: 'Pooja Thakur', class: 'SE', position: 'Joint Event Organizer' },
    { srNo: 19, name: 'Urusa Afsheen', class: 'SE', position: 'Joint Event Organizer' },
    { srNo: 20, name: 'Sonal Joshi', class: 'SE', position: 'Joint Event Organizer' },
    { srNo: 21, name: 'Aditi Lande', class: 'SE', position: 'Joint Event Organizer' },
    { srNo: 22, name: 'Jyoti Panchal', class: 'BE', position: 'Joint Wall Magazine Secretary' },
    { srNo: 23, name: 'Uttam Galande', class: 'BE', position: 'Joint Wall Magazine Secretary' },
    { srNo: 24, name: 'Swapnil Swamy', class: 'BE', position: 'Joint Wall Magazine Secretary' },
    { srNo: 25, name: 'Shilpa Bodhane', class: 'TE', position: 'Joint Wall Magazine Secretary' },
    { srNo: 26, name: 'Neha Raghojiwar', class: 'TE', position: 'Joint Wall Magazine Secretary' },
    { srNo: 27, name: 'Malashri Patil', class: 'TE', position: 'Joint Wall Magazine Secretary' },
    { srNo: 28, name: 'Pratik Zawar', class: 'TE', position: 'Joint Wall Magazine Secretary' },
    { srNo: 29, name: 'Pooja Thakur', class: 'SE', position: 'Joint Wall Magazine Secretary' },
    { srNo: 30, name: 'Urusa Afsheen', class: 'SE', position: 'Joint Wall Magazine Secretary' },
    { srNo: 31, name: 'Akshay Bhande', class: 'SE', position: 'Joint Wall Magazine Secretary' },
    { srNo: 32, name: 'Monika Basarkar', class: 'BE', position: 'Joint Treasure Secretary' },
    { srNo: 33, name: 'Nikhil Dachawar', class: 'TE', position: 'Joint Treasure Secretary' },
    { srNo: 34, name: 'Pratik Zawar', class: 'TE', position: 'Joint Treasure Secretary' },
    { srNo: 35, name: 'Rahul Maniyar', class: 'SE', position: 'Joint Treasure Secretary' },
    { srNo: 36, name: 'Akshay Bhande', class: 'SE', position: 'Joint Treasure Secretary' },
];

const itsaActivityGalleries = [
    {
        title: "1) Teachers Day",
        slides: [
            { imageSrc: "/images/itsa/itsa1.jpg", title: "Skit on Sawitri Bai Phule" },
            { imageSrc: "/images/itsa/itsa2.jpg" },
            { imageSrc: "/images/itsa/itsa3.jpg", title: "Group Photo with Director" },
        ]
    },
    {
        title: "2) Engineers Day",
        description: "Inauguration by Chairman Sir on occasion of Engineer’s Day",
        slides: [
            { imageSrc: "/images/itsa/itsa4.jpg" },
            { imageSrc: "/images/itsa/itsa5.jpg" },
            { imageSrc: "/images/itsa/itsa6.jpg", title: "Best out of waste" },
        ]
    },
    {
        title: "3) Gandhi Jayanti",
        description: "Wall Magazine Inauguration by Chairman Sir",
        slides: [
            { imageSrc: "/images/itsa/itsa7.jpg" },
            { imageSrc: "/images/itsa/itsa8.jpg" },
            { imageSrc: "/images/itsa/itsa9.jpg", title: "Skit on Mahatma Gandhi" },
            { imageSrc: "/images/itsa/itsa10.jpg" },
        ]
    },
    {
        title: "4) Workshop on Embedded system (8051 and ARM)",
        description: "Department organized workshop on ARM 7 for the students of TE. Jivan Kataria (Resource Person) provided valuable information to students along with hands on.",
        slides: [
            { imageSrc: "/images/itsa/itsa11.jpg" },
            { imageSrc: "/images/itsa/itsa12.jpg" },
        ]
    },
    {
        title: "5) Group Day",
        description: "Group day theme “WE BUILD NATION”",
        slides: [
            { imageSrc: "/images/itsa/itsa13.jpg" },
            { imageSrc: "/images/itsa/itsa14.jpg" },
        ]
    }
];

const ItsaPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            ITSA (Information Technology Student Association)
          </h1>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg space-y-12">
          <section className="text-gray-700 leading-relaxed">
            <p>
              ITSA is Information Technology Student Association formed in 2008. ITSA is very active student club in college to organize various activities like Gaming Events, Aptitude Test etc. ITSA organizes industrial visit to various IT industries for students of IT department. This club gives the platform to the students of Information Technology department to explore themselves and also to express their views in front of everyone. This club tries to keep the students active throughout the year and many events are carried such as Teacher’s day, Engineer’s day, Gandhi Jayanti, Training Programs etc. The mock interviews are conducted by panel of faculty members consisting of the H.O.D. of IT Department, some senior lecturers and the ITSA faculty coordinators. The student council of this club consists of Vice president, Secretaries, Treasurers and event Organizers and 36 board members. For every post many students of the department have to submit the application and the interview is taken by the HOD and the coordinator of the club. On the basis of the interview and analysis of the performance, following is the ITSA council for the year 2015-16.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-800 mb-6">ITSA Council 2015-16</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Sr.No.</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Name of Student</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Class</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {itsaCouncil.map((member) => (
                    <tr key={member.srNo} className="odd:bg-white even:bg-gray-50">
                      <td className="border border-gray-300 p-3 text-center">{member.srNo}.</td>
                      <td className="border border-gray-300 p-3">{member.name}</td>
                      <td className="border border-gray-300 p-3 text-center">{member.class}</td>
                      <td className="border border-gray-300 p-3">{member.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-800 mb-6 border-t pt-8">ITSA Activities</h2>
            <div className="space-y-16">
                {itsaActivityGalleries.map((gallery, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold text-gray-800">{gallery.title}</h3>
                        {gallery.description && (
                            <p className="text-gray-700 leading-relaxed mt-2 mb-4">{gallery.description}</p>
                        )}
                        <MediaCarousel slides={gallery.slides} />
                    </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ItsaPage;