// src/pages/Academic/CSE/CSEDepartmentalActivityPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Define the sub-navigation tabs for the CSE department
const cseDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/computer-science-engineering" },
  { name: "Programmes", path: "/academics/computer-science-engineering/programmes" },
  { name: "Faculty Profile", path: "/academics/computer-science-engineering/faculty" },
  { name: "Laboratory", path: "/academics/computer-science-engineering/labs" },
  { name: "Training and Placement", path: "/academics/computer-science-engineering/training-placement" },
  { name: "Research & Publication", path: "/academics/computer-science-engineering/research-publication" },
  { name: "Achievements", path: "/academics/computer-science-engineering/achievements" },
  { name: "Departmental Activity", path: "/academics/computer-science-engineering/activities" }, // Active tab
  { name: "CUC", path: "/academics/computer-science-engineering/cuc" },
  { name: "CSI/IEI", path: "/academics/computer-science-engineering/csi-iei" },
  { name: "Downloads", path: "/academics/computer-science-engineering/downloads" },
  { name: "Resources", path: "/academics/computer-science-engineering/resources" },
];

// Data for the activity tables
const activityRows1 = [
  [
    {
      link: "http://mgmcen.ac.in/pdf/Two-Days%20Workshop%20on%20AWS%20Cloud%20Practitioner%20Certification%20Course%20(2).pdf",
      img: "../pdf/Two-Days%20Workshop%20on%20AWS%20Cloud%20Practitioner%20Certification%20Course%20(2)_Page_1.jpg",
      text: `Two-Days Workshop on "AWS Cloud Practitioner Certification Course” by Mrs. Sonal Sarda`
    },
    {
      link: "http://mgmcen.ac.in/pdf/CUC%20Expert%20Talk%20on%2014th%20Sept%202024.pdf",
      img: "../pdf/CUC%20Expert%20Talk%20on%2014th%20Sept%202024_Page_1.jpg",
      text: `CUC Expert Talk<br>on<br>14th Sept 2024`
    }
  ],
  [
    {
      link: "http://mgmcen.ac.in/pdf/CUC%20Expert%20Talk%20by%20Dr.%20Vrushali%20Kinhalkar.pdf",
      img: "../pdf/CUC%20Expert%20Talk%20by%20Dr.%20Vrushali%20Kinhalkar_Page_1.jpg",
      text: `Expert Talk on "Managing Academic Pressure and Gender Expectations", by Dr. Vrushali Kinhalkar`
    },
    {
      link: "http://mgmcen.ac.in/pdf/CNworkshop.pdf",
      img: "../pdf/CNworkshop_Page_1.jpg",
      text: `Two days workshop on “Network Programming using Python” by Mr. Malhar Lathkar`
    }
  ]
];

const activityRows2 = [
  [{ colspan: 2,
    link: "http://mgmcen.ac.in/pdf/CC-Workshop-report-Final-Copy.pdf",
    img: "../pdf/cc-workshop-report-final.jpg",
    text: `CC-Workshop-report `
  }],
  [
    {
      link: "http://mgmcen.ac.in/pdf/Internal%20SIH%202023%20Report.pdf",
      img: "../pdf/internal-sih-2023-report.jpg",
      text: `Internal SIH 2023 Report`
    },
    {
      link: "http://mgmcen.ac.in/pdf/IoT%20workshop%20report-updated.pdf",
      img: "../pdf/iot-workshop-report-updated.jpg",
      text: `IoT workshop report`
    }
  ],
  [
    {
      link: "http://mgmcen.ac.in/pdf/Departmental%20acitvity_Kavach%20Internal%20Hackathon%20Report10-4-23.pdf",
      img: "../pdf/da-report-kavach-internal-hackathon.jpg",
      text: `Departmental acitvity Kavach Internal Hackathon Report`
    },
    {
      link: "http://mgmcen.ac.in/pdf/Departmental%20acitvity_Expert-talk%20-27-02-2023-Ravi%20Sir.pdf",
      img: "../pdf/da-report-expert-talk.jpg",
      text: `Departmental acitvity Expert talk 27-02-2023 Ravi Sir`
    }
  ]
];

// Data for National and International Webinar images
const webinarImages = [
  { src: 'http://www.mgmcen.ac.in/images/gallery/certificates.png', alt: 'Webinar Certificates' },
  { src: 'http://www.mgmcen.ac.in/images/gallery/online_classes.png', alt: 'Online Classes' },
  { src: 'http://www.mgmcen.ac.in/images/gallery/parting_thoughts.png', alt: 'Parting Thoughts' },
  { src: 'http://www.mgmcen.ac.in/images/gallery/channel_videos.png', alt: 'Channel Videos' },
];


const CSEDepartmentalActivityPage = () => {
  const location = useLocation(); // Hook to get the current URL path

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Departmental Activity</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Highlights of recent workshops, expert talks, and webinars organized by the Computer Science & Engineering Department.
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
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Computer Science & Engineering Activities
        </h2>

        {/* Activity Tables - Preserving original HTML structure and content */}
        <div className="space-y-8">
          {activityRows1.map((row, rowIndex) => (
            <div key={`activity1-row-${rowIndex}`} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {row.map((item, itemIndex) => (
                <div key={`activity1-item-${rowIndex}-${itemIndex}`} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-center group">
                    <img
                      src={item.img}
                      alt={`Activity ${rowIndex * 2 + itemIndex + 1}`}
                      className="w-full h-auto object-contain max-h-64 rounded-md border border-gray-200 mb-3 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-activity.jpg'; }} // Fallback
                    />
                    <span className="text-sm font-medium text-blue-800 group-hover:text-indigo-600" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  </a>
                </div>
              ))}
            </div>
          ))}

          {activityRows2.map((row, rowIndex) => (
            <div key={`activity2-row-${rowIndex}`} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {row.map((item, itemIndex) => (
                <div key={`activity2-item-${rowIndex}-${itemIndex}`} className={`flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${item.colspan ? 'md:col-span-2' : ''}`}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-center group">
                    <img
                      src={item.img}
                      alt={`Activity ${activityRows1.length * 2 + rowIndex * 2 + itemIndex + 1}`}
                      className="w-full h-auto object-contain max-h-64 rounded-md border border-gray-200 mb-3 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-activity.jpg'; }} // Fallback
                    />
                    <span className="text-sm font-medium text-blue-800 group-hover:text-indigo-600" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div> {/* End of activity tables */}

        <p className="text-center mt-12 text-xl font-bold text-indigo-800">National and International Webinar</p>
        <br/> {/* Original br preserved */}

        {/* Webinar Images Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {webinarImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain max-h-48 rounded-md border border-gray-200"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-webinar.jpg'; }} // Fallback
              />
              <p className="text-sm text-gray-700 mt-2 text-center">{image.alt}</p>
            </div>
          ))}
        </div>

        {/* Webinar Description Paragraphs */}
        <div className="prose max-w-none text-gray-700 leading-relaxed text-base md:text-lg mt-10">
          <p>
            During the dire situation of the corona pandemic, everything came to halt but the only thing which continued was learning especially for the students who dream to achieve something extraordinary. taking this as an opportunity our MGM&rsquo;s College Of Engineering, Nanded organized successful Tech Talk Series which included 2 national and 3 International webinars delivered by distinguished speakers.
          </p>
          <p>
            The Computer Science And Engineering Department of MGM COE Nanded organized this Tech Talk series in June 2020. The First national webinar was held on 10th June 2020 regarding <strong>&lsquo;Introduction to Cloud Computing and AWS&quot;</strong> by our alumina Miss Sonal Sarda who is working as a freelance corporate trainer and consultant. The second national technical webinar was scheduled on 11th June 2020 by our bright alumina Mr. Mukesh Jain who is currently working as VP and Head of Insights &amp; Data Technology at Capgemini. The subject for this webinar was <strong>&lsquo;Top Innovations Using Data Science&quot;.</strong>
          </p>
          <p>
            In this Tech Talk series two international webinars were conducted by one of the distinguished speakers Dr. Venkat N. Gudivada who is working as a professor and chair of the Computer Science Department at East Carolina University, USA. His first international webinar was scheduled on 13th June 2020 based on <strong>&lsquo;Solving Large-Scale Relationships-rich Data Problems Using Graph Database Systems&quot;.</strong> The second international webinar was taken on 27th June 2020 regarding <strong>&lsquo;Interpretable Machine Learning With Probabilistic Graphical Models&quot;.</strong> The other international webinar was conducted on 15th June 2020 by one of the brightest aluminas of our college Miss Kirthiga Reddy. She is working as an Investment Partner at SoftBank Investment Advisers. The subject for this webinar was <strong>&lsquo;Alumni Perspective: Dream Big&quot;.</strong>
          </p>
          <p>
            This marvelous talk series was proved as a golden opportunity for 1500 students and professionals working in these fields. These online activities helped students to get knowledge about their interested fields by industry professionals at their fingertips. This was one of the best steps taken by our institute MGM&quot;s College of Engineering, Nanded regarding the betterment of students.
          </p>
          <p>&nbsp;</p> {/* Original p with &nbsp; */}
        </div>

        <hr className="my-8 border-t-2 border-indigo-200" />
        <div className="text-center mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-indigo-800 hover:text-indigo-900 transition-colors">
            <a href="http://mgmcen.ac.in/department-activity.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              Click here for Archive Data
            </a>
          </h2>
        </div>
        <p>&nbsp;</p> {/* Original p with &nbsp; */}
      </div>
    </div>
  );
};

export default CSEDepartmentalActivityPage;