import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// --- Helper function and Placeholder Data ---
// (Replace this with your actual data and functions)

// A placeholder for your table rendering function
const renderTable = (headers, data, keyPrefix) => (
  <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
    <thead>
      <tr className="bg-gray-100 border-b">
        {headers.map((header, index) => (
          <th key={index} className="text-left p-3 font-semibold text-gray-600" dangerouslySetInnerHTML={{ __html: header }}></th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={`${keyPrefix}-${rowIndex}`} className="border-b hover:bg-gray-50">
          {Object.values(row).map((cell, cellIndex) => (
            <td key={cellIndex} className="p-3 text-gray-700">{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);


// Placeholder data - replace with your actual data from your state or props
const itCourses = [
  { srNo: 1, courseName: 'Bachelor of Engineering in IT', startYear: 2001, duration: 4, type: 'UG', intake: 120 },
  { srNo: 2, courseName: 'Master of Engineering in IT', startYear: 2010, duration: 2, type: 'PG', intake: 18 },
];

const pacMembers = [
    { srNo: 1, name: 'Dr. A. B. Chavan', designation: 'Professor & Head', status: 'Chairman' },
    { srNo: 2, name: 'Mr. C. D. Mane', designation: 'Associate Professor', status: 'Member' },
];

const dabMembers = [
    { srNo: 1, name: 'Mr. E. F. Joshi', designation: 'Industry Expert', status: 'Member' },
    { srNo: 2, name: 'Dr. G. H. Patil', designation: 'Academic Expert', status: 'Member' },
];

const courseOutcomesLinks = [
  { href: "#", text: "Course Outcomes for Under-Graduate Program (B.E. in Information Technology)" },
  { href: "#", text: "Course Outcomes for Post-Graduate Program (M.E. in Information Technology)" },
];

// --- Your React Component ---

const ITProgrammesPage = () => {
  const location = useLocation();

  // Navigation tabs for the Information Technology department
  // MOVED HERE: This must be defined before it is used in the JSX below.
  const itDepartmentTabs = [
    { name: "Faculty Detail", path: "/academics/information-technology/faculty-detail" },
    { name: "Faculty Profile", path: "/academics/information-technology/faculty-profile" },
    { name: "Information Technology", path: "/academics/information-technology" },
    { name: "IT Achievements", path: "/academics/information-technology/achievements" },
    { name: "IT Consultancy", path: "/academics/information-technology/consultancy" },
    { name: "IT Curriculum", path: "/academics/information-technology/curriculum" },
    { name: "IT Departmental Activity", path: "/academics/information-technology/departmental-activity" },
    { name: "IT Departmental Committees", path: "/academics/information-technology/departmental-committees" },
    { name: "IT Laboratory Detail", path: "/academics/information-technology/laboratory-detail" },
    { name: "IT Laboratory", path: "/academics/information-technology/laboratory" },
    { name: "IT Profile", path: "/academics/information-technology/profile" },
    { name: "IT Programmes", path: "/academics/information-technology/programmes" },
    { name: "IT Research Publication", path: "/academics/information-technology/research-publication" },
    { name: "ITSA", path: "/academics/information-technology/itsa" },
    { name: "IT Training Placement", path: "/academics/information-technology/training-placement" },
    { name: "IT Vision Mission", path: "/academics/information-technology/vision-mission" },
  ];

  return (
    <div>
      {/* Department Sub-Navigation Tabs */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300`}>
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
                    ? 'bg-cyan-100 text-cyan-700 border-2 border-cyan-300 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border border-gray-200'
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
        <h2 className="text-3xl font-bold mb-8 text-teal-800 border-b-2 border-teal-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Programmes Offered
        </h2>

        {/* UG/PG Course Table */}
        {renderTable(
          ['Sr. No.', 'Course Name', 'Start Year', 'Duration (Years)', 'Type', 'Intake Capacity'],
          itCourses,
          'it-course'
        )}

        <div className="my-8"></div>

        {/* Departmental Committee Section */}
        <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border-l-4 border-cyan-500 rounded-xl p-5 md:p-6 mb-8 transition-all duration-300 hover:shadow-md">
          <h2 className="flex items-center justify-between text-2xl font-bold text-teal-800 p-0 mb-0">
            <span>Departmental Committee</span>
          </h2>
          <div className="mt-6 pt-6 border-t border-cyan-200 text-gray-700 leading-relaxed text-base md:text-lg">
            <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
              <h3 className="text-xl md:text-2xl font-semibold text-center text-cyan-700 mb-4">Program Assessment Committee</h3>
              <p className="mb-4">
                The Program Assessment Committee (PAC) has been formed to monitor different
                departmental activities. The PAC consists of the HOD and faculty members of the
                department, who periodically monitor the departmental activities and evaluate
                different parameters.
              </p>

              <h4 className="text-lg md:text-xl font-semibold text-cyan-700 mb-3 mt-6 text-center">
                Roles and responsibilities of the PAC:
              </h4>
              <ol className="list-decimal list-inside pl-6 space-y-2 mb-6">
                <li>Formulating and updating department's vision and mission statements.</li>
                <li>Monitoring the attainments of Course Outcomes (COs), Program Outcomes (POs),
                  Program Specific Outcomes (PSOs) and Program Educational Objectives (PEOs).</li>
                <li>Suggesting ways and means to reduce the curriculum gaps in achieving POs and
                  PSOs.</li>
                <li>Evaluating program effectiveness and proposing necessary changes.</li>
                <li>Measuring the extent of adherence to planned activities and calendar of
                  events.</li>
                <li>Preparation of periodic reports, records on program activities, progress, and
                  status reports.</li>
              </ol>

              <h4 className="text-lg md:text-xl font-semibold text-cyan-700 mb-3 mt-6 text-center">
                Program Assessment Committee Members
              </h4>
              {renderTable(
                ['Sr.&nbsp;&nbsp;&nbsp;No.', 'Name', 'Designation', 'Status'],
                pacMembers,
                'pac-member',
                true
              )}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
              <h3 className="text-xl md:text-2xl font-semibold text-cyan-700 mb-3 mt-6 text-center">
                Department Advisory Board
              </h3>
              <p className="mb-4">
                The Departmental Advisory Board (DAB) has been formed with the objectives of
                remaining up to date with the latest requirements of the industry and incorporating
                necessary components in the curriculum as much as possible.
                The roles and responsibilities of DAB are as follows:
              </p>
              
              <ol className="list-decimal list-inside pl-6 space-y-2 mb-6">
                <li>Suggest improvement in academic plans and recommend standard practices for
                  attainment of POs, PEOs & PSOs.</li>
                <li>Encourage industry-institute interactions to bridge up curriculum gap and suggest
                  quality improvement initiatives to enhance employability.</li>
                <li>Redefine existing PEOs, aligning PEOs to the mission statements and defining
                  program-specific outcomes.</li>
                <li>To propose necessary action plans for skill development of students, required for
                  entrepreneurship development and quality improvement.</li>
                <li>To identify and suggest thrust areas to conduct various activities such as final
                  year projects, training courses and additional experiments to meet PEOs.</li>
              </ol>

              <h4 className="text-lg md:text-xl font-semibold text-cyan-700 mb-3 mt-6 text-center">
                Department Advisory Board Members
              </h4>
              {renderTable(
                ['Sr.&nbsp;&nbsp;&nbsp;No.', 'Name', 'Designation', 'Status'],
                dabMembers,
                'dab-member',
                true
              )}
            </div>
          </div>
        </div>

        {/* Course Outcomes Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-teal-800 mb-6">Course Outcomes</h3>
          <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 shadow-sm">
            <p className="text-gray-700 mb-4">Access the course outcomes for different programs:</p>
            <ul className="space-y-3">
              {courseOutcomesLinks.map((link, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-cyan-700 hover:text-cyan-900 hover:underline transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITProgrammesPage;