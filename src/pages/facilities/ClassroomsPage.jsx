// src/pages/facilities/ClassroomsPage.jsx

import React from 'react';
import MediaCarousel from '../../components/MediaCarousel';

// --- Reusable Section Component for consistent styling ---
const FacilitySection = ({ title, description, slides }) => (
    <section className="py-8 border-b last:border-b-0">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed mb-8">{description}</p>
        {slides && <MediaCarousel slides={slides} />}
    </section>
);

// --- Data for the Classrooms Page ---
const classroomData = {
    title: "Classrooms",
    description: "The classrooms are comfortably furnished and equipped creating necessary learning atmosphere. The space planning, furniture layout and Audio-Visual resources combined enhance the Teaching-Learning Experience.",
    slides: [
        { imageSrc: "/images/facilities/classrooms/Classroom1.jpg", title: "Classroom" },
        { imageSrc: "/images/facilities/classrooms/Classroom2.jpg", title: "View of Classroom" },
        { imageSrc: "/images/facilities/classrooms/Classroom3.jpg", title: "Learning Experience in Classroom" },
    ]
};

const conferenceHallData = {
    title: "Conference Hall",
    description: "The Institute firmly believes in organizing various lectures by experts to share their knowledge and experience with budding minds which in turn provide a platform to overcome their difficulties relevant to their career and studies. The Conference hall is fully Air conditioned with Audio-Visual resources and can accommodate 200 students at a time and suitable for various kinds of activities.",
    slides: [
        { imageSrc: "/images/facilities/classrooms/CONFERENCE1.jpg", title: "Dr. Kornel F. Ehmann", subtitle: "NorthWestern University" },
        { imageSrc: "/images/facilities/classrooms/CONFERENCE2.jpg", title: "Dr. J.K. Mukherjee", subtitle: "So(H), E&IG, BARC" },
        { imageSrc: "/images/facilities/classrooms/CONFERENCE3.jpg", title: "ISTE Technical Education Workshop" },
    ]
};

const seminarHallsData = {
    title: "Seminar Halls",
    description: "The Seminar Halls are furnished with sophisticated furniture and audio visual aids for a high level presentations and interactive sessions.",
    slides: [
        { imageSrc: "/images/facilities/classrooms/Seminar1.jpg", title: "Seminar Hall" },
        { imageSrc: "/images/facilities/classrooms/Seminar2.jpg", title: "ISTE Workshop on Database management system" },
        { imageSrc: "/images/facilities/classrooms/Seminar3.jpg", title: "ISTE Workshop on C Graphics" },
    ]
};


const ClassroomsPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Classrooms & Halls
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <FacilitySection {...classroomData} />
                    <FacilitySection {...conferenceHallData} />
                    <FacilitySection {...seminarHallsData} />
                </div>
            </div>
        </div>
    );
};

export default ClassroomsPage;