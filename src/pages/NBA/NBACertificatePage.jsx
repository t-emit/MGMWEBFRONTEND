import React from 'react';
import { FaDownload, FaAward, FaFilePdf } from 'react-icons/fa';

const NBACertificatePage = () => {
    // Define the path to your certificate, ensuring spaces are encoded
    const certificateFilename = 'NBA Certificate 06.08.2025.pdf';
    const certificatePath = `https://mgmcen.ac.in/pdf/NBA%20Certificate%2006.08.2025.pdf`;

    return (
        <div className="min-h-screen py-12 pt-40 bg-gray-50">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Header Section with Download Button */}
                <div className="bg-indigo-700 text-white p-6 rounded-t-xl shadow-lg flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold">
                            NBA Accreditation Certificate
                        </h1>
                    </div>

                    {/* Download Link (visible button) */}
                    <a
                        href={certificatePath}
                        download={certificateFilename}
                        className="bg-white text-indigo-700 hover:bg-indigo-100 font-semibold py-2 px-4 rounded-full transition duration-300 shadow-md flex items-center"
                        title="Download NBA Certificate"
                    >
                        <FaDownload className="mr-2" /> Download Certificate
                    </a>
                </div>

                {/* PDF Viewer Area */}
                <div className="bg-white p-2 rounded-b-xl shadow-2xl border-t-4 border-indigo-500">
                    {/* Iframe for embedding the PDF */}
                    <iframe
                        src={certificatePath}
                        title="NBA Accreditation Certificate Viewer"
                        className="w-full h-[85vh] border-none rounded-lg"
                        frameBorder="0"
                        scrolling="auto"
                    >
                        {/* Fallback content */}
                        <div className="p-8 text-center text-gray-600">
                            <FaFilePdf className="mx-auto h-12 w-12 text-red-600 mb-4" />
                            <p className="text-xl mb-4">Your browser cannot display this PDF.</p>
                            <a
                                href={certificatePath}
                                download={certificateFilename}
                                className="bg-indigo-600 text-white hover:bg-indigo-700 font-semibold py-3 px-6 rounded-lg transition"
                            >
                                <FaDownload className="mr-2" /> Click Here to Download
                            </a>
                        </div>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default NBACertificatePage;