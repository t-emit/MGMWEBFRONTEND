import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Define the sub-navigation tabs for the CSE department (replicated from ComputerScienceEngineeringPage)
const cseDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/computer-science-engineering" },
  { name: "Programmes", path: "/academics/computer-science-engineering/programmes" },
  { name: "Faculty Profile", path: "/academics/computer-science-engineering/faculty" },
  { name: "Laboratory", path: "/academics/computer-science-engineering/labs" },
  { name: "Training and Placement", path: "/academics/computer-science-engineering/training-placement" },
  { name: "Research & Publication", path: "/academics/computer-science-engineering/research-publication" },
  { name: "Achievements", path: "/academics/computer-science-engineering/achievements" },
  { name: "Departmental Activity", path: "/academics/computer-science-engineering/activities" },
  { name: "CUC", path: "/academics/computer-science-engineering/cuc" },
  { name: "CSI/IEI", path: "/academics/computer-science-engineering/csi-iei" },
  { name: "Downloads", path: "/academics/computer-science-engineering/downloads" },
  { name: "Resources", path: "/academics/computer-science-engineering/resources" },
];

const TrainingPlacementPage = () => {
  const location = useLocation(); // Hook to get the current URL path

  // State to manage the visibility of each main accordion section
  const [isPlacementsVisible, setPlacementsVisible] = useState(false);
  const [isInternshipVisible, setInternshipVisible] = useState(false);
  const [isTrainingVisible, setTrainingVisible] = useState(false);
  const [isIndustrialVisitVisible, setIndustrialVisitVisible] = useState(false);

  // State to manage the visibility of nested industrial visit accordion sections
  const [isInosysJune19Visible, setInosysJune19Visible] = useState(false);
  const [isInnosysMarch23Visible, setInnosysMarch23Visible] = useState(false);
  const [isISROIntelMarch23Visible, setISROIntelMarch23Visible] = useState(false);

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Training and Placement</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Comprehensive details about placement records, internship opportunities, training programs, and industrial visits.
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

      {/* Main Content Area - Consistent card design and improved readability */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Career Development at CSE
        </h2>

        {/* Main Accordion Container */}
        <div className="space-y-6"> {/* Increased spacing between accordion items */}

          {/* Placements Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3
              className={`flex items-center justify-between text-2xl font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-200 rounded-lg p-3 -m-3 md:-m-4 ${isPlacementsVisible ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-800'}`}
              onClick={() => setPlacementsVisible(!isPlacementsVisible)}
            >
              <span>Placements</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isPlacementsVisible ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </h3>
            {isPlacementsVisible && (
              <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm my-2">
                  The placement record of Computer Science Engineering students is a reflection of the academic excellence, technical proficiency, and industry-relevant skills acquired throughout their education. Over the years, our students have consistently demonstrated their ability to meet the demands of the fast-paced technology sector, securing positions in leading companies across diverse industries. Our dedicated placement initiatives, coupled with strong industry ties, ensure that students are provided with ample opportunities to showcase their skills in real-world scenarios.
                </p>
                <div className="w-full h-[700px] my-4 rounded-md overflow-hidden border border-gray-200 shadow-inner">
                  <iframe
                    title="Placement Details"
                    src="https://mgmcen.ac.in/pdf/Placement%20Details%20for%20website-3.pdf"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
                <p className="text-sm font-semibold my-2 text-indigo-700">
                  Our Major Recruiters
                </p>
                <img src="/pdf/hb.png" alt="Major Recruiters" className="w-full h-auto object-contain rounded-md shadow-sm my-4 border border-gray-100" />
                <p className="text-sm font-semibold my-2 text-indigo-700">
                  Placement at a Glance
                </p>
                <img src="/pdf/kl.png" alt="Placement at a Glance 1" className="w-full h-auto object-contain rounded-md shadow-sm my-4 border border-gray-100" />
                <img src="/pdf/kj.png" alt="Placement at a Glance 2" className="w-full h-auto object-contain rounded-md shadow-sm my-4 border border-gray-100" />
                <img src="/pdf/jv.png" alt="Placement at a Glance 3" className="w-full h-auto object-contain rounded-md shadow-sm my-4 border border-gray-100" />
                <img src="/pdf/kln.png" alt="Placement at a Glance 4" className="w-full h-auto object-contain rounded-md shadow-sm my-4 border border-gray-100" />
              </div>
            )}
          </div>

          {/* Internship Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3
              className={`flex items-center justify-between text-2xl font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-200 rounded-lg p-3 -m-3 md:-m-4 ${isInternshipVisible ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-800'}`}
              onClick={() => setInternshipVisible(!isInternshipVisible)}
            >
              <span>Internship</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isInternshipVisible ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </h3>
            {isInternshipVisible && (
              <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg bg-white p-4 rounded-lg shadow-sm">
                <div className="w-full h-[700px] my-4 rounded-md overflow-hidden border border-gray-200 shadow-inner">
                  <iframe
                    title="Internship Details"
                    src="https://mgmcen.ac.in/pdf/Internship%20Details%20for%20Website.pdf"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
                <p className="mb-4">
                  <a
                    href="https://mgmcen.ac.in/pdf/Internship%20Details%20for%20Website.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline font-semibold flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Open PDF in new page
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Training Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3
              className={`flex items-center justify-between text-2xl font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-200 rounded-lg p-3 -m-3 md:-m-4 ${isTrainingVisible ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-800'}`}
              onClick={() => setTrainingVisible(!isTrainingVisible)}
            >
              <span>Training</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isTrainingVisible ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </h3>
            {isTrainingVisible && (
              <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed text-base md:text-lg bg-white p-4 rounded-lg shadow-sm">
                <div className="w-full h-[700px] my-4 rounded-md overflow-hidden border border-gray-200 shadow-inner">
                  <iframe
                    title="Training Program Details"
                    src="https://mgmcen.ac.in/pdf/Training%20Program%20Details%20for%20Website.pdf"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
                <p className="mb-4">
                  <a
                    href="https://mgmcen.ac.in/pdf/Training%20Program%20Details%20for%20Website.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline font-semibold flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Open PDF in new page
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Industrial Visit Section (with nested accordions) */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3
              className={`flex items-center justify-between text-2xl font-bold cursor-pointer hover:bg-indigo-100 transition-colors duration-200 rounded-lg p-3 -m-3 md:-m-4 ${isIndustrialVisitVisible ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-800'}`}
              onClick={() => setIndustrialVisitVisible(!isIndustrialVisitVisible)}
            >
              <span>Industrial Visit</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isIndustrialVisitVisible ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </h3>
            {isIndustrialVisitVisible && (
              <div className="mt-6 pt-6 border-t border-indigo-200 text-gray-700 leading-relaxed bg-white p-4 rounded-lg shadow-sm space-y-4">
                {/* Nested Accordion for Industrail Visit Report - Inosys June 19 */}
                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                  <h4
                    className={`flex items-center justify-between text-base md:text-lg font-semibold cursor-pointer p-3 md:p-4 hover:bg-gray-100 transition-colors duration-200 rounded-lg ${isInosysJune19Visible ? 'bg-gray-100 text-gray-800' : 'text-gray-800'}`}
                    onClick={() => setInosysJune19Visible(!isInosysJune19Visible)}
                  >
                    <span>Industrail Visit Report - Inosys June 19</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${isInosysJune19Visible ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </h4>
                  {isInosysJune19Visible && (
                    <div className="p-3 md:p-4 pt-0 border-t border-gray-200">
                      <div className="w-full h-[700px] my-3 rounded-md overflow-hidden border border-gray-200 shadow-inner">
                        <iframe
                          title="Inosys June 19 Report"
                          src="https://mgmcen.ac.in/pdf/Industrail%20Visit%20Report-Inosys%20June%2019.pdf"
                          className="w-full h-full border-0"
                          loading="lazy"
                        ></iframe>
                      </div>
                      <p className="mb-2">
                        <a
                          href="https://mgmcen.ac.in/pdf/Industrail%20Visit%20Report-Inosys%20June%2019.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:underline font-semibold flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          Open PDF in new page
                        </a>
                      </p>
                    </div>
                  )}
                </div>

                {/* Nested Accordion for Industrail Visit Report - Innosys March 23 */}
                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                  <h4
                    className={`flex items-center justify-between text-base md:text-lg font-semibold cursor-pointer p-3 md:p-4 hover:bg-gray-100 transition-colors duration-200 rounded-lg ${isInnosysMarch23Visible ? 'bg-gray-100 text-gray-800' : 'text-gray-800'}`}
                    onClick={() => setInnosysMarch23Visible(!isInnosysMarch23Visible)}
                  >
                    <span>Industrail Visit Report - Innosys March 23</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${isInnosysMarch23Visible ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </h4>
                  {isInnosysMarch23Visible && (
                    <div className="p-3 md:p-4 pt-0 border-t border-gray-200">
                      <div className="w-full h-[700px] my-3 rounded-md overflow-hidden border border-gray-200 shadow-inner">
                        <iframe
                          title="Innosys March 23 Report"
                          src="https://mgmcen.ac.in/pdf/Industrail%20Visit%20Report-Innosys%20March%2023.pdf"
                          className="w-full h-full border-0"
                          loading="lazy"
                        ></iframe>
                      </div>
                      <p className="mb-2">
                        <a
                          href="https://mgmcen.ac.in/pdf/Industrail%20Visit%20Report-Innosys%20March%2023.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:underline font-semibold flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          Open PDF in new page
                        </a>
                      </p>
                    </div>
                  )}
                </div>

                {/* Nested Accordion for Industrail Visit Report-ISRO and Intel March 23 */}
                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                  <h4
                    className={`flex items-center justify-between text-base md:text-lg font-semibold cursor-pointer p-3 md:p-4 hover:bg-gray-100 transition-colors duration-200 rounded-lg ${isISROIntelMarch23Visible ? 'bg-gray-100 text-gray-800' : 'text-gray-800'}`}
                    onClick={() => setISROIntelMarch23Visible(!isISROIntelMarch23Visible)}
                  >
                    <span>Industrail Visit Report-ISRO and Intel March 23</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${isISROIntelMarch23Visible ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </h4>
                  {isISROIntelMarch23Visible && (
                    <div className="p-3 md:p-4 pt-0 border-t border-gray-200">
                      <div className="w-full h-[700px] my-3 rounded-md overflow-hidden border border-gray-200 shadow-inner">
                        <iframe
                          title="ISRO and Intel March 23 Report"
                          src="https://mgmcen.ac.in/pdf/Industrail%20Visit%20Report-ISRO%20and%20Intel%20March%2023.pdf"
                          className="w-full h-full border-0"
                          loading="lazy"
                        ></iframe>
                      </div>
                      <p className="mb-2">
                        <a
                          href="https://mgmcen.ac.in/pdf/Industrail%20Visit%20Report-ISRO%20and%20Intel%20March%2023.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:underline font-semibold flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          Open PDF in new page
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPlacementPage;