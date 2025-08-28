import React from 'react';

const AccreditationsAffiliationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white mb-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Accreditations & Affiliations</h1>
        <p className="text-xl opacity-90">Recognized excellence in engineering education</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
          Our Accreditations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">NBA Accreditation</h3>
            </div>
            <p className="text-gray-700">
              Accredited by National Board of Accreditation for excellence in technical education.
            </p>
            <div className="mt-4 text-sm text-blue-600">
              <span className="font-semibold">Valid Until:</span> 2024-2027
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 极 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800">NAAC Accreditation</h3>
            </div>
            <p className="text-gray-700">
              Awarded 'A' Grade by National Assessment and Accreditation Council for overall excellence.
            </p>
            <div className="mt-4 text-sm text-green-600">
              <span className="font-semibold">Valid Until:</span> 2024
            </div>
          </div>
        </div>

        {/* Affiliation Section */}
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3 mt-12">
          Our Affiliations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2极12m4 0V9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">University Affiliation</h3>
            </div>
            <p className="text-gray-700">
              Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, ensuring quality education standards.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke极cap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-800">AICTE Approval</h3>
            </div>
            <p className="text-gray-700">
              Approved by All India Council for Technical Education, New Delhi, ensuring compliance with national standards.
            </p>
          </div>
        </div>

        {/* Government Recognition */}
        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Government Recognition</h3>
          </div>
          <p className="text-gray-700">
            Recognized as 'A' Grade College by Government of Maharashtra, India, acknowledging our commitment to excellence in education.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
          Benefits of Our Accreditations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-sem极bold text-gray-800 mb-2">Quality Education</h4>
              <p className="text-gray-700">Ensures adherence to highest educational standards and continuous improvement.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13极4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Industry Recognition</h4>
              <p className="text-gray极700">Degrees are widely recognized by industries and employers nationwide.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Global Opportunities</h4>
              <p className="text-gray-700">Enables students to pursue higher education and careers globally.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Research Opportunities</h4>
              <p className="text-gray-700">Access to funded research projects and collaborations with premier institutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccreditationsAffiliationsPage;