// src/pages/cultural/AarohanPage.jsx

import React from 'react';
import MediaCarousel from '../../../components/MediaCarousel';
import { FaFilePdf } from 'react-icons/fa'; // Import the PDF icon

// --- Data for the Aarohan Page ---
const introduction = [
    "M.G. M’s College of Engineering has a tradition to have a grand welcome for the first year students. This celebration is known as Aarohan. Intention behind organizing Aarohan is to make the fresher’s feel at home and provide them friendly ambience in college. Also it aims at strengthening relationship among the new comers and old students.",
    "Aarohan is basically to encourage the first year students in cultural activities such as dance, singing drama, Mr. and Ms. Fresher. Mr. and Ms. Fresher competition of Aarohan includes group discussion, personal interview, introduction round, Cultural round and finally question and answer round. These different rounds supports in selecting a versatile personality as Mr. and Ms. Fresher for the year."
];

const gallerySlides = [
    { imageSrc: "/images/aarohan/a1.png", title: "Felicitation of Chief Guest", subtitle: "Dr. Pandit Balchandra Vidyasagar (Vice-Chancellor)" },
    { imageSrc: "/images/aarohan/a6.png", title: "Dance Performance by Freshers" },
    { imageSrc: "/images/aarohan/a4.png", title: "Mr. & Ms. Freshers" },
    // { imageSrc: "/images/aarohan/prize-distribution.jpg", title: "Prize Distribution by Chief Guest" },
    { imageSrc: "/images/aarohan/a2.png", title: "Dr. Mrs. G. S. Lathkar (Director)", subtitle: "Addressing Students" },
    { imageSrc: "/images/aarohan/a3.png", title: "Shri. Kamal Kishor Kadam (Chairman)", subtitle: "Addressing Students" },
];


const AarohanPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Aarohan (Fresher’s Party)
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg space-y-10">
                    {/* --- THIS SECTION IS UPDATED --- */}
                    <section className="text-center">
                        <h2 className="text-2xl font-bold text-indigo-800 mb-4">AAROHAN-2023 Report</h2>
                        <p className="text-gray-600 mb-6">Click the button below to view the full event report in a new tab.</p>
                        
                        {/* The iframe is replaced with this styled link (button) */}
                        <a 
                            href="/pdfs/cultural/AAROHAN-2023-Report.pdf" // Ensure this path is correct
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
                        >
                            <FaFilePdf className="mr-3" />
                            View AAROHAN-2023 Report
                        </a>
                    </section>
                    
                    {/* The rest of the page remains the same */}
                    <section className="space-y-4 text-gray-700 leading-relaxed border-t pt-8">
                        {introduction.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    </section>

                    <section className="border-t pt-8">
                        <MediaCarousel slides={gallerySlides} />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AarohanPage;