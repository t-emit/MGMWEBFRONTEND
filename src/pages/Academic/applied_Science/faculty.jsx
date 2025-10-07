// src/pages/Academic/ASH/ASHFacultyProfilePage.jsx
import React from 'react';

const ASHFacultyProfilePage = () => {
  const facultyMembers = [
    { name: 'Dr. Mrs. S. N. Dachawar', designation: 'Head of Department, Professor', image: '/images/faculty/dachawar.jpg' },
    { name: 'Dr. A. B. Patil', designation: 'Associate Professor, Physics', image: '/images/faculty/patil.jpg' },
    { name: 'Ms. C. D. Sharma', designation: 'Assistant Professor, English', image: '/images/faculty/sharma.jpg' },
    { name: 'Dr. E. F. Khan', designation: 'Professor, Mathematics', image: '/images/faculty/khan.jpg' },
    { name: 'Mrs. G. H. Singh', designation: 'Assistant Professor, Chemistry', image: '/images/faculty/singh.jpg' },
    // Add more faculty members with their specific images
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-purple-800 border-b-2 border-purple-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-purple-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354V18.646M2.932 6.586l4.242 4.242M18.826 6.586l-4.242 4.242"></path>
          </svg>
          Applied Science &amp; Humanities Faculty Profile
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          Meet the esteemed faculty members of the Applied Science &amp; Humanities Department.
          Our faculty comprises experienced educators and researchers dedicated to academic excellence
          and student mentorship across various disciplines like Mathematics, Physics, Chemistry, and English.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={faculty.image} alt={faculty.name} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-800">{faculty.name}</h3>
                <p className="text-gray-600 text-sm">{faculty.designation}</p>
                {/* You can add more details like research interests, publications etc. here */}
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

export default ASHFacultyProfilePage;