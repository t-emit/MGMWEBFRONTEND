// src/pages/Academic/CSE/CSELaboratoryPage.jsx
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
  { name: "CSI/IEI", path: "/academics/computer-science-engineering/csi-iei" },
  { name: "Curriculum ", path: "/academics/computer-science-engineering/curriculum " },
  { name: "consultancy", path: "/academics/computer-science-engineering/consultancy" },
];

// Data for laboratories, extracted and given unique IDs
export const cseLaboratories = [
  { srNo: 1, id: 'lab-01-programming-lab', name: 'Lab-01 - Programming Lab', area: '66 .6 sqm', incharge: 'Mr. Mohammed Aijaz Ahmed', detailsLink: '53/lab-01-programming-lab.html' },
  { srNo: 2, id: 'lab-02-programming-lab', name: 'Lab-02 - Programming Lab', area: '66.6 sqm', incharge: 'Mr. Pankaj P. Pawar', detailsLink: '54/lab-02-programming-lab.html' },
  { srNo: 3, id: 'lab-03-data-structure-lab', name: 'Lab-03 - Data Structure Lab', area: '66.6  sqm', incharge: 'Dr. Kapre Bhagyashri Sudhakar', detailsLink: '55/lab-03-data-structure-lab.html' },
  { srNo: 4, id: 'lab-04-operating-system-lab', name: 'Lab-04 - Operating System Lab', area: '66.6 sqm', incharge: 'Mr. Bhandare Mangesh Nagnath', detailsLink: '56/lab-04-operating-system-lab.html' },
  { srNo: 5, id: 'lab-05-software-engineering-lab', name: 'Lab-05 - Software Engineering Lab', area: '66.6 sqm', incharge: 'Dr. Mrs. Manisha Y. Joshi', detailsLink: '57/lab-05-software-engineering-lab.html' },
  { srNo: 6, id: 'lab-06-dbms-cloud-computing-lab', name: 'Lab-06 - DBMS & Cloud Computing Lab', area: '66.6 sqm', incharge: 'Ms.Kale Jyoti S.', detailsLink: '58/lab-06-dbms--cloud-computing-lab.html' },
  { srNo: 7, id: 'lab-07-open-source-technology-and-advanced-programming-lab', name: 'Lab-07 - Open Source Technology and Advanced Programming Lab', area: '66.6 sqm', incharge: 'Ms. Nitu L. Pariyal', detailsLink: '59/lab-07-open-source-technology-and-advanced-programming-lab.html' },
  { srNo: 8, id: 'lab-08-project-development-and-research-lab', name: 'Lab-08 - Project Development and Research Lab', area: '66.6 sqm', incharge: 'Mr. Salve Suhas G', detailsLink: '60/lab-08-project-development-and-research-lab.html' },
  { srNo: 9, id: 'lab-09-e-yantra-and-iot-lab', name: 'Lab-09 - E-Yantra and IoT Lab', area: '66.6 sqm', incharge: 'Mr. Rahulsingh G. Bisen', detailsLink: '61/lab-09-e-yantra-and-iot-lab.html' },
  { srNo: 10, id: 'lab-10-ai-and-ml-lab', name: 'Lab-10 - AI and ML Lab', area: '66.6 sqm', incharge: 'Ms. Nikita S. Pande', detailsLink: '62/lab-10-ai-and-ml-lab.html' },
  { srNo: 11, id: 'server-room', name: 'Server Room', area: '36.75 sqm', incharge: 'Ms. Jyoti H. Patil', detailsLink: '43/server-room.html' },
];

const CSELaboratoryPage = () => {
  const location = useLocation(); // Hook to get the current URL path
  const currentDeptPath = "/academics/computer-science-engineering"; // Base path for CSE department

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        {/* Subtle background SVG for visual interest */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Laboratories</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Explore the state-of-the-art laboratory facilities in the Computer Science & Engineering Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs - NON-STICKY */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300`}>
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 overflow-x-auto">
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
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Computer Science & Engineering Laboratories
        </h2>

        <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800">
              <tr>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg">Sr. No.</th>
                <th scope="col" className="py-4 px-4 md:px-6">Laboratory Name</th>
                <th scope="col" className="py-4 px-4 md:px-6">Area</th>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg">Laboratory Incharge</th>
              </tr>
            </thead>
            <tbody>
              {cseLaboratories.map((lab, index) => (
                <tr key={lab.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150`}>
                  <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                    {lab.srNo}
                  </td>
                  <td className="py-4 px-4 md:px-6">
                    <Link to={`${currentDeptPath}/labs/${lab.id}`} className="font-semibold text-blue-800 hover:underline">
                      {lab.name}
                    </Link>
                  </td>
                  <td className="py-4 px-4 md:px-6">
                    {lab.area}
                  </td>
                  <td className="py-4 px-4 md:px-6">
                    {lab.incharge}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-4">&nbsp;</p> {/* Original <br/><br/> converted to p with non-breaking space */}
      </div>
    </div>
  );
};

export default CSELaboratoryPage;