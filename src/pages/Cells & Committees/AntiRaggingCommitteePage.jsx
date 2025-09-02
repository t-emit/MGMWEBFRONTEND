// src/pages/cells-committees/AntiRaggingCommitteePage.jsx

import React from 'react';

// Data for the Anti Ragging Committee members
const antiRaggingCommitteeMembers = [
  { srNo: 1, name: "Dr. Geeta S. Lathkar, Director", designation: "Chairperson" },
  { srNo: 2, name: "Dr. Kotgire S. L., Vice-Principal", designation: "Member" },
  { srNo: 3, name: "Dr. S. M. Muttepwar, Administrative Officer", designation: "Member" },
  { srNo: 4, name: "Dr. M. G. Harkare, HOD, Dept of Mech. Engg.", designation: "Member" },
  { srNo: 5, name: "Dr. Archana M. Rajurkar, HOD, Dept. of CSE", designation: "Member, Representative of Ladies Staff" },
  { srNo: 6, name: "Dr. Mrs. K.C. Jondhale, HOD, Dept. of E&TC", designation: "Member, Representative of Ladies Staff" },
  { srNo: 7, name: "Prof. Hashmi S. A., HOD, Dept. of IT", designation: "Member" },
  { srNo: 8, name: "Prof. N.A. Kadam, First Year Incharge", designation: "Member" },
  { srNo: 9, name: "Dr. Arshad Hashmi, HOD, Dept. of Civil Engg.", designation: "Member" },
  { srNo: 10, name: "Prof. Pawde M.R., Asst. Prof.", designation: "Co-ordinator" },
  { srNo: 11, name: "Dr. G. B. Joshi", designation: "Member, Media Relation" },
  { srNo: 12, name: "Mr. Vijay Jadhav", designation: "Member, API, Airport Police Station" },
  { srNo: 13, name: "Student Representatives from First Year and Senior Classes", designation: "Member" },
];

const AntiRaggingCommitteePage = () => {
  return (
    // Outer container matching CesaPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with CesaPage's h1 styling */}
        <header className="mb-8" aria-labelledby="anti-ragging-committee-title">
          <h1 id="anti-ragging-committee-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Anti Ragging Committee
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Anti Ragging Committee Overview and Members">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Purpose and Composition
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Anti-Ragging Committee is established for creating awareness among students about the Honorable Supreme Court's directives and the actions that can be taken against those found indulged in ragging. 
              It also takes all necessary measures for prevention of Ragging inside the Campus and Hostels.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The composition of the Anti-Ragging Committee is as follows:
            </p>
          </div>

          {/* Table with consistent styling from CesaPage */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of Anti-Ragging Committee Members with their designations</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">SN</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-4/12">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-7/12">Designation/Position</th>
                </tr>
              </thead>
              <tbody>
                {antiRaggingCommitteeMembers.map((member, index) => (
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

export default AntiRaggingCommitteePage;