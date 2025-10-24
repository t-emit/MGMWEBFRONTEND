import React, { useState } from 'react';
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Added Chevron icons

// --- Reusable CollapsibleSection Component ---
const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="border-t border-gray-200 pt-6">
            <button
                className="w-full flex justify-between items-center text-left py-4 px-6 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ease-in-out"
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                <h2 className="text-xl md:text-2xl font-bold text-indigo-800">
                    {title}
                </h2>
                {isOpen ? (
                    <FaChevronUp className="text-indigo-600 text-lg transition-transform duration-300" />
                ) : (
                    <FaChevronDown className="text-indigo-600 text-lg transition-transform duration-300" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                }`}
                style={{
                    maxHeight: isOpen ? '10000px' : '0px' // A large enough value for max-height to handle content
                }}
            >
                <div className="p-4 md:p-6 bg-white rounded-b-lg shadow-inner space-y-4"> {/* Inner padding and background for content */}
                    {children}
                </div>
            </div>
        </section>
    );
};

// --- Library Data (kept as is) ---
const libraryStaff = [
    { name: 'Dr. Hambarde G.K.', qualification: 'M.Lib., M.Phil., Ph.D.', designation: 'Librarian', joiningDate: '16/10/1989', duties: 'General Administration & Supervision' },
    { name: 'Mrs. Kulkarni. R.V.', qualification: 'B.A., B.Lib.Sc.', designation: 'Lib. Asst.', joiningDate: '05/08/1992', duties: 'Circulation Section (FE & SE) Student' },
    { name: 'Mr. Shinde R.S.', qualification: 'B.A., M.Lib.Sc.', designation: 'Lib. Asst.', joiningDate: '12/06/2012', duties: 'Circulation Section (TE & BE)' },
    { name: 'Mr. Shinde A.G.', qualification: 'B.Com, M.Lib.Sc.', designation: 'Lib. Asst.', joiningDate: '28/05/1991', duties: 'Circulation Section Staff & P.G. Students' },
    { name: 'Mrs. Deshmukh A.P.', qualification: 'B.Sc. M.Lib.Sc.', designation: 'Lib. Asst.', joiningDate: '13/11/2018', duties: 'Supervision of Periodical Section' },
    { name: 'Mr. Pawde D.A.', qualification: 'B.A., B.Lib.Sc.', designation: 'Lib. Peon', joiningDate: '19/08/2005', duties: 'Maintaining & Up-keeping Periodical Section' },
    { name: 'Mr. Shinde D.H.', qualification: 'VIIth', designation: 'Lib. Peon', joiningDate: '01/02/1990', duties: 'Maintaining & Up-keeping Stack Room' },
];

const hardCopyResources = [
    { resource: 'Total No. of Volumes', count: '46040' },
    { resource: 'Total No. of Titles', count: '14738' },
    { resource: 'Journals', count: '62' },
    { resource: 'Magazines', count: '16' },
    { resource: 'Newspapers', count: '15' },
    { resource: 'PG Dissertations', count: '126' },
    { resource: 'Project Reports', count: '520' },
    { resource: 'Bound Volumes of Journals', count: '3012' },
    { resource: 'Ph.D. Theses', count: '10' },
];

const eResources = [
    { publisher: '*IEEE-ASPP', journals: '317+', type: 'e-journals' },
    { publisher: '*ASME', journals: '36', type: 'e-journals' },
    { publisher: '*ASCE', journals: '41', type: 'e-journals' },
    { publisher: '**DELNET', journals: '911', type: 'e-books & e-journals' },
    { publisher: '*Ebsco-Core Engg. Collection', journals: '7220', type: 'e-books' },
    { publisher: 'CD / DVD', journals: '3014', type: 'Technical Resource' },
];

const facilityNutshell = [
    "Digital Library & Internet Facility (200 Mbps Leased Line)", "Departmental Libraries", "Photocopy Service",
    "Library Web OPAC", "Book Bank for SC / ST Students", "Collection of General Reading Books", "User Education Programme",
    "New Arrivals of Library Resources", "Area of the Library - 6528 Sqm.", "No. of Seats in Reading Room - 150",
    "Internet Capacity - (200 Mbps Leased Line)",
];

const selfLearningSupport = [ "National Digital Library.", "E-Shodhganga / Shodhgangotri.", "E-books & Journals Database.", "Online Courseware through internet.", "NPTEL Video Lectures Series", "Vidwan Expert Database & National Researchers.", "World Book Library." ];

const activeMembers = [
    { type: 'Faculty', count: '110' },
    { type: 'Supporting Staff', count: '75' },
    { type: 'UG Students', count: 'Final Year-101, Third Year-118, Second Year-262, First Year-311' },
    { type: 'PG Students', count: 'Nil' },
];

const importantWebsites = [
    "http://ieeexplore.ieee.org", "http://asmedigitalcollection.asme.org", "http://ascelibrary.org/action",
    "http://search.ebscohost.com", "http://delnet.in", "http://ndl.iitkgp.ac.in",
    "http://shodhganga.inflibnet.ac.in", "http://shodhgangotri.inflibnet.ac.in", "http://doabooks.org",
    "http://doaj.org",
];
const timeLimitBooks = [
    { type: 'Faculty', issue: '12', period: 'Whole Semester' },
    { type: 'Supporting Staff', issue: '02', period: '15 Days' },
    { type: 'UG Students', issue: 'Final Year-04\nThird Year-04\nSecond Year-04\nFirst Year-04', period: '15 Days' },
    { type: 'PG Students', issue: '05', period: '15 Days' },
];

const branchwiseJournals = [
    { branch: 'Civil Engineering', total: '09' },
    { branch: 'Computer Science and Engineering', total: '15' },
    { branch: 'Electronics & Telecommunication Engg.', total: '10' },
    { branch: 'Information Technology', total: '07' },
    { branch: 'Mechanical Engineering', total: '13' },
    { branch: 'Humanities / Interdisciplinary', total: '08' },
];

const nationalJournals = [
    { isHeader: true, title: 'DEPARTMENT OF MECHANICAL ENGINEERING' },
    { title: 'Journal of Mechanical & Production Engineering' },
    { title: 'International Journal of Plastics & Polymer Technology' },
    { title: 'Manufacturing Technology Today' },
    { title: 'Institute of Engineers JI-Aerospace/Mechanical/Production/Marine-Series -C' },
    { title: 'Institute of Engineers JI-Metallurgical and Materials/Mining Engg-Series D' },
    { title: 'Institute of Engineers JI-Chemical Textile Engg- Series E' },
    { title: 'International Journal of Advanced in Thermal Sciences and Engineering' },
    { title: 'International Journal of Manufacturing Science and Technology' },
    { title: 'International Journal of Manufacturing Technology and Industrial Engineering' },
    { title: 'IUP Journal of Operations Management' },
    { title: 'IUP Journal of Mechanical Engineering' },
    { title: 'Transactions on Machine Design (Group B)' },
    { title: 'Journal of Innovation in Refrigeration, Air-condion Heating ventilation' },

    { isHeader: true, title: 'DEPARTMENT OF ELECTRONICS AND TELECOM. ENGG' },
    { title: 'Journal of Electrical and Electronics Engineering' },
    { title: 'Institute of Engineers JI- Electronics and Telecommunication/Electrical/Computer-Series-B' },
    { title: 'Journal of Networking Technology (Group A)' },
    { title: 'Journal of Electronic Systems (Group A)' },
    { title: 'Journal of E-Technology (Group A)' },
    { title: 'IUP Journal of Telecommunications' },
    { title: 'IUP Journal of Electrical and Electronics Engineering' },
    { title: 'IETE Journal of Education' },
    { title: 'IETE Journal of Research' },
    { title: 'IETE Journal of Technical Review' },

    { isHeader: true, title: 'THE DEPARTMENT OF CIVIL ENGINEERING' },
    { title: 'Journal of Structural Engineering (April 2024 to March 2025)' },
    { title: 'Institute of Engineers JI-Environmental/Civil/Architectural/Agricultural-Series-A' },
    { title: 'Indian Concrete Journal' },
    { title: 'International Journal of Civil Engineering (IJCE)' },
    { title: 'International Journal of Advances in Civil Engineering' },
    { title: 'Indian Journal of Structural Engineering and Technology' },
    { title: 'International Journal of Civil Engineering and Construction Tech.' },
    { title: 'International Journal of Mining and Mineral Processing' },
    { title: 'IUP Journal of Structural Engineering' },

    { isHeader: true, title: 'DEPARTMENT OF COMPUTER SCIENCE ENGINEERING' },
    { title: 'ICTACT Journal on Communication Technology (IJCT)' },
    { title: 'ICTACT Journal on Soft Computing (IJSC)' },
    { title: 'ICTACT Journal on Image and Video Processing (IJIVP)' },
    { title: 'IUP Journal of Computer Science' },
    { title: 'IUP Journal of Knowledge Management' },
    { title: 'Information Journal of Information Retrieval' },
    { title: 'International Journal of Image Processing and Application' },
    { title: 'International Journal of Multimedia, Computer Vision and Machine learning' },
    { title: 'International Journal of Network and Mobile Technology' },
    { title: 'Journal of Intelligent Computing (Group A)' },
    { title: 'Journal of Multimedia Processing Technologies (Group A)' },
    { title: 'Information Security Education Journal (ISEJ) (Group B)' },
    { title: 'Journal of Cloud Computing (JCC) I - Manager' },
    { title: 'Journal of Information Security Research (Group A)' },
    { title: 'Journal of Data Processing (Group A)' },

    { isHeader: true, title: 'DEPARTMENT OF INFORMATION TECHNOLOGY' },
    { title: 'International Journal of Computer Sciences, Systems Engineering and Information Technology' },
    { title: 'International Journal of Data Analysis and Information Systems (IJDAIS)' },
    { title: 'Indian Journal of Information Retrieval' },
    { title: 'International Journal of Information Technology and Management Research' },
    { title: 'International Journal of Wireless Communications and Networking' },
    { title: 'International Journal of Information Technology and Engineering' },
    { title: 'IUP Journal of Information Technology' },
    
    { isHeader: true, title: 'DEPARTMENT OF HUMANITIES' },
    { title: 'Research Journal of Humanities and social Science' },
    { title: 'DECIDOC Journal of library and Information Technology' },
    { title: 'Defense Science Journal' },
    { title: 'Journal of Engineering Education Transformation' },
    { title: 'IUP Journal of English Studies' },
    { title: 'IUP Journal of Soft Skill' },
    { title: 'University News' },
    { title: 'Indian Journal of Technical Education' },
];

const newspapers = {
    local: [
        { name: "Prajawani" },
        { name: "Lokptra" },
        { name: "Udyacha Marathwada" }
    ],
    regional: [
        { name: "Lokmat" },
        { name: "Lokmat Times" },
        { name: "Sakal" },
        { name: "Loksatta" },
        { name: "Saamna" },
        { name: "Deshonnati" },
        { name: "Punnynagri" },
        { name: "Maharashtra Times" }
    ],
    national: [
        { name: "Times of India" },
        { name: "Indian Express" },
        { name: "The Hindu" },
        { name: "Economics Times" }
    ]
};

const magazines = {
    technical: [
        { title: 'Autocar India', frequency: 'Monthly' },
        { title: 'Bulletin of Marathwada Mathematical Society', frequency: 'Half Yearly' },
        { title: 'Electronics For you', frequency: 'Monthly' },
        { title: 'Open Source for you', frequency: 'Monthly' },
    ],
    nonTechnicalEnglish: [
        { title: 'Competition Success Review', frequency: 'Monthly' },
        { title: 'Employment News', frequency: 'Weekly' },
        { title: 'Frontline', frequency: 'Fortnightly' },
        { title: 'General knowledge Today', frequency: 'Monthly' },
        { title: 'India Today', frequency: 'Weekly' },
        { title: 'Sports star', frequency: 'Fortnightly' },
        { title: 'Reader Digest', frequency: 'Monthly' },
    ],
    nonTechnicalMarathi: [
        { title: 'Saaptahik Sakal', frequency: 'Weekly' },
        { title: 'Uddhojak', frequency: 'Monthly' },
        { title: 'Yashachi Parikrama', frequency: 'Monthly' },
        { title: 'Chanyakya Mandal', frequency: 'Monthly' },
        { title: 'Yojna', frequency: 'Monthly' },
    ]
};

// --- LibraryPage Component ---
const LibraryPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4 max-w-5xl"> {/* Added max-width for better readability */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
                        Library
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg mb-12"> {/* Intro content container */}
                    {/* This div will contain the floating image and the text that wraps around it */}
                    <div className="relative mb-6"> {/* Removed space-y-10 from here, as parent already has it */}
                        <div className="md:float-right md:ml-8 md:mb-4 w-full md:w-64 lg:w-72 xl:w-80 text-center"> {/* Image container, width adjusted for better flow */}
                            <img src="/images/facilities/library/librarian.jpg" alt="Librarian Dr. Hambarde G.K." className="w-40 h-40 mx-auto rounded-full object-cover shadow-md mb-2" />
                            <h3 className="font-bold text-gray-800">Dr. Hambarde G.K.</h3>
                            <p className="text-sm text-gray-600">Librarian</p>
                        </div>
                        {/* All paragraphs are now in one block that wraps around the float */}
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Our Central Library since 1984 has grown from 931 to 46040 volumes till date. The library covers an area of 6528 Sft. with two floors having reading room capacity of 150 students. The library is automated using LMS SOUL 3.0.The library subscribes to national & international journals and magazines with E-books, CD ROM’s covering Engineering, Management, Religion, Cultural subjects etc. So that students can evolve into excellent professional & good cultured human beings. The library collection includes Books, e-books, Journals, e-journals, back volumes of technical journals, Ph.D. Thesis of faculty, project Reports, PG Dissertations and non-book materials. The library follows open access for Final Year B.Tech. / P.G. students & faculty members.</p>
                            <p>The library currently subscribes scholarly Journals in Engineering Science & Humanities. Library also provides IP based online access to international journals like IEEE, ASME, ASCE, DELNET, full text e-journals and databases. These e-journals are accessible through internet to campus users. Library also subscribes Ebsco core engineering e-books collection in which e-books from worldwide publishers are available for students and faculty. Library provides remote login for access to DELNET resources.</p>
                            <p>Membership of the central library is open to all faculty, staff & students of the College without any fees.Library books are classified according to D.D.C. classification scheme & shelved on stacks. Web OPAC and M-OPAC is available for users. Dictionary catalogue in card form is maintained for Marathi, Hindi & English Literature Books, it help users to locate books in the Library collection.</p>
                            <p>Digital library plays an important role in student’s life. College has sufficient digital resources. Reading area of the library has been Wi-Fi enabled and under CCTV surveillance.Users are allowed to use their laptops in reading room. 20 computers with headphone are available for users to access database of e-journals, e-books & other free online e-resources like Shodhganga, National Digital Library, NPTEL Video lectures, Inflibnet, DOAJ & DOAB etc.</p>
                            <p>The college central library opens at 9.30 AM and closes at 5.30 PM. Transactions of books takes place during 10.00 AM to 5.00 PM with half an hour break. During exam preparation leave and exam period the library is open till mid-night for students. Students has been issued a bar coded library ticket with the help of bar code scanner transaction of books takes place, for library transaction the ILMS generates a e- receipt with details of library book transacted. All library books are bar-coded.</p>
                        </div>
                        <div className="clear-both"></div> {/* Clears the float to ensure subsequent content doesn't wrap */}
                    </div>
                </div>
                
                {/* All sections below are now collapsible */}
                <div className="space-y-6"> {/* Added spacing between collapsible sections */}
                   <CollapsibleSection title="Library Staff">
                       <div className="overflow-x-auto">
                            <table className="w-full border-collapse border text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        {['Sr.', 'Name', 'Qualification', 'Designation', 'Date of Joining', 'Duties'].map(h => <th key={h} className="border p-2 text-left font-semibold">{h}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {libraryStaff.map((staff, index) => (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                                            <td className="border p-2 text-center">{index + 1}.</td>
                                            <td className="border p-2">{staff.name}</td>
                                            <td className="border p-2">{staff.qualification}</td>
                                            <td className="border p-2">{staff.designation}</td>
                                            <td className="border p-2">{staff.joiningDate}</td>
                                            <td className="border p-2">{staff.duties}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="Available Library Resources">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">i) Hard Copies</h3>
                                <table className="w-full border-collapse border text-sm">
                                    <tbody>{hardCopyResources.map((item, i) => <tr key={i} className="odd:bg-white even:bg-gray-50"><td className="border p-2">{i+1}. {item.resource}</td><td className="border p-2 font-semibold text-center">{item.count}</td></tr>)}</tbody>
                                </table>
                            </div>
                             <div>
                                <h3 className="text-xl font-semibold mb-4">ii) E-Resources (Soft Copies)</h3>
                                <table className="w-full border-collapse border text-sm">
                                    <thead className="bg-gray-100"><tr>{['Sr.', 'Publisher', 'No. of Journals', 'Resource'].map(h => <th key={h} className="border p-2 font-semibold">{h}</th>)}</tr></thead>
                                    <tbody>{eResources.map((item, i) => <tr key={i} className="odd:bg-white even:bg-gray-50"><td className="border p-2 text-center">{i+1}.</td><td className="border p-2">{item.publisher}</td><td className="border p-2 text-center">{item.journals}</td><td className="border p-2">{item.type}</td></tr>)}</tbody>
                                </table>
                                <p className="text-xs mt-2 text-gray-600">*IP based access is provided.<br/>**Remote login is provided.</p>
                            </div>
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="Library Facility in a Nutshell">
                        <ol className="list-decimal list-inside space-y-2">{facilityNutshell.map((item, i) => <li key={i}>{item}</li>)}</ol>
                    </CollapsibleSection>

                    <CollapsibleSection title="Support to Students for Self-learning Activities">
                        <p>Following activity can be supports for self-learning.</p>
                        <ol className="list-decimal list-inside space-y-2">{selfLearningSupport.map((item, i) => <li key={i}>{item}</li>)}</ol>
                    </CollapsibleSection>

                    <CollapsibleSection title="Library Active Members">
                        <table className="w-full max-w-lg mx-auto border-collapse border text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border p-2 font-semibold">Sr. No.</th>
                                    <th className="border p-2 font-semibold text-left">Type of Member</th>
                                    <th className="border p-2 font-semibold">No. of Members</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeMembers.map((item, i) => (
                                    <tr key={i} className="odd:bg-white even:bg-gray-50">
                                        <td className="border p-2 text-center">{`0${i + 1}.`}</td>
                                        <td className="border p-2">{item.type}</td>
                                        <td className="border p-2 whitespace-pre-line">{item.count}</td>
                                    </tr>
                                ))}
                                <tr className="font-bold bg-gray-100">
                                    <td className="border p-2" colSpan="2">Total</td>
                                    <td className="border p-2 text-center">977</td>
                                </tr>
                            </tbody>
                        </table>
                    </CollapsibleSection>

                    <CollapsibleSection title="Time Limit & Issue of Books to Members">
                        <table className="w-full border-collapse border text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    {['Sr.', 'Type of Member', 'No. of Book Issue', 'Time Period'].map(h => <th key={h} className="border p-2 font-semibold">{h}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {timeLimitBooks.map((item, i) => (
                                    <tr key={i} className="odd:bg-white even:bg-gray-50">
                                        <td className="border p-2 text-center">{`0${i + 1}.`}</td>
                                        <td className="border p-2">{item.type}</td>
                                        <td className="border p-2 whitespace-pre-line text-center">{item.issue}</td>
                                        <td className="border p-2 text-center">{item.period}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CollapsibleSection>

                    <CollapsibleSection title="Branchwise National Journals">
                        <table className="w-full max-w-lg mx-auto border-collapse border text-sm">
                            <thead className="bg-gray-100"><tr>{['Sr. No.', 'Branch', 'Total Journals'].map(h => <th key={h} className="border p-2 font-semibold">{h}</th>)}</tr></thead>
                            <tbody>
                                {branchwiseJournals.map((item, i) => <tr key={i} className="odd:bg-white even:bg-gray-50"><td className="border p-2 text-center">{`0${i+1}.`}</td><td className="border p-2">{item.branch}</td><td className="border p-2 text-center">{item.total}</td></tr>)}
                                <tr className="font-bold bg-gray-100"><td colSpan="2" className="border p-2">Total</td><td className="border p-2 text-center">62</td></tr>
                            </tbody>
                        </table>
                    </CollapsibleSection>

                    <CollapsibleSection title="List of National Journals">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border p-2 font-semibold">Sr. No.</th>
                                        <th className="border p-2 font-semibold text-left">Branch / Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {nationalJournals.map((item, index) => {
                                        if (item.isHeader) {
                                            const journalsForDept = [];
                                            for (let i = index + 1; i < nationalJournals.length; i++) {
                                                if (nationalJournals[i].isHeader) break;
                                                journalsForDept.push(nationalJournals[i]);
                                            }

                                            return (
                                                <React.Fragment key={index}>
                                                    <tr className="bg-gray-100">
                                                        <td colSpan="2" className="border p-2 font-bold">{item.title}</td>
                                                    </tr>
                                                    {journalsForDept.map((journal, journalIndex) => (
                                                        <tr key={`${index}-${journalIndex}`} className="odd:bg-white even:bg-gray-50">
                                                            <td className="border p-2 text-center">{journalIndex + 1}</td>
                                                            <td className="border p-2">{journal.title}</td>
                                                        </tr>
                                                    ))}
                                                </React.Fragment>
                                            );
                                        }
                                        return null;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="Newspapers & Magazines Subscribed">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
                            {/* Newspapers */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Local Newspapers</h3>
                                <table className="w-full border">
                                    <thead className="bg-gray-100"><tr><th className="border p-2 w-1/4">Sr. No.</th><th className="border p-2 text-left">Name</th></tr></thead>
                                    <tbody>{newspapers.local.map((n, i) => <tr key={i} className="odd:bg-white even:bg-gray-50"><td className="border p-2 text-center">{i + 1}.</td><td className="border p-2">{n.name}</td></tr>)}</tbody>
                                </table>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Regional Newspapers</h3>
                                <table className="w-full border">
                                    <thead className="bg-gray-100"><tr><th className="border p-2 w-1/4">Sr. No.</th><th className="border p-2 text-left">Name</th></tr></thead>
                                    <tbody>{newspapers.regional.map((n, i) => <tr key={i} className="odd:bg-white even:bg-gray-50"><td className="border p-2 text-center">{i + 1}.</td><td className="border p-2">{n.name}</td></tr>)}</tbody>
                                </table>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">National Newspapers</h3>
                                <table className="w-full border">
                                    <thead className="bg-gray-100"><tr><th className="border p-2 w-1/4">Sr. No.</th><th className="border p-2 text-left">Name</th></tr></thead>
                                    <tbody>{newspapers.national.map((n, i) => <tr key={i} className="odd:bg-white even:bg-gray-50"><td className="border p-2 text-center">{i + 1}.</td><td className="border p-2">{n.name}</td></tr>)}</tbody>
                                </table>
                            </div>
                            
                            {/* Magazines */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Technical Magazines</h3>
                                <table className="w-full border">
                                    <thead className="bg-gray-100"><tr><th className="border p-2 w-1/4">Sr. No.</th><th className="border p-2 text-left">Title</th><th className="border p-2 text-left">Frequency</th></tr></thead>
                                    <tbody>{magazines.technical.map((m, i) => <tr key={i} className="odd:bg-white even:bg-gray-50"><td className="border p-2 text-center">{i + 1}.</td><td className="border p-2">{m.title}</td><td className="border p-2">{m.frequency}</td></tr>)}</tbody>
                                </table>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Non-Technical (English)</h3>
                                <table className="w-full border">
                                    <thead className="bg-gray-100"><tr><th className="border p-2 w-1/4">Sr. No.</th><th className="border p-2 text-left">Title</th><th className="border p-2 text-left">Frequency</th></tr></thead>
                                    <tbody>{magazines.nonTechnicalEnglish.map((m, i) => <tr key={i} className="odd:bg-white even:bg-gray-50"><td className="border p-2 text-center">{i + 1}.</td><td className="border p-2">{m.title}</td><td className="border p-2">{m.frequency}</td></tr>)}</tbody>
                                </table>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Non-Technical (Marathi)</h3>
                                <table className="w-full border">
                                    <thead className="bg-gray-100"><tr><th className="border p-2 w-1/4">Sr. No.</th><th className="border p-2 text-left">Title</th><th className="border p-2 text-left">Frequency</th></tr></thead>
                                    <tbody>{magazines.nonTechnicalMarathi.map((m, i) => <tr key={i} className="odd:bg-white even:bg-gray-50"><td className="border p-2 text-center">{i + 1}.</td><td className="border p-2">{m.title}</td><td className="border p-2">{m.frequency}</td></tr>)}</tbody>
                                </table>
                            </div>
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="Important Websites for E-Resources">
                        <div className="space-y-4">
                            {importantWebsites.map((link, i) => (
                                <div key={i}>
                                    <div className="flex items-start">
                                        <span className="font-semibold text-gray-800 w-8 flex-shrink-0">{i + 1}.</span>
                                        <a 
                                            href={link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-indigo-600 hover:underline inline-flex items-center break-all"
                                        >
                                            <span>{link}</span>
                                            <FaExternalLinkAlt className="ml-2 text-xs flex-shrink-0" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CollapsibleSection>
                </div>
            </div>
        </div>
    );
};

export default LibraryPage;