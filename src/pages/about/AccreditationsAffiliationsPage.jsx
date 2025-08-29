import React from 'react';

const AccreditationsAffiliationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-24 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 md:p-12 text-white mb-16 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Accreditations & Affiliations</h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl">Recognized excellence in engineering education through quality assurance and industry partnerships</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b border-indigo-200 pb-4">
          Our Accreditations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 transition-all hover:shadow-md">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">NBA Accreditation</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Accredited by National Board of Accreditation for excellence in technical education and continuous quality improvement.
            </p>
            <div className="mt-4 text-sm text-blue-600 font-medium">
              Valid Until: 2024-2027
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 transition-all hover:shadow-md">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800">NAAC Accreditation</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Awarded 'A' Grade by National Assessment and Accreditation Council for overall institutional excellence.
            </p>
            <div className="mt-4 text-sm text-green-600 font-medium">
              Valid Until: 2024
            </div>
          </div>
        </div>

        {/* Affiliation Section */}
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b border-indigo-200 pb-4 mt-16">
          Our Affiliations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 transition-all hover:shadow-md">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">University Affiliation</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, ensuring adherence to quality education standards and curriculum excellence.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 transition-all hover:shadow-md">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-800">AICTE Approval</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Approved by All India Council for Technical Education, New Delhi, ensuring compliance with national standards and quality benchmarks.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b border-indigo-200 pb-4">
          Benefits of Our Accreditations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Quality Education</h4>
              <p className="text-gray-700 leading-relaxed">Ensures adherence to highest educational standards and promotes continuous improvement in teaching methodologies.</p>
            </div>
          </div>

          <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Industry Recognition</h4>
              <p className="text-gray-700 leading-relaxed">Degrees are widely recognized by industries and employers nationwide, enhancing employment opportunities.</p>
            </div>
          </div>

          <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Global Opportunities</h4>
              <p className="text-gray-700 leading-relaxed">Enables students to pursue higher education and careers globally with internationally recognized qualifications.</p>
            </div>
          </div>

          <div className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Research Opportunities</h4>
              <p className="text-gray-700 leading-relaxed">Access to funded research projects and collaborations with premier institutions across the country.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccreditationsAffiliationsPage;