// src/pages/Academic/ExamSection.jsx

import React from 'react';

// Data for exam timetables
const examTimetables = [
  { title: "Perodic Test -I Student Notice 25-26 odd sem", link: "/pdfs/ExamSection/Perodic Test -I Student Notice 25-26 odd sem (3)-Modified 1.pdf" }, // Placeholder link
//   { title: "End-Semester Examination Timetable - Dec 2023", link: "#" }, // Placeholder link
//   { title: "Practical Examination Schedule - Nov 2023", link: "#" }, // Placeholder link
//   { title: "Supplementary Examination Timetable - July 2023", link: "#" }, // Placeholder link
];

const ExamSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Page Title */}
        <header className="mb-10" aria-labelledby="exam-section-title">
          <h1 
            id="exam-section-title" 
            className="text-5xl font-extrabold text-teal-800 pb-4 mb-4 
                       border-l-4 border-teal-600 pl-4 leading-tight" // Consistent title styling
          >
            Examinations Section
          </h1>
         
        </header>

        {/* Main content section */}
        <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-100" aria-label="Examination Information">
          <div className="space-y-10">

            {/* Current Exam Timetables Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-5 
                             border-l-4 border-blue-500 pl-3">
                Current Exam Timetables
              </h2>
              <p className="text-gray-700 mb-4">
                Please find the latest examination timetables below. These documents provide important information regarding dates, times, and venues for upcoming examinations.
              </p>
              <ul className="list-none pl-0 space-y-3 text-gray-700">
                {examTimetables.map((timetable, index) => (
                  <li key={index} className="flex items-start">
                    <a 
                      href={timetable.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-3 
                                 hover:underline transition-all duration-200 ease-in-out 
                                 transform hover:translate-x-1 p-2 rounded-md hover:bg-blue-50"
                    >
                      {/* FontAwesome for consistency, assuming configuration */}
                      <i className="fas fa-calendar-alt text-xl text-blue-500"></i>
                      <span className="text-lg">{timetable.title}</span>
                      <i className="fas fa-external-link-alt text-sm ml-1 text-gray-400"></i> {/* Small external link icon */}
                    </a>
                  </li>
                ))}
                
              </ul>
            </div>

            {/* Evaluation Scheme Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-5 
                             border-l-4 border-green-500 pl-3">
                Evaluation Scheme
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our institute follows a comprehensive and transparent evaluation scheme designed to assess student learning effectively. For a course with a total of <strong className="text-green-700">100 marks</strong>, the distribution is as follows:
              </p>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <ul className="list-disc pl-6 space-y-3 text-gray-800 text-lg">
                  <li>
                    <strong className="font-semibold">Theory Paper:</strong> <span className="text-green-700">60 Marks</span>
                    <p className="text-sm text-gray-600 mt-1">
                      This component assesses a student's understanding of core concepts through a formal written examination at the end of the semester.
                    </p>
                  </li>
                  <li>
                    <strong className="font-semibold">Internal Marks:</strong> <span className="text-green-700">40 Marks</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Internal assessment ensures continuous evaluation throughout the semester, covering various aspects of student engagement and performance. These 40 marks are further divided:
                    </p>
                    <ul className="list-circle pl-6 mt-3 space-y-2 text-base">
                      <li>
                        <strong className="font-medium">CA One Marks:</strong> <span className="text-green-600">20 Marks</span>
                        <p className="text-xs text-gray-500 mt-1">
                          Assessment for the first half of the semester, typically including quizzes, assignments, presentations, or mid-term tests.
                        </p>
                      </li>
                      <li>
                        <strong className="font-medium">CA Two Marks:</strong> <span className="text-green-600">20 Marks</span>
                        <p className="text-xs text-gray-500 mt-1">
                          Assessment for the second half of the semester, covering similar components to California One, ensuring continuous engagement.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 italic mt-6">
                  This balanced approach ensures that both theoretical knowledge and consistent academic performance are recognized and evaluated.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExamSection;