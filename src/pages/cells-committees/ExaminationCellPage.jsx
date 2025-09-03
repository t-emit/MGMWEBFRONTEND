// src/pages/cells-committees/ExaminationCellPage.jsx

import React from 'react';

// Data for the Examination Cell members
const examinationCellMembers = [
  { srNo: 1, name: "Dr. Geeta S. Lathkar, Director", designation: "Chairperson" },
  { srNo: 2, name: "Dr. Kotgire S. L.", designation: "Member" },
  { srNo: 3, name: "Prof. V.S.Jadhav", designation: "Central Exam Cell Coordinator" }, // Changed from SN 9 to 3 for sequential keys
  { srNo: 4, name: "Prof. J.K.Sawale", designation: "MECH Dept. Exam Coordinator" }, // Changed from SN 10 to 4
  { srNo: 5, name: "Prof. D.J.Tuptewar", designation: "ECT Dept. Exam Coordinator" }, // Changed from SN 11 to 5
  { srNo: 6, name: "Prof. Savita Wagre", designation: "CSE Dept. Exam Coordinator" }, // Changed from SN 12 to 6
  { srNo: 7, name: "Prof. H. Halbandge", designation: "CIVIL Dept. Exam Coordinator" }, // Changed from SN 13 to 7
  { srNo: 8, name: "Prof. Ritesh Bais", designation: "IT Dept. Exam Coordinator" }, // Changed from SN 14 to 8
  { srNo: 9, name: "Prof. S.S.Pawar", designation: "First Year Exam Coordinator" }, // Changed from SN 15 to 9
];

const ExaminationCellPage = () => {
  return (
    // Outer container matching CesaPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with CesaPage's h1 styling */}
        <header className="mb-8" aria-labelledby="examination-cell-title">
          <h1 id="examination-cell-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Examination Cell
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Examination Cell Overview and Members">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About the Examination Cell
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Institute has an Examination Cell for scheduling and conduction of Internal Assessment Tests, 
              Mid-Term Tests and University Examinations. The Examination Cell ascertains the quality of all 
              Internal Tests as per Bloom's Taxonomy Levels and Course Outcomes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Members of Examination Cell are as given below:
            </p>
          </div>

          {/* Table with consistent styling from CesaPage */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of Examination Cell Members with their designations</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">SN</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-5/12">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-6/12">Designation/Position</th>
                </tr>
              </thead>
              <tbody>
                {examinationCellMembers.map((member, index) => (
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

export default ExaminationCellPage;