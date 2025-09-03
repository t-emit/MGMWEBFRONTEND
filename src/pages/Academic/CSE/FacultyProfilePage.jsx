// src/pages/academics/computer-science-engineering/FacultyProfilePage.jsx
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

// Faculty data, cleaned up image paths (assuming /public/images/department/faculty/ or /public/images/)
const teachingStaff = [
  { id: 'archana-rajurkar', img: '/images/department/faculty/Department_3-20241611113554.jpg', name: 'Dr. Archana Milind Rajurkar', designation: 'Professor & Head', specialization: 'Image Processing & Computer Vision', email: 'rajurkar_am@mgmcen.ac.in' },
  { id: 'jyoti-patil', img: '/images/department/faculty/Department_3-20141807015800.jpg', name: 'Ms. Jyoti H. Patil', designation: 'Professor', specialization: 'Computer Science & Engineering (Image Processing)', email: 'patil_jh@mgmcen.ac.in' },
  { id: 'manisha-joshi', img: '/images/department/faculty/Department_3-20230804153410.jpg', name: 'Dr. Mrs. Manisha Y. Joshi', designation: 'Professor', specialization: 'Applied cryptography, Image Processing, Computer Algorithms, computer networks', email: 'joshi_my@mgmcen.ac.in' },
  { id: 'suhas-salve', img: '/images/department/faculty/Department_3-20140801060404.jpg', name: 'Mr. Salve Suhas G', designation: 'Assistant Professor Senior', specialization: 'Wireless Sensor Networks, Cloud Computing, Networking.', email: 'salve_sg@mgmcen.ac.in' },
  { id: 'bhagyashri-kapre', img: '/images/department/faculty/Department_3-20182906114121.jpg', name: 'Dr. Kapre Bhagyashri Sudhakar', designation: 'Assistant Professor Senior', specialization: 'Computer Science and Engineering', email: 'kapre_bs@mgmcen.ac.in' },
  { id: 'pankaj-pawar', img: '/images/department/faculty/Department_3-20180807160904.jpg', name: 'Mr. Pankaj P. Pawar', designation: 'Assistant Professor Senior', specialization: 'Networking', email: 'pawar_pankaj@mgmcen.ac.in' },
  { id: 'aijaz-ahmed', img: '/images/department/faculty/Department_3-20132512185040.jpg', name: 'Mr. Mohammed Aijaz Ahmed', designation: 'Assistant Professor Senior', specialization: 'Information Security', email: 'mohd_aijaz@mgmcen.ac.in' },
  { id: 'mohseen-ahmed', img: '/images/department/faculty/Department_3-20182906151658.jpg', name: 'Mr. Mohseen Ahmed', designation: 'Assistant Professor Senior', specialization: 'Data Mining and Image Mining', email: 'mohseen_ahmed@mgmcen.ac.in' },
  { id: 'dipti-aghor', img: '/images/department/faculty/Department_3-20242702113733.jpg', name: 'Dipti Bhaskarrao Aghor', designation: 'Assistant Professor', specialization: 'Electronics & Telecommunications', email: 'aghor_db@mgmcen.ac.in' },
  { id: 'shivprasad-titare', img: '/images/department/faculty/Department_3-20242702114519.jpg', name: 'Mr. Shivprasad Titare', designation: 'Assistant Professor', specialization: 'AL-ML, Blockchain Technology', email: 'titare_si@mgmcen.ac.in' },
  { id: 'savita-wagre', img: '/images/department/faculty/Department_3-20242702112019.jpg', name: 'Ms. Wagre Savita Sambhaji', designation: 'Asst. Prof.', specialization: 'Biomedical Image Processing, Artificial Intelligence, Machine Learning, Full Stack Development', email: 'wagre_savita@mgmcen.ac.in' },
  { id: 'nitu-pariyal', img: '/images/department/faculty/Department_3-20180807160420.jpg', name: 'Ms. Nitu L. Pariyal', designation: 'Asst. Prof.', specialization: 'Data Mining & Data Warehousing', email: 'pariyal_nitu@mgmcen.ac.in' },
  { id: 'chennoji', img: '/images/department/faculty/Department_3-20182906151315.jpg', name: 'Mr. Chennoji M. R.', designation: 'Asst. Prof.', specialization: 'Image Processing, Software Engineering', email: 'chennoji_mr@mgmcen.ac.in' },
  { id: 'jyoti-kale', img: '/images/department/faculty/Department_3-20140602073230.jpg', name: 'Ms.Kale Jyoti S.', designation: 'Asst. Prof.', specialization: 'Artificial Intelligence, Machine Learning, Cloud Computing', email: 'kale_js@mgmcen.ac.in' },
  { id: 'rahulsingh-bisen', img: '/images/department/faculty/Department_3-20141707084234.jpg', name: 'Mr. Rahulsingh G. Bisen', designation: 'Asst. Prof.', specialization: 'Data Mining', email: 'bisen_rg@mgmcen.ac.in' },
  { id: 'mangesh-bhandare', img: '/images/department/faculty/Department_3-20162902180433.png', name: 'Mr. Bhandare Mangesh Nagnath', designation: 'Asst. prof.', specialization: 'Networking and Communication', email: 'bhandare_mn@mgmcen.ac.in' },
  { id: 'deepashri-naik', img: '/images/department/faculty/Department_3-20160103105338.png', name: 'Mrs. Deepashri S. Naik', designation: 'Asst. Prof.', specialization: 'Computer Science & Engineering', email: 'Naik_ds@mgmcen.ac.in' },
  { id: 'shital-gaikwad', img: '/images/department/faculty/Department_3-20240404165259.jpg', name: 'Dr. Shital Yadavrao Gaikwad', designation: 'Asst. Prof.', specialization: 'Computer Network and Security, Wireless Sensor Network, Computer Hardware', email: 'gaikwad_shital@mgmcen.ac.in' },
  { id: 'anjali-hazari', img: '/images/department/faculty/Department_3-20240501161646.jpg', name: 'Ms. Hazari Anjali Deepak', designation: 'Assistant Prof.', specialization: 'Computer Science and Engineering', email: 'hazari_anjali@mgmcen.ac.in' },
  { id: 'rakhi-dumne', img: '/images/department/faculty/Department_3-20240501163055.jpg', name: 'Miss. Rakhi Shivajirao Dumne', designation: 'Assistant Prof.', specialization: 'Natural Language Processing', email: 'dumne_rs@mgmcen.ac.in' },
  { id: 'mukta-shelke', img: '/images/lkj.jpg', name: 'Ms. Mukta Gopalrao Shelke', designation: 'Assistant Prof.', specialization: 'Computer Science And Engineering', email: 'NA' }
];

const supportingStaff = [
  { id: 'padmakar-deshmukh', img: '/images/department/faculty/Department_3-20161207182212.jpg', name: 'Mr. Padmakar Deshmukh', designation: 'Programmer', specialization: 'Networking / Hardware', email: 'dpadmakar@mgmcen.ac.in' },
  { id: 'suresh-sangnor', img: '/images/department/faculty/Department_3-20170707103327.JPG', name: 'Mr. Sangnor Suresh Nilkanthrao', designation: 'Lab Assistant', specialization: 'Computer', email: 'sangnor_sn@mgmcen.ac.in' },
  { id: 'prashant-deshmukh', img: '/images/department/faculty/Department_3-20162410142812.jpg', name: 'Mr. Prashant Kishanrao Deshmukh', designation: 'Lab Assistant', specialization: 'Computer Science Engineering', email: 'deshmukh_pk@mgmcen.ac.in' },
  { id: 'rahul-bhande', img: '/images/department/faculty/Department_3-20162902181658.png', name: 'Mr. Bhande Rahul Vijaykumar', designation: 'Lab. Assistant', specialization: 'System Administration & Networking Technology', email: 'bhande_rv@mgmcen.ac.in' },
  { id: 'pooja-nirmale', img: '/images/department/faculty/Department_3-20220206194242.jpg', name: 'Ms. Nirmale Pooja Kour Surjeet Singh', designation: 'Lab. Assistant', specialization: 'Computer Hardware & Networking, IOT', email: 'nirmale_ps@mgmcen.ac.in' },
  { id: 'madhav-vaidya', img: '/images/department/faculty/Department_3-20242011101631.jpg', name: 'Mr. Vaidya Madhav', designation: 'Lab Assistant', specialization: 'Computer Application', email: 'vaidya_madhav@mgmcen.ac.in' },
  { id: 'syed-rasheed', img: '/images/department/faculty/Department_3-20162410143222.jpg', name: 'Mr. Syed Rasheed Syed Babu', designation: 'Peon', specialization: '-', email: 'rasheed@mgmcen.ac.in' },
  { id: 'ananda-bhise', img: '/images/department/faculty/Department_3-20162410142919.jpg', name: 'Mr. Ananda Rama Bhise', designation: 'Peon', specialization: '-', email: '' },
];

// Combine all faculty data for easy lookup in a detail page (if needed later)
export const allCseFacultyData = [...teachingStaff, ...supportingStaff];

const FacultyProfilePage = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Faculty Profile</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Meet the dedicated and experienced faculty members of the Computer Science & Engineering Department.
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
          Computer Science & Engineering Faculty
        </h2>

        {/* Teaching Staff Section */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-6 mt-10 border-b border-indigo-100 pb-2">Teaching Staff</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teachingStaff.map((faculty) => (
            <div key={faculty.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Link to={`${currentDeptPath}/faculty/${faculty.id}`} className="block">
                <img
                  src={faculty.img}
                  alt={faculty.name}
                  className="w-full h-48 object-cover object-top" // Use object-top to focus on head/shoulders
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }} // Fallback image
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-blue-800 hover:underline">{faculty.name}</h4>
                  <p className="text-sm text-gray-600">{faculty.designation}</p>
                  <p className="text-xs text-gray-500 mt-1">{faculty.specialization}</p>
                  {faculty.email !== 'NA' && (
                    <a href={`mailto:${faculty.email}`} className="text-indigo-600 hover:text-indigo-800 text-xs mt-2 inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      {faculty.email}
                    </a>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Supporting Staff Section */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-6 mt-12 border-b border-indigo-100 pb-2">Supporting Staff</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {supportingStaff.map((staff) => (
            <div key={staff.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Link to={`${currentDeptPath}/faculty/${staff.id}`} className="block">
                <img
                  src={staff.img}
                  alt={staff.name}
                  className="w-full h-48 object-cover object-top"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }} // Fallback image
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-blue-800 hover:underline">{staff.name}</h4>
                  <p className="text-sm text-gray-600">{staff.designation}</p>
                  <p className="text-xs text-gray-500 mt-1">{staff.specialization}</p>
                  {staff.email !== 'NA' && staff.email !== '' && (
                    <a href={`mailto:${staff.email}`} className="text-indigo-600 hover:text-indigo-800 text-xs mt-2 inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      {staff.email}
                    </a>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyProfilePage;