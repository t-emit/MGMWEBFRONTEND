// src/pages/Academic/Civil/civilConstants.js

// Define the sub-navigation tabs for the Civil Engineering department
export const civilDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/civil-engineering" },
  { name: "Vision-Mission", path: "/academics/civil-engineering/vision-mission" },
  { name: "Programmes", path: "/academics/civil-engineering/programmes" }, // Points to the new page
  { name: "Faculty Profile", path: "/academics/civil-engineering/faculty" },
  { name: "Laboratory", path: "/academics/civil-engineering/labs" },
  { name: "Training and Placement", path: "/academics/civil-engineering/training-placement" },
  { name: "Research & Publication", path: "/academics/civil-engineering/research-publication" },
  { name: "Achievements", path: "/academics/civil-engineering/achievements" },
  { name: "Departmental Activity", path: "/academics/civil-engineering/activities" },
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

// Data for Civil Engineering Programmes (NEW)
export const civilProgrammesCourses = [
  { srNo: 1, name: 'B.Tech Civil Engineering', startYear: 1984, duration: 4, type: 'Full Time', intake: 60 },
  { srNo: 2, name: 'M.Tech Structural Engineering', startYear: 2010, duration: 2, type: 'Full Time', intake: 18 },
];

// Data for Departmental Committees (NEW)
export const civilProgrammesCommittees = [
  { name: 'Click here for Course outcomes', url: 'http://mgmcen.ac.in/pdf/Course%20Outcomes_Civil%20Dept_MGMCOEN.pdf' },
  { name: 'Departmental Advisory Board (DAB)-Civil Department', url: 'http://mgmcen.ac.in/pdf/Departmental%20Advisory%20Board%20(DAB)-Civil%20Department.pdf' },
  { name: 'Program Assessment Committee (PAC)-Civil Department', url: 'http://mgmcen.ac.in/pdf/Program%20Assessment%20Committee%20(PAC)-Civil%20Department.pdf' },
];