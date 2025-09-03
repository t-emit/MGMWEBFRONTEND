// src/pages/cells-committees/CulturalCommitteePage.jsx

import React from 'react';

// Data for the Cultural Committee members
const culturalCommitteeMembers = [
  { srNo: 1, name: "Dr. Geeta S. Lathkar, Director", designation: "Chairperson" },
  { srNo: 2, name: "Dr. Shirish L. Kotgire, Vice Principal", designation: "Member" },
  { srNo: 3, name: "Prof. Mr. Pankaj P. Pawar", designation: "Coordinator" },
  { srNo: 4, name: "Prof. Mr. A .A. Bhore", designation: "Cultural Event Coordinator (JHAANKAR)" },
  { srNo: 5, name: "Dr. M. G. Harkare, HOD, Dept. of Mech. Engg.", designation: "Member" },
  { srNo: 6, name: "Dr. Archana M. Rajurkar, HOD, Dept. of CSE", designation: "Member" },
  { srNo: 7, name: "Dr. S. N. Dachawar, HOD, Dept. of Applied Sciences", designation: "Member" },
  { srNo: 8, name: "Dr. K. C. Jondhale, HOD, Dept. of ECT", designation: "Member" },
  { srNo: 9, name: "Prof. S. A. Hashmi, HOD, Dept. of IT", designation: "Member" },
  { srNo: 10, name: "Dr. Arshad Hashmi, HOD, Dept. of Civil Engg", designation: "Member" },
  { srNo: 11, name: "Prof. D. M. Joshi", designation: "Member" },
  { srNo: 12, name: "Ms. Sakshi Udgirkar (BTech CSE)", designation: "Cultural Secretary" },
  { srNo: 13, name: "Ms. Renuka Magar (BTech ETC)", designation: "Ladies Representative" },
  { srNo: 14, name: "Mr. Abhishek Jondhale (BTech CSE)", designation: "Student Sports Secretary" },
  { srNo: 15, name: "Mr. Karan Jadhav (TY CSE)", designation: "Student NSS Boys Coordinator" },
  { srNo: 16, name: "Ms. Sonali Joshi (TY IT)", designation: "Student NSS Girls Coordinator" },
];

const CulturalCommitteePage = () => {
  return (
    // Outer container matching CesaPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with CesaPage's h1 styling */}
        <header className="mb-8" aria-labelledby="cultural-committee-title">
          <h1 id="cultural-committee-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Cultural Committee
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Cultural Committee Overview and Members">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About the Cultural Committee
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Institute has formed a Cultural Committee to plan, schedule and successfully organize cultural events for every academic year. 
              The Cultural Committee cultivates interest in cultural activities and motivates students for participating in 
              intra-college and inter-college cultural competitions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Members of Cultural Committee are given in the table below:
            </p>
          </div>

          {/* Table with consistent styling from CesaPage */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of Cultural Committee Members with their designations</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">SN</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-5/12">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-6/12">Designation/Position</th>
                </tr>
              </thead>
              <tbody>
                {culturalCommitteeMembers.map((member, index) => (
                  <tr key={member.srNo} className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-600">{member.srNo}</td>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-800">{member.name}</td>
                    <td className="border border-gray-300 p-3 text-left text-gray-700">{member.designation}</td>
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

export default CulturalCommitteePage;