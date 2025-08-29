// src/pages/students-corner/MesaPage.jsx

import React from 'react';
import AccordionItem from '../../../components/AccordinItem';
import MediaCarousel from '../../../components/MediaCarousel';
import { FaFilePdf, FaChevronRight } from 'react-icons/fa';

// --- HELPER FUNCTION ---

// --- NEW, SMARTER HELPER FUNCTION ---
const boldenQuotedText = (text) => {
  // Find the start and end of the quoted section
  const firstQuote = text.indexOf('“');
  const secondQuote = text.indexOf('”', firstQuote + 1);

  // Check if a valid quoted section exists
  if (firstQuote !== -1 && secondQuote !== -1) {
    const beforeText = text.substring(0, firstQuote);
    const boldText = text.substring(firstQuote + 1, secondQuote);
    const afterText = text.substring(secondQuote + 1);
    
    // Reassemble the string with the middle part bolded
    return (
      <>
        {beforeText}
        “<strong className="font-semibold text-gray-800">{boldText}</strong>”
        {afterText}
      </>
    );
  }
  
  // If no quotes are found, return the original text as is
  return text;
};

// --- Data for the entire MESA page ---

const mesaIntroPoints = [
  "Mechanical Engineering Students Association (MESA) is formed by staff and students of Department of Mechanical Engineering for conducting different social, cultural & knowledge based activities for all the students of engineering in campus. It conducts various events on the occasions like Teachers day, Engineers day, Gandhi jayanti etc. So that students can involve in these activities and gain some knowledge of management & become a responsible person in life.",
  "The team MESA conducts every event or program under the guidance of respective faculty In-charge Prof. Jarikote S. S. With the valuable guidelines of head of the department Dr. Sidhu J. S."
];

const gurupurnima = {
  title: "1) Celebration of “GURUPURNIMA” (31/07/2015)",
  description: "All the students of Department of Mechanical Engg. wished to all faculties in college by offering them a rose & a greeting card on this day. It’s a sign of respect from them."
};

const teachersDay = {
  title: "2) Teacher’s day (05/09/2015)",
  description: "A small program for felicitation of all staff of Mechanical Engg. Dept., in the presences of HOD & all students, was arranged & carried out successfully. Also following events were arranged for the students:",
  subpoints: [
    "Lecture by B.E., T.E. (Mech.) Students on S.E. (Mech.) Class.",
    "Essay Competition for Mechanical Engg. Students",
    "Felicitation program for staff."
  ]
};

const Gandhij ={
    title:"3) Gandhi Jayanti Celebration (02/10/2015)",
    description:'Following programs were arranged on the occasion of this day',
subpoints:["Techno-hunt competition for all students.",
"Math Quiz",
"Poster Competition"
]
};

const day={
    title:"4)Two days workshop “Micro-Meso Scales in Manufacturing”  (14/12/2015)",
    description:"Present status & Feature trends by Prof. Kornel Ehmaan & Prof. Suhas Joshi"
};

const guestlec={
    title:"5)A Guest Lecture (05/02/2016) ",
description:"Topic-  Preparation of Competitive exams such as GATE,UPSC etc by  Mr. Mahendra Wadje from CAD-CAM Guru Institute, Pune."
};

const guestlec2={
    title:"6)A Guest Lecture (08/02/2016)",
description:"Topic – Importance of Competitive exams, by Mr. Yogesh Tyagi from Gateway Institute, Dhankawadi, Pune."
};

// In MesaPage.jsx

const expertLectures = {
  title: "EXPERT LECTURE-2014-15",
  lectures: [
    "An Expert Lecture by Mr. Prashant Singh, Deputy Manager HAL, on “Alligning Manufacturing for A/C”, Dt.- 18.08.2014.",
    "An Expert Lecture by Mr. Ravi Kale, on “Navy Services & its importance”, Dt.- 05.09.2014",
    "An Expert Lecture by Mr. Pradhan D.K. Sir of IGTR, Aurangabad, on “Modern Machines & manufacturing”, Dt.-26.09.2014.",
    "An Expert Lecture by Dr. H. Bagchi (Emeritus Prof.) on “Analysis of Manufacturing Processes”, Dt.-11.11.2014.",
    "An Expert Lecture by K. Reddy, IIT, Hyderabad, on “Recent Research Activities of IITs & Synopsis of R & D” for staff & students, Dt.- 06.12.2014.",
    "An Expert Lecture by Prof. Kornel F. Ehmann of North Western University, Illinois, USA on “Micro/Macro Scale manufacturing”, Dt.- 05.12.2014 for T.E. & B.E. Students",
    "An Expert Lecture by Prof. Kornel F. Ehmann of North Western University, Illinois, USA on “Synopsis of Micro Manufacturing R&D” at North Western University, USA Dt.- 06.12.2014 for Staff.",
    "An Expert Lecture by Prof. Kornel F. Ehmann of North Western University, Illinois, USA on Institutional Research & Resource Development for Senior Staff, Dt.- 07.12.2014.",
    "An Expert Lecture by Dr. H. Bagchi (Emeritus Pro.) on “Leadership Qualities”, Dt.- 19.03.2015.",
    "An Expert Lecture by Dr. H. Bagchi (Emeritus Prof.) on “Super Conductors” for T.E. & B.E. students Dt-. 19.03.2015.",
    "An Expert Lecture by Dr. H. Bagchi (Emeritus Pro.) on “Nano-Technology”, Dt.- 20.03.2015, for B.E. & P.G. Students",
    "An Expert Lecture by Dr. K.G. Narayankhedkar (Director General, MGM.) on “Cryogenics”, Dt.- 19.03.2015.",
    "An Expert Lecture by Prof. Suhas Joshi of IIT,Mumbai on “Micro/Macro Scale manufacturing”, Dt.- 03.04.2015 for T.E. & B.E. Students.",
    "An Expert Lecture by Mr. Tejander Singh, Alumni of the college, has given an informative lecture on “CAD software & its applications” Dt-15.04.2015."
  ],
  slides: [
    { imageSrc: '/images/mesa/mesa-1.jpg', title: 'Expert Lecture', subtitle: 'Prof. Suhas Joshi (IIT, Mumbai)' },
    { imageSrc: '/images/mesa/mesa2.jpg', title: 'Expert Lecture', subtitle: 'Prof. Kornel F. Ehmann (USA)' },
    { imageSrc: '/images/mesa/mesa3.jpg', title: 'Expert Lecture', subtitle: 'Prof. K.G. Narayankhedkar' },
    { imageSrc: '/images/mesa/mesa4.jpg', title: 'Expert Lecture', subtitle: 'Prof. D.K. Pradhan' },
    { imageSrc: '/images/mesa/mesa5.jpg', title: 'Expert Lecture', subtitle: 'Prof. H. Bagchi' },
  ]
};

const mesaActivities = {
    title: "MESA ACTIVITIES",
    activities: [
        "Teacher’s Day Celebration on 5th Sept. 2014.",
        "Engineer’s Day Celebration on 15th Sept. 2014.",
        "Debate Competition on 17 Sept.2014.",
        "Robotix Competition on 26 to 28 Sept. (Total 19 Teams, 76 Students)",
        "Brain Drill Test on 29 Sept. 2014.(Total 362 Students)",
        "Poster Competition on 30 Sept. 2014",
        "Gandhi Jayanti Celebration on 2 Oct. 2014.",
    ],
    slides: [
        { imageSrc: '/images/mesa/mesa6.jpg', title: 'Gandhi Jayanti' },
        { imageSrc: '/images/mesa/mesa7.jpg', title: 'Poster Competition' },
        { imageSrc: '/images/mesa/mesa8.jpg', title: 'Achievements' },
    ]
};

// Add these new data constants to MesaPage.jsx

const trainingCourses = [
  "ISTE online workshop on ACS at Remote Centre from 2 Dec. to 12 Dec. 2014",
  "ISTE online workshop on ETD at Remote Centre from 5 Feb.To 29 April 2015.",
  "H-CAM training by H-CAM Experts in department for staff on 23 Dec & 24 Dec.2014",
  "ACS Lab. training by JANATICS Experts for staff",
  { 
    title: "IGTR training",
    subpoints: [
      "For Mechanical students: [category 39 + others 18] (UG/CATIA & Hyper mesh)",
      "For Civil students: [category 28 + others 10] (Auto-CAD, ANSYS)"
    ]
  },
  {
    title: "Auto-CAD for Civil Engineers (PWD)",
    subpoints: ["Total 105 in 3 Batches Proposed in the Month of May-2015."]
  }
];

const trainingPlacement = {
  title: "TRAINING PLACEMENT",
  points: [
    "STTP training by Innovation Unlimited Group arranged on Saturday, Sunday & Monday in the month of April-2015 for T.E. Mechanical Students.",
    {
      title: "5 students shortlisted in INDIAN ARMY (SSB Interview):",
      students: ["AKSHAY DARAK", "SHUBHAM MATTU", "ANKAMWAR JAYANT", "SANJAY KUMAR", "GHATE VAIBHAV"]
    },
    "5 students appear for H.P. Campus Interview at Pune.",
    "5 students sent for In-plant Training at HAL, Bangalore.",
    "5 student sent for In-plant Training at Schneider Electricals at Bangalore."
  ]
};

const sportsAchievements = {
  title: "SPORTS ACHIEVEMENTS",
  categories: [
    {
      sport: "ATHLETICS",
      achievements: [
        "B-ZONE :100 M & 200 M – 1st prize Ms. Pooja Ram Wakharde (S.E. Mech)",
        "C-ZONE :200 M – 2nd prize Ms. Pooja Ram Wakharde (S.E. Mech)"
      ]
    },
    {
      sport: "BOXING",
      achievements: [
        "ICT Boxing Tournament: Gold Medal Mr. Aakash Darak (T.E. Mech), Silver Medal Mr. Sanjay Kumar (T.E. Mech)",
        "Boxing Competition at M.I.T., Pune: Silver Medal Mr. Vaibhav Ghate (T.E. Mech)"
      ]
    },
    {
      sport: "CRICKET",
      achievements: [
        {
          title: "ICT Women Cricket Runner Up Team Members:",
          members: ["Ms. Aishwarya Dhoot", "Ms. Pooja Sapure", "Ms. Disha Ghan", "Ms. Pooja Wakharde", "Ms. Pooja Thakur"]
        }
      ]
    },
    {
      sport: "VOLLEYBALL",
      achievements: [
        "ICT Volleyball, Science college, Nanded Winner: Ahsok Raut, Manish kumar Tiwari",
        "Degloor College, Degloor Runner up: Ahsok Raut, Manish kumar Tiwari"
      ]
    }
  ]
};

const otherActivities = {
    title: "OTHER ACTIVITIES",
    clubs: [
        {
            name: "HEALTH CLUB",
            members: ["Mr. Aakash Darak (T.E. Mech)", "Mr. Prince Kumar (T.E. Mech)", "Ms.Aishwarya Dhoot (B.E. Mech)"]
        },
        {
            name: "MGM HELPLINE CLUB",
            members: ["Mr. Sachin Deshmukh (ME-MPE)", "Mr. Prashant Sawant (ME-T&HP)"]
        }
    ]
};

const facultyPublications = {
    title: "PUBLICATIONS (2014-15)",
    author: "Dr. Mrs. Geeta S. Lathkar",
    publications: [
        "“Multiobjective Optimization of End Milling HCHCr using ALC-rN PVD Coated Cutters with MOGA and RSMO”, Proceedings of the ASME 2014 International Manufacturing Science & Engineering Conference, June-9-13, 2014, Detroit, Michigan, USA.",
        "“Mechanical Properties of Micro Micro Tungsten Dislphide particles Filled Epoxy Composite and its Resistance Against Sliding Wear”, Malasiyan Polymer Journal, Vol.9 No.1, P-24-32,2014",
        "“Analysis of Used oil on the basis of Wear Volume using Taguchi Method”, IOSR Journal of Engineering, ISSN)e) : 2250-3021, Vol-4, 2014."
    ],
    attended: [
        "Selected as Referee for ASME Journal on Tribology.",
        "Invited on Advisory Committee of Information in Engg. Educaiton at COE, Pune.",
        "Chairman of BOS & Academic Council of SRTM University, Nanded."
    ]
};


const MesaPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-800">MESA (Mechanical Engineering Students Association)</h1>
          
        </div>
{/* --- THIS IS THE NEW "TABLE OF CONTENTS" SECTION --- */}
<div className="bg-white p-6 rounded-lg shadow-lg mb-8">
  <div className="text-center mb-4">
    <h2 className="text-xl font-bold text-gray-700 tracking-wider">PROFESSIONAL BODY ACTIVITIES</h2>
    <div className="w-24 h-px bg-gray-300 mx-auto mt-2"></div>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column: MESA */}
    <div>
      <h3 className="text-lg font-semibold text-indigo-800 mb-3">Mechanical Engineering Students Association (MESA)</h3>
      <ul className="space-y-2 text-gray-700">
        
        {/* --- THIS LINK IS NOW A PDF LINK --- */}
        <li className="flex items-start">
          <FaChevronRight className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
          <a href="/pdfs/mesa/recent.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Mesa Recent Activities</a>
        </li>
        
        <li className="flex items-start">
          <FaChevronRight className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
          <span>MESA Reports</span>
          <ul className="pl-6 mt-1 space-y-1">
            <li className="flex items-start"><FaChevronRight className="text-indigo-400 mt-1 mr-2 text-xs flex-shrink-0" /><a href="/pdfs/mesa/Report2020.21.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">ACADEMIC YEAR 20-21</a></li>
            <li className="flex items-start"><FaChevronRight className="text-indigo-400 mt-1 mr-2 text-xs flex-shrink-0" /><a href="/pdfs/mesa/Report2021.22.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">ACADEMIC YEAR 21-22</a></li>
            <li className="flex items-start"><FaChevronRight className="text-indigo-400 mt-1 mr-2 text-xs flex-shrink-0" /><a href="/pdfs/mesa/Report2022.23.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">ACADEMIC YEAR 22-23</a></li>
          </ul>
        </li>
      </ul>
    </div>
    
    {/* Right Column: Institution of Engineers */}
    <div>
      <h3 className="text-lg font-semibold text-indigo-800 mb-3">Institution of Engineers Student Chapter Activities and Reports</h3>
      <ul className="space-y-2 text-gray-700">
        
        {/* --- THIS LINK IS NOW A PDF LINK --- */}
        <li className="flex items-start">
          <FaChevronRight className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
          <a href="/pdfs/mesa/IEI.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Institution of Engineers student Association</a>
        </li>
        
        <li className="flex items-start">
          <FaChevronRight className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
          <a href="/pdfs/mesa/Activity.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Activity report Institution of Engineers student Chapter</a>
        </li>
      </ul>
    </div>
  </div>
</div>
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-12">
            {/* Introduction Section */}
            <section>
                <ul className="space-y-4 text-gray-700 list-disc list-inside">
                    {mesaIntroPoints.map((point, index) => <li key={index}>{point}</li>)}
                </ul>
            </section>

            {/* Activities Section */}
            <section className="space-y-6">
                <div>
                    <h3 className="font-bold">{gurupurnima.title}</h3>
                    <p className="pl-6 text-gray-700">{gurupurnima.description}</p>
                </div>
                <div>
                    <h3 className="font-bold">{teachersDay.title}</h3>
                    <p className="pl-6 text-gray-700">{teachersDay.description}</p>
                    <ul className="list-[lower-alpha] list-inside pl-8 text-gray-700">
                        {teachersDay.subpoints.map((point, index) => <li key={index}>{point}</li>)}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-bold">{Gandhij.title}</h3>
                    <p className="pl-6 text-gray-700">{Gandhij.description}</p>
                    <ul className="list-[lower-alpha] list-inside pl-8 text-gray-700">
                        {Gandhij.subpoints.map((point, index) => <li key={index}>{point}</li>)}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-bold">{day.title}</h3>
                    <p className="pl-6 text-gray-700">{day.description}</p>
                </div>
                  <div>
                    <h3 className="font-bold">{guestlec.title}</h3>
                    <p className="pl-6 text-gray-700">{guestlec.description}</p>
                </div>
                  <div>
                    <h3 className="font-bold">{guestlec2.title}</h3>
                    <p className="pl-6 text-gray-700">{guestlec2.description}</p>
                </div>
                {/* ... add other simple activities like Gandhi Jayanti here ... */}
            </section>
            
            {/* Expert Lectures Section */}
<section className="border-t pt-8">
    <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">{expertLectures.title}</h2>
    <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
        {/* Use the new function here */}
        {expertLectures.lectures.map((item, index) => (
            <li key={index}>{boldenQuotedText(item)}</li>
        ))}
    </ol>
    <MediaCarousel slides={expertLectures.slides} />
</section>
            
            {/* MESA Activities with Gallery */}
            <section className="border-t pt-8">
                <h2 className="text-2xl font-bold text-indigo-800 mb-6">{mesaActivities.title}</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                    {mesaActivities.activities.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                 <MediaCarousel slides={mesaActivities.slides} />
            </section>
            
            {/* Sports, Training, Other Activities & Publications can be added as new sections below */}
            {/* Add these new sections to the main return block of MesaPage.jsx */}

{/* Training/Courses Section */}
<section className="border-t pt-8">
    <h2 className="text-2xl font-bold text-indigo-800 mb-6">TRAINING/ COURSES</h2>
    <ol className="list-decimal list-inside space-y-4 text-gray-700">
        {trainingCourses.map((item, index) => (
            <li key={index}>
                {typeof item === 'string' ? item : (
                    <>
                        {item.title}
                        <ul className="list-[lower-alpha] list-inside pl-6 mt-1">
                            {item.subpoints.map((sub, sIndex) => <li key={sIndex}>{sub}</li>)}
                        </ul>
                    </>
                )}
            </li>
        ))}
    </ol>
</section>

{/* Training Placement Section */}
<section className="border-t pt-8">
    <h2 className="text-2xl font-bold text-indigo-800 mb-6">{trainingPlacement.title}</h2>
    <ol className="list-decimal list-inside space-y-4 text-gray-700">
        {trainingPlacement.points.map((item, index) => (
            <li key={index}>
                {typeof item === 'string' ? item : (
                    <>
                        {item.title}
                        <div className="pl-6 mt-1 space-y-1 font-semibold">
                            {item.students.map((student, sIndex) => <div key={sIndex}>{student}</div>)}
                        </div>
                    </>
                )}
            </li>
        ))}
    </ol>
</section>

{/* Sports Achievements Section */}
<section className="border-t pt-8">
    <h2 className="text-2xl font-bold text-indigo-800 mb-6">{sportsAchievements.title}</h2>
    <div className="space-y-4 text-gray-700">
        {sportsAchievements.categories.map((cat, index) => (
            <div key={index}>
                <h3 className="font-semibold">{cat.sport}:</h3>
                <ul className="list-disc list-inside pl-4">
                    {cat.achievements.map((ach, aIndex) => (
                        <li key={aIndex}>
                            {typeof ach === 'string' ? ach : (
                                <>
                                    {ach.title}
                                    <div className="pl-4">
                                        {ach.members.map((m, mIndex) => <div key={mIndex}>{m}</div>)}
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
</section>

{/* Other Activities Section */}
<section className="border-t pt-8">
    <h2 className="text-2xl font-bold text-indigo-800 mb-6">{otherActivities.title}</h2>
    <div className="space-y-4 text-gray-700">
        {otherActivities.clubs.map((club, index) => (
            <div key={index}>
                <h3 className="font-semibold">{club.name}:</h3>
                <div className="pl-4">
                    {club.members.map((m, mIndex) => <div key={mIndex}>{m}</div>)}
                </div>
            </div>
        ))}
    </div>
</section>

{/* Faculty Publications Section */}
 <section className="border-t pt-8">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-2">CONFERENCES/SEMINARS/WORKSHOPS ATTENDED BY FACULTY</h2>
        <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">2014 - 15</h3>
        <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">PUBLICATIONS</h4>
            <p className="font-semibold mb-2">{facultyPublications.author}</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {facultyPublications.publications.map((pub, index) => (
                    <li key={index}>{boldenQuotedText(pub)}</li>
                ))}
            </ol>
        </div>
        <div className="mt-6">
            <h4 className="text-lg font-bold text-center text-gray-800 mb-2">CONFERENCES/SEMINAR/WORKSHOP ATTENDED</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                {facultyPublications.attended.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    </section>
        </div>
      </div>
    </div>
  );
};

export default MesaPage;