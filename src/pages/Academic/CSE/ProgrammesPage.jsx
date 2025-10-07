import React from 'react'; // useState is not directly used in this version but kept for consistency
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

// Data for the UG/PG Course table, extracted directly from the original HTML
const cseCourses = [
  { srNo: '1', name: 'B. Tech. Computer Science & Engineering', startYear: '1984', duration: '04', type: 'Full Time', intake: '180' },
  { srNo: '2', name: 'M.Tech. (Computer Science & Engineering)', startYear: '2003', duration: '02', type: 'Full Time', intake: '09' },
];

// Data for the Program Assessment Committee (PAC) table
const pacMembers = [
  { srNo: '1', name: 'Dr. A. M. Rajurkar', designation: 'Professor and Head (CSE Dept.)', status: 'Chairman' },
  { srNo: '2', name: 'Dr. M. G. Harkare', designation: 'Professor and Head (Mech. Dept.)', status: 'IQAC Co-ordinator' },
  { srNo: '3', name: 'B. S. Kapre', designation: 'Assistant Professor', status: 'Department IQAC Co-ordinator' },
  { srNo: '4', name: 'Mr. S. A. Hashmi', designation: 'Associate Professor and Head (IT Dept.)', status: 'Domain Expert' },
  { srNo: '5', name: 'Prof. J. H. Patil', designation: 'Professor', status: 'Member' },
  { srNo: '6', name: 'Dr. M.Y. Joshi', designation: 'Professor', status: 'Member' },
  { srNo: '7', name: 'Invited Expert', designation: '', status: '' }, // Original had empty designation/status for this entry
];

// Data for the Department Advisory Board (DAB) table
const dabMembers = [
  { srNo: '1', name: 'Dr. A. M. Rajurkar', designation: 'Professor and Head', status: 'Chairman' },
  { srNo: '2', name: 'Dr. B. S. Kapre', designation: 'Assistant Professor', status: 'Department NBA Co-ordinator' },
  { srNo: '3', name: 'Mohd. Aijaz Ahmed', designation: 'Assistant Professor', status: 'Department NBA Co-ordinator' },
  { srNo: '4', name: 'Prof. J. H. Patil', designation: 'Professor', status: 'Academic Expert' },
  { srNo: '5', name: 'Dr. M. Y. Joshi', designation: 'Professor', status: 'Academic Expert' },
  { srNo: '6', name: 'Dr. R. R. Manthalkar', designation: 'Professor, Dept. of ECT, SGGSIET, Nanded', status: 'Senior Academician (Other Institution)' },
  { srNo: '7', name: 'Dr. P. J. Kulkarni', designation: 'Professor, Dept. of CSE, RIT, Islampur. Former Dy. Director, WCE, Sangali', status: 'Senior Academician (Other Institution)' },
  { srNo: '8', name: 'Mr. Deepak Sar', designation: 'Partner at ITY Consulting', status: 'Industrial Expert' },
  { srNo: '9', name: 'Mr. Shrinivas Gosala', designation: 'General Manager, Wipro Technologies, Bangalore', status: 'Industrial Expert' },
  { srNo: '10', name: 'Mr. Manish Kathuria', designation: 'Technical Project Manager at Persistant Pvt. Ltd., Pune', status: 'Alumni' },
  { srNo: '11', name: 'Mr. Atul Joshi', designation: 'Principal SW Engineer at Infinera, Bangalore', status: 'Alumni' },
  { srNo: '12', name: 'Dr. Sulabha Kahalekar', designation: 'Doctor', status: 'Parent Representative' },
  { srNo: '13', name: 'Aniket Bais', designation: 'Student (B.Tech. CSE)', status: 'Student Representative' },
  { srNo: '14', name: 'Aditya Kulkarni', designation: 'Student (TYCSE)', status: 'Student Representative' },
];

// Data for the Course Outcomes links
const courseOutcomesLinks = [
  { text: 'SY CSE Course Outcomes', href: '/pdf/SY%20CSE%20Course%20Outcomes.xlsx' },
  { text: 'TY CSE Course Outcomes.xlsx', href: '/pdf/TY%20CSE%20Course%20Outcomes.xlsx' },
  { text: 'Btech (Final year)Course Outcomes.xlsx', href: '/pdf/Btech%20(Final%20year)Course%20Outcomes.xlsx' },
];

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

const ProgrammesPage = () => {
  const location = useLocation(); // Hook to get the current URL path

  // `isCommitteeVisible` is now initialized to true and no longer has a setter,
  // making the section always visible and not toggleable.
//   const isCommitteeVisible = true; 

  // Reusable table rendering function for generic table structure
  const renderTable = (headers, data, keyPrefix, isNested = false) => (
    <div className={`overflow-x-auto relative shadow-md rounded-lg my-6 ${isNested ? 'border border-gray-200' : 'border border-gray-300'}`}>
      <table className="w-full text-sm text-left text-gray-700">
        <thead className={`text-xs text-white uppercase ${isNested ? 'bg-indigo-600' : 'bg-indigo-700'}`}>
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className={`py-3 px-4 md:px-6 ${index === 0 ? 'rounded-tl-lg' : ''} ${index === headers.length - 1 ? 'rounded-tr-lg' : ''} whitespace-nowrap`}>
                {header.includes('<br>') ? <span dangerouslySetInnerHTML={{ __html: header }} /> : header}
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
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl"> {/* Ensured mt-32 is applied here */}
      {/* Hero Section - Consistent and visually richer */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        {/* Subtle background SVG for visual interest */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1s0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Computer Science & Engineering Programmes</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          A comprehensive list of undergraduate and postgraduate courses and departmental information.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs - NON-STICKY */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300`}>
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 overflow-x-auto"> {/* Added overflow-x-auto for responsiveness */}
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

      {/* Main Content Area - Consistent card design and improved readability */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Programmes Offered
        </h2>

        {/* UG/PG Course Table */}
        {renderTable(
          ['Sr. No.', 'Course Name', 'Start Year', 'Duration (Years)', 'Type', 'Intake Capacity'],
          cseCourses,
          'cse-course'
        )}

        <div className="my-8"></div> {/* Spacer consistent with original <hr> and <p>&nbsp;</p> */}

        {/* Departmental Committee Section (Always Visible) - Enhanced Styling */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 mb-8 transition-all duration-300 hover:shadow-md">
          <h2 // Changed from h2 with toggle props to a static h2
            className="flex items-center justify-between text-2xl font-bold text-indigo-800 p-0 mb-0" // Removed cursor-pointer, hover, and padding that implies interactivity
          >
            <span>Departmental Committee</span>
          </h2>
          {/* Content is now always rendered, no conditional `isCommitteeVisible &&` */}
          <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg">
            <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
              <h3 className="text-xl md:text-2xl font-semibold text-center text-blue-700 mb-4">Program Assessment Committee</h3>
              <p className="mb-4">
                The Program Assessment Committee (PAC) has been formed to monitor different
                departmental activities. The PAC consists of the HOD and faculty members of the
                department, who periodically monitor the departmental activities and evaluate
                different parameters.
              </p>

              <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-3 mt-6 text-center">
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

              <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-3 mt-6 text-center">
                Program Assessment Committee Members
              </h4>
              {renderTable(
                ['Sr.&nbsp;&nbsp;&nbsp;No.', 'Name', 'Designation', 'Status'], // Preserving original headers with &nbsp; and <br>
                pacMembers,
                'pac-member',
                true // Indicate nested table for slightly different styling
              )}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-3 mt-6 text-center">
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

              <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-3 mt-6 text-center">
                Department Advisory Board Members
              </h4>
              {renderTable(
                ['Sr.&nbsp;&nbsp;&nbsp;No.', 'Name', 'Designation', 'Status'], // Preserving original headers with &nbsp; and <br>
                dabMembers,
                'dab-member',
                true // Indicate nested table for slightly different styling
              )}
            </div>
          </div>
        </div>

        {/* Course Outcomes Links - Improved Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-indigo-800 mb-6">Course Outcomes</h3>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
            <p className="text-gray-700 mb-4">Access the course outcomes for different programs:</p>
            <ul className="space-y-3">
              {courseOutcomesLinks.map((link, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 hover:text-blue-900 hover:underline transition-colors"
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

export default ProgrammesPage;