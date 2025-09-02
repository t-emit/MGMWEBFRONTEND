// import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Data for the Department Details table (kept from previous version)
const departmentDetails = [
  { label: 'Department Location', value: 'South Wing, Underground' },
  { label: 'Year of Establishment', value: '1984' },
  { label: 'Head of Department', value: 'Dr. Mrs. A. M. Rajurkar' },
  { label: 'Contact No', value: '02462 224756' },
  { label: 'E –mail ID', value: 'rajurkar_am@mgmcen.ac.in', type: 'email' },
  { label: 'Total No of Classrooms', value: '05' },
  { label: 'Total no of Laboratories', value: '10' },
  { label: 'Number of Professors', value: '03' },
  { label: 'Number of Assistant Professors', value: '17' },
  { label: 'Total Teaching Faculty', value: '20' },
  { label: 'Supporting Teaching Staff', value: '10' },
];

// Define the sub-navigation tabs for the CSE department
const cseDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/computer-science-engineering" },
  { name: "Vision-Mission", path: "/academics/computer-science-engineering/vision-mission" },
  { name: "Programmes", path: "/academics/computer-science-engineering/programmes" },
  { name: "Faculty Profile", path: "/academics/computer-science-engineering/faculty" },
  { name: "Laboratory", path: "/academics/computer-science-engineering/labs" },
  { name: "Training and Placement", path: "/academics/computer-science-engineering/training-placement" },
  { name: "Research & Publication", path: "/academics/computer-science-engineering/research-publication" },
  { name: "Achievements", path: "/academics/computer-science-engineering/achievements" },
  { name: "Departmental Activity", path: "/academics/computer-science-engineering/activities" },
  { name: "CUC", path: "/academics/computer-science-engineering/cuc" },
  { name: "CSI/IEI", path: "/academics/computer-science-engineering/csi-iei" },
  { name: "Curriculum ", path: "/academics/computer-science-engineering/curriculum " },
  { name: "consultancy", path: "/academics/computer-science-engineering/consultancy" },
];

const ComputerScienceEngineeringPage = () => {
  const location = useLocation(); // Hook to get the current URL path
  
  // Removed isScrolled state and useEffect logic as requested

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none"> {/* Increased mt-28 for breathing room */}
      {/* Hero Section with improved gradient and shadow */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Computer Science & Engineering</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Comprehensive profile of the Computer Science & Engineering Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs - NON-STICKY */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden`}>
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {cseDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                  ${isActive
                    ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 border border-gray-200'
                  }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area with improved card design */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Computer Science &amp; Engineering Department
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Department Overview Paragraph */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-6 print:text-sm">
              <p className="leading-relaxed mb-4">
                The Department of Computer Science and Engineering was established in 1984. The Department, since its inception, has maintained a steady growth in every sphere of its activities and played an important role in bringing a vibrant and forward-looking academic environment. Department is offering high quality undergraduate and postgraduate Engineering courses as well as providing an excellent infrastructure and facilities for state of the art technical education and research. The Department has research centre of Swami Ramanand Teerth Marathwada University, Nanded &amp; Dr. Babasaheb Ambedkar Technological University, Lonere for Ph.D. in CSE. The Department has received research grants of Rs. 59.99 Lakhs from different funding agencies such as BARC Mumbai, AICTE Delhi and AMUPMDC Mumbai. The Department of Computer Science &amp; Engineering strives for excellence in creating, applying, and imparting knowledge in Computer Science and Engineering through comprehensive educational programs, research in collaboration with industry and government, dissemination through scholarly publications, and service to professional societies, the community, the State, and the Nation.
              </p>
            </div>

            {/* Faculty List PDF Link with improved button */}
            <div className="flex justify-start mb-8 print:hidden">
              <a
                href="/pdf/cse-faculty-list.pdf" // Use absolute path from public directory
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out inline-flex items-center transform hover:-translate-y-1 hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                Faculty List From 2022-2024
              </a>
            </div>

            {/* Department Details Table with improved styling */}
            <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
              <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
                  <tr>
                    <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Detail</th>
                    <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentDetails.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                      <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">
                        <strong>{item.label}</strong>
                      </td>
                      <td className="py-4 px-4 md:px-6 print:py-2 print:px-3">
                        {item.type === 'email' ? (
                          <a href={`mailto:${item.value}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center print:text-gray-700">
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

          {/* Right Sidebar - HOD Information */}
          <div className="lg:w-96 flex-shrink-0 print:hidden">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 sticky top-32">
              <img
                alt="Dr. Rajurkar A.M., Head, Department of CSE"
                className="w-full h-64 object-cover"
                src="/images/img-head-cse-p2.jpg"
              />
              <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-semibold text-blue-800 mb-1">
                  Dr. Rajurkar A.M.
                </h3>
                <p className="text-gray-600 mb-2">Head, Department of CSE</p>
                <a
                  href="mailto:rajurkar_am@mgmce.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  rajurkar_am@mgmce.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />

        {/* Vision and Mission Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 print:grid-cols-2 print:gap-4 print:mb-6">
          {/* Vision Section */}
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-3 print:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-700 print:text-xl">Vision</h3>
            </div>
            <p className="text-gray-700 text-center leading-relaxed print:text-sm">
              To be one of the leading Departments for Computer Science &amp; Engineering education, developing proficient Engineers with global acceptance in the service of mankind.
            </p>
          </div>

          {/* Mission Section */}
          <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 mb-3 print:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-700 print:text-xl">Mission</h3>
            </div>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
              <li className="pl-2">
                Providing technical skills with strong fundamentals of Computer Science discipline with an emphasis on software development.
              </li>
              <li className="pl-2">
                Inculcating analytical, programming and multidisciplinary skills to enhance employability.
              </li>
              <li className="pl-2">
                Fostering problem-solving, team-building, and lifelong learning skills with societal, environmental and ethical sense.
              </li>
              <li className="pl-2">
                Developing researchers and entrepreneurs to solve real-life problems through industry interactions and collaborations.
              </li>
            </ol>
          </div>
        </div>

        {/* Program Specific Outcomes (PSOs) Section */}
        <div className="mb-8 p-6 bg-purple-50 rounded-xl border border-purple-100 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4 print:mb-6">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 mb-3 print:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 print:text-xl">Program Specific Outcomes (PSOs)</h3>
          </div>
          <p className="text-gray-700 text-center font-semibold mb-4 print:text-sm">
            Passout Students of Computer Science and Engineering program should be able to:
          </p>
          <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
            <li className="pl-2">
              Apply knowledge of core courses and emerging areas including Data Science, AI/ML, Cloud Computing, Information security, Image Processing for solving real life problems.
            </li>
            <li className="pl-2">
              Design and develop software and hardware systems using latest technologies, programming languages, and open-source platforms.
            </li>
            <li className="pl-2">
              Apply standard software engineering principles and professional skills to create solutions that meet Industry needs.
            </li>
          </ol>
        </div>

        {/* Program Educational Outcomes (PEOs) Section */}
        <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4 print:mb-6">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-3 print:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 print:text-xl">Program Educational Outcomes (PEOs)</h3>
          </div>
          <p className="text-gray-700 text-center font-semibold mb-4 print:text-sm">
            Graduates of Computer Science &amp; Engineering employed should have ability to:
          </p>
          <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
            <li className="pl-2">
              Analyze Computer Science &amp; Engineering techniques, relate them with real life problems and provide solutions that are technically sound, economically viable and socially acceptable.
            </li>
            <li className="pl-2">
              Utilize acquired programing, analytical, design and implementation skills to formulate and solve computational problems.
            </li>
            <li className="pl-2">
              Evolve as competent professionals, researchers and entrepreneurs having collaborative and leadership skills with effective communication abilities to pursue appropriate career options and become capable of working in multi-disciplinary environment.
            </li>
            <li className="pl-2">
              Excel as socially committed Computer Engineers having good ethical and human values.
            </li>
            </ol>
        </div>

        {/* Program Outcomes (POs) Section */}
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-3 print:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 print:text-xl">Program Outcomes [PO]</h3>
          </div>
          <ol className="list-decimal list-inside text-gray-700 space-y-4 pl-4 print:text-sm print:space-y-2">
            {[
              "Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
              "Problem Analysis: Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
              "Design/development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
              "Conduct Investigations of Complex Problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
              "Modern Tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.",
              "The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
              "Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
              "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
              "Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
              "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
              "Project Management and Finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
              "Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
            ].map((item, index) => (
              <li key={index} className="pl-2 pb-2 border-b border-gray-200 last:border-b-0 print:border-b print:pb-1">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Print button for better accessibility */}
      <div className="fixed bottom-6 right-6 print:hidden">
        <button 
          onClick={() => window.print()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
          aria-label="Print page"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m4 4h6a2 2 0 002-2v-4a2 2 0 00-2-2h-6a2 2 0 00-2 2v4a2 2 0 002 2z"></path>
          </svg>
        </button>
      </div>

      <style>{`
        /* Styles for Print Media */
        @media print {
          .container {
            width: 100% !important;
            max-width: none !important;
            margin-top: 0 !important;
            padding: 0.5rem !important;
          }
          body {
            font-size: 12pt;
            line-height: 1.4;
          }
          h1, h2, h3, h4 {
            page-break-after: avoid;
          }
          .flex {
            display: block;
          }
          .lg\\:w-96, .print\\:hidden {
            display: none;
          }
          /* Ensure table rows break naturally */
          table, thead, tbody, th, td, tr {
            display: block;
          }
          tr {
            border: 1px solid #ccc;
            margin-bottom: 0.5rem;
          }
          td {
            border: none;
            position: relative;
            padding-left: 50% !important;
          }
          td:before {
            content: attr(data-label);
            position: absolute;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
            font-weight: bold;
          }
        }
      `}</style>
    </div>
  );
};

export default ComputerScienceEngineeringPage;