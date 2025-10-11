// src/pages/Academic/applied_Science/ashConstants.js

/**
 * Navigation tabs for the Applied Science & Humanities department.
 * Used in every page component for consistent navigation.
 */
export const ashDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/applied-science/profile" },
  { name: "Faculty Profile", path: "/academics/applied-science/faculty" },
  { name: "Laboratory", path: "/academics/applied-science/labs" },
  { name: "Career Orientation", path: "/academics/applied-science/career-orientation" },
  { name: "Achievements", path: "/academics/applied-science/achievements" },
  { name: "Research & Publication", path: "/academics/applied-science/research-publication" },
  { name: "Downloads", path: "/academics/applied-science/downloads" },
];

/**
 * Data for the main department profile page (ASHProfilePage.jsx).
 */
export const departmentProfileData = {
  hod: {
    name: "Dr. Mrs. S. N. Dachawar",
    designation: "Head of the Dept. and Admission Incharge",
    email: "kapratwar_sb@mgmcen.ac.in",
    image: "/images/gallery/DSC_6586.jpg",
  },
  introduction: [
    "The department is multi-disciplinary in nature with faculty from diverse disciplines such as mathematics, applied physics, applied chemistry and communication skills. The curriculum is in tune with the rapid advancement in the respective domains and makes education unique. Department provides an encouraging environment to clear the fundamental concepts of problem solving ability of students so that they become technocrats of caliber.",
    "Our department plays a unique and distinctive role in an institute where ethos of science and technology prevails. It is believed that engineers and scientists are humanistic and socially derived enterprises by their nature. Hence a complete science and technology education must include social and behavioral science, where the students unite applications of scientific principles along with human, moral and social understanding.",
  ],
};

/**
 * Master list of all faculty members.
 * Used for the faculty list page (ASHFacultyProfilePage.jsx) and for looking up details
 * in faculty detail pages (ASHFacultyDetailPage.jsx) and lab/publication pages.
 */
export const allASHFacultyData = [
    { id: '1', name: 'Dr. Mrs. S. N. Dachawar', designation: 'Professor & Head Of The Department', specialization: 'Organic Chemistry', email: 'kapratwar_sb@mgmcen.ac.in', img: '/images/department/faculty/Department_1-20132512123233.jpg' },
    { id: '7', name: 'Mr. Dhananjay M. Joshi', designation: 'Asst. Professor', specialization: 'Advanced Electronics', email: 'joshi_dm@mgmcen.ac.in', img: '/images/department/faculty/Department_1-20141907015844.jpg' },
    { id: '9', name: 'Adkine Gajanan Uttamrao', designation: 'Assistant Professor Senior', specialization: 'Electrical Power System, Electrical Machines, I&C.', email: 'adkine_gu@mgmcen.ac.in', img: '/images/department/faculty/Department_1-20141807025807.jpg' },
    { id: '10', name: 'Mr. Pawde M.R.', designation: 'Assistant Professor', specialization: 'Complex Analysis', email: 'pawde_mr@mgmcen.ac.in', img: '/images/department/faculty/Department_1-20241311183811.png' },
    { id: '11', name: 'Mohd.Iqbal', designation: 'Asst. Professor', specialization: 'Magnetic properties of ferromagnetic substances.', email: 'mohd_iqbal@mgmcen.ac.in', img: '/images/department/faculty/Department_1-20141907020015.jpg' },
    { id: '16', name: 'Satish Sudhakarrao Pawar', designation: 'Asst. Professor', specialization: 'Algebraic geometry', email: 'pawar_ss@mgmcen.ac.in', img: '/images/department/faculty/Department_1-20132512181203.jpg' },
    { id: '5', name: 'Dr. Chandankumar Jaipal Somwanshi', designation: 'Asst. Professor', specialization: 'Communication Skills, Soft Skills, ELT', email: 'somwanshi_cj@mgmcen.ac.in', img: '/images/department/faculty/Department_1-20241311185449.png' },
    { id: '208', name: 'Mr.Pradip Kamaji Kharbe', designation: 'Assistant Professor', specialization: 'Physical Chemistry', email: 'pradipkharbe05@gmail.com', img: '/images/department/faculty/Department_1-20241311184622.png' },
    { id: '209', name: 'Mr. Gangadhar Raghunath Barse', designation: 'Assistant Professor', specialization: 'Electrical Power Systems', email: 'barse_gangadhar@mgmcen.ac.in', img: '/images/department/faculty/Department_1-20241311190531.png' },
    { id: '210', name: 'Dr. Vivek P Kude', designation: 'Assistant Professor', specialization: 'Optical fiber communication, Optical fiber Sensing', email: 'kude_vp@mgmcen.ac.in', img: '/images/department/faculty/Department_1-20241311191414.jpg' },
    { id: '211', name: 'DR. Kiran Panjabrao Deshmukh', designation: 'Assistant Professor', specialization: 'Language and Literature', email: 'Kavyapihu31@gmail.com', img: '/images/department/faculty/Department_1-20241911175938.jpg' },
    { id: '212', name: 'Dr. Sawale Rajendrakumar Tukaram', designation: 'Assistant Professor', specialization: 'Organic Chemistry', email: 'sawale_rajendrakumar@mgmcen.ac.in', img: '/images/department/faculty/Department_1-20242011100627.png' },
];

export const ashTeachingStaff = allASHFacultyData;

/**
 * Data for the laboratories page (ASHLaboratoryPage.jsx and ASHLaboratoryDetailPage.jsx).
 * Each object includes a unique `id` for dynamic routing.
 */
export const ashLaboratories = [
  { id: "engineering-chemistry-laboratory", srNo: 1, name: "Engineering Chemistry Laboratory", area: "73.5 sq.m.", incharge: "Dr. Sawale Rajendrakumar Tukaram" },
  { id: "engineering-physics-laboratory", srNo: 2, name: "Engineering Physics Laboratory", area: "73.5 sq.m.", incharge: "Mohd.Iqbal" },
  { id: "electrical-engineering-laboratory", srNo: 3, name: "Electrical Engineering Laboratory", area: "73.5 sq.m.", incharge: "Adkine Gajanan Uttamrao" },
  { id: "communication-skills-laboratory", srNo: 4, name: "Communication Skills Laboratory", area: "65.07 sq. m", incharge: "Dr. Chandankumar Jaipal Somwanshi" },
];

/**
 * Data for the career orientation page (ASHCareerOrientationPage.jsx).
 */
export const careerOrientationData = {
    title: "Career Orientation",
    introduction: "The Applied Science & Humanities department plays a crucial role in shaping the foundational skills of engineering students, preparing them for the diverse career paths ahead. Our orientation programs are designed to provide clarity, guidance, and the necessary skills for a successful professional journey.",
    sections: [
      { title: "Foundation for Specialization", content: "We provide a strong grounding in fundamental sciences and mathematics, which is essential for success in any engineering discipline. Our curriculum helps students make informed decisions about their future specialization by giving them a broad perspective of engineering principles.", icon: "M3 2l2 3h14l2-3H3zm3 4v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2z" },
      { title: "Skill Development", content: "Beyond technical knowledge, we focus on developing critical soft skills. The Communication Skills lab and related activities enhance language proficiency, presentation skills, and professional etiquette, which are highly valued in the industry.", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z" },
      { title: "Guidance for Higher Studies", content: "Faculty members guide students on various opportunities for higher education, including postgraduate degrees (M.Tech, M.S.) and research programs. We provide information and support for competitive examinations like GATE, GRE, and others.", icon: "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" },
      { title: "Industry Awareness", content: "Through guest lectures and workshops, we introduce first-year students to various industry sectors where engineers play a vital role. This early exposure helps them understand the practical applications of their studies and align their interests with potential career tracks.", icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" },
    ],
};

/**
 * Data for the achievements page (ASHAchievementPage.jsx).
 */
export const ashAchievements = [
  {
    year: '2024-25',
    entries: [
      { srNo: 1, name: 'Swami Rohan Shankar (B.Tech Civil)', activity: 'Selected as a member of the Dr. Babasaheb Technological University team which participated in the All India Inter University Yoga (Rhythmic)-Men Tournament', heldAt: 'KIIT, Bhubaneswar, Odisha', prize: 'Participation' },
      { srNo: 2, name: 'Project Group-1 (Kshirsagar Sakshi, Garad Pranita, Birewar Omkar, Eklare Shailesh)', activity: 'Received a letter of appreciation from a Chairperson, Unnat Bharat Abhiyan, IIT Bombay, for a “Field-Based Project with Aid of GIS” on Watershed Management.', heldAt: 'Alegaon Village, Nanded District, Maharashtra', prize: 'Letter of Appreciation' },
    ],
  },
  // Add more achievements here
];

/**
 * Data for the research and publications page (ASHResearchPublicationPage.jsx).
 */
export const ashResearchPublicationsSummary = [
    { label: "International refereed Journals", count: 3, anchor: "international-journals" },
    { label: "National Journals", count: 4, anchor: "national-journals" },
    { label: "International Conferences", count: 4, anchor: "international-conferences" },
    { label: "National Conferences", count: 4, anchor: "national-conferences" },
];

export const ashResearchPublications = [ /* ... Full research data from previous steps ... */ ];

/**
 * Data for the downloads page (ASHDownloadsPage.jsx).
 */
export const ashDownloadsData = [
    {
        id: 'syllabus',
        title: 'Syllabus',
        files: [
            { srNo: 1, heading: 'First Year B.Tech Syllabus (All Branches)', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_2-20201509124547.pdf' },
        ],
    },
    { id: 'assignments', title: 'Assignments', files: [] },
    { id: 'resource-material', title: 'Resource Material', files: [] },
    { id: 'other', title: 'Other Downloads', files: [] },
];