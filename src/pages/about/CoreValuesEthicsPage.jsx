import React from 'react';

const CoreValuesEthicsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white mb-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Core Values, Code of Conduct & Ethics</h1>
        <p className="text-xl opacity-90">Guiding principles that shape our institution's character and community</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* Core Values Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
              Core Values
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Students seeking admission and trust of their parents are the primary reasons we exist as an Institution.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Our core values are:
            </p>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Integrity</h3>
                <p className="text-gray-700">
                  All activities should be conducted in an ethical manner. Research and teaching shall be carried out 
                  in an environment of academic freedom and honesty.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-3 text-green-800">Accountability</h3>
                <p className="text-gray-700">
                  Roles and responsibilities are assigned and people are held accountable for their deeds. We feel 
                  our liability towards society and ensure our actions add value to the Institute.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">Responsibility</h3>
                <p className="text-gray-700">
                  Everybody in the Institute is expected to discharge his/her duties with due responsibility.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold mb-3 text-teal-800">Transparency</h3>
                <p className="text-gray-700">
                  General records of maximum aspects of the functioning are maintained online to encourage transparency.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold mb-3 text-orange-800">Respect of Individual</h3>
                <p className="text-gray-700">
                  While carrying out interactions at all levels, the dignity and respect of an individual is observed.
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h3 className="text-xl font-semibold mb-3 text-pink-800">Faculty Empowerment</h3>
                <p className="text-gray-700">
                  Institute promotes and encourages faculty in their individual academic development and provides 
                  scope for enhancement in their participation in general governance.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h3 className="text-xl font-semibold mb-3 text-indigo-800">Service to Nation</h3>
                <p className="text-gray-700">
                  Institute is committed to developing skilled manpower to serve the Nation.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                <h3 className="text-xl font-semibold mb-3 text-emerald-800">Environmental Stewardship</h3>
                <p className="text-gray-700">
                  Committed to practicing green technologies for sustainable development of the Nation.
                </p>
              </div>
            </div>
          </div>

          {/* Code of Conduct Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
              Code of Conduct
            </h2>
            
            <div className="text-gray-700 leading-relaxed mb-6">
              <p className="mb-4">
                The Institute is a community of cultured intellectuals. It is expected that freedom should be exercised 
                with a sense of responsibility. Being aware of rights should go together with consciousness towards duties.
              </p>
              
              <p className="mb-4">
                All pleasures are to be enjoyed with a sense of morality. All arguments should take place maintaining dignity. 
                Mahatma Gandhiji's seven principles are strived to be followed: Wealth with work, Pleasure with conscience, 
                Knowledge with character, Commerce with morality, Science with humanity, Religion with sacrifice, and Politics with principle.
              </p>
              
              <p className="mb-6">
                The character of the Institution is built with discipline and harmony in functioning. Certain policies are formed 
                and communicated to all elements to strike the balance between freedom and responsibilities, rights and duties, 
                in pursuit of knowledge, respecting all individuals.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Student Code of Conduct</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-blue-700">Dress Code</h4>
                <p className="text-gray-700">
                  Students are required to follow the prescribed dress code: blue jeans and white shirt every day except Saturday.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-blue-700">Honesty</h4>
                <p className="text-gray-700">
                  Malpractices/cheating during tests/examinations or knowingly furnishing false information are strictly prohibited.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-blue-700">Transparent Administration</h4>
                <p className="text-gray-700">
                  Online information is maintained regarding student attendance and class conduction by teachers.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-blue-700">Disciplined Conduct</h4>
                <p className="text-gray-700">
                  Any behavior obstructing teaching, research, administration or other proceedings is subject to disciplinary action.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Additional Conduct Guidelines</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Respect for women:</strong> Students must ensure their behavior is impeccable toward the opposite gender.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Daily assembly:</strong> The day starts with National Anthem followed by birthday wishes and thought for the day.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Prohibition of Ragging:</strong> Strictly prohibited with severe consequences for violations.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Hostel Discipline:</strong> Rules and regulations must be strictly followed in hostels.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Substance-free Campus:</strong> Drugs, alcohol, and tobacco products are strictly prohibited.
                </p>
              </div>
            </div>
          </div>

          {/* Code of Ethics Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
              Code of Ethics
            </h2>
            
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                The institution has a well-established system to handle UG Projects, PG Dissertations, and PhD Theses. 
                Issues of copyright infringement and plagiarism are taken very seriously.
              </p>
              
              <p className="mb-4">
                Our library is equipped with plagiarism detection software. Each department has a team appointed by the 
                Director to follow up on procedures, led by respective departmental heads.
              </p>
              
              <p className="mb-6">
                This team investigates claims of plagiarism or misuse of documents or articles. When a project report, 
                dissertation, or thesis is found to have plagiarized other work or included third-party copyright material 
                without permission, the institute requires students to resubmit their work with proper citations.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-yellow-800">Our Commitment</h3>
                <p className="text-gray-700">
                  We are committed to maintaining the highest standards of academic integrity and ethical conduct 
                  throughout our institution, ensuring a fair and respectful environment for all members of our community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-32 space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Related Documents</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span className="text-blue-600 hover:text-blue-800">Student Handbook</span>
                </a>
                
                <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span className="text-blue-600 hover:text-blue-800">Faculty Code of Conduct</span>
                </a>
                
                <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span className="text-blue-600 hover:text-blue-800">Anti-Ragging Policy</span>
                </a>
                
                <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span className="text-blue-600 hover:text-blue-800">Plagiarism Policy</span>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Need Assistance?</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Grievance Cell</p>
                    <p className="text-gray-600">Email: grievance@mgmcen.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Anti-Ragging Committee</p>
                    <p className="text-gray-600">Email: antiragging@mgmcen.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Women's Grievance Cell</p>
                    <p className="text-gray-600">Email: wgc@mgmcen.ac.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Card */}
            <div className="bg-indigo-50 rounded-xl p-6 text-center">
              <svg className="w-12 h-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Our Pledge</h3>
              <p className="text-gray-700">
                To uphold the highest standards of integrity, ethics, and professional conduct in all our endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesEthicsPage;