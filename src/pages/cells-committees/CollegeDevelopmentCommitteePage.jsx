// src/pages/cells-committees/CollegeDevelopmentCommitteePage.jsx

import React from 'react';

// Data for the College Development Committee members
const collegeDevelopmentCommitteeMembers = [
  { srNo: 1, name: "Shri. Kamalkishor N. Kadam, Chairman, MGM Trust", designation: "Chairman", type: "Internal" },
  { srNo: 2, name: "Shri. Ankushrao N. Kadam, Secretary, MGM Trust", designation: "Member", type: "Internal" },
  { srNo: 3, name: "Dr. Geeta S. Lathkar, Director", designation: "Member-Secretary", type: "Internal" },
  { srNo: 4, name: "Dr. Kotgire S. L., Vice-Principal", designation: "Member", type: "Internal" },
  { srNo: 5, name: "Dr. M. G. Harkare, IQAC Coordinator", designation: "Member", type: "Internal" },
  { srNo: 6, name: "Dr. Archana M. Rajurkar, HOD, Dept. of CSE", designation: "Member", type: "Internal" },
  { srNo: 7, name: "Prof. Patil J. H. (Mrs. A.A. Sarsar), Prof. Dept of CSE", designation: "Member", type: "Internal" },
  { srNo: 8, name: "Dr. Arshad Hashmi, HOD, Dept. of Civil Engg.", designation: "Member", type: "Internal" },
  { srNo: 9, name: "Prof. Hashmi S. A., HOD, Dept. of IT", designation: "Member", type: "Internal" },
  { srNo: 10, name: "Mr. P. P. Kulkarni, Non-Teaching Representative", designation: "Member", type: "Internal" },
  { srNo: 11, name: "Dr. Y.V. Joshi (Educationist), Professor, Dept. of E & TC, SGGS Institute of Engg. & Tech., Nanded", designation: "Member", type: "External" },
  { srNo: 12, name: "Dr. Mahesh Kokare (Researcher), Director, SGGS Institute of Engg. & Tech., Nanded", designation: "Member", type: "External" },
  { srNo: 13, name: "Mr. Mukesh Jain (Industry Expert & Alumnus), Vice-President, Capgemini, Mumbai", designation: "Member", type: "External" },
  { srNo: 14, name: "Shri. Jayprakash Dandegaonkar, Social Service, Ex-MLA", designation: "Member", type: "External" },
  { srNo: 15, name: "President", designation: "Student Council", type: "Internal" },
  { srNo: 16, name: "Secretary", designation: "Student Council", type: "Internal" },
];

const CollegeDevelopmentCommitteePage = () => {
  return (
    // Outer container matching CesaPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with CesaPage's h1 styling */}
        <header className="mb-8" aria-labelledby="college-development-committee-title">
          <h1 id="college-development-committee-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            College Development Committee
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="College Development Committee Overview and Members">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About the College Development Committee
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Institute has a College Development Committee to take care of overall college developmental activities. 
              The Members of College Development Committee are as given below:
            </p>
          </div>

          {/* Table with consistent styling from CesaPage */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of College Development Committee Members with their designations and type (Internal/External)</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[5%]">SN</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[40%]">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[35%]">Designation/Position</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[20%]">Type of Member<br />(Internal/External)</th> {/* Fixed <br> to <br /> */}
                </tr>
              </thead>
              <tbody>
                {collegeDevelopmentCommitteeMembers.map((member, index) => (
                  <tr key={member.srNo} className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-600">{member.srNo}</td>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-800">{member.name}</td>
                    <td className="border border-gray-300 p-3 text-left text-gray-700">{member.designation}</td>
                    <td className="border border-gray-300 p-3 text-left text-gray-700">{member.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollegeDevelopmentCommitteePage;