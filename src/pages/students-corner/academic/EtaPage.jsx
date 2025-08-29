// src/pages/students-corner/EtaPage.jsx

import React from 'react';
import AccordionItem from '../../../components/AccordinItem';
import MediaCarousel from '../../../components/MediaCarousel';

// --- Data for ETA Page ---
const etaCouncil23_24 = [
    { name: 'ShrutikaGundawar', class: 'B. Tech. Final', position: 'Vice-President' },
    { name: 'ShwetaSuryanshi', class: 'B. Tech. Final', position: 'Secretary' },
    { name: 'SanskarKotalwar', class: 'B. Tech. Final', position: 'Treasurer' },
    { name: 'Shreya Zarkar', class: 'B. Tech. Final', position: 'Technical Event Head' },
    { name: 'Sanskruti More', class: 'B. Tech. Final', position: 'Board Member' },
    { name: 'VaishnavSasane', class: 'B. Tech. Final', position: 'Board Member' },
    { name: 'AvinashRathod', class: 'B. Tech. Final', position: 'Board Member' },
    { name: 'RudraniDachawar', class: 'B. Tech. Final', position: 'Board Member' },
    { name: 'NageshKharat', class: 'TY', position: 'Board Member' },
    { name: 'TegampalleAnjana', class: 'TY', position: 'Board Member' },
    { name: 'VaishnaviDeshmukh', class: 'TY', position: 'Board Member' },
    { name: 'Aditya Mhaisekar', class: 'TY', position: 'Board Member' },
    { name: 'Siddhi Deshpande', class: 'SY', position: 'Board Member' },
    { name: 'ShravaniMuli', class: 'SY', position: 'Board Member' },
    
];

const recentEventSlides = [
    { imageSrc: '/images/eta/workshop-arduino.jpg', title: 'Workshop on Arduino Board', subtitle: '28 Sept - 3 Oct 2023' },
    { imageSrc: '/images/eta/quiz-sensors.jpg', title: 'Quiz on Sensors', subtitle: 'Transducers' },
    { imageSrc: '/images/eta/alumni-interaction.jpg', title: 'Alumni Interaction', subtitle: 'Ms.JigishsaChintala, USA' },
    { imageSrc: '/images/eta/mini-project-demo.jpg', title: 'Mini Project Demo', subtitle: 'Priyadarshini School, Nanded' },
];

const activities19_20_sem1 = [
    { activity: 'Reading Club (Books read: The power of Subconscious mind, etc.)', date: '24th May 2019', class: 'SY' },
    { activity: 'Student Day Celebration', date: '15th Oct 2019', class: '' },
    { activity: 'Visit to Orphanage (Suman Balgriha and Sandhi Sansthan Balgriha)', date: '22 and 23rd Oct. 2019', class: 'TY, SY' },
    { activity: 'Start up Idea Presentation', date: '3rd Sept 2019', class: 'TY' },
    { activity: 'Virtual Lab Demo.', date: '8th Nov. 2019', class: 'SY' },
    { activity: 'Ecofriendly Ganesh Idol Making workshop', date: '26 Aug. 2019', class: 'SY, TY, BE' },
    { activity: 'Poster Presentation on Teachers Day', date: '5th Sept 2019', class: 'SY, TY' },
    { activity: 'Poster Presentation on Gandhi Jayanti', date: '2nd Oct 2019', class: 'SY, TY' },
];

const archiveGallerySlides = [
    { imageSrc: '/images/eta/visit-suman-balgriha.jpg', title: 'Visit to Suman Balgriha', subtitle: '23rd Oct. 2019' },
    { imageSrc: '/images/eta/visit-sandhi-sansthan-1.jpg', title: 'Visit to Sandhi Sansthan', subtitle: 'Image 1' },
    { imageSrc: '/images/eta/visit-sandhi-sansthan-2.jpg', title: 'Visit to Sandhi Sansthan', subtitle: 'Image 2' },
    { imageSrc: '/images/eta/quiz-gandhi-jayanti.jpg', title: 'Quiz on Gandhi Jayanti', subtitle: '2nd Oct. 2019' },
    { imageSrc: '/images/eta/skit-students-day.jpg', title: '“College Life” Skit', subtitle: 'Students’ Day, 15th Oct. 2019' },
];

const webinarSlides = [
    { imageSrc: '/images/eta/Webinar-on-Digitization-and-Digital-Competences.jpg', title: 'Webinar', subtitle: 'Digitization and Digital Competences' },
    { imageSrc: '/images/eta/Webinar-on-Internet-of-Vehicles.jpg', title: 'Webinar', subtitle: 'Internet of Vehicles' },
    { imageSrc: '/images/eta/Webinar-on-Mobile-Communication-and-OTT.jpg', title: 'Webinar', subtitle: 'Mobile Communication and OTT' },
];


const EtaPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-indigo-800">ETA (Electronics Technocrates Association)</h1>
                    <p className="text-lg text-gray-600 mt-2">DEPT. OF ELECTRONICS & TELECOMMUNICATION</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg space-y-8">
                    <section className="text-gray-700 leading-relaxed">
                        <p>Beyond classroom, laboratory and academic experience, our student club ElectronicsTechnocrats Association (ETA)is aplatformfor holistic development of a students with opportunities to explore interests, groom hidden talents, meet and network with other students, interact with experts and to grow technically, professionally and personally.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Objectives of ETA</h2>
                        <h3 className='text-xl font-semibold mb-4' >To organize</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Expert Lectures by Academicians, Alumni, industry experts</li>
                            <li>Project Competitions, Debate competitions, Quiz</li>
                            <li>Poster presentation, sketches, painting competitions</li>
                            <li>Workshops, seminars, webinars</li>
                            <li>Career guidance sessions</li>
                            <li>Social activities, Campus Connect activities</li>
                        </ul>
                    </section>

                    <AccordionItem title="ETA Council Members 2023-24" defaultOpen={true}>
                        <div className="overflow-x-auto p-4">
                            <table className="w-full border-collapse border border-gray-300">
                                {/* ... table head ... */}
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">No.</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Name</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Class</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {etaCouncil23_24.map((member, index) => (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                                            <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                                            <td className="border border-gray-300 p-3">{member.name}</td>
                                            <td className="border border-gray-300 p-3">{member.class}</td>
                                            <td className="border border-gray-300 p-3">{member.position}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </AccordionItem>
                    
                    {/* Main Image Carousel */}
                    <MediaCarousel slides={recentEventSlides} />
                    
                    <AccordionItem title="ETA Activities in 2019-20">
                        <div className="p-4 space-y-8">
                            {/* Semester 1 Table */}
                            <h3 className="text-xl font-semibold">Ist Semester</h3>
                             <table className="w-full border-collapse border border-gray-300">
                                {/* ... table head ... */}
                                 <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Activity</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Held on</th>
                                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Participating Class</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activities19_20_sem1.map((item, index) => (
                                       <tr key={index} className="odd:bg-white even:bg-gray-50">
                                            <td className="border border-gray-300 p-3">{item.activity}</td>
                                            <td className="border border-gray-300 p-3">{item.date}</td>
                                            <td className="border border-gray-300 p-3">{item.class}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* You can add the 2nd semester table here if needed */}
                        </div>
                    </AccordionItem>

                    {/* Archive and Webinar Carousels */}
                    <MediaCarousel slides={archiveGallerySlides} />
                    <MediaCarousel slides={webinarSlides} />

                </div>
            </div>
        </div>
    );
};

export default EtaPage;