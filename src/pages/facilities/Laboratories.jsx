// src/pages/facilities/LaboratoriesPage.jsx

import React from 'react';
import { FaFlask } from 'react-icons/fa';

const LaboratoriesPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Laboratories
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <FaFlask className="text-6xl text-indigo-300 mx-auto mb-6" />
                    <h2 className="text-2xl font-semibold text-gray-800">Content Coming Soon</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        This section is currently under development. Detailed information and galleries for our state-of-the-art laboratories for each department will be available here shortly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LaboratoriesPage;