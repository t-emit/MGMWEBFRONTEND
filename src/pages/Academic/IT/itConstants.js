// src/pages/Academics/InformationTechnology/itConstants.js

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
];

// New data structure specifically for the Curriculum page
export const itCurriculumData = {
    syllabus: [
        {
            yearSection: "SE",
            files: [
                { srNo: 1, heading: "SY IT A", link: "http://mgmcen.ac.in/images/department/syllabus/it/sy_it_a.pdf" },
                { srNo: 2, heading: "SY IT B", link: "http://mgmcen.ac.in/images/department/syllabus/it/sy_it_b.pdf" },
            ]
        },
        {
            yearSection: "TE",
            files: [
                { srNo: 1, heading: "TY IT A", link: "http://mgmcen.ac.in/images/department/syllabus/it/ty_it_a.pdf" },
                { srNo: 2, heading: "TY IT B", link: "http://mgmcen.ac.in/images/department/syllabus/it/ty_it_b.pdf" },
            ]
        },
        {
            yearSection: "BE",
            files: [
                { srNo: 1, heading: "B.Tech IT DBATU", link: "http://mgmcen.ac.in/images/department/syllabus/it/btech_it_dbatu.pdf" },
                { srNo: 2, heading: "B.Tech IT B", link: "http://mgmcen.ac.in/images/department/syllabus/it/btech_it_b.pdf" },
            ]
        },
        {
            yearSection: "ME",
            files: [
                { srNo: 1, heading: "ME/M.Tech IT", link: "http://mgmcen.ac.in/images/department/syllabus/it/metech_it.pdf" },
                { srNo: 2, heading: "M.Tech IT DBATU Syllabus", link: "http://mgmcen.ac.in/images/department/syllabus/it/metech_it_dbatu.pdf" },
            ]
        },
        {
            yearSection: "FE",
            files: [
                { srNo: 1, heading: "Information-Technology-Syllabus", link: "http://mgmcen.ac.in/images/department/syllabus/it/fe_it_syllabus.pdf" },
            ]
        }
    ]
};


export const itResearchData = {
    introduction: `The Department of Information Technology is committed in developing a research environment and encouraging innovation. The Department has been recognized as a research centre by Swami Ramanand Teerth Marathwada University, Nanded and Dr. Babasaheb Ambedkar Technological University, Lonere. Research scholars and faculty members work on a wide array of research projects, covering areas such as Data Science, Cloud Computing, Network Security, IoT, and Artificial Intelligence. Our department has a strong record of publishing research papers in esteemed national and international journals and conferences. These publications reflect the dedication of our faculty and research scholars to the emerging fields of research.`,
    summary: [
        { label: "Total Number of Papers Published in International/National Journals", value: "195" },
        { label: "Total Number of Papers Published in International/National Conferences", value: "120" },
    ],
    researchGrantsIntro: `Despite these research publications, faculty members of our Department received research grants from esteemed organizations like AICTE, BRNS, AMUPMDC etc. These grants provide financial support to carry out innovative research projects, enabling faculty members and research scholars to explore advanced areas of Information Technology. List of Research Guides, Research Grants and Research Publications (last 5 years) are given in following tables - `,
    
    researchGuides: [
        { srNo: 1, name: "Dr. XYZ", phdAwarded: "05", ongoing: "02" },
        { srNo: 2, name: "Dr. ABC", phdAwarded: "03", ongoing: "04" },
    ],
    
    researchGrants: [
        {
            srNo: 1,
            projectTitle: `“Development of a Secure and Scalable IoT Framework for Smart Cities”`,
            fundingAgency: "AICTE, New Delhi",
            grantReceived: "Rs.25,00,000/-",
            investigators: `Dr. ABC and Dr. XYZ`,
            yearOfSanction: "2023-24",
            duration: "3"
        },
        {
            srNo: 2,
            projectTitle: `“AI-Powered Predictive Analytics for Network Threat Detection”`,
            fundingAgency: "DST, Govt. of India",
            grantReceived: "Rs.30,00,000/-",
            investigators: `Dr. PQR`,
            yearOfSanction: "2022-23",
            duration: "3"
        },
    ],
    
    journalPublications: [
        {
            srNo: 1,
            title: `A Novel Approach for Secure Data Transmission in Wireless Sensor Networks`,
            authors: `Author A & Author B`,
            journalName: `International Journal of Network Security`,
            year: "2024",
            issn_doi: `ISSN: 1816-353X`
        },
        {
            srNo: 2,
            title: `Efficient Task Scheduling in Cloud Computing using a Hybrid Metaheuristic Algorithm`,
            authors: `Author C & Author D`,
            journalName: `Journal of Cloud Computing: Advances, Systems and Applications`,
            year: "2023",
            issn_doi: `https://doi.org/10.1186/s13677-023-00432-5`
        },
    ],
    
    conferencePublications: [
        {
            srNo: 1,
            facultyName: `Dr. ABC`,
            title: `A Review on Machine Learning Techniques for Intrusion Detection Systems`,
            conferenceName: `International Conference on Information and Communication Technology (ICICT) 2023`,
            year: "2023",
            isbn: `ISBN 978-1-6654-2577-3`,
            publisher: `IEEE`
        },
        {
            srNo: 2,
            facultyName: `Dr. XYZ`,
            title: `Big Data Analytics in Healthcare: A Survey`,
            conferenceName: `International Conference on Big Data and Smart Computing (BigComp) 2022`,
            year: "2022",
            isbn: `ISBN: 978-1-6654-2578-0`,
            publisher: `IEEE`
        },
    ],
};