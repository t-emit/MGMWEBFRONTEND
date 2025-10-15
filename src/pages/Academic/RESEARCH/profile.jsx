// src/pages/Academic/research/ResearchProfilePage.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Data for the University Affiliation table
const universityAffiliations = [
  { university: 'Swami Ramanand Teerth Marathwada University, Nanded', year: '2008' },
  { university: 'Dr. Babasaheb Ambedkar Technological University, Lonere', year: '2022' },
  { university: 'MoU with Kalinga University, Naya Raipur, Chattisgarh', year: '2021' },
];

// Data for Research Guides summary
const researchGuides = [
  { name: 'Dr. Geeta S. Lathkar', designation: 'Director, M.G.M’s College of Engineering, Nanded (Mechanical Engineering)', awarded: 10, ongoing: 5 },
  { name: 'Dr. A. M. Rajurkar', designation: 'Professor and Head, Computer Science and Engineering', awarded: 9, ongoing: 3 },
  { name: 'Dr. K. C. Jondhale', designation: 'Professor, Head Electronics and Telecommunication', awarded: 3, ongoing: 6 },
  { name: 'Dr. Mohd. Zameeruddin', designation: 'Associate Professor, Civil Engineering', awarded: 3, ongoing: '-' },
  { name: 'Dr. M. Y. Joshi', designation: 'Associate Professor, CSE Engineering', awarded: '-', ongoing: '-' },
];

// Data for Funded R&D Projects
const fundedProjects = [
    { title: "Development of an AI- based System for Detection of Lung Infections – Tuberculosis and Pneumonia for Quicker Diagnosis", agency: "BRNS", grant: "Rs.19,91,800/-", investigators: "Dr. A. M. Rajurkar, Mr. R. G. Bisen and Ms. N. S. Pande", year: "2023-24", duration: "3" },
    { title: "Development of an Automated System for Segmentation, Detection and Classification of Liver Tumors for Quicker Diagnosis", agency: "AMUP MDC", grant: "Rs.15,00,000/-", investigators: "Dr. A. M. Rajurkar, Mr. R. G. Bisen and Ms. N. S. Pande", year: "2021-22", duration: "3" },
    { title: "ICCET 2020 Conference Grant", agency: "AICTE / DBATU, Lonere", grant: "Rs.1,70,000/- + Rs.3,00,000/-", investigators: "Dr. A. M. Rajurkar", year: "2020", duration: "--" },
    { title: "Development of an Automated System for Musculoskeletal Image Analysis and Interpretation for Quicker Diagnosis", agency: "BRNS", grant: "Rs.24,90,550/-", investigators: "Dr. A. M. Rajurkar", year: "2014-15", duration: "3" },
    { title: "Content Based Video Retrieval", agency: "AICTE", grant: "Rs.7,00,000/-", investigators: "Dr. A. M. Rajurkar", year: "2007-08", duration: "2" },
];

// Define the sub-navigation tabs for the Research section
const researchDepartmentTabs = [
  { name: "Research Profile", path: "/academics/research" },
  { name: "Intellectual Property Cell", path: "/academics/research/ip-cell" },
];

const ResearchProfilePage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Research & Development</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Fostering innovation and academic excellence through dedicated research initiatives.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Research Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {researchDepartmentTabs.map((tab) => {
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          Research Center and Facilities
        </h2>

        {/* Department Overview */}
        <div className="prose prose-lg max-w-none text-gray-700 mb-8 print:text-sm">
          <p className="leading-relaxed">
            The Institute has a recognized research centre of <strong>Swami Ramanand Teerth Marathwada University, Nanded</strong> in Mechanical Engineering and Computer Science and Engineering since 2008. The research centre offers both full-time and part-time Ph.D. programs. The Institute has signed an MoU with <strong>Kalinga University, Naya Raipur, Chattisgarh</strong> for academic and research activities. The research and departmental laboratories are equipped with all necessary equipment and modern facilities. The research centre has been affiliated with <strong>Dr. Babasaheb Ambedkar Technological University, Lonere, Raigad (M.S.)</strong> since 2020.
          </p>
        </div>

        {/* University Affiliations Table */}
        <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none">
          <table className="w-full text-sm text-left text-gray-700 print:text-xs">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
              <tr>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg">Sr. No.</th>
                <th scope="col" className="py-4 px-4 md:px-6">University Name</th>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg">Affiliation Year</th>
              </tr>
            </thead>
            <tbody>
              {universityAffiliations.map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors`}>
                  <td className="py-4 px-4 md:px-6 font-medium text-gray-900">{index + 1}</td>
                  <td className="py-4 px-4 md:px-6 font-medium">{item.university}</td>
                  <td className="py-4 px-4 md:px-6 font-medium text-center">{item.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Research Guides Table */}
         <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none">
          <table className="w-full text-sm text-left text-gray-700 print:text-xs">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
              <tr>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg">Sr. No.</th>
                <th scope="col" className="py-4 px-4 md:px-6">Name of the Research Guide</th>
                <th scope="col" className="py-4 px-4 md:px-6">PhDs Awarded</th>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg">PhDs Ongoing</th>
              </tr>
            </thead>
            <tbody>
              {researchGuides.map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors`}>
                  <td className="py-4 px-4 md:px-6 font-medium text-gray-900">{index + 1}</td>
                  <td className="py-4 px-4 md:px-6 font-medium">
                    {item.name}
                    <p className="text-xs text-gray-600 font-normal">{item.designation}</p>
                  </td>
                  <td className="py-4 px-4 md:px-6 font-medium text-center">{item.awarded}</td>
                  <td className="py-4 px-4 md:px-6 font-medium text-center">{item.ongoing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Funded R&D Projects */}
        <h3 className="text-2xl font-bold mb-4 text-indigo-800 pt-4 border-t border-indigo-100">List of Funded R&D Projects and Conference Grants</h3>
        <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none">
          <table className="w-full text-sm text-left text-gray-700 print:text-xs">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-700 to-indigo-800 print:bg-gray-800">
              <tr>
                <th className="py-3 px-2 md:px-4">Sr. No.</th>
                <th className="py-3 px-2 md:px-4">Project Title</th>
                <th className="py-3 px-2 md:px-4">Funding Agency</th>
                <th className="py-3 px-2 md:px-4">Grant (Rs.)</th>
                <th className="py-3 px-2 md:px-4">Investigators</th>
                <th className="py-3 px-2 md:px-4">Year</th>
                <th className="py-3 px-2 md:px-4">Duration</th>
              </tr>
            </thead>
            <tbody>
                {fundedProjects.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors`}>
                        <td className="py-4 px-2 md:px-4 font-medium">{index + 1}</td>
                        <td className="py-4 px-2 md:px-4 font-medium">{item.title}</td>
                        <td className="py-4 px-2 md:px-4">{item.agency}</td>
                        <td className="py-4 px-2 md:px-4">{item.grant}</td>
                        <td className="py-4 px-2 md:px-4 text-xs">{item.investigators}</td>
                        <td className="py-4 px-2 md:px-4 text-center">{item.year}</td>
                        <td className="py-4 px-2 md:px-4 text-center">{item.duration}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Placeholder for Research Scholars List */}
        <div className="mt-8 pt-4 border-t border-indigo-100">
             <h3 className="text-2xl font-bold mb-4 text-indigo-800">Research Scholars Awarded Ph.D.</h3>
             <p className="text-gray-700">A comprehensive list of all research scholars who have been awarded their Ph.D. under the guidance of our esteemed faculty will be available here soon.</p>
        </div>

      </div>
    </div>
  );
};

export default ResearchProfilePage;