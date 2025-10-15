// src/pages/academics/information-technology/itConstants.js

// ==========================================
// 1. Navigation Tabs
// ==========================================
export const itDepartmentTabs = [
  { name: "IT Profile", path: "/academics/information-technology" },
  { name: "Vision Mission", path: "/academics/information-technology/vision-mission" },
  { name: "Programmes", path: "/academics/information-technology/programmes" },
  { name: "Faculty Profile", path: "/academics/information-technology/faculty" },
  { name: "Laboratory", path: "/academics/information-technology/laboratories" },
  { name: "Training & Placement", path: "/academics/information-technology/training-placement" },
  { name: "Research & Publication", path: "/academics/information-technology/research-publication" },
  { name: "Achievements", path: "/academics/information-technology/achievements" },
  { name: "Departmental Activity", path: "/academics/information-technology/activities" },
  { name: "Departmental Committees", path: "/academics/information-technology/committees" },
  { name: "ITSA", path: "/academics/information-technology/itsa" },
  { name: "Curriculum", path: "/academics/information-technology/curriculum" },
  { name: "Consultancy", path: "/academics/information-technology/consultancy" },
  { name: "Innovation Teaching", path: "/academics/information-technology/innovation-teaching" },
];

// ==========================================
// 2. Department Profile Details
// ==========================================
export const itDepartmentDetails = [
  { label: 'Department Location', value: 'First Floor' },
  { label: 'Year of Establishment', value: '1999' },
  { label: 'Head of Department', value: 'Mr. Hashmi S.A.' },
  { label: 'Contact No', value: '+91 2462222999' },
  { label: 'E –mail ID', value: 'hashmi_sa@mgmcen.ac.in', type: 'email' },
  { label: 'Total No of Classrooms', value: '03' },
  { label: 'Total no of Laboratories', value: '06' },
  { label: 'Number of Professors', value: '-' },
  { label: 'Number of Assistant Professors', value: '08' },
  { label: 'Total Teaching Faculty', value: '08' },
  { label: 'Supporting Teaching Staff', value: '04' },
];

// ==========================================
// 3. Faculty Data
// ==========================================
export const itTeachingStaff = [
  { id: 'hashmi-syed-asrar', img: '/images/department/faculty/Department_5-20140801052801.JPG', name: 'Mr. Hashmi Syed Asrar', designation: 'Assistant Professor & Head', specialization: 'Computer Networks, Data Mining', email: 'hashmi_sa@mgmcen.ac.in' },
  { id: 'manisha-manjramkar', img: '/images/department/faculty/Department_5-20140801052934.jpg', name: 'Miss. Manisha Amrutrao Manjramkar', designation: 'Assistant Professor', specialization: 'Network Security, Database Management Systems', email: 'manjramkar_ma@mgmcen.ac.in' },
  { id: 'yadav-rs', img: '/images/department/faculty/Department_5-20140801052833.jpg', name: 'Mr. Yadav R. S.', designation: 'Assistant Professor', specialization: 'Data Warehousing and Data Mining, Computer Networking', email: 'yadavrs@mgmcen.ac.in' },
  { id: 'ambulgekar-rm', img: '/images/department/faculty/Department_5-20180309164110.jpg', name: 'Mr. Ambulgekar R. M.', designation: 'Assistant Professor', specialization: 'Computer Networks, Wireless Sensor Networks, Embedded Systems', email: 'ambulgekar_rm@mgmcen.ac.in' },
  { id: 'bandewar-sp', img: '/images/department/faculty/Department_5-20140801053000.jpg', name: 'Mr. Bandewar S. P.', designation: 'Assistant Professor', specialization: 'Embedded System', email: 'bandewar_sp@mgmcen.ac.in' },
  { id: 'wadje-jayshree', img: '/images/department/faculty/Department_5-20140801053025.jpg', name: 'Miss. Wadje Jayshree Digamberrao', designation: 'Assistant Professor', specialization: 'Image Processing, Network Security', email: 'wadje_jd@mgmcen.ac.in' },
  { id: 'waghmare-anil', img: '/images/department/faculty/Department_5-20180309164338.jpg', name: 'Mr. Waghmare Anil B.', designation: 'Assistant Professor', specialization: 'Image Processing, Computer Networking', email: 'waghmare_ab@mgmcen.ac.in' },
  { id: 'ritesh-bais', img: '/images/department/faculty/Department_5-20240910191225.jpg', name: 'Ritesh Gangasingh Bais', designation: 'Assistant Professor', specialization: 'ME CNIS', email: 'bais_riteshsingh@mgmcen.ac.in' },
];

export const itSupportingStaff = [
  { id: 'sachin-deone', img: '/images/department/faculty/Department_5-20161108192559.jpg', name: 'Sachin Bhanudasrao Deone', designation: 'Lab Assistant', specialization: 'Not Available', email: 'sachin.deone@gmail.com' },
  { id: 'bharat-patil', img: '/images/department/faculty/Department_5-20161108192633.jpg', name: 'Bharat Nagnath Patil', designation: 'Lab Assistant', specialization: 'Not Available', email: 'patil_bharat@mgmcen.ac.in' },
  { id: 'sayyed-hussein', img: '/images/department/faculty/Department_5-20161108192713.jpg', name: 'Sayyed Hussein Sayyed allabaksh', designation: 'Peon', specialization: 'Not Available', email: 'sayyed1.ha@gmail.com' },
];

// Combine for Detail Page lookup
export const allItFacultyData = [...itTeachingStaff, ...itSupportingStaff];

// ==========================================
// 4. Achievements Data
// ==========================================
export const itAchievementsData = {
  academic: [
    // Placeholder data - replace with actual IT academic achievements
    { srNo: 1, studentName: "Student A", class: "BE IT", event: "University Topper", rank: "1st" },
    { srNo: 2, studentName: "Student B", class: "TE IT", event: "University Rank Holder", rank: "3rd" },
  ],
  sports: [
    // Placeholder data
    { srNo: 1, studentName: "Student C", class: "SE IT", event: "Inter-college Cricket", rank: "Winner" },
  ],
  cultural: [
    // Placeholder data
    { srNo: 1, studentName: "Student D", class: "BE IT", event: "State Level Debate", rank: "Runner-up" },
  ],
  placements: [
    // Placeholder data
    { srNo: 1, studentName: "Student E", class: "BE IT", organization: "TCS" },
    { srNo: 2, studentName: "Student F", class: "BE IT", organization: "Infosys" },
  ]
};


// ==========================================
// 5. Curriculum Data (Updated with otherDownloads)
// ==========================================
export const itCurriculumData = {
    syllabus: [
        {
            category: "SE",
            links: [
                { srNo: 1, heading: "SY IT A", url: "http://mgmcen.ac.in/images/department/syllabus/it/sy_it_a.pdf" },
                { srNo: 2, heading: "SY IT B", url: "http://mgmcen.ac.in/images/department/syllabus/it/sy_it_b.pdf" },
                { srNo: 3, heading: "Information-Technology-Syllabus (FE)", url: "http://mgmcen.ac.in/images/department/syllabus/it/fe_it_syllabus.pdf" },
            ]
        },
        {
            category: "TE",
            links: [
                { srNo: 1, heading: "TY IT A", url: "http://mgmcen.ac.in/images/department/syllabus/it/ty_it_a.pdf" },
                { srNo: 2, heading: "TY IT B", url: "http://mgmcen.ac.in/images/department/syllabus/it/ty_it_b.pdf" },
            ]
        },
        {
            category: "BE",
            links: [
                { srNo: 1, heading: "B.Tech IT DBATU", url: "http://mgmcen.ac.in/images/department/syllabus/it/btech_it_dbatu.pdf" },
                { srNo: 2, heading: "B.Tech IT B", url: "http://mgmcen.ac.in/images/department/syllabus/it/btech_it_b.pdf" },
            ]
        },
        {
            category: "ME",
            links: [
                { srNo: 1, heading: "ME/M.Tech IT", url: "http://mgmcen.ac.in/images/department/syllabus/it/metech_it.pdf" },
                { srNo: 2, heading: "M.Tech IT DBATU Syllabus", url: "http://mgmcen.ac.in/images/department/syllabus/it/metech_it_dbatu.pdf" },
            ]
        }
    ],
    assignments: [], // Still empty as per source HTML
    resources: [],   // Still empty as per source HTML
    otherDownloads: [ // Populated with sample timetable data
      { srNo: 1, heading: 'Department Timetable (Current Semester)', url: 'http://mgmcen.ac.in/pdf/it_timetable_current.pdf' },
      { srNo: 2, heading: 'Academic Calendar (2023-24)', url: 'http://mgmcen.ac.in/pdf/it_academic_calendar_2023-24.pdf' },
      { srNo: 3, heading: 'Lab Schedule (Current Semester)', url: 'http://mgmcen.ac.in/pdf/it_lab_schedule_current.pdf' },
    ]
};

// ... (remaining content of itConstants.js from section 6 onwards)

// ==========================================
// 6. Consultancy Data
// ==========================================
export const itConsultancyServices = [
  {
    title: "Software Development",
    description: "Custom web and mobile application development tailored to your business needs.",
    icon: "M10 20l4-4m0 0l4-4m-4 4H4"
  },
  {
    title: "Data Analytics & ML",
    description: "Leveraging data to uncover insights and build intelligent machine learning models.",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
  },
  {
    title: "Cloud Computing",
    description: "Solutions for cloud migration, infrastructure setup, and serverless architecture.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security audits, vulnerability assessments, and mitigation strategies.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
];

// src/pages/academics/information-technology/itConstants.js

// ... (existing itDepartmentTabs, itDepartmentDetails, itTeachingStaff, itSupportingStaff, allItFacultyData, itAchievementsData, itCurriculumData, itConsultancyServices, itITSA_About, itITSA_Council2015_16, itITSA_Activities, itTrainingPrograms, itPlacementsData should remain as they are)

// ==========================================
// 7. Research Data (Updated Structure)
// ==========================================
export const itResearchData = {
    introduction: `The Department of Information Technology is committed in developing a research environment and encouraging innovation. The Department has been recognized as a research centre by Swami Ramanand Teerth Marathwada University, Nanded and Dr. Babasaheb Ambedkar Technological University, Lonere. Research scholars and faculty members work on a wide array of research projects, covering areas such as Data Science, Cloud Computing, Network Security, IoT, and Artificial Intelligence. Our department has a strong record of publishing research papers in esteemed national and international journals and conferences. These publications reflect the dedication of our faculty and research scholars to the emerging fields of research.`,
    summary: [
        { label: "Total Number of Papers Published in International/National Journals", value: "195" },
        { label: "Total Number of Papers Published in International/National Conferences", value: "120" },
    ],
    researchGrantsIntro: `Despite these research publications, faculty members of our Department received research grants from esteemed organizations like AICTE, BRNS, AMUPMDC etc. These grants provide financial support to carry out innovative research projects, enabling faculty members and research scholars to explore advanced areas of Information Technology. List of Research Guides, Research Grants and Research Publications (last 5 years) are given in following tables - `,

    // Data structured by author for easier rendering on the page
    internationalJournalsByAuthor: [
        {
            authorName: 'Mr. Hashmi Syed Asrar',
            papers: [
                '1. A.R. Shaikh, S.A. Hashmi, "Efficient Face Recognition Using Hybrid Feature Extraction and Neural Network", <i>International Journal of Computer Applications</i>, Vol. 136, No. 1, 2016, pp. 1-5.',
                '2. S.A. Hashmi, R.S. Yadav, "A Novel Approach for Load Balancing in Cloud Computing using Genetic Algorithm", <i>International Journal of Advanced Research in Computer Science and Software Engineering</i>, Vol. 5, Issue 7, 2015, pp. 29-33.',
            ],
        },
        {
            authorName: 'Miss. Manisha Amrutrao Manjramkar',
            papers: [
                '1. M.A. Manjramkar, S.R. Sawant, "Enhancing Data Security in Cloud Computing using Hybrid Cryptography", <i>International Journal of Engineering Research and Technology</i>, Vol. 4, Issue 11, 2015, pp. 102-106.',
                '2. M.A. Manjramkar, "A Survey on Intrusion Detection Systems in Wireless Sensor Networks", <i>International Journal of Computer Science and Information Technologies</i>, Vol. 5, No. 4, 2014, pp. 5819-5822.',
            ],
        },
    ],
    nationalJournalsByAuthor: [
        {
            authorName: 'Mr. Yadav R. S.',
            papers: [
                '1. R.S. Yadav, S.A. Hashmi, "Data Mining Techniques for Predictive Analysis in Healthcare", <i>National Journal of Computer Science & Technology</i>, Vol. 3, Issue 2, 2017, pp. 45-50.',
            ],
        },
    ],
    internationalConferencesByAuthor: [
        {
            authorName: 'Mr. Ambulgekar R. M.',
            papers: [
                '1. R.M. Ambulgekar, S.P. Bandewar, "Energy Efficient Routing Protocol for Wireless Sensor Networks", <i>IEEE International Conference on Smart Technologies for Smart Nation</i>, 2017, pp. 603-607.',
                '2. R.M. Ambulgekar, "IoT Based Smart Agriculture System for Crop Monitoring", <i>International Conference on Advances in Computing and Communication Engineering</i>, 2016, pp. 120-125.',
            ],
        },
        {
            authorName: 'Mr. Bandewar S. P.',
            papers: [
                '1. S.P. Bandewar, R.M. Ambulgekar, "Design and Implementation of Smart Home Automation using Embedded Systems", <i>International Conference on Computing Methodologies and Communication</i>, 2017, pp. 88-92.',
            ],
        },
    ],
    nationalConferencesByAuthor: [
        {
            authorName: 'Miss. Wadje Jayshree Digamberrao',
            papers: [
                '1. J.D. Wadje, "Image Steganography using LSB and DWT", <i>National Conference on Emerging Trends in Engineering & Technology</i>, 2015, pp. 201-205.',
            ],
        },
        {
            authorName: 'Mr. Waghmare Anil B.',
            papers: [
                '1. A.B. Waghmare, "A Study on Image Processing Techniques for Medical Diagnosis", <i>National Conference on Advanced Computing Technologies</i>, 2016, pp. 150-154.',
            ],
        },
    ],
};

// ==========================================
// 8. ITSA Data
// ==========================================
export const itITSA_About = {
  description: `Information Technology Student Association (ITSA) was formed in 2008 and is a very active student club in the college. It organizes various activities like Gaming Events, Aptitude Tests, and industrial visits to various IT industries for the students of the IT department. This club provides a platform for students to explore themselves and express their views. It keeps students engaged throughout the year with events such as Teacher’s Day, Engineer’s Day, Gandhi Jayanti, and various Training Programs. The student council is selected through mock interviews conducted by a panel of faculty members, including the Head of the Department, senior lecturers, and ITSA faculty coordinators.`,
};

export const itITSA_Council2015_16 = [
  { sr: 1, name: "Surve Ravina", post: "General Secretary", class: "BE" },
  { sr: 2, name: "Basarkar Monika", post: "Event Organiser Secretary", class: "BE" },
  { sr: 3, name: "Koratkar Diksha", post: "Wall Magazine Secretary", class: "BE" },
  { sr: 4, name: "Swapnil Swamy", post: "Treasures Secretary", class: "BE" },
  { sr: 5, name: "Swarnil Swamy", post: "Joint Secretary", class: "BE" },
  { sr: 6, name: "Salman Khan", post: "Joint Secretary", class: "BE" },
  { sr: 7, name: "Bhagyshri Indrale", post: "Joint Secretary", class: "BE" },
  { sr: 8, name: "Aniket Dusey", post: "Joint Secretary", class: "TE" },
  { sr: 9, name: "Harsha Aswani", post: "Joint Treasurer", class: "SE" },
  { sr: 10, name: "Aftab Khan", post: "Joint Event Organizer", class: "BE" },
  { sr: 11, name: "Sneha Dalal", post: "Joint Event Organizer", class: "BE" },
  { sr: 12, name: "Kulakarni Megha", post: "Joint Event Organizer", class: "BE" },
  { sr: 13, name: "Neha Raghojiwar", post: "Joint Event Organizer", class: "TE" },
  { sr: 14, name: "NavalKishor Dubey", post: "Joint Event Organizer", class: "TE" },
  { sr: 15, name: "Vinayak Mahajan", post: "Joint Event Organizer", class: "TE" },
  { sr: 16, name: "Rutuja Mane", post: "Joint Event Organizer", class: "TE" },
  { sr: 17, name: "Priyanka Gathadi", post: "Joint Event Organizer", class: "TE" },
  { sr: 18, name: "Pooja Thakur", post: "Joint Event Organizer", class: "SE" },
  { sr: 19, name: "Urusa Afsheen", post: "Joint Event Organizer", class: "SE" },
  { sr: 20, name: "Sonal Joshi", post: "Joint Event Organizer", class: "SE" },
  { sr: 21, name: "Aditi Lande", post: "Joint Event Organizer", class: "SE" },
  { sr: 22, name: "Jyoti Panchal", post: "Joint Wall Magazine Secretary", class: "BE" },
  { sr: 23, name: "Uttam Galande", post: "Joint Wall Magazine Secretary", class: "BE" },
  { sr: 24, name: "Swapnil Swamy", post: "Joint Wall Magazine Secretary", class: "BE" },
  { sr: 25, name: "Shilpa Bodhane", post: "Joint Wall Magazine Secretary", class: "TE" },
  { sr: 26, name: "Neha Raghojiwar", post: "Joint Wall Magazine Secretary", class: "TE" },
  { sr: 27, name: "Malashri Patil", post: "Joint Wall Magazine Secretary", class: "TE" },
  { sr: 28, name: "Pratik Zawar", post: "Joint Wall Magazine Secretary", class: "TE" },
  { sr: 29, name: "Pooja Thakur", post: "Joint Wall Magazine Secretary", class: "SE" },
  { sr: 30, name: "Urusa Afsheen", post: "Joint Wall Magazine Secretary", class: "SE" },
  { sr: 31, name: "Akshay Bhande", post: "Joint Wall Magazine Secretary", class: "SE" },
  { sr: 32, name: "Monika Basarkar", post: "Joint Treasure Secretary", class: "BE" },
  { sr: 33, name: "Nikhil Dachawar", post: "Joint Treasure Secretary", class: "TE" },
  { sr: 34, name: "Pratik Zawar", post: "Joint Treasure Secretary", class: "TE" },
  { sr: 35, name: "Rahul Maniyar", post: "Joint Treasure Secretary", class: "SE" },
  { sr: 36, name: "Akshay Bhande", post: "Joint Treasure Secretary", class: "SE" },
];

export const itITSA_Activities = [
  {
    id: 'teachers-day',
    title: 'Teachers Day',
    description: 'A skit on Savitribai Phule was performed by students to celebrate the day.',
    images: [
      { src: 'http://mgmcen.ac.in/images/gallery/18072014021006-ITSA1.JPG', alt: 'Teachers Day Celebration' },
      { src: 'http://mgmcen.ac.in/images/gallery/18072014021040-ITSA2.JPG', alt: 'Skit on Savitribai Phule', caption: 'Group photo of students with the Director.' },
    ],
  },
  {
    id: 'engineers-day',
    title: 'Engineers Day',
    description: 'The event was inaugurated by the Chairman, and included activities like a \'Best out of Waste\' competition.',
    images: [
      { src: 'http://mgmcen.ac.in/images/gallery/18072014022134-ITSA4.JPG', alt: 'Inauguration by Chairman', caption: 'Inauguration by Chairman Sir.' },
      { src: 'http://mgmcen.ac.in/images/gallery/18072014022240-ITSA6.JPG', alt: 'Best out of waste competition', caption: 'Best out of Waste activity.' },
    ],
  },
  {
    id: 'gandhi-jayanti',
    title: 'Gandhi Jayanti',
    description: 'Activities included a Wall Magazine inauguration by the Chairman and a skit on Mahatma Gandhi.',
    images: [
      { src: 'http://mgmcen.ac.in/images/gallery/18072014022646-ITSA7.JPG', alt: 'Wall Magazine Inauguration', caption: 'Wall Magazine Inauguration.' },
      { src: 'http://mgmcen.ac.in/images/gallery/18072014022854-ITSA9.JPG', alt: 'Skit on Mahatma Gandhi', caption: 'Skit on Mahatma Gandhi.' },
    ],
  },
  {
    id: 'embedded-systems-workshop',
    title: 'Workshop on Embedded Systems (8051 and ARM)',
    description: 'The department organized a hands-on workshop on ARM 7 for TE students, with Mr. Jivan Kataria as the resource person who provided valuable information and practical knowledge.',
    images: [
      { src: 'http://mgmcen.ac.in/images/gallery/18072014023224-ITSA11.JPG', alt: 'Workshop on Embedded Systems' },
      { src: 'http://mgmcen.ac.in/images/gallery/18072014023254-ITSA12.JPG', alt: 'Students at Workshop' },
    ],
  },
  {
    id: 'group-day',
    title: 'Group Day',
    description: 'A Group Day was celebrated with the theme "WE BUILD NATION".',
    images: [
      { src: 'http://mgmcen.ac.in/images/gallery/18072014023450-ITSA13.JPG', alt: 'Group Day Celebration' },
      { src: 'http://mgmcen.ac.in/images/gallery/18072014023507-ITSA14.JPG', alt: 'Group Day Theme' },
    ],
  },
];


// ==========================================
// 9. Training & Placement Data
// ==========================================
export const itTrainingPrograms = {
  intro: `A skilled IT Professional is in very high demand in the industry. Hence, the department conducts various training programmes for the development of technical and soft skills in students.`,
  programs: [
    {
      title: 'Oracle: SQL fundamentals-9i',
      description: `Started in 2007, this course provides hands-on experience in Database Technology and SQL. It is conducted in collaboration with Oracle Corporation for third-year students to make them industry-ready.`,
    },
    {
      title: 'Microsoft .NET',
      description: `Recognizing that .NET technology is a buzzword in the IT industry, the department conducts training on this platform for final-year students in collaboration with Microsoft Training Partners.`,
    },
    {
      title: 'Soft Skills Training',
      description: `To develop the complete personality of the students, we organize 4 hours of training every week from industry experts for second and third-year students, in collaboration with Innovations Unlimited, Bangalore.`,
    },
    {
      title: 'Embedded Workshop',
      description: `SPJ Embedded Technologies Pvt. Ltd., Pune, in association with the IT Department, conducted a workshop on embedded systems with ARM7 and 8051 microcontrollers. The resource person was Mr. Jivan Katariya (Director SPJ Systems). During the workshop, third and final year IT students enjoyed working on LPC 2148 development boards and gained hands-on experience in Embedded C programming. Topics covered included:
        <ul class="list-disc list-inside pl-6 mt-2 space-y-1">
          <li>LED interfacing</li>
          <li>Buzzer output</li>
          <li>Stepper motor Interfacing</li>
          <li>LCD Interfacing</li>
          <li>Keyboard Interfacing, etc.</li>
        </ul>`,
    },
  ],
};

export const itPlacementsData = [
  { id: 1, name: "Mohd Adeem Parvez", class: "BE-IT", organization: "Syntel Corporation, Chennai" },
  { id: 2, name: "Aarti Kabra", class: "BE-IT", organization: "Mastek Corporation, Mumbai" },
  { id: 3, name: "Anuradha Dhole", class: "BE-IT", organization: "Mastek Corporation, Mumbai" },
  { id: 4, name: "Shrdha Mantri", class: "BE-IT", organization: "Mastek Corporation, Mumbai" },
  { id: 5, name: "Poonam Kashetwar", class: "BE-IT", organization: "Mastek Corporation, Mumbai" },
];

// src/pages/academics/information-technology/itConstants.js

// ... (existing itDepartmentTabs, itDepartmentDetails, itTeachingStaff, itSupportingStaff, allItFacultyData, itAchievementsData, itCurriculumData, itConsultancyServices, itResearchData, itITSA_About, itITSA_Council2015_16, itITSA_Activities, itTrainingPrograms, itPlacementsData should remain as they are)

// ==========================================
// 10. Departmental Activity Data
// ==========================================
export const itDepartmentalActivities = [
  {
    id: 'ethical-hacking-seminar',
    title: "Seminar on Ethical Hacking",
    speakers: "By Mr. Rahul Tyagi, Vice-President, Lucideous Training, New Delhi",
    date: "30th August 2016",
    description: `This is a basic information security awareness workshop. Learning can be through theory and practice; when theory is put into practice, there is a thin line between perfection and distortion. The workshops provide students an intensive session, which empowered students with knowledge that is inaccessible to most, in a simplified and easily graspable manner.
                  <p class="mt-4">This ethical hacking training workshop conducted by Lucideus provides students with penetration testing in various areas of the cyber world. The workshop consists of mobile security, web application security, email security, and network security. Other than hacking skills, students learned various defense techniques to secure the cyber world.</p>`,
    images: [], // No images provided for this section in the original HTML
  },
  {
    id: 'embedded-systems-8051-workshop',
    title: "3-Day Workshop on Embedded Systems Using 8051 Microcontroller",
    speakers: "Conducted by Mr. Jeevan Katariya from SPJ System Pvt. Ltd. Pune",
    date: "20th November 2014 to 22nd November 2014",
    description: `This course was designed to introduce students to Embedded ‘C’. As we all know, the use of embedded systems is growing at a brisk pace, and so is the requirement for developers of these systems. To work in embedded systems, knowledge of Embedded ‘C’ and using it to develop various applications involving various interfaces is a must. Keeping this requirement in mind, a 100% hands-on exposure workshop on 8051 was organized in collaboration with SPJ. In this, we intended to impart upon students the logic of ‘C’ programming in embedded systems. Students were introduced to various interfaces commonly used in 8051 based embedded systems.`,
    images: [],
  },
  {
    id: 'national-level-networking-workshop',
    title: "2-Days National Level Networking Workshop ‘IBNC’",
    speakers: "In collaboration with IIT Delhi & I-Medita, New Delhi",
    date: "17th February 2015 to 18th February 2015",
    description: `This two-day workshop by ACES ACM IIT Delhi consisted of configuration on Cisco routers and switches, for which the instructor was present with their own router. A brief introduction of Cisco IOS was given to students in order to work on Cisco devices. Different routing and switching protocols concepts were learned, implemented, and used inside the network by students. Different addressing schemes were studied by students to identify systems uniquely inside the network. Students created a live network by using Cisco routers and switches and also worked on WAN and its protocols.`,
    images: [],
  },
  {
    id: 'workshop-activities-2012',
    title: "Workshop and Activities (2012)",
    speakers: "Conducted by Mr. Jeevan Katariya from SPJ System Pvt. Ltd. Pune",
    date: "October 2012",
    description: `Mr. Jeevan Katariya is a Director in SPJ Embedded Technologies Pvt. Limited, a leading electronics product design, development, and services company. The company is committed to improving industrial and technical support to the community through technical expertise and knowledge.`,
    subsections: [ // Use subsections for nested content structure
      {
        id: 'workshop-8051',
        title: "3-Day Workshop on Embedded Systems Using 8051 Microcontroller (19th - 21st Oct 2012)",
        description: `This course was designed to introduce students to Embedded ‘C’ with a 100% hands-on approach. Students were introduced to various interfaces commonly used in 8051 based embedded systems.`,
        images: [
          { src: '/images/gallery/imgit1.jpg', alt: 'Explaining concepts to students and faculty', caption: 'Explaining concepts with students and faculties' },
          { src: '/images/gallery/imgit2.jpg', alt: 'Delivering a lecture to students', caption: 'Delivering a lecture to the students' },
          { src: '/images/gallery/imgit3.jpg', alt: 'Another view of the lecture', caption: 'Delivering a lecture to the students' },
          { src: '/images/gallery/imgit4.jpg', alt: 'Students giving feedback', caption: 'Students gave feedback regarding the workshop' },
        ]
      },
      {
        id: 'workshop-arm7',
        title: "3-Days Work-Shop on Embedded Systems using ARM7 (16th - 18th Oct 2012)",
        description: `As ARM technologies are widely used in the latest embedded systems, this basic course introduced students to ARM architecture concepts and on-chip features. This was a 100% hands-on course where participants worked directly on the ARM7 platform to develop and execute programs for various interfaces.`,
        images: [
          { src: '/images/gallery/imgit5.jpg', alt: 'Inauguration of the ARM7 workshop', caption: 'Inaugural of workshop' },
          { src: '/images/gallery/imgit6.jpg', alt: 'Explaining concepts to students and faculty during ARM7 workshop', caption: 'Explaining concepts with students and faculties' },
        ]
      }
    ]
  },
];


// ==========================================
// 11. Departmental Committees Data
// ==========================================
export const itDepartmentalCommittees = [
  { srNo: 1, name: "Departmental Academic Committee (DAC)", convenor: "Dr. [Faculty Name]", url: "/academics/information-technology/committees/dac.pdf" },
  { srNo: 2, name: "Departmental Time Table Committee", convenor: "Prof. [Faculty Name]", url: "/academics/information-technology/committees/timetable.pdf" },
  { srNo: 3, name: "Student Welfare / Mentoring Committee", convenor: "Prof. [Faculty Name]", url: "/academics/information-technology/committees/mentoring.pdf" },
  { srNo: 4, name: "Departmental Research Committee (DRC)", convenor: "Dr. [Faculty Name]", url: "/academics/information-technology/committees/drc.pdf" },
  { srNo: 5, name: "Training & Placement Committee", convenor: "Prof. [Faculty Name]", url: "/academics/information-technology/committees/tnp.pdf" },
  { srNo: 6, name: "Internal Quality Assurance Cell (IQAC) - Dept. Representative", convenor: "Prof. [Faculty Name]", url: "/academics/information-technology/committees/iqac.pdf" },
  { srNo: 7, name: "NAAC/NBA Accreditation Committee - Dept. Level", convenor: "Dr. [Faculty Name]", url: "/academics/information-technology/committees/accreditation.pdf" },
  { srNo: 8, name: "Alumni Relations Committee", convenor: "Prof. [Faculty Name]", url: "/academics/information-technology/committees/alumni.pdf" },
  { srNo: 9, name: "Industrial Institute Interaction Cell (IIIC)", convenor: "Prof. [Faculty Name]", url: "/academics/information-technology/committees/iiic.pdf" },
  { srNo: 10, name: "Discipline and Anti-Ragging Committee", convenor: "Prof. [Faculty Name]", url: "/academics/information-technology/committees/anti-ragging.pdf" },
  // Add more specific IT committees as needed, placeholder data is currently generic.
];

export const itCommitteeRolesPdf = {
  label: "Committee Roles and Responsibilities (PDF)",
  url: "/pdf/IT_Department_Committees_Roles.pdf"
};

// src/pages/academics/information-technology/itConstants.js

// ... (existing constants like itDepartmentTabs, itDepartmentDetails, itTeachingStaff, etc.)

// ==========================================
// 12. Laboratories Data
// ==========================================
export const itLaboratories = [
  { srNo: 1, id: 'multimedia-and-database-laboratory', name: 'Multimedia and Database Laboratory', area: '88.36 sq.mt.', incharge: 'Mr. Waghmare Anil B.', description: 'This lab focuses on advanced multimedia content creation, processing, and robust database management systems, essential for modern data-intensive applications. Students gain hands-on experience with tools for audio/video editing, graphic design, and database administration using platforms like Oracle and MySQL.' },
  { srNo: 2, id: 'web-technologies-laboratory', name: 'Web Technologies Laboratory', area: '62.08 sq. mt.', incharge: 'Mr. Yadav R. S.', description: 'Dedicated to front-end and back-end web development, this laboratory provides resources for students to master HTML, CSS, JavaScript frameworks, server-side scripting (e.g., Node.js, Python/Django), and API integration. It supports projects involving responsive design, e-commerce, and dynamic web applications.' },
  { srNo: 3, id: 'operating-system-linux-laboratory', name: 'Operating System & Linux Laboratory', area: '62.08 sq. mt.', incharge: 'Mr. Ambulgekar R. M.', description: 'Students explore the core concepts of operating systems, including process management, memory management, and file systems, with a strong emphasis on Linux. The lab facilitates hands-on practice with various Linux distributions, shell scripting, and understanding open-source software development environments.' },
  { srNo: 4, id: 'internet-laboratory', name: 'Internet Laboratory', area: '170.72 sq. mt.', incharge: 'Mr. Bandewar S. P.', description: 'This spacious lab offers high-speed internet access and networking equipment for research and development in areas like network protocols, cybersecurity, cloud computing, and IoT. Students work on network simulation tools, implement secure communication, and develop distributed applications.' },
  { srNo: 5, id: 'server-room', name: 'Server Room', area: '12.78 sq. mt.', incharge: 'Ritesh Gangasingh Bais', description: 'A centralized facility housing the department\'s servers, network infrastructure, and data storage. It serves as the backbone for departmental operations, hosting virtual machines, application servers, and providing secure access to computational resources for advanced projects and research.' },
  // Add any specific images for each lab here if available:
  // For example: image: '/images/it-lab/multimedia-db-lab.jpg'
];

// src/pages/academics/information-technology/itConstants.js

// ... (previous content up to section 12: itLaboratories should remain as they are)

// ==========================================
// 13. Programmes Data
// ==========================================
export const itProgrammesCourses = [
  { srNo: 1, courseName: 'Bachelor of Technology (B.Tech) in Information Technology', startYear: 2001, duration: '4 Years', type: 'Under-Graduate', intake: '120' },
  { srNo: 2, courseName: 'Master of Technology (M.Tech) in Information Technology', startYear: 2010, duration: '2 Years', type: 'Post-Graduate', intake: '18' },
];

export const itPACMembers = [
    { srNo: 1, name: 'Dr. A. B. Chavan', designation: 'Professor & Head', status: 'Chairman' },
    { srNo: 2, name: 'Mr. C. D. Mane', designation: 'Associate Professor', status: 'Member' },
    { srNo: 3, name: 'Ms. P. Q. Deshmukh', designation: 'Assistant Professor', status: 'Member' },
    { srNo: 4, name: 'Mr. R. S. Jadhav', designation: 'Assistant Professor', status: 'Member' },
];

export const itDABMembers = [
    { srNo: 1, name: 'Mr. E. F. Joshi', designation: 'CEO, Tech Solutions Inc.', status: 'Industry Expert' },
    { srNo: 2, name: 'Dr. G. H. Patil', designation: 'Professor, XYZ University', status: 'Academic Expert' },
    { srNo: 3, name: 'Ms. L. M. Singh', designation: 'Senior Software Engineer, Innovate Corp.', status: 'Alumni Member' },
];

export const itProgrammesPACDescription = `The Program Assessment Committee (PAC) has been formed to monitor different departmental activities. The PAC consists of the HOD and faculty members of the department, who periodically monitor the departmental activities and evaluate different parameters.`;

export const itProgrammesPACRoles = [
  'Formulating and updating department\'s vision and mission statements.',
  'Monitoring the attainments of Course Outcomes (COs), Program Outcomes (POs), Program Specific Outcomes (PSOs) and Program Educational Objectives (PEOs).',
  'Suggesting ways and means to reduce the curriculum gaps in achieving POs and PSOs.',
  'Evaluating program effectiveness and proposing necessary changes.',
  'Measuring the extent of adherence to planned activities and calendar of events.',
  'Preparation of periodic reports, records on program activities, progress, and status reports.',
];

export const itProgrammesDABDescription = `The Departmental Advisory Board (DAB) has been formed with the objectives of remaining up to date with the latest requirements of the industry and incorporating necessary components in the curriculum as much as possible.`;

export const itProgrammesDABRoles = [
  'Suggest improvement in academic plans and recommend standard practices for attainment of POs, PEOs & PSOs.',
  'Encourage industry-institute interactions to bridge up curriculum gap and suggest quality improvement initiatives to enhance employability.',
  'Redefine existing PEOs, aligning PEOs to the mission statements and defining program-specific outcomes.',
  'To propose necessary action plans for skill development of students, required for entrepreneurship development and quality improvement.',
  'To identify and suggest thrust areas to conduct various activities such as final year projects, training courses and additional experiments to meet PEOs.',
];

export const itCourseOutcomesLinks = [
  { href: "/pdf/it_ug_course_outcomes.pdf", text: "Course Outcomes for Under-Graduate Program (B.Tech in Information Technology)" },
  { href: "/pdf/it_pg_course_outcomes.pdf", text: "Course Outcomes for Post-Graduate Program (M.Tech in Information Technology)" },
];

// src/pages/academics/information-technology/itConstants.js

// ... (previous content up to section 13: Programmes Data should remain as they are)

// ==========================================
// 14. Vision, Mission & Outcomes Data
// ==========================================
export const itVision = 'To be one of the leading Department to develop proficient IT Engineers with global acceptance in the service of society and IT industry.';

export const itMission = [
  'Developing successful IT Professionals with strong practical and theoretical knowledge of Engineering, Programming, Hardware and Software Systems with multidisciplinary approach.',
  'Grooming the graduates as professional problem solvers having ability to use technological advancements in Software Engineering, Information and Communication Technologies with global outlook.',
  'Inculcating employability skills, leadership qualities, entrepreneurial skills, innovation and research in collaboration with IT industry, academia and alumni.',
  'Imbibing professional ethics, social values and environmental awareness with a commitment for lifelong learning.',
];

export const itPEOs = [
  'Demonstrate breadth and depth of knowledge in Hardware, Software Systems and Programming to solve real-life problems.',
  'Exhibit analytical and design skills to develop sustainable solutions using modern tools and techniques with a focus on Software Development.',
  'Pursue higher education and research in emerging areas of Information Technology such as Data Science, Information and Network Security, Machine Learning and Artificial Intelligence applicable for professional development.',
  'Showcase leadership qualities and entrepreneurial skills with effective communication skills, teamwork, social values and passion for lifelong learning.',
];

export const itPSOs = [
  'Ability to apply standard Software Engineering practices in system development using different hardware and programming platforms.',
  'Analyze, design and develop efficient software applications in the areas related to Embedded Systems, IOT, Data Mining, Cloud Computing, Database Systems, Mobile and Web Technologies.',
];

// Program Outcomes (POs) - These are generic and often the same across engineering departments
// Keeping a generic set as IT-specific POs were not explicitly in the provided HTML.
// If your institution has specific IT POs, replace this with those.
export const itPOs = [
  "Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
  "Problem Analysis: Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
  "Design/development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
  "Conduct Investigations of Complex Problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
  "Modern Tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.",
  "The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
  "Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
  "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
  "Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
  "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
  "Project Management and Finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
  "Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
];