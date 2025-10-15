import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navigation tabs for the Information Technology department
const itDepartmentTabs = [
  { name: "Faculty Detail", path: "/academics/information-technology/faculty-detail" },
  { name: "Faculty Profile", path: "/academics/information-technology/faculty-profile" },
  { name: "Information Technology", path: "/academics/information-technology" },
  { name: "IT Achievements", path: "/academics/information-technology/achievements" },
  { name: "IT Curriculum", path: "/academics/information-technology/curriculum" },
  { name: "IT Departmental Activity", path: "/academics/information-technology/departmental-activity" },
  { name: "IT Laboratory Detail", path: "/academics/information-technology/laboratory-detail" },
  { name: "IT Laboratory", path: "/academics/information-technology/laboratory" },
  { name: "IT Profile", path: "/academics/information-technology/profile" },
  { name: "IT Programmes", path: "/academics/information-technology/programmes" },
  { name: "IT Research Publication", path: "/academics/information-technology/research-publication" },
  { name: "ITSA", path: "/academics/information-technology/itsa" },
  { name: "IT Training Placement", path: "/academics/information-technology/training-placement" },
  { name: "IT Vision Mission", path: "/academics/information-technology/vision-mission" },
  { name: "IT Consultancy", path: "/academics/information-technology/consultancy" },
  { name: "IT Departmental Committees", path: "/academics/information-technology/departmental-committees" },
];

const ITDepartmentalActivityPage = () => {
  const location = useLocation(); // Hook to get the current URL path

  // Helper component for activity sections to avoid repetition
  const ActivitySection = ({ title, speakers, date, children }) => (
    <div className="mb-12 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-indigo-700 mb-2">{title}</h3>
      <p className="text-md font-semibold text-gray-600 mb-1">{speakers}</p>
      <p className="text-sm text-gray-500 mb-4 italic">{date}</p>
      <div className="prose prose-lg max-w-none text-gray-700 print:text-sm">
        {children}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section - Matched to IT Department Theme */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 9a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Departmental Activity</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Highlights of events, workshops, and initiatives by the IT Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden`}>
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
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
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Information Technology: Departmental Activity
        </h2>
        
        <ActivitySection
          title="Seminar on Ethical Hacking"
          speakers="By Mr. Rahul Tyagi, Vice-President, Lucideous Training, New Delhi"
          date="30th August 2016"
        >
          <p>This is a basic information security awareness workshop. Learning can be through theory and practice; when theory is put into practice, there is a thin line between perfection and distortion. The workshops provide students an intensive session, which empowered students with knowledge that is inaccessible to most, in a simplified and easily graspable manner.</p>
          <p>This ethical hacking training workshop conducted by Lucideus provides students with penetration testing in various areas of the cyber world. The workshop consists of mobile security, web application security, email security, and network security. Other than hacking skills, students learned various defense techniques to secure the cyber world.</p>
        </ActivitySection>

        <ActivitySection
          title="3-Day Workshop on Embedded Systems Using 8051 Microcontroller"
          speakers="Conducted by Mr. Jeevan Katariya from SPJ System Pvt. Ltd. Pune"
          date="20th November 2014 to 22nd November 2014"
        >
          <p>This course was designed to introduce students to Embedded ‘C’. As we all know, the use of embedded systems is growing at a brisk pace, and so is the requirement for developers of these systems. To work in embedded systems, knowledge of Embedded ‘C’ and using it to develop various applications involving various interfaces is a must. Keeping this requirement in mind, a 100% hands-on exposure workshop on 8051 was organized in collaboration with SPJ. In this, we intended to impart upon students the logic of ‘C’ programming in embedded systems. Students were introduced to various interfaces commonly used in 8051 based embedded systems.</p>
        </ActivitySection>
        
        <ActivitySection
          title="2-Days National Level Networking Workshop ‘IBNC’"
          speakers="In collaboration with IIT Delhi & I-Medita, New Delhi"
          date="17th February 2015 to 18th February 2015"
        >
          <p>This two-day workshop by ACES ACM IIT Delhi consisted of configuration on Cisco routers and switches, for which the instructor was present with their own router. A brief introduction of Cisco IOS was given to students in order to work on Cisco devices. Different routing and switching protocols concepts were learned, implemented, and used inside the network by students. Different addressing schemes were studied by students to identify systems uniquely inside the network. Students created a live network by using Cisco routers and switches and also worked on WAN and its protocols.</p>
        </ActivitySection>

        <ActivitySection
          title="Workshop and Activities (2012)"
          speakers="Conducted by Mr. Jeevan Katariya from SPJ System Pvt. Ltd. Pune"
          date="October 2012"
        >
          <p>Mr. Jeevan Katariya is a Director in SPJ Embedded Technologies Pvt. Limited, a leading electronics product design, development, and services company. The company is committed to improving industrial and technical support to the community through technical expertise and knowledge.</p>
          <p className="font-semibold mt-4">3-Day Workshop on Embedded Systems Using 8051 Microcontroller (19th - 21st Oct 2012)</p>
          <p>This course was designed to introduce students to Embedded ‘C’ with a 100% hands-on approach. Students were introduced to various interfaces commonly used in 8051 based embedded systems.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <figure className="text-center">
              <img src="/images/gallery/imgit1.jpg" alt="Explaining concepts to students and faculty" className="w-full h-auto object-cover rounded-md mb-2 shadow-md" />
              <figcaption className="text-sm italic">Explaining concepts with students and faculties</figcaption>
            </figure>
            <figure className="text-center">
              <img src="/images/gallery/imgit2.jpg" alt="Delivering a lecture to students" className="w-full h-auto object-cover rounded-md mb-2 shadow-md" />
              <figcaption className="text-sm italic">Delivering a lecture to the students</figcaption>
            </figure>
             <figure className="text-center">
              <img src="/images/gallery/imgit3.jpg" alt="Another view of the lecture" className="w-full h-auto object-cover rounded-md mb-2 shadow-md" />
              <figcaption className="text-sm italic">Delivering a lecture to the students</figcaption>
            </figure>
             <figure className="text-center">
              <img src="/images/gallery/imgit4.jpg" alt="Students giving feedback" className="w-full h-auto object-cover rounded-md mb-2 shadow-md" />
              <figcaption className="text-sm italic">Students gave feedback regarding the workshop</figcaption>
            </figure>
          </div>
          
          <p className="font-semibold mt-6">3-Days Work-Shop on Embedded Systems using ARM7 (16th - 18th Oct 2012)</p>
          <p>As ARM technologies are widely used in the latest embedded systems, this basic course introduced students to ARM architecture concepts and on-chip features. This was a 100% hands-on course where participants worked directly on the ARM7 platform to develop and execute programs for various interfaces.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
             <figure className="text-center">
              <img src="/images/gallery/imgit5.jpg" alt="Inauguration of the ARM7 workshop" className="w-full h-auto object-cover rounded-md mb-2 shadow-md" />
              <figcaption className="text-sm italic">Inaugural of workshop</figcaption>
            </figure>
             <figure className="text-center">
              <img src="/images/gallery/imgit6.jpg" alt="Explaining concepts to students and faculty during ARM7 workshop" className="w-full h-auto object-cover rounded-md mb-2 shadow-md" />
              <figcaption className="text-sm italic">Explaining concepts with students and faculties</figcaption>
            </figure>
          </div>
        </ActivitySection>

        <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />
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
          .flex, .grid {
            display: block;
          }
          .print\\:hidden {
            display: none;
          }
          .grid > div, .grid > figure {
            display: block;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            padding: 0.5rem;
            box-shadow: none;
            border-radius: 0;
          }
          .grid img {
            max-width: 100%;
            height: auto;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default ITDepartmentalActivityPage;