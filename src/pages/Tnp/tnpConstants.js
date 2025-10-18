// src/pages/TNP/tnpConstants.js

/**
 * =================================================================
 * MASTER DATA FILE FOR THE TRAINING & PLACEMENT (T&P) CELL
 * =================================================================
 * This file contains all data for every T&P page.
 * Ensure your image folder structure in `public/images/` matches the paths used below.
 */

// =================================================================
// 1. NAVIGATION (Used on all T&P pages)
// =================================================================
export const tnpTabs = [
  { name: "T&P Profile", path: "/academics/training-placement/profile" },
  { name: "Faculty Profile", path: "/academics/training-placement/faculty-profile" },
  { name: "Major Recruiters", path: "/academics/training-placement/major-recruiters" },
  { name: "Training & Internships", path: "/academics/training-placement/training-programs" },
  { name: "Career Counselling", path: "/academics/training-placement/career-counselling" },
  { name: "Placement Achievements", path: "/academics/training-placement/achievements" },
  { name: "Gallery", path: "/academics/training-placement/gallery" },
];

// =================================================================
// 2. T&P PROFILE PAGE DATA
// =================================================================
export const tnpProfileData = {
  tpo: {
    name: 'Mr. Shivprasad Titare',
    designation: 'Asst. Professor and TPO',
    email: 'tpo@mgmcen.ac.in',
    image: '/images/tpo/tpo-profile.png' 
  },
  introduction: [
    "Training & Placement Cell has an important role to play in a student’s future. This cell continuously strives to help students in pursuing their career goals by acquiring employment-seeking skills and ultimately to attain desired employment. This is accomplished through building a strong partnership amongst students, alumni, faculty-members and industries.",
    "MGM’s COE follows centralized placement activity which gives each branch equal opportunity to grow for sustained excellence in career through training & placement. Towards this, a Training and Placement Cell has been established with the following major objectives.",
  ],
  vision: "To be one of the leading Institutions for Engineering education developing proficient Engineers with global acceptance in the service of mankind.",
  mission: [
    "Providing quality Engineering education to cater the needs of industry and society.",
    "Developing globally competent Engineers having ability to solve real-life problems.",
    "Inculcating professionalism, teamwork, research, innovation, and entrepreneurship.",
    "Fostering collaboration with industry, academia, and research organizations.",
    "Imparting employability skills and nurturing leadership qualities with ethical values.",
  ],
  objectives: [
    "To establish a strong industry connect in order to provide internship and placement opportunities.",
    "To train students on aptitude, soft skills and technical skills as per industry demands.",
    "To groom students with proper goal setting and create awareness regarding future career options.",
  ],
};

// =================================================================
// 3. FACULTY PROFILE PAGE DATA
// =================================================================
export const tnpFaculty = [
  { name: 'Dr. Geeta S. Lathkar', designation: 'Director', specialization: 'Director', email: 'director@mgmcen.ac.in' },
  { name: 'Dr. S. L. Kotgire', designation: 'Vice-Principal', specialization: 'Vice-Principal', email: 'kotgire_sl@mgmcen.ac.in' },
  { name: 'Dr. A. M. Rajurkar', designation: 'Head, Department of CSE', specialization: 'Department Head', email: 'rajurkar_am@mgmcen.ac.in' },
  { name: 'Dr. M. G. Harkare', designation: 'Head, Department of Mech Engg', specialization: 'Department Head', email: 'harkare_mg@mgmcen.ac.in' },
  { name: 'Dr. K. P. Jondhale', designation: 'Head, Department of ETC', specialization: 'Department Head', email: 'jondhale_kc@mgmcen.ac.in' },
  { name: 'Mr. S. A. Hashmi', designation: 'Head, Department of IT', specialization: 'Department Head', email: 'hashmi_sa@mgmcen.ac.in' },
  { name: 'Mr. A. K. Hashmi', designation: 'Head, Department of Civil Engg', specialization: 'Department Head', email: 'hashmi_arshad@mgmcen.ac.in' },
  { name: 'Shivprasad Titare', designation: 'Training & Placement Officer', specialization: 'TPO', email: 'tpo@mgmcen.ac.in' },
  { name: 'Mohd. Aijaz Ahmed', designation: 'T&P Coordinator, CSE', specialization: 'Coordinator', email: 'mohd_aijaz@mgmcen.ac.in' },
  { name: 'Mr. R. R. Alurwad', designation: 'T&P Coordinator, Civil Engg', specialization: 'Coordinator', email: 'alurwad_rr@mgmcen.ac.in' },
  { name: 'Mr. C. V. Bandela', designation: 'T&P Coordinator, Mech Engg', specialization: 'Coordinator', email: 'bandela_cv@mgmcen.ac.in' },
  { name: 'Mr. D. J. Tuptewar', designation: 'T&P Coordinator, ETC', specialization: 'Coordinator', email: 'tuptewar_dj@mgmcen.ac.in' },
  { name: 'Ms. Nikita S. Pande', designation: 'T&P Coordinator, CSE', specialization: 'Coordinator', email: 'pande_ns@mgmcen.ac.in' },
  { name: 'Mr. R. G. Bais', designation: 'T&P Coordinator, IT', specialization: 'Coordinator', email: 'bais_riteshsingh@mgmcen.ac.in' },
  { name: 'Aditya Kulkarni', designation: 'General Secretary - TY CSE - I', specialization: 'Student Coordinator', email: 's22_kulkarni_aditya@mgmcen.ac.in' },
  // ... and the rest of the student coordinators
];

// =================================================================
// 4. MAJOR RECRUITERS PAGE DATA
// =================================================================
export const majorRecruitersData = {
  introduction: [
    "The placement record of our students is a reflection of the academic excellence, technical proficiency, and industry-relevant skills acquired throughout their education. Over the years, our students have consistently demonstrated their ability to meet the demands of the fast-paced technology sector, securing positions in leading companies across diverse industries.",
  ],
  recruitersPdf: 'https://mgmcen.ac.in/trainingandplacement/Upadted%20Recruiters%20File.pdf',
  prominentRecruitersImage: { src: '/images/tnp/recruiters/tandp-abc4.jpg', alt: 'Prominent Recruiter Logos' },
  glanceImages: [
    { src: '/images/tnp/recruiters/tandp-abc5.jpg', alt: 'Placements at a Glance 1' },
    { src: '/images/tnp/recruiters/tandp-abc6.jpg', alt: 'Placements at a Glance 2' },
  ],
};

// =================================================================
// 5. TRAINING & INTERNSHIPS PAGE DATA
// =================================================================
export const tnpTrainingData = [
  { id: 'internship', title: 'Internship Information', type: 'pdf', url: 'https://mgmcen.ac.in/pdf/Internship.pdf' },
  { id: 'training', title: 'Training Details', type: 'pdf', url: 'https://mgmcen.ac.in/pdf/Training.pdf' },
  { id: 'training-programs-ay', title: 'Training Programs (AY 2023-25)', type: 'pdf', url: 'https://mgmcen.ac.in/trainingandplacement/All/Training%20Programs%20AY%202024-25%20and%202023-24.pdf' },
  { id: 'mous', title: 'MOUs', type: 'pdf', url: 'https://mgmcen.ac.in/trainingandplacement/pdf/Mous%20List%20for%20Website.pdf' },
  { id: 'placed-students', title: 'List of Placed Students', type: 'links', links: [
      { year: '2023-24', url: 'https://mgmcen.ac.in/pdf/Placements%202023-24%20(1).pdf' },
      { year: '2022-23', url: 'https://mgmcen.ac.in/pdf/Placements%202022-23.pdf' },
      { year: '2021-22', url: 'https://mgmcen.ac.in/pdf/Placements%202021-22%20(1).pdf' },
      { year: '2020-21', url: 'https://mgmcen.ac.in/pdf/Placements%202020-21.pdf' },
    ],
  },
];

// =================================================================
// 6. CAREER COUNSELLING PAGE DATA
// =================================================================
export const careerCounsellingData = {
  title: "Career Counselling Centre",
  introduction: "Institute gives due importance to career counselling and has made available a Career Counselling Centre in the Training and Placement Cell. A team of faculty members from each department, along with the T&P Committee, looks into effective career guidance for the students.",
  mainObjectives: [
    "Create awareness of opportunities and options after graduation for placement and higher studies.",
    "Help students set their goals based on their interests (Placement, Higher Education, and Entrepreneurship).",
  ],
  higherStudies: {
    title: "Counselling for Higher Studies",
    description: "It primarily focuses on guiding students to choose an appropriate career path, counseling for higher studies (GATE, GRE), competitive exam preparation, Defense Services, and entrepreneurship.",
    points: [ "Counselling for Higher Studies (GATE/GRE, GMAT, etc.)", "Conducted Mock tests for GATE exam.", "Counselling for Entrepreneurship.", "Regular counselling by distinguished alumni working in defence services." ],
  },
  guidanceActivities: {
    title: "Career Guidance Activities",
    activities: [
      { description: "Awareness program 'the IPEV ROAD DRIVE' by the INDIAN AIR FORCE for creating awareness and counselling for defence services.", images: [ { src: "/images/tnp/counselling/img-tp-img-cc-1.jpg", alt: "Indian Air Force Session 1" }, { src: "/images/tnp/counselling/img-tp-img-cc-2.jpg", alt: "Indian Air Force Session 2" } ], caption: "Awareness and counselling session by Indian Air Force on 18th March, 2022", },
      { description: "Expert talk on 'Innovation and Entrepreneurship Mindset' by Dr. Dipan Sahu, Innovation Ambassador, MOE's Innovation Cell.", images: [ { src: "/images/tnp/counselling/img-tp-img-cc-3.jpg", alt: "Dr. Dipan Sahu Session 1" }, { src: "/images/tnp/counselling/img-tp-img-cc-4.jpg", alt: "Dr. Dipan Sahu Session 2" } ], caption: "Expert Talk by Dr. Dipan Sahu on 23rd Feb, 2023.", },
    ],
  },
  counsellingPdf: "https://mgmcen.ac.in/carrer-council/Career%20Counseling%20Table%20for%20Website%20(1).pdf",
};

// =================================================================
// 7. PLACEMENT ACHIEVEMENTS PAGE DATA
// =================================================================
export const tnpAchievementsData = [
  { year: "2023-24", image: "/images/tnp/achievements/high-package-2023-24.jpg", alt: "High Package Placements for 2023-24" },
  { year: "2022-23", image: "/images/tnp/achievements/high-package-2022-23.jpeg", alt: "High Package Placements for 2022-23" },
  { year: "2021-22", image: "/images/tnp/achievements/high-package-2021-22.jpg", alt: "High Package Placements for 2021-22" },
];

// =================================================================
// 8. T&P GALLERY PAGE DATA
// =================================================================
export const tnpGalleryData = [
  { src: '/images/tnp/gallery/7-1-op.jpg', alt: 'T&P Gallery Image 1', caption: 'Campus Placement Drive Event' },
  { src: '/images/tnp/gallery/7-2-op.jpg', alt: 'T&P Gallery Image 2', caption: 'Students during a company presentation' },
  { src: '/images/tnp/gallery/8-op.jpg', alt: 'T&P Gallery Image 3', caption: 'Pre-placement talk with industry experts' },
  { src: '/images/tnp/gallery/9-op.jpg', alt: 'T&P Gallery Image 4', caption: 'Successful candidates group photo' },
];