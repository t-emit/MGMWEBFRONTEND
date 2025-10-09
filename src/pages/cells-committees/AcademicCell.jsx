// src/pages/cells-committees/AcademicCellPage.jsx

import React from 'react';

// Data for the Academic Cell members
const academicCellMembers = [
  { srNo: 1, name: "Dr. Geeta S. Lathkar, Director", designation: "Chairperson" },
  { srNo: 2, name: "Dr. Kotgire S. L.", designation: "Member" },
  { srNo: 3, name: "Prof. Adkine G. U.", designation: "Convener & Departmental Coordinator- First Year" },
  { srNo: 4, name: "Dr. M. G. Harkare", designation: "Member" },
  { srNo: 5, name: "Dr. Archana M. Rajurkar", designation: "Member" },
  { srNo: 6, name: "Dr. Mrs. K.C. Jondhale", designation: "Member" },
  { srNo: 7, name: "Prof. Hashmi S. A.", designation: "Member" },
  { srNo: 8, name: "Dr. Arshad Hashmi", designation: "Member" },
  { srNo: 9, name: "Dr. Muttepawar S. M.", designation: "Member" },
  { srNo: 10, name: "Dr. Md. Zameeruddin", designation: "Departmental Coordinator, Dept. of Civil Engg." },
  { srNo: 11, name: "Prof. Jadhav V. S.", designation: "Member" },
  { srNo: 12, name: "Dr.Mrs. M.Y. Joshi", designation: "Departmental Coordinator, Dept. of of CSE" }, // Corrected typo
  { srNo: 13, name: "Prof. Ms. Kanadkhedkar Pranita P.", designation: "Departmental Coordinator, Dept. of E&TC" },
  { srNo: 14, name: "Prof. Mr. Ravi Shankar Yadav", designation: "Departmental Coordinator, Dept. of IT" },
  { srNo: 15, name: "Prof. Mr. Sawale J. K.", designation: "Departmental Coordinator, Dept. of Mech. Engg." },
];

const AcademicCellPage = () => {
  return (
    // Outer container matching CesaPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with CesaPage's h1 styling */}
        <header className="mb-8" aria-labelledby="academic-cell-title">
          <h1 id="academic-cell-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Academic Cell
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Academic Cell Overview and Members">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About the Academic Cell
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Academic Cell of the Institute is responsible for monitoring the execution of Department Time-Tables, 
              Academic Calendar preparation and its implementation, etc. The Members of Academic Cell are as given below:
            </p>
          </div>

          {/* Table with consistent styling from CesaPage */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of Academic Cell Members with their designations</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">Sr. No.</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-5/12">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-6/12">Designation/Position</th>
                </tr>
              </thead>
              <tbody>
                {academicCellMembers.map((member, index) => (
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

export default AcademicCellPage;