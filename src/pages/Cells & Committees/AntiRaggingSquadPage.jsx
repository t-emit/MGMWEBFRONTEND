// src/pages/cells-committees/AntiRaggingSquadPage.jsx

import React from 'react';

// Data for the Anti Ragging Squad members
const antiRaggingSquadMembers = [
  { srNo: 1, name: "Dr. D.V. Pattewar", designation: "Co-ordinator", mobileNo: "9850575741" },
  { srNo: 2, name: "Dr. Mrs. M Y Joshi", designation: "Member", mobileNo: "9422147974" },
  { srNo: 3, name: "Dr. J. S. Siddhu", designation: "Member", mobileNo: "9881747189" },
  { srNo: 4, name: "Prof. N. A. Kadam", designation: "Member", mobileNo: "7758870602" },
  { srNo: 5, name: "Prof. V. S. Jadhav", designation: "Member", mobileNo: "7558778199" },
  { srNo: 6, name: "Dr. Mohd. Zameeruddin", designation: "Member", mobileNo: "9822913231" },
  { srNo: 7, name: "Prof. R.S. Yadav", designation: "Member", mobileNo: "9881385485" },
];

const AntiRaggingSquadPage = () => {
  return (
    // Outer container matching CesaPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with CesaPage's h1 styling */}
        <header className="mb-8" aria-labelledby="anti-ragging-squad-title">
          <h1 id="anti-ragging-squad-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Anti Ragging Squad
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Anti Ragging Squad Overview and Members">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Commitment Against Ragging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Anti-Ragging Squad always remains alert and active throughout to ensure that not a single incidence of ragging occurs in the college or hostels. 
              It also adopts measures necessary to curb the menace of ragging.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The composition of the Anti-Ragging Squad is as given below:
            </p>
          </div>

          {/* Table with consistent styling from CesaPage */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of Anti-Ragging Squad Members with their designations and mobile numbers</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">SN</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-4/12">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-4/12">Designation/Position</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-3/12">Mobile No</th>
                </tr>
              </thead>
              <tbody>
                {antiRaggingSquadMembers.map((member, index) => (
                  <tr key={member.srNo} className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-600">{member.srNo}</td>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-800">{member.name}</td>
                    <td className="border border-gray-300 p-3 text-left text-gray-700">{member.designation}</td>
                    <td className="border border-gray-300 p-3 text-left text-gray-700">
                      <a href={`tel:${member.mobileNo}`} className="text-indigo-600 hover:text-indigo-800">
                        {member.mobileNo}
                      </a>
                    </td>
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

export default AntiRaggingSquadPage;