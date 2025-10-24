// ... START OF FILE entcConstants.js ...

export const entcDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/electronincs-telecommunication-engineering" },
  { name: "Vision-Mission", path: "/academics/electronincs-telecommunication-engineering/vision-mission" },
  { name: "Programmes", path: "/academics/electronincs-telecommunication-engineering/programmes" },
  { name: "Faculty Profile", path: "/academics/electronincs-telecommunication-engineering/faculty" },
  { name: "Laboratory", path: "/academics/electronincs-telecommunication-engineering/labs" },
  { name: "Training and Placement", path: "/academics/electronincs-telecommunication-engineering/training-placement" },
  { name: "Research & Publication", path: "/academics/electronincs-telecommunication-engineering/research-publication" },
  { name: "Achievements", path: "/academics/electronincs-telecommunication-engineering/achievements" },
  { name: "Departmental Activity", path: "/academics/electronincs-telecommunication-engineering/activities" },
  { name: "Departmental Committees", path: "/academics/electronincs-telecommunication-engineering/committees" },
  { name: "ETA", path: "/academics/electronincs-telecommunication-engineering/eta" },
  { name: "Curriculum", path: "/academics/electronincs-telecommunication-engineering/curriculum" },
  { name: "Consultancy", path: "/academics/electronincs-telecommunication-engineering/consultancy" },
  { name: "Innovation in Teaching", path: "/academics/electronincs-telecommunication-engineering/innovation-teaching" }, // NEW TAB
];

// Data for the Department Details table
export const entcDepartmentDetails = [
  { label: 'Department Location', value: 'North Wing First Floor' },
  { label: 'Year of Establishment', value: '1988' },
  { label: 'Contact No', value: '02462222999' },
  { label: 'E –mail ID', value: 'jondhale_kc@mgmcen.ac.in', type: 'email' },
  { label: 'Total No of Classrooms', value: '04' },
  { label: 'Total no of Laboratories', value: '08' },
  { label: 'Number of Professors', value: '03' },
  { label: 'Number of Associate Professors', value: 'N/A', note: "Value was ' ' in source HTML" },
  { label: 'Number of Assistant Professors', value: '07' },
  { label: 'Number of Lecturers', value: 'N/A', note: "Value was '-' in source HTML" },
  { label: 'Total Teaching Faculty', value: '10' },
  { label: 'Supporting Teaching Staff', value: '06' },
];



// Department Overview text
export const entcDepartmentOverview = `
  Electronics and Telecommunication has become now part of our day-to-day life, from the Mobile Phones to Televisions, Computers to Advanced Satellite that are helping us to lead a smooth and comfortable Life.

  The Department of Electronics and Telecommunication has been successfully functioning since 1988. It offers B.Tech (Electronics and Telecommunication Engineering) Program with an intake of 60 students and M.Tech. (Electronics and Telecommunication Engineering) Program with an intake of 18 students. The Department is having excellent infrastructure and resources in the form of modern equipped laboratories and well-qualified, experienced faculties and supporting staff. E & TC graduates can develop exciting career in industries like Consumer Electronics, Manufacturing Organization, Telecommunication, IT Industries, Healthcare Equipments Manufacturing, Mobile Communication, Internet Technology, Power Electronics and many more industries like Steel, Petroleum etc.

  Electronics and Telecommunication graduates are having huge job opportunities in Government Sector and Private Companies in the areas of Design, Manufacturing, Installation, Operation and Maintenance of Electronic Equipment and Electronic Systems. With the advancement in the latest technology, new opportunities have come into existence for E & TC Engineers. The latest technology includes Self-driving Cars, Autonomous Drone Logistics, Robotics, Automation in Industries, Smart Energy System etc.

  Graduates of Electronics and Telecommunication Department are placed in Government Sector like HAL, BSNL, BEL, BHEL and also in various top MNCs like Infosys, IBM, Reliance, Tech Mahindra, Sankalp Semiconductors etc. Many graduates are pursuing their higher education aboard.
`;

// Faculty List PDF Link
export const entcFacultyListPdf = {
  text: 'Faculty List From 2019-2025',
  url: 'http://mgmcen.ac.in/pdf/Dept. of ECT Faculty List.pdf',
};

// Vision Statement
export const entcVision = 'To be one of the leading departments for Electronics and Telecommunication Engineering to develop proficient Electronics Engineers with global acceptance in the service of mankind.';

// Mission Statements
export const entcMission = [
  'Promoting academic excellence in Electronics and Telecommunication engineers through experiential learning and industry engagement, focusing on Communication Engineering, VLSI, Embedded Systems and IoT for global competitiveness.',
  'Inculcating professionalism, innovation, teamwork, and ethical values in 5G Technology, Artificial Intelligence & Machine Learning, Green and Sustainable Technology, and Biomedical Electronics for the benefit of Society and Industry.',
  'Elevating student employability through hands-on programming education and cultivating a robust collaborative network with industry, academic experts, alumni, and student projects.',
  'Empowering faculty with continuous training in AIML, Medical Image Processing, Signal Processing, and Pedagogy to improve student learning and research productivity.',
];

// Program Educational Objectives (PEOs)
export const entcPEOs = [
  'Examine semiconductor device physics and enhance skills in advanced modeling and simulation using computational methods.',
  'Master signal and Image processing principles as a core skill and specialize in designing embedded and VLSI systems.',
  'Keep up with cutting-edge research in Signal and Image Processing, Communication systems and IoT.',
  'Foster an academic environment that emphasizes excellence, leadership, and ethical standards in students, equipping them with lifelong learning skills and essential research components for a successful professional career.',
];

// Program Specific Outcomes (PSOs)
export const entcPSOs = [
  'Employ modern tools to model, simulate, experiment with, and analyze the performance of Electronics and Telecommunication systems.',
  'Address economic, social, environmental, ethical, health and safety issues keeping in pace with latest technological concepts.',
  'Drive need-based innovations in Electronics and Telecommunication Engineering, fostering "Make in India" through an understanding of finance management and entrepreneurship product development.',
];

// Program Outcomes (POs) - These are generic and often the same across engineering departments
export const entcPOs = [
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

// Data for UG/PG courses offered by ENTC
// IMPORTANT: This data is for Civil Engineering courses as per the latest HTML provided.
// Please update with actual ENTC courses if this was an error.
export const entcProgrammesCourses = [
  { srNo: '1', name: 'B.Tech Civil Engineering', startYear: '1984', duration: '04', type: 'Full Time', intake: '60' },
  { srNo: '2', name: 'M.Tech Structural Engineering', startYear: '2010', duration: '02', type: 'Full Time', intake: '18' },
];

// Data for Departmental Committees and Course Outcomes
// IMPORTANT: These links are for Civil Engineering documents as per the latest HTML provided.
// Please update with actual ENTC documents if this was an error.
export const entcProgrammesCommitteeLinks = [
  { name: 'Departmental Advisory Board (DAB)-Civil Department', url: 'http://mgmcen.ac.in/pdf/Departmental Advisory Board (DAB)-Civil Department.pdf' },
  { name: 'Program Assessment Committee (PAC)-Civil Department', url: 'http://mgmcen.ac.in/pdf/Program Assessment Committee (PAC)-Civil Department.pdf' },
];

export const entcCourseOutcomesLinks = [
  { name: 'Click here for Course outcomes', url: 'http://mgmcen.ac.in/pdf/Course Outcomes_Civil Dept_MGMCOEN.pdf' },
];




// --- NEW CONSTANTS FOR TRAINING AND PLACEMENT PAGE (Data extracted from Civil T&P page) ---
export const entcTrainingFieldTraining = {
  intro: `Students entering in the final year of engineering should complete field training between SIXTH and SEVENTH semester. The basic objective of this Field Training is to expose the students to gain direct first-hand experience with the actual civil engineering work processes such as Surveying, Marking out, Excavation, Concrete Making, Quality control, Reinforcement binding, Measurements, Use of TPEs, use of various construction machinery etc. It is intended that the students understand how theoretical aspects and equations are put into actual action in the form of field activities. In this light following exercise assignments are required to be covered by engaging students at actual work sites.
  Student should observe following operations for various structures carefully on field.`,
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

export const entcTrainingPrograms = [
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

export const entcTrainingGallery = [
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

export const entcPlacementRecordPdfs = [
  { name: 'List of Placed student A.Y. (2023-24)', url: 'http://mgmcen.ac.in/pdf/Civil-List of Placed student  2023-24.pdf' },
  { name: 'List of Placed student A.Y. (2022-23)', url: 'http://mgmcen.ac.in/pdf/Civil-List of Placed student  2022-23.pdf' },
  { name: 'List of Placed student A.Y. (2021-22)', url: 'http://mgmcen.ac.in/pdf/Civil-List of Placed student 2021-22.pdf' },
  { name: 'List of Placed student A.Y. (2020-21)', url: 'http://mgmcen.ac.in/pdf/Civil-List of Placed student 2020-21.pdf' },
];

export const entcPlacedStudents = [
  { srNo: 1, name: 'Ms. Sonal Gore', company: 'Tata Consultancy Services', year: '2019-20' },
  { srNo: 2, name: 'Mr. S. Hansraj singh Rodgi', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2018-19' },
  { srNo: 3, name: 'Mr. Murlidhar Mantri', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2018 -19' },
  { srNo: 4, name: 'Mr. Shankar Takalkar', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2018 - 19' },
  { srNo: 5, name: 'Mr. Nivritti Panchal', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2018 - 19' },
  { srNo: 6, name: 'Mr. Akash Jakapur', company: 'Universal Eduction, Bangalore', year: '2018-19' },
  { srNo: 7, name: 'Mr. Kiran Ade', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2017-18' },
  { srNo: 8, name: 'Mr. Shaikh Mohd.', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2017-18' },
  { srNo: 9, name: 'Mr. Ramdas Gajarwad', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2017-18' },
  { srNo: 10, name: 'Mr. Shrikant Jadhav', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2017-18' },
  { srNo: 11, name: 'Mr. Shubham Bagde', company: 'Suroj Buildcon Pvt. Ltd. Pune', year: '2017-18' },
];

export const entcPlacedStudentsGallery = [
  { src: 'https://mgmcen.ac.in/images/gallery/15092020140154-55.jpg', alt: 'Placed Students 1' },
  { src: 'https://mgmcen.ac.in/images/gallery/15092020140206-66.jpg', alt: 'Placed Students 2' },
];

// --- CONSTANTS FOR RESEARCH AND PUBLICATION PAGE ---

// Summary of publications (calculated from individual entries)
export const entcResearchPublicationsSummary = [
  { label: 'International refereed Journals', count: 28, anchor: 'international-journals' },
  { label: 'International Conferences', count: 57, anchor: 'international-conferences' },
  { label: 'National Conferences', count: 36, anchor: 'national-conferences' },
];

export const entcResearchPublications = [
  // --- International Journals ---
  {
    category: 'International Journals',
    id: 'international-journals',
    facultyPublications: [
      {
        facultyName: 'Dr. S. L. Kotgire',
        papers: [
          { srNo: 1, authors: 'S. L. Kotgire, S. B. Deosarkar', title: 'Low Complexity Peak Power and BE Reduction of OFDM Signal by Symbol Alteration Technique', journalName: 'Transstellar', volumeNo: 'Vol 2', issueNo: 'Issue 3', year: 2012, pageRange: '46-53' },
          { srNo: 2, authors: 'S. L. Kotgire, S. B. Deosarkar', title: 'Low Noise Technique for Reduction of Peak Power & BER in High Rate wireless Communication Sys.', journalName: 'International Journal of Current Engineering & Technology', volumeNo: 'Vol 3', issueNo: 'Issue No 4', year: 2013, pageRange: 'ISSN 2277-4106' },
          { srNo: 3, authors: 'SayedShoaibS. L. Kotgire, S. B. Deosarkar', title: 'New Improved Clipping & Filtering Technique Algorithm for PAPR reduction of OFDM signals', journalName: 'Int. Journal of Comp. Science & Communication', volumeNo: 'Vol.3', issueNo: 'Issue no.1', year: 'Jan-June 2012', pageRange: '175-179' },
        ],
      },
      {
        facultyName: 'Dr. Mrs. Kalpana C. Jondhale Paithane',
        papers: [
          { srNo: 1, authors: 'Dr. Mrs. Kalpana C. Jondhale Paithane', title: 'Human Face Recognition using FSVD and RBF Neural Network', journalName: 'LAP LAMBERT Academic Publishing', volumeNo: 'ISBN -13: 978-620-4-97873-4', issueNo: 'ISBN -10: 620-497873-4, EAN: 9786204978734', year: 2022, pageRange: '' },
          { srNo: 2, authors: 'Dr. Mrs. Kalpana C. Jondhale Paithane', title: 'Design of framework for multi-objective workflow planning for IaaS platform in cloud environment', journalName: 'International Journal of Health Sciences', volumeNo: '6(S1)', issueNo: '6686–6692', year: 2022, pageRange: 'ISSN 2550-6978' },
          { srNo: 3, authors: 'Dr. Mrs. Kalpana C. Jondhale Paithane', title: 'Remote Sensing Bid-Data Classification with Support Vector Machine', journalName: 'Turkish Online Journal of Qualitative Inquiry (TOJQI)', volumeNo: 'Volume 12', issueNo: 'Issue 7,8067 – 8075', year: 'July 2021', pageRange: '' },
          { srNo: 4, authors: 'Dr. Mrs. Kalpana C. Jondhale Paithane', title: 'An Ensemble Clustering Method for Intrusion Detection', journalName: 'International Journal of Intelligent Engineering Informatics (IJIEI)', volumeNo: '', issueNo: '', year: 2017, pageRange: 'ISSN online: 1758-8723 ISSN print: 1758-8715.' },
          { srNo: 5, authors: 'Dr. Mrs. Kalpana C. Jondhale Paithane', title: 'Brain Tumor segmentation   using MS algorithm', journalName: 'International Journal of International Journal of Engineering Technology Science and Research (IJETSR)', volumeNo: 'Volume 4', issueNo: 'Issue 4', year: 'April 2017', pageRange: 'ISSN 2394-3386, ISBN 978-81-933746-5-8' },
          { srNo: 6, authors: 'Dr. Mrs. Kalpana C. Jondhale Paithane', title: 'Object Detection and Clustering from High Resolution Remote Sensing Imaginary Using Mean-Shift(MS) Method', journalName: 'International Journal of Innovations & Advancement in Computer Science ( IJIACS)', volumeNo: 'Vol. 3', issueNo: 'Issue 4', year: 'June - 2014', pageRange: 'ISSN: 2347-8616, P. P. 1-6' },
          { srNo: 7, authors: 'Dr. Mrs. Kalpana C. Jondhale Paithane', title: 'A Hybrid Approach for Classification of Rare Class Data', journalName: 'Knowledge and Information Systems , An International Journal , (KIS), Springer', volumeNo: 'Vol. 36', issueNo: 'Number 3', year: 'September 2013', pageRange: '' },
          { srNo: 8, authors: 'Dr. Mrs. Kalpana C. Jondhale Paithane', title: 'Biomedical Image Retrieval Using SVM Classification', journalName: 'International Journal of Computer Science And Applications(IJCSA)', volumeNo: 'Vol. 6', issueNo: 'No.2', year: 'Arpil 2013', pageRange: 'ISSN: 0974-1011' },
        ],
      },
      {
        facultyName: 'Dr. Mrs. M. R. Banwaskar',
        papers: [
          { srNo: 1, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'Video retrieval system for laparoscopic videos using average intensity color and shape features', journalName: 'Inderscience journal of Automatic computing', volumeNo: 'IJAC2021', issueNo: '', year: '', pageRange: '' },
          { srNo: 2, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'Selected deep features and multiclass SVM for flower Image classification', journalName: 'Int. Conference on Cognition & Recognition', volumeNo: 'Springer book Chapter', issueNo: '', year: 'Dec-2021', pageRange: '' },
          { srNo: 3, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'A Novel Visual-silency Attention-based Key Frame Accumulation in Videos', journalName: 'International journal for Research in Emerging Science and Technology (IJREST)', volumeNo: '', issueNo: '', year: 'Jan. 2017', pageRange: 'ISSN 2349-7610' },
          { srNo: 4, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'An Integrated Vehicle Parameter   Measurement System for Highway Traffic Monitoring', journalName: 'International Journal of Advanced Research in Electronics and Communication Engineering (IJARECE)', volumeNo: '', issueNo: '', year: 'Dec 2017', pageRange: 'ISSN 2320-9801' },
          { srNo: 5, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'Comparative Analysis and Detection of Street Parked Vehicles Using Spatiotemporal Maps and Corner Detection Methods', journalName: 'International Journal of Computer Applications (IJCA)', volumeNo: '', issueNo: '', year: 'Feb 2016', pageRange: 'ISSN0975-8887' },
          { srNo: 6, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'Performance evaluation of  PCA and LDA for face recognition', journalName: 'International Journal of Advanced Research in Electronics and Communication Engineering (IJARECE)', volumeNo: '', issueNo: '', year: 'Feb. 2013', pageRange: 'ISSN 2278-909X' },
          { srNo: 7, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'Application of Wavelet Transform on Multiresolution Image Mosaicing', journalName: 'International Journal of Advanced Research in Electronics and Communication Engineering (IJARECE)', volumeNo: '', issueNo: '', year: 'Jan. 2013', pageRange: 'ISSN 2278-909X' },
        ],
      },
      {
        facultyName: 'Mr. V. S. Jadhav',
        papers: [
          { srNo: 1, authors: 'Mr. V. S. Jadhav', title: 'Classification of Brain MRI using Watershed Segmentation and Support Vector Machine', journalName: 'IJARSE', volumeNo: '2319-83554', issueNo: '', year: 'April2018', pageRange: '' },
          { srNo: 2, authors: 'Mr. V. S. Jadhav', title: 'Noise Removal from ECG using Modified CSMLS Algorithm', journalName: 'TRANS STELLER', volumeNo: '2249-684X', issueNo: '', year: 'June 2014', pageRange: '' },
        ],
      },
      {
        facultyName: 'Mr. Sayed Shoaib Anwar',
        papers: [
          { srNo: 1, authors: 'Mr. Sayed Shoaib Anwar', title: 'A Novel Convergence Approach for an Adaptive Equalizer', journalName: 'At American Journal of Engineering Research, (AJER)', volumeNo: 'Vol.5', issueNo: 'Issue 3,PP-12-21', year: 'March 2016', pageRange: '' },
          { srNo: 2, authors: 'Mr. Sayed Shoaib Anwar', title: 'Modified PTS Technique of Its Transceiver For PAPR Reduction In OFDM System', journalName: 'International Journal of Engineering Research & Technology (IJERT)', volumeNo: 'Vol. 2', issueNo: 'Issue 2, PP.1-5', year: 'February- 2013', pageRange: '' },
          { srNo: 3, authors: 'Mr. Sayed Shoaib Anwar', title: 'New Improved Clipping and Filtering Technique Algorithm for Peak-to-Average Power Ratio Reduction of of dm Signals', journalName: 'International Journal of computer science & communication', volumeNo: 'Vol. 3', issueNo: 'No. 1, PP. 175-179', year: 'January-June 2012', pageRange: '' },
          { srNo: 4, authors: 'Mr. Sayed Shoaib Anwar', title: 'Multicarrier Blind Equalization for Channel Shortener', journalName: 'GITAM Journal of Information  Communication  Technology', volumeNo: 'Vol 2, PP78-83', issueNo: '', year: 'Jan-July 2009', pageRange: '' },
        ],
      },
      {
        facultyName: 'Ms. A. K. Salve',
        papers: [
          { srNo: 1, authors: 'Ms. A. K. Salve', title: 'Color Image Segmentation Using MSNC Algorithm', journalName: 'International Journal of Engineering Research & Technology(IJERTV2IS90223)', volumeNo: 'Vol. 2', issueNo: 'Issue 9, P. P. 222-226', year: 'September - 2013', pageRange: 'ISSN 2278-0181' },
          { srNo: 2, authors: 'Ms. A. K. Salve', title: 'Object Detection and Clustering from High Resolution Remote Sensing Imaginary Using Mean-Shift(MS) Method', journalName: 'International Journal of Innovations & Advancement in Computer Science ( IJIACS)', volumeNo: 'Vol. 3', issueNo: 'Issue 4, P. P. 1-6', year: 'June - 2014', pageRange: 'ISSN: 2347-8616' },
          { srNo: 3, authors: 'Ms. A. K. Salve', title: 'Brain Tumor segmentation   using MS algorithm', journalName: 'International Journal of International Journal of Engineering Technology Science and Research (IJETSR)', volumeNo: 'Volume 4', issueNo: 'Issue 4', year: 'April 2017', pageRange: 'ISSN 2394-3386, ISBN 978-81-933746-5-8' },
        ],
      },
      {
        facultyName: 'Ms. M. V. Mangalagiri',
        papers: [
          { srNo: 1, authors: 'Ms. M. V. Mangalagiri', title: 'E-MENU Card Systems for Restaurant', journalName: 'International Journal of Innovative Research in Advanced Engineering (IJIRAE)', volumeNo: 'Issue-1/37 - 42', issueNo: '', year: 'July 2014', pageRange: 'ISSN: 2349-2163' },
        ],
      },
    ],
  },
  // --- National Journals ---
  {
    category: 'National Journals',
    id: 'national-journals',
    facultyPublications: [
      {
        facultyName: 'Mr. Sayed Shoaib Anwar',
        papers: [
          { srNo: 1, authors: 'Sayed Shoaib Anwar and Dr. S G Kahalekar, Dr.Elizabeth Rani', title: 'Multicarrier Blind Equalization for Channel Shortener', journalName: 'GITAM Journal of Information  Communication Technology', volumeNo: 'Vol IInd', issueNo: '-', year: 'Jan-July 2009', pageRange: 'pp78-83' },
        ],
      },
    ],
  },
  // --- International Conferences ---
  {
    category: 'International Conferences',
    id: 'international-conferences',
    facultyPublications: [
      {
        facultyName: 'Dr. S. L. Kotgire',
        papers: [
          { srNo: 1, authors: 'S. L. Kotgire, S. B. Deosarkar', title: 'Low Complexity PAR reduction  in OFDM by phase alteration', conferenceName: 'RITS International Conference on Advancements in Engineering and Management', heldAt: 'Royal Institute of technology and Science', duration: '28th and 29th Feb 2012' },
          { srNo: 2, authors: 'S. L. Kotgire, S. B. Deosarkar', title: 'Low Complexity Technique for reduction of Peak Power and Noise in Multi-Carrier Communication', conferenceName: 'ICMAT 2013 (Poster)', heldAt: 'Suntec, Singapore', duration: '30th June to 5th July 2013' },
          { srNo: 3, authors: 'S. L. Kotgire', title: '“New improved clipping and filtering technique algorithm for peak-to-average power ratio reduction of OFDM signals”', conferenceName: 'International journal of computer science and communication.', heldAt: '', duration: 'January-June 2012, pp.175-179.' },
        ],
      },
      {
        facultyName: 'Dr. Mrs. Kalpana C. Jondhale Paithane',
        papers: [
          { srNo: 1, authors: 'Ms.K.C.Jondhale, Chouadhry Sachin D', title: '”Literature Survey For Modified Gabor Filter Design Method"', conferenceName: 'Pravara International Conference on Emerging Trends in Engineering, (PICETE) 20th to 22nd   December 2008.', heldAt: '', duration: '20th to 22nd   December 2008.' }, // Note: Venue missing
          { srNo: 2, authors: 'Bhalge Prashant Ashok, Ms.K.C.Jondhale', title: '“Motion Estimation: A Review”', conferenceName: 'International Conference on Advances in Computing (ICAC2008), Chikhli, India,', heldAt: 'Chikhl', duration: '21-22 February 2008.' },
          { srNo: 3, authors: 'Borkar Bharat S., Ms.K.C.Jondhale', title: '“A Literature Survey: Face Recognition”', conferenceName: 'Pravara International Conference on Emerging Trends in Engineering, PICETE – 2008 20th to 22nd   December 2008.', heldAt: '', duration: '2008 20th to 22nd   December 2008' }, // Note: Venue missing
          { srNo: 4, authors: 'Gaidhani Abhay R., Ms.K.C.Jondhale', title: '"Illumination Compensation and Normalization for Face Recognition"', conferenceName: 'Pravara International Conference on Emerging Trends in Engineering, PICETE – 2008 20th to 22nd    December 2008.', heldAt: '', duration: '2008 20th to 22nd    December 2008.' }, // Note: Venue missing
          { srNo: 5, authors: 'Dipali Shimpi, Ms.K.C.Jondhale', title: '"Face Recognition Using Kernel Subspace Linear Discriminant Analysis"', conferenceName: 'INNOVATION – 2008 Regional Conference for Engineering Teachers,', heldAt: ',Pune', duration: '17th  & 18th Nov, 2008.' }, // Note: Venue has leading comma
          { srNo: 6, authors: 'Nanda Wagh, Ms.K.C.Jondhale', title: '“An Efficient Method for face Recognition Using Kernel Fisher Approach”', conferenceName: 'Pravara International Conference on Emerging Trends in Engineering, PICETE – 2008 20th -22nd   December 2008.', heldAt: '', duration: '2008 20th -22nd   December 2008.' }, // Note: Venue missing
          { srNo: 7, authors: 'R.V.Patil, K.C.Jondhale', title: '“Use of phase Congruency for shape information in content based image retrieval”', conferenceName: 'Pravara International Conference on Emerging Trends in Engineering, (PICETE – 2008) ,20th -22nd   December 2008.', heldAt: '', duration: '20th -22nd   December 2008.' }, // Note: Venue missing
          { srNo: 8, authors: 'R.V.Patil, K.C.Jondhale', title: '“Use of phase Congruency for shape information in content based image Dipali Shimpi', conferenceName: 'Pravara International Conference on Emerging Trends in Engineering, (PICETE) 20th -22nd   December 2008.', heldAt: '', duration: '20th -22nd   December 2008.' }, // Note: Venue missing
          { srNo: 9, authors: 'Suhas Salave, Ms.K.C.Jondhale', title: '"Shape matching and object recognition using Shape Context"', conferenceName: 'First IEEE International conference on emerging trends in Engg. and Tech, ICETET-2008, at Nagpur', heldAt: 'Nagpur', duration: '' },
          { srNo: 10, authors: 'More S. B., Ms.K.C.Jondhale', title: '"Biometric Security"', conferenceName: 'First IEEE International conference on emerging trends in Engg. and Tech, ICETET-2008, at Nagpur', heldAt: 'Nagpur', duration: '' },
          { srNo: 11, authors: 'Siddiqui Riyazoddin Alimoddin, Ms.K.C.Jondhale', title: '"A Biometric Approach To Face Recognition With RBF Neural Networks”', conferenceName: 'International Conference on Systemics, Cybernetics and Informatics, ICSCI, January 07-10, 2009', heldAt: '', duration: 'January 07-10, 2009' }, // Note: Venue missing
          { srNo: 12, authors: 'R.V.Patil, K.C.Jondhale', title: '“Combining Color and Log Gabor Wavelet Based Feature Detector for Content Based Image Retrieval”', conferenceName: 'International Conference on VLSI and Communication, ICVCom – 2009, Kottayam, Kerala.', heldAt: 'Kottayam, Kerala.', duration: '' }, // Note: Duration missing
          { srNo: 13, authors: 'Ms. K.C.Jondhale, Gaidhani Abhay R,', title: '“Analysis of Illumination Compensation and Normalization for Face Recognition"', conferenceName: 'International Conference, ITECH – 2009, 4th & 5th March 2009, AVCOE, Sangamner.', heldAt: 'Sangamner.', duration: '4th & 5th March 2009' },
          { srNo: 14, authors: 'Bhalge Prashant, Ms. K.C.Jondhale', title: '“Motion Estimation with filter', conferenceName: 'International Conference, ITECH – 2009, 4th & 5th Sangamner', heldAt: 'Sangamner', duration: '4th & 5th March 2009' },
          { srNo: 15, authors: 'Ms. K.C.Jondhale, Asha Kale', title: ',” HMM Based Face Recognition: A Qualitative Approach”', conferenceName: 'International Conference, ITECH – 2009, 4th & 5th March 2009. – AVCOE, Sangamner', heldAt: 'Sangamner', duration: '4th & 5th March 2009' },
          { srNo: 16, authors: 'R.V.Patil, K.C.Jondhale', title: '“Combining Color and Log Gabor Wavelet Based Feature Detector for Content Based Image Retrieval”', conferenceName: '”, International Conference, ITECH – 2009, 4th & 5th March 2009. – AVCOE, Sangamner', heldAt: 'Sangamner', duration: '4th & 5th March 2009' },
          { srNo: 17, authors: 'K.C.Jondhale, B. S. Borkar', title: '“Fully automatic Facial feature point detection using Gabor feature based boosted classifiers”', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, (ICCVGIP 2009)', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
          { srNo: 18, authors: 'K.C.Jondhale, S. D. Choudary', title: '“Fingerprint image enhancement: Algorithm and performance evaluation”', conferenceName: 'International Conference, ITECH – 2009, 4th & 5th March 2009. – AVCOE, Sangamner', heldAt: 'Sangamner', duration: '4th & 5th March 2009' },
          { srNo: 19, authors: 'R.V.Patil, K.C.Jondhale', title: 'Content Based Image Retrieval based on phase Congruency via Log Gabor Wavelet Filters', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, ICCVGIP 2009', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
          { srNo: 20, authors: 'Suhas Salve, Ms.K.C.Jondhale', title: '"Shape matching and object recognition using Shape Context"', conferenceName: '", Indian Conference on Computer Vision, Graphics, Image and Video Processing, ICCVGIP 2009.', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
          { srNo: 21, authors: 'H. Sable, Ms.K.C.Jondhale', title: ',”Detection of faces and facial features in color images’', conferenceName: 'Proceedings of the 2009 International Conference on Computer and Network Technology, ICCNT, Chennai, India, June 2009.', heldAt: 'Chennai, India,', duration: 'June 2009.' },
          { srNo: 22, authors: 'H. Sable, Ms.K.C.Jondhale', title: ',” Face detection and facial features extraction in color group images’', conferenceName: 'Proceedings of the 2009 International Conference on Computer and Network Technology, ICCNT, Chennai, India, June 2009.', heldAt: 'Chennai, India,', duration: 'June 2009.' },
          { srNo: 23, authors: 'R. Panhalkar, Ms. K.C. Jondhale', title: '” Removal of Impulse Noise Using Median Filtering”', conferenceName: 'Proceedings of the Third International Conference on Information Processing', heldAt: 'Bangalore, India', duration: 'Aug 7to 9, 2009.' },
          { srNo: 24, authors: 'Ms. K.C. Jondhale, Balaji Shetty', title: '” Analysis of web server using LDAP”', conferenceName: '”, Proceedings of the International Conference on Science, Engineering and Spirituality,', heldAt: 'Singapore', duration: 'April 1st and 2nd, 2010.' },
          { srNo: 25, authors: 'H. Sable, Ms.K.C.Jondhale', title: '” Fast Adaptive bilateral filter for sharpness enhancement and noise removal”', conferenceName: 'Proceedings of the International Conference on Emerging trends in computer science, communication and information technology, Jan 2010, Nanded, India.', heldAt: 'Nanded, India.', duration: 'Jan 2010,' },
          { srNo: 26, authors: 'R. V. Patil, Ms.K.C.Jondhale', title: '” Robust method based on egde detection to determie number of clusters in K-Means color image segmentation”', conferenceName: 'Proceedings of the International Conference on Computational Intelligence & Application(ICCIA-10), March 3rd to 5th  2010, Nashik, India', heldAt: 'Nashik, India', duration: 'March 3rd to 5th  2010,' },
          { srNo: 27, authors: 'H. Sable, Ms.K.C.Jondhale', title: '” Modified double bilateral filter for sharpness enhancement and noise removal”', conferenceName: 'Proceedings of the International Conference on Advances in Computer Engineering, ACEEE/IEEE, June 21-22,2010, Banglore, India.', heldAt: 'Banglore, India', duration: 'June 21-22,2010,' },
          { srNo: 28, authors: 'Ms.K.C.Jondhale, Dr. L.M. Waghmare', title: '” Performance analysis of DCT in Logarithm domain and two point normalization methods for illumination and expression variation in Face recognition”', conferenceName: 'Proceedings of the 3rd IEEE International Conference on, Computer Science and Information Technology (IEEE ICCSIT), Chengdu, China.', heldAt: 'Chengdu, China.', duration: 'July 9-11,2010' },
          { srNo: 29, authors: 'Suhas G. Salve, Ms.K.C.Jondhale', title: '” Shape matching and object recognition using shape contexts”', conferenceName: 'Proceedings of the 3rd IEEE International Conference on, Computer Science and Information Technology (IEEE ICCSIT) July 9-11,2010, Chengdu, China', heldAt: 'Chengdu, China', duration: 'July 9-11,2010' },
          { srNo: 30, authors: 'R.V. Patil, Ms.K.C.Jondhale', title: ',” Robust method based on edge detection to determine number of clusters in K-means color image segmentation.”', conferenceName: 'Proceedings of the 3rd IEEE International Conference on, Computer Science and Information Technology (IEEE ICCSIT),', heldAt: 'Chengdu, China', duration: 'July 9-11,2010' },
          { srNo: 31, authors: 'Ms. K.C.Jondhale, Dr. L.M. Waghmare', title: '” Comparative analysis of Face recognition techniques with illumination variation”', conferenceName: 'in the proceedings of the Joint 9th World Congress on Computational Mechanics and 4th Asian Pacific Congress on Computational Mechanics, (WCCM/APCOM), 19-23 July 2010, Sydney, Australia', heldAt: 'Sydney, Australia', duration: '19-23 July 2010' },
          { srNo: 32, authors: 'Ms. K. C. Jondhale, Dr. L.M. Waghmare', title: ',”Improvement in PCA performance using FLD and RBF Neural Networks for Face Recognition”', conferenceName: '3rd International conference on emerging trends in Engineering and Technology, (IEEE ICETET-2010) to be held on 19-21 Nov 2010, BITS Pilani, Goa, India', heldAt: 'BITS Pilani, Goa, India', duration: '19-21 Nov 2010' },
          { srNo: 33, authors: 'Ms.K.C.Jondhale, Dr. L.M. Waghmare', title: 'Efficient PCA-FLD based Face Recognition with Illumination Variation”', conferenceName: '2010 International congress on computer applications and computational science CACS2010, to be held,', heldAt: 'Singapore', duration: 'on 4-6 Dec 2010' },
          { srNo: 34, authors: 'Ms.K.C.Jondhale, Dr. L.M. Waghmare', title: '“PCA performance enhancement using SVD, FLD and RBF Neural Networks”', conferenceName: '”, third IEEE International conference on computer and Electrical engineering (ICCEE2010), to be held on, Chengdu, China (Communicated)', heldAt: 'Chengdu, China', duration: '16-18 Nov 2010' },
        ],
      },
      {
        facultyName: 'Dr. Mrs. M. R. Banwaskar',
        papers: [
          { srNo: 1, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'Keyframe Extraction using Preprocessing and Corner detector', conferenceName: 'Int. conf. on Computer Vision, Graphics and Image Processing, IIT Guwahati,', heldAt: 'IIT, Guwati', duration: '18-22 Dec. 2016' },
          { srNo: 2, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'Performance Analysis of Shot Change Detection Methods', conferenceName: 'Int. Conf. on Communication and Signal Processing', heldAt: 'DBATU, Lonere', duration: '26-27 Dec. 2016' },
          { srNo: 3, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'Biometrics Liveness Detection By using Image Quality Assessment', conferenceName: 'Int. Conf. on Emerging Trends in Engineering and Technology', heldAt: 'Mumbai', duration: '10-11 Sept. 2016' },
          { srNo: 4, authors: 'Dr. Mrs. M. R. Banwaskar', title: 'Graphene Basics and Applications', conferenceName: 'Int. Conf. on Nanostructures, Nanomaterials and Nanoengineering', heldAt: 'Singapore', duration: '5-7Oct, 2012' },
        ],
      },
      {
        facultyName: 'Mr. V. S. Jadhav',
        papers: [
          { srNo: 1, authors: 'Mr. V. S. Jadhav', title: 'Classification of Brain MRI using Watershed Segmentation and Support Vector Machine', conferenceName: 'IJARSE', heldAt: 'Parvatibai   Ganba Moze College of Engineering, Pune', duration: '9th-10th April 2018', isbnNo: '978-93-87793-13-2' },
        ],
      },
      {
        facultyName: 'Mr. Sayed Shoaib Anwar',
        papers: [
          { srNo: 1, authors: 'Sayed Shoaib Anwar and Dr. S G Kahalekar, Dr.Elizabeth Rani and Dr.abdul sattar', title: 'An Overview: Peak-to-Average Power Ratio Reduction Techniques for OFDM Signals', conferenceName: 'International conference on advancements in engineering & management', heldAt: 'RITS,Peeraccheru,(A.P)', duration: '28 & 29 Feb12.' },
          { srNo: 2, authors: 'Sayed Shoaib Anwar and Dr. S G Kahalekar', title: 'A Real Time Embedded System: Roadway Traffic Management Security System', conferenceName: 'International conference ICSCI 2009', heldAt: 'Hyderabad', duration: '07-10 Jan 2009', isbnNo: 'PP 21-25, Vol 1 of 2' }, // Venue is page number here
          { srNo: 3, authors: 'Sayed Shoaib Anwar and and Dr. S G Kahalekar', title: 'Adaptive Signal Processing- New Horizons In signal Detection', conferenceName: 'International conference ICSCI 2009', heldAt: 'Hyderabad', duration: '07-10 Jan 2009', isbnNo: 'PP 542-547, Vol 1 of 2' }, // Venue is page number here
          { srNo: 4, authors: 'Sayed Shoaib Anwar and and Dr. S G Kahalekar,Dr. Abdul Sattar', title: 'Single Carrier Blind  Equalization for Channels', conferenceName: 'at Ist International Conference on  Emerging Trends in Engineering & Technology (ICETET) 2008', heldAt: 'Hyderabad', duration: '16-18 .July 2008', isbnNo: 'PP 98-102' }, // Venue is page number here
          { srNo: 5, authors: 'Sayed Shoaib Anwar and V G Asutkar', title: 'Blind Identification for Channel Shorteners', conferenceName: 'IEEE RACE International Conference', heldAt: 'Bikaner (Rajasthan)', duration: '24 th -25 th march 2007', isbnNo: 'PP 105-109' }, // Venue is page number here
          { srNo: 6, authors: 'Sayed Shoaib Anwar and V G Asutkar', title: 'Blind Identification of Channel Shorteners for Multicarrier System', conferenceName: 'CITICOMS 2007 International Conference', heldAt: 'Coimbatore', duration: '27 th -29 th Aug 2007', isbnNo: 'PP 151-156' }, // Venue is page number here
          { srNo: 7, authors: 'Sayed Shoaib Anwar', title: 'A Blind Identification Approach to Digital Calibration of Analog-To-Digital Converters For Built-In-Self-Test.', conferenceName: 'National Conference on ICON 2006', heldAt: 'S.G.G.S.I.E.&T Nanded,(M.S)', duration: '4th- 5th March 06.' }, // Conference name missing
        ],
      },
      {
        facultyName: 'Mr. D. J. Tuptewar',
        papers: [
          { srNo: 1, authors: 'Mr. D. J. Tuptewar', title: 'Comparative Analysis of Digital Image Stabilization by Using Empirical Mode Decomposition', conferenceName: 'IEEE International Conference On Computational Intelligence and Computing Research', heldAt: 'Park College of Engineering&technology, Coimbatore', duration: '2014', isbnNo: '978-1-4799-3974' },
          { srNo: 2, authors: 'Mr. D. J. Tuptewar', title: 'Resolution and Contrast Enhancement Techniques for Gray Level, Color Image and Satellite Image', conferenceName: 'International Conference on Information Processing', heldAt: 'VIT College of Engineering, Pune', duration: '2015', isbnNo: '978-1-4673-7758-4' },
          { srNo: 3, authors: 'Mr. D. J. Tuptewar', title: 'Comparison of Hybrid Watermarking Technique on Different Color Spaces', conferenceName: 'IEEE Conference On Advances in Signal Processing', heldAt: 'MIT College of Engineering, Pune', duration: '2016', isbnNo: '978-1-5090-0849-0' },
          { srNo: 4, authors: 'Mr. D. J. Tuptewar', title: 'Robust Exemplar Based Image and Video InPainting for Object Removal and Region filling', conferenceName: 'IEEE International Conference On Intelligent Computing &Control', heldAt: 'Karpagam College of Engineering, Coimbatore, Tamil Nadu', duration: '23-24th June2017', isbnNo: '978-1-5386-0373-4' },
          { srNo: 5, authors: 'Mr. D. J. Tuptewar', title: 'Sliding Discrete Fourier Transform for 2D Signal processing', conferenceName: 'International Conference on ISMAC in Computational Vision & Bio-Engineering', heldAt: 'SCAD Institue of Technology, Coimbatore, Tamil Nadu', duration: '2018', isbnNo: '' },
          { srNo: 6, authors: 'Mr. D. J. Tuptewar', title: 'Robust Exemplar Based Image and Video In Painting for Object Removal and Region filling', conferenceName: '3rd International conference on Computing, Communication & Signal Processing', heldAt: 'Dr. Babasaheb Ambedkar Technological Univercity, Lonere', duration: '2018', isbnNo: '' },
        ],
      },
    ],
  },
  // --- National Conferences ---
  {
    category: 'National Conferences',
    id: 'national-conferences',
    facultyPublications: [
      {
        facultyName: 'Dr. Mrs. Kalpana C. Jondhale Paithane',
        papers: [
          { srNo: 1, authors: 'Siddiqui Riyazoddin Alimoddin, Ms.K.C.Jondhale', title: ',"Biometric in Child Recovery"', conferenceName: 'Biomedical and Process Instrumentation,BINCON-2005', heldAt: '', duration: '19-20 March, 2005' },
          { srNo: 2, authors: 'K.C.Jondhale , S.K. Korade', title: '“Real Time Gestare Telerobotic system using the FCM  algorithm”', conferenceName: 'Proc. National conference on emerging Technologies and Applications at computer science department of saurestra university Rajkot,', heldAt: 'Department of saurestra university Rajkot, jointly with Amoghsiddhi Education society , Sangli', duration: 'Oct. 1st and 2nd , 2006.' },
          { srNo: 3, authors: 'K.C.Jondhale , S.M.Rokade', title: ',“Fingerprint classification using self organization maps (SOM)”', conferenceName: 'Proc. National conference on emerging Technologies and Applications at computer science department of saurestra university Rajkot', heldAt: '', duration: 'Oct. 1st and 2nd , 2006.' },
          { srNo: 4, authors: 'R.V.Patil, K.C. Jondhale and Archana M. Rajurkar', title: '“Mobile Computing to Facilitate Interactive Learning”', conferenceName: '. National Conference on Use of Computer and Internet for Child Development at S.S.V.P.S’s L.K. Ghogrey Science College Dhule, India', heldAt: 'S.S.V.P.S’s L.K. Ghogrey Science College Dhule, India', duration: 'Jan 20-21, 2006' },
          { srNo: 5, authors: 'R.V.Patil, K.C.Jondhale', title: '“Child safety online”', conferenceName: 'National Conference on Use of computer and internet for child development', heldAt: '', duration: 'Jan.20th to 21st 2006.' },
          { srNo: 6, authors: 'R.V.Patil, K.C.Jondhale', title: '“Delivering the power of computers to children without harming their health ”', conferenceName: 'National Conference on Use of computer and internet for child development,', heldAt: '', duration: 'Jan.20th to 21st 2006.' },
          { srNo: 7, authors: 'R.V.Patil, K.C.Jondhale', title: '“An anatomy of computer games”', conferenceName: ', National Conference on Use of computer and internet for child development,', heldAt: '', duration: 'Jan.20th to 21st 2006.' },
          { srNo: 8, authors: 'Sarode M, .C.Jondhale', title: '“Sensor Networks”', conferenceName: 'National Level Technical paper presentation Symposium(ELECTRA-2006', heldAt: 'Nashik', duration: '31st March 2006.' },
          { srNo: 9, authors: 'Deepali Shimpi, Ms. K.C.Jondhale', title: '“Face Recognition Using Kernel Subspace Linear Discriminant Analysis “', conferenceName: 'INNOVATION – 2008, 17th & 18th Nov, 2008, Regional Conference for Engineering Teachers, Board of College & University Development, University of Pune & Sinhgad College of Engineering, Pune.', heldAt: '', duration: '17th & 18th Nov, 2008,' },
          { srNo: 10, authors: 'Ms.K.C.Jondhale, Chouadhry Sachin D', title: '”Modified Gabor Filter Design “', conferenceName: 'National level paper prsentation, ZEST-08, Sangamner', heldAt: 'Sangamner', duration: '15th Sept. 2008' },
          { srNo: 11, authors: 'Ms.K.C.Jondhale, Borkar B,', title: '”Face recognition using PCA and Log Gabor Filter “', conferenceName: 'National level paper prsentation, ZEST-08,', heldAt: 'Sangamner', duration: '15th Sept. 2008' },
          { srNo: 12, authors: 'R.V.Patil, K.C.Jondhale', title: '“An Integration of color phase based feature detector for content based image retrieval”', conferenceName: 'National conference on recent trends in Information Technology, NCRTIT-2009,', heldAt: ', Ahmednagar.', duration: '20-21 February 2009' },
          { srNo: 13, authors: 'Ms. K.C.Jondhale, Asha Kale', title: '” HMM Based Face Recognition: A Qualitative Approach”', conferenceName: 'National Conference on emerging trends in Electronics Engg. and Computing in the EEEC 2010,', heldAt: 'Nagpur.', duration: '9th & 10th Feb 2010,' },
          { srNo: 14, authors: 'Archana Panhalkar, Ms. K.C.Jondhale', title: '” An Impulse denoising technique using median filtering”', conferenceName: 'National Conference on emerging trends in Electronics Engg. and Computing in the EEEC 2010,', heldAt: ' Nagpur.', duration: '9th  & 10th Feb 2010' },
          { srNo: 15, authors: 'Prashant Bhalge, Ms. K.C.Jondhale', title: '” Filteration for motion estimation”', conferenceName: 'National Conference on emerging trends in Electronics Engg. and Computing in the EEEC 2010,', heldAt: 'Nagpur.', duration: '9th&10th Feb 2010.' },
        ],
      },
      {
        facultyName: 'Dr. Mrs. M. R. Banwaskar',
        papers: [
          { srNo: 1, authors: 'M. R. Banwaskar,', title: '“Use of Internet in Education and Communication”', conferenceName: 'CSI Nasik Chapter,', heldAt: 'Nasik,', duration: '08-09 Feb. 1997.' },
          { srNo: 2, authors: 'M. R. Banwaskar,', title: '“Physics Projects”', conferenceName: '', heldAt: 'Dr. B. A. M. University, Aurangabad,', duration: 'Jan. 1997' },
          { srNo: 3, authors: 'M. R. Banwaskar,', title: '“Computers and Internet in Bringing Quality in Technical Education”', conferenceName: '', heldAt: 'Institution of Engineers, Belgaum,', duration: '15 Sept. 1999' },
          { srNo: 4, authors: 'M. R. Banwaskar,', title: '“Impact of IT on Technical Education”', conferenceName: 'ISTE Pusad Chapter, Pusad,', heldAt: '', duration: '15 Sept. 1999.' },
          { srNo: 5, authors: 'M. R. Banwaskar,', title: '“Iris Recognition: A Technical Review”', conferenceName: ',Padmashree  Dr. D. Y. Patil College of Engg.', heldAt: 'Pune,', duration: '06-08 Sept. 2008.' },
          { srNo: 6, authors: 'SavitaDawne,M. R. Banwaskar', title: '“Fingerprint Identification using DWT”', conferenceName: ', 2nd National Conf. on Emerging Trends in Computer Science and Information Technology,', heldAt: 'Sevagram, Vardha', duration: '' },
        ],
      },
      {
        facultyName: 'Mr. Sayed Shoaib Anwar',
        papers: [
          { srNo: 1, authors: 'Mr. Sayed Shoaib Anwar', title: 'Adaptive Signal Processing- New Horizons In signal Detection', conferenceName: 'At International conference ICSCI 2009', heldAt: 'Hyderabad', duration: '07-10 Jan 2009', isbnNo: 'PP 542-547, Vol 1 of 2' },
          { srNo: 2, authors: 'Mr. Sayed Shoaib Anwar', title: 'A Real Time Embedded System: Roadway Traffic Management Security System', conferenceName: 'At International conference ICSCI 2009', heldAt: 'Hyderabad', duration: '07-10 Jan 2009', isbnNo: 'PP 21-25, Vol 1 of 2' },
          { srNo: 3, authors: 'Mr. Sayed Shoaib Anwar', title: 'Design and Implementation of Orthogonal Frequency Division Multiplexing (OFDM) System using Mat Lab Simulink', conferenceName: 'GITAM University, national conference on advances in communication technologies', heldAt: 'Vishakhapatnam', duration: '9-10 Jan 2012', isbnNo: 'PP.1024-1028' },
          { srNo: 4, authors: 'Mr. Sayed Shoaib Anwar', title: 'An Overview: Peak-to-Average Power Ratio Reduction Techniques for OFDM Signals', conferenceName: 'RITS International Conference on Advancements in Engineering & Managements', heldAt: 'Hyderabad', duration: '28-29 Feb 2012', isbnNo: 'PP. 250-257' },
        ],
      },
      {
        facultyName: 'Ms. A. K. Salve',
        papers: [
          { srNo: 1, authors: 'Ms. A. K. Salve', title: 'MSNC Algorithm for Color Image Segmentation', conferenceName: 'National Conference on Instrumentation, Control & Signal Processing(ICSP-2013)', heldAt: 'SGGSIE&T, Nanded', duration: '08-09 July2013', isbnNo: '' },
          { srNo: 2, authors: 'Ms. A. K. Salve', title: 'Face Recognition using Fusion of Gabor Features and Baysian classifier approach', conferenceName: 'National Conference on Instrumentation, Control & Signal Processing(ICSP-2013)', heldAt: 'SGGSIE&T, Nanded', duration: '08-09 July2013', isbnNo: '' },
          { srNo: 3, authors: 'Ms. A. K. Salve', title: 'Fusion of MSNC for Color Image Segmentation', conferenceName: 'National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics (NCVPRIPG-2013)', heldAt: 'IIT Jodhpur', duration: '18-21 Dec. 2013', isbnNo: 'ISBN: 978-1-4799-1588-0' },
          { srNo: 4, authors: 'Ms. A. K. Salve', title: 'Brain Tumor segmentation   using MS algorithm', conferenceName: 'International Conference on Advanced Trends in Engineering (ICATE-2017)', heldAt: 'DMCE Airoli Mumbai', duration: '07-08April 2017', isbnNo: 'ISBN: 978-81-933746-5-8' },
          { srNo: 5, authors: 'Ms. A. K. Salve', title: 'Attended', conferenceName: 'International Confrence on signal and Information Processsing (IConSIP-2016)', heldAt: 'SGGSIE & T, Nanded', duration: '06-08 Oct 2016', isbnNo: '' },
        ],
      },
    ],
  },
];

// --- CONSTANTS FOR ACHIEVEMENT PAGE ---

export const entcCovidWarriorAchievement = {
  title: 'Felicitation of COVID-19 Warriors by Director Dr.G.S. Lathkar, MGM CoE Nanded',
  paragraphs: [
    `Vinay Manturi (MGMs CoE, Nanded student from TY-ECT Class) and his group took initiative in Coronavirus Pandemic 'Covid-19' to 'Help the needy people with giving foodgrains, vegetables, fruits, etc' by telling them to don't go outside, be calm, all these virus go away by staying at home and wash your hand cleanly.`,
    `From 75 Days Vinay and his team have donated the food packets, fruits, water bottles, etc to the poor people and who stay at slum area.`,
  ],
  images: [
    { src: '/images/vinay-mantri-achievements-ect1.jpg', alt: 'Felicitation of COVID-19 Warriors by Director MGM CoE Nanded', caption: 'Felicitation of COVID-19 Warriors by Director MGM CoE Nanded' },
    { src: '/images/vinay-mantri-achievements-ect2.jpg', alt: 'Media Covarage Felicitation of COVID-19 Warriors by Director MGM CoE Nanded', caption: 'Media Covarage Felicitation of COVID-19 Warriors by Director MGM CoE Nanded ;' },
    { src: '/images/vinay-mantri-achievements-ect3.jpg', alt: 'Media Covarage of COVID-19 Warriors(Vinay Mantri & His Team)', caption: 'Media Covarage of COVID-19 Warriors(Vinay Mantri & His Team)' },
    { src: '/images/vinay-mantri-achievements-ect4.jpg', alt: 'Field Work in Lockdown period by Vinay & his Team', caption: 'Field Work in Lockdown period by Vinay & his Team' },
    { src: '/images/vinay-mantri-achievements-ect5.jpg', alt: 'Field Work in Lockdown period by Vinay & his Team', caption: 'Field Work in Lockdown period by Vinay & his Team' },
  ],
};

export const entcJondhaleKC_Achievements = {
  title: 'Achievements: Dr.Jondhale K.C',
  listItems: [
    `Awarded by Research Excellence Award 2019.`,
    `Recognized as Reviewer for the InSc-International Journal of Electronics , Electrical and Communication Engineering, Since 2019`,
    `Recognized as lifetime Professional Member of Institute of Scholars (InSc).`,
    `Reviewer for 4th International Conference on Computing in Engineering & Technology ICCET 2019, jointly Organized by Department of E & TC Engineering, Dr. Babasaheb Ambedkar Technological University (BATU) Lonere and Deogiri Institute of Engineering & Management, Aurangabad.(9-11 Jan. 2019)`,
    `Adarshy Vidhya Saraswati Rashtriya Puraskar by Glaicer Journal Research Foundation on 2nd November 2018.`,
    `Nominated member of Editorial Board of Glaicer Journal of Scientific Research, Impact Factor 2.7614, ISSN: 2349-8498 since November 2018.`,
    `Active review member of Journal of Emerging Technology and Innovative Research, Impact Factor 5.87, ISSN: 2349-5162, member ID 113954, since 28 November 2018`,
  ],
};

// Data for Topper Students List (different structure in source HTML)
export const entcToppersByYear = [
  {
    year: '2012-2013',
    disciplines: [
      { name: 'SE', rank: '1', students: [{ name: 'DANGE SUPRIYA MAROTI', marks: '1,217' }, { name: 'JOSHI SNEHA SANJAY', marks: '1,139' }, { name: 'TARTE SACHIN SAMBHAJIRAO', marks: '1,106' }] },
      { name: 'TE', rank: '1', students: [{ name: 'VISHNUPURIKAR UMESH SHRIKANT', marks: '1,184' }, { name: 'PRIYA SINGH', marks: '1,173' }, { name: 'DESHMUKH APURVA DILIP', marks: '1,171' }] },
      { name: 'BE', rank: '1', students: [{ name: 'THAKUR PAYAL PRATAPSINGH', marks: '1,244' }, { name: 'DESHMUKH DHANSHRI SHIVAJIRAO', marks: '1,229' }, { name: 'KSHIRSAGAR ASHWINI AMBADAS', marks: '1,200' }] },
    ],
  },
  {
    year: '2013-2014',
    disciplines: [
      { name: 'SE', rank: '1', students: [{ name: 'DADWAL POONAM ANILKUMAR', marks: '1,241' }, { name: 'KHATKE JAYKUMAR VYANKATRAO', marks: '1,205' }, { name: 'SHARMA RAJAT SUNIL', marks: '1,158' }] },
      { name: 'TE', rank: '1', students: [{ name: 'PATTEWAR SUVIDHA SURESH', marks: '1,133' }, { name: 'DANGE SUPRIYA MAROTI', marks: '1,132' }, { name: 'PATIL SUKNYA SANJAYKUMAR', marks: '1,098' }] },
      { name: 'BE', rank: '1', students: [{ name: 'PUYED SONALI VIJAYKUMAR', marks: '1,231' }, { name: 'VISHNUPURIKAR UMESH SHRIKANT', marks: '1,181' }, { name: 'MODI SURBHI DEEPAK', marks: '1,179' }] },
    ],
  },
  {
    year: '2014-2015',
    disciplines: [
      { name: 'SE', rank: '1', students: [{ name: 'ARSULE MANCHAK VITTHALRAO', marks: '1,145' }, { name: 'CHIDRAWAR SANCHITA BALAJI', marks: '1,130' }, { name: 'BIRADAR SHIVANI BABURAO', marks: '1,130' }, { name: 'PATIL ANKITA MURLIDHAR', marks: '1,128' }] },
      { name: 'TE', rank: '1', students: [{ name: 'GORKH MAYA TUKARAM', marks: '1,143' }, { name: 'DADWAL POONAM ANILKUMAR', marks: '1,134' }, { name: 'LINGANWAD RUPALI GANGADHAR', marks: '1,128' }] },
      { name: 'BE', rank: '1', students: [{ name: 'MISAL RASHMI RAVINDRA', marks: '1,233' }, { name: 'BHARAD JEEVAN JANARDHAN', marks: '1,155' }, { name: 'KHAN KALIM AYUB', marks: '1,139' }] },
    ],
  },
  {
    year: '2015-2016',
    disciplines: [
      { name: 'SE', rank: '1', students: [{ name: 'MALPANI DAWARKADAS OMPRAKASH', marks: '1,383' }] }, // Some ranks had empty slots, handled as single entry
      { name: 'TE', rank: '1', students: [{ name: 'PATIL ANKITA MURLIDHAR', marks: '1,161' }, { name: 'CHIDRAWAR SANCHITA BALAJI', marks: '1,129' }, { name: 'VIDOLKAR YOGITA VIJAY', marks: '1,119' }] },
      { name: 'BE', rank: '1', students: [{ name: 'GORKH MAYA TUKARAM', marks: '1,203' }, { name: 'DADWAL POONAM ANILKUMAR', marks: '1,191' }, { name: 'LINGANWAD RUPALI GANGADHAR', marks: '1,189' }] },
    ],
  },
  {
    year: '2016-2017',
    disciplines: [
      { name: 'SE', rank: '1', students: [{ name: 'BARADKAR POOJA SHIRIPAD', marks: '1,702' }, { name: 'BHARADE SAKSHI SANJAY', marks: '1,585' }, { name: 'MOHARIL SANDHYA RAVIKUMAR', marks: '1,461' }] },
      { name: 'TE', rank: '1', students: [{ name: 'LADDHA SUSHMA JAYESH', marks: '1,793' }, { name: 'JONDHALE PRATIKSHA ISHWAR', marks: '1,787' }, { name: 'MOGADPALLY POOJA PRADIP', marks: '1,774' }] },
      { name: 'BE', rank: '1', students: [{ name: 'EKLARE RASHMI VITHALRAO', marks: '1,213' }, { name: 'GHOGARE SONALI SHIVAJIRAO', marks: '1,198' }, { name: 'MORE KAJAL VIKRAM', marks: '1,196' }] },
    ],
  },
  {
    year: '2010-2011',
    category: 'Toppers of Year 2010-11', // Separate category as structure differs in source
    entries: [
      { discipline: 'B.E', srNo: 1, name: 'Pujari Satwindarkaur Surgeetsing', marks: '81.33%' },
      { discipline: 'B.E', srNo: 2, name: 'Pandit Nandkishor Gokul', marks: '78.20%' },
      { discipline: 'B.E', srNo: 3, name: 'Lingalwad Sonali Gangadharrao', marks: '77.80%' },
      { discipline: 'T.E.', srNo: 1, name: 'Kamthane Gajanan Sitaram', marks: '74.53%' },
      { discipline: 'T.E.', srNo: 2, name: 'Thamke Shweta Vishwabandhu', marks: '74.00%' },
      { discipline: 'T.E.', srNo: 3, name: 'Maindarge Pooja Prasad', marks: '72.73%' },
      { discipline: 'S.E', srNo: 1, name: 'Thakur Payal Pratapsingh', marks: '79.43%' },
      { discipline: 'S.E', srNo: 2, name: 'Deshmukh Dhanshree Shivajirao', marks: '75.25%' },
      { discipline: 'S.E', srNo: 3, name: 'Gundawar Ravi Kiran', marks: '74.06%' },
    ]
  },
  {
    year: '2011-2012',
    category: 'Toppers of Year 2011-12', // Separate category as structure differs in source
    entries: [
      { discipline: 'B.E', srNo: 1, name: 'Kapre Rajeshree Dnyanoba', marks: '77.13%' },
      { discipline: 'B.E', srNo: 2, name: 'Koturwar Ravikumar Digambar/ Thamke Shweta Vishwabandhu', marks: '75.33%' },
      { discipline: 'B.E', srNo: 3, name: 'Wahane Dipali Mahendra', marks: '75.00%' },
      { discipline: 'T.E.', srNo: 1, name: 'Thakur Payal Pratapsingh', marks: '81.33%' },
      { discipline: 'T.E.', srNo: 2, name: 'Deshmukh Dhanshree Shivajirao', marks: '81.26%' },
      { discipline: 'T.E.', srNo: 3, name: 'Gundewar Ravi Kiran', marks: '78.26%' },
      { discipline: 'S.E', srNo: 1, name: 'Jaju Pooja Devanand', marks: '74.37%' },
      { discipline: 'S.E', srNo: 2, name: 'Priya singh', marks: '74.31%' },
      { discipline: 'S.E', srNo: 3, name: 'Modi Surabhi Deepak', marks: '73.62%' },
    ]
  },
  {
    year: '2012-2013',
    category: 'Toppers of Year 2012-13', // Separate category as structure differs in source
    entries: [
      { discipline: 'B.E', srNo: 1, name: 'Thakur Payal Pratapsingh', marks: '82.93%' },
      { discipline: 'B.E', srNo: 2, name: 'Deshmukh Dhanshree Shivajirao', marks: '81.93%' },
      { discipline: 'B.E', srNo: 3, name: 'Kshirsagar Ashwini Ambadas', marks: '80.00%' },
      { discipline: 'T.E.', srNo: 1, name: 'Vishnupurikar Umesh Shrikant', marks: '78.93%' },
      { discipline: 'T.E.', srNo: 2, name: 'Priya Singh', marks: '78.20%' },
      { discipline: 'T.E.', srNo: 3, name: 'Deshmukh Apurva Dilip', marks: '78.06%' },
      { discipline: 'S.E', srNo: 1, name: 'Dange supriya Maroti', marks: '76.06%' },
      { discipline: 'S.E', srNo: 2, name: 'Joshi Sneha Sanjay', marks: '71.18%' },
      { discipline: 'S.E', srNo: 3, name: 'Tarte Sachin Sambhajirao', marks: '69.12%' },
    ]
  },
];


export const entcStudentPaperPresentations = [
  { srNo: 1, name: 'Gaurav Sidam', event: 'MIT,Aurangabad', prize: 'First prize', topic: 'Image edge detection tech.' },
  { srNo: 2, name: 'Gayatri mazge', event: 'PRAGGYA-2014,Nanded', prize: 'Second Prize', topic: 'Wireless electricity transmission' },
];

export const entcGateQualifiedStudents = [
  { srNo: 1, name: 'Vishnupurikar Umesh', marks: '31', year: '2014' },
  { srNo: 2, name: 'Kalaskar Deepak', marks: '28.68', year: '2014' },
  { srNo: 3, name: 'Abdul samed', marks: '27.67', year: '2014' },
  { srNo: 4, name: 'Amol Phad', marks: '42', year: '2014' },
  { srNo: 5, name: 'Kapil Chavan', marks: '45', year: '2014' },
];

export const entcSportsParticipation = [
  {
    year: '2010-2011',
    entries: [
      { srNo: 1, name: 'Khandgaonkar S.P', event: 'Cricket', place: 'Nanded', rank: 'B zone winner' },
      { srNo: 2, name: 'Ambure P.M.', event: 'Cricket', place: 'Nanded', rank: 'B zone winner' },
      { srNo: 3, name: 'Pawase Aashish', event: 'Cricket', place: 'Nanded', rank: 'B zone winner' },
      { srNo: 4, name: 'Awaskar P.B', event: 'Basket ball', place: 'Nanded', rank: 'B zone 3rd place' },
      { srNo: 5, name: 'More Sumesh S', event: 'Basket ball', place: 'Nanded', rank: 'B zone 3rd place' },
      { srNo: 6, name: 'Siddiqui Naveed', event: 'Foot ball', place: 'Nanded', rank: 'participation' },
      { srNo: 7, name: 'Prabhunath', event: 'Foot ball', place: 'Nanded', rank: 'participation' },
      { srNo: 8, name: 'Sayed Kamran', event: 'Foot ball', place: 'Nanded', rank: 'participation' },
      { srNo: 9, name: 'Khandgaonkar S.P', event: 'Foot ball', place: 'Nanded', rank: 'participation' },
      { srNo: 10, name: 'Pranay Mungmode', event: 'Foot ball', place: 'Nanded', rank: 'participation' },
      { srNo: 11, name: 'Khandgaonkar S.P', event: 'Cricket', place: 'Latur', rank: 'Inter-Zonal Praticipation' },
      { srNo: 12, name: 'Ambure P.M.', event: 'Cricket', place: 'Latur', rank: 'Inter-Zonal Praticipation' },
      { srNo: 13, name: 'Pawase Aashish', event: 'Cricket', place: 'Latur', rank: 'Inter-Zonal Praticipation' },
      { srNo: 14, name: 'Khandgaonkar S.P', event: 'Volly ball', place: 'Nanded', rank: 'participation' },
      { srNo: 15, name: 'Ramppalli S. D', event: 'Chess', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 16, name: 'Sagvikar R.A', event: 'Chess', place: 'Nanded', rank: 'Runner up B zone' },
    ],
    total: 16, // Added total for easier rendering based on HTML
  },
  {
    year: '2011-2012',
    entries: [
      { srNo: 17, name: 'Pande Mukul', event: 'Chess', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 18, name: 'Maid Ankit', event: 'Chess', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 19, name: 'Andhale Ashwini', event: 'Badminton w', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 20, name: 'Mohane Sneha', event: 'Badminton w', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 21, name: 'Sachin Dhondage', event: 'Badminton', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 22, name: 'Ambure P. M', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 23, name: 'Kapil Chavan', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 24, name: 'Nikhil Jagdale', event: 'Cricket', place: 'Nanded', rank: 'participation' },
    ],
    total: 8,
  },
  {
    year: '2012-2013',
    entries: [
      { srNo: 25, name: 'Jayant Kailuke', event: 'Basket ball', place: 'Nanded', rank: 'B zone 3rd place' },
      { srNo: 26, name: 'Patange P.B', event: 'Basket ball', place: 'Nanded', rank: 'participation' },
      { srNo: 27, name: 'Jaju Pooja', event: 'High Jump', place: 'Nanded', rank: 'Gold medal' },
      { srNo: 28, name: 'Jaju Pooja', event: 'Long Jump', place: 'Nanded', rank: 'Silver Medal' },
      { srNo: 29, name: 'Manisha Kadam', event: '4*400 running', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 30, name: 'Jaju Pooja', event: '4*400 running', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 31, name: 'Sachin Dhondage', event: 'Badminton', place: 'Nanded', rank: 'Winner B zone' },
      { srNo: 32, name: 'Andhale Ashwini', event: 'Badminton w', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 33, name: 'Mohane Sneha', event: 'Badminton w', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 34, name: 'Sachin Dhondage', event: 'Badminton', place: 'Nanded', rank: 'Inter-Zonal Runner up' },
      { srNo: 35, name: 'Rushikesh Kalyankar', event: 'Lawn Tennis', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 36, name: 'Ulkesh Kawale', event: 'Lawn Tennis', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 37, name: 'Khelge Tushar', event: 'Lawn Tennis', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 38, name: 'Sachin Dhondage', event: 'Lawn Tennis', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 39, name: 'Pande Mukul', event: 'Chess', place: 'Nanded', rank: 'Runner up B zone' },
      { srNo: 40, name: 'Pande Mukul', event: 'Chess', place: 'Nanded', rank: 'Inter-Zonal Runner up' },
      { srNo: 41, name: 'Kapil Chavan', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 42, name: 'Nikhil Jagdale', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 43, name: 'Sachin Dhondage', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 44, name: 'Rushikesh Kalyankar', event: 'Badminton', place: 'PUNE', rank: 'participation' },
      { srNo: 45, name: 'Absar Ahmed', event: 'Volly ball', place: 'PUNE', rank: 'participation' },
      { srNo: 46, name: 'Sachin Dhondage', event: 'Badminton', place: 'PUNE', rank: 'participation' },
      { srNo: 47, name: 'Jayant Kailuke', event: 'Basket ball', place: 'PUNE', rank: 'participation' },
      { srNo: 48, name: 'Khelge Tushar', event: 'Foot ball', place: 'PUNE', rank: 'participation' },
      { srNo: 49, name: 'Pranay Mungmode', event: 'Foot ball', place: 'PUNE', rank: 'participation' },
      { srNo: 50, name: 'Mangesh Saraf', event: 'Volly ball', place: 'PUNE', rank: 'participation' },
      { srNo: 51, name: 'Abdul Wahab', event: 'Volly ball', place: 'PUNE', rank: 'participation' },
      { srNo: 52, name: 'Rushikesh Kalyankar', event: 'Lawn Tennis', place: 'PUNE', rank: 'participation' },
      { srNo: 53, name: 'Ulkesh Kawale', event: 'Lawn Tennis', place: 'PUNE', rank: 'participation' },
      { srNo: 54, name: 'Sachin Dhondage', event: 'Lawn Tennis', place: 'PUNE', rank: 'participation' },
    ],
    total: 30, // Summed up entries based on HTML. The original HTML had "30" for this whole rowspan
  },
  {
    year: '2013-2014', // Combined two tables from source with slightly different header usage
    entries: [
      { srNo: 1, name: 'Priyanka kadam', event: 'Basket Ball', place: 'Nanded', rank: 'participation' },
      { srNo: 2, name: 'Modi Surbhi', event: 'Basket Ball', place: 'Nanded', rank: 'participation' },
      { srNo: 3, name: 'Shilpa Moralwar', event: 'Basket Ball', place: 'Nanded', rank: 'participation' },
      { srNo: 4, name: 'Prajakta patange', event: 'Basket ball', place: 'Nanded', rank: 'participation' },
      { srNo: 5, name: 'Priyanka kadam', event: 'Basket Ball', place: 'Patan,Gujrat', rank: 'IUT participation' },
      { srNo: 6, name: 'Jayant Kailuke', event: 'Basket Ball', place: 'Nanded', rank: 'participation' },
      { srNo: 7, name: 'Absar Ahmed', event: 'Volley ball', place: 'Nanded', rank: 'ICT Winner' },
      { srNo: 8, name: 'Absar Ahmed', event: 'Volley ball', place: 'Nanded', rank: 'Zone B Runner' },
      { srNo: 9, name: 'Absar Ahmed', event: 'Foot ball', place: 'Nanded', rank: 'ICT Runner' },
      { srNo: 10, name: 'Lalthamuana', event: 'Foot ball', place: 'Nanded', rank: 'ICT Runner' },
      { srNo: 11, name: 'Priyanka kadam', event: 'Relay 4oo*4', place: 'Nanded', rank: 'participation' },
      { srNo: 12, name: 'Shivani Kumbhar', event: 'Relay 4oo*4', place: 'Nanded', rank: 'participation' },
      { srNo: 13, name: 'Rashmi Misal', event: 'Relay 4oo*4', place: 'Nanded', rank: 'participation' },
      { srNo: 14, name: 'Shivani Kumbhar', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 15, name: 'Darshana Jadhav', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 16, name: 'Pooja Akuskar', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 17, name: 'Priti Dhale', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 18, name: 'Shubham Shingade', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 19, name: 'Piyush Sahani', event: 'Cricket', place: 'Nanded', rank: 'participation' },
      { srNo: 20, name: 'Absar Ahmed', event: 'Volley ball', place: 'Nanded', rank: 'ICT Winner' }, // From the second small table for 2013-14
      { srNo: 21, name: 'Absar Ahmed', event: 'Volley ball', place: '', rank: '' }, // From the second small table for 2013-14
    ],
    total: 21, // Summed up entries from both tables. Original HTML has total 19 and 4, which is inconsistent.
  },
];


// --- CONSTANTS FOR ETA PAGE ---

export const entcEtaAbout = {
  title: 'Electronics Technocrates Association(ETA)',
  description: `Electronics Technocrats Association (ETA) is a student association run by students of E & TC Engineering for students of department. Beyond classroom, laboratory and academic experience, ETA is a platform for holistic development of a students with opportunities to explore interests, groom hidden talents, meet and network with other students, interact with experts and to grow technically, professionally and personally.`,
  objectivesTitle: 'Objectives of ETA',
  objectivesSubtitle: 'To organize',
  objectives: [
    'Expert Lectures by Academicians, Alumni, industry experts',
    'Project Competitions, Debate competitions, Quiz',
    'Poster presentation, sketches, painting competitions',
    'Workshops, seminars, webinars',
    'Career guidance sessions',
    'Social activities, Campus Connect activities',
  ],
};

export const entcEtaCouncil2024_25 = [
  // This data was in the HTML for 2023-24 but the content of the table was for 2024-25.
  // Assuming the table content reflects 2024-25 and moving to its correct constant.
  { srNo: '1', name: 'Sanskruti More', class: 'Final year', position: 'Vice president' },
  { srNo: '2', name: 'Tegampalle Anjana', class: 'Final year', position: 'Secretary' },
  { srNo: '3', name: 'Vinayak Rajegore', class: 'TY', position: 'Treasurer' },
  { srNo: '4', name: 'Vaishnavi Deshmukh', class: 'TY', position: 'Student Coordinator' },
  { srNo: '5', name: 'Shravani Muli', class: 'TY', position: 'Cultural Event Head' },
  { srNo: '6', name: 'Avinash Rathod', class: 'TY', position: 'Board member' },
  { srNo: '7', name: 'Rudrani Dachawar', class: 'Final year', position: 'Board member' },
  { srNo: '8', name: 'Nagesh Kharat', class: 'Final year', position: 'Venue Management Head' },
  { srNo: '9', name: 'Siddhi Deshpande', class: 'TY', position: 'Wall Magazine Head' },
  { srNo: '10', name: 'Bhakti Kachawar', class: 'TY', position: 'Social Activity Head' },
  { srNo: '11', name: 'Ayush Padmawar', class: 'SY', position: 'Technical Event Head' },
  { srNo: '12', name: 'Ganesh Kadam', class: 'SY', position: 'Aptitude Training Head' },
  { srNo: '13', name: 'Durga Kadam', class: 'SY', position: 'Board member', note: "Original HTML had 'Board Member'" },
  { srNo: '14', name: 'Gandharv Birkurwar', class: 'SY', position: 'Board member' },
  { srNo: '15', name: 'Vishvawasu Pendalwar', class: 'SY', position: 'Board member' },
  { srNo: '16', name: 'Pramit Kharjule', class: 'SY', position: 'Venue Management Member' },
  { srNo: '17', name: 'Gauri Wankhede', class: 'SY', position: 'Venue Management Member' },
  { srNo: '18', name: 'Rajdhani Hampalle', class: 'TY', position: 'Board member' },
  { srNo: '19', name: 'Ruchita Jogdand', class: 'SY', position: 'Board member' },
  { srNo: '20', name: 'Madhura Lokhande', class: 'SY', position: 'Board member' },
  { srNo: '21', name: 'Madhavi Deshmukh', class: 'SY', position: 'Board member' },
  { srNo: '22', name: 'Shravani Golegaonkar', class: 'SY', position: 'Board member' },
  { srNo: '23', name: 'Achal Koyale', class: 'SY', position: 'Board member' },
  { srNo: '24', name: 'Shital Lumade', class: 'SY', position: 'Board member' },
  { srNo: '25', name: 'Pratiksha Shinde', class: 'SY', position: 'Board member' },
];

export const entcEtaCouncil2023_24 = [
  // This data was in the HTML for 2024-25 but the table content was for 2023-24.
  // Assuming the table content reflects 2023-24 and moving to its correct constant.
  { srNo: '1', name: 'ShrutikaGundawar', class: 'B. Tech. Final', position: 'Vice-President' },
  { srNo: '2', name: 'ShwetaSuryanshi', class: 'B. Tech. Final', position: 'Secretary' },
  { srNo: '3', 'name': 'SanskarKotalwar', 'class': 'B. Tech. Final', 'position': 'Treasurer' },
  { srNo: '4', 'name': 'Shreya Zarkar', 'class': 'B. Tech. Final', 'position': 'Technical Event Head' },
  { srNo: '5', 'name': 'Sanskruti More', 'class': 'B. Tech. Final', 'position': 'Board Member' },
  { srNo: '6', 'name': 'VaishnavSasane', 'class': 'B. Tech. Final', 'position': 'Board Member' },
  { srNo: '7', 'name': 'AvinashRathod', 'class': 'B. Tech. Final', 'position': 'Board Member' },
  { srNo: '8', 'name': 'RudraniDachawar', 'class': 'B. Tech. Final', 'position': 'Board Member' },
  { srNo: '9', 'name': 'NageshKharat', 'class': 'TY', 'position': 'Board Member' },
  { srNo: '10', 'name': 'TegampalleAnjana', 'class': 'TY', 'position': 'Board Member' },
  { srNo: '11', 'name': 'VaishnaviDeshmukh', 'class': 'TY', 'position': 'Board Member' },
  { srNo: '12', 'name': 'Aditya Mhaisekar', 'class': 'TY', 'position': 'Board Member' },
  { srNo: '13', 'name': 'Siddhi Deshpande', 'class': 'SY', 'position': 'Board Member' },
  { srNo: '14', 'name': 'ShravaniMuli', 'class': 'SY', 'position': 'Board Member' },
];

export const entcEtaActivities2023_24_Images = [
  { src: 'https://mgmcen.ac.in/fedf.jpg', alt: 'ETA Members' },
  { src: 'https://mgmcen.ac.in/images/eta-23-24-Picture1.jpg', alt: 'Workshop on Arduino Board Applications', caption: 'Workshop on Arduino Board Applications 28 Sept- 3 Oct 2023' },
  { src: 'https://mgmcen.ac.in/images/eta-23-24-Picture2.jpg', alt: 'Students Solving Quiz on Sensors and Transducers', caption: 'Students Solving Quiz on Sensors and Transducers' },
  { src: 'https://mgmcen.ac.in/images/eta-23-24-Picture3.jpg', alt: 'Alumni Ms.JigishsaChintala, Test Head, Paylocity, USA interacting with students', caption: 'Alumni Ms.JigishsaChintala, Test Head, Paylocity, USA interacting with students' },
  { src: 'https://mgmcen.ac.in/images/eta-23-24-Picture4.jpg', alt: 'Mini Project demo at Priyadarshini School, Nanded', caption: 'Mini Project demo at Priyadarshini School, Nanded' },
  // Image path correction for the above to match the source HTML:
  // src: '../../www.mgmcen.ac.in/images/eta-23-24-Picture1.jpg' -> 'https://mgmcen.ac.in/images/eta-23-24-Picture1.jpg'
];

export const entcEtaActivities2019_20_1stSem = [
  // Corrected columns based on sensible data mapping (original HTML was swapped)
  { activity: 'Reading Club (Books read: The power of Subconscious mind, You are Unique, Personality Development, Wings of Fire etc.)', date: '24 th May 2019', participatingClass: 'SY' },
  { activity: 'Student Day Celebration', date: '15th Oct 2019', participatingClass: 'N/A' },
  { activity: 'Visit to Orphanage (Suman Balgriha and Sandhi Sansthan Balgriha)', date: '22 and 23 rd Oct. 2019', participatingClass: 'TY, SY' },
  { activity: 'Start up Idea Presentation', date: '3rd Sept 2019', participatingClass: 'TY' },
  { activity: 'Virtual Lab Demo.', date: '8 th Nov. 2019', participatingClass: 'SY' },
  { activity: 'Ecofriendly Ganesh Idol Making workshop', date: '26 Aug. 2019', participatingClass: 'SY, TY, BE' },
  { activity: 'Poster Presentation on Teachers Day', date: '5th Sept 2019', participatingClass: 'SY, TY' },
  { activity: 'Poster Presentation on Gandhi Jayanti', date: '2nd Oct 2019', participatingClass: 'SY, TY' },
];

export const entcEtaActivities2019_20_2ndSem = [
  { activity: 'Shivjayanti (Poster Presentation, Wall magazine)', date: '19 Feb 2020', participatingClass: 'SY, TY' },
  { activity: 'National Science Day celebration (Quiz compitition, Speech compitition)', date: '28 Feb 2020', participatingClass: 'SY' },
  { activity: 'Womens’ Day celebration (Poster presentation)', date: '8 March 2020', participatingClass: 'TY, SY' },
  { activity: 'Group Discussion Topic: Impact of Covid-19 on Indian Economy', date: '7 April 2020', participatingClass: 'SY' },
];

export const entcEtaActivities2019_20_Images = [
  { src: 'https://mgmcen.ac.in/images/gallery/19102020190536-1.jpg', alt: 'Visit to Suman Balgriha by TY ECT Girls on 23rd Oct. 2019 Image 1', caption: 'Visit to Suman Balgriha by TY ECT Girls on 23rd Oct. 2019 Image 1' },
  { src: 'https://mgmcen.ac.in/images/gallery/19102020190645-2.jpg', alt: 'TY ECT girls visit to Sandhi Sansthan Balgriha image 1', caption: 'TY ECT girls visit to Sandhi Sansthan Balgriha image 1' }, // Original HTML has 350px width, 700px height - check if intentional
  { src: 'https://mgmcen.ac.in/images/gallery/19102020190702-3.jpg', alt: 'TY ECT girls visit to Sandhi Sansthan Balgriha image 2', caption: 'TY ECT girls visit to Sandhi Sansthan Balgriha image 2' },
  { src: 'https://mgmcen.ac.in/images/gallery/19102020190750-4.jpg', alt: 'Written Quiz on Gandhi Jayant 2nd Oct. 2019', caption: 'Written Quiz on Gandhi Jayant 2nd Oct. 2019' },
  { src: 'https://mgmcen.ac.in/images/gallery/19102020190834-5.jpg', alt: '“College Life” Skit on Students’ Day . 15th Oct. 2019', caption: '“College Life” Skit on Students’ Day . 15th Oct. 2019' },
  { src: 'https://mgmcen.ac.in/images/gallery/19102020190920-6.jpg', alt: 'Webinar on Digitization and Digital Competences' }, // No caption provided in source for this image
];

export const entcWebinarImages = [
  { src: 'https://mgmcen.ac.in/images/Webinar on Digitization and Digital Competences.jpg', alt: 'Webinar on Digitization and Digital Competences', caption: 'Webinar on Digitization and Digital Competences' },
  { src: 'https://mgmcen.ac.in/images/Webinar on Internet of Vehicles.jpg', alt: 'Webinar on Internet of Vehicles', caption: 'Webinar on Internet of Vehicles' },
  { src: 'https://mgmcen.ac.in/images/Webinar on Mobile Communication and OTT.jpg', alt: 'Webinar on Mobile Communication and OTT', caption: 'Webinar on Mobile Communication and OTT' },
];




// Placeholder for Assignments and Resources, as they were empty in the source HTML
export const entcCurriculumAssignments = [];
export const entcCurriculumResources = [];

// --- NEW CONSTANTS FOR ETA PAGE STRUCTURE ---

export const etaPageHero = {
  title: 'Electronics Technocrats Association (ETA)',
  // subtitle: 'Insights into ETA activities, council, and achievements.', // This old subtitle describes ETA's content, not its header title.
};

// New constant for the specific subtitle in the hero section for ETA
export const etaHeroTagline = 'Department of Electronics & Telecommunication';

export const etaPageMainHeading = 'Electronics Technocrats Association (ETA)';

// Add these new constants to your existing entcConstants.js file

// ... existing imports and constants ...
// ... existing imports and other constants ...

export const entcTeachingStaff = [
  {
    id: 's-l-kotgire',
    img: '/images/entc/faculty/Department_4-20241111184851.jpg',
    name: 'Dr. S. L. Kotgire',
    designation: 'Professor',
    specialization: 'Communication',
    email: 'kotgire_sl@mgmcen.ac.in',
    details: {
      dateOfBirth: '15-Nov',
      phone: '02462222999',
      mobile: 'N/A', // Not found in source HTML for Dr. Kotgire
      address: 'Dept. of Electronics and Telecommunication, M. G. M’s College of Engineering, MGM Campus, Hingoli Road, Near Air Port, Nanded 431605',
      academicQualifications: [
        { srNo: 1, degree: 'B.E.', university: 'S.S.G.M. College of Engg.ShegaonAmaravati University', grade: 'First Class', year: 1987, specialization: 'ELECTRONICS AND TELECOMMUNICATION-' },
        { srNo: 2, degree: 'M. E.', university: 'S.S.G.G.S. College of Engg & Technology, Nanded', grade: 'First Class', year: 1996, specialization: 'ELECTRONICS' },
        { srNo: 3, degree: 'Ph.D(Purcuing)', university: 'Dr. B.A. Technological University, Lonere', grade: 'Pursuing', year: 'N/A', specialization: 'In the field of multi-carrier communication' },
      ],
      experience: [
        { employer: 'M.G.M’s Jawaharlal Nehru College of Engg. Aurangabad', postHeld: 'Lecturer', period: '24th Aug 1987 to 16th Sept 1989', duties: 'Teaching' },
        { employer: 'M.G.M’s College of Engg, Nanded', postHeld: 'Lecturer', period: '18th Sept 1989 to June 1996', duties: 'Teaching' },
        { employer: 'M.G.M’s College of Engg, Nanded', postHeld: 'Asst. Prof', period: 'July 1996 to Dec. 2004', duties: 'Teaching and administrative' },
        { employer: 'M. G. M.’s College of Engg., Nanded', postHeld: 'Prof', period: 'From Jan 2005 till date', duties: 'Teaching and administrative' },
      ],
      internationalJournals: [
        { srNo: 1, authors: 'S. L. Kotgire, S. B. Deosarkar', title: 'Low Complexity Peak Power and BE Reduction of OFDM Signal by Symbol Alteration Technique', journalName: 'Transstellar', volumeNo: 'Vol 2', issueNo: 'Issue 3', year: 2012, pageRange: '46-53' },
        { srNo: 2, authors: 'S. L. Kotgire, S. B. Deosarkar', title: 'Low Noise Technique for Reduction of Peak Power & BER in High Rate wireless Communication Sys.', journalName: 'IInternational Journal of Current Engineering & Technology', volumeNo: 'Vol 3', issueNo: 'Issue No 4', year: 2013, pageRange: 'ISSN 2277-4106' },
        { srNo: 3, authors: 'SayedShoaibS. L. Kotgire, S. B. Deosarkar', title: 'New Improved Clipping & Filtering Technique Algorithm for PAPR reduction of OFDM signals', journalName: 'Int. Journal of Comp. Science & Communication', volumeNo: 'Vol.3', issueNo: 'Issue no.1', year: 'Jan-June 2012', pageRange: '175-179' },
      ],
      internationalConferences: [
        { srNo: 1, authors: 'S. L. Kotgire, S. B. Deosarkar', title: 'Low Complexity PAR reduction in OFDM by phase alteration', conferenceName: 'RITS International Conference on Advancements in Engineering and Management', heldAt: 'Royal Institute of technology and Science', duration: '28th and 29th Feb 2012' },
        { srNo: 2, authors: 'S. L. Kotgire, S. B. Deosarkar', title: 'Low Complexity Technique for reduction of Peak Power and Noise in Multi-Carrier Communication', conferenceName: 'ICMAT 2013 (Poster)', heldAt: 'Suntec, Singapore', duration: '30th June to 5th July 2013' },
        { srNo: 3, authors: 'S. L. Kotgire', title: '“New improved clipping and filtering technique algorithm for peak-to-average power ratio reduction of OFDM signals”', conferenceName: 'International journal of computer science and communication.', heldAt: 'N/A', duration: 'January-June 2012, pp.175-179.' },
      ],
      meGuidance: [
        { srNo: 1, name: 'Ms. Sharda Mandlik', title: 'N/A', year: 2013 },
      ],
      // Other fields would be empty if not found in the HTML snippet provided for Dr. Kotgire
      nationalConferences: [],
      phdGuidance: [],
      conductedCourses: [],
      attendedPrograms: [],
      memberships: [],
      responsibilities: [],
      achievementsAwards: [],
      otherCredits: [],
    }
  },
  {
    id: 'kalpana-c-jondhale-paithane',
    img: '/images/entc/faculty/Department_4-20241111185142.jpg',
    name: 'Dr. Mrs. Kalpana C. Jondhale Paithane',
    designation: 'Professor & Head Of The Department',
    specialization: 'Image processing, Computer Vision and Pattern Recognition',
    email: 'jondhale_kc@mgmcen.ac.in',
    details: {
      dateOfBirth: '11-Nov',
      phone: 'O2462 222999',
      mobile: '9850704354',
      address: 'MGM’s College of Engineering, Near Airport, Hingoli Road, Nanded.',
      academicQualifications: [
        { srNo: 1, degree: 'PhD(Electronics)', university: 'SRTM University, Nanded', marks: 'N/A', year: 2012, division: 'N/A' },
        { srNo: 2, degree: 'ME(Electronics )', university: 'SRTM University, Nanded', marks: 63.88, year: 1999, division: 'First Class' },
        { srNo: 3, degree: 'BE(Electronics)', university: 'Marathwada University, Aurangabad.', marks: 61.33, year: 1995, division: 'First Class' },
        { srNo: 4, degree: 'HSC(Science)', university: 'MSB , Pune', marks: 67.83, year: 1989, division: 'First Class' },
        { srNo: 5, degree: 'SSC', university: 'MSB , Pune', marks: 75.28, year: 1987, division: 'Distinction' },
      ],
      experience: [
        { srNo: 1, institute: 'MGM’s College of Engineering, Nanded', postHeld: 'Lecturer', dateOfJoining: '05/08/1999 to 31/12/2004', totalExperience: '5 Yr, 04 Months' },
        { srNo: 2, institute: 'MGM’s College of Engineering, Nanded', postHeld: 'Sr. Lecturer', dateOfJoining: '01/01/2005 to 30/10/2005', totalExperience: '00 Yrs, 10 Months' },
        { srNo: 3, institute: 'MGM’s College of Engineering, Nanded', postHeld: 'Assistant Professor', dateOfJoining: '01/11/2005 to 31/10/2012', totalExperience: '07 Yrs, 01 Months' },
        { srNo: 4, institute: 'MGM’s College of Engineering, Nanded', postHeld: 'Associate Professor', dateOfJoining: '01/11/2012 to 28/02/2013', totalExperience: '00 Yrs, 04 Months' },
        { srNo: 5, institute: 'MGM’s College of Engineering, Nanded', postHeld: 'Professor', dateOfJoining: '01/03/2013 to till Date', totalExperience: '7 Yrs, 05 Months' },
      ],
      internationalJournals: [
        { srNo: 1, journalTitle: 'LAP LAMBERT Academic Publishing , 2022', paperTitle: 'Human Face Recognition using FSVD and RBF Neural Network', issnNo: 'ISBN -13: 978-620-4-97873-4, ISBN -10: 620-497873-4, EAN: 9786204978734', date: '2022' },
        { srNo: 2, journalTitle: 'International Journal of Health Sciences, 6(S1), 6686–6692, ', paperTitle: 'Design of framework for multi-objective workflow planning for IaaS platform in cloud environment', issnNo: 'ISSN 2550-6978 ,2022', date: '2022' },
        { srNo: 3, journalTitle: 'Turkish Online Journal of Qualitative Inquiry (TOJQI)', paperTitle: 'Remote Sensing Bid-Data Classification with Support Vector Machine', issnNo: 'Volume 12, Issue 7,8067 – 8075, , July 2021', date: 'July 2021' },
        { srNo: 4, journalTitle: 'International Journal of Intelligent Engineering Informatics (IJIEI), 2017', paperTitle: 'An Ensemble Clustering Method for Intrusion Detection', issnNo: 'ISSN online: 1758-8723 ISSN print: 1758-8715.', date: '2017' },
        { srNo: 5, journalTitle: 'International Journal of International Journal of Engineering Technology Science and Research (IJETSR)', paperTitle: 'Brain Tumor segmentation   using MS algorithm', issnNo: 'ISSN 2394-3386, ISBN 978-81-933746-5-8 Volume 4, Issue 4', date: 'April 2017' },
        { srNo: 6, journalTitle: 'International Journal of Innovations & Advancement in Computer Science ( IJIACS)', paperTitle: 'Object Detection and Clustering from High Resolution Remote Sensing Imaginary Using Mean-Shift(MS) Method', issnNo: 'ISSN: 2347-8616, P. P. 1-6, Vol. 3 Issue 4, June - 2014.', date: 'June 2014' },
        { srNo: 7, journalTitle: 'Knowledge and Information Systems , An International Journal , (KIS), Springer', paperTitle: 'A Hybrid Approach for Classification of Rare Class Data', issnNo: 'Vol. 36, Number 3, September 2013', date: 'September 2013' },
        { srNo: 8, journalTitle: 'International Journal of Computer Science And Applications(IJCSA)', paperTitle: 'Biomedical Image Retrieval Using SVM Classification', issnNo: 'Vol. 6, No.2, Apr 2013, ISSN: 0974-1011', date: 'Arpil 2013' },
      ],
      internationalConferences: [
        { authors: 'Abhilasha Dande, Mrs. K.C. Jondhale', title: 'Plant leaf disease detection using digital image processing', conferenceName: 'International Conference on Innovative and Advanced Engineering Research (ICIAER-2019)', heldAt: 'Pune, India', duration: '18th Oct. -19th Oct., 2019' },
        { authors: 'Ms. A. K. Salve, Mrs. K.C. Jondhale', title: 'Human Brain Tumor Segmentation using MRI Images: A survey', conferenceName: 'International Conference on Innovative and Advanced Engineering Research (ICIAER-2019)', heldAt: 'Pune, India', duration: '18th Oct. -19th Oct., 2019' },
        { authors: 'Bhagwan Kishanrao Thote, Mrs. K.C. Jondhale', title: 'Progressive Image Denoising using Fast Noise Variance Estimation', conferenceName: 'Third International Symposium on Computer Vision and Internet (VisonNet-2016) ACM', heldAt: 'Jaipur, India', duration: '21st Sep. -24th Sep , 2016' },
        { authors: 'Mushaaraf Hina Khan, Mrs. K.C. Jondhale', title: 'SIFT and MRLBP Description based Age Invariant Face Recognition', conferenceName: 'Third International Symposium on Computer Vision and Internet (VisonNet-2016) ACM', heldAt: 'Jaipur, India', duration: '21st Sep. -24th Sep , 2016' },
        { authors: 'Suhas Salave, Ms. K. C. Jondhale', title: 'Shape matching and object recognition using Shape Context', conferenceName: 'First IEEE International conference on Emerging Trends in Engineering and Technology (ICETET-2008)', heldAt: 'Nagpur, India', duration: '9th July-11th July ,2011' },
        { authors: 'More S. B., Ms. K. C. Jondhale', title: 'Biometric Security', conferenceName: 'First IEEE International conference on emerging trends in Engg. and Tech, (ICETET-2008)', heldAt: 'Nagpur, India', duration: '9th July-11th July, 2011' },
        { authors: 'A.H. Sable, Ms. K.C. Jondhale', title: 'Fast Adaptive bilateral filter for sharpness enhancement and noise removal', conferenceName: 'International Conference on Emerging Trends in Computer Science, Communication and Information Technology (ICETCIT-2010)', heldAt: 'Nanded, India.', duration: '09th Jan-10th Jan 2010' },
        { authors: 'R. V. Patil, Ms. K.C .Jondhale', title: 'Robust method based on egde detection to determie number of clusters in K-Means color image segmentation', conferenceName: 'Proceedings of the International Conference on Computational Intelligence & Application (ICCIA-2010)', heldAt: 'Nashik, India', duration: '3rd March- 5th March 2010' },
        { authors: 'H. Sable, Ms.K. C .Jondhale', title: 'Modified double bilateral filter for sharpness enhancement and noise removal', conferenceName: 'Proceedings of the International Conference on Advances in Computer Engineering, (ACEEE/IEEE-2010)', heldAt: 'Banglore, India', duration: '21st June-22nd June,2010' },
        { authors: 'Ms.K.C.Jondhale, Dr. L.M. Waghmare', title: 'Performance analysis of DCT in Logarithm domain and two point normalization methods for illumination and expression variation in Face recognition', conferenceName: 'Proceedings of the 3rd IEEE International Conference on, Computer Science and Information Technology (IEEE ICCSIT-2010)', heldAt: 'Chengdu, China.', duration: '9th July -11 July,2010' },
        { authors: 'Suhas G. Salve, Ms.K.C.Jondhale', title: 'Shape matching and object recognition using shape contexts', conferenceName: 'Proceedings of the 3rd IEEE International Conference on, Computer Science and Information Technology (IEEE ICCSIT-2010)', heldAt: 'Chengdu, China', duration: '9th July -11 July,2010' },
        { authors: 'R.V. Patil, Ms.K.C.Jondhale', title: 'Robust method based on edge detection to determine number of clusters in K-means color image segmentation.”', conferenceName: 'Proceedings of the 3rd IEEE International Conference on, Computer Science and Information Technology (IEEE ICCSIT),', heldAt: 'Chengdu, China', duration: '9th July -11 July,2010' },
        { authors: 'Ms. K.C.Jondhale, Dr. L.M. Waghmare', title: 'Comparative analysis of Face recognition techniques with illumination variation', conferenceName: 'The Joint 9th World Congress on Computational Mechanics and 4th Asian Pacific Congress on Computational Mechanics, (WCCM/APCOM-2010)', heldAt: 'Sydney, Australia', duration: '19th July -23rd July ,2010' },
        { authors: 'Ms. K. C. Jondhale, Dr. L.M. Waghmare', title: 'Improvement in PCA performance using FLD and RBF Neural Networks for Face Recognition', conferenceName: '3rd International conference on emerging trends in Engineering and Technology, (IEEE ICETET-2010)', heldAt: 'BITS Pilani, Goa, India', duration: '19th Nov -21st Nov ,2010' },
        { authors: 'Ms.K.C.Jondhale, Dr. L.M. Waghmare', title: 'PCA performance enhancement using SVD, FLD and RBF Neural Networks”', conferenceName: 'Third IEEE International conference on computer and Electrical engineering (ICCEE2010)', heldAt: 'Chengdu, China', duration: '16th Nov -18th Nov 2010' },
        { authors: 'Ms.K.C.Jondhale, Dr. L.M. Waghmare', title: 'Efficient PCA-FLD based Face Recognition with Illumination Variation', conferenceName: '2010 International Congress on Computer Applications and Computational Science (CACS-2010)', heldAt: 'Singapore', duration: '4th Dec -6th Dec ,2010' },
        { authors: 'Siddiqui Riyazoddin Alimoddin, Ms.K.C.Jondhale', title: 'A Biometric Approach To Face Recognition With RBF Neural Networks', conferenceName: 'International Conference on Systemics, Cybernetics and Informatics, (ICSCI-2010)', heldAt: 'Hyderabad, India', duration: '07th Jan-10th Jan, 2009' },
        { authors: 'Ms. K.C.Jondhale, GaidhaniAbhay R.', title: 'Analysis of Illumination Compensation and Normalization for Face Recognition', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, (ICCVGIP 2009)', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
        { authors: 'BhalgePrashant, Ms. K.C.Jondhale', title: 'Motion Estimation with filter', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, (ICCVGIP 2009)', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
        { authors: 'Ms. K.C.Jondhale, Asha Kale', title: 'HMM Based Face Recognition: A Qualitative Approach', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, (ICCVGIP 2009)', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
        { authors: 'R.V.Patil, K.C.Jondhale', title: 'Combining Color and Log Gabor Wavelet Based Feature Detector for Content Based Image Retrieval', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, (ICCVGIP 2009)', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
        { authors: 'K.C.Jondhale, B. S. Borkar', title: 'Fully automatic Facial feature point detection using Gabor feature based boosted classifiers', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, (ICCVGIP 2009)', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
        { authors: 'K.C.Jondhale, S. D. Choudary', title: 'Fingerprint image enhancement: Algorithm and performance evaluation', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, (ICCVGIP 2009)', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
        { authors: 'R.V.Patil, K.C.Jondhale', title: 'Content Based Image Retrieval based on phase Congruency via Log Gabor Wavelet Filters', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, (ICCVGIP 2009)', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
        { authors: 'Suhas Salve, Ms.K.C.Jondhale', title: 'Shape matching and object recognition using Shape Context', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, (ICCVGIP 2009)', heldAt: 'Sangamner, India', duration: '4th March- 5th March, 2009' },
        { authors: 'R.V.Patil, K.C.Jondhale', title: 'Combining Color and Log Gabor Wavelet Based Feature Detector for Content Based Image Retrieval', conferenceName: 'International Conference on VLSI and Communication, (ICVCom – 2009),', heldAt: 'Kottayam, Kerala, India', duration: '16th April -18th April ,2009' },
        { authors: 'H. Sable, Ms.K.C.Jondhale', title: 'Detection of faces and facial features in color images', conferenceName: 'Proceedings of the 2009 International Conference on Computer and Network Technology, (ICCNT- 2009)', heldAt: 'Chennai, India', duration: '27th June – 29th June, 2009' },
        { authors: 'H. Sable, Ms.K.C.Jondhale', title: 'Face detection and facial features extraction in color group images', conferenceName: 'Proceedings of the 2009 International Conference on Computer and Network Technology, (ICCNT- 2009)', heldAt: 'Chennai, India', duration: '27th June – 29th June, 2009' },
        { authors: 'R. Panhalkar, Ms. K.C. Jondhale', title: 'Removal of Impulse Noise Using Median Filtering', conferenceName: 'Proceedings of the Third International Conference on Information Processing (ICIP-2009)', heldAt: 'Bangalore, India', duration: '7th Aug – 9th Aug, 2009.' },
        { authors: 'DipaliShimpi, Ms.K.C.Jondhale', title: 'Face Recognition Using Kernel Subspace Linear Discriminant Analysis', conferenceName: 'INNOVATION – 2008 Regional Conference for Engineering Teachers', heldAt: 'Pune, India', duration: '17th Nov- 18th Nov, 2008.' },
        { authors: 'Borkar Bharat S., Ms.K.C.Jondhale', title: 'A Literature Survey: Face Recognition', conferenceName: 'Pravara International Conference on Emerging Trends in Engineering, (PICETE – 2008)', heldAt: 'Pune, India', duration: '20th Dec. -22nd Dec., 2008' },
        { authors: 'GaidhaniAbhay R., Ms.K.C.Jondhale', title: 'Illumination Compensation and Normalization for Face Recognition', conferenceName: 'Pravara International Conference on Emerging Trends in Engineering, (PICETE – 2008 )', heldAt: 'Pune, India', duration: '20th Dec. -22nd Dec., 2008' },
        { authors: 'Nanda Wagh, Ms.K.C.Jondhale', title: 'An Efficient Method for face Recognition Using Kernel Fisher Approach', conferenceName: 'Pravara International Conference on Emerging Trends in Engineering, (PICETE – 2008)', heldAt: 'Pune, India', duration: '20th Dec. -22nd Dec., 2008.' },
      ],
      nationalConferences: [
        { srNo: 1, authors: 'Siddiqui Riyazoddin Alimoddin, Ms.K.C.Jondhale', title: '"Biometric in Child Recovery"', conferenceName: 'Biomedical and Process Instrumentation,BINCON-2005', heldAt: 'N/A', duration: '19-20 March, 2005' },
        { srNo: 2, authors: 'K.C.Jondhale , S.K. Korade', title: '“Real Time Gestare Telerobotic system using the FCM algorithm”', conferenceName: '“Real Time Gestare Telerobotic system using the FCM algorithm”, Proc. National conference on emerging Technologies and Applications at computer science department of saurestra university Rajkot,', heldAt: 'Department of saurestra university Rajkot, jointly with Amoghsiddhi Education society , Sangli', duration: 'Oct. 1st and 2nd , 2006.' },
        { srNo: 3, authors: 'K.C.Jondhale , S.M.Rokade', title: '“Fingerprint classification using self organization maps (SOM)”', conferenceName: 'Proc. National conference on emerging Technologies and Applications at computer science department of saurestra university Rajkot', heldAt: 'N/A', duration: 'Oct. 1st and 2nd , 2006.' },
        { srNo: 4, authors: 'R.V.Patil, K.C. Jondhale and Archana M. Rajurkar', title: '“Mobile Computing to Facilitate Interactive Learning”', conferenceName: '. National Conference on Use of Computer and Internet for Child Development at S.S.V.P.S’s L.K. Ghogrey Science College Dhule, India', heldAt: 'S.S.V.P.S’s L.K. Ghogrey Science College Dhule, India', duration: 'Jan 20-21, 2006' },
        { srNo: 5, authors: 'R.V.Patil, K.C.Jondhale', title: '“Child safety online”', conferenceName: 'National Conference on Use of computer and internet for child development', heldAt: 'N/A', duration: 'Jan.20th to 21st 2006.' },
        { srNo: 6, authors: 'R.V.Patil, K.C.Jondhale', title: '“Delivering the power of computers to children without harming their health ”', conferenceName: 'National Conference on Use of computer and internet for child development,', heldAt: 'N/A', duration: 'Jan.20th to 21st 2006.' },
        { srNo: 7, authors: 'R.V.Patil, K.C.Jondhale', title: '“An anatomy of computer games”', conferenceName: ', National Conference on Use of computer and internet for child development,', heldAt: 'N/A', duration: 'Jan.20th to 21st 2006.' },
        { srNo: 8, authors: 'Sarode M, .C.Jondhale', title: '“Sensor Networks”', conferenceName: 'National Level Technical paper presentation Symposium(ELECTRA-2006', heldAt: 'Nashik', duration: '31st March 2006.' },
        { srNo: 9, authors: 'Deepali Shimpi, Ms. K.C.Jondhale', title: '“Face Recognition Using Kernel Subspace Linear Discriminant Analysis “', conferenceName: 'INNOVATION – 2008, 17th & 18th Nov, 2008, Regional Conference for Engineering Teachers, Board of College & University Development, University of Pune & Sinhgad College of Engineering, Pune.', heldAt: 'N/A', duration: '17th & 18th Nov, 2008,' },
        { srNo: 10, authors: 'Ms.K.C.Jondhale, Chouadhry Sachin D', title: '”Modified Gabor Filter Design “', conferenceName: 'National level paper prsentation, ZEST-08, Sangamner', heldAt: 'Sangamner', duration: '15th Sept. 2008' },
        { srNo: 11, authors: 'Ms.K.C.Jondhale, Borkar B,', title: '”Face recognition using PCA and Log Gabor Filter “', conferenceName: 'National level paper prsentation, ZEST-08,', heldAt: 'Sangamner', duration: '15th Sept. 2008' },
        { srNo: 12, authors: 'R.V.Patil, K.C.Jondhale', title: '“An Integration of color phase based feature detector for content based image retrieval”', conferenceName: 'National conference on recent trends in Information Technology, NCRTIT-2009,', heldAt: ', Ahmednagar.', duration: '20-21 February 2009' },
        { srNo: 13, authors: 'Ms. K.C.Jondhale, Asha Kale', title: '” HMM Based Face Recognition: A Qualitative Approach”', conferenceName: 'National Conference on emerging trends in Electronics Engg. and Computing in the EEEC 2010,', heldAt: 'Nagpur.', duration: '9th & 10th Feb 2010,' },
        { srNo: 14, authors: 'Archana Panhalkar, Ms. K.C.Jondhale', title: '” An Impulse denoising technique using median filtering”', conferenceName: 'National Conference on emerging trends in Electronics Engg. and Computing in the EEEC 2010,', heldAt: ' Nagpur.', duration: '9th & 10th Feb 2010' },
        { srNo: 15, authors: 'Prashant Bhalge, Ms. K.C.Jondhale', title: '” Filteration for motion estimation”', conferenceName: 'National Conference on emerging trends in Electronics Engg. and Computing in the EEEC 2010,', heldAt: 'Nagpur.', duration: '9th&10th Feb 2010.' },
      ],
      phdGuidance: [
        { srNo: 1, name: 'Mr. KapilKeshavrao Wankhade', title: 'Design and Development of Algorithm for Intelligent Data Stream Mining', dateOfRegistration: '26th Dec. 2012', yearOfCompletion: '2018' },
        { srNo: 2, name: 'Mr. Salve Suhas Govindrao', title: 'Development of Hybrid Localization Techniques for Wireless Sensor Networks.', dateOfRegistration: '17th Oct. 2012', yearOfCompletion: 'Pursuing' },
        { srNo: 3, name: 'Mr. Ajitkumar Jagannathrao Kadam', title: 'Study & Implementation of Framework for Big Data Mining Scheduler in Cloud Computing Environment.', dateOfRegistration: '25th Nov. 2014', yearOfCompletion: 'Pursuing' },
        { srNo: 4, name: 'Mr. Wankhade Mahesh Prabhakarrao.', title: 'Real Time Surveillance Using Multimedia Sensor Network', dateOfRegistration: '05th July 2014', yearOfCompletion: 'Pursuing' },
        { srNo: 5, name: 'Mr. Prashant Laximanrao Mandale', title: 'Applicability of Product Lifecycle Management to Small and Medium Scale Enterprises: Issues and Potential Solution.', dateOfRegistration: '14th Sept. 2017', yearOfCompletion: 'Pursuing' },
        { srNo: 6, name: 'Mr. Gaurav S. Malande', title: 'Big Data Analytics for Recommendation Systems.', dateOfRegistration: '14th Sept. 2017', yearOfCompletion: 'Pursuing' },
        { srNo: 7, name: 'Mr. Sanket Rameshwarrao Milke', title: 'Use of ICT: Hadoop Image Processing Interface (HIPI) For Plant Disease Identification in Agriculture to Help in Development of Smart Village.', dateOfRegistration: '14th Sept. 2017', yearOfCompletion: 'Pursuing' },
        { srNo: 8, name: 'Ms. Salve Amrapali Kishanrao', title: 'Design of Effective Techniques for Human Brain Tumor Segmentation and Detection using MRI Images', dateOfRegistration: '14th Sept. 2017', yearOfCompletion: 'Pursuing' },
      ],
      meGuidance: [
        { srNo: 1, name: 'Mr. Rokade Sharad', title: 'Online Fingerprint Verification', yearOfCompletion: 2007 },
        { srNo: 2, name: 'Sarode M.V.', title: 'Noise removal', yearOfCompletion: 2007 },
        { srNo: 3, name: 'Korade Sachin K.', title: 'Gesture recognition', yearOfCompletion: 2007 },
        { srNo: 4, name: 'Borkar Bharat S.', title: 'PCA based Face recognition', yearOfCompletion: 2007 },
        { srNo: 5, name: 'More Swapnaja B.', title: 'Biometric security', yearOfCompletion: 2008 },
        { srNo: 6, name: 'Panhalkar Archana Ramkisan', title: 'Removal of Impulse noise using median filtering', yearOfCompletion: 2008 },
        { srNo: 7, name: 'Bhalge Prashant Ashok', title: 'Motion Estimation Improvement with Threshold and Filter', yearOfCompletion: 2009 },
        { srNo: 8, name: 'Chouadhry Sachin D.', title: 'NMGF for Fingerprint Recognition', yearOfCompletion: 2009 },
        { srNo: 9, name: 'Koche Kemalumrao', title: 'Number plate identification using neural network', yearOfCompletion: 2009 },
        { srNo: 10, name: 'Shimpi Dipali Madhukarrao', title: 'Face Recognition Using Kernel Subspace Linear Discriminant Analysis', yearOfCompletion: 2009 },
        { srNo: 11, name: 'Wagh Nanda Raghunathrao', title: 'Efficient methods for Face for using Kernel Fisher approach', yearOfCompletion: 2009 },
        { srNo: 12, name: 'Gaidhani Abhay R.', title: 'DCT based Face recognition', yearOfCompletion: 2009 },
        { srNo: 13, name: 'Siddiqui Riyazoddin Alimoddin.', title: 'Face recognition', yearOfCompletion: 2010 },
        { srNo: 14, name: 'Kale Asha Dhondiram', title: 'HMVV based Face recognition', yearOfCompletion: 2010 },
        { srNo: 15, name: 'Sable Archana Harising', title: 'Modified Double Bilateral Filter for Sharpness Enhancement and Noise', yearOfCompletion: 2010 },
        { srNo: 16, name: 'Dhotre Dhanraj Ramdas', title: 'Image Stenography Using Pixel Value Differencing and Wavelet Transform', yearOfCompletion: 2010 },
        { srNo: 17, name: 'Mohod Prakash Shrirang', title: 'Color and Frequency Feature Based Face Recognition', yearOfCompletion: 2010 },
        { srNo: 18, name: 'Suhas Salve', title: 'Shape matching and object recognition using Shape Context', yearOfCompletion: 2011 },
        { srNo: 19, name: 'Patil Rajendra Vasantrao', title: 'Use of phase Congruency for shape information in content based image retrieval', yearOfCompletion: 2011 },
        { srNo: 20, name: 'Mr. Bokare M M.', title: 'Face Recognition using PCA and Log Gabor Filter', yearOfCompletion: 2011 },
        { srNo: 21, name: 'Ms. Doshi Minal', title: 'Face recognition', yearOfCompletion: 2011 },
        { srNo: 22, name: 'Ms. Terkar Manisha', title: 'Face recognition', yearOfCompletion: 2011 },
        { srNo: 23, name: 'Mr. Bansode Vilas', title: 'Face recognition', yearOfCompletion: 2011 },
        { srNo: 24, name: 'Mr. Kalaskar', title: 'Image segmentation', yearOfCompletion: 2011 },
        { srNo: 25, name: 'Balaji Shetty', title: 'Analysis of web server using LDAP', yearOfCompletion: 2012 },
        { srNo: 26, name: 'Kale Jaydeep Narayan', title: 'Iris recognition', yearOfCompletion: 2012 },
        { srNo: 27, name: 'Deshpande GirijaVijayrao', title: 'Illumination enhancement', yearOfCompletion: 2012 },
        { srNo: 28, name: 'Pawar Prashant Himmatrao', title: 'Stenography', yearOfCompletion: 2012 },
        { srNo: 29, name: 'Aher Ravindra Popatrao', title: 'Genetic algorithm', yearOfCompletion: 2012 },
        { srNo: 30, name: 'Bende Anil Laxmanrao', title: 'Image segmentation', yearOfCompletion: 2012 },
        { srNo: 31, name: 'Chhajed Ajay Subhashchandra', title: 'Face Detection using GSLDA Method', yearOfCompletion: 2013 },
        { srNo: 32, name: 'Salve Amrapali Kishanrao', title: 'MeanShift and Normalized Cuts (MSNC) for Colour Image Segmentation', yearOfCompletion: 2013 },
        { srNo: 33, name: 'Ranjanikar Manjiri Arun', title: 'BFLD Model using Gabor Features and Bays Classifier', yearOfCompletion: 2013 },
        { srNo: 34, name: 'Kalbande Maroti Shankarrao', title: 'MIQM-Multi Camera Image Quality Measure', yearOfCompletion: 2014 },
        { srNo: 35, name: 'RachanaYannawar', title: 'Error Aware Data Mining', yearOfCompletion: 2014 },
        { srNo: 36, name: 'Waghmare Anil Bhagwanrao', title: 'DCT pyramid based Face Recognition System', yearOfCompletion: 2016 },
        { srNo: 37, name: 'Khan Musharraf Hina Masood A.K.', title: 'A Discriminative Model for Age Invariant Face Recognition', yearOfCompletion: 2016 },
        { srNo: 38, name: 'Shaikh Surayya', title: 'Biomedical Image Retrieval Using SVM Classification', yearOfCompletion: 2017 },
        { srNo: 39, name: 'Bhagwan Kishanrao Thote', title: 'Progressive Image Denoising using Fast Noise Variance Estimation', yearOfCompletion: 2017 },
        { srNo: 40, name: 'Vibhute Anuradha Pandharinath', title: 'Handwritten Character Recognition', yearOfCompletion: 2018 },
        { srNo: 41, name: 'Wadje Jaiyashri Digambarrao', title: 'Face Recognition Using Oriented Local Histogram Equalization', yearOfCompletion: 2018 },
        { srNo: 42, name: 'Mukkawar Vinayak V', title: 'Detection and Reconstruction of Line Scratches in Old Motion Pictures', yearOfCompletion: 2018 },
        { srNo: 43, name: 'Itgyalkar Preeti B', title: 'Pursuing', yearOfCompletion: 'N/A' },
        { srNo: 44, name: 'Joshi Pravin Vinayak', title: 'Pursuing', yearOfCompletion: 'N/A' },
        { srNo: 45, name: 'Pande Avinash Ashokrao', title: 'Pursuing', yearOfCompletion: 'N/A' },
        { srNo: 46, name: 'Chiragiya Simranjeet Kaur', title: 'Pursuing', yearOfCompletion: 'N/A' },
        { srNo: 47, name: 'Dhondge Rajeshwari Vishwambharrao', title: 'Pursuing', yearOfCompletion: 'N/A' },
        { srNo: 48, name: 'Gajanan Kishor Damkondwar', title: 'Pursuing', yearOfCompletion: 'N/A' },
      ],
      conductedCourses: [
        'FDP 101x: Two week AICTE approved NMEICT FDP on “Foundation Program in ICT for Education” 13 Sept-18 Oct.2018',
        'FDP 201x: AICTE approved NMEICT FDP on “Pedagogy for Online and Blended Teaching-Learning Process” 30 Oct-18 Dec. 2018',
        'One week STTP for faculty on “Signal Speech and Image Processing using Matlab” 1-6 July 2013',
        'Coordinated Mission 10X Faculty Empowerment Program',
        'Embedded System Design using MSP 430 for students of TE(ECT)',
        'Worked as Convener for National Level Paper Presentation and Project Competition for students ‘VISIO-TECH’ in April 2000'
      ],
      attendedPrograms: [
        { srNo: 1, courseTitle: 'e-Yantra Lab Setup Initiative (eLSI)', organizingInstitute: 'MGMCOE', noOfDays: '02', duration: '2-3Aug. 2019', type: 'Workshop' },
        { srNo: 2, courseTitle: 'FDP101x Foundation Program in ICT for Education', organizingInstitute: 'NMEICT, IITB Remote Centre MGM, Nanded', noOfDays: '1 weeks', duration: '13 Sept-18 Oct.2018', type: 'FDP' },
        { srNo: 3, courseTitle: 'FDP201x Pedagogy for Online and Blended Teaching-Learning Process', organizingInstitute: 'NMEICT, IITB Remote Centre MGM, Nanded', noOfDays: '1 week', duration: '30 Oct-18 Dec. 2018', type: 'FDP' },
        { srNo: 4, courseTitle: 'CMOS, Mixed Signal & Radio Freq. VLSI Design', organizingInstitute: 'IITK, Remote centre MGM', noOfDays: '2 week', duration: '30 Jan-4 Feb. 2017', type: 'STTP' },
        { srNo: 5, courseTitle: 'Electric Power System', organizingInstitute: 'IITK, Remote centre MGM', noOfDays: '2 week', duration: '12 June-15 July 2017', type: 'STTP' },
        { srNo: 6, courseTitle: 'Computer Programming', organizingInstitute: 'IITB, Remote centre MGM', noOfDays: '2 week', duration: '20 May-15 June', type: 'STTP' },
        { srNo: 7, courseTitle: 'Computer Networking', organizingInstitute: 'IITB, Remote centre MGM', noOfDays: '2 Week', duration: '28 May- 5 July 2014', type: 'STTP' },
        { srNo: 8, courseTitle: 'Signals & Systems', organizingInstitute: 'IITK, Remote centre MGM', noOfDays: '2 Week', duration: '2-12 Jan 2014', type: 'STTP' },
        { srNo: 9, courseTitle: 'Signal, Speech & Image Processing', organizingInstitute: 'Dept. of CSE, MGMCOE', noOfDays: '2 Week', duration: '1-6 July 2013', type: 'STTP' },
        { srNo: 10, courseTitle: 'NBA World Summit', organizingInstitute: 'NBA', noOfDays: '4 days', duration: '25-28 Mar.12', type: 'World Summit' },
      ],
      memberships: [
        { srNo: 1, nameOfBody: 'ISTE Membership', membershipNo: 'No. LM 114034 Year 2016' },
      ],
      responsibilities: [
        { srNo: 1, nameOfResponsibility: 'CS for SRTMUN Regular Exam', year: 'Summer 2012' },
        { srNo: 2, nameOfResponsibility: 'Jury member of Paper Presentation Competition “Techcrunch-2012” in Indira Institute of Technology, Nanded', year: '2012' },
        { srNo: 3, nameOfResponsibility: 'AICTE Coordinator', year: '2012' },
        { srNo: 4, nameOfResponsibility: 'Departmental Coordinator for Internal Quality Assurance Cell', year: '2012' },
        { srNo: 5, nameOfResponsibility: 'Coordinator for One week STTP on “Signal, Speech and Image Processing use MATLAB', year: 'July 2013' },
        { srNo: 6, nameOfResponsibility: 'Speaker for Guidance in Carrier Fair sponsored by MSBTE at Gramin Polytechnic Nanded', year: '2014' },
        { srNo: 7, nameOfResponsibility: 'Coordinator for Two Day Workshop on Step to Research', year: '19th – 20th Sept. 2014' },
        { srNo: 8, nameOfResponsibility: 'Coordinator for One day workshop on Research Proposal Writing', year: '22nd Jan. 2015' },
        { srNo: 9, nameOfResponsibility: 'MGM’s Girls Hostel In charge', year: '2012 -2015' },
        { srNo: 10, nameOfResponsibility: 'Expert in District Level Research Festival AVISHKAR-2016', year: '2016' },
        { srNo: 11, nameOfResponsibility: 'Coordinator for four day workshop on “Industrial Automation”', year: '24 to 27 July 2016' },
        { srNo: 12, nameOfResponsibility: 'CS for SRTMUN Regular Exam', year: 'Summer 2017' },
        { srNo: 13, nameOfResponsibility: 'Internal Squad for BATU Exam Summer-2018', year: 'Summer-2018' },
      ],
      achievementsAwards: [
        { srNo: 1, achievement: 'Best Teacher Award-2013', year: 2013 },
        { srNo: 2, achievement: 'Star of MGM Award-2014', year: 2014 },
        { srNo: 3, achievement: 'Star of MGM Award-2017', year: 2017 },
      ],
      otherCredits: [], // No specific 'other credits' list in provided HTML for this faculty
    }
  },
  {
    id: 'm-r-banwaskar',
    img: '/images/entc/faculty/Department_4-20241111185256.jpg',
    name: 'Dr. Mrs. M. R. Banwaskar',
    designation: 'Professor',
    specialization: 'Electronics Design Technology',
    email: 'banwaskar_mr@mgmcen.ac.in',
    details: {
      dateOfBirth: '15-Nov',
      phone: 'N/A', // Empty in source
      mobile: '8605533599',
      address: 'M. G. M.’s College of Engineering Near Air Port, Nanded',
      academicQualifications: [
        { srNo: 1, qualification: 'Ph.D. persuing', instituteUniversity: 'SRTMU, Nanded', marks: 'N/A', year: 'N/A', division: 'N/A' },
        { srNo: 2, qualification: 'M. Tech.(EDT)', instituteUniversity: 'CEDT, Aurangabad', marks: 66, year: 1997, division: 'First Class' },
        { srNo: 3, qualification: 'M. Sc.(Phy-Ele.)', instituteUniversity: 'J. E. S. College, Jalna', marks: 63, year: 1990, division: 'First Class' },
        { srNo: 4, qualification: 'HSC', instituteUniversity: 'J. E. S. College, Jalna', marks: 66, year: 1985, division: 'First Class' },
        { srNo: 5, qualification: 'SSC', instituteUniversity: 'Jain High School, Jalna', marks: 80, year: 1983, division: 'First Class' },
      ],
      experience: [
        { srNo: 1, institute: 'MGMCOE', postHeld: 'Lect./AP/P', dateOfJoining: '19/11/1990', totalExperience: '29 yrs' },
        { srNo: 2, institute: 'MGM’s JNEC, Aurangabd', postHeld: 'AP', dateOfJoining: '06/08/2004', totalExperience: '08 months' },
        { srNo: 3, institute: 'VPCOE, Baramati', postHeld: 'AP', dateOfJoining: '11/07/2005', totalExperience: '10 months' },
      ],
      internationalJournals: [
        { srNo: 1, journalTitle: 'Inderscience journal of Automatic computing', paperTitle: 'Video retrieval system for laparoscopic videos using average intensity color and shape features', issnNo: 'IJAC2021', date: 'N/A' },
        { srNo: 2, journalTitle: 'Int. Conference on Cognition & Recognition', paperTitle: 'Selected deep features and multiclass SVM for flower Image classification', issnNo: 'Springer book Chapter', date: 'Dec-2021' },
        { srNo: 3, journalTitle: 'IJRESTInternational journal for Research in Emerging Science and Technology', paperTitle: 'A Novel Visual-silency Attention-based Key Frame Accumulation in Videos', issnNo: 'ISSN 2349-7610', date: 'Jan. 2017' },
        { srNo: 4, journalTitle: 'IJARECEInternational Journal of Advanced Research in Electronics and Communication Engineering', paperTitle: 'An Integrated Vehicle Parameter Measurement System for Highway Traffic Monitoring', issnNo: 'ISSN 2320-9801', date: 'Dec 2017' },
        { srNo: 5, journalTitle: 'IJCAInternational Journal of Computer Applications', paperTitle: 'Comparative Analysis and Detection of Street Parked Vehicles Using Spatiotemporal Maps and Corner Detection Methods', issnNo: 'ISSN0975-8887', date: 'Feb 2016' },
        { srNo: 6, journalTitle: '(IJARECE)International Journal of Advanced Research in Electronics and Communication Engineering', paperTitle: 'Performance evaluation of PCA and LDA for face recognition', issnNo: 'ISSN 2278-909X', date: 'Feb. 2013' },
        { srNo: 7, journalTitle: '(IJARECE)International Journal of Advanced Research in Electronics and Communication Engineering', paperTitle: 'Application of Wavelet Transform on Multiresolution Image Mosaicing', issnNo: 'ISSN 2278-909X', date: 'Jan. 2013' },
      ],
      internationalConferences: [
        { srNo: 1, conferenceTitle: 'ICVGIP Int. conf. on Computer Vision, Graphics and Image Processing, IIT Guwahati,', paperTitle: 'Keyframe Extraction using Preprocessing and Corner detector', isbnNo: 'N/A', venue: 'IIT, Guwati', durationDate: '18-22 Dec. 2016' },
        { srNo: 2, conferenceTitle: 'ICCASP Int. Conf. on Communication and Signal Processing', paperTitle: 'Performance Analysis of Shot Change Detection Methods', isbnNo: 'N/A', venue: 'DBATU, Lonere', durationDate: '26-27 Dec. 2016' },
        { srNo: 3, conferenceTitle: 'ICETET Int. Conf. on Emerging Trends in Engineering and Technology', paperTitle: 'Biometrics Liveness Detection By using Image Quality Assessment', isbnNo: 'N/A', venue: 'Mumbai', durationDate: '10-11 Sept. 2016' },
        { srNo: 4, conferenceTitle: 'ICNNN Int. Conf. on Nanostructures, Nanomaterials and Nanoengineering', paperTitle: 'Graphene Basics and Applications', isbnNo: 'N/A', venue: 'Singapore', durationDate: '5-7Oct, 2012' },
      ],
      nationalConferences: [
        { srNo: 1, authors: 'M. R. Banwaskar,', title: '“Use of Internet in Education and Communication”', conferenceName: 'CSI Nasik Chapter,', heldAt: 'Nasik,', duration: '08-09 Feb. 1997.' },
        { srNo: 2, authors: 'M. R. Banwaskar,', title: '“Physics Projects”', conferenceName: 'N/A', heldAt: 'Dr. B. A. M. University, Aurangabad,', duration: 'Jan. 1997' },
        { srNo: 3, authors: 'M. R. Banwaskar,', title: '“Computers and Internet in Bringing Quality in Technical Education”', conferenceName: 'N/A', heldAt: 'Institution of Engineers, Belgaum,', duration: '15 Sept. 1999' },
        { srNo: 4, authors: 'M. R. Banwaskar,', title: '“Impact of IT on Technical Education”', conferenceName: 'ISTE Pusad Chapter, Pusad,', heldAt: 'N/A', duration: '15 Sept. 1999.' },
        { srNo: 5, authors: 'M. R. Banwaskar,', title: '“Iris Recognition: A Technical Review”', conferenceName: ',Padmashree Dr. D. Y. Patil College of Engg.', heldAt: 'Pune,', duration: '06-08 Sept. 2008.' },
        { srNo: 6, authors: 'SavitaDawne,M. R. Banwaskar', title: '“Fingerprint Identification using DWT”', conferenceName: ', 2nd National Conf. on Emerging Trends in Computer Science and Information Technology,', heldAt: 'Sevagram, Vardha', duration: 'N/A' },
      ],
      meGuidance: [
        { srNo: 1, name: 'BANARASE SNEHAL JANARAO', title: 'Application of Wavelet Transform on Multiresolution Image Mosaicing', yearOfCompletion: 2013 },
        { srNo: 2, name: 'DAWANE SAVITA RAMKRUSHNA', title: 'Fingerprint Recognition using DWT', yearOfCompletion: 2013 },
        { srNo: 3, name: 'HASE SWATI KHIRAPA', title: 'Appearance Based Face Recognition by Linear Algorithm', yearOfCompletion: 'June 2013' },
        { srNo: 4, name: 'AHIRE SONALI ABHIMAN', title: 'Image Reconstruction Using Exemplar based Image Inpainting and Single Image Super Resolution', yearOfCompletion: 'June 2016' },
        { srNo: 5, name: 'KHARAT SWAPNIL SUDAMRAO', title: 'Duplicate Video Detection using SIFT', yearOfCompletion: 2014 },
        { srNo: 6, name: 'CHANNOJI MAHESH RAMSWAMY', title: 'Content Based Image Retrieval System using Ranking', yearOfCompletion: 2015 },
        { srNo: 7, name: 'JAYEBHAYE MANALI GANPATRAO', title: 'Comparative Analysis and Detection of Street Parked Vehicles using Spatiotemporal Maps and Corner Detection Methods', yearOfCompletion: 2016 },
        { srNo: 8, name: 'LALANI NILOFER MOHAMMEDALI', title: 'Data Hiding For Secret Communication using Adaptive Pixel Pair Matching', yearOfCompletion: 2015 },
        { srNo: 9, name: 'PATIL SHRADDHA VISHAMBARRAO', title: 'Fingerprint Matching Using Pore Feature with Minutiae', yearOfCompletion: 2016 },
        { srNo: 10, name: 'DANGE AKESH SHIVAJIRAO KADAM SHITAL GOVINDRAO', title: 'Liveness Detection System for Face, Fingerprint and Iris using Image Quality Assessment', yearOfCompletion: 2016 },
        { srNo: 11, name: 'SABA SHARMEEN KHANAM ABDUL QAYYAM KHAN', title: 'An Integrated Vehicle Parameter Measurement System for Highway Traffic Monitoring', yearOfCompletion: 2018 },
      ],
      conductedCourses: [
        'FDP 101x: Two week AICTE approved NMEICT FDP on “Foundation Program in ICT for Education” 13 Sept-18 Oct.2018',
        'FDP 201x: AICTE approved NMEICT FDP on “Pedagogy for Online and Blended Teaching-Learning Process” 30 Oct-18 Dec. 2018',
        'One week STTP for faculty on “Signal Speech and Image Processing using Matlab” 1-6 July 2013',
        'Coordinated Mission 10X Faculty Empowerment Program',
        'Embedded System Design using MSP 430 for students of TE(ECT)',
        'Worked as Convener for National Level Paper Presentation and Project Competition for students ‘VISIO-TECH’ in April 2000'
      ],
      attendedPrograms: [
        { srNo: 1, courseTitle: 'e-Yantra Lab Setup Initiative (eLSI)', organizingInstitute: 'MGMCOE', noOfDays: '02', duration: '2-3Aug. 2019' },
        { srNo: 2, courseTitle: 'FDP101x Foundation Program in ICT for Education', organizingInstitute: 'NMEICT, IITB Remote Centre MGM, Nanded', noOfDays: '1 weeks', duration: '13 Sept-18 Oct.2018' },
        { srNo: 3, courseTitle: 'FDP201x Pedagogy for Online and Blended Teaching-Learning Process', organizingInstitute: 'NMEICT, IITB Remote Centre MGM, Nanded', noOfDays: '1 week', duration: '30 Oct-18 Dec. 2018' },
        { srNo: 4, courseTitle: 'CMOS, Mixed Signal & Radio Freq. VLSI Design', organizingInstitute: 'IITK, Remote centre MGM', noOfDays: '2 week', duration: '30 Jan-4 Feb. 2017' },
        { srNo: 5, courseTitle: 'Electric Power System', organizingInstitute: 'IITK, Remote centre MGM', noOfDays: '2 week', duration: '12 June-15 July 2017' },
        { srNo: 6, courseTitle: 'Computer Programming', organizingInstitute: 'IITB, Remote centre MGM', noOfDays: '2 week', duration: '20 May-15 June' },
        { srNo: 7, courseTitle: 'Computer Networking', organizingInstitute: 'IITB, Remote centre MGM', noOfDays: '2 Week', duration: '28 May- 5 July 2014' },
        { srNo: 8, courseTitle: 'Signals & Systems', organizingInstitute: 'IITK, Remote centre MGM', noOfDays: '2 Week', duration: '2-12 Jan 2014' },
        { srNo: 9, courseTitle: 'Signal, Speech & Image Processing', organizingInstitute: 'Dept. of CSE, MGMCOE', noOfDays: '2 Week', duration: '1-6 July 2013' },
        { srNo: 10, courseTitle: 'NBA World Summit', organizingInstitute: 'NBA', noOfDays: '4 days', duration: '25-28 Mar.12' },
      ],
      responsibilities: [
        { srNo: 1, nameOfResponsibility: 'Facilitation Centre Incharge2' },
        { srNo: 2, nameOfResponsibility: 'Admission Incharge2' },
        { srNo: 3, nameOfResponsibility: 'Innovation and Start up Activity Coordinator' },
        { srNo: 4, nameOfResponsibility: 'Electronics Technocrats Association In charge' },
        { srNo: 5, nameOfResponsibility: 'Dept. IQAC member' },
        { srNo: 6, nameOfResponsibility: 'Additional Mini project and Seminar' },
      ],
      otherCredits: [
        'Worked as NSS Program Officer during June 1998-June 2000. Our College won 1st prize in Intercollegiate Blood Donation Compitition'
      ],
      phdGuidance: [],
      memberships: [],
      achievementsAwards: [],
    }
  },
  {
    id: 'v-s-jadhav',
    img: '/images/entc/faculty/Department_4-20241111185327.jpg',
    name: 'Mr. V. S. Jadhav',
    designation: 'Assistant Professor',
    specialization: 'Digital Signal Procesing',
    email: 'jadhav_vs@mgmcen.ac.in',
    details: {
      dateOfBirth: '11-Nov',
      phone: '(O2462) 222999',
      mobile: '09226966355',
      address: 'M.G.M.’s College of Engineering., Near Airport, Hingoli Road, Nanded - 431605',
      academicQualifications: [
        { srNo: 1, degree: 'Registered for PhD (Electronics)', university: 'Dr. BATU Aurangabad', marks: 'N/A', year: 2013, division: 'N/A' },
        { srNo: 2, degree: 'M. E. (Instrumentation)', university: 'SRTMU Nanded', marks: 60, year: 2011, division: 'First Class' },
        { srNo: 3, degree: 'BE (Electronics)', university: 'Marathawada University Aurangabad', marks: 61, year: 1995, division: 'First Class' },
        { srNo: 4, degree: 'HSC (Science )', university: 'Aurangabad Board', marks: 68, year: 1989, division: 'First Class' },
      ],
      experience: [
        { institute: 'MGM’s College of Engineering', postHeld: 'Lecturer', dateOfJoining: '10/09/1916', totalExperience: '-' },
        { institute: 'MGM’s College of Engineering', postHeld: 'Sr. Lecturer', dateOfJoining: '15/07/2011', totalExperience: '21' },
      ],
      internationalJournals: [
        { srNo: 1, journalTitle: 'IJARSE', paperTitle: 'Classification of Brain MRI using Watershed Segmentation and Support Vector Machine', issnNo: '2319-83554', date: 'April2018' },
        { srNo: 2, journalTitle: 'TRANS STELLER', paperTitle: 'Noise Removal from ECG using Modified CSMLS Algorithm', issnNo: '2249-684X', date: 'June 2014' },
      ],
      internationalConferences: [
        { srNo: 1, conferenceTitle: 'IJARSE', paperTitle: 'Classification of Brain MRI using Watershed Segmentation and Support Vector Machine', isbnNo: '978-93-87793-13-2', venue: 'Parvatibai Ganba Moze College of Engineering, Pune', durationDate: '9th-10th April 2018' },
      ],
      attendedPrograms: [
        { srNo: 1, courseTitle: 'Mission 10X', organizingInstitute: 'MGMCEN', noOfDays: '1 Week', duration: '28th Nov to 2nd dec.2011', type: 'FDP' },
        { srNo: 2, courseTitle: 'National Program on Technology Enhanced Learning', organizingInstitute: 'NIT- Warangal', noOfDays: '2', duration: '31aug to 1 Sept.2012', type: 'FDP' },
        { srNo: 3, courseTitle: 'PLC,SCADA', organizingInstitute: 'MGMCEN', noOfDays: '1 Week', duration: '14 march to 19 march2012', type: 'Workshop' },
        { srNo: 4, courseTitle: 'Signals and Systems', organizingInstitute: 'MGMCEN', noOfDays: '2 Week', duration: '2nd to 12th Jan 2014', type: 'ISTE' },
        { srNo: 5, courseTitle: 'Steps to Research', organizingInstitute: 'MGMCEN', noOfDays: '2', duration: '19-20 Sept.2014', type: 'ISTE' },
        { srNo: 6, courseTitle: 'Computer Programming', organizingInstitute: 'MGMCEN', noOfDays: '2', duration: '20thto 21th June2014', type: 'Workshop' },
        { srNo: 7, courseTitle: 'Electric Power System', organizingInstitute: 'MGMCEN', noOfDays: '1 Week', duration: '12th to 15th July2017', type: 'Workshop' },
        { srNo: 8, courseTitle: 'CMOS Mixed Signal and radio Frequency VLSI Design', organizingInstitute: 'MGMCEN', noOfDays: '1 Week', duration: '30th Jan to 4th feb.2017', type: 'ISTE-STTP' },
        { srNo: 9, courseTitle: 'Introduction to Machine Learning', organizingInstitute: 'MGMCEN', noOfDays: '2', duration: '16TH TO17TH Dec2017', type: 'Workshop' },
      ],
      responsibilities: [
        { srNo: 1, nameOfResponsibility: 'Class in-charge', year: '2012-13,18-19' },
        { srNo: 2, nameOfResponsibility: 'Central Test coordinator', year: '2012 to till date' },
        { srNo: 3, nameOfResponsibility: 'Chief Superintendent for SRTMU Exam', year: '2012,2013' },
        { srNo: 4, nameOfResponsibility: 'SRTMU Squad', year: '2014' },
        { srNo: 5, nameOfResponsibility: 'NAAC coordinator', year: '2018' },
        { srNo: 6, nameOfResponsibility: 'Internal Squad', year: '2017' },
        { srNo: 7, nameOfResponsibility: 'AICTE coordinator', year: '2013' },
        { srNo: 8, nameOfResponsibility: 'Internal Quality Assurance Cell', year: '2017-18' },
      ],
      // Other fields would be empty if not found in the HTML snippet provided for Mr. Jadhav
      nationalConferences: [],
      phdGuidance: [],
      meGuidance: [],
      conductedCourses: [],
      memberships: [],
      achievementsAwards: [],
      otherCredits: [],
    }
  },
  // Ensure all other teaching staff (from original entcConstants.js) also have 'details: {}'
  { id: 'p-p-kanadkhedkar', img: '/images/entc/faculty/Department_4-20241111185426.jpg', name: 'Ms. P. P. Kanadkhedkar', designation: 'Assistant Professor Senior', specialization: 'N/A', email: 'kanadkhedkar_pp@mgmcen.ac.in', details: {} },
  { id: 'sayed-shoaib-anwar', img: '/images/entc/faculty/Department_4-20241111185617.jpg', name: 'Mr. Sayed Shoaib Anwar', designation: 'Assistant Professor Senior', specialization: 'Wireless communication, Multicarrier communication', email: 'sayed_shoaib@mgmcen.ac.in', details: {} },
  { id: 'a-k-salve', img: '/images/entc/faculty/Department_4-20241111185459.jpg', name: 'Ms. A. K. Salve', designation: 'Assistant Professor', specialization: 'Computer Science and Engineering', email: 'salve_ak@mgmcen.ac.in', details: {} },
  { id: 'm-v-mangalagiri', img: '/images/entc/faculty/Department_4-20241111185652.jpg', name: 'Ms. M. V. Mangalagiri', designation: 'Assistant Professor', specialization: 'Embedded System Design, Wireless Communication.', email: 'mangalagiri_mv@mgmcen.ac.in', details: {} },
  { id: 'd-j-tuptewar', img: '/images/entc/faculty/Department_4-20241111185810.jpg', name: 'Mr. D. J. Tuptewar', designation: 'Assistant Professor', specialization: 'Signal and Image Processing, Embedded System Design , VLSI.', email: 'tuptewar_dj@mgmcen.ac.in', details: {} },
  { id: 'aparna-b-dalvi', img: '/images/entc/faculty/Department_4-20241111185531.jpg', name: 'Ms. Aparna B. Dalvi', designation: 'Asst. Professor', specialization: 'Digital Image Processing', email: 'dalvi_ab@mgmcen.ac.in', details: {} },
];


export const entcSupportingStaff = [
  { id: 'p-t-janke', img: '/images/entc/faculty/Department_4-20242111125234.jpg', name: 'Mr. P. T. Janke', designation: 'Lab Assistant', specialization: 'N/A', email: 'jankepiraji123@rediffmail.com' },
  { id: 's-d-hundekar', img: '/images/entc/faculty/Department_4-20140701074027.png', name: 'Mr. S. D. Hundekar', designation: 'Lab Assistant', specialization: 'N/A', email: 'shrikanthundekar@gmail.com' },
  { id: 'n-r-parikh', img: '/images/entc/faculty/Department_4-20140701075440.png', name: 'Mr. N. R. Parikh', designation: 'Lab Assistant', specialization: 'N/A', email: 'nitin.parik@yahoo.in' },
  { id: 'dhage-dhiraj-suresh', img: '/images/entc/faculty/Department_4-20242111130050.jpg', name: 'Dhage Dhiraj Suresh', designation: 'Lab Assistant', specialization: 'N/A', email: 'dhiraj.dhage37@gmail.com' },
  { id: 'jadhav-namdev-gopinath', img: '/images/entc/faculty/Department_4-20242111130401.jpg', name: 'Jadhav Namdev Gopinath', designation: 'Lab Assistant', specialization: 'N/A', email: 'N/A' }, // Email was empty in source HTML
  { id: 'bharkade-chakradhar-balaji', img: '/images/entc/faculty/Department_4-20242111130833.jpg', name: 'Bharkade Chakradhar Balaji', designation: 'Lab Assistant', specialization: 'N/A', email: 'chakradharbharkade@gmail.com' },
  { id: 'parikh-nitin-rameshwar', img: '/images/entc/faculty/Department_4-20242111131237.jpg', name: 'Parikh Nitin Rameshwar', designation: 'Lab Assistant', specialization: 'N/A', email: 'parikhnitin@mgmcen.ac.in' },
  { id: 'g-m-zele', img: '/images/entc/faculty/Department_4-20180507132807.jpg', name: 'Mr. G. M. Zele', designation: 'Peon', specialization: 'N/A', email: 'N/A' }, // Email was empty in source HTML
  { id: 'b-d-yadav', img: '/images/entc/faculty/Department_4-20140701080520.jpg', name: 'Mr. B. D. Yadav', designation: 'Peon', specialization: 'N/A', email: 'N/A' }, // Email was empty in source HTML
];

export const allEntcFacultyData = [...entcTeachingStaff, ...entcSupportingStaff];

// IMPORTANT: Update entcHeadDetails to reflect the HOD from the new faculty data
// This is necessary because the previous entcHeadDetails had a placeholder image and generic designation.
// Replace the existing entcHeadDetails in entcConstants.js with this:
export const entcHeadDetails = {
  name: 'Dr. Mrs. Kalpana C. Jondhale Paithane',
  designation: 'Professor & Head Of The Department',
  email: 'jondhale_kc@mgmcen.ac.in',
  image: '/images/entc/faculty/Department_4-20241111185142.jpg', // Path to HOD's actual image
};

// --- NEW CONSTANTS FOR ENTC LABORATORIES PAGE ---
// Placeholder data for E&TC laboratories
export const entcLaboratories = [
  { srNo: 1, id: 'digital-signal-processing-lab', name: 'Digital Signal Processing Lab', area: '60 sqm', incharge: 'Mr. V. S. Jadhav', detailsLink: 'digital-signal-processing-lab' },
  { srNo: 2, id: 'vlsi-design-lab', name: 'VLSI Design Lab', area: '75 sqm', incharge: 'Mr. D. J. Tuptewar', detailsLink: 'vlsi-design-lab' },
  { srNo: 3, id: 'analog-communication-lab', name: 'Analog Communication Lab', area: '70 sqm', incharge: 'Dr. S. L. Kotgire', detailsLink: 'analog-communication-lab' },
  { srNo: 4, id: 'microcontroller-lab', name: 'Microcontroller Lab', area: '65 sqm', incharge: 'Ms. M. V. Mangalagiri', detailsLink: 'microcontroller-lab' },
  { srNo: 5, id: 'advanced-communication-lab', name: 'Advanced Communication Lab', area: '80 sqm', incharge: 'Mr. Sayed Shoaib Anwar', detailsLink: 'advanced-communication-lab' },
  { srNo: 6, id: 'optical-fiber-communication-lab', name: 'Optical Fiber Communication Lab', area: '55 sqm', incharge: 'Ms. P. P. Kanadkhedkar', detailsLink: 'optical-fiber-communication-lab' },
  { srNo: 7, id: 'embedded-system-design-lab', name: 'Embedded System Design Lab', area: '70 sqm', incharge: 'Ms. Aparna B. Dalvi', detailsLink: 'embedded-system-design-lab' },
  { srNo: 8, id: 'project-and-research-lab', name: 'Project and Research Lab', area: '90 sqm', incharge: 'Dr. Mrs. Kalpana C. Jondhale Paithane', detailsLink: 'project-and-research-lab' },
];



// --- NEW CONSTANTS FOR ENTC DEPARTMENTAL COMMITTEES PAGE ---
export const entcDepartmentalCommittees = [
  { name: 'Departmental Advisory Board (DAB) - E&TC Department', url: '/academics/electronincs-telecommunication-engineering/committees/dab.pdf', description: 'Oversees the overall departmental strategy and development.' },
  { name: 'Program Assessment Committee (PAC) - E&TC Department', url: '/academics/electronincs-telecommunication-engineering/committees/pac.pdf', description: 'Monitors and improves program educational objectives and outcomes.' },
  { name: 'Departmental Research Committee (DRC) - E&TC Department', url: '/academics/electronincs-telecommunication-engineering/committees/drc.pdf', description: 'Promotes and guides research activities within the department.' },
  { name: 'Training & Placement Committee - E&TC Department', url: '/academics/electronincs-telecommunication-engineering/committees/tnp.pdf', description: 'Facilitates student placements and industry training.' },
  { name: 'Student Mentorship Committee - E&TC Department', url: '/academics/electronincs-telecommunication-engineering/committees/mentorship.pdf', description: 'Provides academic and personal guidance to students.' },
];

// --- UPDATED CONSTANTS FOR ENTC CURRICULUM PAGE (formerly Downloads content) ---
export const entcCurriculumSyllabus = [
  {
    category: 'SE',
    links: [
      { srNo: 1, heading: 'S.E.(CGPA)-SRTMU, Nanded', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_4-20182407162847.pdf' },
      { srNo: 2, heading: 'S.Y.-DBATU, Lonere', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_4-20182407162926.pdf' },
      { srNo: 3, heading: 'SY, TY and B.Tech - DBATU, Lonere', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_4-20201112163822.pdf' },
    ],
  },
  {
    category: 'TE',
    links: [
      { srNo: 1, heading: 'T.E.(CGPA)-SRTMU, Nanded', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_4-20182407163007.pdf' },
    ],
  },
  {
    category: 'BE',
    links: [
      { srNo: 1, heading: 'B.E.(CGPA)-SRMTU, Nanded', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_4-20182407163059.pdf' },
      { srNo: 2, heading: 'EXTC UG Final 2020-2021 Syllabus', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_4-20222012164455.pdf' },
    ],
  },
  {
    category: 'ME',
    links: [
      { srNo: 1, heading: 'M.Tech ECT 2024-25', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_4-20241811094313.pdf' },
      { srNo: 2, heading: 'M.E.-SRTMU, Nanded', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_4-20182407162732.pdf' },
      { srNo: 3, heading: 'M.Tech-DBATU, Lonere', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_4-20182407162807.pdf' },
    ],
  },
];


export const entcCurriculumOtherDownloads = [
  { srNo: 1, heading: 'Evaluation Scheme', url: 'http://mgmcen.ac.in/images/department/other/Department_4-20241611112146.pdf' },
  { srNo: 2, heading: 'News Letter July-Dec 2022', url: 'http://mgmcen.ac.in/images/department/other/Department_4-20241811103746.pdf' },
  { srNo: 3, heading: 'News Letter Jan-June 2023', url: 'http://mgmcen.ac.in/images/department/other/Department_4-20241811103809.pdf' },
  { srNo: 4, heading: 'News Letter July-Dec 2023', url: 'http://mgmcen.ac.in/images/department/other/Department_4-20241811103826.pdf' },
  { srNo: 5, heading: 'News Letter Jan-June 2024', url: 'http://mgmcen.ac.in/images/department/other/Department_4-20241811103848.pdf' },
];


// --- NEW CONSTANTS FOR ENTC DEPARTMENTAL ACTIVITY PAGE ---
export const entcDepartmentalActivities = [
  {
    id: 'yoga-meditation-aicte-lab',
    title: 'Yoga And Meditation For Improving Cognitive Abilities And Aicte Idea Lab Activities',
    type: 'pdf',
    pdf: {
      src: 'http://mgmcen.ac.in/pdf/ECT%20dept%20-%20Activity%201.pdf',
      linkText: 'Open Activity Report 1 (PDF)',
    },
  },
  {
    id: 'computer-hardware-fault-diagnosis-workshop',
    title: 'Workshop On Introduction to Computer Hardware and Fault Diagnosis',
    type: 'pdf',
    pdf: {
      src: 'http://mgmcen.ac.in/pdf/ECT%20dept%20-%20Activity%202.pdf',
      linkText: 'Open Activity Report 2 (PDF)',
    },
  },
  {
    id: 'engineers-day-celebration-report',
    title: 'Report on Engineer\'s Day Celebration',
    type: 'pdf',
    pdf: {
      src: 'http://mgmcen.ac.in/pdf/ECT%20dept%20-%20Activity%203.pdf',
      linkText: 'Open Activity Report 3 (PDF)',
    },
  },
  {
    id: 'iot-workshop',
    title: 'Workshop On “Internet of Things”',
    type: 'pdf',
    pdf: {
      src: 'http://mgmcen.ac.in/pdf/ECT%20dept%20-%20Activity%204%20IOT%20WORKSHOP-1.pdf',
      linkText: 'Open IoT Workshop Report (PDF)',
    },
  },
];

export const entcDepartmentalActivityGallery = [
  { src: 'https://www.mgmcen.ac.in/images/gallery/19102020191607-Poster-1.jpg', alt: 'Departmental Activity Poster 1' },
  { src: 'https://www.mgmcen.ac.in/images/gallery/19102020191623-Poster-2.jpg', alt: 'Departmental Activity Poster 2' },
  { src: 'https://www.mgmcen.ac.in/images/gallery/19102020191637-Poster-3.jpg', alt: 'Departmental Activity Poster 3' },
  { src: 'https://www.mgmcen.ac.in/images/gallery/19102020191652-Poster-4.jpg', alt: 'Departmental Activity Poster 4' },
];




// --- NEW CONSTANTS FOR ENTC INNOVATION IN TEACHING PAGE ---
export const entcInnovationInTeaching = {
  intro: `The Electronics & Telecommunication Engineering Department is committed to fostering an engaging and effective learning environment through innovative teaching practices. We believe in constantly evolving our pedagogical approaches to keep pace with technological advancements and enhance student learning outcomes.`,
  resources: [
    {
      id: 'innovative-practices-pdf',
      title: 'Innovative Practices For Teaching And Learning',
      type: 'pdf',
      pdf: {
        src: 'https://mgmcen.ac.in/pdf/Innovative%20Practices%20For%20Teaching%20And%20Learning%20ECT.pdf',
        linkText: 'Open Innovative Practices PDF',
        icon: '/images/filetype-pdf.svg', // Assuming this SVG is in your public/images folder
      },
    },
    {
      id: 'suggestion-iframe',
      title: 'Suggestion in Innovative Practices for Teaching and Learning',
      type: 'iframe',
      iframe: {
        src: 'https://mgmcen.ac.in/ect-suggestion.html', // Note: This iframe source needs to be accessible
        linkText: 'Open Suggestions in new tab',
      },
      description: `This section provides insights and suggestions on various innovative practices implemented or considered for enhancing teaching and learning methodologies within the department.`,
    },
  ],
  gallery: [
    // Add any specific images for innovation in teaching here if available
    // Example: { src: '/images/entc/innovation/innovative-class-1.jpg', alt: 'Interactive Classroom Session' },
  ],
};

// --- UPDATED CONSTANTS FOR ENTC CONSULTANCY PAGE ---
// Based on the provided HTML, no *specific* distinct consultancy projects/services were listed,
// so retaining a descriptive placeholder for now. If you have specific data, replace this.
export const entcConsultancyResources = [
  {
    id: 'consultancy-overview',
    title: 'Consultancy Services',
    type: 'text',
    content: 'The Electronics & Telecommunication Engineering Department offers expert consultancy services leveraging the extensive knowledge and experience of its faculty. Our services range across various domains of Electronics and Communication, including but not limited to: signal processing, embedded systems, VLSI design, wireless communication, and IoT solutions. We collaborate with industries and organizations to provide technical solutions, project guidance, and training programs. For specific consultancy inquiries, please contact the department head.',
  },
  // If specific PDFs or iframes for ENTC consultancy are later found, they can be added here.
  // Example: { id: 'consultancy-brochure', title: 'Consultancy Brochure', type: 'pdf', pdf: { src: '/pdfs/entc/consultancy-brochure.pdf', linkText: 'Download Brochure' } }
];