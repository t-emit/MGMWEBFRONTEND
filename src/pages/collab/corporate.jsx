// src/pages/collaboration/CorporateIndustriesPage.jsx

import React from 'react';

const corporateCollaborations = [
    { name: "Pehlajob.com", details: "Training, Consultancy and Internship" },
    { name: "Cocubes.com", details: "Assessment and student placements" },
];

const CorporateIndustriesPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Corporate & Industries Collaboration
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                        MGMCEN has a multi-dimensional engagement with Indian Business Corporates. Starting from skill varying programs for manpower training for technology development, Assessment platforms, internship partnership , Institute Social Responsibility (ISR) programs, and student employment placements.
                    </p>
                    
                    <ul className="list-disc list-inside space-y-4 text-gray-800">
                        {corporateCollaborations.map((collab, index) => (
                            <li key={index}>
                                <strong className="font-semibold">{collab.name}:</strong> {collab.details}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CorporateIndustriesPage;