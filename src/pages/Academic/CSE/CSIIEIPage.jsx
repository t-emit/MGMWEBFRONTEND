import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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

const CSIIEIPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-8 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 print:text-3xl">CSI / IEI</h1>
            <p className="text-xl opacity-90 max-w-2xl print:text-lg">
              Activities and initiatives by the Computer Society of India and The Institution of Engineers (India).
            </p>
          </div>
          
        </div>
      </div>

      {/* Enhanced Department Sub-Navigation */}
      <nav className="mb-8 bg-white rounded-xl shadow-lg transition-all duration-300 print:hidden overflow-hidden">
        <div className="px-6 py-3 bg-indigo-50 border-b border-indigo-100">
          <h3 className="text-sm font-semibold text-indigo-800 uppercase tracking-wider flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
            Department Sections
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-4"> 
          {cseDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                  ${isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform -translate-y-0.5'
                    : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 border border-gray-200 hover:border-indigo-200 hover:shadow-md'
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
        {/* Enhanced Main Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b-2 border-indigo-100">
          <h2 className="text-3xl font-bold text-indigo-800 flex items-center print:text-2xl">
            <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            CSI / IEI Activities & Reports
          </h2>
          {/* <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
              </svg>
              Updated Recently
            </span>
          </div> */}
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 print:text-sm">
          {/* Enhanced PDF Grid */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-indigo-700 mb-6 pb-2 border-b border-indigo-100 flex items-center">
              <svg className="w-6 h-6 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
              </svg>
              Reports & Publications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: '/images/csiiei/IEI-Open-Source.jpg', text: 'IEI Open Source', pdf: 'https://mgmcen.ac.in/pdf/IEI Open Source.pdf' },
                { img: '/images/csiiei/IEI-Machine-Learning.jpg', text: 'IEI Machine Learning', pdf: 'https://mgmcen.ac.in/pdf/IEI Machine Learning.pdf' },
                { img: '/images/csiiei/IEI-Inuaguration.jpg', text: 'IEI Inuaguration', pdf: 'https://mgmcen.ac.in/pdf/IEI Inuaguration.pdf' },
                { img: '/images/csiiei/IEI-Intellectual-Property-Rights.jpg', text: 'IEI Intellectual Property Rights', pdf: 'https://mgmcen.ac.in/pdf/IEI Intellectual Property Rights.pdf' },
                { img: '/images/csiiei/IEI-IIT-Mandi.jpg', text: 'IEI IIT Mandi', pdf: 'https://mgmcen.ac.in/pdf/IEI IIT Mandi.pdf' },
                { img: '/images/csiiei/IEI-Frontend-Workshop.jpg', text: 'IEI Frontend Workshop', pdf: 'https://mgmcen.ac.in/pdf/IEI Frontend Workshop.pdf' },
                { img: '/images/csiiei/IEI-Data-Analytics.jpg', text: 'IEI Data Analytics', pdf: 'https://mgmcen.ac.in/pdf/IEI Data Analytics.pdf' },
                { img: '/images/csiiei/CSI-Generative-AI.jpg', text: 'CSI Generative AI', pdf: 'https://mgmcen.ac.in/pdf/CSI Generative AI.pdf' },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-b from-white to-indigo-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden group">
                  <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="overflow-hidden rounded-lg mb-3">
                      <img src={item.img} alt={item.text} className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"/>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-indigo-800 group-hover:text-indigo-600 transition-colors">{item.text}</span>
                      <svg className="w-5 h-5 text-indigo-500 group-hover:text-indigo-700 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <hr className="my-10 border-t-2 border-indigo-100 print:my-6"/>

          {/* Enhanced Workshop Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-purple-700 mb-6 pb-2 border-b border-purple-100 flex items-center print:text-xl">
              <svg className="w-6 h-6 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
              </svg>
              2-Days Workshop on "IoT using Arduino"
            </h3>
            <div className="bg-purple-50 rounded-xl p-6 mb-6 border border-purple-100">
              <p className="mb-4 text-purple-800">Department of Computer Science & Engineering and Computer Society of India Student's Branch has organized the 2-days workshop on "IoT using Arduino" on 28th and 29th of April 2022.</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                  <img src="/images/csiiei/final2-day-img1.jpg" alt="Welcome of Resource Person Dr. M. R. Sanghavi" className="w-full h-auto rounded-md mb-3"/>
                  <p className="text-center text-sm text-purple-700">(Welcome of Resource Person Dr. M. R. Sanghavi)</p>
                </div>
                <div>
                  <p className="mb-4">The workshop was started with the warm welcome of resource persons - Dr. Mahesh R. Sanghavi (Vice-Principal, SNJB College of Engineering, Nashik), Mrs. Kainjan M. Sanghavi Head, Department of CSE, SNJB College of Engineering, Nashik), Mr. Rajiv R. Bhandari (Associate Professor, Dept. of CSE, SNJB College of Engineering, Nashik) and Dr. Khyati R. Nirmal (Associate Professor, Dept. of CSE, SNJB College of Engineering, Nashik) by Mr. Rahulsingh G. Bisen, CSI Co-ordinator & Asst. Prof, Dept. of CSE.</p>
                </div>
              </div>
              
              <p className="mt-4 mb-4">CSI Council members of B.Tech CSE, Pratik Sanjaykumar Sonwane (President), Pratiksha Nandkumar Suryawanshi (Secretary), Soham Sujit Kanchalwar (Treasurer), Nilesh Prakash Walve (Technical Head) and Rutuja Kacharudas Damkondwar (CSI Magazine Head 1) were the volunteers and the organizers of the event.</p>
              
              <div className="bg-white p-5 rounded-xl mt-6 border border-purple-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img src="/images/csiiei/final2-day-img2.jpg" alt="Glimpses of the Workshop" className="w-full h-auto rounded-md"/>
                  <img src="/images/csiiei/final2-day-img3.jpg" alt="More Glimpses of the Workshop" className="w-full h-auto rounded-md"/>
                </div>
                <p className="text-center text-sm text-purple-700 mt-3">(Glimpses of the Workshop)</p>
              </div>
            </div>
          </div>

          <hr className="my-10 border-t-2 border-indigo-100 print:my-6"/>

          {/* Enhanced BLIND C Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-purple-700 mb-6 pb-2 border-b border-purple-100 flex items-center print:text-xl">
              <svg className="w-6 h-6 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              BLIND C 2022
            </h3>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <p className="mb-4 text-purple-800">Department of Computer Science and Engineering and CSI Student's Branch organized a BLIND C coding competition on 26th March 2022. BLIND C is a competition organized for students to enhance their coding skills and find out the best among them.</p>
              
              <div className="bg-white p-5 rounded-lg mt-6 mb-6 border border-purple-200">
                <img src="/images/csiiei/final-report-blind-img1.jpg" alt="Images of the Blind C event" className="w-full h-auto rounded-md"/>
                <p className="text-center text-sm text-purple-700 mt-3">Some images of the event</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-5 text-white mt-6">
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Winner and Runner up of Blind C:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <strong>Vinay Kalwale</strong> – TY IT (Winner)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <strong>Nagesh Kharat</strong> – FY CIVIL (Runner-up)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-10 border-t-2 border-indigo-100 print:my-6"/>

          {/* Enhanced Python Workshop Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-purple-700 mb-6 pb-2 border-b border-purple-100 flex items-center print:text-xl">
              <svg className="w-6 h-6 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              2-Days Workshop on "Network Programming using Python"
            </h3>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <p className="mb-4 text-purple-800">Department of Computer Science & Engineering and Computer Society of India Student's Branch had organized the 2-days workshop on "Network Programming using Python" on 23rd and 24th May 2022.</p>
              
              <div className="bg-white p-5 rounded-lg mt-6 border border-purple-200">
                <img src="/images/csiiei/report-workshop-netwrok-programming-pyhton-img1.jpg" alt="Glimpses of the Workshop" className="w-full h-auto rounded-md"/>
                <p className="text-center text-sm text-purple-700 mt-3">(Glimpses of the Workshop)</p>
              </div>
            </div>
          </div>

          {/* Enhanced Archive Button */}
          {/* <div className="text-center mt-12">
            <Link to="/cse-department2.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              Click here for Archive Data
            </Link>
          </div> */}
        </div>
      </div>

      <style>{`
        /* Enhanced Print Styles */
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
          /* Hide decorative elements in print */
          .bg-gradient-to-r, .flex, .grid > div::before {
            background: white !important;
            color: black !important;
          }
          /* Adjust grid for print */
          .grid > div {
            display: block;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            padding: 0.5rem;
            box-shadow: none;
            border-radius: 0;
            break-inside: avoid;
          }
          .grid img {
            max-width: 100%;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default CSIIEIPage;