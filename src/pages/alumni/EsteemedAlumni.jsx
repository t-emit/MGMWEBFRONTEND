// src/pages/alumni/EsteemedAlumni.jsx

import React from 'react';
import { FaFilePdf } from 'react-icons/fa'; // Using react-icons for a nice PDF icon
import AlumniPageLayout from './AlumniPageLayout';

const esteemedAlumniData = [
  { id: 1, title: 'Our Outstanding Alumni Civil Dept. - 1', link: '/pdfs/outstanding-alumni-civil-1.pdf' },
  { id: 2, title: 'Our Outstanding Alumni - 2', link: '/pdfs/outstanding-alumni-2.pdf' },
  { id: 3, title: 'Our Outstanding Alumni - 3', link: '/pdfs/outstanding-alumni-3.pdf' },
  { id: 4, title: 'Our Outstanding Alumni - 4', link: '/pdfs/outstanding-alumni-4.pdf' },
  // Add more links here as needed
];

const EsteemedAlumni = () => {
  return (
    <AlumniPageLayout
      title="Esteemed Alumni"
      subtitle="Celebrating the achievements of our distinguished graduates."
    >
    {/* <div className="bg-gray-50 py-12 pt-32"> */}
      {/* <div className="container mx-auto px-4"> */}
        {/* <div className="text-center mb-12"> */}
          {/* <h1 className="text-4xl font-bold text-indigo-800">Esteemed Alumni</h1> */}
          {/* <p className="text-lg text-gray-600 mt-2">Celebrating the achievements of our distinguished graduates.</p> */}
          {/* <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div> */}
        {/* </div> */}

        <div className=" bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Pride: Outstanding Alumni Achievements</h2>
          <ul className="space-y-4">
            {esteemedAlumniData.map((alumnus) => (
              <li key={alumnus.id}>
                {/* NOTE: Replace the '#' in the href with the actual path to your PDF files */}
                <a
                  href={alumnus.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-md hover:bg-indigo-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center">
                    <FaFilePdf className="text-red-500 text-2xl mr-4" />
                    <span className="text-gray-700 font-medium">{alumnus.title}</span>
                  </div>
                  <span className="text-indigo-600 font-semibold hover:underline">View PDF</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      {/* </div> */}
    {/* </div> */}
    </AlumniPageLayout>
  );
};

export default EsteemedAlumni;