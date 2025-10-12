// src/pages/Academic/applied_Science/ashConstants.js

/**
 * =================================================================
 * SINGLE SOURCE OF TRUTH FOR APPLIED SCIENCE & HUMANITIES DEPARTMENT
 * =================================================================
 * This file contains all the data needed for every page in this section.
 */

// =================================================================
// NAVIGATION
// =================================================================
export const ashDepartmentTabs = [
  // { name: "DEPT Profile", path: "/academics/applied-science/profile" },
  { name: "Faculty Profile", path: "/academics/applied-science/faculty" },
  { name: "Laboratory", path: "/academics/applied-science/labs" },
  { name: "Career Orientation", path: "/academics/applied-science/career-orientation" },
  { name: "Achievements", path: "/academics/applied-science/achievements" },
  { name: "Research & Publication", path: "/academics/applied-science/research-publication" },
  { name: "Downloads", path: "/academics/applied-science/downloads" },
];

// =================================================================
// FACULTY DATA (MASTER LIST)
// =================================================================
export const allASHFacultyData = [
  { id: '1', name: 'Dr. Mrs. S. N. Dachawar', designation: 'Professor & Head Of The Department', specialization: 'Organic Chemistry', email: 'kapratwar_sb@mgmcen.ac.in', img: '/images/applied_Science/dachawar.png' },
  { id: '7', name: 'Mr. Dhananjay M. Joshi', designation: 'Asst. Professor', specialization: 'Advanced Electronics', email: 'joshi_dm@mgmcen.ac.in', img: '/images/applied_Science/joshi.png' },
  { id: '9', name: 'Adkine Gajanan Uttamrao', designation: 'Assistant Professor Senior', specialization: 'Electrical Power System', email: 'adkine_gu@mgmcen.ac.in', img: '/images/applied_Science/adkine.png' },
  { id: '10', name: 'Mr. Pawde M.R.', designation: 'Assistant Professor', specialization: 'Complex Analysis', email: 'pawde_mr@mgmcen.ac.in', img: '/images/applied_Science/pawade.png' },
  { id: '11', name: 'Mohd.Iqbal', designation: 'Asst. Professor', specialization: 'Magnetic properties of ferromagnetic substances', email: 'mohd_iqbal@mgmcen.ac.in', img: '/images/applied_Science/iqbal.png' },
  { id: '16', name: 'Satish Sudhakarrao Pawar', designation: 'Asst. Professor', specialization: 'Algebraic geometry', email: 'pawar_ss@mgmcen.ac.in', img: '/images/applied_Science/pawar.png' },
  { id: '5', name: 'Dr. Chandankumar Jaipal Somwanshi', designation: 'Asst. Professor', specialization: 'Communication Skills, Soft Skills, ELT', email: 'somwanshi_cj@mgmcen.ac.in', img: '/images/applied_Science/somewanshi.png' },
  { id: '209', name: 'Mr. Gangadhar Raghunath Barse', designation: 'Assistant Professor', specialization: 'Electrical Power Systems', email: 'barse_gangadhar@mgmcen.ac.in', img: '/images/applied_Science/barse.png' },
  { id: '211', name: 'DR. Kiran Panjabrao Deshmukh', designation: 'Assistant Professor', specialization: 'Language and Literature', email: 'Kavyapihu31@gmail.com', img: '/images/applied_Science/deshmukh.png' },
  { id: '212', name: 'Dr. Sawale Rajendrakumar Tukaram', designation: 'Assistant Professor', specialization: 'Organic Chemistry', email: 'sawale_rajendrakumar@mgmcen.ac.in', img: '/images/applied_Science/sawale.png' },
  { id: '213', name: 'Ms. Raichurkar Mayuri Jayant', designation: 'Assistant Professor', specialization: 'Differential Equations', email: 'raichurkar_mayuri@mgmcen.c.in', img: '/images/applied_Science/raichurkar.png' },
  { id: '214', name: 'Mr. Kadam Krishna Bapurao', designation: 'Assistant Professor', specialization: 'Linear Algebra', email: 'Kadam_krishna@mgmcen.ac.in', img: '/images/applied_Science/kadamkrishna.png' },
  // Note: Add entries for Dr. Vivek P Kude and Mr. Pradip Kamaji Kharbe if they are active faculty
];
export const ashTeachingStaff = allASHFacultyData;

// =================================================================
// PROFILE PAGE DATA
// =================================================================
export const departmentProfileData = {
  hod: allASHFacultyData.find(f => f.id === '1'),
  introduction: [
    "The department is multi-disciplinary in nature with faculty from diverse disciplines such as mathematics, applied physics, applied chemistry and communication skills. The curriculum is in tune with the rapid advancement in the respective domains and makes education unique.",
    "Our department plays a unique and distinctive role in an institute where ethos of science and technology prevails. It is believed that engineers and scientists are humanistic and socially derived enterprises by their nature. Hence a complete science and technology education must include social and behavioral science, where the students unite applications of scientific principles along with human, moral and social understanding.",
  ],
};

// =================================================================
// LABORATORY DATA
// =================================================================
export const ashLaboratories = [
  { id: "engineering-chemistry-lab", srNo: 1, name: "Engineering Chemistry Laboratory", area: "73.5 sq.m.", incharge: "Dr. Sawale Rajendrakumar Tukaram" },
  { id: "engineering-physics-lab", srNo: 2, name: "Engineering Physics Laboratory", area: "73.5 sq.m.", incharge: "Mohd.Iqbal" },
  { id: "electrical-engineering-lab", srNo: 3, name: "Electrical Engineering Laboratory", area: "73.5 sq.m.", incharge: "Adkine Gajanan Uttamrao" },
  { id: "communication-skills-lab", srNo: 4, name: "Communication Skills Laboratory", area: "65.07 sq. m", incharge: "Dr. Chandankumar Jaipal Somwanshi" },
];

// =================================================================
// CAREER ORIENTATION DATA
// =================================================================
export const careerOrientationData = {
  title: "Career Orientation",
  content: [
    "The department provides a strong foundation that opens up various career avenues for engineering graduates.",
    "Guidance is provided for higher studies such as M.Tech, M.S., and research programs.",
    "Emphasis on communication skills and professional ethics prepares students for corporate environments.",
  ]
};

// =================================================================
// ACHIEVEMENTS DATA
// =================================================================
export const ashAchievements = [
  {
      year: 'Recent Student Achievements',
      entries: [
          { srNo: 1, name: "Swami Rohan Shankar (B.Tech Civil)", activity: "Selected as a member of the Dr. Babasaheb Technological University team which participated in the All India Inter University Yoga (Rhythmic)-Men Tournament", heldAt: "KIIT, Bhubaneswar, Odisha", prize: "Participation" },
      ]
  }
];

// =================================================================
// RESEARCH & PUBLICATION DATA - FULLY UPDATED
// =================================================================
export const ashResearchPublicationsSummary = [
  { label: "International Journals", count: 35, anchor: "international-journals" },
  { label: "National Journals", count: 4, anchor: "national-journals" },
  { label: "International Conferences", count: 10, anchor: "international-conferences" },
  { label: "National Conferences", count: 9, anchor: "national-conferences" },
];

export const ashResearchPublications = [
  {
    id: "international-journals",
    category: "Papers in International Journals",
    facultyPublications: [
      {
        facultyName: "Dr. Mrs. S. N. Dachawar",
        papers: [
          { srNo: 1, authors: "S.B.Kapratwar1, K.G.Baheti2 & S.V.Kuberkar", title: "NOVEL SYNTHESIS AND RING CLOSURE REACTIONS OF 3- HYDRAZINO 1,2,4 - TRIAZOLO (3,4-b) BENZOTHIAZOLE", journalName: "Journal Synthetic Communication", volumeNo: "44B", year: "2005" },
          { srNo: 2, authors: "K.G.Baheti1, S.B.Kapratwar2, & S.V.Kuberkar", title: "A CONVENIENT SYNTHESIS OF 2,3- SUBSTITUTED DERIVATIVES OF 4H-PYRIMIDO(2,1-b)BENZOTHIAZOLE-4 ONE", journalName: "Indian Journal of Chemistry", volumeNo: "32", issueNo: "14", year: "2002", pageRange: "2237-2243" },
          { srNo: 3, authors: "S.B.Kapratwar1, K.G.Baheti2 & S.V.Kuberkar", title: "SYNTHESIS OF 3-SUBSTITUTED 1,2,4-TRIAZOLE(3,4-b) BENZOTHIAZOLES", journalName: "Indian Journal of Heterocyclic Chemistry", volumeNo: "13", year: "2004", pageRange: "241-244" },
          { srNo: 4, authors: "M.R.Banwaskar1, S.N.Dachawar", title: "Graphene Basics and Applications", journalName: "Advance Materials Research", volumeNo: "622-623", issueNo: "623", year: "2013", pageRange: "259-262" },
        ]
      },
      {
        facultyName: "Mr. Pawde M.R.",
        papers: [
          { srNo: 1, authors: "K.L.Bondar,M.R.Pawde, A.B.Jadhao", title: "Local and Global Existance of Solutions for Summation Equations", journalName: "International Journal of Pure & Applied Sciences & Technology", year: "2012" }
        ]
      },
      {
        facultyName: "Satish Sudhakarrao Pawar",
        papers: [
          { srNo: 1, authors: "Pawar Satish", title: "Cosmological Models filled with perfect fluid and dark energy in f (R, T) Theory of Gravity.", journalName: "Prespace time Journal", volumeNo: "6", issueNo: "8", year: "2015", pageRange: "719-732" }
        ]
      },
      {
        facultyName: "Dr. Chandankumar Jaipal Somwanshi",
        papers: [
          { srNo: 1, authors: "Chandankumar Jaipal Somwanshi", title: "English in Pre-Independence and Post-Independence in India", journalName: "Literary Endeavour International Refereed Journal", volumeNo: "4", year: "2015" }
        ]
      },
      {
        facultyName: "Mr. Gangadhar Raghunath Barse",
        papers: [
          { srNo: 1, authors: "Nepali S.L, Gacche V.P, Wathore V.R, G.R. Barse", title: "Power Quality Improvement Of Grid Connected Wind Energy Using STATCOM", journalName: "JNRD - International Journal of Novel Research And Development", year: "2023" },
          { srNo: 2, authors: "Vijayatai P. Kamble, Naveen Kummar, Malu Hanmanth, Barse G.R.", title: "Magnification of Power Quality Problems By Using Dynamic Voltage Restorer", journalName: "International Journal of Innovative Research in Science, Engineering and Technology", year: "2013" },
          { srNo: 3, authors: "G.R. Barse, A.A.Bhole", title: "Analysis of Distance Protection Relay In Presence of Static Synchronous Compensator (STATCOM)", journalName: "International Journal of Electrical Engineering & Technology (IJEET)", year: "2015" },
        ]
      },
      {
        facultyName: "DR. Kiran Panjabrao Deshmukh",
        papers: [
          { srNo: 1, authors: "Dr. Kiran Panjabrao Deshmukh", title: "Depiction of Quixote’s Platonic Love for Dulcinea in Cervantes’s Don Quixote", journalName: "Ajanta", year: "Jan-Mar 2022" },
          { srNo: 2, authors: "Dr. Kiran Panjabrao Deshmukh", title: "Representation of Sancho’s Wisdom in Cervantes’s Don Quixote", journalName: "Royal", year: "Dec 2021-May 2022" },
          { srNo: 3, authors: "Dr. Kiran Panjabrao Deshmukh", title: "Contribution of Women Writer’s in Indian English Literature", journalName: "Ajanta", year: "Jan-Mar 2023" },
        ]
      },
      {
        facultyName: "Dr. Sawale Rajendrakumar Tukaram",
        papers: [
          { srNo: 1, authors: "S.D. Deosarkar, R.T. Sawale, R.V. Pinjari", title: "A volumetric, ultraacoustical study and computational study of molecular interactions in 4-aminoantipyrine-aqueous-β-cyclodextrin solutions", journalName: "Chemical Physics Impact", year: "2024" },
          { srNo: 2, authors: "S. D. Deosarkar, H. N. Pawar, R. T. Sawale, G. B. Pethe, M. P. Pawar", title: "Molar Refraction and Polarizability of Metoclopramide in {Aqueous-NaCl/LiCl} Solutions at 30oC", journalName: "Journal of Emerging Technologies and Innovative Research (JETIR)", year: "2023" },
          { srNo: 3, authors: "R. T. Sawale, et al.", title: "Volumetric and ultraacoustic approach to interaction of sodium salicylate and 4-aminoantipyrine drugs...", journalName: "World Journal of Pharmaceutical Research", year: "2023" },
          { srNo: 4, authors: "Deosarkar S.D., et al.", title: "Volumetric and viscometric studies of molecular interactions in systems containing tartaric acid...", journalName: "Journal of Molecular Liquids", year: "2021" },
          { srNo: 5, authors: "S. D. Deosarkar, et al.", title: "Volumetric and ultraacoustic properties of sodium salts of ibuprofen/diclofenac drugs...", journalName: "Journal of molecular Liquids", year: "2020" },
          { srNo: 6, authors: "A. D. Arsule, et al.", title: "Thermodynamic Behavior of Systems Containing Amino Acids in Aqueous-Lactose Solutions", journalName: "Journal of Solution Chemistry", year: "2020" },
          { srNo: 7, authors: "S.D. Deosarkar, et al.", title: "Interactions of sodium salicylate and β-cyclodextrin in water...", journalName: "Journal of molecular Liquids", year: "2020" },
          { srNo: 8, authors: "A. D. Arsule, R. T. Sawale, S. D. Deosarkar", title: "Temperature dependent volumetric and ultra acoustic studies of α-amino acids...", journalName: "Journal of molecular Liquids", year: "2019" },
          { srNo: 9, authors: "A. D. Arsule, R. T. Sawale, S. D. Deosarkar", title: "Partial molar volume and compressibility of α-amino acids...", journalName: "Journal of molecular Liquids", year: "2018" },
          { srNo: 10, authors: "A. D. Arsule, et al.", title: "Effect of disodium tartrate on partial molar volumes and compressibilities of l-serine...", journalName: "World Journal of Pharmaceutical Research", year: "2018" },
          { srNo: 11, authors: "B. D. Ridhorkar, A. D. Arsule and R. T. Sawale", title: "Electrical conductance, surface tension and acoustical properties of aqueous solutions...", journalName: "World Journal of Pharmaceutical Research", year: "2018" },
          { srNo: 12, authors: "S. D. Deosarkar, et al.", title: "Volumetric and optical properties of ACE inhibitor captopril in aqueous-alcoholic mixtures", journalName: "Journal of Taibah University for Science", year: "2017" },
          { srNo: 13, authors: "R. T. Sawale, A. D. Arsule and S. D. Deosarkar", title: "Effect of Surfactant CTAB on the Partial Molar Volumes...", journalName: "Journal of Chemical and Pharmaceutical Research", year: "2017" },
          { srNo: 14, authors: "S. D. Deosarkar, et al.", title: "Solution behavior of metoclopramide in aqueous-alcoholic solutions at 30°C", journalName: "Russian Journal of Physical Chemistry A", year: "2016" },
          { srNo: 15, authors: "R. T. Sawale, et al.", title: "Molar Refraction and Polarizability of Antiemetic drug...", journalName: "Journal of Applied Pharmaceutical Science", year: "2016" },
          { srNo: 16, authors: "S. D. Deosarkar, et al.", title: "Speed of Sound, Density and Refractive Index Data of 5-Chloro-3H-Benooxazol-2-one...", journalName: "Research Journal of Chemical sciences", year: "2016" },
          { srNo: 17, authors: "S. D. Deosarkar, et al.", title: "Density and Optical Properties of {Ciprofloxacin Hydrochloride + aqueous-ethanol} Mixtures...", journalName: "Journal of thermodynamics", year: "2016" },
          { srNo: 18, authors: "S. D. Deosarkar, et al.", title: "Solvent effects on molar refraction and polarizability...", journalName: "Journal of Chemical and Pharmaceutical Research", year: "2015" },
          { srNo: 19, authors: "S. D. Deosarkar, R. T. Sawale, T. M. Kalyankar", title: "Investigation of Volumetric and Optical Properties of Anti-Emetic Metoclopramide Hydrochloride...", journalName: "Journal of Applied Pharmaceutical Science", year: "2015" },
          { srNo: 20, authors: "R. T. Sawale, S. D. Deosarkar, and T. M. Kalyankar", title: "Concentration Dependences of Density, Viscosity, Refractive Index...", journalName: "Russian Journal of Physical Chemistry A", year: "2015" },
          { srNo: 21, authors: "S. D. Deosarkar, A. R. Ban, P. D. Tawde, and R. T. Sawale", title: "Partial Molar Volumes and Viscous Properties of Glycine–Aqueous Urea Solutions...", journalName: "Russian Journal of Physical Chemistry A", year: "2015" },
          { srNo: 22, authors: "S. D. Deosarkar, R. T. Sawale, P. D. Tawde, T. M. Kalyankar", title: "Partial molar volumes of isoniazid solutions in aqueous-ethanol mixtures...", journalName: "Russian Journal of Physical Chemistry A", year: "2015" },
          { srNo: 23, authors: "S. D. Deosarkar, A. R. Ban, P. D. Tawde and R. T. Sawale", title: "Molecular interaction studies in ternary glycine + (aqueous thiourea) solutions...", journalName: "International Journal Chemical Science", year: "2014" },
          { srNo: 24, authors: "S. D. Deosarkar, et al.", title: "Volumetric, viscometric and refractometric behavior of glycine + {aqueous isoniazid} ternary mixtures...", journalName: "Journal of Chemical and Pharmaceutical Research", year: "2014" },
          { srNo: 25, authors: "S. D. Deosarkar, R. T. Sawale, A. R. Ban and A. L. Puyad", title: "Densities, refractive indices and apparent molar volumes of potassium hexacyanoferrate (II)...", journalName: "Journal of Chemical and Pharmaceutical Research", year: "2014" },
        ]
      },
    ]
  },
  {
    id: "national-journals",
    category: "Papers in National Journals",
    facultyPublications: [
        { facultyName: "Mr. Pawde M.R.", papers: [ { srNo: 1, authors: "K.L.Bondar, M.R. Pawde", title: "On some summation inequalities", journalName: "Journal of contemporary Applied mathematics", volumeNo: "1", pageRange: "1 to 5", year: "2011" } ] },
        { facultyName: "Dr. Chandankumar Jaipal Somwanshi", papers: [ { srNo: 1, authors: "Dr. Chandankumar Jaipal Somwanshi", title: "Problems of English language teachers in Arts colleges in Marathwada region.", journalName: "Indian Literature and Culture Today", volumeNo: "2", issueNo: "9", year: "2015" } ] },
        { facultyName: "Dr. Sawale Rajendrakumar Tukaram", papers: [ { srNo: 1, authors: "R. T. Sawale, A. D. Arsule. A. V. Pawade and S. D. Deosarkar.", title: "Volumetric and Acoustical Data on {Promethazine Hydrochloride + Water + Glycine} Ternary System.", journalName: "Ajanta- ISSN 2277-5730", volumeNo: "VIII", pageRange: "122-129", year: "2019" } ] },
    ]
  },
  {
    id: "international-conferences",
    category: "Papers in International Conferences",
    facultyPublications: [
        { facultyName: "Dr. Mrs. S. N. Dachawar", papers: [ { srNo: 1, title: "NOVEL SYNTHESIS AND RING CLOSURE REACTIONS...", conferenceName: "The International Conference", heldAt: "Jaipur", duration: "15th-18th Dec 2000" }, { srNo: 2, title: "Synthesis and Antimicrobial Activity of Heterocycles...", conferenceName: "International Symposium on Drug Discovery", heldAt: "Shivaji University, Kolhapur", duration: "23rd-25th Jan 2003" } ] },
        { facultyName: "Dr. Chandankumar Jaipal Somwanshi", papers: [ { srNo: 1, authors: "Dr. S.B. Thorat, S.N. Kokate, C.J. Somwanshi", title: "Impact of Information Technology", conferenceName: "The First International Conference in Emerging Trends in Science, Technology & Management", heldAt: "Singapore", duration: "2013" } ] },
        { facultyName: "Mr. Gangadhar Raghunath Barse", papers: [ { srNo: 1, authors: "G.R. Barse, A.A.Bhole", title: "Impact of Distance Protection Relay In Presence of STATCOM", conferenceName: "SWICON 2015", heldAt: "Mumbai", duration: "26th & 27th Nov, 2015" } ] },
        { facultyName: "DR. Kiran Panjabrao Deshmukh", papers: [ { srNo: 1, authors: "Dr. Kiran Panjabrao Deshmukh", title: "Quixotic Elements in Moor’s Last Sigh", conferenceName: "International Interdisciplinary Conference on Folk Literature (FLGP-2016)", heldAt: "Nanded", duration: "28th-30th Jan, 2016" } /* ... and 2 more */ ] },
        { facultyName: "Dr. Sawale Rajendrakumar Tukaram", papers: [ { srNo: 1, authors: "Sawale R.T., Deosarkar S.D. & Tawade P.D", title: "Analysis of volumetric & viscometric behavior...", conferenceName: "International conference on futuristic Materials (ICFM-2015)", heldAt: "Nagpur", duration: "5th-7th Feb 2015" } /* ... and 1 more */ ] },
    ]
  },
  {
    id: "national-conferences",
    category: "Papers in National Conferences",
    facultyPublications: [
        { facultyName: "Adkine Gajanan Uttamrao", papers: [ { srNo: 1, authors: "Adkine Gajanan Ghorpade Satish J.", title: "Power quality disturbances, harmonics and its mitigation techniques", conferenceName: "NCAPS-2012", heldAt: "KKWIE&R, Nashik", duration: "3 days" }, { srNo: 2, authors: "Adkine Gajanan", title: "Energy conservation", conferenceName: "Hertz-2002", heldAt: "COE Pune", duration: "2 days" } ] },
        { facultyName: "DR. Kiran Panjabrao Deshmukh", papers: [ { srNo: 1, authors: "Dr. Kiran Panjabrao Deshmukh", title: "21st Century Indian English Literature", conferenceName: "National Conference on Indian English Literature in the 21st Century", heldAt: "Pune", duration: "4th March 2016" } /* ... and 2 more */ ] },
        { facultyName: "Dr. Sawale Rajendrakumar Tukaram", papers: [ { srNo: 1, authors: "R. T. Sawale, et al.", title: "Volumetric and Acoustical Data on {Promethazine Hydrochloride + Water + Glycine} Ternary System.", conferenceName: "National Conference on Recent Advances in Science and Technology", heldAt: "GS Gawande Mahavidyalaya Umarkhed", duration: "5th-6th March 2019" } /* ... and 3 more */ ] },
    ]
  }
];

// =================================================================
// DOWNLOADS DATA
// =================================================================
export const ashDownloadsData = [
  { id: 'syllabus', title: 'Syllabus', files: [] },
  { id: 'assignments', title: 'Assignments', files: [] },
  { id: 'resource-material', title: 'Resource Material', files: [] },
  { id: 'other', title: 'Other Downloads', files: [] },
];