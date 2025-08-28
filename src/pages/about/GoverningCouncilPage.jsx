import React from 'react';

const GoverningCouncilPage = () => {
  // Data extracted from the original HTML table, formatted for React rendering
  const governingCouncilMembers = [
    { srNo: '1.', name: 'Shri Kamal Kishor Kadam', designation: 'Chairman' },
    { srNo: '2.', name: 'Shri Ankushrao Kadam', designation: 'Member' },
    { srNo: '3.', name: 'Shri Ujwalrao Kadam', designation: 'Member' },
    { srNo: '4.', name: 'Dr. Amardeep Kadam', designation: 'Member' },
    { srNo: '5', name: 'Dr. Sudhirchandra Kadam', designation: 'Member' },
    { srNo: '6', name: 'Regional Officer', designation: 'Nominee of the All India council for technical education – regional officer (Ex- officio)' },
    {
      srNo: '7.',
      name: 'Dr. K. G. Narayankhedkar - Educationist',
      designation: 'An industrialist / technologist /educationist for the region to be nominated by the concerned regional committee as nominee of the council, out of the panel approved by the chairman of the council.',
      rowSpan: 2, // This designation spans 2 rows
    },
    { srNo: '8', name: 'Dr. N. V. Kadam - Scientist', skipDesignation: true }, // This row's designation is covered by the previous row's rowspan
    { srNo: '9', name: 'Dr. Brijesh Iyer', designation: 'Nominee of the affiliation body/ University / state board of technical education (Ex- officio).' },
    { srNo: '10.', name: '----', designation: 'Nominee of the state Govt. director of technical education (Ex- Officio)' },
    { srNo: '11', name: 'C. P. Tripathi, Bajaj Auto', designation: 'An industrialist / technologist /educationalist from the region nominated by the state govt.' },
    {
      srNo: '12',
      name: 'Dr. Archana M. Rajurkar (Prof. Dept. of CSE, MGM’s College of Engineering, Nanded)',
      designation: 'Two faculty members to be nominated from amongst the regular staff',
      rowSpan: 2, // This designation spans 2 rows
    },
    { srNo: '13', name: 'Dr. Shirish L. Kotgire (Prof. Dept. of ETC, MGM’s College of Engineering, Nanded)', skipDesignation: true }, // This row's designation is covered
    { srNo: '14', name: 'Dr. Geeta S. Lathkar (Director, MGM’s College of Engineering, Nanded)', designation: 'Principal / Director of the concerned technical institution (As nominee of the Society / Trust) – Member- Secretary' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Hero Section - Matches the HistoryPage style */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white mb-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Governing Council</h1>
        <p className="text-xl opacity-90">
          Guiding our institution towards academic excellence and visionary leadership.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
          Council Members
        </h2>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
          <table className="w-full text-left text-gray-700">
            <thead className="bg-indigo-700 text-white">
              <tr>
                <th scope="col" className="py-4 px-6 font-semibold text-sm uppercase">Sr. No.</th>
                <th scope="col" className="py-4 px-6 font-semibold text-sm uppercase">Name of Member</th>
                <th scope="col" className="py-4 px-6 font-semibold text-sm uppercase">Designation/Position</th>
              </tr>
            </thead>
            <tbody>
              {governingCouncilMembers.map((member, index) => (
                <tr 
                  key={index} 
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-200`}
                >
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    {member.srNo}
                  </td>
                  <td className="py-4 px-6">
                    {member.name}
                  </td>
                  {/* Conditionally render designation cell based on skipDesignation flag */}
                  {!member.skipDesignation && (
                    <td
                      className="py-4 px-6 text-gray-600"
                      rowSpan={member.rowSpan || 1} // Apply rowspan if specified, otherwise 1
                    >
                      {member.designation}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
    </div>
  );
};

export default GoverningCouncilPage;