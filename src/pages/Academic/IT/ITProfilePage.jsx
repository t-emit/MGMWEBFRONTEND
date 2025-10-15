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

const ITProfilePage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Information Technology</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Department Profile
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          Information Technology: Profile
        </h2>

        <div className="flex flex-col md:flex-row items-start md:space-x-8 mb-8">
          <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
            <img 
              alt="Mr. Hashmi Syed Asrar, Head, Department of IT" 
              className="w-full h-auto rounded-lg shadow-lg border border-gray-200" 
              src="https://mgmcen.ac.in/images/gallery/07012014234724-hod.png" 
            />
            <h3 className="text-xl font-semibold mt-4 text-center text-purple-700">
              Mr. Hashmi Syed Asrar<br />
              Head, Department of IT<br />
              <a href="mailto:hashmi_sa@mgmcen.ac.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">hashmi_sa@mgmcen.ac.in</a>
            </h3>
          </div>
          <div className="md:w-2/3 text-gray-700 leading-relaxed print:text-sm">
            <p className="mb-4">
              Today we are living in the era of information technology which has affected our lives greater than the Industry Revolution of the 18th Century. The 21<sup>st</sup>&nbsp;Century is referred to the IT Century. Information and information technology tools have become an indispensable requirement of Today's world. This course is an effort to prepare the future technologists who are equipped with the skill and knowledge needed to design and develop the IT gadgets which include hardware, software and telecommunication. The graduates of our department are employed in MNCs like Wipro, HSBC, Infosys, PCS, Satyam, Symantec, Adobe, MBT, Oracle etc.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold w-2/5">Department Location</td>
                    <td className="p-3 w-3/5">First Floor</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Year of Establishment</td>
                    <td className="p-3">1999</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Head of Department</td>
                    <td className="p-3">Mr.Hashmi S.A.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Contact No</td>
                    <td className="p-3">+91 2462222999</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">E &ndash;mail ID</td>
                    <td className="p-3"><a href="mailto:hashmi_sa@mgmcen.ac.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">hashmi_sa@mgmcen.ac.in</a></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Total No of Classrooms</td>
                    <td className="p-3">03</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Total no of Laboratories</td>
                    <td className="p-3">06</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Number of Professors</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Number of Associate Professors</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Number of Assistant Professors</td>
                    <td className="p-3">08</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-semibold">Total Teaching Faculty</td>
                    <td className="p-3">08</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Supporting Teaching Staff</td>
                    <td className="p-3">04</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Vision and Mission (brief summary - detailed on VisionMissionPage) */}
        <hr className="my-8 border-gray-200 print:hidden" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4">
            <h3 className="text-2xl font-bold text-purple-700 mb-2 text-center print:text-xl">Vision</h3>
            <p className="text-gray-700 text-center leading-relaxed print:text-sm">
              To be one of the leading Department to develop proficient IT Engineers with global acceptance in the service of society and IT industry.
            </p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow print:shadow-none print:border print:p-4">
            <h3 className="text-2xl font-bold text-purple-700 mb-2 text-center print:text-xl">Mission (Excerpts)</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 pl-4 print:text-sm print:space-y-1">
              <li>Developing successful IT Professionals with strong practical and theoretical knowledge...</li>
              <li>Grooming the graduates as professional problem solvers having ability to use technological advancements...</li>
              <li>Inculcating employability skills, leadership qualities, entrepreneurial skills, innovation and research...</li>
              <li>Imbibing professional ethics, social values and environmental awareness...</li>
            </ul>
            <p className="text-center mt-4">
              <Link to="/academics/information-technology/vision-mission" className="text-indigo-600 hover:underline font-semibold text-sm">
                View Full Vision & Mission
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITProfilePage;