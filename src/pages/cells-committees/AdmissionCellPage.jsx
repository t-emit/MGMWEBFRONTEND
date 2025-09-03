// src/pages/cells-committees/AdmissionCellPage.jsx

import React from 'react';

// Data for the Admission Cell members
const admissionCellMembers = [
  { srNo: 1, name: "Dr. Geeta S. Lathkar, Director", designation: "Chairperson" },
  { srNo: 2, name: "Dr. Kotgire S. L., Vice-Principal", designation: "Member" },
  { srNo: 3, name: "Dr. Mrs. Sulbha N. Dachawar", designation: "Admission Incharge" },
  { srNo: 4, name: "Dr. Mrs. M. R. Banwaskar", designation: "Member" },
  { srNo: 5, name: "Prof. Ms. Jyoti H. Patil", designation: "Member" },
  { srNo: 6, name: "Prof. Mr. G. U. Adkine", designation: "Member" },
  { srNo: 7, name: "Prof. Mr. D. J. Tuptewar", designation: "Member" },
  { srNo: 8, name: "Prof. Mr. M. N. Bhandare", designation: "Member" },
  { srNo: 9, name: "Prof. Mr. Bhore A. A.", designation: "Member" },
  { srNo: 10, name: "Mr. Yahya Ali", designation: "Member" },
];

const AdmissionCellPage = () => {
  return (
    // Outer container matching the consistent page layout
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with other cell pages */}
        <header className="mb-8" aria-labelledby="admission-cell-title">
          <h1 id="admission-cell-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Admission Cell
          </h1>
        </header>

        {/* Main content section */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Admission Cell Responsibilities and Members">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Role and Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The responsibilities of the Admission Cell of the Institute are Pre-admission Activity, Conduction of Admission Process and Post-admission activity. 
            The Pre-admission Activity involves Registration Process for Engineering Admissions through Facilitation Center. 
            The Admission Cell verifies and uploads the required documents for admission of the candidates allotted to the Institute in all CAP Rounds in the online system through Institute Login immediately. 
            Document verification of all admitted student in the Institute by Regional Office Director Technical Education Govt of Maharashtra, Issuing of Certificate and Submission of proposal of admitted students for approval to Admission Regulating Authority (ARA) is monitored by Admission Cell. 
            The list of Admission Cell Members is given below:
          </p>

          {/* Table for members - Responsive and styled consistently */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of Admission Cell Members with their designations</caption> {/* Accessible caption for screen readers */}
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">Sr. No.</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-5/12">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-6/12">Designation/Position</th>
                </tr>
              </thead>
              <tbody>
                {admissionCellMembers.map((member) => (
                  <tr key={member.srNo} className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 p-3">{member.srNo}</td>
                    <td className="border border-gray-300 p-3">{member.name}</td>
                    <td className="border border-gray-300 p-3">{member.designation}</td>
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

export default AdmissionCellPage;