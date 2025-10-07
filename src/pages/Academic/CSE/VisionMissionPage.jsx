import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  { name: "IEI", path: "/academics/computer-science-engineering/csi-iei" },
  { name: "Curriculum ", path: "/academics/computer-science-engineering/curriculum " },
  { name: "consultancy", path: "/academics/computer-science-engineering/consultancy" },
  { name: "Innovation in teaching", path: "/academics/computer-science-engineering/consultancy" },
  
];

const VisionMissionPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Vision & Mission</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Guiding principles and objectives of the Computer Science & Engineering Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
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

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Vision, Mission & Outcomes
        </h2>

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

      
    </div>
  );
};

export default VisionMissionPage;