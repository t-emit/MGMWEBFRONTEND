// src/pages/social/NssPage.jsx

import React from 'react';
import AccordionItem from '../../components/AccordinItem';
import { FaFilePdf } from 'react-icons/fa';

// --- Data for the NSS Page ---
const nssReports = [
    { title: "NSS (National Service Scheme-2022-23)", link: "/pdfs/Nss/Report22-23.pdf" },
    { title: "NSS (National Service Scheme-2021-22)", link: "/pdfs/Nss/Report21-22.pdf" },
];

const archiveContent = {
    introduction: "NATIONAL SERVICE SCHEME (NSS) IS A STUDENT -CENTERED PROGRAMME AND IT IS COMPLEMENTARY TO EDUCATION. IT IS A NOBEL EXPERIENCE IN ACADEMIC EXTENSION. IT INCLUDES THE SPIRIT OF SERVICE, COOPERATION, PATRIOTISM, AND DISCIPLINE AMONG THE YOUTH OF THIS COUNTRY. THE SCHEME PROVIDES AMPLE OPPORTUNITY FOR THE VOLUNTEERS TO PARTICIPATE IN CAMPS, SOCIAL SERVICE ACTIVITIES, AND ALSO TO ATTEND USEFUL CLASSES. THE OVERALL AIM OF NSS IS THE PERSONALITY DEVELOPMENT OF STUDENTS THROUGH COMMUNITY SERVICE. IT GIVES AN EXTENSION DIMENSION TO HIGHER EDUCATION SYSTEM AND ORIENTS THE STUDENT YOUTH TO COMMUNITY SERVICE.",
    bloodDonation: "MEGA BLOOD DONATION CAMP 02.10.2015 HELD AT OUR COLLEGE 326 UNITS WERE DONATED BY NSS VOLUNTEERS. A TEAM OF DOCTORS FROM REDCROSS SOCIETY NANDED AND SHANKARRAO CHAVAN GOVERNMENT, MEDICAL COLLEGE, NANDED. THE FACULTY MEMBERS, ADMINISTRATIVE STAFF AND STUDENTS OF THE COLLEGE PARTICIPATED ENTHUSIASTICALLY IN THE CAMP. TWO UNITS OF THE NSS ARE FUNCTIONAL IN THIS COLLEGE. THE ACTIVITIES OF THE UNITS ARE SO FRAMED TO FULFILL THE OBJECTIVES OF THE NSS",
    coordinator: "Dr. Kalpeshkumar M. Sharma",
    image: {
        src: "/images/nss/blood-donation-camp.jpg",
        caption: "Enthusiastic organizers of blood donation camp with Hon. Ravindrasingh Singhal, SP, Nanded, Dr. Geeta Latkar Dirctor, & NSS Coordinator"
    }
};


const NssPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        NSS (National Service Scheme)
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    {/* PDF Links Section */}
                    <div className="mb-6">
                        {nssReports.map((report, index) => (
                             <div key={index} className="border-b border-dotted border-gray-300">
                                <a href={report.link} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center w-full py-4 text-left text-indigo-700 font-semibold hover:bg-indigo-50">
                                    <span className="flex items-center"><FaFilePdf className="mr-3 text-red-500" />{report.title}</span>
                                    <span className="text-sm font-normal text-gray-500">View Report</span>
                                </a>
                             </div>
                        ))}
                    </div>

                    {/* Old Archive Data Section */}
                    <AccordionItem title="Old Archive Data" defaultOpen={true}>
                        <div className="p-4 space-y-6 text-gray-700 leading-relaxed">
                            <p>{archiveContent.introduction}</p>
                            <p>{archiveContent.bloodDonation}</p>
                            <div className="pt-4">
                                <p className="font-bold">{archiveContent.coordinator}</p>
                                <p>Program Co-ordinator</p>
                            </div>
                            <div className="mt-6 text-center">
                                <div className="inline-block p-2 border bg-white shadow-md rounded-lg">
                                    <img 
                                        src={archiveContent.image.src} 
                                        alt={archiveContent.image.caption}
                                        className="max-w-xl w-full mx-auto rounded"
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-600 italic">{archiveContent.image.caption}</p>
                            </div>
                        </div>
                    </AccordionItem>
                </div>
            </div>
        </div>
    );
};

export default NssPage;