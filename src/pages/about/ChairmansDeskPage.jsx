import React from 'react';

const ChairmansDeskPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 pt-32 pb-24 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-0 right-0 -mr-40 mt-10 opacity-20">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M45.1,-58.2C63.3,-47.9,85.5,-41.8,93.5,-27.6C101.5,-13.4,95.4,8.9,83.1,25.9C70.8,42.9,52.4,54.6,33.6,62.3C14.8,70,-4.5,73.7,-20.5,68.3C-36.5,62.9,-49.2,48.4,-59.6,31.5C-70,14.6,-78.1,-4.7,-73.8,-20.9C-69.5,-37.1,-52.8,-50.2,-36.5,-61.2C-20.2,-72.2,-4.3,-81.1,8.6,-77.9C21.5,-74.7,33.1,-59.4,45.1,-58.2Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Chairman's Desk
            </h1>
            <p className="text-xl text-blue-100 opacity-90 mb-8">
              A message from our esteemed Chairman, guiding our mission towards excellence.
            </p>
            <div className="w-20 h-1 bg-indigo-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Chairman Profile Section */}
            <div className="md:w-2/5 bg-gradient-to-b from-blue-50 to-indigo-50 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img
                    alt="Kamalkishor N. Kadam, Chairman"
                    className="w-full h-auto"
                    src="images/CHAIRMAN1.jpg"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">
                    Kamalkishor N. Kadam
                  </h3>
                  <p className="text-lg text-indigo-600 font-medium">Chairman</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="w-10 h-1 bg-indigo-400 rounded-full"></div>
                    <div className="w-4 h-1 bg-indigo-400 rounded-full"></div>
                    <div className="w-10 h-1 bg-indigo-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">MGM's Vision</h4>
                <p className="text-gray-600 text-sm">
                  Providing distinctive combination of academic excellence with professional relevance
                </p>
              </div>
            </div>

            {/* Message Content Section */}
            <div className="md:w-3/5 p-8 md:p-12 py-5">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-indigo-800 mb-4 relative pb-3">
                  Insights from the Chairman
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-200 rounded-full"></span>
                </h2>
                <p className="text-gray-500 text-sm mb-2">A Personal Message</p>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="relative pl-6 border-l-2 border-indigo-100">
                  <span className="absolute top-0 left-0 text-indigo-400 text-2xl font-serif">"</span>
                  We recognize that choosing your institution is one of the most important decision you make in your life. Mahatma Gandhi Mission aims for providing you with a distinctive combination of academic excellence with professional relevance laying foundation for total personality development. Today, MGM is one of the leading educational institution in Maharashtra. In Dec. 2015, MGM completed her 32 years of existence offering her contribution in the field of education and health services to the society. Providing health care services is MGM'S prime activity widely spread over with medical, dental, nursing colleges & multispeciality hospitals. MGM'S University of Health Sciences is the new milestone of achievement.
                </p>

                <p>
                  In all MGM Institutions students are our top priority and their educational and social needs are at the heart of the MGM plannings. A dynamic academic environment promises you exciting & fulfilling student life.
                </p>

                <p>
                  We believe in continuous upgradation of infrastructural facilities along with quality improvement program for faculty and enhancement of work environment in all respects. Our teaching standards are consistently rated amongst the best. qualified & dedicated faculty is our strength. Our high educational standards are reflected in the excellent response we receive from the achievements of our alumni having well received in organizations of repute worldwide.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
                  <p className="text-blue-800 italic font-medium">
                    We are aware that success is no destination, it is a continuous journey.
                  </p>
                </div>

                <p>
                  I am thankfull to all those parents who put in their valuable trust with us giving opportunity to contribute for the career development of their children. With all my best wishes to all of you for the endeavor you have taken.
                </p>
              </div>

              {/* Signature */}
              {/* <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="mr-4 text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">With warm regards,<br/><span className="font-semibold text-indigo-700">Kamalkishor N. Kadam</span></p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* MGM Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-bold text-indigo-700 mb-2">32+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-bold text-indigo-700 mb-2">Multi</div>
            <div className="text-gray-600">Speciality Institutions</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-bold text-indigo-700 mb-2">1000s</div>
            <div className="text-gray-600">Successful Alumni</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ChairmansDeskPage;