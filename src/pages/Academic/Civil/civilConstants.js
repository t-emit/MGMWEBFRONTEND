// src/pages/Academic/Civil/civilConstants.js

// Define the sub-navigation tabs for the Civil Engineering department
export const civilDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/civil-engineering" },
  { name: "Vision-Mission", path: "/academics/civil-engineering/vision-mission" },
  { name: "Programmes", path: "/academics/civil-engineering/programmes" },
  { name: "Faculty Profile", path: "/academics/civil-engineering/faculty" },
  { name: "Laboratory", path: "/academics/civil-engineering/labs" },
  { name: "Training and Placement", path: "/academics/civil-engineering/training-placement" },
  { name: "Research & Publication", path: "/academics/civil-engineering/research-publication" },
  { name: "Achievements", path: "/academics/civil-engineering/achievements" },
  { name: "Departmental Activity", path: "/academics/civil-engineering/activities" }, // Path for the new page
  { name: "CESA", path: "/academics/civil-engineering/cesa" },
  { name: "Curriculum ", path: "/academics/civil-engineering/curriculum" },
  { name: "Consultancy", path: "/academics/civil-engineering/consultancy" },
  { name: "Innovation in teaching", path: "/academics/civil-engineering/innovation-teaching" },
];

// Data for the Department Details table (Civil Engineering)
export const civilDepartmentDetails = [
  { label: 'Department Location', value: 'Ground Floor (North Wing)' },
  { label: 'Year of Establishment', value: '1984' },
  { label: 'Head of Department', value: 'Dr. A. K. Hashmi', image: '/images/civil/hod-civil.jpg' },
  { label: 'Contact No', value: '+91 9673279450' },
  { label: 'E –mail ID', value: 'hashmi_arshad@mgmcen.ac.in', type: 'email' },
  { label: 'Total No of Classrooms', value: '4' },
  { label: 'Total no of Laboratories', value: '9' },
  { label: 'Number of Professors', value: '01' },
  { label: 'Number of Associate Professors', value: '03' },
  { label: 'Number of Assistant Professors', value: '09' },
  { label: 'Total Teaching Faculty', value: '13' },
  { label: 'Supporting Teaching Staff', value: '3 (Lab Assistant)' },
  { label: 'Teaching Assistant', value: '0' },
];

// Data for Civil Engineering laboratories
export const civilLaboratories = [
  { srNo: 1, id: 'lab-01-surveying-lab', name: 'Lab-01 - Surveying Lab', area: '70 sqm', incharge: '[Civil Incharge 1 Name]', detailsLink: 'lab-01-surveying-lab' },
  { srNo: 2, id: 'lab-02-concrete-tech-lab', name: 'Lab-02 - Concrete Technology Lab', area: '80 sqm', incharge: '[Civil Incharge 2 Name]', detailsLink: 'lab-02-concrete-tech-lab' },
  { srNo: 3, id: 'lab-03-fluid-mechanics-lab', name: 'Lab-03 - Fluid Mechanics Lab', area: '65 sqm', incharge: '[Civil Incharge 3 Name]', detailsLink: 'lab-03-fluid-mechanics-lab' },
  { srNo: 4, id: 'lab-04-soil-mechanics-lab', name: 'Lab-04 - Soil Mechanics Lab', area: '75 sqm', incharge: '[Civil Incharge 4 Name]', detailsLink: 'lab-04-soil-mechanics-lab' },
  { srNo: 5, id: 'lab-05-structural-analysis-lab', name: 'Lab-05 - Structural Analysis Lab', area: '60 sqm', incharge: '[Civil Incharge 5 Name]', detailsLink: 'lab-05-structural-analysis-lab' },
  { srNo: 6, id: 'lab-06-environmental-engg-lab', name: 'Lab-06 - Environmental Engineering Lab', area: '70 sqm', incharge: '[Civil Incharge 6 Name]', detailsLink: 'lab-06-environmental-engg-lab' },
];

// Data for Civil Engineering Programmes
export const civilProgrammesCourses = [
  { srNo: 1, name: 'B.Tech Civil Engineering', startYear: 1984, duration: 4, type: 'Full Time', intake: 60 },
  { srNo: 2, name: 'M.Tech Structural Engineering', startYear: 2010, duration: 2, type: 'Full Time', intake: 18 },
];

// Data for Departmental Committees
export const civilProgrammesCommittees = [
  { name: 'Click here for Course outcomes', url: 'http://mgmcen.ac.in/pdf/Course%20Outcomes_Civil%20Dept_MGMCOEN.pdf' },
  { name: 'Departmental Advisory Board (DAB)-Civil Department', url: 'http://mgmcen.ac.in/pdf/Departmental%20Advisory%20Board%20(DAB)-Civil%20Department.pdf' },
  { name: 'Program Assessment Committee (PAC)-Civil Department', url: 'http://mgmcen.ac.in/pdf/Program%20Assessment%20Committee%20(PAC)-Civil%20Department.pdf' },
];

// --- CONSTANTS FOR TRAINING AND PLACEMENT PAGE ---
export const civilTrainingFieldTraining = {
  intro: `Students entering in the final year of engineering should complete field training between SIXTH and SEVENTH semester. The basic objective of this Field Training is to expose the students to gain direct first-hand experience with the actual civil engineering work processes such as Surveying, Marking out, Excavation, Concrete Making, Quality control, Reinforcement binding, Measurements, Use of TPEs, use of various construction machinery etc. It is intended that the students understand how theoretical aspects and equations are put into actual action in the form of field activities. In this light following exercise assignments are required to be covered by engaging students at actual work sites.`,
  operations: [
    'Marking out on field and checking.',
    'Excavation of footing pits and checking.',
    'Concrete making for PCC and RCC',
    'Form works checking.',
    'Reinforcement bending, binding and checking.',
    'Reinforcement details of RCC slab work and checking.',
    'Centering details and checking.',
    'Pavement work.',
    'Laying of bricks for partition walls and checking.',
    'Plastering and checking.',
    'Plumbing and checking.',
    'Electrical wiring and checking.',
    'Finishing of structure.',
    'Measurements, units and rates for important raw materials.',
    'Understanding set of documents for new construction works.',
    'Bank loans, processing and repayment details.',
    'Etc.',
  ],
};

export const civilTrainingPrograms = [
  {
    title: 'Autodesk Fusion 360',
    description: `Arranged one week Hand on training on Autodesk Fusion 360 in collaboration with Autodesk in the year of 2019-20. This helps to improve the 2D and 3D modeling skills among the students. This training include the Introduction, creating the feature with quick shapes, Sketching, Modeling, Assembling, Visualization, rendering image and Animations, Drawings, Simulation etc. More than 60 students completed the training.`,
  },
  {
    title: 'E- Tabs',
    description: `Arranged one week training on E- Tab software for analysis and design of structure in the year of 2019-20. This training strengthens the student’s software skill require for analysis and designs of structure. This training includes the Introduction to Modeling tools, creating library for Material, Loads, Assigned the load, designing the member, results etc. About 20 students completed the training successfully`,
  },
  {
    title: 'Staad- Pro',
    description: `Arranged one week training on Staad- Pro Software for Analysis and design of structure in the year of 2019-20. This training strengthens the students software skill requires for analysis and design of structure. This training includes the Modeling, Assigning member property, assigning load, Analysis & Design. More than 60 students completed training successfully.`,
  },
  {
    title: 'Total – Station',
    description: `Arranged 2 days training for Total station for surveying in collaboration with Indo German tools in the year of 2019-20. This training strengthens the surveying skill with advance instruments. This training includes setting up the Instruments, leveling and surveying, counter surveying, road surveying, developing map etc. More than 50 students completed the training successfully.`,
  },
  {
    title: 'Soft skill & Aptitude Training',
    description: `Arranged 2 week training for Soft skill & Aptitude training in collaboration with Universal education Training, Bangalore in the year of 2019-20. This training strengthens the Soft skill and Aptitude skill among the students. More than 40 student’s completed the training successfully.`,
  },
  {
    title: 'Communication Workshop',
    description: `Arranged one week English communication workshop by Anthony Thomas of Mastermind Academy, Pune in the year of 2018-19. This strengthens the communication skills in students. More than 60 students completed training successfully.`,
  },
  {
    title: 'College to Corporate program',
    description: `College to corporate program conducted by IIT Bombay in blended mode in the year of 2018-19. This training includes the Effective use of IT for professional activity, Soft skill, and workplace communication. More than 30 students completed program successfully.`,
  },
  {
    title: 'Soft skill & Communication',
    description: `Arranged two days workshop on soft skill & Communication workshop by Barclays in association with Global talent track and NASSCOM foundation in the year of 2018-19. More than 50 students participated.`,
  },
];

export const civilTrainingGallery = [
  {
    category: 'Autodesk fusion 360 Training',
    images: [
      { src: 'https://mgmcen.ac.in/images/gallery/cen.jpg', alt: 'Autodesk Fusion 360 Training 1' },
      { src: 'https://mgmcen.ac.in/images/gallery/cen1.jpg', alt: 'Autodesk Fusion 360 Training 2' },
    ],
  },
  {
    category: 'Etab Software Training',
    images: [
      { src: 'https://mgmcen.ac.in/images/gallery/etab.jpg', alt: 'Etab Software Training 1' },
      { src: 'https://mgmcen.ac.in/images/gallery/etab1.jpg', alt: 'Etab Software Training 2' },
    ],
  },
];

export const civilPlacementRecordPdfs = [
  { name: 'List of Placed student A.Y. (2023-24)', url: 'http://mgmcen.ac.in/pdf/Civil-List of Placed student  2023-24.pdf' },
  { name: 'List of Placed student A.Y. (2022-23)', url: 'http://mgmcen.ac.in/pdf/Civil-List of Placed student  2022-23.pdf' },
  { name: 'List of Placed student A.Y. (2021-22)', url: 'http://mgmcen.ac.in/pdf/Civil-List of Placed student 2021-22.pdf' },
  { name: 'List of Placed student A.Y. (2020-21)', url: 'http://mgmcen.ac.in/pdf/Civil-List of Placed student 2020-21.pdf' },
];

export const civilPlacedStudents = [
  { srNo: 1, name: 'Ms. Sonal Gore', company: 'Tata Consultancy Services', year: '2019-20' },
  { srNo: 2, name: 'Mr. S. Hansraj singh Rodgi', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2018-19' },
  { srNo: 3, name: 'Mr. Murlidhar Mantri', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2018 -19' },
  { srNo: 4, name: 'Mr. Shankar Takalkar', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2018 - 19' },
  { srNo: 5, name: 'Mr. Nivritti Panchal', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2018 - 19' },
  { srNo: 6, name: 'Mr. Akash Jakapur', company: 'Universal Eduction, Banglore', year: '2018-19' },
  { srNo: 7, name: 'Mr. Kiran Ade', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2017-18' },
  { srNo: 8, name: 'Mr. Shaikh Mohd.', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2017-18' },
  { srNo: 9, name: 'Mr. Ramdas Gajarwad', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2017-18' },
  { srNo: 10, name: 'Mr. Shrikant Jadhav', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2017-18' },
  { srNo: 11, name: 'Mr. Shubham Bagde', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2017-18' },
];

export const civilPlacedStudentsGallery = [
  { src: 'https://mgmcen.ac.in/images/gallery/placed.jpg', alt: 'Placed Students 1' },
  { src: 'https://mgmcen.ac.in/images/gallery/placed1.jpg', alt: 'Placed Students 2' },
];

// --- CONSTANTS FOR ACHIEVEMENT PAGE ---
export const civilAchievements = [
  {
    year: '2024-25',
    entries: [
      {
        srNo: 1,
        name: 'Swami Rohan Shankar (B.Tech Civil)',
        activity: 'Selected as a member of the Dr. Babasaheb Technological University team which participated in the All India Inter University Yoga (Rhythmic)-Men Tournament',
        heldAt: 'KIIT, Bhubaneswar, Odisha',
        prize: 'Participation'
      },
      {
        srNo: 2,
        name: `Project Group-1
1. Kshirsagar Sakshi
2. Garad Pranita
3. Birewar Omkar
4. Eklare Shailesh`,
        activity: `Received a letter of appreciation from a Chairperson, Unnat Bharat Abhiyan, IIT Bombay, GoM, for acknowledging the participation of students and faculty members from MGM’s College of Engineering, Nanded, in the “Field-Based Projects with Aid of GIS” program in the Nanded Region.
Project Title: Study and Understanding Watershed Management for NRM structure for a village
Project Guide: Mr. R. R. Alurwad`,
        heldAt: `Alegaon Village, Nanded District, Maharashtra
Duration: Sept-2024 to July-2025`,
        prize: 'Received a letter of appreciation from IIT, Bombay'
      },
      {
        srNo: 3,
        name: `Project Group-2
1. Hambarde Sayatra
2. Kamble Swati
3. Waghmare Rajni
4. Kandhare Govind`,
        activity: `Received a letter of appreciation from a Chairperson, Unnat Bharat Abhiyan, IIT Bombay, GoM, for acknowledging the participation of students and faculty members from MGM’s College of Engineering, Nanded, in the “Field-Based Projects with Aid of GIS” program in the Nanded Region.
Project Title: Study of Cropping Pattern and Water Availability for Alegaon Village
Project Guide: Mr. R. R. Alurwad`,
        heldAt: `Alegaon Village, Nanded District, Maharashtra
Duration: Sept-2024 to July-2025`,
        prize: 'Received a letter of appreciation from IIT, Bombay'
      },
      {
        srNo: 4,
        name: `Project Group-3
1. Gone Aditya
2. Jadhav Malhar
3. Kale Rameshwar
4. Dhage Gaurav
5. Suryawanshi Vijayant`,
        activity: `Received a letter of appreciation from a Chairperson, Unnat Bharat Abhiyan, IIT Bombay, GoM, for acknowledging the participation of students and faculty members from MGM’s College of Engineering, Nanded, in the “Field-Based Projects with Aid of GIS” program in the Nanded Region.
Project Title: Water Balance of a Alegaon Village
Project Guide: Mr. G. S. Deshmukh`,
        heldAt: `Alegaon Village, Nanded District, Maharashtra
Duration: Sept-2024 to July-2025`,
        prize: 'Received a letter of appreciation from IIT, Bombay'
      },
      {
        srNo: 5,
        name: `Shreyash Shinde
Rameshwar Kale
Vijay Suryawanshi
(B.Tech Civil)`,
        activity: 'Solapur Zonal Sports Organized by N.K. Orchid COET, Solapur and DBATU, Lonere',
        heldAt: 'N.K. Orchid COET, Solapur (26th Oct 2024)',
        prize: 'Runner Up'
      },
      {
        srNo: 6,
        name: 'Rohan Shankar Swami TY Civil',
        activity: 'Yoga Competition in Inter Zonal Sports Meet organized by DBATU, Lonere',
        heldAt: 'SVKM Institute of Technology, Dhule (28th Oct 2024)',
        prize: 'Gold Medal'
      }
    ],
  },
  {
    year: '2023-24',
    entries: [
      {
        srNo: 1,
        name: `Aditya Gone,
Shailesh Eklare,
Tejal Karre,
Vaibhav Karamunge, (TY Civil)`,
        activity: '“Town Planning” (PRAGYAA 2024) National Level Technical Event',
        heldAt: 'SGGS IE&T, Nanded (23rd March 2024)',
        prize: 'Second Prize',
      },
      {
        srNo: 2,
        name: `Aditya Gone,
Shailesh Eklare,
Tejal Karre,
Vaibhav Karamunge (TY Civil)`,
        activity: '“Cad War” (PRAGYAA 2024) National Level Technical Event',
        heldAt: 'SGGS IE&T, Nanded (23rd March 2024)',
        prize: 'First Prize',
      },
      {
        srNo: 3,
        name: `Shreeyash Shinde
(TY Civil)`,
        activity: 'ZENITH-2024 State Level Sports (Ring Football) Organized by SGGS IOE&T, Nanded',
        heldAt: 'SGGS IOE&T, Nanded (23rd to 25th Feb 2024)',
        prize: 'First Place',
      },
      {
        srNo: 4,
        name: `Mohd Faizan
(B.Tech Civil)
Shreyash Shinde,
Rameshwar Kale,
Balikondwar Shashank
(TY Civil)`,
        activity: 'Inter College Football Event-2023 organized by DBATU University',
        heldAt: 'Inter College Tournament at Solapur 2023',
        prize: 'Winner (First Place)',
      },
    ],
  },
  {
    year: '2022-23',
    entries: [
      {
        srNo: 1,
        name: 'Laxmikant Deshmukh (TY Civil)',
        activity: 'Zonal Level AVISHKAR-2022 organized by DBATU, Lonere (UG Category)',
        heldAt: 'DJPS College of Pharmacy, Pathari. (10th Dec 2022)',
        prize: 'Second Place',
      },
      {
        srNo: 2,
        name: 'Pranav Rakhewar, B.Tech Civil',
        activity: 'Team Event: Kabbadi',
        heldAt: 'MGM’s COE, Nanded',
        prize: 'Winner',
      },
      {
        srNo: 3,
        name: 'Shahbaz Shaikh, SY civil',
        activity: 'Team Event: Volleyball during Annual Sports Gathering',
        heldAt: 'MGM’s COE, Nanded',
        prize: 'Winner',
      },
      {
        srNo: 4,
        name: 'Shahbaz Shaikh, SY civil',
        activity: 'Team Event: Cricket during Annual Sports Gathering',
        heldAt: 'MGM’s COE, Nanded',
        prize: 'Winner',
      },
      {
        srNo: 5,
        name: 'Sairaj Swami, TY Civil',
        activity: 'Team Event: Kabbadi during Annual Sports Gathering',
        heldAt: 'MGM’s COE, Nanded',
        prize: 'Runner Up',
      },
      {
        srNo: 6,
        name: 'Rameshwar Kale SY Civil',
        activity: 'Team Event: Kabbadi during Annual Sports Gathering',
        heldAt: 'MGM’s COE, Nanded',
        prize: '', // Empty prize as per source HTML
      },
    ],
  },
  {
    year: '2019-20',
    entries: [
      {
        srNo: 1,
        name: 'Pallavi Yannawar (TY Civil)',
        activity: 'Zonal Level AVISHKAR-2019 organized by DBATU, Lonere (UG Category)',
        heldAt: 'TPCT’s College of Engineering, Osmanabad',
        prize: 'First Prize',
      },
      {
        srNo: 2,
        name: 'Shivangi Mukharjee, First Year Civil',
        activity: 'Institute Level Team Event: Basketball',
        heldAt: 'MGM’s COE, Nanded',
        prize: 'Winner',
      },
      {
        srNo: 3,
        name: 'Mohd Rihan, First Year Civil',
        activity: 'Institute Level Team Event: Kabbadi',
        heldAt: 'MGM’s COE, Nanded',
        prize: 'Winner',
      },
      {
        srNo: 4,
        name: 'Pranav Rakhewar, First Year Civil',
        activity: 'Institute Level Team Event: Kabbadi',
        heldAt: 'MGM’s COE, Nanded',
        prize: 'Runner Up',
      },
    ],
  },
  {
    year: '2018-19',
    entries: [
      { srNo: 1, name: 'Mr. Krushna Honrao', activity: 'Zenith basketball- 2018', heldAt: 'SGGS Institute of Technology, Nanded', prize: 'Runner up' },
      { srNo: 2, name: 'Mr. Gavval Rajeshwar', activity: 'Zenith basketball- 2018', heldAt: 'SGGS Institute of Technology, Nanded', prize: 'Runner up' },
      { srNo: 3, name: 'Mr.Yash Damkondwar', activity: 'Zenith basketball- 2018', heldAt: 'SGGS Institute of Technology, Nanded', prize: 'Runner up' },
      { srNo: 4, name: 'Mr. Dagwar Sandesh,\nFazim Baig and\nShaikh Zeeshan Ali', activity: 'PRAGYAA- 2019 Tower Builiding', heldAt: 'SGGS Institute of Technology, Nanded', prize: 'first prize' },
      { srNo: 5, name: 'Jakapure Akash B.,\nShaikh Nabisaab ,\nMiss. Arati Mustapure, Miss. Ashwini Bhoskar,\nMr. Abhishek Pawar', activity: 'Beam it', heldAt: 'BITS Pillani Hyderabad', prize: 'first prize' },
      { srNo: 6, name: 'Miss. Telenge Pooja, Miss.Makalwad Radheshwari, and\nFarooque Rooman Ahmed', activity: 'PRAGYAA 2019\nSeem city', heldAt: 'SGGS Institute of Technology, Nanded', prize: 'first prize' },
      { srNo: 7, name: 'Mr.Dudke Saurabh,\nMiss. Priya Kamble,\nMr. Gacche Vaibhav, and\nMr. Mukesh Pawar\nMiss. Snehal Jadhav', activity: 'Bridge Design', heldAt: 'SGGS Institute of Technology, Nanded', prize: 'first prize' },
      { srNo: 8, name: 'Mr.Dudke Saurabh,\nMiss. Priya Kamble,\nMr. Gacche Vaibhav, and\nMr. Mukesh Pawar\nMiss. Snehal Jadhav', activity: 'Beam it', heldAt: 'BITS Pillani Hyderabad', prize: 'first prize' },
      { srNo: 9, name: 'Mr.Shaikh Suhail', activity: 'Inter collegiate Basketball', heldAt: 'SRTMU, Nanded', prize: 'Winner' },
      { srNo: 10, name: 'Mr.Shaikh Suhail', activity: 'SGGS Zenith basketball', heldAt: 'SGGS Institute of Technology, Nanded', prize: 'Runner up' },
      { srNo: 11, name: 'Mr.Shaikh Suhail', activity: 'SRTMUN Shobha Yatra (Dindi)', heldAt: 'SRTMU, Nanded', prize: 'Winner' },
      { srNo: 12, name: 'Mr. Onkar Salunke', activity: 'KRATOS Bridge IT', heldAt: 'MPGI, Nanded', prize: 'First Prize' },
      { srNo: 13, name: 'Mr. Onkar Salunke', activity: 'PRAGYAA 2019', heldAt: 'Seem city', prize: 'first prize' },
      { srNo: 14, name: 'Mr. Ninand Deshpande,', activity: 'Beam it', heldAt: 'BITS Pillani Hyderabad', prize: 'first prize' },
      { srNo: 15, name: 'Mr. Ninand Deshpande', activity: 'SRTMUN Shobha Yatra (Dindi)', heldAt: 'SRTMU, Nanded', prize: 'Second prize' },
    ],
  },
  {
    year: '2016-2017',
    entries: [
      { srNo: 1, name: 'CHAVAN SURAJ', activity: 'STRUCTURA 2017', heldAt: 'IIT Indore', prize: 'FIRST' },
      { srNo: 2, name: 'MALA PRANAYPRATAPSINGH S', activity: 'STRUCTURA 2017', heldAt: 'IIT Indore', prize: 'FIRST' },
      { srNo: 3, name: 'PATHAN NAZNEEN', activity: 'BEAM IT-2016', heldAt: 'ATMOS BITS PILANI', prize: 'SECOND' },
      { srNo: 4, name: 'AKSHAY BORSE', activity: 'FOOTBALL', heldAt: 'SGGS, NANDED', prize: 'SECOND' },
      { srNo: 5, name: 'AKSHAY BORSE', activity: 'ZENITH FOOTBALL-2016', heldAt: 'SGGS NANDED.', prize: 'RUNNER UP' },
      { srNo: 6, name: 'AKSHAY BORSE', activity: 'ZENITH FUTSAL - 2016', heldAt: 'SGGS NANDED.', prize: 'RUNNER UP' },
      { srNo: 7, name: 'AKSHAY BORSE', activity: 'PRAGYA STRAW TOUVER- 2016', heldAt: 'SGGS NANDED.', prize: 'THIRD' },
      { srNo: 8, name: 'AKSHAY BORSE', activity: 'ATMOS BEAM IT', heldAt: 'BITS PILANI HYDRABAD', prize: 'WINNER' },
      { srNo: 9, name: 'SHAIKH FARUKH S', activity: '5th ASIAN BEACH GAMES - 2016', heldAt: 'INDIAN OLYMPIC ASSOCIATION.', prize: 'PARTICIPATED' },
      { srNo: 10, name: 'SHAIKH FARUKH S', activity: 'ALL INDIAN IUT BOXING', heldAt: 'ALL INDIAN IUT BOXING (LPU,PANJAB)', prize: 'PARTICIPATED' },
      { srNo: 11, name: 'SHAIKH FARUKH S', activity: 'STATE LEVEL MARSHAL ARTS 2016-17', heldAt: 'GUJRATHI BHAVAN AURANGABAD.', prize: 'PARTICIPATED' },
      { srNo: 12, name: 'DESHPANDE SWARESH', activity: 'Youth Festival 2016-17, GROUP SONGS WESTERN', heldAt: 'MPGI NANDED', prize: 'FIRST' },
      { srNo: 13, name: 'DESHPANDE SWARESH', activity: 'Youth Festival 2016-17, INDIAN GROUP SONGS WESTERN', heldAt: 'MPGI NANDED', prize: 'SECOND' },
      { srNo: 14, name: 'DESHPANDE SWARESH', activity: 'Youth Festival 2016-17, QUAWALLI', heldAt: 'MPGI NANDED', prize: 'SECOND' },
      { srNo: 15, name: 'DESHPANDE SWARESH', activity: 'Youth Festival 2016-17 TAALVADYA', heldAt: 'MPGI NANDED', prize: 'THIRD' },
      { srNo: 16, name: 'DESHPANDE SWARESH', activity: 'Youth Festival 2016-17, FLOK ORCHESTRA', heldAt: 'MPGI NANDED', prize: 'THIRD' },
      { srNo: 17, name: 'DESHPANDE SWARESH', activity: 'STATE LEVEL YOUTH FESTIVAL', heldAt: 'AURANGABAD', prize: 'PARTICIPATED' },
      { srNo: 18, name: 'DESHPANDE SWARESH', activity: 'ZONE LEVEL YOUTH FESTIVA', heldAt: 'GUJRAAT', prize: 'PARTICIPATED' },
      { srNo: 19, name: 'BHOSKAR ONKAR', activity: 'Youth Festival 2016-17, FLOK ORCHESTRA', heldAt: 'MPGI NANDED.', prize: 'BRONZE MEDAL' },
      { srNo: 20, name: 'BHOSKAR ONKAR', activity: 'Youth Festival 2016-17, QUAWALLI', heldAt: 'MPGI NANDED.', prize: 'BRONZE MEDAL' },
      { srNo: 21, name: 'BHOSKAR ONKAR', activity: 'Youth Festival 2016-17, SHOBHAYATRA DINDI', heldAt: 'MPGI NANDED.', prize: 'SILVER MEDAL' },
      { srNo: 22, name: 'BHOSKAR ONKAR', activity: 'Youth Festival 2016-17, POWADA', heldAt: 'MPGI NANDED.', prize: 'SILVER MEDAL' },
      { srNo: 23, name: 'SHRIMANGALE SWAPNIL S.', activity: 'Youth Festival 2016-17, FLOK ORCHESTRA', heldAt: 'MPGI NANDED.', prize: 'BRONZE MEDAL' },
      { srNo: 24, name: 'SHRIMANGALE SWAPNIL S.', activity: 'Youth Festival 2016-17, QUAWALLI', heldAt: 'MPGI NANDED.', prize: 'BRONZE MEDAL' },
      { srNo: 25, name: 'SHRIMANGALE SWAPNIL S.', activity: 'Youth Festival 2016-17, SHOBHAYATRA DINDI', heldAt: 'MPGI NANDED.', prize: 'SILVER MEDAL' },
      { srNo: 26, name: 'MASKE POOJA DATTATRAYA', activity: 'Youth Festival 2016-17, SHORTFILM', heldAt: 'MPGI NANDED.', prize: '25000/-' },
      { srNo: 27, name: 'NINAD DESHPANDE', activity: 'MIME', heldAt: 'Inter College Tournament', prize: 'FIRST' },
      { srNo: 28, name: 'NINAD DESHPANDE', activity: 'SKIT', heldAt: 'Inter College Tournament', prize: 'FIRST' },
      { srNo: 29, name: 'NINAD DESHPANDE', activity: 'ONE ACT PLAY', heldAt: 'Inter College Tournament', prize: 'SECOND' },
      { srNo: 30, name: 'NINAD DESHPANDE', activity: 'SKIT', heldAt: 'Inter University Tournament', prize: 'SECOND' },
      { srNo: 31, name: 'PATHAN NAZNEEN', activity: 'BEAM IT-2016', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'SECOND' },
      { srNo: 32, name: 'PATHAN NAZNEEN', activity: 'MEHENDI', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'FIRST' },
      { srNo: 33, name: 'PATHAN NAZNEEN', activity: 'CRICKET', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER UP' },
      { srNo: 34, name: 'SHRINIVAS DESHMUKH', activity: 'BASKLET BALL', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER UP' },
      { srNo: 35, name: 'SHRINIVAS DESHMUKH', activity: 'BASKLET BALL', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'SECOND' },
      { srNo: 36, name: 'PATHAN NAZNEEN', activity: 'TAWER MAKING', heldAt: 'MAOSHORI PRATISHTHAN GROUP NANDED', prize: 'RUNNER UP' },
      { srNo: 37, name: 'PATHAN NAZNEEN', activity: 'TRADITIONAL DAY', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'FIRST' },
      { srNo: 38, name: 'AKSHAY BORSE', activity: 'FUTSAL', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'FIRST' },
      { srNo: 39, name: 'AKSHAY BORSE', activity: 'ZONAL FOOTBALL - 2016', heldAt: 'MGM NANDED.', prize: 'WINNER' },
      { srNo: 40, name: 'AKSHAY BORSE', activity: 'ZONAL BASKETBALL - 2016', heldAt: 'MGM NANDED.', prize: 'RUNNER' },
      { srNo: 41, name: 'AKSHAY BORSE', activity: 'VISIOTECH TRAVERSING - 2016', heldAt: 'MGM NANDED.', prize: 'WINNER' },
    ],
  },
  {
    year: '2015-2016',
    entries: [
      { srNo: 1, name: 'AKSHAY BORDE', activity: 'FUTSAL', heldAt: 'SGGS, NANDED', prize: 'RUNNER UP' },
      { srNo: 2, name: 'PATHAN NAZNEEN', activity: 'MEHENDI', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'WINNER' },
      { srNo: 3, name: 'PATHAN NAZNEEN', activity: 'THROW BALL', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER UP' },
      { srNo: 4, name: 'SHRINIVAS DESHMUKH', activity: 'FOOTBALL', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'WINNER' },
      { srNo: 5, name: 'SHRINIVAS DESHMUKH', activity: 'ARM WRESTLING', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER' },
      { srNo: 6, name: 'SHRINIVAS DESHMUKH', activity: 'WRESTLING', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER' },
      { srNo: 7, name: 'SHRINIVAS DESHMUKH', activity: 'BOXING(70-75 KG)', heldAt: 'MIT PUNE', prize: 'RUNNER' },
      { srNo: 8, name: 'SHRINIVAS DESHMUKH', activity: 'SHOT PUT', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'WINNER' },
      { srNo: 9, name: 'AKSHAY BORSE', activity: 'FOOTBALL', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER' },
      { srNo: 10, name: 'AKSHAY BORSE', activity: 'CHAINO', heldAt: 'MGM\'S COE, NANDED. (VISOTECH)', prize: 'WINNER' },
      { srNo: 11, name: 'AKSHAY BORSE', activity: 'BRIDGE IT', heldAt: 'MGM\'S COE, NANDED. (VISOTECH)', prize: 'THIRD' },
      { srNo: 12, name: 'AKSHAY BORSE', activity: 'BEAM IT-2016', heldAt: 'ATMOS BITS PILANI', prize: 'FIRST' },
      { srNo: 13, name: 'AKSHAY BORSE', activity: 'FOOTBALL', heldAt: 'SGGS, NANDED', prize: 'RUNNER UP' },
      { srNo: 14, name: 'AKSHAY BORSE', activity: 'FUTSAL', heldAt: 'COE,PUNE GABRIEL ZEST\'16', prize: 'RUNNER' },
      { srNo: 15, name: 'RAMESH LOLPOD', activity: 'BEAM IT-2016', heldAt: 'ATMOS BITS PILANI', prize: 'FIRST' },
      { srNo: 16, name: 'AKSHAY BORSE', activity: 'BEAM IT-2016', heldAt: 'ATMOS BITS PILANI', prize: 'FIRST' },
      { srNo: 17, name: 'AKSHAY BORSE', activity: 'FOOTBALL', heldAt: 'SGGS, NANDED', prize: 'RUNNER UP' },
      { srNo: 18, name: 'SHAKH M', activity: 'BEAM IT-2016', heldAt: 'ATMOS BITS PILANI', prize: 'FIRST' },
      { srNo: 19, name: 'RATHOD GAJANAN', activity: 'BEAM IT-2016', heldAt: 'ATMOS BITS PILANI', prize: 'SECOND' },
      { srNo: 20, name: 'PATHAN NAZNEEN', activity: 'BEAM IT-2016', heldAt: 'ATMOS BITS PILANI', prize: 'SECOND' },
      { srNo: 21, name: 'PATIL ANUP', activity: 'BEAM IT-2016', heldAt: 'ATMOS BITS PILANI', prize: 'SECOND' },
      { srNo: 22, name: 'SHAIKH FARUKH S', activity: 'ICT BOXING TOURANAMENT 2015-16', heldAt: 'SMT. SUSHILA DEVI DESHMUKH COLLEGE, LATUR.', prize: 'FIRST' },
    ],
  },
  {
    year: '2014-2015',
    entries: [
      { srNo: 1, name: 'SHRINIVAS DESHMUKH', activity: 'BOXING (65KG TO 75KG)', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER' },
      { srNo: 2, name: 'SHRINIVAS DESHMUKH', activity: 'KABADDI (MEN)', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER' },
      { srNo: 3, name: 'SHRINIVAS DESHMUKH', activity: 'SWIMMING (FRESTYLE 50M)', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER' },
      { srNo: 4, name: 'SHRINIVAS DESHMUKH', activity: 'WEIGHT LIFTING (75KG ABOVE)', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER' },
      { srNo: 5, name: 'SHRINIVAS DESHMUKH', activity: 'WEIGHT LIFTING (75KG ABOVE)', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER' },
      { srNo: 6, name: 'SHRINIVAS DESHMUKH', activity: 'TUG OFF WAR', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'RUNNER' },
    ],
  },
  {
    year: '2013-2014',
    entries: [
      { srNo: 1, name: 'PATHAN NAZNEEN', activity: 'MEHENDI', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'SECOND' },
      { srNo: 2, name: 'MD.ISMAIL', activity: 'PAPER PRESENTATION', heldAt: 'MIT,AURANGABAD', prize: 'SECOND' },
      { srNo: 3, name: 'MD.ISMAIL', activity: 'SURVEYING', heldAt: 'MIT,AURANGABAD', prize: 'FIRST' },
      { srNo: 4, name: 'PATHAN NAZNEEN', activity: 'MEHENDI (AREBIC)', heldAt: 'MGM’S COE, NANDED. (JHANKAR)', prize: 'SECOND' },
    ],
  },
  {
    year: '2012-2013',
    entries: [
      { srNo: 1, name: 'ASHISH NIKAM', activity: 'TECHNICAL QUIZ', heldAt: 'MIT,Pune 2012', prize: 'SECOND' },
      { srNo: 2, name: 'SIDHANT MHAMANE', activity: 'TECHNICAL QUIZ', heldAt: 'MIT,Pune 2012', prize: 'SECOND' },
      { srNo: 3, name: 'SIDHANT MHAMANE', activity: 'LINE EM OUT', heldAt: 'MIT,Pune 2012', prize: 'FIRST' },
      { srNo: 4, name: 'ASHISH NIKAM', activity: 'LINE EM OUT', heldAt: 'MIT,Pune 2012', prize: 'FIRST' },
      { srNo: 5, name: 'SHYAM SHIRADHONKAR', activity: 'LINE EM OUT', heldAt: 'MIT,Pune 2012', prize: 'FIRST' },
      { srNo: 6, name: 'MANISH KUMAR ROY', activity: 'LINE EM OUT', heldAt: 'MIT,Pune 2012', prize: 'FIRST' },
      { srNo: 7, name: 'SUSHIL PALAMKAR', activity: 'CUBE CASTING', heldAt: 'JNEC,AURANGABAD -2012', prize: 'THIRD' },
      { srNo: 8, name: 'KANHAIYA DAGADE', activity: 'CUBE CASTING', heldAt: 'JNEC,AURANGABAD -2012', prize: 'THIRD' },
      { srNo: 9, name: 'KULDIP DANKH', activity: 'CUBE CASTING', heldAt: 'JNEC,AURANGABAD -2012', prize: 'WINNER' },
    ],
  },
];


// --- NEW CONSTANTS FOR DEPARTMENTAL ACTIVITY PAGE ---
export const civilDepartmentalActivities = [
  {
    id: 'concrete-mix-design-workshop-pdf',
    title: 'One Day Concrete Mix Design Workshop in collaboration with The India Cement Ltd.',
    type: 'pdf',
    pdf: {
      src: 'http://mgmcen.ac.in/pdf/Departmental_Activities_9-11-2024.pdf',
      linkText: 'Open PDF in new page',
    },
    date: '9-11-2024 (as per PDF name, adjust if wrong)',
  },
  {
    id: 'ipr-awareness-session',
    title: 'One day Awareness session on “Intellectual Property Rights” in association with IP-Adventure, Pune under Government of India\'s NIPAM Program',
    type: 'rich-text',
    date: '29 May 2023',
    content: `One day Awareness session on “Intellectual Property Rights” in association with IP-Adventure, Pune under Government of India's NIPAM Program on 29 May 2023 for faculty of MGM’s College of Engineering, Nanded. In collaboration with IP-Adventure, the Department of Civil Engineering hosted a "Intellectual Property Rights" awareness session for faculty members. This session was part of the Government of India's NIPAM Program. Advocate Pallavi Kadam and Ms Shalaka Toyle of IP-Adventure served as the session's experts. The session was on understanding IPR, types of patents, the procedure of IPR filing, the repercussions of not submitting patents, IPR prosecution, the role of women in IPR, and the current state of IPR filing in India. These experts have also explained IP-Adventure's role throughout the IPR filing and awareness process.`,
    images: [
      { src: 'https://mgmcen.ac.in/images/ce-da-img.jpg', alt: 'IPR Awareness Session' },
    ],
  },
  {
    id: 'green-building-lecture',
    title: 'Expert Lecture on “Green Building And Energy Efficient Structure” by Consultant Sameer Bhalkar.',
    type: 'text',
    date: '13th April 2018',
    content: 'Expert Lecture on “Green Building And Energy Efficient Structure” by Consultant Sameer Bhalkar.',
  },
  {
    id: 'civil-survey-training',
    title: 'Faculty Training Program “Civil Survey using Total Station” by IGTR Aurangabad.',
    type: 'text',
    date: '11th October to 12th October 2019',
    content: 'Faculty Training Program “Civil Survey using Total Station” by IGTR Aurangabad.',
  },
  {
    id: 'traffic-control-lecture',
    title: 'Expert Lecture on “Traffic Control System” by Dr.Damgir, Faculty of Government Engineering College, Aurangabad.',
    type: 'text',
    content: 'Expert Lecture on “Traffic Control System” by Dr.Damgir, Faculty of Government Engineering College, Aurangabad.',
  },
  {
    id: 'english-communication-workshop',
    title: 'English Communication Workshop By Anthony Thomas from Mastermind English Academy, Pune.',
    type: 'text',
    date: '20th Dec-2018 to 5th Jan-2019',
    content: 'English Communication Workshop By Anthony Thomas from Mastermind English Academy, Pune.',
  },
  {
    id: 'seismic-design-workshop',
    title: 'Seismic Design Workshop conducted by Dr. Mohd. Zameeruddin.',
    type: 'text',
    date: '13th April 2019',
    content: 'Seismic Design Workshop conducted by Dr. Mohd. Zameeruddin.',
  },
  {
    id: 'alumni-webinar-highway-tunnel',
    title: 'A technical International Webinar on “Alumni Perspective: Challenges in Design and Construction of Highway Tunnel through Muree Formation in Himalayas”',
    type: 'text',
    date: '28th June 2020, 03:00 pm [IST]',
    resourcePerson: 'Mr. Nishant Jain, Assistant General Manager, NH2 Six Lanning Project for NHAI.',
    content: `A technical International Webinar on “Alumni Perspective: Challenges in Design and Construction of Highway Tunnel through Muree Formation in Himalayas” 28th June 2020, 03:00 pm [IST].`,
  },
  {
    id: 'alumni-webinar-career-opportunities',
    title: 'A technical International Webinar on “Alumni Perspective: Career Opportunities after Covid-19”',
    type: 'text',
    date: '29th June 2020, 11:00am [IST]',
    resourcePerson: 'Mr. Amey R. Khedikar, Assistant Professor, T.G.P. College of Engineering, Nagpur.',
    content: `A technical International Webinar on “Alumni Perspective: Career Opportunities after Covid-19”, 29th June 2020, 11:00am [IST].`,
  },
  {
    id: 'alumni-webinar-oil-gas',
    title: 'A technical International Webinar on “Application of Civil and Mechanical Engineering in Oil and Gas Industry”',
    type: 'text',
    date: '12th July 2020, 06:30 pm[IST]',
    resourcePerson: 'Mr. Sachin Mathakari, Analysis Manager, Technip FMC, USA.',
    content: `A technical International Webinar on “Application of Civil and Mechanical Engineering in Oil and Gas Industry” 12th July 2020, 06:30 pm[IST].`,
  },
  {
    id: 'ambuaja-cement-workshop-detailed',
    title: 'Two-day workshop on “Concrete Mix Design” by Ambuja Cement, Nanded',
    type: 'long-description-with-gallery',
    date: '16th -17th Feburary 2012 (for 2nd year), 11th -12th March 2012 (for 3rd year), and 23rd -24th April 2012 (for final year)',
    contentSections: [
      {
        type: 'paragraph',
        text: `In India the cement industry underwent a number of changes and reforms mainly to suit the demands of construction industries. This leads to the production of high quality cement. Concrete with higher strength is always in demand. The mechanical strength of concrete depends on proportioning of its ingredient materials; cement, sand, aggregate, water and admixtures. This proportion directly and indirectly affects the fresh and hardened properties of concrete.`,
      },
      {
        type: 'paragraph',
        text: `With an intention to equip students with the updated knowledge of ongoing mix design practices in construction fields, civil department has organized a two day workshop on Concrete Mix Design in association with Ambuja cement, Nanded on 16th -17th Feburary 2012 for second year civil engineering students, 11th -12th March 2012 for third year students, and 23rd -24th April 2012 for final year students.`,
      },
      {
        type: 'paragraph',
        text: `Day 1 of the workshop was conducted by Mr. Pradeep Barange (Zonal Officer) Ambuja cement, Nanded. The speaker has delivered a series of lecture with intermediate lab activities covering the following topics;`,
      },
      {
        type: 'list',
        items: [
          'Economic usage of high quality cement.',
          'Ordinary Portland cement (Physical and Chemical Properties)',
          'Aggregates for mortar and concrete',
          'Batching and mixing of mortar and concrete ingredients',
          'Quality control of concrete works',
        ],
      },
      {
        type: 'image-with-caption',
        src: 'https://mgmcen.ac.in/images/gallery/13022018132254-img2.jpg',
        alt: 'Mr. Pranay Jain welcomed by workshop coordinator',
        caption: 'Mr. Pranay Jain, Technical officer, Ambuja cement welcome by Mohd. Zameeruddin (workshop coordinator)',
      },
      {
        type: 'paragraph',
        text: `Day 2 of the workshop was conducted by Mr. Pranay Jain (Technical officer), Ambuja Cement, Nanded. Whole day students were engaged with physical laboratory work. Mr. Pranay Jain demonstrated the batching and mixing of concrete ingredients. About 76 students from the civil engineering department have taken benefit from this course.`,
      },
      {
        type: 'image-with-caption',
        src: 'https://mgmcen.ac.in/images/gallery/13022018132423-img3.jpg',
        alt: 'Certificate distribution by Dr. D. V. Pattewar',
        caption: 'Distribution of workshop certificates to students by the head of Civil Engineering Department Dr. D. V. Pattewar.',
      },
      {
        type: 'image-with-caption',
        src: 'https://mgmcen.ac.in/images/gallery/13022018132446-img4.jpg',
        alt: 'Certificate distribution after workshop',
        caption: 'Distribution of certificates to students after completion of workshop',
      },
      {
        type: 'image-with-caption', // This was the "Group photograph"
        src: 'https://mgmcen.ac.in/images/gallery/13022018125834-img1.jpg',
        alt: 'Group photograph after Mix Design Workshop',
        caption: 'Group photograph after completion of the Mix Design Workshop',
      }
    ],
  },
  {
    id: 'town-country-planning-seminar',
    title: 'Seminar on “Town and Country Planning” by Mr. Sameer Bahalkar, Assistant Manager, Enviro Analyst and Engineers Pvt. Ltd.',
    type: 'long-description-with-gallery',
    date: '11th Dec 2014',
    contentSections: [
      {
        type: 'image-with-caption',
        src: 'https://mgmcen.ac.in/images/gallery/13022018132543-img5.jpg',
        alt: 'Mr. Sameer Bhalkar being felicitated',
        caption: 'Mr. Sameer Bhalkar, Assistant Manager, Enviro Analyst and Engineers Pvt. Ltd, Mumbai being felicitated by Dr. D. V. Pattewar, Head of Civil Engineering Department.',
      },
      {
        type: 'paragraph',
        text: `The town and country planning system exists to regulate the development and use of land in the public interest. The public interest requires that all development is carried out in a way that would not cause demonstrable harm to interests of acknowledged importance. It is important to distinguish those matters which planning can influence from those which are outside its control. The central concerns of the planning system are to determine what kind of development is appropriate, how much is desirable, where it should best be located and what it looks like.`,
      },
      {
        type: 'paragraph',
        text: `The Ministry of town planning India has primary concern of the ministry are implementation of policies and programs relating to the conservation of country’s natural resources, including lakes and rivers, its biodiversity, forests and wildlife, ensuring the welfare of animals, and the prevention and abatement of pollution.`,
      },
      {
        type: 'paragraph',
        text: `With an intention to make student aware about this seminar on Town and Country Planning was organized by the department of civil engineering pre-final year and final year students for on 11th Dec 2014. This seminar was conducted by Mr. Sameer Bhalkar, Assistant Manager, Assistant Manager, Enviro Analyst and Engineers Pvt. Ltd, Mumbai. The seminar highlighted present state-of-practices in the town and country planning in India and also focused on;`,
      },
      {
        type: 'list',
        items: [
          'How the planning system works?',
          'Where and how consciousness arises',
          'Methodology to calculate land values',
          'Vastu Shastra and the facts related to it.',
        ],
      },
    ],
  },
];

// src/pages/Academic/Civil/civilConstants.js


// ... (existing constants like civilDepartmentDetails, civilLaboratories, civilProgrammesCourses, etc.) ...
// ... (existing constants for CivilTrainingPlacementPage, CivilAchievementPage) ...


// --- NEW CONSTANTS FOR CIVIL FACULTY PROFILE PAGE ---
// --- CONSTANTS FOR CIVIL FACULTY PROFILE PAGE ---
// Images for Civil Faculty should be stored in public/images/civil/faculty/
export const civilTeachingStaff = [
  { id: 'deepak-pattewar', img: '/images/civil/faculty/Department_2-20140801054057.JPG', name: 'Dr. Deepak V. Pattewar', designation: 'Professor', specialization: 'Civil Engineering', email: 'pattewar_dv@mgmcen.ac.in' },
  { id: 'a-k-hashmi', img: '/images/civil/faculty/Department_2-20231407154209.png', name: 'Dr. A. K. Hashmi', designation: 'Associate Professor', specialization: 'Structural Engineering', email: 'hashmi_arshad@mgmcen.ac.in' },
  { id: 'kalpeshkumar-sharma', img: '/images/civil/faculty/Department_2-20231306130334.jpg', name: 'Dr. Kalpeshkumar M. Sharma', designation: 'Associate Professor', specialization: 'Civil Engineering', email: 'sharma_km@mgmcen.ac.in' },
  { id: 'mohd-zameeruddin', img: '/images/civil/faculty/Department_2-20141807040646.jpg', name: 'Dr. Mohd. Zameeruddin', designation: 'Associate Professor', specialization: 'Structural Engineering', email: 'md_zameeruddin@mgmcen.ac.in' },
  { id: 's-v-kannawar', img: '/images/civil/faculty/Department_2-20201509130204.jpg', name: 'Mrs. S. V. Kannawar', designation: 'Assistant Professor', specialization: 'Water Resources Engineering', email: 'kannawar_sv@mgmcen.ac.in' },
  { id: 's-d-halbandge', img: '/images/civil/faculty/Department_2-20241011221805.jpg', name: 'Mr. S. D. Halbandge', designation: 'Assistant Professor', specialization: 'Structural Engineering', email: 'halbandge_sd@mgmcen.ac.in' },
  { id: 'girish-deshmukh', img: '/images/civil/faculty/Department_2-20231306130612.jpg', name: 'Mr. Girish S. Deshmukh', designation: 'Assistant Professor', specialization: 'Structural Engineering', email: 'Deshmukh_gs@mgmcen.ac.in' },
  { id: 'r-r-alurwad', img: '/images/civil/faculty/Department_2-20240801122116.jpg', name: 'Mr. R. R. Alurwad', designation: 'Assistant Professor', specialization: 'Structural Engineering', email: 'alurwad_rr@mgmcen.ac.in' },
  { id: 'm-p-kulkarni', img: '/images/civil/faculty/Department_2-20232512185515.jpg', name: 'Mrs. M. P. Kulkarni', designation: 'Assistant Professor', specialization: 'Water Resources Engineering', email: 'kulkarni_mp@mgmcen.ac.in' },
  { id: 'rahulkumar-sharma', img: '/images/civil/faculty/Department_2-20201509131036.jpg', name: 'Mr. Rahulkumar R. Sharma', designation: 'Assistant Professor', specialization: 'Structural Engineering', email: 'sharma_rr@mgmcen.ac.in' },
  { id: 'aniket-bhore', img: '/images/civil/faculty/Department_2-20201509131403.jpg', name: 'Mr. Aniket A.Bhore', designation: 'Assistant Professor', specialization: 'Civil Engineering', email: 'aniketbhore@gmail.com' },
  { id: 'vaishali-kadam', img: '/images/civil/faculty/Department_2-20201509132452.jpg', name: 'Ms. Vaishali I. Kadam', designation: 'Assistant Professor', specialization: 'Structural Engineering', email: 'kadam_vaishali@mgmcen.ac.in' },
  { id: 'megha-deshmukh', img: '/images/civil/faculty/Department_2-20231306134832.jpg', name: 'Ms. Deshmukh Megha Anandrao', designation: 'Assistant Professor', specialization: 'Civil & Water Management', email: 'deshmukh_ma@mgmcen.ac.in' },
];

export const civilSupportingStaff = [
  { id: 'somnath-tekale', img: '/images/civil/faculty/Department_2-20241410000633.jpg', name: 'Mr.Tekale Somnath Mahadevappa', designation: 'Lab Assistant', specialization: 'Civil Engineering', email: 'tekale_sm@mgmcen.ac.in' },
  { id: 'subhash-ingole', img: '/images/civil/faculty/Department_2-20241410001559.jpg', name: 'Mr. Subhash S. Ingole', designation: 'Lab Assistant', specialization: 'Diploma in Civil Engineering', email: 'ingole_ss@mgmcen.ac.in' },
  { id: 'chandana-tekale', img: '/images/civil/faculty/Department_2-20241410002109.jpg', name: 'Ms.Tekale Chandana Kishanrao', designation: 'Lab Assistant', specialization: 'Civil Engineering', email: 'tekale_chandana@mgmcen.ac.in' },
];

export const allCivilFacultyData = [...civilTeachingStaff, ...civilSupportingStaff];


// --- NEW CONSTANTS FOR CESA PAGE ---

export const cesaReports = [
  { year: '2024-25', url: 'https://mgmcen.ac.in/pdf/CESA%20Report%202024-25.pdf' },
  { year: '2023-24', url: 'http://mgmcen.ac.in/pdf/CESA%20REPORT%202023-24.pdf' },
];

export const cesaAbout = {
  title: 'CESA Archive',
  subtitle: '(Civil Engineering Students Association)',
  aboutText: `Civil Engineering Student’s Association (CESA) is an association of students, for the students, and by the students. CESA provides a platform for students to plan, organize, and execute various activities, to exchange ideas by organizing/participating in technical programs. CESA prepares the plan of curricular and extra-curricular activities to be conducted in each academic Year. It is formed to motivate students to participate and development of extra skills other than academics.`,
  vision: {
    title: 'CESA Vision',
    text: 'To create, promote, plan, organize, and execute the curricular & extracurricular activities in the interest of student development.',
  },
  mission: {
    title: 'CESA Mission',
    items: [
      'To provide a platform for regular and frequent discussions and exchange of views among students.',
      'To provide opportunities for students to develop their leadership and organizational qualities.',
      'To develop students’ academic, professional, and personality development skills through various programs, and activities arranged by association.',
      'To create awareness amongst the students about professional societies, encouraging them to be a member of these societies',
    ],
  },
  officeBearers: {
    title: 'CESA Office Bearers:',
    facultyCoordinator: 'Mr.Aniket A. Bhore, Assistant Professor, Department of Civil Engineering',
    studentCoordinator: 'Mr.Pranav Rakhewar, B.Tech Civil Engg.',
    vicePresident: 'Mr.Rahul Shivlad, TY B.Tech Civil Engg.',
  },
  studentCouncil: {
    year: '2022-2023',
    members: [
      { name: 'Mr.Pranav Rakhewar (FY)', responsibility: 'President' },
      { name: 'Mr.Rahul Shivlad (TY)', responsibility: 'Vice president' },
      { name: 'Mr. Mohd. Faizan (TY)', responsibility: 'Secretary' },
      { name: 'Mr.Ritesh Berje (TY)', responsibility: 'Treasurer' },
      { name: 'Miss Rutuja Kotgire (FY)', responsibility: 'Ladies Representative.' },
      { name: 'Miss Tejaswini Girgoankar(TY)', responsibility: 'Member' },
      { name: 'Miss Pallavi Jogdand (SY)', responsibility: 'Member' },
      { name: 'Miss Pallavi Gadekar (SY)', responsibility: 'Member' },
    ],
  },
  image1: { src: '/images/civil/cesa/cesa-img-1.jpg', alt: 'CESA Student Council' },
};

export const cesaEvents2022_23Overview = {
  title: 'Events Organized by CESA in the Academic Year (2022–23):',
  events: [
    { name: 'Cricket competition', participants: 45, date: '02-March 2023', coordinator: 'Mr.Pranav Rakhewar' },
    { name: 'Carrom Competition', participants: 25, date: '04-March 2023', coordinator: 'Ms.Swati Mahore' },
    { name: 'Chess Competition', participants: 20, date: '05-March 2023', coordinator: 'Mr.Rahul Shivlad' },
    { name: 'Essay competition', participants: 9, date: '15-September 2022', coordinator: 'Mr.Ritesh Berje' },
    { name: 'Model making competition', participants: 9, date: '16-September 2022', coordinator: 'Mr.Harshwardhan Hambarde' },
    { name: 'Technical Rangoli competition', participants: 11, date: '15-September 2022', coordinator: 'Ms.Rutuja Kodgire' },
    { name: 'Technical Quiz competition', participants: 89, date: '16-September 2022', coordinator: 'Mr.Mohd.Kamran' },
    { name: 'poster competition', participants: 13, date: '16-September 2022', coordinator: 'Ms.Pallavi Jogdand' },
    { name: 'Traffic awareness program', participants: 49, date: '13-Jan 2023', coordinator: 'Mr.Rahul Shivlad' },
    { name: 'Music & instrumental program', participants: 30, date: '02-Oct 2022', coordinator: 'Mr.Pranav Rakhewar' },
  ],
};

export const cesaDetailedEvents = [
  {
    id: 'cricket-tournament',
    title: '1) Cricket Tournament:',
    description: `An Inter-Department Cricket Tournament kickstarted on 1st March 2023 at MGM College of Engineering Sports ground, organized by the Student Council. The college is all set to throw a huge extracurricular Cricket Tournament with several matches lined up. The first match was inaugurated at around 11:30 am by the dignitaries of the college which included the Vice Principal, HOD, and several others. The first match was set between B.Tech Final year students with TY Students out of which TY B.Tech Civil stood as the winner.`,
    images: [
      { src: '/images/civil/cesa/cesa-img-2.jpg', alt: 'Cricket Tournament Match 1' },
      { src: '/images/civil/cesa/cesa-img-3.jpg', alt: 'Cricket Tournament Match 2' },
    ],
    results: {
      title: 'Cricket Tournament Result',
      winnerTeam: {
        label: 'Winner Team Members',
        members: [
          'Mohammad Kamran', 'Damkondwar Santosh', 'Quazi Majeeduddin', 'Nikhil sumthankar', 'Shaikh Gufran',
          'Swami sairaj', 'Siddiqui Aadil', 'Katore Subash', 'Lakshmikant deshmukh', 'Mohammad Azhar', 'vishal shete',
        ],
      },
      runnerUpTeam: {
        label: 'Runner-Up Team Members',
        members: [
          'Chandapure Ganesh', 'Rakhewar Pranav', 'Shivlad Rahul', 'Berje ritesh', 'madhav narlewad',
          'ajit deshmukh', 'vaibhav chodry', 'vikas pawar', 'sidishwar', 'dev darlwad', 'shivaji wathore',
        ],
      },
    },
  },
  {
    id: 'carrom-tournament',
    title: '2) Carrom Tournament:',
    description: `CESA Club organized an Inter-Department "Carrom Tournament." The event showcased the sporting spirit of the institution, with 43 students participating enthusiastically. The tournament took place from 01 March to 4th March 2023, culminating in a grand final. The batch of students in each batch 2 students are there for the competition and if that batch wins they will be selected for the next round and the process is going on until we get the winners.`,
    images: [
      { src: '/images/civil/cesa/cesa-img-4.jpg', alt: 'Carrom Tournament Semifinal', caption: 'Seminal final match Men’s single' },
      { src: '/images/civil/cesa/cesa-img-5.jpg', alt: 'Carrom Tournament Match' },
      { src: '/images/civil/cesa/cesa-img-6.jpg', alt: 'Carrom Tournament Final', caption: 'Final Carrom Match Men’s single' },
    ],
    results: {
      title: 'Carrom Tournament',
      winners: [
        { name: 'Damkondwar Santosh', prize: '(Winner)' },
        { name: 'Madhapure Prerna', prize: '(Runner-up)' },
      ],
    },
  },
  {
    id: 'chess-competition',
    title: '3) Chess competition:',
    description: `The Chess tournament organized by the CESA from 1 March to 4 March 2022 was an exemplary success with the participation of around 33 pupils. It showcased exceptional strategic thinking and sportsmanship, fostering a competitive yet friendly atmosphere. Participants displayed their skills with intense matches and moments of brilliance. It was a successful event that highlighted the intellectual and competitive spirit within the college community, promoting the game of chess as a platform for personal growth and camaraderie.`,
    images: [
      { src: '/images/civil/cesa/cesa-img-7.jpg', alt: 'Chess Competition 1' },
      { src: '/images/civil/cesa/cesa-img-8.jpg', alt: 'Chess Competition 2' },
      { src: '/images/civil/cesa/cesa-img-9.jpg', alt: 'Chess Competition Quarterfinal', caption: 'Chess match Quarterfinal' },
      { src: '/images/civil/cesa/cesa-img-9.jpg', alt: 'Chess Competition Semifinal', caption: 'Chess Match Semi final' }, // Reusing image as per source
    ],
    results: {
      title: 'Chess Competition',
      winners: [
        { name: 'Shivlad Rahul', prize: '(Winner)' },
        { name: 'Damkondwar Santosh', prize: '(Runner-up)' },
      ],
    },
  },
  {
    id: 'essay-competition',
    title: '4) Essay Competition:',
    description: `As part of Engineers Day Celebration, CESA conducted an Essay Writing Competition on 15th September 2023 on the topic “Role of Civil Engineer in Society”.`,
    images: [
      { src: '/images/civil/cesa/cesa-img-10.jpg', alt: 'Essay Competition 1' },
      { src: '/images/civil/cesa/cesa-img-11.jpg', alt: 'Essay Competition 2' },
    ],
    results: {
      title: 'Essay Competition',
      winners: [
        { name: 'Panpatte Shriniwas', prize: '(Winner)' },
        { name: 'Ambekar Vyankatesh', prize: '(Runner-up)' },
      ],
    },
  },
  {
    id: 'model-making-competition',
    title: '5) Model making competition',
    images: [
      { src: '/images/civil/cesa/cesa-img-12.jpg', alt: 'Model Making Competition 1' },
      { src: '/images/civil/cesa/cesa-img-13.jpg', alt: 'Model Making Competition 2' },
      { src: '/images/civil/cesa/cesa-img-14.jpg', alt: 'Model Making Competition 3' },
    ],
    results: {
      title: 'Model Making Competition',
      winners: [
        { name: 'Kadam Janhavi', prize: '(Winner)' },
        { name: 'Group of Mohd Shaoib, Shaikh Naved, Aadil Ali, Sayed Misbahuddin', prize: '(Runner-up)' },
      ],
    },
  },
  {
    id: 'technical-rangoli-competition',
    title: '6) Technical Rangoli competition',
    description: `Organizing Rangoli competition events helps students to remain in close touch with their culture. This Rangoli-making competition motivated the students to perform and outshine their creative skills and most importantly, work as a team to bring laurels to their house. The purpose of rangoli is beyond decoration and creating a technical concept through the mind-sets of the brain among the students.`,
    images: [
      { src: '/images/civil/cesa/cesa-img-15.jpg', alt: 'Students explaining concept of Technical Rangoli', caption: 'Students explaining concept of Technical Rangoli' },
      { src: '/images/civil/cesa/cesa-img-16.jpg', alt: 'Preparation of Technical Rangoli 1', caption: 'Preparation of Technical Rangoli' },
      { src: '/images/civil/cesa/cesa-img-17.jpg', alt: 'Preparation of Technical Rangoli 2' },
      { src: '/images/civil/cesa/cesa-img-18.jpg', alt: 'Guest visit to Technical Rangoli Event 1', caption: 'Guest visit to Technical Rangoli Event' },
      { src: '/images/civil/cesa/cesa-img-19.jpg', alt: 'Guest visit to Technical Rangoli Event 2' },
      { src: '/images/civil/cesa/cesa-img-20.jpg', alt: 'Preparation of Technical Rangoli 3' },
      { src: '/images/civil/cesa/cesa-img-21.jpg', alt: 'Preparation of Technical Rangoli 4' },
      { src: '/images/civil/cesa/cesa-img-22.jpg', alt: 'Preparation of Technical Rangoli 5' },
    ],
  },
  {
    id: 'traffic-awareness-program',
    title: '7) Traffic Awareness',
    description: `The traffic awareness program aims to create awareness about traffic, rules, and safety on the road among the students and citizens of Nanded City with the collaboration of the Traffic Department Nanded. It aims to educate people about road safety so that injuries, deaths and other casualties that may occur due to transport can be reduced.`,
    images: [
      { src: '/images/civil/cesa/cesa-img-23.jpg', alt: 'Traffic Awareness 1' },
      { src: '/images/civil/cesa/cesa-img-24.jpg', alt: 'Traffic Awareness 2' },
      { src: '/images/civil/cesa/cesa-img-25.jpg', alt: 'Traffic Awareness 3' },
      { src: '/images/civil/cesa/cesa-img-26.jpg', alt: 'Traffic Awareness 4' },
      { src: '/images/civil/cesa/cesa-img-27.jpg', alt: 'Traffic Awareness Group 1' },
      { src: '/images/civil/cesa/cesa-img-28.jpg', alt: 'Traffic Awareness Group 2' },
    ],
  },
  {
    id: 'musical-instrumental-competition',
    title: '8) Musical & Instrumental Competition.',
    description: `A music competition is an event designed to identify and award outstanding musical ensembles, soloists, composers, conductors and musicologists.`,
    images: [
      { src: '/images/civil/cesa/cesa-img-30.jpg', alt: 'Musical Competition 1' },
      { src: '/images/civil/cesa/cesa-img-31.jpg', alt: 'Musical Competition 2' },
      { src: '/images/civil/cesa/cesa-img-32.jpg', alt: 'Musical Competition 3' },
    ],
  },
];

// ... (existing constants like civilDepartmentDetails, civilProgrammesCourses, civilTrainingFieldTraining, etc.) ...
// ... (existing constants for civilAchievements, civilTeachingStaff, civilSupportingStaff, civilLaboratories, cesaReports, etc.) ...

// --- NEW CONSTANTS FOR CIVIL CURRICULUM PAGE ---
// Assuming PDF files are stored in public/pdfs/civil/syllabus/
export const civilSyllabus = [
  { srNo: 1, heading: 'B.Tech Civil (Final year) Syllabus', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_2-20201509124431.pdf' },
  { srNo: 2, heading: 'DBATU-MTech-Civil-Struct-Engg-Syllabus-2017', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_2-20201509124519.pdf' },
  { srNo: 3, heading: 'First Year B. Tech program (All Branches)', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_2-20201509124547.pdf' },
  { srNo: 4, heading: 'S.Y. AND T.Y. CIVIL SYLLABUS', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_2-20201509124603.pdf' },
];


// --- NEW CONSTANTS FOR CIVIL CONSULTANCY PAGE ---
export const civilConsultancyResources = [
  {
    id: 'consultancy-section',
    title: 'Consultancy',
    type: 'iframe',
    iframeSrc: 'https://mgmcen.ac.in/pdf/Consultancy%20Civil%20Department%2017-11-2024.pdf',
    linkText: 'Open Consultancy PDF in new tab',
  },
  {
    id: 'teaching-learning-resources',
    title: 'Teaching Learning Resources',
    type: 'iframe',
    iframeSrc: 'http://mgmcen.ac.in/civil-eng-resources.aspx', // Note: This is an external .aspx page
    linkText: 'Open Teaching Learning Resources in new tab',
  },
];