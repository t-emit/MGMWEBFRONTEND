// src/pages/cells-committees/CASERPCellPage.jsx

import React from 'react';

// Data for the CASERP Cell members
const caserpCellMembers = [
  { srNo: 1, name: "Dr. Geeta S. Lathkar, Director", designation: "Chairperson" },
  { srNo: 2, name: "Prof. Mrs. Patil Jyoti H.", designation: "CASERP Incharge" },
  { srNo: 3, name: "Dr. Md. Zameeruddin", designation: "Departmental Coordinator, Dept. of Civil Engg." },
  { srNo: 4, name: "Dr. Mrs. M.Y. Joshi", designation: "Departmental Coordinator, Dept. of CSE" },
  { srNo: 5, name: "Prof. Mr. Jadhav V. S.", designation: "Departmental Coordinator, Dept. of E&TC" },
  { srNo: 6, name: "Prof. Mr. Bandewar S. P.", designation: "Departmental Coordinator, Dept. of IT" },
  { srNo: 7, name: "Prof. Mr. Sawale J. K.", designation: "Departmental Coordinator, Dept. of Mech. Engg." },
  { srNo: 8, name: "Prof. Mr. More P. S.", designation: "Departmental Coordinator, First Year" },
  { srNo: 9, name: "Mr. Rahul Bhande", designation: "Member - Technical Support" },
  { srNo: 10, name: "Mrs. Aditi Ahire", designation: "Member - Technical Support" },
  { srNo: 11, name: "Mr. Prashant Deshmukh", designation: "Member - Technical Support" },
  { srNo: 12, name: "Mrs. Pooja Nirmale", designation: "Member - Technical Support" },
];

const CASERPCellPage = () => {
  return (
    // Outer container matching CesaPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with CesaPage's h1 styling */}
        <header className="mb-8" aria-labelledby="caserp-cell-title">
          <h1 id="caserp-cell-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            College Administration System-ERP (CASERP) Cell
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="CASERP Cell Overview and Members">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About the CASERP Cell
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Institute has implemented a cloud-based ERP system for e-governance in areas of operations 
              such as academics, administration, finance and accounts, student admissions, etc. 
              The CASERP Cell gets the ERP system customized as per the Institute requirements, 
              upgrades and adds new modules in the ERP system, ensures that the student and staff 
              data is updated in the system correctly, ensures the finance and accounts data is 
              added and updated correctly and appropriate reports are generated, ascertains that 
              the parents are periodically receiving SMS about attendance and Test marks of their wards, etc. 
              The Members of the CASERP Cell are given below:
            </p>
          </div>

          {/* Table with consistent styling from CesaPage */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of CASERP Cell Members with their designations</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">SN</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-4/12">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-7/12">Designation/Position</th>
                </tr>
              </thead>
              <tbody>
                {caserpCellMembers.map((member, index) => (
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

export default CASERPCellPage;