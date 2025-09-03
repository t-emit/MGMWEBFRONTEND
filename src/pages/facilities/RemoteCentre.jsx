// src/pages/facilities/RemoteCenterPage.jsx

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const paragraphs = [
    "After acceptance for establishment of private unaided engineering colleges by the Government there was proliferation of engineering colleges all over the country.However the speed of quality development remained very low as compared to the physical growth. To take care of the academic growth of the students and enhance   the potential of the technical teachers, IIT Bombay came forward to organize the Distance Education Programs with online interactive audio visual lectures by the experienced IIT faculty. Under able leadership of Padmashree Dr. D. B. Phatak, it was planned to train 10 thousand technical teachers in the first phase which was fulfilled in multi folds, because of passion and great contribution of Prof. Phatak. It was his earnest desire to enhance the quality of technical education in all the engineering colleges in the country to the level of the best Institution like IITs. Both the teachers as well as students were in need of the exposure to the IIT level of education process. Earlier the transmission of these lectures used to be through VSAT technology installing dish antenna receiving the satellite signals. Our Institution was amongst first five Remote Centres throughout India attached with IIT Bombay. We take pride being in continuous association with IIT Bombay for this venture. MGMCEN’s Remote Centre has been awarded with 4 stars recognition by  IIT Bombay in 2014   http://www.nmeict.iitb.ac.in/nmeict/wsmng/searchrc.php?search=1192",
    "After the enhanced high speed internet connectivity, the transmission for the courses is through AVIEW software making the things much efficient and convenient.IIT kharagpur also joined hands in the mission and many courses were organized for faculty as well as students.",
    "With the support of MHRD and NMEICT, IIT Bombay has funded conduction of these courses at Remote Centre.In appreciation of performance, our Remote Centre also received funding for Audio Visual aids and some additional hardware. Various FDP, ISTE, AICTE approved STTP were conducted under this mission which still goes on with the same zeal.",
    "This initiative has helped enhance the teaching skills of faculty members in core engineering and science subjects as well as it has developed learning abilities of the students.In addition to the technical subjects the programs like “College to Corporate” were also successfully organized for the students taking care of the overall development. The lectures were also supported with quizzes through Akash Tablets and activities through Moodle.",
    "Along with the teaching faculties of our Institute the other faculty members from the Institutions in the vicinity were also put to a great advantage.",
    "MGM’s College of Engineering, Nanded has been confirmed as RESOURCE (Robust Extensions for Spoken Tutorial project...) Centre for promoting the Spoken tutorial project,one of the Talk to Teacher projects supported by NMEICT, MHRD, Govt. of India. Our Remote Centre got Excellent  Centre for these activities. Spoken tutorial workshops were also organized through this setup. Spoken Tutorial is a unique Audio – Visual instructional tool which trains in the Distance Learning method. This project is an initiative of NMEICT, MHRD, Govt. of India. The FOSS (Free and Open Source Software) includes Linux, LaTeX, Scilab, PHP & MySQL, Python, Java, C/C++, Open FOAM, Blender, K-Turtle. These are very useful in the job market. For each software trainings are conducted (2 hours for Workshop + self revision-2-3 weeks + 1 hour assessment test) and certificate to the students are given from Spoken Tutorial Project IIT Bombay.",
    "To encourage usage of Open Source has been taken up by the Government and IITs supporting for the same, this activity got momentum in our Remote Centre and large number of students have participated and were benefited.",
];

const externalLinks = [
    { text: "NMEICT RC Search (ID: 1192)", href: "http://www.nmeict.iitb.ac.in/nmeict/wsmng/searchrc.php?search=1192" },
    { text: "Spoken Tutorial Academic Center", href: "http://spoken-tutorial.org/software-training/academic-center/716/mahatma-gandhi-mission-college-of-engineering/" },
];

const RemoteCenterPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Remote Center (IIT Bombay)
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg space-y-6 text-gray-700 leading-relaxed">
                    {paragraphs.map((p, i) => <p key={i}>{p}</p>)}

                    <div className="border-t pt-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Relevant Links:</h3>
                        <ul className="space-y-3">
                            {externalLinks.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 hover:underline">
                                        <FaExternalLinkAlt className="mr-2" />
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoteCenterPage;