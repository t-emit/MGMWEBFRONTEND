// src/pages/Academics/ComputerScience/cseConstants.js

export const cseDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/computer-science-engineering" },
  { name: "Vision-Mission", path: "/academics/computer-science-engineering/vision-mission" },
  { name: "Programmes", path: "/academics/computer-science-engineering/programmes" },
  { name: "Faculty Profile", path: "/academics/computer-science-engineering/faculty" },
  { name: "Laboratory", path: "/academics/computer-science-engineering/labs" },
  { name: "Training and Placement", path: "/academics/computer-science-engineering/training-placement" },
  { name: "Research & Publication", path: "/academics/computer-science-engineering/research-publication" },
  { name: "Achievements", path: "/academics/computer-science-engineering/achievements" },
  { name: "Departmental Activity", path: "/academics/computer-science-engineering/activities" },
  { name: "CUC", path: "/academics/computer-science-engineering/cuc" },
  { name: "IEI", path: "/academics/computer-science-engineering/csi-iei" },
  { name: "Curriculum ", path: "/academics/computer-science-engineering/curriculum " },
  { name: "consultancy", path: "/academics/computer-science-engineering/consultancy" },
  { name: "Innovation in teaching", path: "/academics/computer-science-engineering/consultancy" },
  
];
// New data structure specifically for the Curriculum page
export const cseCurriculumData = {
    syllabus: [
        {
            yearSection: "SE",
            files: [
                { srNo: 1, heading: "SY CSE A", link: "http://mgmcen.ac.in/images/department/syllabus/Department_3-20240710130954.pdf" },
                { srNo: 2, heading: "SY CSE B", link: "http://mgmcen.ac.in/images/department/syllabus/Department_3-20240710131016.pdf" },
            ]
        },
        {
            yearSection: "TE",
            files: [
                { srNo: 1, heading: "TY CSE A", link: "http://mgmcen.ac.in/images/department/syllabus/Department_3-20240710130638.pdf" },
                { srNo: 2, heading: "TY CSE B", link: "http://mgmcen.ac.in/images/department/syllabus/Department_3-20240710130719.pdf" },
            ]
        },
        {
            yearSection: "BE",
            files: [
                { srNo: 1, heading: "B.Tech CSE DBATU", link: "http://mgmcen.ac.in/images/department/syllabus/Department_3-20200712120557.pdf" },
                { srNo: 2, heading: "B.Tech CSE B", link: "http://mgmcen.ac.in/images/department/syllabus/Department_3-20240710131159.pdf" },
            ]
        },
        {
            yearSection: "ME",
            files: [
                { srNo: 1, heading: "ME/M.Tech CSE", link: "http://mgmcen.ac.in/images/department/syllabus/Department_3-20191006131100.pdf" },
                { srNo: 2, heading: "M.Tech CSE DBATU Syllabus", link: "http://mgmcen.ac.in/images/department/syllabus/Department_3-20192609142241.pdf" },
                { srNo: 3, heading: "ME-CSE Syllabus", link: "http://mgmcen.ac.in/images/department/syllabus/Department_3-20140602065352.pdf" },
            ]
        },
        {
            yearSection: "FE",
            files: [
                { srNo: 1, heading: "Computer-Engg-Syllabus", link: "http://mgmcen.ac.in/images/department/syllabus/Department_3-20240910101209.pdf" },
            ]
        }
    ]
};


export const cseResearchData = {
    introduction: `The Department of Computer Science & Engineering is committed in developing a research environment and encouraging innovation. The Department has been recognized as a research centre by Swami Ramanand Teerth Marathwada University, Nanded (affiliated in 2008) and Dr. Babasaheb Ambedkar Technological University, Lonere (affiliated in 2023). Dr. Archana M. Rajurkar and Dr. Manisha Y. Joshi are the recognized guides at SRTMU, Nanded as well as DBATU, Lonere. Research scholars and faculty members work on a wide array of research projects, covering areas such as Image Processing, Artificial Intelligence, Machine Learning, Cyber security etc. Our department has strong record of publishing research papers in esteemed national and international journals and conferences. These publications reflect the dedication of our faculty and research scholars to the emerging fields of research.`,
    summary: [
        { label: "Total Number of Papers Published in International/National Journals", value: "276" },
        { label: "Total Number of Papers Published in International/National Conferences", value: "141" },
    ],
    researchGrantsIntro: `Despite these research publications, faculty members of our Department received research grants from esteemed organizations like AICTE, BRNS, AMUPMDC etc. These grants provide financial support to carry out innovative research projects, enabling faculty members and research scholars to explore advanced areas of Computer Science and Engineering. List of Research Guides, Research Grants and Research Publications (last 5 years) are given in following tables - `,
    
    researchGuides: [
        { srNo: 1, name: "Dr. A. M. Rajurkar", phdAwarded: "09", ongoing: "03" },
        { srNo: 2, name: "Dr. M. Y. Joshi", phdAwarded: "-", ongoing: "-" },
    ],
    
    researchGrants: [
        {
            srNo: 1,
            projectTitle: `“Development of an AI-based System for Detection of Lung Infections – Tuberculosis and Pneumonia for Quicker Diagnosis”`,
            fundingAgency: "BRNS, BARC (Mumbai)",
            grantReceived: "Rs.19,91,800/-",
            investigators: `Dr. A. M. Rajurkar,<br/>Mr. R. G. Bisen and Ms. N. S. Pande`,
            yearOfSanction: "2023-24",
            duration: "3"
        },
        {
            srNo: 2,
            projectTitle: `“Development of an Automated System for Segmentation, Detection and Classification of Liver Tumors for Quicker Diagnosis”`,
            fundingAgency: "AMUPMDC, Mumbai",
            grantReceived: "Rs.15,00,000/-",
            investigators: `Dr. A. M. Rajurkar,<br/>Mr. R. G. Bisen and Ms. N. S. Pande`,
            yearOfSanction: "2021-22",
            duration: "3"
        },
        {
            srNo: 3,
            projectTitle: `5th International Conference on Computing in Engineering & Technology (ICCET)`,
            rowspan: 2,
            fundingAgency: "AICTE, New Delhi",
            grantReceived: "Rs.1,70,000/-",
            investigators: `Dr. A. M. Rajurkar`,
            yearOfSanction: "2020",
            duration: "--",
            additionalRows: [
                { fundingAgency: "DBATU, Lonere", grantReceived: "Rs.3,00,000/-" }
            ]
        },
        {
            srNo: 4,
            projectTitle: `“Development of an Automated System for Musculoskeletal Image Analysis and Interpretation for Quicker Diagnosis”`,
            fundingAgency: "BRNS, BARC (Mumbai)",
            grantReceived: "Rs.24,90,550/-",
            investigators: `Dr. A. M. Rajurkar`,
            yearOfSanction: "2014-15",
            duration: "3"
        },
        {
            srNo: 5,
            projectTitle: `“Content Based Video Retrieval”`,
            fundingAgency: `AICTE, New Delhi<br/>(RPS)`,
            grantReceived: "Rs.7,00,000/-",
            investigators: `Dr. A. M. Rajurkar`,
            yearOfSanction: "2007-08",
            duration: "2"
        },
    ],
    
    journalPublications: [
        {
            srNo: 1,
            title: `Comparative Analysis of Deep Convolutional Neural Network for Detection of Knee Injuries`,
            authors: `Anita Thengade & Archana M. Rajurkar`,
            journalName: `International Journal of Engineering Trends and Technology`,
            year: "2024",
            issn_doi: `2231-5381/ https://doi.org/10.14445/<br/>22315381/IJETT-V72I2P106`
        },
        {
            srNo: 2,
            title: `The Blind Robust Video Watermarking Scheme in Video Surveillance Context`,
            authors: `Bhagyashri S. Kapre, Archana M. Rajurkar & D. S Guru`,
            journalName: `Multimedia Tools and Applications: An International Journal`,
            year: "2023",
            issn_doi: `https://doi.org/10.1007/<br/>s11042-023-16620-2`
        },
        {
            srNo: 3,
            title: `An Improved Video Key-Frame Detection Technique Leads to Video Authentication`,
            authors: `Dr. Bhagyashri S. Kapre and Dr. Archana M. Rajurkar`,
            journalName: `SSRG-International Journal of Engineering Trends and Technology`,
            year: "2023",
            issn_doi: `2231-5381/ https://doi.org/10.14445/<br/>22315381/IJETT-V71I4P216`
        },
        {
            srNo: 4,
            title: `Genetic based Task Scheduling Algorithms in Cloud Computing Environment`,
            authors: `Dr. R. Kavitha and Kale Jyoti S.`,
            journalName: `International Journal of Science and Research`,
            year: "2023",
            issn_doi: `2319-7064`
        },
        {
            srNo: 5,
            title: `An Efficient Flower Classification System Using Feature Fusion`,
            authors: `M. R. Banwaskar & A. M. Rajurkar`,
            journalName: `International Journals on Engineering Trends and Technology`,
            year: "2022",
            issn_doi: `https://doi.org/10.14445/<br/>2231538V70I11P207`
        },
        {
            srNo: 6,
            title: `Early stage detection of Downy and Powdery Mildew grape disease using atmospheric parameters through sensor nodes`,
            authors: `Dr. A. M. Rajurkar & Kainjan M. Sanghavi`,
            journalName: `Artificial Intelligence in Agriculture`,
            year: "2022",
            issn_doi: `2589-7217/ https://doi.org/10.1016/<br/>j.aiia.2021.10.001`
        },
        {
            srNo: 7,
            title: `Key-frame extraction based video watermarking using speed-up robust features and discrete cosine transform`,
            authors: `Dr. Bhagyashri S. Kapre and Dr. Archana M. Rajurkar`,
            journalName: `Computer Science and Information Technologies`,
            year: "2022",
            issn_doi: `2722-323X`
        },
        {
            srNo: 8,
            title: `Virtual and augmented reality practice on application and Research in police station management system with security aspects`,
            authors: `Kale Jyoti S.`,
            journalName: `International Journal of Science and Research`,
            year: "2021",
            issn_doi: `2319-7064`
        },
        {
            srNo: 9,
            title: `Virtual augmented reality application and research in police station management system with security aspects`,
            authors: `Kale Jyoti S.`,
            journalName: `International Journal of Science and Research`,
            year: "2021",
            issn_doi: `2319-7064`
        },
        {
            srNo: 10,
            title: `Novel SURF feature based watermarking`,
            authors: `Dr. A. M. Rajurkar and Dr. B.S.Kapre`,
            journalName: `Science and Engineering Journal`,
            year: "2020",
            issn_doi: `0103-944X`
        },
        {
            srNo: 11,
            title: `Content-based retrieval system for surgery videos`,
            authors: `M. R. Banwaskar & A. M. Rajurkar`,
            journalName: `International Journals Autonomic Computing`,
            year: "2020",
            issn_doi: `1741-8569/ https://doi.org/10.1504/<br/>IJAC.2020.114391`
        },
        {
            srNo: 12,
            title: `A Comprehensive Survey of Articular Cartilage Segmentation Methods on Knee MRI`,
            authors: `Anita Thengade & Archana M. Rajurkar`,
            journalName: `International Journal of Advanced Science and Technology`,
            year: "2019",
            issn_doi: `2005-4238`
        },
        {
            srNo: " ", // This was a blank row in HTML
            title: `Analysis of Tree structure for Secure Group Communication Using LKH Approach`,
            authors: `Aparna S. Pande, Y. V. Joshi & Manisha Y. Joshi`,
            journalName: `International Journal of Computer Sciences and Engineering`,
            year: "2019",
            issn_doi: `2347-2693`
        },
        {
            srNo: 13,
            title: `An improved diagnosis technique for breast cancer using LCFS and TreeHiCARe classifier model`,
            authors: `D. K. Nagthane and Dr. A. M. Rajurkar`,
            journalName: `Sensor Review`,
            year: "2018",
            issn_doi: `0260-2288`
        },
        {
            srNo: 14,
            title: `Shot Boundary Detection of MPEG Video using Biorthogonal Wavelet Transform`,
            authors: `Anita Thengade & Archana M. Rajurkar`,
            journalName: `International Journal of Pure and Applied Mathematics`,
            year: "2018",
            issn_doi: `1311-8080`
        },
        {
            srNo: 15,
            title: `Secure Forensic Report Retrieval Application using Cipher Text-Policy Attribute-Based Encryption`,
            authors: `Vinod I. Jondhale & Manisha Y. Joshi`,
            journalName: `International Journal of Science and Research`,
            year: "2018",
            issn_doi: `2319-7064`
        },
        {
            srNo: 16,
            title: `Cloud Data Security Using Third Party Auditor`,
            authors: `Aman Bhimrao Kamble & M. Y. Joshi`,
            journalName: `International Journal of Scientific Research in Science, Engineering and Technology`,
            year: "2018",
            issn_doi: `2394-4099`
        },
        {
            srNo: 17,
            title: `A Secure End-To-End Protocol for Secure Transmission of SMS`,
            authors: `Vaidehi V. Mantri & M. Y. Joshi`,
            journalName: `International Journal of Science and Research`,
            year: "2018",
            issn_doi: `1042 – 1047`
        },
    ],
    
    conferencePublications: [
        {
            srNo: 1,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `Early Detection of Stem Borer in Grape Diseases`,
            conferenceName: `Artificial Intelligence in Agriculture, Volume 5`,
            year: "2022",
            isbn: `ISBN 978-981-15-4851-2`,
            publisher: `Springer`
        },
        {
            srNo: 2,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `The Role of Medical Imaging in COVID-19 Detection and Diagnosis: A Review`,
            conferenceName: `International Conference for Advancement in Technology (ICONAT) 2022`,
            year: "2022",
            isbn: `ISBN:<br/>978-1-6654-2577-3`,
            publisher: `IEEE`
        },
        {
            srNo: 3,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `Blind robust video watermarking scheme in video surveillance context`,
            conferenceName: `International Conference on Next Generation Systems and Networks`,
            year: "2022",
            isbn: ` `, // No ISBN in source HTML
            publisher: `Springer`
        },
        {
            srNo: 4,
            facultyName: `Dr. Kapre B. S.`,
            title: `Blind robust video watermarking scheme in video surveillance context`,
            conferenceName: `International Conference on Next Generation Systems and Networks`,
            year: "2022",
            isbn: ` `, // No ISBN in source HTML
            publisher: `Springer`
        },
        {
            srNo: 5,
            facultyName: `Mr. R. G. Bisen`,
            title: `The Role of Medical Imaging in COVID-19 Detection and Diagnosis: A Review`,
            conferenceName: `International Conference for Advancement in Technology (ICONAT) 2022`,
            year: "2022",
            isbn: `978-1-6654-2577-3,<br/>ISBN:<br/>978-1-6654-2578-0`,
            publisher: `IEEE`
        },
        {
            srNo: 6,
            facultyName: `Ms. N. S. Pande`,
            title: `The Role of Medical Imaging in COVID-19 Detection and Diagnosis: A Review`,
            conferenceName: `International Conference for Advancement in Technology (ICONAT) 2022`,
            year: "2022",
            isbn: `978-1-6654-2577-3,<br/>ISBN:<br/>978-1-6654-2578-0`,
            publisher: `IEEE`
        },
        {
            srNo: 7,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `Self-embedding and Variable Authentication Approach for Fragile Image Watermarking Using SVD and DCT`,
            conferenceName: `International Conference on Cognition and Recongition 2021`,
            year: "2021",
            isbn: `978-3-031-22404-1`,
            publisher: `Springer`
        },
        {
            srNo: 8,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `Selected Deep Features and Multiclass SVM for Flower Image Classification`,
            conferenceName: `International Conference on Cognition and Recongition`,
            year: "2021",
            isbn: `978-3-031-22404-1`,
            publisher: `Springer`
        },
        {
            srNo: 9,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `Robust and Secure Lucas Sequence-Based Video Watermarking`,
            conferenceName: `Advances in Intelligent Systems and Computing`,
            year: "2021",
            isbn: `978-981-15-4028-8`,
            publisher: `Springer`
        },
        {
            srNo: 10,
            facultyName: `Dr. Kapre B.S.`,
            title: `Self-embedding and Variable Authentication Approach for Fragile Image Watermarking Using SVD and DCT`,
            conferenceName: `International Conference on Cognition and Recognition 2021`,
            year: "2021",
            isbn: `978-3-031-22404-1`,
            publisher: `Springer`
        },
        {
            srNo: 11,
            facultyName: `Dr. Kapre B.S.`,
            title: `Robust and Secure Lucas Sequence-Based Video Watermarking`,
            conferenceName: `Advances in Intelligent Systems and Computing`,
            year: "2021",
            isbn: `978-981-15-4028-8`,
            publisher: `Springer`
        },
        {
            srNo: 12,
            facultyName: `Ms. Jyoti S. Kale`,
            title: `An inside and out investigation of cloud-fog processing: design, application areas with security highlights`,
            conferenceName: `ICITC-2021`,
            year: "2021",
            isbn: `I978-1-6654-0474-7`,
            publisher: `ICITC-2021`
        },
        {
            srNo: 13,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `Segmentation of Knee Bone using MRI`,
            conferenceName: `ICCET-2020`,
            year: "2020",
            isbn: `978-981-15-4850-5`,
            publisher: `Springer`
        },
        {
            srNo: 14,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `Early Detection of Grape Stem Borer Using IOT`,
            conferenceName: `ICCET-2020`,
            year: "2020",
            isbn: `978-981-15-4850-5`,
            publisher: `Springer`
        },
        {
            srNo: 15,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `Segmentation, Detection and Classification of Liver Tumors for Designing a CAD System`,
            conferenceName: `ICCET-2019`,
            year: "2020",
            isbn: `978-981-32-9515-5`,
            publisher: `Springer`
        },
        {
            srNo: 16,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `Creating Video Summary using Speeded Up Robust Features`,
            conferenceName: `ICCET-2019`,
            year: "2020",
            isbn: `978-981-32-9515-5`,
            publisher: `Springer`
        },
        {
            srNo: 17,
            facultyName: `Dr. A. M. Rajurkar`,
            title: `A New Approach for Mammogram Classification Using Association Rules: To Make Breast Cancer History`,
            conferenceName: `ICCET-2019`,
            year: "2020",
            isbn: `978-981-32-9515-5`,
            publisher: `Springer`
        },
        {
            srNo: 18,
            facultyName: `Dr. M. Y. Joshi`,
            title: `Optimal Tree Structure for Secure Group Communication Using LKH Approach`,
            conferenceName: `ICCIP-2020`,
            year: "2020",
            isbn: `http://dx.doi.org/<br/>10.2139/ssrn.3649833`,
            publisher: `Elsevier`
        },
        {
            srNo: 19,
            facultyName: `Dr. M. Y. Joshi`,
            title: `Enhanced strict binary logical key hierarchy algorithm for secure group communication`,
            conferenceName: `ICCET-2019`,
            year: "2020",
            isbn: `978-981-32-9515-5`,
            publisher: `Springer`
        },
        {
            srNo: 20,
            facultyName: `Mr. R. G. Bisen`,
            title: `Segmentation, Detection and Classification of Liver Tumors for Designing a CAD System`,
            conferenceName: `ICCET-2019`,
            year: "2020",
            isbn: `978-981-32-9515-5`,
            publisher: `Springer`
        },
        {
            srNo: 21,
            facultyName: `Dr. M. Y. Joshi`,
            title: `Analysis on Logical Key Hierarchy and Variants for Secure Group Communication`,
            conferenceName: `ICCASP-2018`,
            year: "2018",
            isbn: `2194-5357`,
            publisher: `Springer`
        },
        {
            srNo: 22,
            facultyName: `Ms. Jyoti S. Kale`,
            title: `Convergence of Artificial Intelligence and Internet of Things for Industrial Automation`,
            conferenceName: `CRC Press, Taylor n Francis`,
            year: "2023",
            isbn: ` `, // No ISBN in source HTML
            publisher: `CRC Press, Taylor n Francis`
        },
        {
            srNo: 23,
            facultyName: `Ms. Jyoti S. Kale`,
            title: `The application of artificial intelligence and cloud computing technologies<br/>to agricultural processes for the purpose of optimizing irrigation and pesticide application`,
            conferenceName: `CCI 2023`,
            year: "2023",
            isbn: `978-93-5396-006-3`,
            publisher: `CCI 2023 proceeding`
        },
    ],

    internationalJournalsByAuthor: [
        {
            authorName: "Dr. Mrs. Manisha Y. Joshi",
            papers: [
                `Aparna S. Pande, Y. V. Joshi, Manisha Y. Joshi “Analysis of Tree structure for Secure Group Communication Using LKH Approach” International Journal of Computer Sciences and Engineering Vol.-7, Issue-3, Mar 2019 E-ISSN: 2347-2693. <a href="https://doi.org/10.26438/ijcse/v7i3.11301136" target="_blank" rel="noopener noreferrer">https://doi.org/10.26438/ijcse/v7i3.11301136</a>`,
                `Aparna Y. Ladekar , M.Y.Joshi “Classification of Concept Drifting Data Streams Using Adaptive Novel-Class Detection” International Journal of Computer Engineering In Research Trends, Volume 3, Issue 9, ,pp. 514-520 ( Google Scholar,DOAJ) September-2016 ISSN (O): 2349-7084.`,
                `Aparna S. Pande, Y. V. Joshi, Manisha Y. Joshi “Analysis on Logical Key Hierarchy and Variants for Secure Group Communication”, ICCASP 2018, Book chapter, Springer-Atalntis, Part of the <a href="https://link.springer.com/bookseries/11156" target="_blank" rel="noopener noreferrer">Advances in Intelligent Systems and Computing</a> book series (AISC, volume 810), ISSN 2194-5357`,
                `Vinod I. Jondhale, <strong>Manisha Y. Joshi</strong>, “Secure Forensic Report Retrieval Application using Cipher Text-Policy Attribute-Based Encryption” International Journal of Science and Research (IJSR) , Volume 7 Issue 4, April 2018, PP 980-983ISSN (Online): 2319-7064`,
                `Aman Bhimrao Kamble, <strong>M. Y. Joshi</strong>, "Cloud Data Security Using Third Party Auditor", International Journal of Scientific Research in Science, Engineering and Technology(IJSRSET), Print ISSN : 2395-1990, Online ISSN : 2394-4099, Volume 4, Issue 8, pp.340-344, May-June-2018.`,
                `Vaidehi V. Mantri, <strong>M. Y. Joshi</strong>, "A Secure End-To-End Protocol for Secure Transmission of SMS", International Journal of Science and Research (IJSR), Volume 7 Issue 4, April 2018, 1042 – 1047`,
                `<strong>Manisha Y. Joshi</strong> and R.S. Bichkar “ A Centralized Key Table based Communication Efficient Group Key management protocol” International Journal of computer science and internet security(IJCNIS) Mecs Press vol 7 , No.8, July 2015- 07-07 PP-48-55`,
                `<strong>Manisha Y. Joshi</strong> and R.S. Bichkar, “ An efficient Group Key Transport Protocol” , International Journal of Computer Science and Information Technologies, Vol. 5 (1) ,2014, 462-465`,
                `Amit N Thakre ,<strong>M.Y. Joshi </strong>“ Performance Analysis of AODV and DSR routing protocol in Moblile adhoc Networks ” International Journal on Computer Application, IJCA special issue on MANET’s, 2010, pp 211-218.`,
            ]
        },
        {
            authorName: "Mr. Salve Suhas G",
            papers: [
                `Ms. Jyoti T Sarode, Mr. S.G. Salve, “Novel Approaches to Improve Robustness, and Accuracy of Iris Recognition Systems' International Journal of Engineering Science and Computing Volume 6 Issue 5, May 2016`,
            ]
        },
        {
            authorName: "Dr. Kapre Bhagyashri Sudhakar",
            papers: [
                `<strong>Kapre Bhagyashri S.</strong><strong>,</strong>, Archana M. Rajurkar<strong> </strong>Key-frame extraction based video watermarking using speed-up robust features and discrete cosine transform<strong> </strong>Computer Science and Information Technologies<strong> 4</strong>, 1 ISSN: 2722-323X ISSN: 2722-3221<strong> March 2023</strong><a href="https://doi.org/10.11591/csit.v4i1.p%25p" target="_blank" rel="noopener noreferrer">https://doi.org/10.11591/csit.v4i1.p%25p</a><strong> </strong>`,
                `<strong>Kapre Bhagyashri S.</strong>, Archana M. Rajurkar Novel SURF feature based image watermarking Science and Engineering Journal <strong>1</strong>, 2 ISSN NO: 0103-944X <strong>Feb- 2020</strong>`,
                `Anjali A. Bhosle, <strong>Kapre Bhagyashri S.</strong> Self embedding watermarking scheme using DCT International Journal of Advances in Electronics and Computer Science <strong>3</strong>, 1 ISSN: 2393-2835 <strong>Jan -2016</strong>`,
                `<strong>Kapre Bhagyashri S.</strong><strong>,</strong>, Rajurkar, A.M., Guru, D.S. An Improved Video Key-Frame Detection Technique Leads to Video Authentication SSRG-International Journal of Engineering Trends and Technology (IJETT) <strong>71</strong>, 4 ISSN: 2231-5381 <strong>April-2023</strong><a href="https://doi.org/10.14445/22315381/IJETT-V71I4P216" target="_blank" rel="noopener noreferrer">https://doi.org/10.14445/22315381/IJETT-V71I4P216</a>`,
                `<strong>Kapre Bhagyashri S.</strong><strong>,</strong>, Rajurkar, A.M., Guru, D.S. The blind robust video watermarking scheme in video surveillance context <em>Multimed Tools Appl</em> <strong>-</strong>, - - <strong>Oct-2023</strong> <a href="https://doi.org/10.1007/s11042-023-16620-2" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s11042-023-16620-2</a>`,
                `<b>6</b> Shahenaz I. Shaikh, <strong>Kapre Bhagyashri S</strong>. A Fast Single Image Haze Removal Algorithm Using Color Attenuation Prior and Pixel Minimum Channel International Journal of Science and Research (IJSR) <strong>6</strong>, 5 ISSN (Online): 2319-7064 <strong>May- 2017</strong>`,
                `<b>7</b> Bhagyashri Sarda, <strong>Kapre Bhagyashri S</strong> Contemporary Approach for Graphical Password using CAPTCHA International Journal of Soft Computing and Engineering (IJSCE) <strong>6</strong>, 3 ISSN: 2231-2307 July 2016`,
            ]
        },
        {
            authorName: "Mr. Mohammed Aijaz Ahmed",
            papers: [
                `Md. Aijaz Ahmed, Dr. D. Rajyalakshimi, Dr. S. A. Sattar “Cryptanalysis of a more efficient and secure dynamic ID-based remote user authentication scheme” International Journal of Network Security & Its Applications (IJNSA) 01, 03, 2009`,
            ]
        },
        {
            authorName: "Mr. Chennoji M. R.",
            papers: [
                `Ms. M. R. Banwaskar, Mr. Chennoji M. R. Content Based Image Retrieval System Using Ranking International Journal of Computer Application <strong>5</strong>, 2250-1797 June2015 196-205`,
            ]
        },
        {
            authorName: "Ms.Kale Jyoti S.",
            papers: [
                `1. Ms.Kale JyotiS., Ms.Manjusha Dhoke International Journal of Current Microbiology and Applied Sciences Review on Adaptive Genetic Algorithm and Metaheuristic Methods within Stochastic Optimisation ISSN: 2319-7706 October-2017`,
                `2. Ms.Kale Jyoti S,Dr.Pavan K.Dhoke International Journal of Current Microbiology and Applied Sciences Review on Computing Machinery and Intelligence ISSN: 2319-7706 October-2017`,
                `3. Ms.Kale Jyoti S. International Journal of Science and Research (IJSR) Virtual augmented reality application and research in police station management system with security aspects ISSN 2319-7064 Volume 10 Issue 1, January 2021`,
                `Kale Jyoti S International Journal of Science and Research (IJSR) Genetic based Task Scheduling Algorithms in Cloud Computing Environment ISSN 2319-7064 Volume 12 Issue 5, May 2023`,
            ]
        },
        {
            authorName: "Mrs. Deepashri S. Naik",
            papers: [
                `NaikD.S.,Narwade R.K.Tamkute P. S Traffic Control System Based on Virtual Routing Topologies International Journal For Engineering Appplications and Technology 1, 4 ISSN:2321-8134 2014 41-43`,
            ]
        },
        {
            authorName: "Dr. Shital Yadavrao Gaikwad",
            papers: [
                `1 Dr. Shital Y. Gaikwad Published in international journal of intelligent systems and applications in engineering, Volume 12,Issue 3.pg.No. 67-79, ISSN:2147-67992, Oct. 2023 2023 An Energy Efficient Weighted Clustering Scheme with Packet Service Time in Multimedia Data Transmission in WMSN`,
                `2 Shital Yadavrao Gaikwad, Dr. B. R. Bombade Published in International Journal of Intelligent Systems and Application in Engineering (IJISAE), pg.No. 52-60, ISSN:2147-6799, 18th Jan 2023 2023 Energy Enhancement in Wireless Sensor Network Using Teaching Learning Based Optimization Algorithm,`,
                `3 Shital Yadavrao Gaikwad, Dr. B. R. Bombade International Multidisciplinary Conference, Technology and Engineering, ISBN :978-93-91535-28-5,7th and 8th April 2022 2022 Energy Accretion in Wireless Sensor Network Using Protocols,`,
                `4 Shital Yadavrao Gaikwad, Dr. B. R. Bombade Journal of Xi’ an University of Architecture and Technology, Volume 13, Issue 10, 2021, page no.218-225, ISSN. 1006-7930, 2021 Energy Enhancement in Wireless Sensor Network Using Ant Colony Optimization: Comparative Analysis,.`,
                `5 Shital Yadavrao Gaikwad, Dr. B. R. Bombade Published in International Journal of Innovative Research in Technology (IJIRT), Volume 7, Issue 9, Feb 2021, ISSN. 2349-6002,February 2021. 2021 Energy Enhancement in Wireless Sensor Network : A Comprehensive Survey ,`,
                `6 Shital Y. Gaikwad, Dr.Kulkarni U.V Published in International Journal of Mobile and Adhoc Network (IJMAN), Volume3,issue 1,2013 2013 A Survey of Security Issues in Wireless Sensor Networks,`,
                `7 Shital Y. Gaikwad, Dr.Kulkarni U.V Published in International Journal of Advancements in Research and Technology (IJOART), Volume 2, Issue 7, Page 473-477, ISSN 2278-7763 July-2013 2013 Comparative Analysis of Hop-to-Hop and End-to-End Secure Communication,`,
                `8 Maheshwari V. Chandraw, Shital Y. Gaikwad Published in International Journal of Engineering Research and Technology (IJERT), Volume 2 , Issue 9, Pg.1521- 1525, ISSN 2278-0181 September – 2013 2013 Anti- theft Security System Using GSM,GPS, RFID Technology Based on ARM 7,`,
                `9 Shital Y. Gaikwad, Chandrakant S. Audhutwar Published in International Journal of Computer Science and Information Technologies (IJCSIT), Volume 5, 6102-6105, 2014. Automatic Toll Collection by Using QR Code Capturing,`,
                `10 Maheshkumar Ramrao Gangasagre, Shital Y. Gaikwad Published in International Journal of Scientific and Engineering Research ( IJSER), Volume 5, Issue 5, 26-31, ISSN 2229-5518 ,May-2014 2014 Active User-Side Evil Twin Access Point Detection,`,
                `11 Akshay S. Chavan, Shital Y. Gaikwad Published in International Journal of Scientific and Engineering Research (IJSER ), Volume 5, Issue 5, 57-60, ISSN 2229-5518,May- 2014 2014 Presentation of the 3-D world on web page by coalescing VRML and HTML: A small illustration,`,
                `12 Shital Y. Gaikwad, Maheshwari V.C. Published in International Journal of Current Engineering and Technology,(IJCET), Volume 4,No.3,P-ISSN 2347-5161,June 2014. 2014 Security System for Car Using RFID Thumb Impression ,Steering wheel Lock Based on ARM 7`,
                `13 Deepak Bilolikar. Shital Y. Gaikwad Published in International Journal of Innovative Research in computer and Communication Engineering ( IJIRCCE), Volume 3, Issue 4, 2886-2891, ISSN 2320-9798(print), 2320-9801(online), April 2015 2015 Detection and Localization of Multiple Spoofing Attackers Using Cluster Analysis in Wireless Network,`,
                `14 Navinkumar Dhopre, Shital Y. Gaikwad Published in International Journal of innovative Research in computer and communication Engineering (IJIRCCE), Volume 3, Issue 4, 2886-2891, ISSN (online) 2320-9801, 2320-9798(print) April 2015 2015 Localization of Wireless Sensor Networks with Ranging Quality in Woods,`,
                `15 Deepak Bilolikar, Shital Y. Gaikwad Published in International Journal of Advance Research in Computer Science and Management Studies ( IJARCSMS), Volume 3, Issue 5, pg. 423-429, ISSN 2321-7782, May 2015 2015 Detection and Localization of Multiple Spoofing Attackers in Wireless Network Using Silence Mechanism and Support Sector Machine,`,
                `16 Navinkumar Dhopre, Shital Y. Gaikwad Published in International Journal of Advance Research in Computer Science and Management Studies ( IJARCSMS), Volume 3, Issue 5, Pg. 363-367, ISSN 2321-7782, ISSN 2321-7782, May 2015. 2015 Robust Ranging Quality in Woodland and Localization of Wireless Sensor Networks,`,
                `17 Shinde Asha Ashokrao, Shital Y. Gaikwad Published in International Journal of innovative Research in computer and communication Engineering( IJIRCCE), Volume 5,Issue 1, Pg.244-250, ISSN 2320-9801(online)2320-9798(Print), Jan 2017 2017 A Performance Evaluation of Machine Learniing- Based Streaming Spam Tweets Detection`,
                `18 Trupati D. Gangasagar,Shital Y. Gaikwad in International Journal of Innovative Research in Science Engineering and Technology( IJIRSET), Volume6,Issue7,Pg.13769-13775, ISSN 2319-8753(online) 2347-6710(Print),July2017 2017 A Secure Anti-collusion data Sharing Scheme for Dynamic Groups in the cloud`,
                `19 Priya J. Khindre,Shital Y. Gaikwad Published in International Journal of Innovative Research in Computer and Communication Engineering(IJIRCCE), Volume 5, Issue 7, Pg.13018-13024, ISSN 2320-9801(online)2320-9798(Print),July 2017 2017 Two-Factor Data Security Protection Mechanism for Cloud Storage System,`,
                `20 Shinde Asha Ashokrao, Shital Y. Gaikwad Published in International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE), Volume 5,Issue 8,pg.1111-1119, ISSN 2320-9801(online) 2320-9798(Print),August 2017 2017 Enhancing Machine Based Spam Detection Using Twitter,`,
                `21 Priya J. Khindre,Shital Y. Gaikwad Published in International Journal of Innovative Research in Computer and Communication Engineering(IJIRCCE), Volume 5, Issue 11,pg.16700-16704,November 2017 2017 Two-Factor Data Security Protection Mechanism for Cloud Storage System,`,
                `22 Trupati D. Gangasagar,Shital Y. Gaikwad Published in International Journal of Innovative Research in Computer and Communication Engineering ( IJIRCCE), Volume 5,Issue12,Pg.16810-16815,ISSN 2320-9801 (online) 2320-9798(Print), December 2017 2017 A Secure Anti-collusion data Sharing Scheme for Dynamic Groups in the cloud,`,
                `23 Manisha More, Shital Y. Gaikwad Published in International Journal of Advance Research Ideas and Innovations in Technology(IJARIIT), Volume 3, Issue 6, ISSN 2454-132X,November-December-2017 2017 A Robust and Verifiable Threshold Multi-Authority Access Control System in Public Cloud Storage,`,
                `24 Mohammed Aameruddin Mohammed Akbaruddin, Shital Y. Gaikwad Published In National Journal of Multidisciplinary Research and Development(NJMRD), Volume 3,Issue 1, Page No. 137-139, ISSN 2455-9040,January 2018 2018 A review on identity based proxy oriented data uploading and remote data integrity checking in public cloud.`,
                `25 Shital Panchal, Kamthane A.N. Shital Y. Gaikwad Published in International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE), Volume 6, Issue 3,Pg.1111-1119, ISSN 2320-9801(online) 2320-9798(Print), March-2018. 2018 An Efficient file Hierarchy Attribute Based Encryption Scheme in Cloud Computing,`,
                `26 Shital Panchal, Kamthane A.N. Shital Y. Gaikwad Published in International Research Journal of Engineering and Technology ( IRJET), Volume 5, Issue 4,Pg. 1-5, ISSN 2395-0056(e) 2395-0072(p),April 2018. 2018 A Review paper on an Efficient File Hierarchy Attribute based Encryption Scheme in Cloud Computing,`,
                `27 Mohammed Akbaruddin, Shital Y. Gaikwad Published in Open Access International Journal of Science & Engineering( OAIJSE), Volume 3,Issue 4,pg.13-18, ISSN 2456-3293,April 2018 2018 Identity Based Deputy Aligned input Transferring & Isolated Data Integrity Analysis in Cloud.`,
                `28 Sonali S. Panchal, Shital Y. Gaikwad Published in International Journal of Creative Research Thoughts ( IJCRT), Volume 6, Issue 2,Pg. 563-669, ISSN 2320-2882, April 2018 2018 Content Based Image Retrieval Using Human Interaction (RF) with Auditing Scheme in Cloud Computing Environment,.`,
                `29 Shital Y. Gaikwad, Surwashe Vishvanath D., Pawale Shrinivas R Published in International Journal of Advance Scientific Research and Engineering Trends(IIJASRET), Volume 3,Issue 4, pg.30-31, ISSN 2456-0774,April 2018 2018 Digital Smart System for Restaurants Using Wireless Technology,`,
                `30 Dheeraj Sudamrao Sadawarte, Shital Y. Gaikwad Published in Open Access International Journal of Science & Engineering(OAIJSE), Volume 3,Issue 5,pg. 39-40, ISSN 2456-3293,May 2018 2018 Survey on Network Traffic Classification Techniques with correlation Information,`,
                `31 Shradha P. Kashetwar, Shital Y. Gaikwad Published In International Journal of Innovative Research in Science Engineering and Technology(IJIRSET), Volume 7,Issue 7, Pg. 8018-8022, ISSN 2319-8753(online) 2347-6710(Print) ,July 2018 2018 Providing Privacy- Aware Incentives in Mobile Sensing System,`,
                `32 Sonali S. Panchal, Shital Y. Gaikwad, Kamthane A.N. published in International Research Journal of Engineering and Technology (IJARIIE), Volume 4,Issue-2,3811-3816, ISSN 2395-4396, Feb-2018. 2018 Secure auditing scheme with content based image retrieval using human interaction (RF) in cloud computing environment,`,
                `33 Sonali Panchal, Shital Y. Gaikwad Published In International Journal of Innovative Research in Computer and Communication Engineering (JJIRCCE), Volume 7, Issue1 Pg. No. 110-119 ISSN2320-9801(online) 2320-9798(Print),January 2019 2019 Relevance Feedback Using Auditing Scheme in content-based Image Retrieval in Cloud computing Environment.`,
                `34 Pravin L Satore,Shital Y. Gaikwad Published In Journal of Emerging Technologies and Innovative Research(JETIR), Volume 6,Issue 4,pg.No.24-28,ISSN 2349-5162, April 2019. 2019 Cost Optimized Data Access Using Rank Join,`,
                `35 Pravin L Satore,Shital Y. Gaikwad Published in International Journal of Engineering Research & Technology(IJERT), Volume8,Issue 6,1110-1115, ISSN 2278-0181, June-2019 2019 Cost Optimized Data Access using Rank-Join,`,
                `36 Shankar G. Mundhe, Shital Y. Gaikwad Published In International Journal of Computer Science and Engineering(IJCSE), Volume 7,Issue-6,761-764, ISSN 2347-2693,June-2019. 2019 Performance Predication In Educational Data Mining using Neural Network,`,
                `37 Sonali Panchal, Shital Y. Gaikwad Published In Advance Journal of Graduate Research(AJGR), Volume 6,Issue 1, Pg. No. 31-40, ISSN 2456-7108, July 2019. 2019 Relevance Feedback Utilizing Secure Evaluation with Content –based Image Retrieved in Cloud Computing,`,
                `38 Shankar G. Mundhe, Shital Y. Gaikwad In International Journal of Innovative Research in Advanced Engineering (IJIRAE), Volume-6,Issue-8,761-764, ISSN 2349-2163,Aug.-2019 2019 Performance Predication In Educational Data Mining using Neural Network,`,
                `39 Rucha B. Kadam. Shital Y. Gaikwad Published In International Journal of Research in Electronics and Computer Engineering (IJRECE), Volume 7, Issue3,Pg.No. 390-394,ISSN 2348-2281(online) 2393-9028(Print),Sept. 2019. 2019 Twitter Spam Detection using Lfun Approach based on Real –Time Statistical Features.`,
                `40 Shradha Panchal, Shital Y. Gaikwad In Journal of The Gujarat Research Society (GRS), Volume 21,Issue x, pg.No. 1059-1064 ISSN 0374-8588, November 2019. 2019 Survey on New Approach for Knowledge- Based Recommendation System that Includes Sentiment Analysis and Machine Learning.`,
                `41 Wajiha Nausheen, Shital Gaikwad Published in International Research Journal of Engineering and Technology(IRJET), Volume 07,Issue 01,e-ISSN-2395-0056, 2395-0072, Jan 2020. 2020 A Research paper on Block Design-based key agreement for Group Data Sharing in Cloud Computing.`,
                `42 Mithun B. Ramgirwar, Shital Y. Gaikwad Published In International Journal of Research in Electronics and Computer Engineering (IJRECE), Volume 8, Issue 2, pg.No. 160-164, ISSN 2348-2281(online) 2393-9028(Print), April 2020. 2020 Document Clustering using on the Basis of Predictive Network,`,
                `43 Mithun B. Ramgirwar, Shital Y. Gaikwad Published In Journal of Emerging Technologies and Innovative Research(JETIR), Volume 7,Issue6,pg.no.369-372,ISSN 2349-5162, June 2020. 2020 Survey Paper on Descriptive Document Clustering using on the basis of Predictive Network.`,
                `44 Wajiha Nausheen, Shital Gaikwad Published In International Journal of Scientific Research in Science and Technology(IJSRST), Volume 8, Issue4,pg.No. 500-504, ISSN 2395-602X(online) 2395-6011(Print), August 2021 2021 Group Data Sharing in Cloud Computing with Secure Key Agreements Modal.`,
            ]
        },
    ],
    nationalJournalsByAuthor: [
        {
            authorName: "Dr. Shital Yadavrao Gaikwad",
            papers: [
                `Mohammed Aameruddin Mohammed Akbaruddin, Shital Y Gaikwad “ A review on identity based proxy oriented data uploading and remote data integrity checking in public cloud National Journal of Multidisciplinary Research and Development in UGC approved journal RJIF, Volume 3,Issue 1, Pg. 137-139, ISSN: 2455-9040Jan-2018.(www.Nationaljournals.com) Jan-2018`,
            ]
        },
    ],
    internationalConferencesByAuthor: [
        {
            authorName: "Dr. Mrs. Manisha Y. Joshi",
            papers: [
                `Manisha Y. Joshi , R. S. Bichkar “ Scalable key transport protocol using Chinese remainder theorem” Internationalsymposim on security in computing and communications(SSCC’ 2013),Mysore, India,published in Springer LNCS, CCIS 377, ISSN no 1865-0929, pp 397-402 Conference held at Mysore, India, Duration of Conference August 22-24, 2013`,
                `M.Y. Joshi, R.S. Bichkar “Authentication for remote voting using visual cryptography” IComputer Science and Information Technology (ICCSIT), 2010 3rd IEEE International Conference Conference held at Duration of Conference 9-11 July 2010.`,
                `PallaviChavan, M.Y. Joshi “A Literature Survey: Face Recognition” International conference on network security and workshop,January 2007 Erode( Tamilnadu). Conference held at Duration of Conference January 2007`,
                `Md. Mohammad Aijaz Ahmed, M.Y. Joshi “ simple and efficient solution to remote user authentication using smart cards” Third IEEE International Conference on Innovations in Information Technology (IIT'06), Dubai. Conference held at Duration of Conference -`,
                `N.L. Gavankar, Ms M.Y. Joshi, “Steganography; A new trand in information Warefare and security”. IEEE International conference on Advances in computer vision and information technology. Conference held at Aurangabad. Duration of Conference December 2007`,
                `Anil Wakekar, M.Y. Joshi, “Secure Image Communication Techniques: A Review” International Conference on Emerging Trends in Engineering 2008 PravaraNagar , Loni. Conference held at Duration of Conference 2008`,
                `Mr. PrafulPardhi , M.Y. Joshi, “The Advantages Of Elliptic Curve Cryptography For Wireless Security” International conference on Emerging trends in computing electronics, Embedded sysytem and VLSI design, 20-21st March 2008 ,Padmashri Dr. V. VikhePatil College of Engineering, Ahmednager. Conference held at Duration of Conference 20-21st March 2008`,
                `M.Y. Joshi, S.N. Talbar, Y.V. Joshi “ Monochrome and color image compression using Subband coding” ICCCD at IIT Kahragpur Dec 2000. Conference held at Duration of Conference Dec 2000.`,
                `Navin Kumar, M.Y.Joshi “Analysis of academic data using Ad-hoc association rule mining from star schema”, International Seminar on IT in Academics, (ITA-2009) Sinhgad institute of Management, Vadgaon(BK), Pune 20-22 Feb 2009. Conference held at Duration of Conference 20-22 Feb 2009.`,
            ]
        },
        {
            authorName: "Mr. Salve Suhas G",
            papers: [
                `Mr. Salve S.G, Dr. Ms .K. C. Jondhale Shape matching and object recognition using shape context 3rd IEEE International Conference on, Computer Science and Information Technology. Conference held at Chengdu, China Duration of Conference July 9-11,2010`,
            ]
        },
        {
            authorName: "Dr. Kapre Bhagyashri Sudhakar",
            papers: [
                `<strong>Kapre Bhagyashri S</strong>. and M.Y. Joshi Robust image watermarking based on singular value decomposition and discrete wavelet transform 3rd International conference on computer science and information. 2010`,
                `<strong>Kapre Bhagyashri S. </strong>and M.Y. Joshi All frequency band DWT-SVD robust watermarking technique for color images in YUV color space IEEE International Conference on Computer Science and Automation 2011`,
                `Anjali A. Bhosle, <strong>Kapre Bhagyashri S</strong> Self embedding watermarking scheme using DCT IRF International Conference, 29th November 2015, Pune 2015`,
            ]
        },
        {
            authorName: "Mr. Mohammed Aijaz Ahmed",
            papers: [
                `Md. Aijaz Ahmed, Dr. D. Rajyalakshimi, Dr. S. A. Sattar “An Improved Dynamic ID-based Remote User Authentication Scheme” ICAEM -2012 Conference held at Royal Institute of Tech. & Science, Hyderabad Duration of Conference 28-29 Feb 2012`,
                `Md. Aijaz Ahmed, M.H. Shastri, Md. Misbahuddin “A Simple and Efficient Solution to Remote User Authentication using Smartcards” IEEE IT – Innovations Conference held at Dubai, UAE Duration of Conference 19-21 Nov 2006`,
                `Md. Aijaz Ahmed, Md. Misbahuddin “A Novel Dynamic ID Based Remote User Authentication Scheme” IEEE Indicon06 Conference held at New Delhi, India Duration of Conference 15-17 Sep 2006`,
                `Md. Aijaz Ahmed, Md. Misbahuddin “A Modified Dynamic ID Based Remote User Authentication Scheme” PICA 2006 (PCEA-IFTOMM) Conference held at Nagpur, India Duration of Conference 11-14 July 2006`,
            ]
        },
        {
            authorName: "Ms.Kale Jyoti S.",
            papers: [
                `Kale Jyoti S. Virtual and augmented reality practice on application and Research in police station management system with security aspects International Virtual Conference on “Recent Trends in Engineering & Technology” Conference held at Vishwakarma Institute of Information Technology, Pune - 48. Duration of Conference 28t-29 th November 2020`,
                `Kale Jyoti S. An inside and out investigation of cloud-fog processing: design, application areas with security highlights International Conference on Innovations and Trends in Computing (ICITC-2021) Conference held at MET’s Institute of Engineering, Bhujabal Knowledge City, Nashik 422003, Maharashtra Duration of Conference February 26-27,2021`,
                `Jyoti S.Kale, Pavan K.Dhoke The application of artificial intelligence and cloud computing technologies to agricultural processes for the purpose of optimizing irrigation and pesticide application 5th International Conference on “Climate Change and Its Impact (CCI 2023) Conference held at Sher-e-Kashmir University of Agricultural Sciences and Technology (SKUAST-K) Srinagar, J&K., India Duration of Conference June 9-11, 2023`,
            ]
        },
        {
            authorName: "Dr. Shital Yadavrao Gaikwad",
            papers: [
                `Shital Yadavrao Gaikwad, Dr. B. R. Bombade Energy Accretion in Wireless Sensor Network Using Protocols, April 2022 International Multidisciplinary Conference, Technology and Engineering Conference held at Pune Duration of Conference 2022`,
                `Pravin L Satore,Shital Y. Gaikwad Cost Optimized Data Access Using Rank Join,3rd April 2019 3rd National Conference Recent Development in Science Engineering and Technology Conference held at Washim Duration of Conference 2019`,
                `Navinkumar Dhopre, Shital Y. Gaikwad Localization of Wireless sensor networks in the wild :pursuit of Ranging Quality,March 2015 Innovation & Emerging Trends in Engineering & Technology Conference held at Pune Duration of Conference 2015`,
                `Deepak Bilolikar, Shital Y. Gaikwad Detection and Localization of Multiple Spoofing Attackers in Wireless Network,April 2015 International Conference on emerging trends in Engineering & Technology Conference held at Pune Duration of Conference 2015`,
                `Shital Y. Gaikwad, Dr.S.B. Thorat Analytical Report of Network Security & Authentication, January 2012 Futuristic Trends in Computer Science Engineering and Information Technology Conference held at Vandavasi Tamil Nadu Duration of Conference 2012`,
            ]
        },
    ],
    nationalConferencesByAuthor: [
        {
            authorName: "Mr. Salve Suhas G",
            papers: [
                `Mr. Salve S.G, Dr. Ms. K. C. Jondhale Shape matching and object recognition using shape context Indian Conference on Computer Vision, Graphics, Image and Video Processing, ICCVGIP 2009. Conference held at Nagpur Duration of Conference March 13-14, 2009`,
                `Ms. Neha P. Lanke, Mr. S.G. Salve Smile Detection using Sectional DCT and Support Vector Machines with Radial Basis Function (RBF) National Conference on Advances in Computing, Networking and Security (NCACNS-13) Conference held at SGGS Institute of Engineering & Technology, Nanded Duration of Conference 23rd-24th December, 2013`,
            ]
        },
        {
            authorName: "Dr. Kapre Bhagyashri Sudhakar",
            papers: [
                `Ms. Kapre B.S. “Robust image watermarking based on Singular value decomposition and Discrete Wavelet Transform” Emerging Trends in Electronics Engineering and Computing Conference held at G.H.Raisoni College Engg. Nagpur Duration of Conference 09-10-Feb 2010`,
            ]
        },
        {
            authorName: "Mr. Pankaj P. Pawar",
            papers: [
                `P.P.Pawar A Prized based Internet Congestion Control System National Level Conference held at Matoshri Nanded Duration of Conference 01`,
            ]
        },
        {
            authorName: "Mr. Rahulsingh G. Bisen",
            papers: [
                `Rahulsingh G. Bisen A Data base model for multicenter clinical trial Emerging trends in Engineering and technology Conference held at Shri. L .R. Tiwari College of Engineering Mumbai Duration of Conference 11th March 2011`,
            ]
        },
        {
            authorName: "Dr. Shital Yadavrao Gaikwad",
            papers: [
                `Shital Y. Gaikwad Localization of Wireless Sensor Networks in the Wild: Pursuit of Ranging Quality Innovations and Emerging Trends in Engineering and Technology Conference held at Nanded Duration of Conference 2015`,
            ]
        },
        {
            authorName: "Mr. Padmakar Deshmukh",
            papers: [
                `Deshmukh Padmakar Wireless Sensor Network : Trends and Applications 2nd National Conference on Global Trends & Innovations in Computer Applications and Informatics Conference held at Shobhit University Meerut Duration of Conference 9-10 April 2011`,
                `Padmakar Deshmukh Wireless Sensor Networks : Applications and Design Issues 3rd National Conference on Next Generation Computing and Information Systems Conference held at Model Institute of Engineering and Technology Kot Bhalwal, Jammu Duration of Conference 18-19 Dec 2010`,
                `Padmakar Deshmukh Web Page:- A Useful Tool for Library ISBN-978-93-5104-069-9 Conference held at Degloor College , Degloor Duration of Conference 2012`,
            ]
        },
    ],
};