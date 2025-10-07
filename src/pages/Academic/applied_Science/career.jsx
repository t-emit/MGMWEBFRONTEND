// src/pages/Academic/ASH/ASHCareerOrientationPage.jsx
import React from 'react';

const ASHCareerOrientationPage = () => {
  const orientationPrograms = [
    { title: 'Resume Building & Interview Skills Workshop', date: 'October 2023', description: 'Practical sessions to craft effective resumes and excel in job interviews.' },
    { title: 'Industry Expert Talk: "Future of STEM Careers"', date: 'September 2023', description: 'Insights from leading professionals on emerging career opportunities in science and technology.' },
    { title: 'Personalized Career Counseling', date: 'Ongoing', description: 'One-on-one sessions with career advisors to discuss career paths and academic planning.' },
    { title: 'Soft Skills Development Program', date: 'November 2023', description: 'Modules focused on communication, teamwork, and problem-solving abilities essential for the workplace.' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-purple-800 border-b-2 border-purple-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-purple-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 4V2m3 5a1 1 0 100-2 1 1 0 000 2zm0 14v-2m3-5a1 1 0 100-2 1 1 0 000 2zM3 10h18M7 17l-2-2m-2-2l2-2m7-2h2m-2-2H7m7 7h2m-2-2H7M7 10h2m-2-2H7"></path>
          </svg>
          Applied Science &amp; Humanities Career Orientation
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The Applied Science &amp; Humanities Department is committed to guiding students
          towards successful professional and academic futures. We offer a range of career
          orientation programs designed to enhance employability and career clarity.
        </p>

        <div className="space-y-6 mt-8">
          {orientationPrograms.map((program, index) => (
            <div key={index} className="p-5 bg-purple-50 rounded-lg shadow-sm border border-purple-100">
              <h3 className="font-semibold text-xl text-purple-800 mb-1">{program.title}</h3>
              <p className="text-gray-600 text-sm mb-2"><strong>Date:</strong> {program.date}</p>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-6">
          For more details on upcoming events, please contact the department office.
        </p>
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

export default ASHCareerOrientationPage;