// src/pages/Academic/ASH/ASHLaboratoriesPage.jsx
import React from 'react';

const ASHLaboratoriesPage = () => {
  const laboratories = [
    { name: 'Physics Lab', description: 'Equipped with modern apparatus for practical experiments in mechanics, optics, and electronics, supporting undergraduate and postgraduate research.', image: '/images/labs/physics-lab.jpg' },
    { name: 'Chemistry Lab', description: 'State-of-the-art facilities for inorganic, organic, and physical chemistry experiments, emphasizing hands-on learning.', image: '/images/labs/chemistry-lab.jpg' },
    { name: 'Language Lab', description: 'Advanced digital systems for improving communication skills, pronunciation, and fluency, enhancing overall English proficiency.', image: '/images/labs/language-lab.jpg' },
    { name: 'Mathematics Computing Lab', description: 'Dedicated computers with specialized software for numerical analysis, computational mathematics, and statistical modeling.', image: '/images/labs/math-lab.jpg' },
    // Add more labs
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-purple-800 border-b-2 border-purple-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-purple-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 7.5V11a3.5 3.5 0 007 0V7.5M10 3a1 1 0 00-1 1v2a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1H10z"></path>
          </svg>
          Applied Science &amp; Humanities Laboratories
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The Applied Science &amp; Humanities Department boasts state-of-the-art laboratories
          that provide students with hands-on experience and foster experimental learning across
          Physics, Chemistry, Mathematics, and Communication Skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {laboratories.map((lab, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <img src={lab.image} alt={lab.name} className="w-full h-56 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{lab.name}</h3>
                <p className="text-gray-700 text-sm">{lab.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - HOD Information (Can be moved to a shared component if truly identical) */}
      <div className="lg:w-96 flex-shrink-0 print:hidden">
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 sticky top-32">
          <img
            alt="Dr. Mrs. S. N. Dachawar, Head, Department of Applied Science & Humanities"
            className="w-full h-64 object-cover"
            src="/images/dr-mrs-s-n-dachawar.jpg" // Ensure this image exists in public/images
          />
          <div className="p-5 bg-gradient-to-b from-white to-gray-50">
            <h3 className="text-xl font-semibold text-purple-800 mb-1">
              Dr. Mrs. S. N. Dachawar
            </h3>
            <p className="text-gray-600 mb-2">Head of the Dept. and Admission Incharge</p>
            <a
              href="mailto:kapratwar_sb@mgmcen.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              kapratwar_sb@mgmcen.ac.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASHLaboratoriesPage;