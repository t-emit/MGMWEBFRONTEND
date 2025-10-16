import React from 'react';
import { FaAward, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'; // Changed FaDownload to FaExternalLinkAlt for viewing

const NBACertificatePage = () => {
    // Define the path to your certificate, ensuring spaces are encoded
    const certificateFilename = 'NBA Certificate 06.08.2025.pdf'; // Kept for reference, not directly used in button text anymore
    const certificatePath = `https://mgmcen.ac.in/pdf/NBA%20Certificate%2006.08.2025.pdf`;

    // Data for the accredited programs table (extracted from the provided image)
    const accreditedPrograms = [
        {
            institution: "MGM's College of Engineering Nanded (Nanded)",
            program: "Civil Engg.",
            level: "Under Graduate",
            status: "ACCREDITED",
            period: "Academic Year 2024-25, 2025-26 and 2026-27, i.e., upto 30/06/2027"
        },
        {
            institution: "MGM's College of Engineering Nanded (Nanded)",
            program: "Computer Science & Engg.",
            level: "Under Graduate",
            status: "ACCREDITED",
            period: "Academic Year 2024-25, 2025-26 and 2026-27, i.e., upto 30/06/2027"
        },
        {
            institution: "MGM's College of Engineering Nanded (Nanded)",
            program: "Mechanical Engg.",
            level: "Under Graduate",
            status: "ACCREDITED",
            period: "Academic Year 2024-25, 2025-26 and 2026-27, i.e., upto 30/06/2027"
        },
        {
            institution: "MGM's College of Engineering Nanded (Nanded)",
            program: "Electronics And Telecommunication Engineering",
            level: "Under Graduate",
            status: "ACCREDITED",
            period: "Academic Year 2024-25, 2025-26 and 2026-27, i.e., upto 30/06/2027"
        }
    ];

    return (
        <div className="min-h-screen py-12 pt-40 bg-gray-50">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* NBA Certificate Header and Button Section */}
                <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between mb-12">
                    <div className="flex items-center mb-6 md:mb-0">
                        <FaAward className="mr-4 text-5xl text-indigo-200" />
                        <h1 className="text-4xl font-extrabold tracking-tight">
                            NBA Accreditation Certificate
                        </h1>
                    </div>

                    {/* Button to view PDF in new tab */}
                    <a
                        href={certificatePath}
                        target="_blank" // Opens in a new tab
                        rel="noopener noreferrer" // Security best practice for target="_blank"
                        className="bg-white text-indigo-800 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg flex items-center text-lg"
                        title="View NBA Accreditation Certificate PDF"
                    >
                        <FaExternalLinkAlt className="mr-3" /> View Certificate 
                    </a>
                </div>

                {/* New section for Accredited Programs Table */}
                <div className="mt-12 bg-white p-8 rounded-xl shadow-xl border-t-4 border-indigo-500">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        Accredited Programs
                    </h2>
                    <p className="text-xl font-medium text-indigo-700 mb-6 text-center">
                        Engineering Tier II (Under Graduate)
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">State: <span className="text-indigo-600">Maharashtra</span></h3>

                    {/* Responsive table container */}
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-indigo-50">
                                <tr>
                                    <th scope="col" className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Name of the Institution
                                    </th>
                                    <th scope="col" className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Program
                                    </th>
                                    <th scope="col" className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Level
                                    </th>
                                    <th scope="col" className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Accreditation Status
                                    </th>
                                    <th scope="col" className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Accreditation Period
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {accreditedPrograms.map((program, index) => (
                                    <tr key={index}>
                                        <td className="py-3 px-4 whitespace-normal text-sm text-gray-800">{program.institution}</td>
                                        <td className="py-3 px-4 whitespace-normal text-sm text-gray-800">{program.program}</td>
                                        <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{program.level}</td>
                                        <td className="py-3 px-4 whitespace-nowrap text-sm text-green-700 font-medium">{program.status}</td>
                                        <td className="py-3 px-4 whitespace-normal text-sm text-gray-800">{program.period}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NBACertificatePage;