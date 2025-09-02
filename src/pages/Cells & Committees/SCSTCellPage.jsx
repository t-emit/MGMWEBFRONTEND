// src/pages/cells-committees/SCSTCellPage.jsx

import React from 'react';

// Data for the SC/ST Cell members
const scstCellMembers = [
  { srNo: 1, name: ["Dr. Geeta S. Lathkar", "Director"], designation: "Chairperson" },
  { srNo: 2, name: ["Dr. Mrs. K.C. Jondhale", "HOD, Dept. of E&TC"], designation: "Co-ordinator" },
  { srNo: 3, name: ["Mr. Salve Suhas G.", "Asst. Prof."], designation: "Member" },
  { srNo: 4, name: ["Ms. Manjramkar Manisha A", "Asst. Prof."], designation: "Member" },
  { srNo: 5, name: ["Dr. Somwanshi C.J.", "Asst. Prof."], designation: "Member" },
  { srNo: 6, name: "Mr. Narwade D. G.", designation: "Non-Teaching Nominee" },
  { srNo: 7, name: ["Mr. Karan M. Jondhale", "Final Year B. Tech (IT)"], designation: ["Member", "Representative of Students"] },
  { srNo: 8, name: ["Mr. Shivam Wathore", "Third Year B. Tech (CSE)"], designation: ["Member", "Representative of Students"] },
];

const SCSTCellPage = () => {
  // Helper function to render text with line breaks
  const renderMultiLineText = (textArray) => {
    if (Array.isArray(textArray)) {
      return textArray.map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx < textArray.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return textArray; // If it's just a string, render as is
  };

  return (
    // Outer container matching CesaPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with CesaPage's h1 styling */}
        <header className="mb-8" aria-labelledby="scst-cell-title">
          <h1 id="scst-cell-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            SC/ST Cell
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="SC/ST Cell Overview and Members">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About the SC/ST Cell
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The SC/ST Cell resolves grievances of SC/ST students and provides them with necessary help 
              to solve their academic and administrative problems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The composition of the SC/ST Cell is as given below:
            </p>
          </div>

          {/* Table with consistent styling from CesaPage */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of SC/ST Cell Members with their designations</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">SN</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-5/12">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-6/12">Designation/Position</th>
                </tr>
              </thead>
              <tbody>
                {scstCellMembers.map((member, index) => (
                  <tr key={member.srNo} className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-600">{member.srNo}</td>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-800">{renderMultiLineText(member.name)}</td>
                    <td className="border border-gray-300 p-3 text-left text-gray-700">{renderMultiLineText(member.designation)}</td>
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

export default SCSTCellPage;