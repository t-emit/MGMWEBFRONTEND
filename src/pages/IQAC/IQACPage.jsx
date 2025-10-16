// src/components/IQAC.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Utility component to render a link, handling internal/external and special cases
const UniversalLink = ({ url, children, className = "" }) => {
  const isExternal = url.startsWith('http') || url.endsWith('.pdf') || url.endsWith('.xlsx') || url.endsWith('.rar') || url.endsWith('.zip');
  const isPlaceholder = url === '#' || url.startsWith('javascript:void(0)');

  if (isPlaceholder) {
    return (
      <span className={`text-gray-600 cursor-default ${className}`}>
        {children}
      </span>
    );
  } else if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={`text-blue-700 hover:underline ${className}`}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={url} className={`text-blue-700 hover:underline ${className}`}>
        {children}
      </Link>
    );
  }
};

// Mock Data for IQAC page - "NAAC Cycle 1 Information" has been REMOVED.
const iqacData = [
  {
    title: "IQAC Documents",
    id: "iqac-docs",
    sections: [
      {
        subTitle: "IQAC Cell",
        type: "single-link",
        link: { name: "IQAC Cell (PDF)", url: "http://mgmcen.ac.in/docs/IQAC%20Cell%20All%20Merged.pdf" }
      },
      {
        subTitle: "AQAR 2023-24",
        id: "aqar-2023-24",
        type: "nested-list",
        items: [
          {
            name: "Criteria 1",
            type: "category",
            links: [
              { name: "Feedback Analysis 2023-24", url: "https://mgmcen.ac.in/pdf/Feedback%20%20Analysis%202023-24.pdf" },
            ]
          },
          {
            name: "Criteria II",
            type: "category",
            links: [
              { name: "2.3.1", url: "https://mgmcen.ac.in/pdf/2.3.1_StudentCentric_2023-24_FileUploaded%20(1).pdf" },
              { name: "2.3.2", url: "https://mgmcen.ac.in/pdf/2.3.2_ICT%20enable%20tools_FileUploaded.pdf" },
              { name: "2.3.3", url: "https://mgmcen.ac.in/pdf/2.3.3_Number_of_Mentors.pdf" },
            ]
          },
          {
            name: "Criteria III",
            type: "category",
            links: [
              { name: "3.1.1 - Research Grants", url: "https://mgmcen.ac.in/pdf/3.1.1%20-%20Research%20Grants.pdf" },
              { name: "3.1.3 - Seminars and Workshops", url: "https://mgmcen.ac.in/pdf/3.1.3%20-%20Seminars%20and%20Workshops.pdf" },
              { name: "3.1.3 - Seminars/conferences/workshops", url: "https://mgmcen.ac.in/pdf/3.1.3%20-%20Seminarsconferencesworkshops.pdf" },
              { name: "3.2.1 - Research Papers", url: "https://mgmcen.ac.in/pdf/3.2.1%20-%20Research%20Papers.pdf" },
              { name: "3.2.2 - Conference Papers", url: "https://mgmcen.ac.in/pdf/3.2.2%20-%20Conference%20Papers.pdf" },
            ]
          },
          { name: "Criteria IV", type: "category", links: [{ name: "Criteria IV", url: "#" }] },
          { name: "Criteria V", type: "category", links: [{ name: "Criteria V", url: "#" }] },
          { name: "Criteria VI", type: "category", links: [{ name: "Criteria VI", url: "#" }] },
          { name: "Criteria VII", type: "category", links: [{ name: "Criteria VII", url: "#" }] },
        ]
      },
      {
        subTitle: "Annual Quality Assurance Reports (AQAR)",
        id: "aqar-reports",
        type: "nested-list",
        items: [
          { name: "AQAR 2023-24", url: "http://mgmcen.ac.in/docs/AQAR%202023-24.pdf" },
          { name: "AQAR 2022-23", url: "http://mgmcen.ac.in/docs/AQAR%202022.23.pdf" },
          { name: "AQAR 2021-22", url: "http://mgmcen.ac.in/docs/AQAR%202021-22.pdf" },
          { name: "AQAR 2020-21", url: "http://mgmcen.ac.in/docs/AQAR%202020-21.pdf" },
          { name: "AQAR 2019-20", url: "http://mgmcen.ac.in/docs/AQAR%202019-20.pdf" },
          { name: "AQAR 2018-19", url: "http://mgmcen.ac.in/docs/AQAR_2018-19.pdf" },
          { name: "AQAR 2017-18", url: "http://mgmcen.ac.in/docs/AQAR%202017-18.pdf" },
        ]
      },
      {
        subTitle: "Minutes of Meetings",
        id: "minutes-of-meetings",
        type: "nested-list",
        items: [
          { name: "IQAC Meeting No. 1", url: "http://mgmcen.ac.in/docs/IQAC%20MEETING%20No.%2001.pdf" },
          { name: "IQAC Meeting No. 2", url: "http://mgmcen.ac.in/docs/IQAC%20MEETING%20No.%2002.pdf" },
          { name: "IQAC Meeting No. 3", url: "http://mgmcen.ac.in/docs/IQAC%20MEETING%20No.%2003.pdf" },
          { name: "IQAC Meeting No. 4", url: "http://mgmcen.ac.in/docs/IQAC%20MEETING%20No.%2004.pdf" },
          { name: "IQAC Meeting No. 5", url: "http://mgmcen.ac.in/docs/IQAC%20MEETING%20No.%2005.pdf" },
          { name: "IQAC Meeting No. 6", url: "http://mgmcen.ac.in/docs/IQAC%20Meeting%20No.%206.pdf" },
          { name: "IQAC Meeting No. 7", url: "http://mgmcen.ac.in/docs/IQAC_Meeting_No_7.pdf" },
          { name: "IQAC Meeting No. 8", url: "http://mgmcen.ac.in/docs/IQAC%20Meeting%20No.8.pdf" },
          { name: "IQAC Meeting No. 9", url: "http://mgmcen.ac.in/docs/IQAC%20Meeting%20No.9.pdf" },
          { name: "IQAC Meeting No. 10", url: "http://mgmcen.ac.in/docs/10_updated_merged.pdf" },
          { name: "IQAC Meeting No. 11", url: "http://mgmcen.ac.in/docs/11_updated_merged.pdf" },
          { name: "IQAC Meeting No. 12", url: "http://mgmcen.ac.in/docs/IQAC_Meeting_No.12.pdf" },
          { name: "IQAC Meeting No. 13", url: "http://mgmcen.ac.in/docs/IQAC%20Meeting%20No.%2013.pdf" },
          { name: "IQAC Meeting No. 14", url: "http://mgmcen.ac.in/docs/IQAC%20Meeting%20No.%2014.pdf" },
          { name: "IQAC Meeting No. 15", url: "http://mgmcen.ac.in/docs/Meeting%20No.15.pdf" },
          { name: "IQAC Meeting No. 16", url: "http://mgmcen.ac.in/docs/Meeting%20No.16.pdf" },
          { name: "IQAC Meeting No. 17", url: "http://mgmcen.ac.in/docs/Meeting%20No.17.pdf" },
        ]
      },
    ]
  },
  {
    title: "NAAC Cycle 2 Information",
    id: "naac-cycle-2-info",
    sections: [
      {
        subTitle: "General Information",
        type: "nested-list",
        items: [
          { name: "IIQA", url: "http://mgmcen.ac.in/pdf/MGM039S_COLLEGE_OF_ENGINEERING_iiqa.pdf" },
          { name: "SSR", url: "http://mgmcen.ac.in/pdf/Naac_SSR_2024.pdf" },
        ]
      },
      {
        subTitle: "Criteria 1",
        id: "naac-c2-c1",
        type: "nested-list",
        items: [
          { name: "1.1.1", url: "http://mgmcen.ac.in/pdf/1.1.1%20upload.pdf" },
          { name: "1.3.2", url: "http://mgmcen.ac.in/pdf/1.3.2%20(1).pdf" },
          { name: "1.3.2 - Internship details", url: "http://mgmcen.ac.in/pdf/Internship%20details%201.3.2.pdf" },
          { name: "1.4.1.2", url: "http://mgmcen.ac.in/pdf/1.4.1.2.pdf" },
          { name: "1.4.1.1 Feedback Analysis 2022-23", url: "http://mgmcen.ac.in/pdf/Feedback%20Analysis%202022-23%201.4.1.1.pdf" },
          { name: "1.4.1.3 - Action taken on feedback", url: "http://mgmcen.ac.in/pdf/Action%20taken%20on%20feedback1.4.1.3.pdf" },
          { name: "Combine student list 2018-2023", url: "http://mgmcen.ac.in/pdf/Combine_student_list_2018_to_2023.pdf" },
        ]
      },
      {
        subTitle: "Criteria 2",
        id: "naac-c2-c2",
        type: "nested-list",
        items: [
          { name: "2.1.2", url: "http://mgmcen.ac.in/docs/First%20year%20merit%20list%202018_19%20to%202022-23.pdf" },
          { name: "2.3.1", url: "http://mgmcen.ac.in/docs/2021-22_2.3.1_SSM.pdf" },
          { name: "2.4.1", url: "http://mgmcen.ac.in/docs/2.4.1%20faculty%20DBATU.pdf" },
          { name: "2.6.1", url: "http://mgmcen.ac.in/docs/2.6.1.pdf" },
          { name: "PHD Faculites", url: "http://mgmcen.ac.in/docs/PHD%20Faculites%20Doc_21-22.pdf" },
        ]
      },
      {
        subTitle: "Criteria 3",
        id: "naac-c2-c3",
        type: "nested-list",
        items: [
          { name: "3.1.1 (.xlsx file)", url: "docs/3.1.1_RF_CR_21.05.2024.html" },
          { name: "3.1.1 (.pdf file)", url: "http://mgmcen.ac.in/docs/3.1.1_RF_CR_21.05.2024.pdf" },
          {
            name: "3.2.2 - Workshops/Seminars on IPR and Research Patents", url: "http://mgmcen.ac.in/docs/3.2.2%20(1).pdf",
            subLinks: [
              { name: "Activity Reports - Information Technology", url: "http://mgmcen.ac.in/pdf/Information%20Technology%20WS.pdf" },
              { name: "Activity Reports - Mechanical Engineering", url: "http://mgmcen.ac.in/docs/Mechanical%20Engineering%20WS.pdf" },
              { name: "Activity Reports - Computer Science and Engineering", url: "http://mgmcen.ac.in/docs/Computer%20Science%20and%20Engineering%20WS.pdf" },
              { name: "Activity Reports - Electronics and Telecommunication Engineering", url: "http://mgmcen.ac.in/docs/Electronics%20and%20Telecommunication%20Engineering%20WS.pdf" },
              { name: "Activity Reports - Civil Engineering", url: "http://mgmcen.ac.in/docs/Civil%20Engineering%20WS.pdf" },
            ]
          },
          { name: "3.3.1 (.xlsx file)", url: "docs/3.3.1_RP_CR%2020.05.2024.xlsx" },
          { name: "3.3.1 (.pdf file)", url: "http://mgmcen.ac.in/docs/3.3.1_RP_CR%2020.05.2024.pdf" },
          { name: "3.3.2 (.xlsx file)", url: "docs/3.3.2_CP_CR%2020.05.2024.xlsx" },
          { name: "3.3.2 (.pdf file)", url: "http://mgmcen.ac.in/docs/3.3.2_CP_CR%2020.05.2024.pdf" },
          {
            name: "3.4.3 - Extension Activities", url: "http://mgmcen.ac.in/docs/3.2.2%20(1).pdf",
            subLinks: [
              { name: "Activity Reports - NSS Report", url: "http://mgmcen.ac.in/pdf/NSS%20Report.pdf" },
            ]
          },
          {
            name: "3.5.1", url: "http://mgmcen.ac.in/docs/3.2.2%20(1).pdf",
            subLinks: [
              { name: "Functional MoUs - Kalinga University", url: "http://mgmcen.ac.in/pdf/Kalinga_University_MoU.pdf" },
              { name: "Functional MoUs - Metarol Ispat Pvt. Ltd", url: "http://mgmcen.ac.in/pdf/Metaroll_Ispat_MoU.pdf" },
              { name: "Activities under functional MoUs - Campus credentials", url: "http://mgmcen.ac.in/pdf/Campus_Crediental.pdf" },
              { name: "Activities under functional MoUs - Face Academy", url: "http://mgmcen.ac.in/pdf/Face_Academy.pdf" },
              { name: "Activities under functional MoUs - Infosys Springboard", url: "http://mgmcen.ac.in/pdf/Infosys_Springboard.pdf" },
              { name: "Activities under functional MoUs - Innovation Unlimited", url: "http://mgmcen.ac.in/pdf/Inovation_Unlimited.pdf" },
              { name: "Activities under functional MoUs - Tata Technologies", url: "http://mgmcen.ac.in/pdf/Tata_Technologies.pdf" },
            ]
          },
        ]
      },
      {
        subTitle: "Criteria 4",
        id: "naac-c2-c4",
        type: "nested-list",
        items: [
          { name: "4.1.1", url: "http://mgmcen.ac.in/pdf/4.1.1_1709121219_13257.pdf" },
          { name: "4.1.2", url: "http://mgmcen.ac.in/pdf/4.1.2_1709122615_13257.pdf" },
          { name: "4.2.1", url: "http://mgmcen.ac.in/pdf/4.2.1_1709195356_13257.pdf" },
          { name: "4.3.1", url: "http://mgmcen.ac.in/pdf/4.3.1_1709202133_13257.pdf" },
        ]
      },
      {
        subTitle: "Criteria 5",
        id: "naac-c2-c5",
        type: "nested-list",
        items: [
          { name: "5.1.2", url: "http://mgmcen.ac.in/pdf/5.1.2-2018-23%20Training%20Program%20Supporting%20Documents.zip" },
          {
            name: "5.1.3", url: "javascript:void(0)",
            subLinks: [
              { name: "2021-22 (Capacity building and skill enhancement programs 2021-22)", url: "http://mgmcen.ac.in/pdf/2021-22%20Combined%20All%20Dept%20Training%20Program%20for%20website.pdf" },
              { name: "2022-23 (Capacity building and skill enhancement programs 2022-23)", url: "http://mgmcen.ac.in/pdf/2022-23%20Combined%20All%20Dept%20Training%20Programs%20for%20website%20(1).pdf" },
            ]
          },
          { name: "5.1.4", url: "http://mgmcen.ac.in/pdf/5.1.4_updated.pdf" },
          {
            name: "5.2.1", url: "javascript:void(0)",
            subLinks: [
              { name: "Higher Education 2022-23", url: "http://mgmcen.ac.in/pdf/Higher%20Education%202022-23%20(1).pdf" },
              { name: "2018-19 offer Letter", url: "http://mgmcen.ac.in/pdf/2018-19%20offer%20Letter.pdf" },
              { name: "2020-21 C", url: "http://mgmcen.ac.in/pdf/2020-21%20C.pdf" },
              { name: "2021-22 offer Letter", url: "http://mgmcen.ac.in/pdf/2021-22%20offer%20Letter.pdf" },
              { name: "2022-23 offer Letter", url: "http://mgmcen.ac.in/pdf/2022-23%20offer%20Letter.pdf" },
            ]
          },
          { name: "5.2.2", url: "http://mgmcen.ac.in/pdf/GATETOFEL2022-23%20(1).pdf" },
          { name: "5.3.1", url: "http://mgmcen.ac.in/pdf/5.3.1_updated.pdf" },
        ]
      },
      {
        subTitle: "Criteria 6",
        id: "naac-c2-c6",
        type: "nested-list",
        items: [
          {
            name: "6.2.2", url: "javascript:void(0)",
            subLinks: [
              { name: "Annual reports of e-governance with stamp", url: "http://mgmcen.ac.in/pdf/6.2.2_Annual%20reports%20of%20e-governance%20with%20stamp.pdf" },
              { name: "CAS-ERP-2024", url: "http://mgmcen.ac.in/pdf/6.2.2_CAS-ERP-2024%20(1).pdf" },
              { name: "Expenditure on e-governance", url: "http://mgmcen.ac.in/pdf/6.2.2_Expenditure%20on%20e-governance.pdf" },
              { name: "Screen shot of ERP", url: "http://mgmcen.ac.in/pdf/6.2.2_Screen%20shot%20of%20ERP.pdf" },
            ]
          },
          { name: "6.3.2 - Fund_Documents", url: "http://mgmcen.ac.in/pdf/6.3.2_Fund_Documents.pdf" },
          {
            name: "6.3.3", url: "javascript:void(0)",
            subLinks: [
              { name: "FDP certificate 18-19", url: "http://mgmcen.ac.in/pdf/6.3.3_FDPcertificates_18-19.pdf" },
              { name: "FDP certificate 19-20", url: "http://mgmcen.ac.in/pdf/6.3.3_FDP%20certificates_19-20.pdf" },
              { name: "FDP certificate 20-21", url: "http://mgmcen.ac.in/pdf/6.3.3_FDP%20certificate_20-21.pdf" },
              { name: "FDP certificate 21-22", url: "http://mgmcen.ac.in/pdf/6.3.3_FDPcertificate_21-22.pdf" },
              { name: "FDP certificate 22-23", url: "http://mgmcen.ac.in/pdf/6.3.3_FDP%20certificate_22-23.pdf" },
            ]
          },
        ]
      },
      {
        subTitle: "Criteria 7",
        id: "naac-c2-c7",
        type: "nested-list",
        items: [
          { name: "7.1.1", url: "http://mgmcen.ac.in/pdf/7.1.1_Related.pdf" },
          {
            name: "7.1.2", url: "javascript:void(0)",
            subLinks: [
              { name: "Appreciation on News", url: "http://mgmcen.ac.in/pdf/7.1.2_Appreciation_on_News.pdf" },
              { name: "Geo-tagged photographs Bills", url: "http://mgmcen.ac.in/pdf/7.1.2_Geo-tagged_photographs____Bills.pdf" },
            ]
          },
          {
            name: "7.1.3", url: "javascript:void(0)",
            subLinks: [
              { name: "Awards received", url: "http://mgmcen.ac.in/pdf/7.1.3_awards_received.pdf" },
              { name: "Environmental Promotional activities", url: "http://mgmcen.ac.in/pdf/7.1.3_Environmental_Promotional_activities.pdf" },
              { name: "Geotag Photos", url: "http://mgmcen.ac.in/pdf/7.1.3_Geotag_Photos_C.pdf" },
            ]
          },
          { name: "7.1.9", url: "http://mgmcen.ac.in/pdf/7.1.4.pdf" },
          {
            name: "7.1.3 (Cultural)", url: "javascript:void(0)",
            subLinks: [
              { name: "Dr. Ambedkar Jayanti", url: "http://mgmcen.ac.in/pdf/Dr.%20ambedkar%20jayanti.pdf" },
              { name: "About constitution of India", url: "http://mgmcen.ac.in/pdf/About%20constitution%20of%20India.pdf" },
            ]
          },
        ]
      },
    ]
  },
  {
    title: "Student Satisfaction Survey",
    id: "student-satisfaction-survey",
    sections: [
      {
        subTitle: "SSS Documents",
        type: "nested-list",
        items: [
          { name: "Responses of Student satisfaction Survey 2023-24", url: "http://mgmcen.ac.in/pdf/repsonses%2010.pdf" },
          { name: "Questions of students stratification Survey 2023-24", url: "http://mgmcen.ac.in/pdf/23-24%20Q%20Student%20Satisfaction%20survey%20(SSS%20)%20of%20Teaching-Learning%20Process.pdf" },
          { name: "Responses of Student satisfaction Survey 2022-23", url: "http://mgmcen.ac.in/pdf/RESPONSE%20OF%20STUDNETS%20SATTISFACTION%2022-23.pdf" },
          { name: "Questions of students stratification Survey 2022-23", url: "http://mgmcen.ac.in/pdf/Questionnaires%20of%20%20Students%20satisfaction%20survery%202022-23.pdf" },
          { name: "Questionnaires for Student Satisfaction Survey 2021-22", url: "http://mgmcen.ac.in/pdf/QP%20Student%20Satisfaction%20Survey%20AY%202021-2022.pdf" },
          { name: "Responses of Student Satisfaction Survey 2021-22", url: "http://mgmcen.ac.in/pdf/RESPONSE%202021-22%20Student%20Satisfaction%20survey%20on%20Teaching-Learning%20Process.pdf" },
          { name: "Questionnaires for Student Satisfaction Survey 2020-21", url: "http://mgmcen.ac.in/pdf/Questionnaires%20for%20Student%20Satisfaction%20Survey%202020-21.pdf" },
          { name: "Responses of Student Satisfaction Survey 2020-21", url: "http://mgmcen.ac.in/pdf/Responses%20of%20%20Students%20satisfaction%20survery%202020-21.pdf" },
          { name: "Responses of Students satisfaction survery 2019-20", url: "http://mgmcen.ac.in/pdf/Responses%20of%20Students%20satisfaction%20survery%202019-2020.pdf" },
          { name: "Questions of students stratification Survey 2019-20", url: "http://mgmcen.ac.in/pdf/Questionaaries%20Student%20Satisfaction%20Survey%20AY%202019-2020.pdf" },
        ]
      }
    ]
  },
  {
    title: "AISHE",
    id: "aishe",
    sections: [
      {
        subTitle: "AISHE Reports",
        type: "nested-list",
        items: [
          { name: "AISHE 2022", url: "http://mgmcen.ac.in/images/department/download-20240403135017.pdf" },
          { name: "AISHE 2023", url: "http://mgmcen.ac.in/images/department/download-20240403135037.pdf" },
        ]
      }
    ]
  }
];

const IQACPage = () => {
  return (
    // mt-28 to ensure it appears below the fixed header
    <div className="container mx-auto px-4 py-8 mt-28 max-w-5xl"> {/* Adjusted max-width for single column */}
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white mb-8 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Internal Quality Assurance Cell (IQAC)</h1>
        <p className="text-xl opacity-90 max-w-3xl">
          Committed to fostering a culture of continuous improvement and excellence in all academic and administrative endeavors.
        </p>
      </div>

      {/* ADDED: NAAC Certificate Button */}
      <div className="text-center mb-12">
        <UniversalLink
          url="./pdfs/naac/NAAC 2 cycle.pdf" // <-- IMPORTANT: Replace with the actual URL to your NAAC certificate PDF
          className="inline-block bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition-colors duration-300 ease-in-out transform hover:scale-105"
        >
          <i className="fas fa-certificate mr-2"></i> View NAAC Certificate
        </UniversalLink>
      </div>

      {/* Main Content - Single Column Layout */}
      <div className="space-y-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          The Internal Quality Assurance Cell (IQAC) is a crucial part of our institution's commitment to excellence.
          It works towards continuously enhancing the quality of education and administrative processes. Here, you'll find
          all relevant documentation, reports, and minutes of meetings related to our quality initiatives.
        </p>

        {iqacData.map((mainSection) => (
          <div key={mainSection.id} className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
              {mainSection.title}
            </h2>
            <div className="space-y-6">
              {mainSection.sections.map((section, secIndex) => (
                <div key={secIndex}>
                  {section.subTitle && (
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center">
                      <i className="fas fa-folder-open text-blue-500 mr-2"></i> {section.subTitle}
                    </h3>
                  )}
                  <ul className="list-disc pl-8 space-y-2 text-gray-700">
                    {section.type === "single-link" && section.link && (
                      <li><UniversalLink url={section.link.url}>{section.link.name}</UniversalLink></li>
                    )}
                    {section.type === "nested-list" && section.items && section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.type === "category" ? (
                          <>
                            <span className="font-medium text-gray-800 flex items-center mb-1">
                              <i className="fas fa-file-alt text-green-500 mr-2"></i>{item.name}
                            </span>
                            <ul className="list-disc pl-8 space-y-1 text-gray-600">
                              {item.links && item.links.map((link, linkIndex) => (
                                <li key={linkIndex}><UniversalLink url={link.url}>{link.name}</UniversalLink></li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <>
                            <UniversalLink url={item.url}>{item.name}</UniversalLink>
                            {item.subLinks && item.subLinks.length > 0 && (
                              <ul className="list-disc pl-8 space-y-1 text-gray-600">
                                {item.subLinks.map((subLink, subLinkIndex) => (
                                  <li key={subLinkIndex}><UniversalLink url={subLink.url}>{subLink.name}</UniversalLink></li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IQACPage;