import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Data for the UG/PG Course table, extracted from the provided HTML
const itCourses = [
  { srNo: '1', name: 'B. Tech. Information Technology', startYear: '1999', duration: '04', type: 'Full Time', intake: 'Not Specified' },
  // The provided HTML doesn't list an M.Tech program for IT, so it's excluded.
];

// Data for the Department Tabs, based on the navigation in the provided HTML
const itDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/information-technology/profile" },
  { name: "Programmes", path: "/academics/information-technology/programmes" },
  { name: "Faculty Profile", path: "/academics/information-technology/faculty-profile" },
  { name: "Laboratory", path: "/academics/information-technology/laboratory" },
  { name: "Training and Placement", path: "/academics/information-technology/training-placement" },
  { name: "Research & Publication", path: "/academics/information-technology/research-publication" },
  { name: "Achievement", path: "/academics/information-technology/achievement" },
  { name: "Departmental Activity", path: "/academics/information-technology/departmental-activity" },
  { name: "ITSA", path: "/academics/information-technology/itsa" },
  { name: "Downloads", path: "/academics/information-technology/downloads" },
  { name: "Consultancy", path: "/academics/information-technology/consultancy" },
];

const ItProgrammesPage = () => {
  const location = useLocation(); // Hook to get the current URL path

  // Reusable table rendering function for generic table structure
  const renderTable = (headers, data, keyPrefix) => (
    <div className="overflow-x-auto relative shadow-md rounded-lg my-6 border border-gray-300">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-white uppercase bg-indigo-700">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className={`py-3 px-4 md:px-6 ${index === 0 ? 'rounded-tl-lg' : ''} ${index === headers.length - 1 ? 'rounded-tr-lg' : ''} whitespace-nowrap`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={`${keyPrefix}-${rowIndex}`} className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150`}>
              {Object.values(row).map((value, colIndex) => (
                <td key={`${keyPrefix}-${rowIndex}-${colIndex}`} className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-pre-line">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Information Technology Programmes</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Explore the undergraduate courses and core objectives of the Information Technology department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 overflow-x-auto">
          {itDepartmentTabs.map((tab) => {
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
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Programmes Offered
        </h2>

        {/* UG Course Table */}
        {renderTable(
          ['Sr. No.', 'Course Name', 'Start Year', 'Duration (Years)', 'Type', 'Intake Capacity'],
          itCourses,
          'it-course'
        )}

        <div className="my-8"></div>

        {/* Vision, Mission, and Objectives Section (from provided HTML) */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">Department Vision & Mission</h2>
          
          <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg space-y-8">
            
            {/* Vision */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-3">Vision</h3>
              <p>To be one of the leading Department to develop proficient IT Engineers with global acceptance in the service of society and IT industry.</p>
            </div>

            {/* Mission */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-3">Mission</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong className="font-semibold">M1:</strong> Developing successful IT Professionals with strong practical and theoretical knowledge of Engineering, Programming, Hardware and Software Systems with multidisciplinary approach.</li>
                <li><strong className="font-semibold">M2:</strong> Grooming the graduates as professional problem solvers having ability to use technological advancements in Software Engineering, Information and Communication Technologies with global outlook.</li>
                <li><strong className="font-semibold">M3:</strong> Inculcating employability skills, leadership qualities, entrepreneurial skills, innovation and research in collaboration with IT industry, academia and alumni.</li>
                <li><strong className="font-semibold">M4:</strong> Imbibing professional ethics, social values and environmental awareness with a commitment for lifelong learning.</li>
              </ul>
            </div>
            
            {/* PEOs */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-3">Program Educational Objectives (PEOs)</h3>
              <p className="mb-4">Graduates of the Program will:</p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong className="font-semibold">PEO1:</strong> Demonstrate breadth and depth of knowledge in Hardware, Software Systems and Programming to solve real-life problems.</li>
                <li><strong className="font-semibold">PEO2:</strong> Exhibit analytical and design skills to develop sustainable solutions using modern tools and techniques with a focus on Software Development.</li>
                <li><strong className="font-semibold">PEO3:</strong> Pursue higher education and research in emerging areas of Information Technology such as Data Science, Information and Network Security, Machine Learning and Artificial Intelligence applicable for professional development.</li>
                <li><strong className="font-semibold">PEO4:</strong> Showcase leadership qualities and entrepreneurial skills with effective communication skills, teamwork, social values and passion for lifelong learning.</li>
              </ul>
            </div>

            {/* PSOs */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-3">Program Specific Outcomes (PSOs)</h3>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong className="font-semibold">PSO1:</strong> Ability to apply standard Software Engineering practices in system development using different hardware and programming platforms.</li>
                <li><strong className="font-semibold">PSO2:</strong> Analyze, design and develop efficient software applications in the areas related to Embedded Systems, IOT, Data Mining, Cloud Computing, Database Systems, Mobile and Web Technologies.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItProgrammesPage;