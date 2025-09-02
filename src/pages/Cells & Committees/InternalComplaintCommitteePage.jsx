// src/pages/cells-committees/InternalComplaintCommitteePage.jsx

import React from 'react';

// Data for the Internal Complaint Committee (ICC) members
const iccMembers = [
  { srNo: 1, name: ["Dr. Mrs. Dachawar S. N.", "HOD, Applied Science"], designation: "Presiding Officer", type: "Internal" },
  { srNo: 2, name: ["Dr. Hambarde G. K.", "Librarian"], designation: "Member", type: "Internal" },
  { srNo: 3, name: ["Dr. Mrs. Banwaskar M R", "Prof., Dept of E&TC"], designation: "Member", type: "Internal" },
  { srNo: 4, name: ["Dr. Mrs. K.C Jondhale", "HOD, Dept. of E&TC"], designation: "Member", type: "Internal" },
  { srNo: 5, name: ["Prof. Mrs. Patil J. H.", "Prof., Dept. of CSE"], designation: "Member", type: "Internal" },
  { srNo: 6, name: ["Prof. Kannawar S. V.", "Asst. Prof."], designation: "Member", type: "Internal" },
  { srNo: 7, name: ["Dr. Somvanshi C J", "Asstt. Prof."], designation: "Member", type: "Internal" },
  { srNo: 8, name: ["Dr. Mrs. Shobha Waghmare", "Social Worker"], designation: "Member", type: "External" },
  { srNo: 9, name: ["Ms. Shrutika Gundawar", "Final Year B.Tech (E&TC)"], designation: ["Member", "Student Representative"], type: "Internal" },
  { srNo: 10, name: ["Ms. Utkarsha Chauhan", "Third Year B.Tech (CSE)"], designation: ["Member", "Student Representative"], type: "Internal" },
  { srNo: 11, name: ["Ms. Sonali Joshi", "Final Year B.Tech (IT)"], designation: ["Member", "Student Representative"], type: "Internal" },
];

const InternalComplaintCommitteePage = () => {
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
        <header className="mb-8" aria-labelledby="icc-title">
          <h1 id="icc-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Internal Complaint Committee - ICC (Women Grievance Redressal Committee)
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Internal Complaint Committee Overview and Members">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About the Internal Complaint Committee
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Institution has established Internal Complaint Committee (ICC) to create an environment 
              conducive for the overall development of all-female students in the campus. 
              Gender-based harassment issues are addressed by ICC.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The composition of the Internal Complaint Committee (ICC) is given below:
            </p>
          </div>

          {/* Table with consistent styling from CesaPage */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of Internal Complaint Committee Members with their designations and type (Internal/External)</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[5%]">SN</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[35%]">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[30%]">Designation/Position</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[30%]">Type of Member<br />(Internal/External)</th>
                </tr>
              </thead>
              <tbody>
                {iccMembers.map((member, index) => (
                  <tr key={member.srNo} className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-600">{member.srNo}</td>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-800">{renderMultiLineText(member.name)}</td>
                    <td className="border border-gray-300 p-3 text-left text-gray-700">{renderMultiLineText(member.designation)}</td>
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

export default InternalComplaintCommitteePage;