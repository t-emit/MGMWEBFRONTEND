// src/pages/admissions/PostGraduatePage.jsx

import React from 'react';

// Data for Intake Capacity
const mtechIntakeData = [
  { srNo: 1, choiceCode: "212721210", branch: "Structural Engineering", intake: "18" },
  { srNo: 2, choiceCode: "212724210", branch: "Computer Science & Engineering", intake: "9" },
  { srNo: 3, choiceCode: "212738110", branch: "Electronics & Telecommunication", intake: "9" },
  { srNo: 4, choiceCode: "212761610", branch: "Manufacturing Process Engineering", intake: "9" },
];

// Data for Contact Details, handling potential line breaks and phone numbers
const mtechContactDetails = [
  { srNo: 1, branch: "Structural Engineering", coordinator: ["Prof. Mohd. Zameeruddin", "(9822913231)"], email: "md_zameeruddin@mgmcen.ac.in" },
  { srNo: 2, branch: "Computer Science & Engineering", coordinator: ["Prof. Mrs. M. Y. Joshi", "(9422147974)"], email: "joshi_my@mgmcen.ac.in" },
  { srNo: 3, branch: "Electronics & Telecommunication", coordinator: ["Prof. Mr. D. J. Tuptewar", "(9595344727)"], email: "tuptewar_dj@mgmcen.ac.in" },
  { srNo: 4, branch: "Manufacturing Process Engineering", coordinator: ["Prof. J. K. Sawle", "(9881747207)"], email: "sawale_jk@mgmcen.ac.in" },
];

// Eligibility text for M.Tech admissions
const mtechEligibility = "B.E/B.Tech. in related branch and positive GATE score";

// Director's Contact Info
const directorContact = {
  name: "Dr. Mrs. Geeta S. Lathkar",
  email: "director@mgmcen.ac.in",
  title: "Director"
};

const PostGraduatePage = () => {
  // Helper function to render text with line breaks (similar to ICC page)
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
    // Outer container matching established theme
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with other pages */}
        <header className="mb-8" aria-labelledby="pg-admission-title">
          <h1 id="pg-admission-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Post Graduate (M. Tech)
          </h1>
        </header>

        {/* Main content section - Consistent with other pages' content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Post Graduate Admission Information">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Intake Capacity
            </h2>
            
            {/* Intake Capacity Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <caption className="sr-only">Table showing intake capacity for various M.Tech branches.</caption>
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="border border-gray-300 p-3 text-center font-semibold text-gray-700 w-[10%]">Sr. No.</th>
                    <th scope="col" className="border border-gray-300 p-3 text-center font-semibold text-gray-700 w-[20%]">Choice Code</th>
                    <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[45%]">Branch</th>
                    <th scope="col" className="border border-gray-300 p-3 text-center font-semibold text-gray-700 w-[25%]">Intake</th>
                  </tr>
                </thead>
                <tbody>
                  {mtechIntakeData.map((row, index) => (
                    <tr key={row.srNo} className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                      <td className="border border-gray-300 p-3 text-center font-bold text-gray-800">{row.srNo}</td>
                      <td className="border border-gray-300 p-3 text-center font-bold text-gray-800">{row.choiceCode}</td>
                      <td className="border border-gray-300 p-3 text-left font-bold text-gray-800">{row.branch}</td>
                      <td className="border border-gray-300 p-3 text-center font-bold text-gray-800">{row.intake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Eligibility Section */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-800">Eligibility:</strong> {mtechEligibility}
            </p>
          </div>

          {/* Contact Details Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Details
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <caption className="sr-only">Table showing contact details for M.Tech branch coordinators.</caption>
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="border border-gray-300 p-3 text-center font-semibold text-gray-700 w-[5%]">Sr. No.</th>
                    <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[30%]">Branch</th>
                    <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[35%]">Coordinator</th>
                    <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-[30%]">Email Id</th>
                  </tr>
                </thead>
                <tbody>
                  {mtechContactDetails.map((row, index) => (
                    <tr key={row.srNo} className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                      <td className="border border-gray-300 p-3 text-center font-medium text-gray-600">{row.srNo}</td>
                      <td className="border border-gray-300 p-3 text-left text-gray-700">{row.branch}</td>
                      <td className="border border-gray-300 p-3 text-left text-gray-700">
                        {renderMultiLineText(row.coordinator)}
                      </td>
                      <td className="border border-gray-300 p-3 text-left">
                        <a 
                          href={`mailto:${row.email}`} 
                          className="text-indigo-600 hover:underline"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {row.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Director's Contact */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              <strong className="text-indigo-800">{directorContact.name}: </strong>
              <a 
                href={`mailto:${directorContact.email}`} 
                className="text-indigo-600 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {directorContact.email}
              </a>
            </h2>
            <p className="text-sm text-gray-600 ml-1">
              <small className="font-semibold">{directorContact.title}</small>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostGraduatePage;