// src/pages/admissions/UnderGraduatePage.jsx

import React from 'react';

// Data for Intake Capacity and Choice Code
const intakeCapacityData = [
  { srNo: 1, dteCode: "212719110", branch: "Civil Engineering", intake: "60" },
  { srNo: 2, dteCode: "212719111T", branch: "Civil Engineering TFWS", intake: "3" },
  { srNo: 3, dteCode: "212724210", branch: "Computer Science and Engineering", intake: "180" },
  { srNo: 4, dteCode: "212724211T", branch: "Computer Science and Engineering TFWS", intake: "9" },
  { srNo: 5, dteCode: "212724610", branch: "Information Technology", intake: "120" },
  { srNo: 6, dteCode: "212724611T", branch: "Information Technology TFWS", intake: "6" },
  { srNo: 7, dteCode: "212737210", branch: "Electronics and Telecommunication Engg", intake: "60" },
  { srNo: 8, dteCode: "212737211T", branch: "Electronics and Telecommunication Engg TFWS", intake: "3" },
  { srNo: 9, dteCode: "212761210", branch: "Mechanical Engineering", intake: "60" },
  { srNo: 10, dteCode: "212761210T", branch: "Mechanical Engineering TFWS", intake: "-" }, // Note: Original HTML has '-' for intake
  { srNo: 11, dteCode: "212792110", branch: "Artificial Intelligence and Machine Learning", intake: "60" },
  { srNo: 12, dteCode: "212792111T", branch: "Artificial Intelligence and Machine Learning TFWS", intake: "3" },
  { srNo: 13, dteCode: "212791610", branch: "Automation and Robotics", intake: "60" },
  { srNo: 14, dteCode: "212791611T", branch: "Automation and Robotics TFWS", intake: "3" },
];

const totalIntake = "627"; // As per original HTML

// Data for eligibility and documents
const admissionInfo = {
  eligibilityLink: {
    href: "https://mgmcen.ac.in/Information_Brochure_UG_PG_2025_26_Final_02_07_2025.pdf",
    text: "Eligibility for UG Engineering Admissions (2025-26) (link)"
  },
  documentsRequired: [
    "Receipt cum Acknowledgement for Admission & FC verified Xerox document Set",
    "Seat Acceptance letter",
    "Freeze Confirmation Print out",
    "SSC Marksheet",
    "HSC Marksheet",
    "Transfer Certificate (TC)",
    "Caste Certificate (for category students)",
    "Caste Validity Certificate (for category students)",
    "Valid Non-Creamy Layer Certificate (For NT, SBC, OBC Students )",
    "Nationality Certificate/Birth Certificate/ Passport/TC",
    "Domicile Certificate/ Birth Certificate/ TC",
    "MHT CET Score Card",
    "JEE Score Card",
    "Gap Certificate (If any)",
    "Migration Certificate for Other than Maharashtra State Students",
    "Certificate of Physical Disability (If applicable)",
    "Income Certificate (For TFWS Students)",
    "EWS Certificate (For EWS Students)",
    "Proforma O- (For Minority Students)",
    "Proforma U- (For Orphan Students)",
    "Proforma C/D/E (For Def-1/Def-2/Def-3)",
    "Ration Card",
    "Student Adhar Card",
  ],
  undertakingText: "Student Undertaking, Parent Undertaking (Will be provided at the time of Admission)",
  admissionEnquiryLink: {
    href: "https://forms.gle/h9oPkJ7PCZFSdb5e6",
    text: "Click here for F. Y. B. Tech. Admission enquiry 2025-26"
  }
};

const UnderGraduatePage = () => {
  return (
    // Outer container matching CesaPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with CesaPage's h1 styling */}
        <header className="mb-8" aria-labelledby="ug-admission-title">
          <h1 id="ug-admission-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Under Graduate (B. Tech)
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Under Graduate Admission Information">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Intake Capacity and Choice Code (College Code 2127)
            </h2>
            
            {/* Intake Capacity Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <caption className="sr-only">Table showing intake capacity for various B.Tech branches.</caption>
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="border border-gray-300 p-3 text-center font-semibold text-gray-700 w-[10%]">Sr. No.</th>
                    <th scope="col" className="border border-gray-300 p-3 text-center font-semibold text-gray-700 w-[20%]">DTE Code</th>
                    <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[45%]">Branch</th>
                    <th scope="col" className="border border-gray-300 p-3 text-center font-semibold text-gray-700 w-[25%]">Intake</th>
                  </tr>
                </thead>
                <tbody>
                  {intakeCapacityData.map((row, index) => (
                    <tr key={row.srNo} className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                      <td className="border border-gray-300 p-3 text-center font-medium text-gray-600">{row.srNo}</td>
                      <td className="border border-gray-300 p-3 text-center font-medium text-gray-800">{row.dteCode}</td>
                      <td className="border border-gray-300 p-3 text-left text-gray-700">{row.branch}</td>
                      <td className="border border-gray-300 p-3 text-center text-gray-700">{row.intake}</td>
                    </tr>
                  ))}
                  {/* Total row from original HTML */}
                  <tr className="bg-gray-100 font-bold">
                    <td colSpan="3" className="border border-gray-300 p-3 text-right text-gray-800">Total Intake:</td>
                    <td className="border border-gray-300 p-3 text-center text-gray-800">{totalIntake}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Eligibility Section */}
          <div className="mb-8">
            <p className="text-gray-700 mb-2">
              <a 
                href={admissionInfo.eligibilityLink.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-indigo-600 hover:underline"
              >
                {admissionInfo.eligibilityLink.text}
              </a>
            </p>
          </div>

          {/* Documents Required Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              List of Documents required at the time of Admission
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {admissionInfo.documentsRequired.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
          
          {/* Undertaking and Enquiry Links */}
          <div className="mb-4">
            <p className="font-bold text-gray-800 mb-4">
              {admissionInfo.undertakingText}
            </p>
            <p>
              <a 
                href={admissionInfo.admissionEnquiryLink.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
              >
                {admissionInfo.admissionEnquiryLink.text}
              </a>
            </p>
          </div>

        </section>
      </div>
    </div>
  );
};

export default UnderGraduatePage;