import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const cseDepartmentTabs = [
  { name: "DEPT Profile", path: "/academics/computer-science-engineering" },
  { name: "Vision-Mission", path: "/academics/computer-science-engineering/vision-mission" },
  { name: "Programmes", path: "/academics/computer-science-engineering/programmes" },
  { name: "Faculty Profile", path: "/academics/computer-science-engineering/faculty" },
  { name: "Laboratory", path: "/academics/computer-science-engineering/labs" },
  { name: "Training and Placement", path: "/academics/computer-science-engineering/training-placement" },
  { name: "Research & Publication", path: "/academics/computer-science-engineering/research-publication" },
  { name: "Achievements", path: "/academics/computer-science-engineering/achievements" },
  { name: "Departmental Activity", path: "/academics/computer-science-engineering/activities" },
  { name: "Departmental Committees", path: "/academics/computer-science-engineering/committees" },
  { name: "CUC", path: "/academics/computer-science-engineering/cuc" },
  { name: "IEI", path: "/academics/computer-science-engineering/csi-iei" },
  { name: "Curriculum ", path: "/academics/computer-science-engineering/curriculum " },
  { name: "Consultancy", path: "/academics/computer-science-engineering/consultancy" },
  { name: "Innovation in teaching", path: "/academics/computer-science-engineering/innovation-teaching" }, // Changed path from original if it's meant to be unique
];

 

// Faculty data, cleaned up image paths (assuming /public/images/department/faculty/ or /public/images/)
const teachingStaff = [
  {
    id: 'archana-rajurkar',
    img:'/images/cse/faculty/img-head-cse-p2.jpg',
    name: 'Dr. Archana Milind Rajurkar',
    designation: 'Professor & Head',
    specialization: 'Image Processing & Computer Vision',
    email: 'rajurkar_am@mgmcen.ac.in',
    phone: null, // Extracted from HTML, it's empty
    mobile: null, // Extracted from HTML, it's empty
    address: 'H.No.88 Ganesh Nagar , Nanded - 431602',
    detailedProfile: {
      academicQualification: [
        { srNo: 1, degree: 'Ph.D. (Computer Science)', institute: 'Indian Institute of Technology Roorkee, Roorkee', year: 2003 },
        { srNo: 2, degree: 'M. E. (Instrumentation)', institute: 'S.G.G.S. College of Engineering. BAMU, Aurangabad', year: 1998 },
        { srNo: 3, degree: 'B.E. (Computer)', institute: 'M.G.M.’s CEN, Dr. BAMU, Aurangabad', year: 1991 },
        { srNo: 4, degree: 'D.E.E. (Diploma in Elect. Engg.)', institute: 'Bombay Board of Technical Education, Mumbai', year: 1988 },
      ],
      experience: [
        { srNo: 1, designation: 'Lecturer', organization: 'MGM’s College of Engg., Nanded', from: '14-09-1991', to: '31-10-2002', totalExperience: '11 Years' },
        { srNo: 2, designation: 'Assistant Professor & Head', organization: 'MGM’s College of Engg., Nanded', from: '01-11-2002', to: '31-12-04', totalExperience: '2 Year' },
        { srNo: 3, designation: 'Professor & Head', organization: 'MGM’s College of Engg., Nanded', from: '01-01-2005', to: 'Till Date…', totalExperience: '19 Years' },
        { srNo: 4, designation: 'Research', organization: 'I.I.T. Roorkee', from: '27-07-1999', to: '26-07-2002', totalExperience: '3 Years' },
        { srNo: 5, designation: 'Vice Principal', organization: 'MGM’s College of Engg., Nanded', from: 'Feb 2012', to: 'Feb 2016', totalExperience: '4 Years' },
      ],
      researchPublications: {
        summary: [
          'Total Number of Papers in International Refereed Journals: 32',
          'Total Number of Papers in International Conferences: 52',
          'Total Number of Papers in National Conferences: 13',
          'Papers Published as Book Chapter :10'
        ],
        phdThesisTitle: 'Content-Based Image and Video Retrieval using Spatial and Temporal Relation',
        awardsHonors: [
          'Received Best Faculty of the Year (Funded Research Category) at CSI Tech Next India Conference held at IIT Bombay in 2018 in the event Awards to Academia.',
          'Received Academic Excellence Award 2022 on International Day of Education 24th January 2022 from I2OR International Academic Excellence.',
          'Received Platinum Award for presenting a case study of Design of Effective Techniques for Prevention and Detection of Grape Diseases at real time Using IoT and Image Processing from Confederation of Indian Industry-Institute of Quality, CII MILCA Awards 2022 on 17/03/22.',
          'Received IRSD Prominent Award 2023 at 10th International Conference on Interdisciplinary Research for Sustainable Development (IRSD) held on 30th May 2023 at Jamia Hamdard, New Delhi, Organized by International Institute of Organized Research- I2OR and Green ThinkerZ and IIT Bombay Spoken Tutorial.',
          'Received Distinguished Woman Researcher award in Image and Video Processing by Venus International Foundation in 9th Venus Annual Women’s Meet AWM 2024, International Women Awards (VIWA 2024) scheduled on 2nd March 2024 at Green Park Chennai, India, for the contribution and achievement in the discipline of Engineering.'
        ],
        fundedResearchProjects: [
          'BRNS: Received research grant of ₹25 lakhs from BRNS, BARC, Mumbai for the Research Project titled, “Development of an Automated System for Musculoskeletal Image Analysis and Interpretation for Quicker Diagnosis” for the year 2014 to 2018. Project is complete.',
          'BRNS: Received research grant of ₹19.91 Lakhs for the Research Project titled "Development of an AI-based System for Detection of Lung Infections" in 2024.',
          'AMUPMDC: Received research grant of ₹15 Lakhs by AMUPMDC, Mumbai for implementation oof the Research Project titled, “Detection and Classification of Liver Tumors for Designing a CAD System” in 2022.',
          'AICTE: Received Conference Grant of ₹1.7 Lakhs by AICTE in March 2020.',
          'AICTE: Received Research Grant of ₹7 lakhs by AICTE for the implementation of Research Proposal Scheme (RPS) titled, “Content-Based Video Retrieval” in 2007.',
          'DBATU: Received Conference Grant of ₹3 Lakhs for organizing an International Conference ICCET2020 in March 2020.',
          'DBATU: Received FDP Grant of ₹3 Lakhs for organizing 5 days Faculty Development Program on R Programming in Jan 2019.'
        ],
        academicInvolvement: {
          coursesTaught: [
            'Compiler Construction',
            'Database Management System',
            'Multimedia Systems',
            'Multimedia Technology and Applications',
            'Fundamentals of Computer Programming',
            'Image Processing'
          ],
          significantAcademicContribution: [
            {
              type: "International Journals [32]",
              items: [
                'Anita Thengade, Archana M. Rajurkar, “Comparative Analysis of Deep Convolutional Neural Network for Detection of Knee Injuries”, International Journal of Engineering Trends and Technology, Vol. 72, Issue 2, 47-57, Feb 2024, ISSN 2231-5381, https://doi.org/10.14445/22315381/IJETT-V72I2P106',
                'Bhagyashri S. Kapre, Archana M. Rajurkar & D. S Guru, “The blind robust video watermarking scheme in video surveillance context”, Multimedia Tools and Applications: An International Journal, 2023, https://doi.org/10.1007/s11042-023-16620-2',
                'Bhagyashri S. Kapre, Archana M. Rajurkar & D. S Guru, “An improved video keyframe detection technique leads to video authentication”, *SSRG-International Journal of Engineering Trends         and         Technology*         (IJETT),         ISSN:         2231-5381,         2023, https://doi.org/10.14445/22315381/IJETT-V71I4P216',
                'M.R. Banwaskar, A.M. Rajurkar, “An Efficient Flower Classification System Using Feature Fusion”, International Journals on Engineering Trends and Technology, vol. 70 no. 11, pp. 70-80, 2022, https://doi.org/10.14445/2231538V70I11P207',
                'Kainjan Sanghavi, Mahesh Sanghavi, Archana Rajurkar, “Early-Stage Detection of Downey and Powdery Mildew Grape Disease Using Atmospheric Parameters through Sensor Nodes”, Artificial Intelligence in Agriculture, Volume 5, Pages 223-232, ISSN 2589-7217, https://doi.org/10.1016/j.aiia.2021.10.001',
                'M. R. Banwaskar and A. M. Rajurkar, “Content-based retrieval system for surgery videos”, *International Journals Autonomic Computing, Vol. 3, Nos. 3/4, 2020.',
                'Bhagyashri S. Kapre, Archana M. Rajurkar, “Key-frame extraction-based video watermarking using speed-up robust features and discrete cosine transform”, * International Journal of Computer Science and Information Technologies, ISSN: 2722-323X, e-ISSN: 2722-3221, https://doi.org/10.11591/csit.v4i1.p%25p',
                'Bhagyashri S. Kapre, Archana M. Rajurkar, “Novel SURF feature-based Video watermarking”, Science and Engineering Journal, Vol. 15, Issue 10, 2020, ISSN NO: 0103-944X.',
                'Anita Thengade, Archana M. Rajurkar, “A Comprehensive Survey of Articular Cartilage Segmentation Methods on Knee MRI”, International Journal of Advanced Science and Technology, Vol. 27, No. 1, (2019), pp. 148-159.',
                'Deepika K. Nagthane, Archana M. Rajurkar, “An improved Diagnostic Technique for Breast Cancer using LCFS and TreeHiCARe classifier model”, Sensor Review, https://doi.org/10.1108/SR-09-2017-0200, Emrald Publishing Ltd., ISSN 0260-2288, April 2018.',
                'K. S. Thakre, Archana M. Rajurkar, “Shot Boundary Detection of MPEG Video using Biorthogonal Wavelet Transform”, International Journal of Pure and Applied Mathematics, Volume 118, Number 7, pp. 405-413, ISSN: 1311-8080 (printed version); ISSN: 1314-3395 (online version), 2018, http://www.ijpam.eu',
                'Radhika P. Dudhmande, Archana M. Rajurkar, Vinayak G. Kottawar, “Extraction of Menisci and Detection and Characterization of Meniscal Tears in MRI Images,” International Journal of Control Theory and Applications, Volume 10, Issue 09, pp. 729-739, 2017, ISSN 0974-5572.',
                'Deepika K. Nagthane, Archana M. Rajurkar, “Cuckoo search: An Optimized Way for Mammogram Feature Selection”, International Journal of Current Engineering and Scientific Research (IJCESR), Volume 4, Number 8, pp. 81-86, Aug 2017, ISSN 2393-8374.',
                'Deepa. S. Deshpande, Archana M. Rajurkar, and Ramchandra R. Manthalkar, “An Efficient Method for Finding Frequent Itemset,” International Journal of Data Mining, Management and Modelling, (IJDMMM), INDERSCIENCE, Print ISSN: 1759-1163, Volume 8, Number 4, 2016, Online ISSN: 1759-1171.',
                'K. S. Thakre, Archana M. Rajurkar, R. R. Manthalkar, “Video Partitioning and Secured Key frame Extraction of MPEG Video”, Proceedia Computer Science Journal, Volume 78, pp. 790- 798, Elsevier, 2016. Scopus DOI: http://10.1016/j.procs.2016.02.058.',
                'Kalpana S. Thakare, Archana M. Rajurkar, Ramchandra Manthalkar, “Content Based Video Retrieval Using Integration of Spatio-Temporal Features in Compressed Domain”, Journal of Information Processing Systems, Korea, ISSN: 1976-8913X (PRINT), ISSN: 2092-805X (KIPS), 2015.',
                'Deepa S. Deshpande, Archana M. Rajurkar, R.R. Manthalkar, “A Novel Approach for Association Rule Mining using Pattern Generation”, International Journal of Information Technology and Computer Science (IJITCS), Volume 6, Number 11, pp. 59-65, October 2014.',
                'N.A. Deshpande, Archana M. Rajurkar, R.R. Manthalkar, “Robust Dual Watermarking Scheme for Video Retrieval from Strategy Fusion”, International Journal of Image, Graphics and Signal Processing, MECS Press, 2013.',
                'N.A. Deshpande, Mahesh Sanghavi, Archana M. Rajurkar, R.R. Manthalkar, “Visimark1_0: An Assistant tool for evaluating Robustness of video watermarking attacks”, International Journal of Information Technology and Computer Science (IJITCS), Volume 5, Number 2, pp. 10- MECS Press, Hong Kong, DOI: [10.5815/ijitcs.2013.05.02], April 2013. https://doi.org/10.5815/ijitcs.2013.05.02',
                'Archana M. Rajurkar, “File Replication to Access Files with Reasonable Response Time in Data Grid Environment…A Review Study,” International Journal of Modern Engineering Research (IJMER), Volume 3, Number 3, May-June 2013.',
                'Mahesh R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur, and Kainjan S. Kotecha, “Fibonacci Series Based Watermark Embedding in a Video”, Special Issue of International Journal of Computer Application, Volume 1, Number 1, pp. 323-327, Feb 2013.',
                'Kalpana S. Thakare, Archana M. Rajurkar, R. R. Manthalkar, “Content based Video Retrieval using Latent Semantic Indexing and Color, Motion and Edge Features”, International Journal of Computer Applications (IJCA), Volume 54, Number 12, pp. 42-48, September 2012, Published by Foundation of Computer Science, New York, USA, DOI: 10.5120/8621-2486',
                'Mahesh R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur and Kainjan S. Kotecha, “Mathematical Model for Digital Video Watermarking based on 3D Wavelet Transform”, Proceedings published in IJCA, 2012.',
                'Mahesh R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur and Kainjan S. Kotecha, “State of the art review on Digital Video Watermarking”, Special Issue of International Journal of Electronics, Communication & Soft Computing Science & Engineering, March 2012, pp. 123- 133, ISSN: 2277-9477.',
                'Rupali Komatwar, Archana M. Rajurkar, “Use of Particle Filter in Visual Surveillance for Tracking Multiple People”, International Journal of Engineering Research and Technology, Volume 1, Number 2, 2012, ISSN 2278-0181.',
                'Kalpana S Thakre, Archana M. Rajurkar, R.R. Manthalkar, “A Comprehensive CBVR System Based On Spatio Temporal Features Such as Motion, Quantized Colour and Edge Density Features”, International Journal of Wireless and Microwave Technologies, (IJWMT), Volume 1, Number 3, June 2011, MECS Press, Hong Kong, ISSN: 2076-1449(Print), ISSN: 2076-9539 (Online).',
                'Kalpana S. Thakre, Archana M. Rajurkar, R. R. Manthalkar, “An Effective CBVR System Based On Motion, Quantized Colour and Edge density features”, International Journal of Computer Science & Information Technology (IJCSIT), Volume 3, Number 2, April 2011, DOI: 10.5121/ijcsit.2011.3206 78.',
                'Mahesh R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur, Kainjan S. Kotecha, “Scene Based Digital Video Watermarking”, International Journal of Scientific Computing, Volume 5, Number 2, pp. 43-47, July-December 2011.',
                'Mahesh R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur, Kainjan S. Kotecha, “A Robust Scheme for Digital Video Watermarking based on Scrambling of Watermark”, International Journal of Computer Application (IJCA), Volume 35, Number 2, pp. 31-38, December 2011.',
                'Nilima Kulkarni, Archana M. Rajurkar, “Natural Image Segmentation and Object Recognition using ACA and Steerable Filter based on Color-Texture Features”, International Journal of Scientific & Engineering Research (IJSER), Volume 2, Issue 12, December-2011.',
                'N.A. Deshpande, Archana M. Rajurkar, R.R. Manthalkar, “Review of Robust Video Watermarking Algorithms”, *International Journal of Computer Science and Information Security* (IJCSIS), Volume 7, Number 1, March 2010, ISSN 1947-5500.'
              ]
            },
            {
              type: "National Journals: [1]",
              items: [
                'Archana M. Rajurkar and R. C. Joshi, “Content-Based Image Retrieval in Defence Application by Spatial Similarity,” Defense Science Journal, Vol. 52, No. 3, July 2002, pp. 285-291.'
              ]
            },
            {
              type: "Papers Published as a Book Chapter: [10]",
              items: [
                'Kapre, B.S., Archana M. Rajurkar, “Blind robust video watermarking scheme in video surveillance context”, Lecture Notes in Networks and Systems 2022, International Conference on Next Generation Systems and Networks, 4-5 November, BITS EEE CON 2022.',
                'Kainjan Sanghavi, Archana M. Rajurkar, * “Early Detection of Stem Borer in Grape Diseases”, Springer Nature Singapore Pte Ltd., Next Generation Information Processing System, Part of the Advances in Intelligent Systems and Computing book series (AISC, volume 1162), pp. 203-212, ISBN: 978-981-15-4850-5, ISBN 978-981-15-4851-2 (eBook).',
                'Kapre, B.S., Archana M. Rajurkar., Guru, D.S., “Self-embedding and Variable Authentication Approach for Fragile Image Watermarking Using SVD and DCT”, Cognition and Recognition. ICCR 2021., Communications in Computer and Information Science, vol 1697. Springer, DOI: 10.1007/978-3-031-22405-8_29',
                'M.R. Banwaskar, Archana M. Rajurkar and D.S. Guru, “Selected Deep Features and Multiclass SVM for Flower Image Classification” Cognition and Recognition: 8th International Conference ICCR 2021, Communications in Computer and Information Science, Vol 1697, pp 352-365 Springer, https://doi.org/10.1007/978-3-031-22405-8_29.',
                'Anita Thengade and Archana M. Rajurkar, “Segmentation of Knee Bone Using MRI”, Published in Applied Computer Vision and Image Processing, Proceedings of ICCET 2020, Vol 1, Advances in Intelligent Systems and Computing 1155.',
                'M. R. Banwaskar and Archana M. Rajurkar, “Creating Video Summary Using Speeded Up Robust Features”, Published in Applied Computer Vision and Image Processing, Proceedings of ICCET 2020, Vol 1, Advances in Intelligent Systems and Computing Series 1155.',
                'Deepa. S. Deshpande, Archana M. Rajurkar, and Ramchandra R. Manthalkar, “Texture Based Associative Classifier - An Application of Data Mining for Mammogram Classification,” Computational Intelligence in Data Mining - Volume 1, Smart Innovation, Systems and Technologies Series, Volume 31, pp.387-400, Springer.',
                'R. G. Bisen Archana M. Rajurkar, “Segmentation, Detection, and Classification of Liver Tumours for Designing a CAD System”, Computing in Engineering and Technology, Springer.',
                'Archana M. Rajurkar, R.C. Joshi, Santanu Chaudhary and Ramchandra Manthalkar, “Video Content Description Using Fuzzy Spatio-Temporal Relations,” Accepted for publishing in the book Digital Video as a Chapter published by In-Tech Publishers, Austria, ISBN 978-3-902613- 44-8.',
                'Kapre, B.S., Archana M. Rajurkar., “Robust and Secure Lucas Sequence-Based Video Watermarking”, Applied Computer Vision and Image Processing. Advances in Intelligent Systems and Computing, vol 1155. Springer, Singapore, DOI: 10.1007/978-981-15-4029-5_30.'
              ]
            },
            {
              type: "International Conferences [52]",
              items: [
                'Anita Thengade, Archana M. Rajurkar, “Meniscus Classification from Knee Magnetic Resonance Imaging” in the 9th Annual Women\'s Meet – AWM 2024 (Scientific Conference ISBN: 978–81–969897–4–3 | Theme: To Cultivate Research Spirit and Create a Vibrant Community of Women in Science and Technology) organized by the Centre for Women Development of Venus International Foundation on Saturday 2nd of March 2024 at Green Park Chennai, India.',
                'Kapre, B.S., Archana M. Rajurkar., “Blind robust video watermarking scheme in video surveillance context”, Lecture Notes in Networks and Systems 2022, International Conference on Next Generation Systems and Networks, 4-5 November, BITS EEE CON 2022.',
                'Kapre, B.S., Archana M. Rajurkar., Guru, D.S., “Self-embedding and Variable Authentication Approach for Fragile Image Watermarking Using SVD and DCT”, Cognition and Recognition: 8th International Conference ICCR 2021, Communications in Computer and Information Science, Vol 1697, pp 366-379. Springer, DOI: 10.1007/978-3-031-22405-8_29',
                'M. R. Banwaskar Archana M. Rajurkar, D.S. Guru, “Selected Deep Features and Multiclass SVM for Flower Image Classification”, Cognition and Recognition: 8th International Conference ICCR 2021, Communications in Computer and Information Science, Vol 1697, pp 352-365. Springer, DOI: 10.1007/978-3-031-22405-8_29',
                'R.G. Bisen, N.S. Pande Archana M. Rajurkar, “The Role of Medical Imaging in COVID-19 Detection and Diagnosis: A Review”, International Conference for Advancement in Technology (ICONAT).',
                'Bhagyashri S. Kapre, Archana M. Rajurkar, “Robust and Secure Lucas Sequence based Video Watermarking”, Proc. of 5th International Conference on Computing in Engineering & Technology, 9-11 January 2020. Applied Computer Vision and Image Processing, Part of Advances in Intelligent Systems and Computing book series, AISC, Vol 1155. Springer, Singapore. DOI: 10.1007/978-981-15-4029-5_30',
                'Anita Thengade, Archana M. Rajurkar, “Segmentation of Knee Bone using MRI”, Proc. of 5th International Conference on Computing in Engineering & Technology, 9-11 January 2020. Applied Computer Vision and Image Processing. Part of Advances in Intelligent Systems and Computing book series, AISC, Vol 1155. Springer, Singapore.',
                'Kainjan Sanghavi, Archana M. Rajurkar, “Early Detection of Grape Stem Borer Using IOT”, 5th International Conference on Computing in Engineering & Technology organized by Department of Electronics and Telecommunication Engineering, Dr. B.A.T.U., Lonere and Department of Computer Science & Engineering, MGM’s College of Engineering, Nanded during 9-11th January 2020',
                '9 M. R. Banwaskar, Archana M. Rajurkar, “Creating Video Summary using Speeded Up Robust Features”, 5th International Conference on Computing in Engineering & Technology organized by Department of Electronics and Telecommunication Engineering, Dr. B.A.T.U., Lonere and Department of Computer Science & Engineering, MGM’s College of Engineering, Nanded during 9-11th January 2020',
                'Anita Thengade, Archana M. Rajurkar, “Segmentation of Knee Bone using MRI”, 5th International Conference on Computing in Engineering & Technology organized by Department of Electronics and Telecommunication Engineering, Dr. B.A.T.U., Lonere and Department of Computer Science & Engineering, MGM’s College o Engineering, Nanded during 9-11th January 2020.',
                'Rahulsingh G. Bisen, Archana M. Rajurkar, R.R. Manthalkar “A State-of-the-Art on Segmentation, Detection and Classification of Liver Tumors for Designing a CAD System”, 4th International Conference on Computing in Engineering & Technology held by University Department of Electronics and Telecommunication Engineering, Dr. B.A.T.U., Lonere and D.I.E.M.S., Aurangabad during 9-11th January 2019.',
                'Deepika Nagthane, Archana M. Rajurkar, “A New Approach for Mammogram Classification Using Association Rules: To Make Breast Cancer History”, 4th International Conference on Computing in Engineering & Technology held by University Department of Electronics and Telecommunication Engineering, Dr. B.A.T.U., Lonere and D.I.E.M.S., Aurangabad during 9-11th January 2019.',
                'Deepika K. Nagthane, Archana M. Rajurkar, “A Novel Approach for Mammogram Classification”, 3rd IEEE International Conference on Recent Trends in Electronics, Information & Communication Technology (RTEICT 2018), Bangalore, ISSN 978-1-5386-24401.',
                'Priti Satapure, Archana M. Rajurkar, “Automatic Articular Cartilage Segmentation with Multiple Models”, IEEE & CSI Sponsored 1st International Conference on Intelligent Systems and Information Management ICISIM, Oct 05-06, 2017, MGM’s JNEC, Aurangabad, India.',
                'R. P. Dudhmande, Archana M. Rajurkar, “Extraction of Whole and Torn Meniscus in MRI Images and Detection of Meniscal Tears”, IEEE & CSI Sponsored 1st International Conference on Intelligent Systems and Information Management ICISIM, Oct 05-06, 2017, MGM’s JNEC, Aurangabad, India.',
                'R. P. Dudhmande, Archana M. Rajurkar, V. G. Kottawar, “Extraction of Menisci and Detection and Characterization of Meniscal Tears in MRI Images”, International Springer Conference on Intelligent Computing and Applications, D. Y. Patil College of Engineering, Pune, Dec 2016.',
                'M. R. Banwaskar, Archana M. Rajurkar, “Performance Analysis of Shot Change Detection Methods”, 2nd International Conference. on Communication and Signal Processing, Dr. BATU, Lonere, Dec 2016.',
                'M. R. Banwaskar, Archana M. Rajurkar, “Key Frame Extraction using Pre-processing and Corner Detector”, International Conference. on Computer Vision, Graphics, and Image Processing, IIT, Guwahati, Dec. 2016.',
                'Kalpana S. Thakre, Archana M. Rajurkar, Ramchandra Manthalkar, “Video Partitioning and Secured Keyframe Extraction of MPEG Video”, 1st International Conference on Information Security and Privacy, Procedia Computer Science Elsevier.2015',
                'Mahesh R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur, “Keyframe based Video Watermarking”, International Conference on Recent Trends in Engineering & Technology, July 2015.',
                'Mahesh R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur, “Digital Video Watermarking Based Key-frame Selection”, ICEMS, Jaipur National University, July 2015, Jaipur.',
                'Deepa S. Deshpande, Archana M. Rajurkar, Ramchandra R. Manthalkar, “Mammogram Classification using Association Rule Mining,” Proc. 10th International Conference on Data Mining, DMIN’14* July 21-24, 2014, Las Vegas, Nevada, USA.',
                'Deepa S. Deshpande, Archana M. Rajurkar and Ramchandra R.Manthalkar, “ Texture Based Associative Classifier – An Application of Data Mining for Mammogram Classification,” Proc. International Conference on Computational Intelligence in Data Mining, ICCIDM-2014, December 20-21, 2014, pp. 24, Veer Surendra Sai University of Technology, Burla, Sambalpur, Odisha, India.',
                'Mahesh R. Sanghavi, Kainjan S. Kotecha, Deepa S. Deshpande, Archana M. Rajurkar and Ramchandra R.Manthalkar, “ Texture Based Associative Classifier – An Application of Data Mining for Mammogram Classification,” Proc. International Conference on Computational Intelligence in Data Mining, ICCIDM-2014, December 20-21, 2014, pp. 24, Veer SurendraSai University of Technology, Burla, Sambalpur, Odisha, India.',
                'Mahesh R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur, Kainjan S. Kotecha, “Fibonacci Series Based Watermark Embedding in a Video”, International Conference on Recent Trends in Engineering & Technology 2013. (ISBN: 978-81-926080-0-6), Feb 2013, 1, 1, pp. 323-327',
                'M. R. Banwaskar, A. M. Rajurkar, “Video Shot Boundary Detection”, Int. Conf. on Computer Vision, Graphics, and Image Processing, IIT, Jodhpur, Jan. 2013',
                'Mahesh R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur, “Efficient Video Watermarking in Selected Frames Based on Fibonacci Series for Ownership Proof”, in Proceedings of International Conference on Emerging Research in Computing, Information, Communication and Applications, Elsevier Publications 2013, pp 93-98.',
                'Mahesh R. Sanghavi, Archana M. Rajurkar, Kainjan S. Kotecha, Rajeev Mathur, “State of the Art Review of Digital Watermarking”, 1st International Conference on Recent Trends in Engineering & Technology, 23-25 Mar 2012, pp. 123-133.Special Issue of International Journal of Electronics, Communication & Soft Computing Science & Engineering, ISSN: 2277-9477',
                'Kainjan S. Kotecha, Mahesh R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur, “Content Based Video Retrieval Using Ranking Correlation, Motion and Color”, 1st International Conference on Recent Trends in Engineering & Technology, Mar-2012. Special Issue of International Journal of electronics, Communication & Soft Computing Science & Engineering, ISSN: 2277-9477, pg 283-289.',
                'Mahesh R. Sanghavi, Kainjan S. Kotecha, Archana M. Rajurkar, Rajeev Mathur, “Mathematical Modelling for Digital Watermarking”, ICCIA-2012 held at SITRC Nasik , 12-12 Feb 2012',
                'Kalpana S. Thakare, Archana M. Rajurkar, R. R. Manthalkar , “ Content based Video Retrieval using Latent Semantic Indexing and Singular Value Decomposition” Proceedings of International Conference on Communication, Information and Computing Technology (ICCICT- 2012), Sardar Vallabhbhai College of Engineering, Andeheri west ,Mumbai, India, October 18- 20, 2012. (IEEE Digital Explore) DOI: 10.1109/ICCICT.2012.6398229.',
                'Kalpana S. Thakre, Archana M. Rajurkar, Ramchandra Manthalkar, “A Comprehensive CBVR System Based on Spatiotemporal Features such as Motion, Quantized Colour and Edge Density Features”, The 3rd International Conference on Networks Security, Wireless Communications and Trusted Computing (NSWCTC 2011), Wuhan, China, 23-24 April 2011 sponsored by IEEE.',
                'M.R. Sanghavi, Archana M. Rajurkar, Rajeev Mathur, “Mathematical Model for Digital Video Watermarking Based on 3D Wavelet Transform”, International Conference in Computational Intelligence (ICCIA), 2011.',
                'M. R. Banwaskar, A. M. Rajurkar, “Video Segmentation: A Critical Survey”, World Congress in Computer Sci., Computer Engineering and Applied Computing, Las Vegas, USA, July 2011.',
                'Kalpana S. Thakre, Archana M. Rajurkar, “CBIR/CBVR IN Medical Applications: A Critical Review”, Proceedings of the First IFIP International Conference on Bioinformatics at SVNIT, Surat, 25th-28th March 2010.',
                'M. R. Banwaskar, A. M. Rajurkar, “Content Based Video Retrieval”, Int. Conf. on Computer Vision, Graphics, and Image Processing, IIT Madras, Dec. 2010',
                'Kalpana S. Thakre, Archana M. Rajurkar, R. R. Manthalkar, “An effective CBVR system based on Motion, Quantized color and edge density features”, IITM \'10 Proceedings of the First International Conference on Intelligent Inter active Technologies and Multimedia. Sponsored by ACM New York, NY, USA, 2010, ISBN: 978-1-4503-0408-5, DOI: 10.1145/1963564.1963589.',
                'Kalpana S. Thakre, Archana M. Rajurkar, R. R. Manthalkar, “Video Segmentation and Identification in Compressed Domain: A Review”, Proceedings of International Conference on Engineering Innovations – A flip to Economics development (ICEI2K10) at Jalwera Campus, Punjab.',
                'N.A. Deshpande, Archana M. Rajurkar, R.R Manthalkar, “Visible Watermarking Algorithms for Embedding Gray Scale and Color Watermarks”, International Conference on Information Security and Artificial Intelligence (ISAI 2010) in China, pp. V2-334-338, 2010. ISBN 978-1-4244- 8870-4.',
                'N.A. Deshpande, Archana M. Rajurkar, R.R Manthalkar, “Robust DCT based Video Watermarking algorithms for Assorted Watermarks”, In Proceedings of 2nd International Conference on Signal Processing Systems (ICSP) Sin Dalian China, pp. VI-320-324,2010, ISBN9 78-1-4244-6892-8, IEEEXplore,DOI: 10.1109/ICSPS.2010.5555632',
                'M.R. Sanghavi, Archana M. Rajurkar, “Digital Video Watermarking Based on Scene Change Detection”, Proc. WorldComp 2009 International Conference on Image Processing, Computer Vision, and Pattern Recognition (IPCV\'09), Monte Carlo Resort, Las Vegas, Nevada, USA, July 13-16, 2009.',
                'K.S. Kotecha, Archana M. Rajurkar, “Content-Based Video Retrieval Using Ordinal Measure, Motion and Colour,” Proc. World Comp 2009 International Conference on Image Processing, Computer Vision, and Pattern Recognition (IPCV\'09), Monte Carlo Resort, Las Vegas, Nevada, USA, July 13-16, 2009.',
                'Archana M. Rajurkar, R.C. Joshi, Santanu Chaudhary, “Video Content Description Using Fuzzy Spatio-Temporal Relations,” Proc. of the Forty-First Annual Hawaii International Conference on System Sciences, Waikoloa, Big Island, Hawaii, USA, 7-10 Jan 2008.',
                'Archana M. Rajurkar, Suresh Asole and Pravin Satao, “Image Retrieval Using Colour Texture Moments” Proc. First International Conference on Advances in Computing ICAC 2008, Anuradha Engineering College, Chikhali, Maharashtra, India, 21-22 Feb 2008.',
                'Jamkhandikar Dayanand, Archana M. Rajurkar, R.R. Manthalkar, “Retrieval of Trademark Images Based on Shape”, Proc. of the International Conference on Advances in Computer Vision and Information Technology (ACVIT -07), Dr. Babasaheb Ambedkar Marathwada University, Aurangabad, India, Nov 28-30, 2007.PP 1002-1009.',
                'Archana M. Rajurkar, R.C. Joshi and Venkat N. Gudivada, “Indexing For Fuzzy Spatial Similarity Approach,” Proc. of the International Conference on Advances in Computer Vision and Information Technology (ACVIT -07), Dr. Babasaheb Ambedkar Marathwada University Aurangabad, India, Nov 28-30, 2007.',
                'Priyanka Agrawal, R.R. Manthalkar and Archana M. Rajurkar, “Two-texture Segmentation by Optimal Filter: Application in Mammography,” Proc. of the IEEE First International Conference on Signal and Image Processing, volume 1, B.V. Bhoomaraddi College of Engineering and Technology, Hubli, Karnataka, India, Dec 7-9, 2006.PP 303-307.',
                'Archana M. Rajurkar, R.C. Joshi and Santanu Chaudhary, “Use of Spatio-temporal Relations for Describing Video Content,” Proc. of the IEEE First International Conference on Signal and Image Processing Volume-2, B.V. Bhoomaraddi College of Engineering and Technology, Hubli, Karnataka, India, Dec 7-9, 2006.PP 653-658.',
                'Archana M. Rajurkar and R. C. Joshi, “Image Retrieval by Fuzzy Spatial Similarity in Multimedia Databases,” Proc. of the International Conference on Cognition and Recognition, P.E.S. College of Engineering, Mandya, Karnataka, India, Dec 22-23, 2005, pp. 208-213.',
                'Archana M. Rajurkar and R. C. Joshi, “Binary Shape Representation and Recognition Using the Regulated Morphological Skeleton Transform,” Proc. of International Conference on Computer Applications in Electrical Engineering Recent Advances, CERA’01, IIT Roorkee, Roorkee, India, Feb 20-22, 2002, pp. 331-339.',
                'Archana M. Rajurkar and R. C. Joshi, “Content-Based Image Retrieval: A Fuzzy Spatial Similarity Approach” Proc. International Symposium on Artificial Intelligence, ISAI’2001, Fort Panhala, Kolhapur, India, Dec 18-20, 2001, pp. 341-348.',
                'Archana M. Rajurkar and R. C. Joshi, “Content-Based Retrieval in Multimedia Databases by Spatial Similarity,” Proc. International Conference on Multimedia Processing Systems, IIT Madras, Chennai, India, August 13-15, 2000, pp. 75-78'
              ]
            }
          ]
        },
        patentPublished: {
          title: 'Design an IoT with Image Processing Based Solution of Detecting the Downy Mildew Disease of Grapes',
          details: 'Kainjan M. Sanghavi, Dr. Mrs. Archana M. Rajurkar, Dr. Mahesh R. Sanghavi, “Design an IoT with Image Processing Based Solution of Detecting the Downy Mildew Disease of Grapes”, The Patent Office Journal No. 13/2018 Dated 30/03/2018 11264, Application No. 201821009017 A, Publication Date: 30/03/2018.'
        }
      },
      outreachActivities: {
        summary: [
          'Visit to Hawaii, USA to attend the International Conference and present a research paper in Jan 2008. Also visited Stanford University and Northwestern University, Chicago.',
          'Referee with Journal: Reviewer for International Journal on ‘Pattern Recognition’, Elsevier publications.',
          'Worked as reviewer for National and International conferences.',
          'Selected as examiner for evaluation of Ph.D. thesis of University of Mysore.',
          'Two of the research papers have been accepted for World Comp 2009 International Conference on Image Processing, Computer Vision, and Pattern Recognition (IPCV\'09), Monte Carlo Resort, Las Vegas, Nevada, USA.',
          'Three of my PG students received Best Paper Awards in International Conferences'
        ],
        seminarsConferences: {
          attended: [
            { srNo: 1, title: '9th Annual Women\'s Meet – AWM 2024 (Scientific Conference ISBN: 978–81–969897–4–3 | Theme: To Cultivate Research Spirit and Create a Vibrant Community of Women in Science and Technology)', organizerPlace: 'Centre for Women Development of Venus International Foundation at Green Park Chennai, India.', period: '2nd March 2024' },
            { srNo: 2, title: '5th International Conference on Computing in Engineering and Technology ICCET2020', organizerPlace: 'MGM’s College of Engineering, Nanded', period: '09-11th January 2020' },
            { srNo: 3, title: '4th International Conference on Computing in Engineering and Technology', organizerPlace: 'Deogiri Institute of Engg & Management Studies, Aurangabad', period: '09-11th January 2019' },
            { srNo: 4, title: 'TechNExt India 2018, Annual Industry and Academis Conference and Awards 2018, CSI India', organizerPlace: 'Victor Menezes Convention Centre, IIT Bombay', period: '10-11’th February 2018' },
            { srNo: 5, title: 'IEEE and CSI sponsored 1’st International Conference on Intelligent Systems and Information Management ICISIM- 2017', organizerPlace: 'MGM’s JNEC, Aurangabad, MS, India', period: '05’-06’th October 2017' },
            { srNo: 6, title: 'International Conference on Signal and Information Processing IConSIP-2016', organizerPlace: 'SGGS Institute of Engg& Technology, Nanded in association with IIT, Bombay, COE Pune, SVUCE Tirupati and Technically co-sponsored by IEEE Bombay,', period: '6-8’th October 2016.' },
            { srNo: 7, title: 'National Conference on TEQIP II : Best Policies and Practices', organizerPlace: 'State Project Facilitation Unit, TEQIP II, Maharashtra State and SGGS Institute of Engineering and Technology, Nanded', period: '10-11’th Jan 2014' },
            { srNo: 8, title: 'National Conference on Communication, Computing and Networking Technologies (NCCCNT-13)', organizerPlace: 'SGGS Institute of Engineering and Technology, Nanded', period: '15-16th March 2013' },
            { srNo: 9, title: '1st World Summit on Accreditation WOSA 2012', organizerPlace: 'National Board of Accreditation, New Delhi', period: '25-28th March 2012' },
            { srNo: 10, title: 'First International Conference on Advances in Computing, ICAC 2008', organizerPlace: 'Anuradha Engineering College, Chikhali, Maharashtra, India.', period: 'Feb 21-22, 2008' },
            { srNo: 11, title: 'Forty-First Annual Hawaii International Conference on System Sciences', organizerPlace: 'Waikoloa, Big Island, Hawaii, USA.', period: 'Jan 7-10, 2008' },
            { srNo: 12, title: 'IEEE First International Conference on Signal and Image Processing', organizerPlace: 'B.V.B. College of Engineering and Technology, Hubli, Karnataka, India.', period: 'Dec 7-9, 2006' },
            { srNo: 13, title: 'Annual Convention of ISTE (Maharashtra and Goa Section) on Technical Education-Technology Transfer to Rural India and Sustainable Development', organizerPlace: 'M.G.M.’s College of Engineering, Nanded.', period: 'March  4-5, 2006' },
            { srNo: 14, title: 'International Conference on Cognition and Recognition', organizerPlace: 'P.E.S. College of Engineering, Mandya, Karnataka, India.', period: 'Dec 22-23, 2005' },
            { srNo: 15, title: 'Computer Applications in Electrical Engineering - Recent Advances” (CERA-01)', organizerPlace: 'Department of Electrical Engineering, IIT Roorkee, Roorkee.', period: 'Feb. 21-23, 2002' },
            { srNo: 16, title: 'ICMPS 2000 on Multimedia Processing and Systems', organizerPlace: 'Office of Naval Research, University of Maryland and IIT Madras, Chennai.', period: 'August 13-15, 2000' },
            { srNo: 17, title: 'Information Technology and Applications: Emerging Trends', organizerPlace: 'IIT Roorkee, Roorkee.', period: 'Dec.23-24, 1998' },
            { srNo: 18, title: 'Computer Society of India, Western Region Convention', organizerPlace: 'JNE College of Engineering, Aurangabad.', period: 'March 1-3, 1996' }
          ],
          shortTermCourses: [
            { srNo: 1, title: 'Future of Education Workshop by Employability. Life', place: 'MGM’s College of Engineering and Technology Mumbai', period: '25th Nov 2023' },
            { srNo: 2, title: 'Program on Institutional Transformation Strategy by Digital Commonwealth, London, UK', place: 'MGM’s College of Engineering and Technology Mumbai', period: '2022' },
            { srNo: 3, title: 'National Intellectual Property Awareness Mission', place: 'Intellectual Property Office, India', period: '16th Dec 2022' },
            { srNo: 4, title: 'Principals’ Meet followed by Two Day Workshop on "Introduction to Robotics" by e-Yantra Lab Setup Initiative (eLSI), e- Yantra Project of IIT Bombay at', place: 'M.G.M.’s College of Engineering, Nanded.', period: '2nd & 3rd August 2019' },
            { srNo: 5, title: 'Python Workshop organized by Teaching Learning Centre (ICT) at IIT Bombay funded by PMMMNMIT', place: 'M.G.M.’s College of Engineering, Nanded.', period: '22nd June 2019' },
            { srNo: 6, title: 'TEQIP-III Sponsored one day workshop on Curriculum Development for Computer Science and Engineering', place: 'Dr. Babasaheb Ambedkar Tech. University, Lonere', period: '01st May 2019' },
            { srNo: 7, title: 'International Workshop on Pattern Analysis and Machine Intelligence Document Engineering to Healthcare', place: 'Solapur University, Solapur.', period: '20th Dec 2018' },
            { srNo: 8, title: 'Faculty Development Program (FDP) Foundation Program in ICT for Education conducted by IIT Bombay', place: 'M.G.M.’s College of Engineering, Nanded.', period: '13-18th September 2018' },
            { srNo: 9, title: 'One Day NBA Orientation Workshop on Outcome Based Accreditation Process and Parameters', place: 'MSPM’s Deogiri Institute of Engineering and Management Studies, Aurangabad', period: '9’th June 2017' },
            { srNo: 10, title: 'Two-Week ISTE STTP Workshop on Introduction to Design of Algorithms Conducted by IIT Kharagpur', place: 'MGM’s College of Engineering, Nanded Remote Center Under NMEICT(MHRD)', period: '27’th to 30’th May, 2015' },
            { srNo: 11, title: 'Two-Week ISTE STTP Workshop on Computer Programming Conducted by IIT Bombay', place: 'MGM’s College of Engineering, Nanded Remote Center Under NMEICT(MHRD)', period: 'May 20’th to June 21’st 2014' },
            { srNo: 12, title: 'One Week STTP on Signal, Speech and Image Processing Using MATLAB', place: 'MGM’s College of Engineering, Nanded', period: '1-6th July 2013' },
            { srNo: 13, title: 'Two Days Advance Mission 10X Faculty Empowerment Workshop by Wipro Technologies', place: 'MGM’s College of Engineering, Nanded', period: '30-31st March 2012' },
            { srNo: 14, title: 'Five Days Mission 10X Faculty Empowerment Workshop by Wipro Technologies', place: 'MGM’s College of Engineering, Nanded', period: '28 Nov-2nd Dec 2011' },
            { srNo: 15, title: 'One day workshop on “Demystifying GCC thorough Gray Box Probing”', place: 'Department of Computer Sci.&Engg. Shri Guru Gobind Singhji Institute of Engineering & Technology, Nanded', period: '6th March 2010' },
            { srNo: 16, title: 'One day workshop on ECG Analysis and Interpretation', place: 'Department of Instrumentation Engineering. Shri Guru Gobind Singhji Institute of Engg., & Technology, Nanded', period: '17th Feb 2010' },
            { srNo: 17, title: 'Two Week ISTE Workshop on Effective teaching/learning of Computer Programming', place: 'Indian Institute of Technology, Bombay', period: '14-24th Dec 2009' },
            { srNo: 18, title: 'Workshop on Compiler Construction: From Practice to Theory', place: 'Department of Computer Engg. and IT, COEP, Pune.', period: '7-13thSept 2007' },
            { srNo: 19, title: 'Training program on Object Oriented Analysis and Design Using the UML with Fundamentals of Rational Rose', place: 'IBM Rational SEED, Pune, INDIA, at MGMCE Nanded.', period: '17-18thFeb 2007' },
            { srNo: 20, title: 'Training program on AIX5L Basics', place: 'IBM INDIA Banglore.', period: '10-13th July 2006' },
            { srNo: 21, title: 'Recent Trends in Signal and Image Processing', place: 'Department of E&TC, SGGSIET, Nanded.', period: '16-18th Jan 2006.' },
            { srNo: 22, title: 'PG Level course in audit mode, titled Multimedia Systems', place: 'DEP, KReSIT, IIT Bombay.', period: 'Jan-May 2003' },
            { srNo: 23, title: 'Course on JAVA organized by Mechanical and Industrial Engineering Students Society', place: 'IIT Roorkee, Roorkee.', period: '16- 6th Feb 2000' },
            { srNo: 24, title: 'Microsoft NT 4.0 and Workstation', place: 'Microsoft at Microland, Pune', period: 'Mar-97' },
            { srNo: 25, title: 'Microprocessors in Instrumentation', place: 'SGGS College of Engineering, Nanded.', period: '17-28th June 1996' }
          ],
          organized: [
            { srNo: 1, title: 'Organised 5th International Conference on Computing in Engineering and Technology ICCET2020 in association with Dept. of Electronics and Telecommunication Engg., Dr. BA Technological University, Lonere, Maharashtra and AICTE', place: 'Department of CSE, MGM’s College of Engineering, Nanded', period: '09-11th January 2020' },
            { srNo: 2, title: 'Organised Principals’ Meet followed by Two Day Workshop on "Introduction to Robotics" by e- Yantra Lab Setup Initiative (eLSI), e-Yantra Project of IIT Bombay', place: 'Department of CSE, M.G.M.’s College of Engineering, Nanded.', period: '2nd & 3rd August 2019' },
            { srNo: 3, title: 'Organised Faculty Development Program on “Data Science using R-Programming” Sponsored by TEQUIP-III, Dr. BA Technological University, Lonere, Maharashtra', place: 'Department of CSE, M.G.M.’s College of Engineering, Nanded.', period: '7 – 11th Jan 2019' }
          ]
        }
      },
      academicEnvironment: {
        laboratoryDevelopment: [
          'Development of ten Computer Labs of the Department in the capacity of Head of the Department.',
          'Development of Image Analysis and Computer Vision Lab for PG students.'
        ],
        proposalsProjects: [
          'Establishment of PG course in Computer Science and Engineering ME(CSE) in 2003.',
          'Establishment of another PG course in CSE Department named Computer Network and Internet security ME(CNIS) in 2012.',
          'A MOU with Distance Education Program of IIT Bombay.',
          'A MOU with Oracle Corporation for implementing the program Workforce Development.',
          'A MOU with IBM for Power Academy Program (PAP).',
          'A MOU with Machine Intelligence Research Labs (MRI Labs), Washington, USA'
        ],
        researchScholarsPhD: {
          summary: '9 Ph.D. scholars have completed their PhD and 3 candidates currently pursuing their doctoral research.',
          list: [
            { srNo: 1, name: 'Kapre Bhagyashri Sudhakakrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Robust Content Based Image and Video Watermarking Schemes and Architecture in Compressed Domain', year: 'Completed 27/1/2024' },
            { srNo: 2, name: 'Rahulsingh Gopalsingh Bisen', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Automatic detection of lung infections in chest X-ray images', year: 'Pursuing in 22-23' },
            { srNo: 3, name: 'Nikita Sanjay Pande', registeredWith: 'Dr. Babasaheb Ambedkar Technological University, Lonere', titleArea: 'Detection and Classification of Liver Tumor', year: 'Pursuing in 22-23' },
            { srNo: 4, name: 'Banwaskar Mangal Ramrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Designing of an Efficient Method for Content-Based Video Indexing and Retrieval', year: 'Completed 27/12/23' },
            { srNo: 5, name: 'Sanghavi Kainjan Mahesh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Effective Techniques for Prevention and Detection of Grape Diseases at Real Time Using IOT and Image Processing', year: 'Completed 30/1/2023' },
            { srNo: 6, name: 'Kottawar Vinayak Gajanan', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Content-Based Image Retrieval in P2P and Cloud Environment', year: 'Completed 5/1/2017' },
            { srNo: 7, name: 'Thakre Kalpana Sunil', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Video Retrieval in Compressed Domain', year: 'Completed 1/2/16' },
            { srNo: 8, name: 'Thengade Anita Mahesh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Automated System for Musculoskeletal Image Analysis and Interpretation of Knee for Quicker Diagnosis', year: 'Submitted 28/04/2016' },
            { srNo: 9, name: 'Dhawase Dhammjyoti Vitthalrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Efficient Video Affective Content Analysis System', year: 'Pursuing 28/04/2016' },
            { srNo: 10, name: 'Sanghavi Mahesh Ranglal', registeredWith: 'Jodhpur National University, Jodhpur', titleArea: 'Design and Analysis of robust Algorithm for Digital Image and Video Watermarking to Protect and Authenticate Multimedia Content', year: 'Completed 2015' },
            { srNo: 11, name: 'Deshpande Deepa Sachin', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Discovering Association Rules based on Image Content', year: 'Completed 6/11/15' },
            { srNo: 12, name: 'Deshpande Neeta Amogh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Designing Robust Algorithms for Embedding Watermark in Digital Video.', year: 'Completed 3/12/14' },
          ]
        },
        meMtechDissertations: [
          { srNo: 1, name: 'Mohd Juned UZ Zama Khan', topic: 'Automatic Segmentation of Articular Cartilages of Pathological and Non- Pathological Knees from MRI', year: 2019 },
          { srNo: 2, name: 'Supriya Pande Anilrao', topic: 'Automatic Human Knee Cartilage Segmentation from Magnetic Resonance Images', year: 2017 },
          { srNo: 3, name: 'Priti Sattapure Shrikant', topic: 'Automatic Articular Cartilage Segmentation with Multiple Models', year: 2017 },
          { srNo: 4, name: 'Prajakta Kulkarni', topic: 'Content Based Image Retrieval System Based on Interactive Genetic Algorithm', year: 2016 },
          { srNo: 5, name: 'Radhika P. Dudhmande', topic: 'Extraction of Menisci & Detection & Characterization of Meniscal Tears in MRI Images', year: 2015 },
          { srNo: 6, name: 'Amit Ashok Kamthane', topic: 'Exudate Detection in Diabetic Retinopathy Color Images Using Morphological Operations', year: 2015 },
          { srNo: 7, name: 'Shilabai P. Ghadge', topic: 'Multi-Tier Content Based Microscopic Image Retrieval System', year: 2015 },
          { srNo: 8, name: 'Dhananjay L. Joshi', topic: 'Data Replication in Data Intensive Scientific Applications with Performance Guarantee', year: 2015 },
          { srNo: 9, name: 'Kulkarni Sanjeewani Balbhimrao', topic: 'A Unified Framework for Object Retrieval and Mining', year: 2014 },
          { srNo: 10, name: 'Bhat Sneha V.', topic: 'Image Registration & Content Based Image Retrieval using Adaptive Polar Transform', year: 2014 },
          { srNo: 11, name: 'Nikita S. Pande', topic: 'Detection and Classification of Suspicious Lesions in Mammograms', year: 2014 },
          { srNo: 12, name: 'Kulkarni Parag Shisheer', topic: 'Content Based Image Retrieval System using User Navigation Patterns Relevance Feedback', year: 2013 },
          { srNo: 24, name: 'Dang Chetana Kishor', topic: 'CLUE: Cluster based retrieval', year: 2013 }, // Note: Sr. No 24 in HTML for this item
          { srNo: 13, name: 'Komatwar Rupali Manoj', topic: 'Use of Particle Filter in Visual Surveillance for Tracking Multiple People', year: 2013 },
          { srNo: 14, name: 'Budhewar Anupama S.', topic: 'A Comparative Approach for Overlay Text Detection and Extraction from Complex Video Scene', year: 2012 },
          { srNo: 15, name: 'Nagthane Deepika Kishor', topic: 'Design of Content Based Image Retrieval System using Fast Query Point Movement', year: 2011 },
          { srNo: 16, name: 'Kottawar Vinayak G', topic: 'Content Based Image Retrieval using Active Learning', year: 2011 },
          { srNo: 17, name: 'Chatur Madhuri Dhananjay', topic: 'Fast Video Retrieval using Two Step Coarse Search to Fine Search Method', year: 2011 },
          { srNo: 18, name: 'Nandedkar Vaishali Shivraj', topic: 'Content Based Audio Retrieval using Multiple Feature Vectors', year: 2011 },
          { srNo: 19, name: 'Deore Sandhya Subhash', topic: 'Dynamic Object Detection in Multimedia Mining', year: 2011 },
          { srNo: 26, name: 'Nemanwar Dipika Sudhakarrao', topic: 'Arbitrary Ratio Image Resizing using Fast DCT of Composite Length DCT Based Transcoder', year: 2011 }, // Note: Sr. No 26 in HTML
          { srNo: 28, name: 'Julme Bhavana Chandramani', topic: 'Motion Flow Based Video Retrieval', year: 2011 }, // Note: Sr. No 28 in HTML
          { srNo: 29, name: 'Tandale Shrikant Ramrao', topic: 'Content Based Image Retrieval using Wavelet Based Salient Points for Texture, Color & Shape', year: 2011 }, // Note: Sr. No 29 in HTML
          { srNo: 42, name: 'Hashmi S. A.', topic: 'Content Based Image Retrieval using Spatial features', year: 2011 }, // Note: Sr. No 42 in HTML
          { srNo: 21, name: 'Pardeshi Nilesh Ghanshyam', topic: 'Watermarking Relational Databases', year: 2011 }, // Note: Sr. No 21 in HTML
          { srNo: 35, name: 'Amol Kharat K.', topic: 'Region Based Image Retrieval using Color Shape & Location', year: 2010 }, // Note: Sr. No 35 in HTML
          { srNo: 22, name: 'Kulkarni Nilima Vijayrao', topic: 'Image Segmentation using Color and Texture Feature', year: 2010 }, // Note: Sr. No 22 in HTML
          { srNo: 20, name: 'Sanghavi Mahesh Ranglaji', topic: 'Digital Video Watermarking Based on Scene Change Detection', year: 2009 }, // Note: Sr. No 20 in HTML
          { srNo: 23, name: 'Kotecha Kainjan Swarup', topic: 'Content Based Video Retrieval using Ordinal Measures, Average Intensity Motion and Color Feature', year: 2009 }, // Note: Sr. No 23 in HTML
          { srNo: 25, name: 'Patil Shubhangi Dayaram', topic: 'Image Retrieval using Shape Context', year: 2009 }, // Note: Sr. No 25 in HTML
          { srNo: 27, name: 'Kirange Dhyaneshwar Khemachandra', topic: 'MOSAIC Based Representation of Video Sequence', year: 2009 }, // Note: Sr. No 27 in HTML
          { srNo: 33, name: 'Asole Suresh Shamrao', topic: 'Content Based Image Retrieval using Color Texture Moments', year: 2009 }, // Note: Sr. No 33 in HTML
          { srNo: 34, name: 'Rathod Dharmesh I.', topic: 'Detection of Masses in Mamograms using Texture Features', year: 2009 }, // Note: Sr. No 34 in HTML
          { srNo: 36, name: 'Giri Manish B.', topic: 'Multiprotocol Label System [MPLS] using Load Sharing', year: 2009 }, // Note: Sr. No 36 in HTML
          { srNo: 39, name: 'Apare Ravindra', topic: 'Trademark Image Retrieval using Reduced Regulated Morphological Skeleton Transform', year: 2009 }, // Note: Sr. No 39 in HTML
          { srNo: 30, name: 'Satav Pravin Ramdas', topic: 'Image Retrieval by Color Features in Image Database', year: 2009 }, // Note: Sr. No 30 in HTML
          { srNo: 31, name: 'Narwade Jyoti Madhavrao', topic: 'Content based image retrieval using color histogram', year: 2008 }, // Note: Sr. No 31 in HTML
          { srNo: 32, name: 'Deshpande Prachi Subhash', topic: 'Performance Evaluation of Fractional PEL Motion Estimation Algorithm', year: 2008 }, // Note: Sr. No 32 in HTML
          { srNo: 37, name: 'Jamkhandikar Dayanand S.', topic: 'Retrieval of Trademark Images Based on Shape', year: 2007 }, // Note: Sr. No 37 in HTML
          { srNo: 38, name: 'Jaiswal Durgeshnandini R.', topic: 'Detection of fixed and moving object in still images and in video', year: 2007 }, // Note: Sr. No 38 in HTML
          { srNo: 40, name: 'ArtiiD. K.', topic: 'Tool Design System', year: 2007 }, // Note: Sr. No 40 in HTML
          { srNo: 41, name: 'Bhosikar S. V.', topic: 'Packet Monitoring System [PMS]', year: 2006 }, // Note: Sr. No 41 in HTML
          { srNo: 43, name: 'Gatphne Suwarna', topic: 'Emergic Clean Mail', year: 2005 }, // Note: Sr. No 43 in HTML
          { srNo: 44, name: 'P. A. Agrawal', topic: 'Optimal Filter for Texture Segmentation', year: 2005 }
        ],
        patentPublished: {
          title: 'Design an IoT with Image Processing Based Solution of Detecting the Downy Mildew Disease of Grapes',
          details: 'Kainjan M. Sanghavi, Dr. Mrs. Archana M. Rajurkar, Dr. Mahesh R. Sanghavi, “Design an IoT with Image Processing Based Solution of Detecting the Downy Mildew Disease of Grapes”, The Patent Office Journal No. 13/2018 Dated 30/03/2018 11264, Application No. 201821009017 A, Publication Date: 30/03/2018.'
        }
      },
      outreachActivities: {
        summary: [
          'Visit to Hawaii, USA to attend the International Conference and present a research paper in Jan 2008. Also visited Stanford University and Northwestern University, Chicago.',
          'Referee with Journal: Reviewer for International Journal on ‘Pattern Recognition’, Elsevier publications.',
          'Worked as reviewer for National and International conferences.',
          'Selected as examiner for evaluation of Ph.D. thesis of University of Mysore.',
          'Two of the research papers have been accepted for World Comp 2009 International Conference on Image Processing, Computer Vision, and Pattern Recognition (IPCV\'09), Monte Carlo Resort, Las Vegas, Nevada, USA.',
          'Three of my PG students received Best Paper Awards in International Conferences'
        ],
        seminarsConferences: {
          attended: [
            { srNo: 1, title: '9th Annual Women\'s Meet – AWM 2024 (Scientific Conference ISBN: 978–81–969897–4–3 | Theme: To Cultivate Research Spirit and Create a Vibrant Community of Women in Science and Technology)', organizerPlace: 'Centre for Women Development of Venus International Foundation at Green Park Chennai, India.', period: '2nd March 2024' },
            { srNo: 2, title: '5th International Conference on Computing in Engineering and Technology ICCET2020', organizerPlace: 'MGM’s College of Engineering, Nanded', period: '09-11th January 2020' },
            { srNo: 3, title: '4th International Conference on Computing in Engineering and Technology', organizerPlace: 'Deogiri Institute of Engg & Management Studies, Aurangabad', period: '09-11th January 2019' },
            { srNo: 4, title: 'TechNExt India 2018, Annual Industry and Academis Conference and Awards 2018, CSI India', organizerPlace: 'Victor Menezes Convention Centre, IIT Bombay', period: '10-11’th February 2018' },
            { srNo: 5, title: 'IEEE and CSI sponsored 1’st International Conference on Intelligent Systems and Information Management ICISIM- 2017', organizerPlace: 'MGM’s JNEC, Aurangabad, MS, India', period: '05’-06’th October 2017' },
            { srNo: 6, title: 'International Conference on Signal and Information Processing IConSIP-2016', organizerPlace: 'SGGS Institute of Engg& Technology, Nanded in association with IIT, Bombay, COE Pune, SVUCE Tirupati and Technically co-sponsored by IEEE Bombay,', period: '6-8’th October 2016.' },
            { srNo: 7, title: 'National Conference on TEQIP II : Best Policies and Practices', organizerPlace: 'State Project Facilitation Unit, TEQIP II, Maharashtra State and SGGS Institute of Engineering and Technology, Nanded', period: '10-11’th Jan 2014' },
            { srNo: 8, title: 'National Conference on Communication, Computing and Networking Technologies (NCCCNT-13)', organizerPlace: 'SGGS Institute of Engineering and Technology, Nanded', period: '15-16th March 2013' },
            { srNo: 9, title: '1st World Summit on Accreditation WOSA 2012', organizerPlace: 'National Board of Accreditation, New Delhi', period: '25-28th March 2012' },
            { srNo: 10, title: 'First International Conference on Advances in Computing, ICAC 2008', organizerPlace: 'Anuradha Engineering College, Chikhali, Maharashtra, India.', period: 'Feb 21-22, 2008' },
            { srNo: 11, title: 'Forty-First Annual Hawaii International Conference on System Sciences', organizerPlace: 'Waikoloa, Big Island, Hawaii, USA.', period: 'Jan 7-10, 2008' },
            { srNo: 12, title: 'IEEE First International Conference on Signal and Image Processing', organizerPlace: 'B.V.B. College of Engineering and Technology, Hubli, Karnataka, India.', period: 'Dec 7-9, 2006' },
            { srNo: 13, title: 'Annual Convention of ISTE (Maharashtra and Goa Section) on Technical Education-Technology Transfer to Rural India and Sustainable Development', organizerPlace: 'M.G.M.’s College of Engineering, Nanded.', period: 'March  4-5, 2006' },
            { srNo: 14, title: 'International Conference on Cognition and Recognition', organizerPlace: 'P.E.S. College of Engineering, Mandya, Karnataka, India.', period: 'Dec 22-23, 2005' },
            { srNo: 15, title: 'Computer Applications in Electrical Engineering - Recent Advances” (CERA-01)', organizerPlace: 'Department of Electrical Engineering, IIT Roorkee, Roorkee.', period: 'Feb. 21-23, 2002' },
            { srNo: 16, title: 'ICMPS 2000 on Multimedia Processing and Systems', organizerPlace: 'Office of Naval Research, University of Maryland and IIT Madras, Chennai.', period: 'August 13-15, 2000' },
            { srNo: 17, title: 'Information Technology and Applications: Emerging Trends', organizerPlace: 'IIT Roorkee, Roorkee.', period: 'Dec.23-24, 1998' },
            { srNo: 18, title: 'Computer Society of India, Western Region Convention', organizerPlace: 'JNE College of Engineering, Aurangabad.', period: 'March 1-3, 1996' }
          ],
          shortTermCourses: [
            { srNo: 1, title: 'Future of Education Workshop by Employability. Life', place: 'MGM’s College of Engineering and Technology Mumbai', period: '25th Nov 2023' },
            { srNo: 2, title: 'Program on Institutional Transformation Strategy by Digital Commonwealth, London, UK', place: 'MGM’s College of Engineering and Technology Mumbai', period: '2022' },
            { srNo: 3, title: 'National Intellectual Property Awareness Mission', place: 'Intellectual Property Office, India', period: '16th Dec 2022' },
            { srNo: 4, title: 'Principals’ Meet followed by Two Day Workshop on "Introduction to Robotics" by e-Yantra Lab Setup Initiative (eLSI), e- Yantra Project of IIT Bombay at', place: 'M.G.M.’s College of Engineering, Nanded.', period: '2nd & 3rd August 2019' },
            { srNo: 5, title: 'Python Workshop organized by Teaching Learning Centre (ICT) at IIT Bombay funded by PMMMNMIT', place: 'M.G.M.’s College of Engineering, Nanded.', period: '22nd June 2019' },
            { srNo: 6, title: 'TEQIP-III Sponsored one day workshop on Curriculum Development for Computer Science and Engineering', place: 'Dr. Babasaheb Ambedkar Tech. University, Lonere', period: '01st May 2019' },
            { srNo: 7, title: 'International Workshop on Pattern Analysis and Machine Intelligence Document Engineering to Healthcare', place: 'Solapur University, Solapur.', period: '20th Dec 2018' },
            { srNo: 8, title: 'Faculty Development Program (FDP) Foundation Program in ICT for Education conducted by IIT Bombay', place: 'M.G.M.’s College of Engineering, Nanded.', period: '13-18th September 2018' },
            { srNo: 9, title: 'One Day NBA Orientation Workshop on Outcome Based Accreditation Process and Parameters', place: 'MSPM’s Deogiri Institute of Engineering and Management Studies, Aurangabad', period: '9’th June 2017' },
            { srNo: 10, title: 'Two-Week ISTE STTP Workshop on Introduction to Design of Algorithms Conducted by IIT Kharagpur', place: 'MGM’s College of Engineering, Nanded Remote Center Under NMEICT(MHRD)', period: '27’th to 30’th May, 2015' },
            { srNo: 11, title: 'Two-Week ISTE STTP Workshop on Computer Programming Conducted by IIT Bombay', place: 'MGM’s College of Engineering, Nanded Remote Center Under NMEICT(MHRD)', period: 'May 20’th to June 21’st 2014' },
            { srNo: 12, title: 'One Week STTP on Signal, Speech and Image Processing Using MATLAB', place: 'MGM’s College of Engineering, Nanded', period: '1-6th July 2013' },
            { srNo: 13, title: 'Two Days Advance Mission 10X Faculty Empowerment Workshop by Wipro Technologies', place: 'MGM’s College of Engineering, Nanded', period: '30-31st March 2012' },
            { srNo: 14, title: 'Five Days Mission 10X Faculty Empowerment Workshop by Wipro Technologies', place: 'MGM’s College of Engineering, Nanded', period: '28 Nov-2nd Dec 2011' },
            { srNo: 15, title: 'One day workshop on “Demystifying GCC thorough Gray Box Probing”', place: 'Department of Computer Sci.&Engg. Shri Guru Gobind Singhji Institute of Engineering & Technology, Nanded', period: '6th March 2010' },
            { srNo: 16, title: 'One day workshop on ECG Analysis and Interpretation', place: 'Department of Instrumentation Engineering. Shri Guru Gobind Singhji Institute of Engg., & Technology, Nanded', period: '17th Feb 2010' },
            { srNo: 17, title: 'Two Week ISTE Workshop on Effective teaching/learning of Computer Programming', place: 'Indian Institute of Technology, Bombay', period: '14-24th Dec 2009' },
            { srNo: 18, title: 'Workshop on Compiler Construction: From Practice to Theory', place: 'Department of Computer Engg. and IT, COEP, Pune.', period: '7-13thSept 2007' },
            { srNo: 19, title: 'Training program on Object Oriented Analysis and Design Using the UML with Fundamentals of Rational Rose', place: 'IBM Rational SEED, Pune, INDIA, at MGMCE Nanded.', period: '17-18thFeb 2007' },
            { srNo: 20, title: 'Training program on AIX5L Basics', place: 'IBM INDIA Banglore.', period: '10-13th July 2006' },
            { srNo: 21, title: 'Recent Trends in Signal and Image Processing', place: 'Department of E&TC, SGGSIET, Nanded.', period: '16-18th Jan 2006.' },
            { srNo: 22, title: 'PG Level course in audit mode, titled Multimedia Systems', place: 'DEP, KReSIT, IIT Bombay.', period: 'Jan-May 2003' },
            { srNo: 23, title: 'Course on JAVA organized by Mechanical and Industrial Engineering Students Society', place: 'IIT Roorkee, Roorkee.', period: '16- 6th Feb 2000' },
            { srNo: 24, title: 'Microsoft NT 4.0 and Workstation', place: 'Microsoft at Microland, Pune', period: 'Mar-97' },
            { srNo: 25, title: 'Microprocessors in Instrumentation', place: 'SGGS College of Engineering, Nanded.', period: '17-28th June 1996' }
          ],
          organized: [
            { srNo: 1, title: 'Organised 5th International Conference on Computing in Engineering and Technology ICCET2020 in association with Dept. of Electronics and Telecommunication Engg., Dr. BA Technological University, Lonere, Maharashtra and AICTE', place: 'Department of CSE, MGM’s College of Engineering, Nanded', period: '09-11th January 2020' },
            { srNo: 2, title: 'Organised Principals’ Meet followed by Two Day Workshop on "Introduction to Robotics" by e- Yantra Lab Setup Initiative (eLSI), e-Yantra Project of IIT Bombay', place: 'Department of CSE, M.G.M.’s College of Engineering, Nanded.', period: '2nd & 3rd August 2019' },
            { srNo: 3, title: 'Organised Faculty Development Program on “Data Science using R-Programming” Sponsored by TEQUIP-III, Dr. BA Technological University, Lonere, Maharashtra', place: 'Department of CSE, M.G.M.’s College of Engineering, Nanded.', period: '7 – 11th Jan 2019' }
          ]
        }
      },
      academicEnvironment: {
        laboratoryDevelopment: [
          'Development of ten Computer Labs of the Department in the capacity of Head of the Department.',
          'Development of Image Analysis and Computer Vision Lab for PG students.'
        ],
        proposalsProjects: [
          'Establishment of PG course in Computer Science and Engineering ME(CSE) in 2003.',
          'Establishment of another PG course in CSE Department named Computer Network and Internet security ME(CNIS) in 2012.',
          'A MOU with Distance Education Program of IIT Bombay.',
          'A MOU with Oracle Corporation for implementing the program Workforce Development.',
          'A MOU with IBM for Power Academy Program (PAP).',
          'A MOU with Machine Intelligence Research Labs (MRI Labs), Washington, USA'
        ],
        researchScholarsPhD: {
          summary: '9 Ph.D. scholars have completed their PhD and 3 candidates currently pursuing their doctoral research.',
          list: [
            { srNo: 1, name: 'Kapre Bhagyashri Sudhakakrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Robust Content Based Image and Video Watermarking Schemes and Architecture in Compressed Domain', year: 'Completed 27/1/2024' },
            { srNo: 2, name: 'Rahulsingh Gopalsingh Bisen', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Automatic detection of lung infections in chest X-ray images', year: 'Pursuing in 22-23' },
            { srNo: 3, name: 'Nikita Sanjay Pande', registeredWith: 'Dr. Babasaheb Ambedkar Technological University, Lonere', titleArea: 'Detection and Classification of Liver Tumor', year: 'Pursuing in 22-23' },
            { srNo: 4, name: 'Banwaskar Mangal Ramrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Designing of an Efficient Method for Content-Based Video Indexing and Retrieval', year: 'Completed 27/12/23' },
            { srNo: 5, name: 'Sanghavi Kainjan Mahesh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Effective Techniques for Prevention and Detection of Grape Diseases at Real Time Using IOT and Image Processing', year: 'Completed 30/1/2023' },
            { srNo: 6, name: 'Kottawar Vinayak Gajanan', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Content-Based Image Retrieval in P2P and Cloud Environment', year: 'Completed 5/1/2017' },
            { srNo: 7, name: 'Thakre Kalpana Sunil', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Video Retrieval in Compressed Domain', year: 'Completed 1/2/16' },
            { srNo: 8, name: 'Thengade Anita Mahesh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Automated System for Musculoskeletal Image Analysis and Interpretation of Knee for Quicker Diagnosis', year: 'Submitted 28/04/2016' },
            { srNo: 9, name: 'Dhawase Dhammjyoti Vitthalrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Efficient Video Affective Content Analysis System', year: 'Pursuing 28/04/2016' },
            { srNo: 10, name: 'Sanghavi Mahesh Ranglal', registeredWith: 'Jodhpur National University, Jodhpur', titleArea: 'Design and Analysis of robust Algorithm for Digital Image and Video Watermarking to Protect and Authenticate Multimedia Content', year: 'Completed 2015' },
            { srNo: 11, name: 'Deshpande Deepa Sachin', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Discovering Association Rules based on Image Content', year: 'Completed 6/11/15' },
            { srNo: 12, name: 'Deshpande Neeta Amogh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Designing Robust Algorithms for Embedding Watermark in Digital Video.', year: 'Completed 3/12/14' },
          ]
        },
        meMtechDissertations: [
          { srNo: 1, name: 'Mohd Juned UZ Zama Khan', topic: 'Automatic Segmentation of Articular Cartilages of Pathological and Non- Pathological Knees from MRI', year: 2019 },
          { srNo: 2, name: 'Supriya Pande Anilrao', topic: 'Automatic Human Knee Cartilage Segmentation from Magnetic Resonance Images', year: 2017 },
          { srNo: 3, name: 'Priti Sattapure Shrikant', topic: 'Automatic Articular Cartilage Segmentation with Multiple Models', year: 2017 },
          { srNo: 4, name: 'Prajakta Kulkarni', topic: 'Content Based Image Retrieval System Based on Interactive Genetic Algorithm', year: 2016 },
          { srNo: 5, name: 'Radhika P. Dudhmande', topic: 'Extraction of Menisci & Detection & Characterization of Meniscal Tears in MRI Images', year: 2015 },
          { srNo: 6, name: 'Amit Ashok Kamthane', topic: 'Exudate Detection in Diabetic Retinopathy Color Images Using Morphological Operations', year: 2015 },
          { srNo: 7, name: 'Shilabai P. Ghadge', topic: 'Multi-Tier Content Based Microscopic Image Retrieval System', year: 2015 },
          { srNo: 8, name: 'Dhananjay L. Joshi', topic: 'Data Replication in Data Intensive Scientific Applications with Performance Guarantee', year: 2015 },
          { srNo: 9, name: 'Kulkarni Sanjeewani Balbhimrao', topic: 'A Unified Framework for Object Retrieval and Mining', year: 2014 },
          { srNo: 10, name: 'Bhat Sneha V.', topic: 'Image Registration & Content Based Image Retrieval using Adaptive Polar Transform', year: 2014 },
          { srNo: 11, name: 'Nikita S. Pande', topic: 'Detection and Classification of Suspicious Lesions in Mammograms', year: 2014 },
          { srNo: 12, name: 'Kulkarni Parag Shisheer', topic: 'Content Based Image Retrieval System using User Navigation Patterns Relevance Feedback', year: 2013 },
          { srNo: 24, name: 'Dang Chetana Kishor', topic: 'CLUE: Cluster based retrieval', year: 2013 }, // Note: Sr. No 24 in HTML for this item
          { srNo: 13, name: 'Komatwar Rupali Manoj', topic: 'Use of Particle Filter in Visual Surveillance for Tracking Multiple People', year: 2013 },
          { srNo: 14, name: 'Budhewar Anupama S.', topic: 'A Comparative Approach for Overlay Text Detection and Extraction from Complex Video Scene', year: 2012 },
          { srNo: 15, name: 'Nagthane Deepika Kishor', topic: 'Design of Content Based Image Retrieval System using Fast Query Point Movement', year: 2011 },
          { srNo: 16, name: 'Kottawar Vinayak G', topic: 'Content Based Image Retrieval using Active Learning', year: 2011 },
          { srNo: 17, name: 'Chatur Madhuri Dhananjay', topic: 'Fast Video Retrieval using Two Step Coarse Search to Fine Search Method', year: 2011 },
          { srNo: 18, name: 'Nandedkar Vaishali Shivraj', topic: 'Content Based Audio Retrieval using Multiple Feature Vectors', year: 2011 },
          { srNo: 19, name: 'Deore Sandhya Subhash', topic: 'Dynamic Object Detection in Multimedia Mining', year: 2011 },
          { srNo: 26, name: 'Nemanwar Dipika Sudhakarrao', topic: 'Arbitrary Ratio Image Resizing using Fast DCT of Composite Length DCT Based Transcoder', year: 2011 }, // Note: Sr. No 26 in HTML
          { srNo: 28, name: 'Julme Bhavana Chandramani', topic: 'Motion Flow Based Video Retrieval', year: 2011 }, // Note: Sr. No 28 in HTML
          { srNo: 29, name: 'Tandale Shrikant Ramrao', topic: 'Content Based Image Retrieval using Wavelet Based Salient Points for Texture, Color & Shape', year: 2011 }, // Note: Sr. No 29 in HTML
          { srNo: 42, name: 'Hashmi S. A.', topic: 'Content Based Image Retrieval using Spatial features', year: 2011 }, // Note: Sr. No 42 in HTML
          { srNo: 21, name: 'Pardeshi Nilesh Ghanshyam', topic: 'Watermarking Relational Databases', year: 2011 }, // Note: Sr. No 21 in HTML
          { srNo: 35, name: 'Amol Kharat K.', topic: 'Region Based Image Retrieval using Color Shape & Location', year: 2010 }, // Note: Sr. No 35 in HTML
          { srNo: 22, name: 'Kulkarni Nilima Vijayrao', topic: 'Image Segmentation using Color and Texture Feature', year: 2010 }, // Note: Sr. No 22 in HTML
          { srNo: 20, name: 'Sanghavi Mahesh Ranglaji', topic: 'Digital Video Watermarking Based on Scene Change Detection', year: 2009 }, // Note: Sr. No 20 in HTML
          { srNo: 23, name: 'Kotecha Kainjan Swarup', topic: 'Content Based Video Retrieval using Ordinal Measures, Average Intensity Motion and Color Feature', year: 2009 }, // Note: Sr. No 23 in HTML
          { srNo: 25, name: 'Patil Shubhangi Dayaram', topic: 'Image Retrieval using Shape Context', year: 2009 }, // Note: Sr. No 25 in HTML
          { srNo: 27, name: 'Kirange Dhyaneshwar Khemachandra', topic: 'MOSAIC Based Representation of Video Sequence', year: 2009 }, // Note: Sr. No 27 in HTML
          { srNo: 33, name: 'Asole Suresh Shamrao', topic: 'Content Based Image Retrieval using Color Texture Moments', year: 2009 }, // Note: Sr. No 33 in HTML
          { srNo: 34, name: 'Rathod Dharmesh I.', topic: 'Detection of Masses in Mamograms using Texture Features', year: 2009 }, // Note: Sr. No 34 in HTML
          { srNo: 36, name: 'Giri Manish B.', topic: 'Multiprotocol Label System [MPLS] using Load Sharing', year: 2009 }, // Note: Sr. No 36 in HTML
          { srNo: 39, name: 'Apare Ravindra', topic: 'Trademark Image Retrieval using Reduced Regulated Morphological Skeleton Transform', year: 2009 }, // Note: Sr. No 39 in HTML
          { srNo: 30, name: 'Satav Pravin Ramdas', topic: 'Image Retrieval by Color Features in Image Database', year: 2009 }, // Note: Sr. No 30 in HTML
          { srNo: 31, name: 'Narwade Jyoti Madhavrao', topic: 'Content based image retrieval using color histogram', year: 2008 }, // Note: Sr. No 31 in HTML
          { srNo: 32, name: 'Deshpande Prachi Subhash', topic: 'Performance Evaluation of Fractional PEL Motion Estimation Algorithm', year: 2008 }, // Note: Sr. No 32 in HTML
          { srNo: 37, name: 'Jamkhandikar Dayanand S.', topic: 'Retrieval of Trademark Images Based on Shape', year: 2007 }, // Note: Sr. No 37 in HTML
          { srNo: 38, name: 'Jaiswal Durgeshnandini R.', topic: 'Detection of fixed and moving object in still images and in video', year: 2007 }, // Note: Sr. No 38 in HTML
          { srNo: 40, name: 'ArtiiD. K.', topic: 'Tool Design System', year: 2007 }, // Note: Sr. No 40 in HTML
          { srNo: 41, name: 'Bhosikar S. V.', topic: 'Packet Monitoring System [PMS]', year: 2006 }, // Note: Sr. No 41 in HTML
          { srNo: 43, name: 'Gatphne Suwarna', topic: 'Emergic Clean Mail', year: 2005 }, // Note: Sr. No 43 in HTML
          { srNo: 44, name: 'P. A. Agrawal', topic: 'Optimal Filter for Texture Segmentation', year: 2005 }
        ],
        patentPublished: {
          title: 'Design an IoT with Image Processing Based Solution of Detecting the Downy Mildew Disease of Grapes',
          details: 'Kainjan M. Sanghavi, Dr. Mrs. Archana M. Rajurkar, Dr. Mahesh R. Sanghavi, “Design an IoT with Image Processing Based Solution of Detecting the Downy Mildew Disease of Grapes”, The Patent Office Journal No. 13/2018 Dated 30/03/2018 11264, Application No. 201821009017 A, Publication Date: 30/03/2018.'
        }
      },
      outreachActivities: {
        summary: [
          'Visit to Hawaii, USA to attend the International Conference and present a research paper in Jan 2008. Also visited Stanford University and Northwestern University, Chicago.',
          'Referee with Journal: Reviewer for International Journal on ‘Pattern Recognition’, Elsevier publications.',
          'Worked as reviewer for National and International conferences.',
          'Selected as examiner for evaluation of Ph.D. thesis of University of Mysore.',
          'Two of the research papers have been accepted for World Comp 2009 International Conference on Image Processing, Computer Vision, and Pattern Recognition (IPCV\'09), Monte Carlo Resort, Las Vegas, Nevada, USA.',
          'Three of my PG students received Best Paper Awards in International Conferences'
        ],
        seminarsConferences: {
          attended: [
            { srNo: 1, title: '9th Annual Women\'s Meet – AWM 2024 (Scientific Conference ISBN: 978–81–969897–4–3 | Theme: To Cultivate Research Spirit and Create a Vibrant Community of Women in Science and Technology)', organizerPlace: 'Centre for Women Development of Venus International Foundation at Green Park Chennai, India.', period: '2nd March 2024' },
            { srNo: 2, title: '5th International Conference on Computing in Engineering and Technology ICCET2020', organizerPlace: 'MGM’s College of Engineering, Nanded', period: '09-11th January 2020' },
            { srNo: 3, title: '4th International Conference on Computing in Engineering and Technology', organizerPlace: 'Deogiri Institute of Engg & Management Studies, Aurangabad', period: '09-11th January 2019' },
            { srNo: 4, title: 'TechNExt India 2018, Annual Industry and Academis Conference and Awards 2018, CSI India', organizerPlace: 'Victor Menezes Convention Centre, IIT Bombay', period: '10-11’th February 2018' },
            { srNo: 5, title: 'IEEE and CSI sponsored 1’st International Conference on Intelligent Systems and Information Management ICISIM- 2017', organizerPlace: 'MGM’s JNEC, Aurangabad, MS, India', period: '05’-06’th October 2017' },
            { srNo: 6, title: 'International Conference on Signal and Information Processing IConSIP-2016', organizerPlace: 'SGGS Institute of Engg& Technology, Nanded in association with IIT, Bombay, COE Pune, SVUCE Tirupati and Technically co-sponsored by IEEE Bombay,', period: '6-8’th October 2016.' },
            { srNo: 7, title: 'National Conference on TEQIP II : Best Policies and Practices', organizerPlace: 'State Project Facilitation Unit, TEQIP II, Maharashtra State and SGGS Institute of Engineering and Technology, Nanded', period: '10-11’th Jan 2014' },
            { srNo: 8, title: 'National Conference on Communication, Computing and Networking Technologies (NCCCNT-13)', organizerPlace: 'SGGS Institute of Engineering and Technology, Nanded', period: '15-16th March 2013' },
            { srNo: 9, title: '1st World Summit on Accreditation WOSA 2012', organizerPlace: 'National Board of Accreditation, New Delhi', period: '25-28th March 2012' },
            { srNo: 10, title: 'First International Conference on Advances in Computing, ICAC 2008', organizerPlace: 'Anuradha Engineering College, Chikhali, Maharashtra, India.', period: 'Feb 21-22, 2008' },
            { srNo: 11, title: 'Forty-First Annual Hawaii International Conference on System Sciences', organizerPlace: 'Waikoloa, Big Island, Hawaii, USA.', period: 'Jan 7-10, 2008' },
            { srNo: 12, title: 'IEEE First International Conference on Signal and Image Processing', organizerPlace: 'B.V.B. College of Engineering and Technology, Hubli, Karnataka, India.', period: 'Dec 7-9, 2006' },
            { srNo: 13, title: 'Annual Convention of ISTE (Maharashtra and Goa Section) on Technical Education-Technology Transfer to Rural India and Sustainable Development', organizerPlace: 'M.G.M.’s College of Engineering, Nanded.', period: 'March  4-5, 2006' },
            { srNo: 14, title: 'International Conference on Cognition and Recognition', organizerPlace: 'P.E.S. College of Engineering, Mandya, Karnataka, India.', period: 'Dec 22-23, 2005' },
            { srNo: 15, title: 'Computer Applications in Electrical Engineering - Recent Advances” (CERA-01)', organizerPlace: 'Department of Electrical Engineering, IIT Roorkee, Roorkee.', period: 'Feb. 21-23, 2002' },
            { srNo: 16, title: 'ICMPS 2000 on Multimedia Processing and Systems', organizerPlace: 'Office of Naval Research, University of Maryland and IIT Madras, Chennai.', period: 'August 13-15, 2000' },
            { srNo: 17, title: 'Information Technology and Applications: Emerging Trends', organizerPlace: 'IIT Roorkee, Roorkee.', period: 'Dec.23-24, 1998' },
            { srNo: 18, title: 'Computer Society of India, Western Region Convention', organizerPlace: 'JNE College of Engineering, Aurangabad.', period: 'March 1-3, 1996' }
          ],
          shortTermCourses: [
            { srNo: 1, title: 'Future of Education Workshop by Employability. Life', place: 'MGM’s College of Engineering and Technology Mumbai', period: '25th Nov 2023' },
            { srNo: 2, title: 'Program on Institutional Transformation Strategy by Digital Commonwealth, London, UK', place: 'MGM’s College of Engineering and Technology Mumbai', period: '2022' },
            { srNo: 3, title: 'National Intellectual Property Awareness Mission', place: 'Intellectual Property Office, India', period: '16th Dec 2022' },
            { srNo: 4, title: 'Principals’ Meet followed by Two Day Workshop on "Introduction to Robotics" by e-Yantra Lab Setup Initiative (eLSI), e- Yantra Project of IIT Bombay at', place: 'M.G.M.’s College of Engineering, Nanded.', period: '2nd & 3rd August 2019' },
            { srNo: 5, title: 'Python Workshop organized by Teaching Learning Centre (ICT) at IIT Bombay funded by PMMMNMIT', place: 'M.G.M.’s College of Engineering, Nanded.', period: '22nd June 2019' },
            { srNo: 6, title: 'TEQIP-III Sponsored one day workshop on Curriculum Development for Computer Science and Engineering', place: 'Dr. Babasaheb Ambedkar Tech. University, Lonere', period: '01st May 2019' },
            { srNo: 7, title: 'International Workshop on Pattern Analysis and Machine Intelligence Document Engineering to Healthcare', place: 'Solapur University, Solapur.', period: '20th Dec 2018' },
            { srNo: 8, title: 'Faculty Development Program (FDP) Foundation Program in ICT for Education conducted by IIT Bombay', place: 'M.G.M.’s College of Engineering, Nanded.', period: '13-18th September 2018' },
            { srNo: 9, title: 'One Day NBA Orientation Workshop on Outcome Based Accreditation Process and Parameters', place: 'MSPM’s Deogiri Institute of Engineering and Management Studies, Aurangabad', period: '9’th June 2017' },
            { srNo: 10, title: 'Two-Week ISTE STTP Workshop on Introduction to Design of Algorithms Conducted by IIT Kharagpur', place: 'MGM’s College of Engineering, Nanded Remote Center Under NMEICT(MHRD)', period: '27’th to 30’th May, 2015' },
            { srNo: 11, title: 'Two-Week ISTE STTP Workshop on Computer Programming Conducted by IIT Bombay', place: 'MGM’s College of Engineering, Nanded Remote Center Under NMEICT(MHRD)', period: 'May 20’th to June 21’st 2014' },
            { srNo: 12, title: 'One Week STTP on Signal, Speech and Image Processing Using MATLAB', place: 'MGM’s College of Engineering, Nanded', period: '1-6th July 2013' },
            { srNo: 13, title: 'Two Days Advance Mission 10X Faculty Empowerment Workshop by Wipro Technologies', place: 'MGM’s College of Engineering, Nanded', period: '30-31st March 2012' },
            { srNo: 14, title: 'Five Days Mission 10X Faculty Empowerment Workshop by Wipro Technologies', place: 'MGM’s College of Engineering, Nanded', period: '28 Nov-2nd Dec 2011' },
            { srNo: 15, title: 'One day workshop on “Demystifying GCC thorough Gray Box Probing”', place: 'Department of Computer Sci.&Engg. Shri Guru Gobind Singhji Institute of Engineering & Technology, Nanded', period: '6th March 2010' },
            { srNo: 16, title: 'One day workshop on ECG Analysis and Interpretation', place: 'Department of Instrumentation Engineering. Shri Guru Gobind Singhji Institute of Engg., & Technology, Nanded', period: '17th Feb 2010' },
            { srNo: 17, title: 'Two Week ISTE Workshop on Effective teaching/learning of Computer Programming', place: 'Indian Institute of Technology, Bombay', period: '14-24th Dec 2009' },
            { srNo: 18, title: 'Workshop on Compiler Construction: From Practice to Theory', place: 'Department of Computer Engg. and IT, COEP, Pune.', period: '7-13thSept 2007' },
            { srNo: 19, title: 'Training program on Object Oriented Analysis and Design Using the UML with Fundamentals of Rational Rose', place: 'IBM Rational SEED, Pune, INDIA, at MGMCE Nanded.', period: '17-18thFeb 2007' },
            { srNo: 20, title: 'Training program on AIX5L Basics', place: 'IBM INDIA Banglore.', period: '10-13th July 2006' },
            { srNo: 21, title: 'Recent Trends in Signal and Image Processing', place: 'Department of E&TC, SGGSIET, Nanded.', period: '16-18th Jan 2006.' },
            { srNo: 22, title: 'PG Level course in audit mode, titled Multimedia Systems', place: 'DEP, KReSIT, IIT Bombay.', period: 'Jan-May 2003' },
            { srNo: 23, title: 'Course on JAVA organized by Mechanical and Industrial Engineering Students Society', place: 'IIT Roorkee, Roorkee.', period: '16- 6th Feb 2000' },
            { srNo: 24, title: 'Microsoft NT 4.0 and Workstation', place: 'Microsoft at Microland, Pune', period: 'Mar-97' },
            { srNo: 25, title: 'Microprocessors in Instrumentation', place: 'SGGS College of Engineering, Nanded.', period: '17-28th June 1996' }
          ],
          organized: [
            { srNo: 1, title: 'Organised 5th International Conference on Computing in Engineering and Technology ICCET2020 in association with Dept. of Electronics and Telecommunication Engg., Dr. BA Technological University, Lonere, Maharashtra and AICTE', place: 'Department of CSE, MGM’s College of Engineering, Nanded', period: '09-11th January 2020' },
            { srNo: 2, title: 'Organised Principals’ Meet followed by Two Day Workshop on "Introduction to Robotics" by e- Yantra Lab Setup Initiative (eLSI), e-Yantra Project of IIT Bombay', place: 'Department of CSE, M.G.M.’s College of Engineering, Nanded.', period: '2nd & 3rd August 2019' },
            { srNo: 3, title: 'Organised Faculty Development Program on “Data Science using R-Programming” Sponsored by TEQUIP-III, Dr. BA Technological University, Lonere, Maharashtra', place: 'Department of CSE, M.G.M.’s College of Engineering, Nanded.', period: '7 – 11th Jan 2019' }
          ]
        }
      },
      academicEnvironment: {
        laboratoryDevelopment: [
          'Development of ten Computer Labs of the Department in the capacity of Head of the Department.',
          'Development of Image Analysis and Computer Vision Lab for PG students.'
        ],
        proposalsProjects: [
          'Establishment of PG course in Computer Science and Engineering ME(CSE) in 2003.',
          'Establishment of another PG course in CSE Department named Computer Network and Internet security ME(CNIS) in 2012.',
          'A MOU with Distance Education Program of IIT Bombay.',
          'A MOU with Oracle Corporation for implementing the program Workforce Development.',
          'A MOU with IBM for Power Academy Program (PAP).',
          'A MOU with Machine Intelligence Research Labs (MRI Labs), Washington, USA'
        ],
        researchScholarsPhD: {
          summary: '9 Ph.D. scholars have completed their PhD and 3 candidates currently pursuing their doctoral research.',
          list: [
            { srNo: 1, name: 'Kapre Bhagyashri Sudhakakrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Robust Content Based Image and Video Watermarking Schemes and Architecture in Compressed Domain', year: 'Completed 27/1/2024' },
            { srNo: 2, name: 'Rahulsingh Gopalsingh Bisen', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Automatic detection of lung infections in chest X-ray images', year: 'Pursuing in 22-23' },
            { srNo: 3, name: 'Nikita Sanjay Pande', registeredWith: 'Dr. Babasaheb Ambedkar Technological University, Lonere', titleArea: 'Detection and Classification of Liver Tumor', year: 'Pursuing in 22-23' },
            { srNo: 4, name: 'Banwaskar Mangal Ramrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Designing of an Efficient Method for Content-Based Video Indexing and Retrieval', year: 'Completed 27/12/23' },
            { srNo: 5, name: 'Sanghavi Kainjan Mahesh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Effective Techniques for Prevention and Detection of Grape Diseases at Real Time Using IOT and Image Processing', year: 'Completed 30/1/2023' },
            { srNo: 6, name: 'Kottawar Vinayak Gajanan', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Content-Based Image Retrieval in P2P and Cloud Environment', year: 'Completed 5/1/2017' },
            { srNo: 7, name: 'Thakre Kalpana Sunil', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Video Retrieval in Compressed Domain', year: 'Completed 1/2/16' },
            { srNo: 8, name: 'Thengade Anita Mahesh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Automated System for Musculoskeletal Image Analysis and Interpretation of Knee for Quicker Diagnosis', year: 'Submitted 28/04/2016' },
            { srNo: 9, name: 'Dhawase Dhammjyoti Vitthalrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Efficient Video Affective Content Analysis System', year: 'Pursuing 28/04/2016' },
            { srNo: 10, name: 'Sanghavi Mahesh Ranglal', registeredWith: 'Jodhpur National University, Jodhpur', titleArea: 'Design and Analysis of robust Algorithm for Digital Image and Video Watermarking to Protect and Authenticate Multimedia Content', year: 'Completed 2015' },
            { srNo: 11, name: 'Deshpande Deepa Sachin', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Discovering Association Rules based on Image Content', year: 'Completed 6/11/15' },
            { srNo: 12, name: 'Deshpande Neeta Amogh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Designing Robust Algorithms for Embedding Watermark in Digital Video.', year: 'Completed 3/12/14' },
          ]
        },
        meMtechDissertations: [
          { srNo: 1, name: 'Mohd Juned UZ Zama Khan', topic: 'Automatic Segmentation of Articular Cartilages of Pathological and Non- Pathological Knees from MRI', year: 2019 },
          { srNo: 2, name: 'Supriya Pande Anilrao', topic: 'Automatic Human Knee Cartilage Segmentation from Magnetic Resonance Images', year: 2017 },
          { srNo: 3, name: 'Priti Sattapure Shrikant', topic: 'Automatic Articular Cartilage Segmentation with Multiple Models', year: 2017 },
          { srNo: 4, name: 'Prajakta Kulkarni', topic: 'Content Based Image Retrieval System Based on Interactive Genetic Algorithm', year: 2016 },
          { srNo: 5, name: 'Radhika P. Dudhmande', topic: 'Extraction of Menisci & Detection & Characterization of Meniscal Tears in MRI Images', year: 2015 },
          { srNo: 6, name: 'Amit Ashok Kamthane', topic: 'Exudate Detection in Diabetic Retinopathy Color Images Using Morphological Operations', year: 2015 },
          { srNo: 7, name: 'Shilabai P. Ghadge', topic: 'Multi-Tier Content Based Microscopic Image Retrieval System', year: 2015 },
          { srNo: 8, name: 'Dhananjay L. Joshi', topic: 'Data Replication in Data Intensive Scientific Applications with Performance Guarantee', year: 2015 },
          { srNo: 9, name: 'Kulkarni Sanjeewani Balbhimrao', topic: 'A Unified Framework for Object Retrieval and Mining', year: 2014 },
          { srNo: 10, name: 'Bhat Sneha V.', topic: 'Image Registration & Content Based Image Retrieval using Adaptive Polar Transform', year: 2014 },
          { srNo: 11, name: 'Nikita S. Pande', topic: 'Detection and Classification of Suspicious Lesions in Mammograms', year: 2014 },
          { srNo: 12, name: 'Kulkarni Parag Shisheer', topic: 'Content Based Image Retrieval System using User Navigation Patterns Relevance Feedback', year: 2013 },
          { srNo: 24, name: 'Dang Chetana Kishor', topic: 'CLUE: Cluster based retrieval', year: 2013 }, // Note: Sr. No 24 in HTML for this item
          { srNo: 13, name: 'Komatwar Rupali Manoj', topic: 'Use of Particle Filter in Visual Surveillance for Tracking Multiple People', year: 2013 },
          { srNo: 14, name: 'Budhewar Anupama S.', topic: 'A Comparative Approach for Overlay Text Detection and Extraction from Complex Video Scene', year: 2012 },
          { srNo: 15, name: 'Nagthane Deepika Kishor', topic: 'Design of Content Based Image Retrieval System using Fast Query Point Movement', year: 2011 },
          { srNo: 16, name: 'Kottawar Vinayak G', topic: 'Content Based Image Retrieval using Active Learning', year: 2011 },
          { srNo: 17, name: 'Chatur Madhuri Dhananjay', topic: 'Fast Video Retrieval using Two Step Coarse Search to Fine Search Method', year: 2011 },
          { srNo: 18, name: 'Nandedkar Vaishali Shivraj', topic: 'Content Based Audio Retrieval using Multiple Feature Vectors', year: 2011 },
          { srNo: 19, name: 'Deore Sandhya Subhash', topic: 'Dynamic Object Detection in Multimedia Mining', year: 2011 },
          { srNo: 26, name: 'Nemanwar Dipika Sudhakarrao', topic: 'Arbitrary Ratio Image Resizing using Fast DCT of Composite Length DCT Based Transcoder', year: 2011 }, // Note: Sr. No 26 in HTML
          { srNo: 28, name: 'Julme Bhavana Chandramani', topic: 'Motion Flow Based Video Retrieval', year: 2011 }, // Note: Sr. No 28 in HTML
          { srNo: 29, name: 'Tandale Shrikant Ramrao', topic: 'Content Based Image Retrieval using Wavelet Based Salient Points for Texture, Color & Shape', year: 2011 }, // Note: Sr. No 29 in HTML
          { srNo: 42, name: 'Hashmi S. A.', topic: 'Content Based Image Retrieval using Spatial features', year: 2011 }, // Note: Sr. No 42 in HTML
          { srNo: 21, name: 'Pardeshi Nilesh Ghanshyam', topic: 'Watermarking Relational Databases', year: 2011 }, // Note: Sr. No 21 in HTML
          { srNo: 35, name: 'Amol Kharat K.', topic: 'Region Based Image Retrieval using Color Shape & Location', year: 2010 }, // Note: Sr. No 35 in HTML
          { srNo: 22, name: 'Kulkarni Nilima Vijayrao', topic: 'Image Segmentation using Color and Texture Feature', year: 2010 }, // Note: Sr. No 22 in HTML
          { srNo: 20, name: 'Sanghavi Mahesh Ranglaji', topic: 'Digital Video Watermarking Based on Scene Change Detection', year: 2009 }, // Note: Sr. No 20 in HTML
          { srNo: 23, name: 'Kotecha Kainjan Swarup', topic: 'Content Based Video Retrieval using Ordinal Measures, Average Intensity Motion and Color Feature', year: 2009 }, // Note: Sr. No 23 in HTML
          { srNo: 25, name: 'Patil Shubhangi Dayaram', topic: 'Image Retrieval using Shape Context', year: 2009 }, // Note: Sr. No 25 in HTML
          { srNo: 27, name: 'Kirange Dhyaneshwar Khemachandra', topic: 'MOSAIC Based Representation of Video Sequence', year: 2009 }, // Note: Sr. No 27 in HTML
          { srNo: 33, name: 'Asole Suresh Shamrao', topic: 'Content Based Image Retrieval using Color Texture Moments', year: 2009 }, // Note: Sr. No 33 in HTML
          { srNo: 34, name: 'Rathod Dharmesh I.', topic: 'Detection of Masses in Mamograms using Texture Features', year: 2009 }, // Note: Sr. No 34 in HTML
          { srNo: 36, name: 'Giri Manish B.', topic: 'Multiprotocol Label System [MPLS] using Load Sharing', year: 2009 }, // Note: Sr. No 36 in HTML
          { srNo: 39, name: 'Apare Ravindra', topic: 'Trademark Image Retrieval using Reduced Regulated Morphological Skeleton Transform', year: 2009 }, // Note: Sr. No 39 in HTML
          { srNo: 30, name: 'Satav Pravin Ramdas', topic: 'Image Retrieval by Color Features in Image Database', year: 2009 }, // Note: Sr. No 30 in HTML
          { srNo: 31, name: 'Narwade Jyoti Madhavrao', topic: 'Content based image retrieval using color histogram', year: 2008 }, // Note: Sr. No 31 in HTML
          { srNo: 32, name: 'Deshpande Prachi Subhash', topic: 'Performance Evaluation of Fractional PEL Motion Estimation Algorithm', year: 2008 }, // Note: Sr. No 32 in HTML
          { srNo: 37, name: 'Jamkhandikar Dayanand S.', topic: 'Retrieval of Trademark Images Based on Shape', year: 2007 }, // Note: Sr. No 37 in HTML
          { srNo: 38, name: 'Jaiswal Durgeshnandini R.', topic: 'Detection of fixed and moving object in still images and in video', year: 2007 }, // Note: Sr. No 38 in HTML
          { srNo: 40, name: 'ArtiiD. K.', topic: 'Tool Design System', year: 2007 }, // Note: Sr. No 40 in HTML
          { srNo: 41, name: 'Bhosikar S. V.', topic: 'Packet Monitoring System [PMS]', year: 2006 }, // Note: Sr. No 41 in HTML
          { srNo: 43, name: 'Gatphne Suwarna', topic: 'Emergic Clean Mail', year: 2005 }, // Note: Sr. No 43 in HTML
          { srNo: 44, name: 'P. A. Agrawal', topic: 'Optimal Filter for Texture Segmentation', year: 2005 }
        ],
        patentPublished: {
          title: 'Design an IoT with Image Processing Based Solution of Detecting the Downy Mildew Disease of Grapes',
          details: 'Kainjan M. Sanghavi, Dr. Mrs. Archana M. Rajurkar, Dr. Mahesh R. Sanghavi, “Design an IoT with Image Processing Based Solution of Detecting the Downy Mildew Disease of Grapes”, The Patent Office Journal No. 13/2018 Dated 30/03/2018 11264, Application No. 201821009017 A, Publication Date: 30/03/2018.'
        }
      },
      outreachActivities: {
        summary: [
          'Visit to Hawaii, USA to attend the International Conference and present a research paper in Jan 2008. Also visited Stanford University and Northwestern University, Chicago.',
          'Referee with Journal: Reviewer for International Journal on ‘Pattern Recognition’, Elsevier publications.',
          'Worked as reviewer for National and International conferences.',
          'Selected as examiner for evaluation of Ph.D. thesis of University of Mysore.',
          'Two of the research papers have been accepted for World Comp 2009 International Conference on Image Processing, Computer Vision, and Pattern Recognition (IPCV\'09), Monte Carlo Resort, Las Vegas, Nevada, USA.',
          'Three of my PG students received Best Paper Awards in International Conferences'
        ],
        seminarsConferences: {
          attended: [
            { srNo: 1, title: '9th Annual Women\'s Meet – AWM 2024 (Scientific Conference ISBN: 978–81–969897–4–3 | Theme: To Cultivate Research Spirit and Create a Vibrant Community of Women in Science and Technology)', organizerPlace: 'Centre for Women Development of Venus International Foundation at Green Park Chennai, India.', period: '2nd March 2024' },
            { srNo: 2, title: '5th International Conference on Computing in Engineering and Technology ICCET2020', organizerPlace: 'MGM’s College of Engineering, Nanded', period: '09-11th January 2020' },
            { srNo: 3, title: '4th International Conference on Computing in Engineering and Technology', organizerPlace: 'Deogiri Institute of Engg & Management Studies, Aurangabad', period: '09-11th January 2019' },
            { srNo: 4, title: 'TechNExt India 2018, Annual Industry and Academis Conference and Awards 2018, CSI India', organizerPlace: 'Victor Menezes Convention Centre, IIT Bombay', period: '10-11’th February 2018' },
            { srNo: 5, title: 'IEEE and CSI sponsored 1’st International Conference on Intelligent Systems and Information Management ICISIM- 2017', organizerPlace: 'MGM’s JNEC, Aurangabad, MS, India', period: '05’-06’th October 2017' },
            { srNo: 6, title: 'International Conference on Signal and Information Processing IConSIP-2016', organizerPlace: 'SGGS Institute of Engg& Technology, Nanded in association with IIT, Bombay, COE Pune, SVUCE Tirupati and Technically co-sponsored by IEEE Bombay,', period: '6-8’th October 2016.' },
            { srNo: 7, title: 'National Conference on TEQIP II : Best Policies and Practices', organizerPlace: 'State Project Facilitation Unit, TEQIP II, Maharashtra State and SGGS Institute of Engineering and Technology, Nanded', period: '10-11’th Jan 2014' },
            { srNo: 8, title: 'National Conference on Communication, Computing and Networking Technologies (NCCCNT-13)', organizerPlace: 'SGGS Institute of Engineering and Technology, Nanded', period: '15-16th March 2013' },
            { srNo: 9, title: '1st World Summit on Accreditation WOSA 2012', organizerPlace: 'National Board of Accreditation, New Delhi', period: '25-28th March 2012' },
            { srNo: 10, title: 'First International Conference on Advances in Computing, ICAC 2008', organizerPlace: 'Anuradha Engineering College, Chikhali, Maharashtra, India.', period: 'Feb 21-22, 2008' },
            { srNo: 11, title: 'Forty-First Annual Hawaii International Conference on System Sciences', organizerPlace: 'Waikoloa, Big Island, Hawaii, USA.', period: 'Jan 7-10, 2008' },
            { srNo: 12, title: 'IEEE First International Conference on Signal and Image Processing', organizerPlace: 'B.V.B. College of Engineering and Technology, Hubli, Karnataka, India.', period: 'Dec 7-9, 2006' },
            { srNo: 13, title: 'Annual Convention of ISTE (Maharashtra and Goa Section) on Technical Education-Technology Transfer to Rural India and Sustainable Development', organizerPlace: 'M.G.M.’s College of Engineering, Nanded.', period: 'March  4-5, 2006' },
            { srNo: 14, title: 'International Conference on Cognition and Recognition', organizerPlace: 'P.E.S. College of Engineering, Mandya, Karnataka, India.', period: 'Dec 22-23, 2005' },
            { srNo: 15, title: 'Computer Applications in Electrical Engineering - Recent Advances” (CERA-01)', organizerPlace: 'Department of Electrical Engineering, IIT Roorkee, Roorkee.', period: 'Feb. 21-23, 2002' },
            { srNo: 16, title: 'ICMPS 2000 on Multimedia Processing and Systems', organizerPlace: 'Office of Naval Research, University of Maryland and IIT Madras, Chennai.', period: 'August 13-15, 2000' },
            { srNo: 17, title: 'Information Technology and Applications: Emerging Trends', organizerPlace: 'IIT Roorkee, Roorkee.', period: 'Dec.23-24, 1998' },
            { srNo: 18, title: 'Computer Society of India, Western Region Convention', organizerPlace: 'JNE College of Engineering, Aurangabad.', period: 'March 1-3, 1996' }
          ],
          shortTermCourses: [
            { srNo: 1, title: 'Future of Education Workshop by Employability. Life', place: 'MGM’s College of Engineering and Technology Mumbai', period: '25th Nov 2023' },
            { srNo: 2, title: 'Program on Institutional Transformation Strategy by Digital Commonwealth, London, UK', place: 'MGM’s College of Engineering and Technology Mumbai', period: '2022' },
            { srNo: 3, title: 'National Intellectual Property Awareness Mission', place: 'Intellectual Property Office, India', period: '16th Dec 2022' },
            { srNo: 4, title: 'Principals’ Meet followed by Two Day Workshop on "Introduction to Robotics" by e-Yantra Lab Setup Initiative (eLSI), e- Yantra Project of IIT Bombay at', place: 'M.G.M.’s College of Engineering, Nanded.', period: '2nd & 3rd August 2019' },
            { srNo: 5, title: 'Python Workshop organized by Teaching Learning Centre (ICT) at IIT Bombay funded by PMMMNMIT', place: 'M.G.M.’s College of Engineering, Nanded.', period: '22nd June 2019' },
            { srNo: 6, title: 'TEQIP-III Sponsored one day workshop on Curriculum Development for Computer Science and Engineering', place: 'Dr. Babasaheb Ambedkar Tech. University, Lonere', period: '01st May 2019' },
            { srNo: 7, title: 'International Workshop on Pattern Analysis and Machine Intelligence Document Engineering to Healthcare', place: 'Solapur University, Solapur.', period: '20th Dec 2018' },
            { srNo: 8, title: 'Faculty Development Program (FDP) Foundation Program in ICT for Education conducted by IIT Bombay', place: 'M.G.M.’s College of Engineering, Nanded.', period: '13-18th September 2018' },
            { srNo: 9, title: 'One Day NBA Orientation Workshop on Outcome Based Accreditation Process and Parameters', place: 'MSPM’s Deogiri Institute of Engineering and Management Studies, Aurangabad', period: '9’th June 2017' },
            { srNo: 10, title: 'Two-Week ISTE STTP Workshop on Introduction to Design of Algorithms Conducted by IIT Kharagpur', place: 'MGM’s College of Engineering, Nanded Remote Center Under NMEICT(MHRD)', period: '27’th to 30’th May, 2015' },
            { srNo: 11, title: 'Two-Week ISTE STTP Workshop on Computer Programming Conducted by IIT Bombay', place: 'MGM’s College of Engineering, Nanded Remote Center Under NMEICT(MHRD)', period: 'May 20’th to June 21’st 2014' },
            { srNo: 12, title: 'One Week STTP on Signal, Speech and Image Processing Using MATLAB', place: 'MGM’s College of Engineering, Nanded', period: '1-6th July 2013' },
            { srNo: 13, title: 'Two Days Advance Mission 10X Faculty Empowerment Workshop by Wipro Technologies', place: 'MGM’s College of Engineering, Nanded', period: '30-31st March 2012' },
            { srNo: 14, title: 'Five Days Mission 10X Faculty Empowerment Workshop by Wipro Technologies', place: 'MGM’s College of Engineering, Nanded', period: '28 Nov-2nd Dec 2011' },
            { srNo: 15, title: 'One day workshop on “Demystifying GCC thorough Gray Box Probing”', place: 'Department of Computer Sci.&Engg. Shri Guru Gobind Singhji Institute of Engineering & Technology, Nanded', period: '6th March 2010' },
            { srNo: 16, title: 'One day workshop on ECG Analysis and Interpretation', place: 'Department of Instrumentation Engineering. Shri Guru Gobind Singhji Institute of Engg., & Technology, Nanded', period: '17th Feb 2010' },
            { srNo: 17, title: 'Two Week ISTE Workshop on Effective teaching/learning of Computer Programming', place: 'Indian Institute of Technology, Bombay', period: '14-24th Dec 2009' },
            { srNo: 18, title: 'Workshop on Compiler Construction: From Practice to Theory', place: 'Department of Computer Engg. and IT, COEP, Pune.', period: '7-13thSept 2007' },
            { srNo: 19, title: 'Training program on Object Oriented Analysis and Design Using the UML with Fundamentals of Rational Rose', place: 'IBM Rational SEED, Pune, INDIA, at MGMCE Nanded.', period: '17-18thFeb 2007' },
            { srNo: 20, title: 'Training program on AIX5L Basics', place: 'IBM INDIA Banglore.', period: '10-13th July 2006' },
            { srNo: 21, title: 'Recent Trends in Signal and Image Processing', place: 'Department of E&TC, SGGSIET, Nanded.', period: '16-18th Jan 2006.' },
            { srNo: 22, title: 'PG Level course in audit mode, titled Multimedia Systems', place: 'DEP, KReSIT, IIT Bombay.', period: 'Jan-May 2003' },
            { srNo: 23, title: 'Course on JAVA organized by Mechanical and Industrial Engineering Students Society', place: 'IIT Roorkee, Roorkee.', period: '16- 6th Feb 2000' },
            { srNo: 24, title: 'Microsoft NT 4.0 and Workstation', place: 'Microsoft at Microland, Pune', period: 'Mar-97' },
            { srNo: 25, title: 'Microprocessors in Instrumentation', place: 'SGGS College of Engineering, Nanded.', period: '17-28th June 1996' }
          ],
          organized: [
            { srNo: 1, title: 'Organised 5th International Conference on Computing in Engineering and Technology ICCET2020 in association with Dept. of Electronics and Telecommunication Engg., Dr. BA Technological University, Lonere, Maharashtra and AICTE', place: 'Department of CSE, MGM’s College of Engineering, Nanded', period: '09-11th January 2020' },
            { srNo: 2, title: 'Organised Principals’ Meet followed by Two Day Workshop on "Introduction to Robotics" by e- Yantra Lab Setup Initiative (eLSI), e-Yantra Project of IIT Bombay', place: 'Department of CSE, M.G.M.’s College of Engineering, Nanded.', period: '2nd & 3rd August 2019' },
            { srNo: 3, title: 'Organised Faculty Development Program on “Data Science using R-Programming” Sponsored by TEQUIP-III, Dr. BA Technological University, Lonere, Maharashtra', place: 'Department of CSE, M.G.M.’s College of Engineering, Nanded.', period: '7 – 11th Jan 2019' }
          ]
        }
      },
      academicEnvironment: {
        laboratoryDevelopment: [
          'Development of ten Computer Labs of the Department in the capacity of Head of the Department.',
          'Development of Image Analysis and Computer Vision Lab for PG students.'
        ],
        proposalsProjects: [
          'Establishment of PG course in Computer Science and Engineering ME(CSE) in 2003.',
          'Establishment of another PG course in CSE Department named Computer Network and Internet security ME(CNIS) in 2012.',
          'A MOU with Distance Education Program of IIT Bombay.',
          'A MOU with Oracle Corporation for implementing the program Workforce Development.',
          'A MOU with IBM for Power Academy Program (PAP).',
          'A MOU with Machine Intelligence Research Labs (MRI Labs), Washington, USA'
        ],
        researchScholarsPhD: {
          summary: '9 Ph.D. scholars have completed their PhD and 3 candidates currently pursuing their doctoral research.',
          list: [
            { srNo: 1, name: 'Kapre Bhagyashri Sudhakakrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Robust Content Based Image and Video Watermarking Schemes and Architecture in Compressed Domain', year: 'Completed 27/1/2024' },
            { srNo: 2, name: 'Rahulsingh Gopalsingh Bisen', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Automatic detection of lung infections in chest X-ray images', year: 'Pursuing in 22-23' },
            { srNo: 3, name: 'Nikita Sanjay Pande', registeredWith: 'Dr. Babasaheb Ambedkar Technological University, Lonere', titleArea: 'Detection and Classification of Liver Tumor', year: 'Pursuing in 22-23' },
            { srNo: 4, name: 'Banwaskar Mangal Ramrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Designing of an Efficient Method for Content-Based Video Indexing and Retrieval', year: 'Completed 27/12/23' },
            { srNo: 5, name: 'Sanghavi Kainjan Mahesh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Effective Techniques for Prevention and Detection of Grape Diseases at Real Time Using IOT and Image Processing', year: 'Completed 30/1/2023' },
            { srNo: 6, name: 'Kottawar Vinayak Gajanan', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Content-Based Image Retrieval in P2P and Cloud Environment', year: 'Completed 5/1/2017' },
            { srNo: 7, name: 'Thakre Kalpana Sunil', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Video Retrieval in Compressed Domain', year: 'Completed 1/2/16' },
            { srNo: 8, name: 'Thengade Anita Mahesh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Automated System for Musculoskeletal Image Analysis and Interpretation of Knee for Quicker Diagnosis', year: 'Submitted 28/04/2016' },
            { srNo: 9, name: 'Dhawase Dhammjyoti Vitthalrao', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Design of Efficient Video Affective Content Analysis System', year: 'Pursuing 28/04/2016' },
            { srNo: 10, name: 'Sanghavi Mahesh Ranglal', registeredWith: 'Jodhpur National University, Jodhpur', titleArea: 'Design and Analysis of robust Algorithm for Digital Image and Video Watermarking to Protect and Authenticate Multimedia Content', year: 'Completed 2015' },
            { srNo: 11, name: 'Deshpande Deepa Sachin', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Discovering Association Rules based on Image Content', year: 'Completed 6/11/15' },
            { srNo: 12, name: 'Deshpande Neeta Amogh', registeredWith: 'SRT Marathwada University, Nanded', titleArea: 'Designing Robust Algorithms for Embedding Watermark in Digital Video.', year: 'Completed 3/12/14' },
          ]
        },
        meMtechDissertations: [
          { srNo: 1, name: 'Mohd Juned UZ Zama Khan', topic: 'Automatic Segmentation of Articular Cartilages of Pathological and Non- Pathological Knees from MRI', year: 2019 },
          { srNo: 2, name: 'Supriya Pande Anilrao', topic: 'Automatic Human Knee Cartilage Segmentation from Magnetic Resonance Images', year: 2017 },
          { srNo: 3, name: 'Priti Sattapure Shrikant', topic: 'Automatic Articular Cartilage Segmentation with Multiple Models', year: 2017 },
          { srNo: 4, name: 'Prajakta Kulkarni', topic: 'Content Based Image Retrieval System Based on Interactive Genetic Algorithm', year: 2016 },
          { srNo: 5, name: 'Radhika P. Dudhmande', topic: 'Extraction of Menisci & Detection & Characterization of Meniscal Tears in MRI Images', year: 2015 },
          { srNo: 6, name: 'Amit Ashok Kamthane', topic: 'Exudate Detection in Diabetic Retinopathy Color Images Using Morphological Operations', year: 2015 },
          { srNo: 7, name: 'Shilabai P. Ghadge', topic: 'Multi-Tier Content Based Microscopic Image Retrieval System', year: 2015 },
          { srNo: 8, name: 'Dhananjay L. Joshi', topic: 'Data Replication in Data Intensive Scientific Applications with Performance Guarantee', year: 2015 },
          { srNo: 9, name: 'Kulkarni Sanjeewani Balbhimrao', topic: 'A Unified Framework for Object Retrieval and Mining', year: 2014 },
          { srNo: 10, name: 'Bhat Sneha V.', topic: 'Image Registration & Content Based Image Retrieval using Adaptive Polar Transform', year: 2014 },
          { srNo: 11, name: 'Nikita S. Pande', topic: 'Detection and Classification of Suspicious Lesions in Mammograms', year: 2014 },
          { srNo: 12, name: 'Kulkarni Parag Shisheer', topic: 'Content Based Image Retrieval System using User Navigation Patterns Relevance Feedback', year: 2013 },
          { srNo: 24, name: 'Dang Chetana Kishor', topic: 'CLUE: Cluster based retrieval', year: 2013 }, // Note: Sr. No 24 in HTML for this item
          { srNo: 13, name: 'Komatwar Rupali Manoj', topic: 'Use of Particle Filter in Visual Surveillance for Tracking Multiple People', year: 2013 },
          { srNo: 14, name: 'Budhewar Anupama S.', topic: 'A Comparative Approach for Overlay Text Detection and Extraction from Complex Video Scene', year: 2012 },
          { srNo: 15, name: 'Nagthane Deepika Kishor', topic: 'Design of Content Based Image Retrieval System using Fast Query Point Movement', year: 2011 },
          { srNo: 16, name: 'Kottawar Vinayak G', topic: 'Content Based Image Retrieval using Active Learning', year: 2011 },
          { srNo: 17, name: 'Chatur Madhuri Dhananjay', topic: 'Fast Video Retrieval using Two Step Coarse Search to Fine Search Method', year: 2011 },
          { srNo: 18, name: 'Nandedkar Vaishali Shivraj', topic: 'Content Based Audio Retrieval using Multiple Feature Vectors', year: 2011 },
          { srNo: 19, name: 'Deore Sandhya Subhash', topic: 'Dynamic Object Detection in Multimedia Mining', year: 2011 },
          { srNo: 26, name: 'Nemanwar Dipika Sudhakarrao', topic: 'Arbitrary Ratio Image Resizing using Fast DCT of Composite Length DCT Based Transcoder', year: 2011 }, // Note: Sr. No 26 in HTML
          { srNo: 28, name: 'Julme Bhavana Chandramani', topic: 'Motion Flow Based Video Retrieval', year: 2011 }, // Note: Sr. No 28 in HTML
          { srNo: 29, name: 'Tandale Shrikant Ramrao', topic: 'Content Based Image Retrieval using Wavelet Based Salient Points for Texture, Color & Shape', year: 2011 }, // Note: Sr. No 29 in HTML
          { srNo: 42, name: 'Hashmi S. A.', topic: 'Content Based Image Retrieval using Spatial features', year: 2011 }, // Note: Sr. No 42 in HTML
          { srNo: 21, name: 'Pardeshi Nilesh Ghanshyam', topic: 'Watermarking Relational Databases', year: 2011 }, // Note: Sr. No 21 in HTML
          { srNo: 35, name: 'Amol Kharat K.', topic: 'Region Based Image Retrieval using Color Shape & Location', year: 2010 }, // Note: Sr. No 35 in HTML
          { srNo: 22, name: 'Kulkarni Nilima Vijayrao', topic: 'Image Segmentation using Color and Texture Feature', year: 2010 }, // Note: Sr. No 22 in HTML
          { srNo: 20, name: 'Sanghavi Mahesh Ranglaji', topic: 'Digital Video Watermarking Based on Scene Change Detection', year: 2009 }, // Note: Sr. No 20 in HTML
          { srNo: 23, name: 'Kotecha Kainjan Swarup', topic: 'Content Based Video Retrieval using Ordinal Measures, Average Intensity Motion and Color Feature', year: 2009 }, // Note: Sr. No 23 in HTML
          { srNo: 25, name: 'Patil Shubhangi Dayaram', topic: 'Image Retrieval using Shape Context', year: 2009 }, // Note: Sr. No 25 in HTML
          { srNo: 27, name: 'Kirange Dhyaneshwar Khemachandra', topic: 'MOSAIC Based Representation of Video Sequence', year: 2009 }, // Note: Sr. No 27 in HTML
          { srNo: 33, name: 'Asole Suresh Shamrao', topic: 'Content Based Image Retrieval using Color Texture Moments', year: 2009 }, // Note: Sr. No 33 in HTML
          { srNo: 34, name: 'Rathod Dharmesh I.', topic: 'Detection of Masses in Mamograms using Texture Features', year: 2009 }, // Note: Sr. No 34 in HTML
          { srNo: 36, name: 'Giri Manish B.', topic: 'Multiprotocol Label System [MPLS] using Load Sharing', year: 2009 }, // Note: Sr. No 36 in HTML
          { srNo: 39, name: 'Apare Ravindra', topic: 'Trademark Image Retrieval using Reduced Regulated Morphological Skeleton Transform', year: 2009 }, // Note: Sr. No 39 in HTML
          { srNo: 30, name: 'Satav Pravin Ramdas', topic: 'Image Retrieval by Color Features in Image Database', year: 2009 }, // Note: Sr. No 30 in HTML
          { srNo: 31, name: 'Narwade Jyoti Madhavrao', topic: 'Content based image retrieval using color histogram', year: 2008 }, // Note: Sr. No 31 in HTML
          { srNo: 32, name: 'Deshpande Prachi Subhash', topic: 'Performance Evaluation of Fractional PEL Motion Estimation Algorithm', year: 2008 }, // Note: Sr. No 32 in HTML
          { srNo: 37, name: 'Jamkhandikar Dayanand S.', topic: 'Retrieval of Trademark Images Based on Shape', year: 2007 }, // Note: Sr. No 37 in HTML
          { srNo: 38, name: 'Jaiswal Durgeshnandini R.', topic: 'Detection of fixed and moving object in still images and in video', year: 2007 }, // Note: Sr. No 38 in HTML
          { srNo: 40, name: 'ArtiiD. K.', topic: 'Tool Design System', year: 2007 }, // Note: Sr. No 40 in HTML
          { srNo: 41, name: 'Bhosikar S. V.', topic: 'Packet Monitoring System [PMS]', year: 2006 }, // Note: Sr. No 41 in HTML
          { srNo: 43, name: 'Gatphne Suwarna', topic: 'Emergic Clean Mail', year: 2005 }, // Note: Sr. No 43 in HTML
          { srNo: 44, name: 'P. A. Agrawal', topic: 'Optimal Filter for Texture Segmentation', year: 2005 }
        ],
        otherCredentials: [
          'Fellow of Institute of Engineers (F-1234362).',
          'Member of IEEE (93980285) and CSI (2010000183)',
          'Nominated as Member of RRC for Savitribai Phule Pune University, Pune.',
          'Nominated as Member of RRC for SRTMU, Nanded.',
          'Nominated as Chairman, BOS, CSE, for SRTMU, Nanded.',
          'Recognized Guide for Ph.D. with SRTMU, Nanded and Dr. Babasaheb Ambedkar Technological University, Lonere, Maharashtra.',
          'Shouldered the responsibility of Vice Principal of MGM’s College of Engineering, Nanded for four years.',
          'Head of the Computer Science and Engineering Department since 2005.',
          'Shouldered the responsibility of Dean, Academics for one and half year.',
          'Organized International Conference on Computing in Engineering and Technology ICCET2020 during 9-11 Jan 2020 in collaboration with DBATU and AICTE'
        ],
        alliedActivities: [
          'Member of expert committee for ‘write off’ for the scraped equipment’s / items, for the institute.',
          'Member of walk-in-interview committee for the institute – 6 times.',
          'Worked as subject expert for interviews of faculty selection in different colleges.',
          'Worked as member for preparation toward visit of NBA committee to the Institute in 2006.',
          'Worked as member for preparation toward visit of NAAC committee to the Institute in 2018.'
        ],
        extensionFieldOutreach: [
          'Active participation in preparation of Recognition of Research Centre at MGMCE Nanded in Computer Sc. & Engineering with SRTMU, Nanded (2009).',
          'Subject expert for Faculty selection at MGM’s COE, Nanded (6 times).',
          'Subject expert for Faculty selection with Shivaji University, Kolhapur.',
          'Worked as judge for Technical Paper Presentation Competition “Pragya” for students at SGGS Institute of Engineering and Technology, Nanded and in VISIOTECH at MGMCE Nanded.'
        ],
        chairingSessions: [
          'Worked as session chair in International Conference on “Cognition and Recognition” during 22-23 Dec 2005, organized by P.E.S. College of Engineering, Mandya, Karnataka, India',
          'Worked as session chair in First International Conference on Advances in Computing ICAC2008, Chikhli, Maharashtra, India during 21-22 Feb 2008.',
          'Worked as session chair in International Conference on Emerging Frontiers in Technology for Rural Area EFITRA – 2012” at BDCOE, Sevagram, Wardha, Maharashtra, India during 17- 18 March 2012.',
          'Worked as session chair in National Conference on Communication, Computing and Networking Technologies at SGGS Institute of Engineering and Technology, Maharashtra, India during 15-16 March 2013.',
          'Worked as session chair in International Conference on Recent Advances in Computing and Applications (ICRACA 2017), at MAEER’s MIT College of Engineering, Kothrud, Pune during 6 & 7’th April, 2017.',
          'Worked as session chair in IEEE International Conference on Intelligent Systems and Information Management [ICISIM-17] held during October 05-06, 2017 at MGM’s Jawaharlal Nehru Engineering College, Aurangabad – 431003, Maharashtra',
          'Worked as session chair in 4thInternational Conference on Computing in Engineering & Technology, at Deogiri Institute of Engineering and Management Studies, Aurangabad during 9-11th January 2019.'
        ],
        expertInvitedLectures: [
          { srNo: 1, topic: 'Machine Learning with Python', eventPlace: 'AICTE-ISTE Sponsored Faculty Induction/Refresher Course Organized by Department of CSE, Guru Nanak Dev Engineering College Bidar', monthYear: '10-01-2022' },
          { srNo: 2, topic: 'Research Methodology', eventPlace: 'Keynote delivered at International Conference on Recent Advances in Computing and Applications (ICRACA 2017), MIT College of Engineering, Pune', monthYear: '6’th April 2017' },
          { srNo: 3, topic: 'Content Based Video Retrieval', eventPlace: 'TEQIP II Sponsored STTP on Image and Video Processing', monthYear: '10’th March 2013' },
          { srNo: 4, topic: 'Keynote on Content-based Image Retrieval', eventPlace: 'International Conference on Emerging Frontiers in Technology for Rural Area (EFITRA) organized by Bapurao Deshmukh College of Engg., Sevagram', monthYear: '17-18’th March 2012' },
          { srNo: 5, topic: 'Image and Video Retrieval from Multimedia Databases', eventPlace: 'Jawaharlal Darda Institute of Engineering and Technology', monthYear: '10’th Feb 2011' },
          { srNo: 6, topic: 'Motion Estimation and Video Compression', eventPlace: 'Jawaharlal Darda Institute of Engineering and Technology', monthYear: '13’th March 2010' },
          { srNo: 7, topic: 'Video and Image Retrieval and Image Compression', eventPlace: 'ISTE-STTP on Image Processing organized by Department of Electronics and Telecommunication, Babsaheb Naik College of Engineering, Pusad', monthYear: '25’th April 2007' },
          { srNo: 8, topic: 'Motion Estimation and Content-Based Video Retrieval', eventPlace: 'ISTE-STTP on Image and Video Processing organized by Department of Electronics and Telecommunication, Shri Sant Gajanan Maharaj College of Engineering, Shegaon', monthYear: '18’th to 22’nd Dec 2006' }
        ]
      }
    }
  },
   { 
    id: 'jyoti-patil', 
    img: '/images/cse/faculty/Department_3-20141807015800.jpg', 
    name: 'Ms. Jyoti H. Patil', 
    designation: 'Professor', 
    specialization: 'Computer Science & Engineering (Image Processing)', 
    email: 'patil_jh@mgmcen.ac.in',
    phone: '(O2462) 222999',
    mobile: 'NA', // Empty in HTML, so NA
    address: 'M.G.M’s College of Engg., Hingoli Road, Near Airport, Nanded ',
    detailedProfile: {
      academicQualification: [
        { srNo: 1, degree: 'M. E (Electronics)- Specialization in Computer Technology', institute: 'SRTMUN/ SGGS College of Engineering, and Technology Nanded', grade: 'First Class', year: 2011, specialization: 'Computer Technology' },
        { srNo: 2, degree: 'B.E.', institute: 'Marathwada University, Aurangabad/ SGGS College of Engineering, and Technology Nanded', grade: 'Distinction', year: 1992, specialization: 'CSE' },
      ],
      experience: [
        { srNo: 1, postHeld: 'Associate Professor', employer: 'M.G.M’S College of Engineering, Nanded', periodOfService: 'Feb -1994 to till date', natureOfDuties: 'Teaching' },
      ],
      academicEnvironment: {
        otherCredentials: [
          'Working as Remote Center Co-ordinator&nbsp; of IIT, Bombay at MGM&rsquo;s College of Engineering, Nanded till date,',
          'Attend one week Co-ordinator workshop at IIT, Bombay.',
          'Worked as Course Co-ordinator for ISTE two week workshop on Database Management System.',
          'Working as Co-ordinator for Open source courses i.e Spoken tutorial &ndash;Project, IIT, Bombay till date.',
          'Workshop conduced for Ubuntu in&nbsp; Open source courses i.e Spoken tutorial &ndash;Project, IIT, Bombay',
          'Conducted one day ISTE&nbsp; Workshop on Green Building awareness.'
        ]
      }
    }
  },
  { 
    id: 'manisha-joshi', 
    img: '/images/cse/faculty/Department_3-20230804153410.jpg', 
    name: 'Dr. Mrs. Manisha Y. Joshi', 
    designation: 'Professor', 
    specialization: 'Applied cryptography, Image Processing, Computer Algorithms, computer networks', 
    email: 'joshi_my@mgmcen.ac.in',
    phone: 'NA', // Empty in HTML
    mobile: '09422147974',
    address: '71, Sumati, Chatrpati Nagar, Purna Road, Nanded.',
    detailedProfile: {
      academicQualification: [
        { srNo: 1, degree: 'B.E(Electronics)', institute: 'Dr.B.A.M.U. Aurangabad', grade: 'First class', year: 1994, specialization: 'Electronics' },
        { srNo: 2, degree: 'M.E.(Electronics)', institute: 'S.R.T.M.U. Nanded', grade: 'First Class', year: 1999, specialization: 'Computer Technology' },
        { srNo: 3, degree: 'Ph.D.', institute: 'S.R.T.M.U. Nanded', grade: 'NA', year: 2015, specialization: '&ldquo;On the Analysis and Design of Key Management System for Secure Communication&nbsp;&ldquo;' },
      ],
      experience: [
        { srNo: 1, postHeld: 'Professor', employer: 'M.G.M.&rsquo;s College of Engg., Nanded', periodOfService: '05 Aug 1999 to till date', natureOfDuties: 'Full Time Teaching' },
      ],
      researchPublications: {
        internationalJournals: [
          { srNo: 1, authors: 'Aparna S. Pande, Y. V. Joshi, Manisha Y. Joshi', title: '&ldquo;Analysis of Tree structure for Secure Group Communication Using LKH Approach&rdquo;', journalName: 'International Journal of Computer Sciences and Engineering', volumeNo: '7', issueNo: '3', year: 2019, pageNumbers: 'NA' },
          { srNo: 2, authors: 'Aparna Y. Ladekar, M.Y.Joshi', title: '&ldquo;Classification of Concept Drifting Data Streams Using Adaptive Novel-Class Detection&rdquo;', journalName: 'International Journal of Computer Engineering In Research Trends', volumeNo: '3', issueNo: '9', year: 2016, pageNumbers: '514-520' },
          { srNo: 3, authors: 'Aparna S. Pande, Y. V. Joshi, Manisha Y. Joshi', title: '&ldquo;Analysis on Logical Key Hierarchy and Variants for Secure Group Communication&rdquo;', journalName: 'ICCASP 2018, Book chapter, Springer-Atalntis, Part of the&nbsp;<a href="https://link.springer.com/bookseries/11156">Advances in Intelligent Systems and Computing</a>&nbsp;book series&nbsp;(AISC, volume 810)', volumeNo: 'NA', issueNo: 'NA', year: 2018, pageNumbers: 'NA' },
          { srNo: 4, authors: 'Vinod I. Jondhale, Manisha Y. Joshi', title: '&ldquo;Secure Forensic Report Retrieval Application using Cipher Text-Policy Attribute-Based Encryption&rdquo;', journalName: 'International Journal of Science and Research (IJSR)', volumeNo: '7', issueNo: '4', year: 2018, pageNumbers: '980-983' },
          { srNo: 5, authors: 'Aman Bhimrao Kamble, M. Y. Joshi', title: '&quot;Cloud Data Security Using Third Party Auditor&quot;', journalName: 'International Journal of Scientific Research in Science, Engineering and Technology(IJSRSET)', volumeNo: '4', issueNo: '8', year: 2018, pageNumbers: '340-344' },
          { srNo: 6, authors: 'Vaidehi V. Mantri, M. Y. Joshi', title: '&quot;A Secure End-To-End Protocol for Secure Transmission of SMS&quot;', journalName: 'International Journal of Science and Research (IJSR)', volumeNo: '7', issueNo: '4', year: 2018, pageNumbers: '1042 &ndash; 1047' },
          { srNo: 7, authors: 'Manisha Y. Joshi and R.S. Bichkar', title: '&ldquo; A Centralized Key Table based Communication Efficient Group Key management protocol&rdquo;', journalName: 'International Journal of computer science and internet security(IJCNIS) Mecs Press', volumeNo: '7', issueNo: '8', year: 2015, pageNumbers: '48-55' },
          { srNo: 8, authors: 'Manisha Y. Joshi and R.S. Bichkar', title: '&ldquo; An efficient Group Key Transport Protocol&rdquo;', journalName: 'International Journal of Computer Science and Information Technologies', volumeNo: '5', issueNo: '1', year: 2014, pageNumbers: '462-465' },
          { srNo: 9, authors: 'Amit N Thakre, M.Y. Joshi', title: '&ldquo; Performance Analysis of AODV and DSR routing protocol in Moblile adhoc Networks &rdquo;', journalName: 'International Journal on Computer Application, IJCA special issue on MANET&rsquo;s', volumeNo: 'NA', issueNo: 'NA', year: 2010, pageNumbers: '211-218' },
        ],
        internationalConferences: [
          { srNo: 1, authors: 'Manisha Y. Joshi , R. S. Bichkar', title: '&ldquo; Scalable key transport protocol using Chinese remainder theorem&rdquo;', conferenceName: 'Internationalsymposim on security in computing and communications(SSCC&rsquo; 2013), published in Springer LNCS, CCIS 377', heldAt: 'Mysore, India,', duration: 'August 22-24, 2013' },
          { srNo: 2, authors: 'M.Y. Joshi, R.S. Bichkar', title: '&ldquo;Authentication for remote voting using visual cryptography&rdquo;', conferenceName: 'IComputer Science and Information Technology (ICCSIT), 2010 3rd IEEE International Conference', heldAt: 'NA', duration: '9-11 July 2010.' },
          { srNo: 3, authors: 'PallaviChavan, M.Y. Joshi', title: '&ldquo;A Literature Survey: Face Recognition&rdquo;', conferenceName: 'International conference on network security and workshop', heldAt: 'Erode( Tamilnadu).', duration: 'January 2007' },
          { srNo: 4, authors: 'Md. Mohammad Aijaz Ahmed, M.Y. Joshi', title: '&ldquo; simple and efficient solution to remote user authentication using smart cards&rdquo;', conferenceName: 'Third IEEE International Conference on Innovations in Information Technology (IIT\'06)', heldAt: 'Dubai.', duration: 'NA' },
          { srNo: 5, authors: 'N.L. Gavankar, Ms M.Y. Joshi,', title: '&ldquo;Steganography; A new trand in information Warefare and security&rdquo;.', conferenceName: 'IEEE International conference on Advances in computer vision and information technology.', heldAt: 'Aurangabad.', duration: 'December 2007' },
          { srNo: 6, authors: 'Anil Wakekar, M.Y. Joshi,', title: '&ldquo;Secure Image Communication Techniques: A Review&rdquo;', conferenceName: 'International Conference on Emerging Trends in Engineering 2008 PravaraNagar', heldAt: 'Loni.', duration: '2008' },
          { srNo: 7, authors: 'Mr. PrafulPardhi , M.Y. Joshi,', title: '&ldquo;The Advantages Of Elliptic Curve Cryptography For Wireless Security&rdquo;', conferenceName: 'International conference on Emerging trends in computing electronics, Embedded sysytem and VLSI design', heldAt: 'Padmashri Dr. V. VikhePatil College of Engineering, Ahmednager.', duration: '20-21st March 2008' },
          { srNo: 8, authors: 'M.Y. Joshi, S.N. Talbar, Y.V. Joshi', title: '&ldquo; Monochrome and color image compression using Subband coding&rdquo;', conferenceName: 'ICCCD at IIT Kahragpur', heldAt: 'NA', duration: 'Dec 2000.' },
          { srNo: 9, authors: 'Navin Kumar, M.Y.Joshi', title: '&ldquo;Analysis of academic data using Ad-hoc association rule mining from star schema&rdquo;,', conferenceName: 'International Seminar on IT in Academics, (ITA-2009) Sinhgad institute of Management', heldAt: 'Vadgaon(BK), Pune', duration: '20-22 Feb 2009.' },
        ],
      },
      academicEnvironment: {
        meMtechDissertations: [
          { srNo: 1, name: 'Mr. FRANK A. A.', topic: 'Detection of Denial of Service Attacks using Traffic Analysis &amp; Resource Utilization', year: 2005 },
          { srNo: 2, name: 'Ms. KALE SARIKA', topic: 'System Administration on Mobile', year: 2005 },
          { srNo: 3, name: 'Mr. BHOSLE&nbsp; R. S.', topic: 'Speech Recognition by Adaptive - Directed Acylic Graph Support Vector Machine', year: 2007 },
          { srNo: 4, name: 'Mr. GAVANKAR NITIN L', topic: 'A Stenographic Method for Hiding Data in VQ Encoded Images using SOC', year: 2011 },
          { srNo: 5, name: 'ABDUL MUJEEB SIDDIQUI', topic: 'Router control mechanism for congestion avoidance in CDMA-RAN', year: 2007 },
          { srNo: 6, name: 'AMBESANGE ASHISH', topic: 'Image Watermarking using Secret &amp; Public Key Cryptography', year: 2011 },
          { srNo: 7, name: 'JADHAV REKHA P.', topic: 'Image Encryption using T-Matrix', year: 2009 },
          { srNo: 8, name: 'MOHAMMAD AIJAZ AHMED', topic: 'A Secure &amp; Efficient Dynamic ID-Based Remote user Authentication Scheme', year: 2007 },
          { srNo: 9, name: 'NANDEDKAR KIRTI K.', topic: 'Dynamic Router Table Design using B-Tree', year: 2009 },
          { srNo: 10, name: 'PARDHI P.R.', topic: 'Reversible Watermarking using Difference Expansion', year: 2010 },
          { srNo: 11, name: 'CHAVAN PALLAVI VIJAY', topic: 'Authentication for Remote Voting Visual Cryptography', year: 2007 },
          { srNo: 12, name: 'JOSHI APARNA M.', topic: 'Analysis of Key Management System Based on High Order Tree for Secure Multicast', year: 2010 },
          { srNo: 13, name: 'TRIVEDI NAVIN KUMAR', topic: 'Analysis of Academic Data using AD-HOC Association Rule', year: 2007 },
          { srNo: 14, name: 'WAKEKAR ANIL LAXMANRAO', topic: 'Secure Image Communication using Vector Quantisation', year: 2010 },
          { srNo: 15, name: 'KHANDARKAR KIRAN RAMESH', topic: 'Analysis of Group Key Management Scheme using One Way Function Tree', year: 2011 },
          { srNo: 16, name: 'MAPARI RAHUL BHAGWATRAO', topic: 'Adaptive Key Management Protocol', year: 2011 },
          { srNo: 17, name: 'THAKARE AMIT NASHIKRAO', topic: 'Analysis of Key Distribution Scheme for the Peer to Peer Secure Group Communication', year: 2008 },
          { srNo: 18, name: 'BHAMRE BHAVNA RAGHUNATH', topic: 'Histogram Based Audio Watermarking', year: 2009 },
          { srNo: 19, name: 'Histogram Based Audio Watermarking', topic: 'Intrusion Detection and Access Control System for Web Servers using LAMP', year: 2013 },
          { srNo: 20, name: 'KAPRE BHAGYASHRI SUDHAKRAR', topic: 'Monochrome and Color Image Watermarking using SVD and DWT', year: 2010 },
          { srNo: 21, name: 'MIRIKAR ABHIJEET RAMESH', topic: 'An Efficient One way Function Multicast Key Distribution Tree using REED Solution Codes', year: 2009 },
          { srNo: 22, name: 'SHINDE JAYASHRI VISHNU', topic: 'An Analysis of NAK Based Loss Recovery in Congestion Control for Reliable Multicast', year: 2010 },
          { srNo: 23, name: 'SONKAR SHRINIVAS KISHANRAO', topic: 'An efficient Authentication System for Critical Sever using 3D Password Scheme', year: 2010 },
          { srNo: 24, name: 'PAKLE GANESH KALYANRAO', topic: 'Performance Analysis of VCP, TCP REND and SACK', year: 2011 },
          { srNo: 25, name: 'PAWAR PANKAJ PRAKASHRAO', topic: 'Internet Congestion Control Scheme Based on Price', year: 2011 },
          { srNo: 26, name: 'BRAHM DEO SAH', topic: 'Accumulation Based Congestion Control System using AQM', year: 2010 },
        ],
        otherCredentials: [
          'Website Incharge from June 2022',
          'PG recognized teacher in Computer Science and Engineering',
          '&nbsp;Worked as M.E. Coordinator from June 2004 to May 2009 and Sept 2013 to till the date.',
          '&nbsp;Dissertation Examiner for Govt. College of Engineering, Aurangabad (Autonomous)',
          '&nbsp;Chief Superintendent and Assistant Chief Superintendent for University examinations Dec. 2009, 2008 and 2002.',
          '&nbsp;Worked as reviewer of International journal of Network Security (IJNS).<br />&nbsp;'
        ]
      }
    }
  },
  { 
    id: 'suhas-salve', 
    img: '/images/cse/faculty/Department_3-20140801060404.jpg', 
    name: 'Mr. Salve Suhas G', 
    designation: 'Assistant Professor Senior', 
    specialization: 'Wireless Sensor Networks, Cloud Computing, Networking.', 
    email: 'salve_sg@mgmcen.ac.in',
    phone: '(O2462-222999)',
    mobile: 'NA', // Empty in HTML
    address: 'MGM’s College of Engineering, Nanded ',
    detailedProfile: {
      academicQualification: [
        { srNo: 1, degree: 'BE(CSE)', institute: 'SRTMUN/MGMCEN', grade: 'Distinction', year: 2003, specialization: 'CSE' },
        { srNo: 2, degree: 'ME(CSE)', institute: 'SRTMUN/MGMCEN', grade: 'First Class', year: 2011, specialization: 'CSE' },
        { srNo: 3, degree: 'Ph.D.', institute: 'SRTMUN', grade: '-', year: 'Pursuing', specialization: 'CSE' },
      ],
      experience: [
        { srNo: 1, postHeld: 'Sr. Lecturer', employer: 'M.G.M&rsquo;S College of Engineering, Nanded', periodOfService: '01-02-2006 to till date', natureOfDuties: 'Teaching' },
      ],
      researchPublications: {
        internationalJournals: [
          { srNo: 1, authors: 'Ms. Jyoti T Sarode, Mr. S.G. Salve,', title: '&ldquo;Novel Approaches to Improve Robustness, and Accuracy of Iris Recognition Systems&#39;', journalName: 'International Journal of Engineering Science and Computing', volumeNo: '6', issueNo: '5', year: 2016, pageNumbers: 'NA' },
        ],
        internationalConferences: [
          { srNo: 1, authors: 'Mr. Salve S.G, Dr. Ms .K. C. Jondhale', title: 'Shape matching and object recognition using shape context', conferenceName: '3rd IEEE International Conference on, Computer Science and Information Technology.', heldAt: 'Chengdu, China', duration: 'July 9-11,2010' },
        ],
        nationalConferences: [
          { srNo: 1, authors: 'Mr. Salve S.G, Dr. Ms. K. C. Jondhale', title: 'Shape matching and object recognition using shape context', conferenceName: 'Indian Conference on Computer Vision, Graphics, Image and Video Processing, ICCVGIP 2009.', heldAt: 'Nagpur', duration: 'March 13-14, 2009' },
          { srNo: 2, authors: 'Ms. Neha P. Lanke, Mr. S.G. Salve', title: '<p>Smile Detection using Sectional DCT and Support Vector Machines with Radial Basis Function (RBF)&nbsp;</p><p>&nbsp;</p>', conferenceName: 'National Conference on Advances in Computing, Networking and Security (NCACNS-13)', heldAt: 'SGGS Institute of Engineering &amp; Technology, Nanded', duration: '23<sup>rd</sup>-24<sup>th</sup> December, 2013' },
        ],
      },
      academicEnvironment: {
        meMtechDissertations: [
          { srNo: 1, name: 'Ms. Neha P Lanke', topic: '&nbsp;Smile detection by boosting pixel differences along with sectional DCT and Bayesian classification approach.', year: 2014 },
          { srNo: 2, name: 'Ms. Snehal S Kulkarni', topic: '&nbsp;Color image enhancement using luminance enhancement and modified histogram approach.', year: 2015 },
          { srNo: 3, name: 'Mr. Pavan M Sonale', topic: 'Time Bounded Essential Localization for Wireless Sensor Networks', year: 2016 },
          { srNo: 4, name: 'Ms. Jyoti T Sarode', topic: 'Comparative Analytical Study of Iris Recognition System based on Robustness, Accuracy and Rapidity', year: 2016 },
          { srNo: 5, name: 'Ms. Aruna C Kurhade', topic: 'Sink Trail: A Proactive Data Reporting Protocol for Wireless Sensor Network', year: 2016 },
          { srNo: 6, name: 'Ms. Chitra K. Joshi', topic: 'Persistent&nbsp; Localized Broadcasting in VANET&rsquo;s', year: 2017 },
          { srNo: 7, name: 'Ms. Rupali V. Mutkule', topic: 'Classification of Twitter Accounts by Using Naive Bayes Method', year: 2018 },
        ],
        coursesConducted: [
          'Worked as Co-Remote Centre Coordinator for two week ISTE workshop on &ldquo;Effective Teaching/Learning of Computer Programming conducted by IIT Bombay from 14th to 24th Dec, 2009',
          'Conducted National Linux Security Championship - Indian grand success held in association with EES IIT Delhi at MGM&rsquo;s College of Engineering, Nanded on 18<sup>th</sup> &amp; 19<sup>th</sup> March 2015 conducted by VBM Technologies.'
        ],
        otherCredentials: [
          'Attended one week winter school on Digital signal Processing: Fundamentals, Advances and Applications from 18th to 23rd Dec 2006 at SGGSIE&amp;T, Nanded.',
          'Attended a workshop on &ldquo;Object-Oriented Analysis and Design using the UML with Fundamentals of Rational Rose during 17th Feb to 18 Feb 2007 at MGM&rsquo;s College of Engineering, Nanded',
          'Attended 5 days AICTE-ISTE sponsored STTP on Advance Operating System &amp; Shell Programming during 16-20 June 2008 in SSGMCE, Shegaon.',
          'Presented a paper in International Conference on &ldquo;Emerging trends in Engineering &amp; Technology&rdquo; in G. H. Raisoni College of Engineering, Nagpur dated 16 - 18 July 2008.',
          'Presented a paper in Indian Conference on Computer Vision, Graphics, Image &amp; Video Processing ICCVGIVP 2009 organized by Shri Ramdeobaba Kamla Nehru Engineering College, Nagpur dated 13 &amp; 14th March 2009.',
          'Attended 5 days AICTE-ISTE sponsored STTP on &ldquo;Computer Networking: Concepts to Recent Trends&rdquo; during 25-29 May 2009 at SGGSIE&amp;T, Nanded.',
          'Attended an ISTE approved one week STTP on &ldquo;Recent Trends in Advanced Image Processing&rdquo; organized by Department of Electronics/E&amp;TC Engineering G.H Raisoni College of Engineering and management, Wagholi, Pune during 23-27 Nov 2009.',
          'Participated in a Mission10x workshop conducted at SGGSIE&amp;T&nbsp; Nanded from 30th Nov to 4th Dec 2009.',
          'Worked as Co-Remote Centre Coordinator for two week ISTE workshop on &ldquo;Effective Teaching/Learning of Computer Programming conducted by IIT Bombay from 14th to 24th Dec,2009.',
          'Participated in the STTP on &ldquo;Time Series Modelling &amp; Spectral Analysis-Theory &amp; Applications&rdquo; sponsored by AICTE, New Delhi Organized by the Department of Chemical Engineering from 12th July 2010 to 17th July 2010 at IIT Madras.',
          'Presented paper in the &ldquo;National Conference on Emerging Trends in Electronics Engineering and Computing E3C2010&rdquo; held at J D College of Engineering Nagpur during 9th &amp; 10th February 2010.',
          'Participated in FDP on &ldquo;Network Simulator 2&rdquo; (NS2) organized by Department of Computer Engineering at Smt.Kashibai Navale College of Engineering Vadgaon(bk),Pune during 23rd-27th Oct 2010.',
          'Participated in the Short Term Course on &ldquo;Wireless Communication &amp; Networks&rdquo; conducted by G.S.Sanyal School of Telecommunications at IIT Kharagpur during 17th to 22nd May,2010',
          'Participated in the two days workshop on &ldquo;Network Simulator-2&rdquo; organized by Department of Electronics &amp; Telecommunication Engineering at SGGSIE&amp;T during 25th -26th February,2011.',
          'Attended Five days FDP on &ldquo;Cloud Computing&rdquo; organized by Department of Computer Engineering at Sinhgad Institute of Technology &amp; Science Narhe, Pune from 16th to 20th Nov.2011.',
          'Attended two-week workshop on database management system conducted by IIT Bombay under the national mission on education through ICT (MHRD,Govt.of India) hosted by MGM&rsquo;s college of Engineering,Nanded during 21st-31st May,2013',
          'Worked as &ldquo;Under Study&rdquo; for backlog theory exam at MGM&rsquo;s College of Engineering. &ldquo;',
          'Attended two days Workshop under TEQIP-II on &ldquo;Exata Cyber&rdquo; organized by Department of Computer Science and Engineering, during 12<sup>th</sup> &amp; 13<sup>th</sup> February 2013 at Walchand College of Engineering, Sangli.',
          'Attended one-week Faculty Development Programme on &ldquo;Wireless Sensors and Their Applications&rdquo; under TEQIP-II held during 18<sup>th</sup>-22<sup>nd</sup> March ,2013 organized by the Department of Information Technology at SGGSIE&amp;T.',
          'Participated in a&nbsp; Two-week Workshop on &ldquo;Cyber Security&rdquo; &nbsp;conducted by IIT Bombay under the National Mission on Education through ICT (MHRD, Govt. of India) hosted by MGM&rsquo;s College of Engineering, Nanded from&nbsp; 10<sup>th</sup> July to 20<sup>th</sup> July ,2014.',
          'Participated in a&nbsp; Two-week Workshop on &ldquo;Computer Networking&rdquo;&nbsp; &nbsp;conducted by IIT Bombay under the National Mission on Education through ICT (MHRD, Govt. of India) hosted by MGM&rsquo;s College of Engineering, Nanded from 28<sup>th</sup> May to 5<sup>th</sup> July, 2014.',
          'Worked as Teaching Assistant&nbsp; in the successful completion of the&nbsp;&nbsp; One week ISTE Workshop on &ldquo;Computer Programming&rdquo;&nbsp;&nbsp; &nbsp;conducted by IIT Bombay under the National Mission on Education through ICT (MHRD, Govt. of India) hosted by MGM&rsquo;s College of Engineering, Nanded from 16<sup>th</sup> to 21<sup>st</sup> June ,2014.',
          'Attended Two days Workshop on &ldquo;Cloud Computing&rdquo; an International Workshop conducted by Technophilia Systems in association with Robotics &amp; Computer Applications Institute of USA held at School of Computational Science, Swami Ramanand Teerth Marathwada University, Nanded on 19<sup>th</sup> &amp; 20<sup>th</sup> September 2014.',
          'Participated in a&nbsp; Two-week ISTE STTP &nbsp;on &ldquo;Introduction to Design of Algorithms&rdquo;&nbsp; &nbsp;conducted by IIT Kharagpur under the National Mission on Education through ICT (MHRD, Govt. of India) hosted by MGM&rsquo;s College of Engineering, Nanded from 27<sup>th</sup> April&nbsp; to 30<sup>th</sup> May, 2015.',
          'Participated in a&nbsp; Two-Day Saptahaant Shikshak Prashikshan&nbsp; on &ldquo;Introduction to Machine Learning&rdquo;&nbsp; &nbsp;conducted by IIT Kharagpur under the National Mission on Education through ICT (MHRD, Govt. of India) hosted by MGM&rsquo;s College of Engineering, Nanded on&nbsp; 16<sup>th</sup> &amp; 17<sup>th</sup> December ,2017.',
          'Attended an AICTE approved Faculty Development Programme (FDP101x) on &ldquo;Foundation Program in ICT for Education&rdquo; conducted by IIT Bombay under the aegis of Pandit Madan Mohan Malaviya National Mission for Teachers and Teaching (PMMMNMTT), MHRD, GOI&nbsp; from 3<sup>rd</sup> August to 7<sup>th</sup> September 2017.',
          'Attended an AICTE approved Faculty Development Programme (FDP201x) on &ldquo;Pedagogy for Online and Blended Teaching &ndash;Learning Process&rdquo; conducted by IIT Bombay under the aegis of Pandit Madan Mohan Malaviya National Mission for Teachers and Teaching (PMMMNMTT), MHRD, GOI&nbsp; from 14<sup>th</sup> September to 12<sup>th</sup> October 2017.',
          'Participated successfully in one week STTP on &ldquo;Cloud Computing and Virtualization&rdquo; conducted by Geeks lab Technologies Pvt. Ltd and organized by Department of Information Technology and Computer Science &amp; Engineering at MGM&rsquo;s Jawaharlal Nehru Engineering College, Aurangabad from 26<sup>th</sup> to 30<sup>th</sup> June 2017.',
          'Participated in One Week AICTE Sponsored QIP Short Term Interdisciplinary course on &ldquo;Computer Networks&rdquo; conducted by office of Quality Improvement Programme, at SGGSIE&amp;T Nanded, from 12<sup>th</sup> to 16<sup>th</sup> March, 2018.',
          'Worked in Staff Panel for Revision of TE (CSE) and BE (CSE) Syllabus Content. &nbsp;',
          'Appointed as a Chairman / Paper setter for different subjects of Third year and Final year.',
          'Member of Computer Society of India.'
        ]
      }
    }
  },
  { id: 'bhagyashri-kapre', img: '/images/cse/faculty/Department_3-20182906114121.jpg', name: 'Dr. Kapre Bhagyashri Sudhakar', designation: 'Assistant Professor Senior', specialization: 'Computer Science and Engineering', email: 'kapre_bs@mgmcen.ac.in' },
  { id: 'pankaj-pawar', img: '/images/cse/faculty/Department_3-20180807160904.jpg', name: 'Mr. Pankaj P. Pawar', designation: 'Assistant Professor Senior', specialization: 'Networking', email: 'pawar_pankaj@mgmcen.ac.in' },
  { id: 'aijaz-ahmed', img: '/images/cse/faculty/Department_3-20132512185040.jpg', name: 'Mr. Mohammed Aijaz Ahmed', designation: 'Assistant Professor Senior', specialization: 'Information Security', email: 'mohd_aijaz@mgmcen.ac.in' },
  { id: 'dipti-aghor', img: '/images/cse/faculty/Department_3-20242702113733.jpg', name: 'Dipti Bhaskarrao Aghor', designation: 'Assistant Professor', specialization: 'Electronics & Telecommunications', email: 'aghor_db@mgmcen.ac.in' },
  { id: 'shivprasad-titare', img: '/images/cse/faculty/Department_3-20242702114519.jpg', name: 'Mr. Shivprasad Titare', designation: 'Assistant Professor', specialization: 'AL-ML, Blockchain Technology', email: 'titare_si@mgmcen.ac.in' },
  { id: 'savita-wagre', img: '/images/cse/faculty/Department_3-20242702112019.jpg', name: 'Ms. Wagre Savita Sambhaji', designation: 'Asst. Prof.', specialization: 'Biomedical Image Processing, Artificial Intelligence, Machine Learning, Full Stack Development', email: 'wagre_savita@mgmcen.ac.in' },
  { id: 'nitu-pariyal', img: '/images/cse/faculty/Department_3-20180807160420.jpg', name: 'Ms. Nitu L. Pariyal', designation: 'Asst. Prof.', specialization: 'Data Mining & Data Warehousing', email: 'pariyal_nitu@mgmcen.ac.in' },
  { id: 'chennoji', img: '/images/cse/faculty/Department_3-20182906151315.jpg', name: 'Mr. Chennoji M. R.', designation: 'Asst. Prof.', specialization: 'Image Processing, Software Engineering', email: 'chennoji_mr@mgmcen.ac.in' },
  { id: 'jyoti-kale', img: '/images/cse/faculty/Department_3-20140602073230.jpg', name: 'Ms.Kale Jyoti S.', designation: 'Asst. Prof.', specialization: 'Artificial Intelligence, Machine Learning, Cloud Computing', email: 'kale_js@mgmcen.ac.in' },
  { id: 'rahulsingh-bisen', img: '/images/cse/faculty/Department_3-20141707084234.jpg', name: 'Mr. Rahulsingh G. Bisen', designation: 'Asst. Prof.', specialization: 'Data Mining', email: 'bisen_rg@mgmcen.ac.in' },
  { id: 'mangesh-bhandare', img: '/images/cse/faculty/Department_3-20162902180433.jpg', name: 'Mr. Bhandare Mangesh Nagnath', designation: 'Asst. prof.', specialization: 'Networking and Communication', email: 'bhandare_mn@mgmcen.ac.in' },
  { id: 'deepashri-naik', img: '/images/cse/faculty/Department_3-20160103105338.jpg', name: 'Mrs. Deepashri S. Naik', designation: 'Asst. Prof.', specialization: 'Computer Science & Engineering', email: 'Naik_ds@mgmcen.ac.in' },
  { id: 'shital-gaikwad', img: '/images/cse/faculty/Department_3-20240404165259.jpg', name: 'Dr. Shital Yadavrao Gaikwad', designation: 'Asst. Prof.', specialization: 'Computer Network and Security, Wireless Sensor Network, Computer Hardware', email: 'gaikwad_shital@mgmcen.ac.in' },
  // { id: 'anjali-hazari', img: '/images/department/faculty/Department_3-20240501161646.jpg', name: 'Ms. Hazari Anjali Deepak', designation: 'Assistant Prof.', specialization: 'Computer Science and Engineering', email: 'hazari_anjali@mgmcen.ac.in' },
  { id: 'rakhi-dumne', img: '/images/cse/faculty/Department_3-20240501163055.jpg', name: 'Miss. Rakhi Shivajirao Dumne', designation: 'Assistant Prof.', specialization: 'Natural Language Processing', email: 'dumne_rs@mgmcen.ac.in' },
  { id: 'mukta-shelke', img: '/images/cse/faculty/mukta-shelke.jpg', name: 'Ms. Mukta Gopalrao Shelke', designation: 'Assistant Prof.', specialization: 'Computer Science And Engineering', email: 'NA' },
  { id: 'bihade-pratibha-shyam', img: '/images/cse/faculty/bihade-pratibha-shyam.jpg', name: '	Bihade Pratibha Shyam', designation: 'Assistant Prof.', specialization: 'Cryptography & Network Security', email: 'NA' },
  { id: 'linta-b-isal', img: '/images/cse/faculty/linta-b-isal.jpg', name: 'Ms. Linta B. Isal', designation: 'Assistant Prof.', specialization: '	Database Systems', email: 'NA' },
  { id: 'ketaki-pople', img: '/images/cse/faculty/ketaki-pople.jpg', name: 'Ketaki Prakash Pople', designation: 'Assistant Prof.', specialization: '	Database Systems', email: 'NA' },
  { id: 'khan-m-hina', img: '/images/cse/faculty/khan-m-hina.jpg', name: 'Khan Musharraf Hina', designation: 'Assistant Prof.', specialization: 'Business Intelligence and Data Analytics', email: 'NA' },
  { id: 'himanshu-joshi', img: '/images/cse/faculty/himanshu-joshi.jpg', name: 'Himanshu Uttamrao Joshi', designation: 'Assistant Prof.', specialization: 'Data mining, AI&ML', email: 'NA' },
  { id: 'shweta-patil', img: '/images/cse/faculty/shweta-patil.jpg', name: 'Ms. Shweta Sheshrao Patil', designation: 'Assistant Prof.', specialization: 'Cryptography & Network Security', email: 'NA' },

];

const supportingStaff = [
  { id: 'padmakar-deshmukh', img: '/images/cse/faculty/Department_3-20161207182212.jpg', name: 'Mr. Padmakar Deshmukh', designation: 'Programmer', specialization: 'Networking / Hardware', email: 'dpadmakar@mgmcen.ac.in' },
  { id: 'suresh-sangnor', img: '/images/cse/faculty/Department_3-20170707103327.jpg', name: 'Mr. Sangnor Suresh Nilkanthrao', designation: 'Lab Assistant', specialization: 'Computer', email: 'sangnor_sn@mgmcen.ac.in' },
  { id: 'prashant-deshmukh', img: '/images/cse/faculty/Department_3-20162410142812.jpg', name: 'Mr. Prashant Kishanrao Deshmukh', designation: 'Lab Assistant', specialization: 'Computer Science Engineering', email: 'deshmukh_pk@mgmcen.ac.in' },
  { id: 'rahul-bhande', img: '/images/cse/faculty/Department_3-20162902181658.jpg', name: 'Mr. Bhande Rahul Vijaykumar', designation: 'Lab. Assistant', specialization: 'System Administration & Networking Technology', email: 'bhande_rv@mgmcen.ac.in' },
  { id: 'pooja-nirmale', img: '/images/cse/faculty/Department_3-20220206194242.jpg', name: 'Ms. Nirmale Pooja Kour Surjeet Singh', designation: 'Lab. Assistant', specialization: 'Computer Hardware & Networking, IOT', email: 'nirmale_ps@mgmcen.ac.in' },
  { id: 'madhav-vaidya', img: '/images/cse/faculty/Department_3-20242011101631.jpg', name: 'Mr. Vaidya Madhav', designation: 'Lab Assistant', specialization: 'Computer Application', email: 'vaidya_madhav@mgmcen.ac.in' },
  { id: 'syed-rasheed', img: '/images/cse/faculty/Department_3-20162410143222.jpg', name: 'Mr. Syed Rasheed Syed Babu', designation: 'Peon', specialization: '-', email: 'rasheed@mgmcen.ac.in' },
  { id: 'ananda-bhise', img: '/images/cse/faculty/Department_3-20162410142919.jpg', name: 'Mr. Ananda Rama Bhise', designation: 'Peon', specialization: '-', email: '' },
];

// Combine all faculty data for easy lookup in a detail page (if needed later)
export const allCseFacultyData = [...teachingStaff, ...supportingStaff];

const FacultyProfilePage = () => {
  const location = useLocation(); // Hook to get the current URL path

  const currentDeptPath = "/academics/computer-science-engineering"; // Base path for CSE department

  const [dbFaculty, setDbFaculty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/faculty`);
        setDbFaculty(res.data);
      } catch (err) {
        console.error('Error fetching faculty', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaculty();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-32 max-w-6xl">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden">
        {/* Subtle background SVG for visual interest */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Faculty Profile</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10">
          Meet the dedicated and experienced faculty members of the Computer Science & Engineering Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
      </div>

      {/* Department Sub-Navigation Tabs - NON-STICKY */}
      <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300`}>
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 overflow-x-auto">
          {cseDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                  ${isActive
                    ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 border border-gray-200'
                  }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area with improved card design */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center">
          <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Computer Science & Engineering Faculty
        </h2>

        {/* Teaching Staff Section */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-6 mt-10 border-b border-indigo-100 pb-2">Teaching Staff</h3>
        {isLoading ? (
            <div className="flex justify-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dbFaculty.map((faculty) => (
                <div key={faculty._id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <Link to={`${currentDeptPath}/faculty/${faculty._id}`} className="block">
                    {faculty.profileImageUrl ? (
                        <img
                          src={faculty.profileImageUrl}
                          alt={faculty.name}
                          className="w-full h-48 object-cover object-top"
                          onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                        />
                    ) : (
                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400">
                            {faculty.name.charAt(0)}
                        </div>
                    )}
                    <div className="p-4 text-center">
                      <h4 className="text-lg font-semibold text-blue-800 hover:underline">{faculty.name}</h4>
                      <p className="text-sm text-gray-600">{faculty.designation || faculty.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{faculty.specialization}</p>
                      {faculty.email && faculty.email !== 'NA' && (
                        <a href={`mailto:${faculty.email}`} className="text-indigo-600 hover:text-indigo-800 text-xs mt-2 inline-flex items-center" onClick={(e) => e.stopPropagation()}>
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                          {faculty.email}
                        </a>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
        )}

        {/* Supporting Staff Section */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-6 mt-12 border-b border-indigo-100 pb-2">Supporting Staff</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {supportingStaff.map((staff) => (
            <div key={staff.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Link to={`${currentDeptPath}/faculty/${staff.id}`} className="block">
                <img
                  src={staff.img}
                  alt={staff.name}
                  className="w-full h-48 object-cover object-top"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }} // Fallback image
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-blue-800 hover:underline">{staff.name}</h4>
                  <p className="text-sm text-gray-600">{staff.designation}</p>
                  <p className="text-xs text-gray-500 mt-1">{staff.specialization}</p>
                  {staff.email && staff.email !== 'NA' && staff.email !== '' && (
                    <a href={`mailto:${staff.email}`} className="text-indigo-600 hover:text-indigo-800 text-xs mt-2 inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      {staff.email}
                    </a>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyProfilePage;