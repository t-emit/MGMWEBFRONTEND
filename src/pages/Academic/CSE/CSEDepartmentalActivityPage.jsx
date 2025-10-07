import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Define the sub-navigation tabs for the CSE department
// This array should ideally be a shared constant if used across multiple department-related pages.
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
const CSEDepartmentalActivityPage = () => {
  const location = useLocation(); // Hook to get the current URL path

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section - Matched to CSE Page Theme */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Reusing the CSE page's icon for consistency with the department's page */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Departmental Activity</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Highlights of events, workshops, and initiatives by the CSE Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs - Matched to CSE Page Theme */}
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

      {/* Main Content Area - Matched to CSE Page Theme */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        {/* Main section heading - Matched to CSE Page Theme */}
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Computer Science &amp; Engineering : Departmental Activity
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 print:text-sm">
          {/* First block of report/activity images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <a href="http://mgmcen.ac.in/pdf/Two-Days Workshop on AWS Cloud Practitioner Certification Course (2).pdf" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-800">
                <img src="/images/departmentalActivity/Two-Days%20Workshop%20on%20AWS%20Cloud%20Practitioner%20Certification%20Course%20(2)_Page_1.jpg" alt="Two-Days Workshop on AWS Cloud Practitioner Certification Course" className="w-full h-auto object-cover rounded-md mb-2" />
                <span className="font-semibold text-sm md:text-base">Two-Days Workshop on &quot;AWS Cloud Practitioner Certification Course&rdquo; by Mrs. Sonal Sarda</span>
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <a href="http://mgmcen.ac.in/pdf/CUC Expert Talk on 14th Sept 2024.pdf" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-800">
                <img src="/images/departmentalActivity/CUC%20Expert%20Talk%20on%2014th%20Sept%202024_Page_1.jpg" alt="CUC Expert Talk on 14th Sept 2024" className="w-full h-auto object-cover rounded-md mb-2" />
                <span className="font-semibold text-sm md:text-base">CUC Expert Talk<br/>on<br/>14th Sept 2024</span>
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <a href="http://mgmcen.ac.in/pdf/CUC Expert Talk by Dr. Vrushali Kinhalkar.pdf" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-800">
                <img src="/images/departmentalActivity/CUC%20Expert%20Talk%20by%20Dr.%20Vrushali%20Kinhalkar_Page_1.jpg" alt="Expert Talk by Dr. Vrushali Kinhalkar" className="w-full h-auto object-cover rounded-md mb-2" />
                <span className="font-semibold text-sm md:text-base">Expert Talk on &quot;Managing Academic Pressure and Gender Expectations&quot;, by Dr. Vrushali Kinhalkar</span>
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <a href="http://mgmcen.ac.in/pdf/CNworkshop.pdf" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-800">
                <img src="/images/departmentalActivity/CNworkshop_Page_1.jpg" alt="Two days workshop on Network Programming using Python" className="w-full h-auto object-cover rounded-md mb-2" />
                <span className="font-semibold text-sm md:text-base">Two days workshop on &ldquo;Network Programming using Python&rdquo; by Mr. Malhar Lathkar</span>
              </a>
            </div>
          </div>

          {/* Second block of report/activity images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center col-span-1 md:col-span-2">
              <a href="http://mgmcen.ac.in/pdf/CC-Workshop-report-Final-Copy.pdf" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-800">
                <img src="/images/departmentalActivity/cc-workshop-report-final.jpg" alt="CC-Workshop-report" className="w-full h-auto object-cover rounded-md mb-2" />
                <span className="font-semibold text-sm md:text-base">CC-Workshop-report</span>
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <a href="http://mgmcen.ac.in/pdf/Internal SIH 2023 Report.pdf" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-800">
                <img src="/images/departmentalActivity/internal-sih-2023-report.jpg" alt="Internal SIH 2023 Report" className="w-full h-auto object-cover rounded-md mb-2" />
                <span className="font-semibold text-sm md:text-base">Internal SIH 2023 Report</span>
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <a href="http://mgmcen.ac.in/pdf/IoT workshop report-updated.pdf" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-800">
                <img src="/images/departmentalActivity/iot-workshop-report-updated.jpg" alt="IoT workshop report" className="w-full h-auto object-cover rounded-md mb-2" />
                <span className="font-semibold text-sm md:text-base">IoT workshop report</span>
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <a href="http://mgmcen.ac.in/pdf/Departmental acitvity_Kavach Internal Hackathon Report10-4-23.pdf" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-800">
                <img src="/images/departmentalActivity/da-report-kavach-internal-hackathon.jpg" alt="Departmental activity Kavach Internal Hackathon Report" className="w-full h-auto object-cover rounded-md mb-2" />
                <span className="font-semibold text-sm md:text-base">Departmental acitvity Kavach Internal Hackathon Report</span>
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <a href="http://mgmcen.ac.in/pdf/Departmental acitvity_Expert-talk -27-02-2023-Ravi Sir.pdf" target="_blank" rel="noopener noreferrer" className="block text-indigo-600 hover:text-indigo-800">
                <img src="/images/departmentalActivity/da-report-expert-talk.jpg" alt="Departmental activity Expert talk 27-02-2023 Ravi Sir" className="w-full h-auto object-cover rounded-md mb-2" />
                <span className="font-semibold text-sm md:text-base">Departmental acitvity Expert talk 27-02-2023 Ravi Sir</span>
              </a>
            </div>
          </div>

          {/* National and International Webinar section */}
          <p className="text-center text-xl font-bold text-purple-700 mb-4 border-b border-indigo-100 pb-2 print:text-lg">
            <strong>National and International Webinar</strong>
          </p>
          <br />
          <p className="text-center mb-4">
            <img alt="Certificates" src="/images/gallery/certificates.png" className="mx-auto w-full md:w-3/4 max-w-lg rounded-lg shadow-md mb-4" />
          </p>
          <p className="mb-4 leading-relaxed">
            During the dire situation of the corona pandemic, everything came to halt but the only thing which continued was learning especially for the students who dream to achieve something extraordinary. taking this as an opportunity our MGM&rsquo;s College Of Engineering, Nanded organized successful Tech Talk Series which included 2 national and 3 International webinars delivered by distinguished speakers.
          </p>
          <p className="mb-4 leading-relaxed">
            The Computer Science And Engineering Department of MGM COE Nanded organized this Tech Talk series in June 2020. The First national webinar was held on 10th June 2020 regarding <strong>&lsquo;Introduction to Cloud Computing and AWS&quot;</strong> by our alumina Miss Sonal Sarda who is working as a freelance corporate trainer and consultant. The second national technical webinar was scheduled on 11th June 2020 by our bright alumina Mr. Mukesh Jain who is currently working as VP and Head of Insights &amp; Data Technology at Capgemini. The subject for this webinar was <strong>&lsquo;Top Innovations Using Data Science&quot;.</strong>
          </p>
          <p className="mb-4 leading-relaxed">
            In this Tech Talk series two international webinars were conducted by one of the distinguished speakers Dr. Venkat N. Gudivada who is working as a professor and chair of the Computer Science Department at East Carolina University, USA. His first international webinar was scheduled on 13th June 2020 based on <strong>&lsquo;Solving Large-Scale Relationships-rich Data Problems Using Graph Database Systems&quot;.</strong> The second international webinar was taken on 27th June 2020 regarding <strong>&lsquo;Interpretable Machine Learning With Probabilistic Graphical Models&quot;.</strong> The other international webinar was conducted on 15th June 2020 by one of the brightest aluminas of our college Miss Kirthiga Reddy. She is working as an Investment Partner at SoftBank Investment Advisers. The subject for this webinar was <strong>&lsquo;Alumni Perspective: Dream Big&quot;.</strong>
          </p>
          <p className="mb-4 leading-relaxed">
            This marvelous talk series was proved as a golden opportunity for 1500 students and professionals working in these fields. These online activities helped students to get knowledge about their interested fields by industry professionals at their fingertips. This was one of the best steps taken by our institute MGM&quot;s College of Engineering, Nanded regarding the betterment of students.
          </p>
          <p className="text-center mb-4">
            <img alt="Online Classes" src="/images/gallery/online_classes.png" className="mx-auto w-full md:w-3/4 max-w-lg rounded-lg shadow-md mb-4" />
          </p>
          <p className="text-center mb-4">
            <img alt="Parting Thoughts" src="/images/gallery/parting_thoughts.png" className="mx-auto w-full md:w-3/4 max-w-lg rounded-lg shadow-md mb-4" />
          </p>
          <p className="text-center mb-4">
            <img alt="Channel Videos" src="/images/gallery/channel_videos.png" className="mx-auto w-full md:w-3/4 max-w-lg rounded-lg shadow-md mb-4" />
          </p>
          <p className="text-center mb-4">&nbsp;</p>
        </div>

        <p className="mb-4">&nbsp;</p>
        <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />
        
        <p className="mb-4">&nbsp;</p>
      </div>
      
      {/* No print button, as requested */}

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
          /* Ensure flex behaves like block for print for simpler layout */
          .flex, .grid {
            display: block;
          }
          /* Hide elements not needed in print */
          .lg\\:w-96, .print\\:hidden {
            display: none;
          }
          /* Adjust grid items to be block-level for print */
          .grid > div {
            display: block;
            margin-bottom: 1rem; /* Add some space between items */
            border: 1px solid #ccc; /* Add a border to visually separate */
            padding: 0.5rem;
            box-shadow: none; /* Remove shadows in print */
            border-radius: 0; /* Remove rounded corners in print */
          }
          .grid img {
            max-width: 100%; /* Ensure images fit within their print area */
            height: auto;
            margin: 0 auto; /* Center images in print */
          }
          .grid a {
            display: block; /* Make links block level */
          }
          .grid span {
            margin-top: 0.5rem; /* Space for text below image */
          }
        }
      `}</style>
    </div>
  );
};

export default CSEDepartmentalActivityPage;