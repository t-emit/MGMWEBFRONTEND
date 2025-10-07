// src/pages/Academic/ASH/ASHProfilePage.jsx
import React from 'react';

const ASHProfilePage = () => {
  const departmentDetails = [
    { label: 'Year of Establishment', value: '1984' },
    { label: 'Head of Department', value: 'Dr. Mrs. S. N. Dachawar' },
    { label: 'Contact No', value: '02462 XXXXXX' },
    { label: 'E –mail ID', value: 'kapratwar_sb@mgmcen.ac.in', type: 'email' },
    // Add more details if available for ASH
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Content (Department Overview) */}
      <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-purple-800 border-b-2 border-purple-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-purple-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Applied Science &amp; Humanities Department Profile
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="prose prose-lg max-w-none text-gray-700 mb-6 print:text-sm">
              <p className="leading-relaxed mb-4">
                The department is multi-disciplinary in nature with faculty from diverse disciplines such as mathematics, applied physics, applied chemistry and communication skills. The curriculum is in tune with the rapid advancement in the respective domains and makes education unique. Department provides an encouraging environment to clear the fundamental concepts of problem solving ability of students so that they become technocrats of caliber.
              </p>
              <p className="leading-relaxed mb-4">
                Our department plays a unique and distinctive role in an institute where ethos of science and technology prevails. It is believed that engineers and scientists are humanistic and socially derived enterprises by their nature. Hence a complete science and technology education must include social and behavioral science, where the students unite applications of scientific principles along with human, moral and social understanding.
              </p>
            </div>

            {/* Department Details Table (Optional, you can add more data) */}
            <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
              <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                <thead className="text-xs text-white uppercase bg-gradient-to-r from-purple-700 to-purple-800 print:bg-gray-800">
                  <tr>
                    <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Detail</th>
                    <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentDetails.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-purple-50 transition-colors print:border-b`}>
                      <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">
                        <strong>{item.label}</strong>
                      </td>
                      <td className="py-4 px-4 md:px-6 print:py-2 print:px-3">
                        {item.type === 'email' ? (
                          <a href={`mailto:${item.value}`} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium flex items-center print:text-gray-700">
                            <svg className="w-4 h-4 mr-1 print:hidden" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-medium">{item.value}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar - HOD Information for Applied Science & Humanities */}
          <div className="lg:w-96 flex-shrink-0 print:hidden">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 sticky top-32">
              <img
                alt="Dr. Mrs. S. N. Dachawar, Head, Department of Applied Science & Humanities"
                className="w-full h-64 object-cover"
                src="/images/dr-mrs-s-n-dachawar.jpg" // Ensure this image exists in public/images
              />
              <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-semibold text-purple-800 mb-1">
                  Dr. Mrs. S. N. Dachawar
                </h3>
                <p className="text-gray-600 mb-2">Head of the Dept. and Admission Incharge</p>
                <a
                  href="mailto:kapratwar_sb@mgmcen.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  kapratwar_sb@mgmcen.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASHProfilePage;