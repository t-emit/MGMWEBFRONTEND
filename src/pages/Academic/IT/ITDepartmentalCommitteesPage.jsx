import React from 'react';

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
  { name: "IT Consultancy", path: "/academics/information-technology/consultancy" },
  { name: "IT Departmental Committees", path: "/academics/information-technology/departmental-committees" },
];
// A placeholder component for the Department's right-hand navigation links.
// This is created to mimic the structure and class names from your HTML reference.
const DepartmentNavigation = ({ activeLink }) => {
    // List of all navigation links as per the ENTC page structure (Image 1)
    // Note: In a real application, this list should be consistent and dynamic.
    const links = [
        { id: 'plnk1', href: 'profile.html', label: 'DEPT Profile', image: '../images/btn-pro.png' },
        { id: 'plnk_vm', href: 'vision-mission.html', label: 'Vision-Mission', image: '../images/vision-btn.png' },
        { id: 'plnk2', href: 'programmes.html', label: 'Programmes', image: '../images/program-btn.png' },
        { id: 'plnk3', href: 'faculty-profile.html', label: 'Faculty Profile', image: '../images/faculty-btn.png' },
        { id: 'plnk4', href: 'laboratory.html', label: 'Laboratory', image: '../images/laborot-btn.png' },
        { id: 'plnk5', href: 'training-placement.html', label: 'Training and Placement', image: '../images/traininginternship-btn.png' },
        { id: 'plnk6', href: 'research-publication.html', label: 'Research & Publication', image: '../images/rese-btn.png' },
        { id: 'plnk8', href: 'achievement.html', label: 'Achievements', image: '../images/achive-btn.png' },
        { id: 'plnk25', href: 'departmental-activity.html', label: 'Departmental Activity', image: '../images/deparact-btn.png' },
        // NEW TAB: Departmental Committees - This is the active link
        { id: 'plnk_comm', href: 'departmental-committees.html', label: 'Departmental Committees', image: '../images/committees-btn.png' }, 
        // Note: The ITSA link is the closest match for ETA
        { id: 'plnk_eta', href: 'itsa.html', label: 'ETA', image: '../images/itsa-btn.png' },
        { id: 'plnk_curr', href: 'curriculum.html', label: 'Curriculum', image: '../images/curriculum-btn.png' },
        // NEW TAB: Consultancy
        { id: 'plnk10', href: 'consultancy.html', label: 'Consultancy', image: '../images/consultancy-btn.png' },
        // NEW TAB: Innovation in Teaching
        { id: 'plnk_inn', href: 'innovation-in-teaching.html', label: 'Innovation in Teaching', image: '../images/innovation-btn.png' },
    ];

    return (
        <div className="RightBoxCont">
            <div className="testa">
                {links.map((link) => (
                    <React.Fragment key={link.id}>
                        {/* The 'actprogramme' class is used to style the active link based on your source */}
                        <a
                            href={link.href}
                            id={link.id}
                            className={link.label === activeLink ? 'actprogramme' : ''} 
                        >
                            {/* Using a placeholder image and ignoring the MM_swapImage functions for simplicity */}
                            <img 
                                src={link.image} 
                                name={`Image${link.id}`} 
                                width="224" 
                                height="40" 
                                border="0" 
                                id={`Image${link.id}`} 
                                alt={link.label}
                            />
                        </a>
                        <p></p>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};


const ITDepartmentalCommitteesPage = () => {
    const pageTitle = "Departmental Committees";
    const departmentName = "Information Technology";
    
    return (
        // The main layout wrapper is kept from your HTML source
        <div id="main" className="homelink">
            
            {/* Inner Header/Banner */}
            <div className="innerHeaderBack">
                <div className="imgforinner">
                    <img src='../images/img-inn1.jpg' width="720" height="120" alt=" " />
                </div>
                <div className="headerBan">
                    {departmentName}
                </div>
            </div>
            
            <div className="innback">
                <div className="InnerContent shadowbackinn">
                    
                    {/* Left Content Area for Departmental Committees Data */}
                    <div className="LeftContent">
                        <h2>{pageTitle}</h2>
                        
                        <div style={{ textAlign: 'justify' }} className="pagedata">
                            <p>
                                <span style={{ color: '#800080', fontSize: '16px', fontWeight: 'bold' }}>
                                    DEPARTMENTAL COMMITTEES AND RESPONSIBILITIES
                                </span>
                            </p>
                            
                            {/* Placeholder for the actual committee list */}
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }} className="ListTable1">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%', border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>Sr. No.</th>
                                        <th style={{ width: '40%', border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Committee Name</th>
                                        <th style={{ width: '50%', border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Convenor / Chairman</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>1</td>
                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>Departmental Academic Committee (DAC)</td>
                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>Dr. [Faculty Name]</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>2</td>
                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>Departmental Time Table Committee</td>
                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>Prof. [Faculty Name]</td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>3</td>
                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>Student Welfare / Mentoring Committee</td>
                                        <td style={{ border: '1px solid #ddd', padding: '10px' }}>Prof. [Faculty Name]</td>
                                    </tr>
                                    {/* Add all other committees here */}
                                    <tr>
                                        <td colSpan="3" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center', fontStyle: 'italic' }}>
                                            (Include links to committee composition and minutes of meetings as needed)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            {/* Link to a document detailing the roles (optional) */}
                            <p style={{ marginTop: '20px' }}>
                                <a href="/pdf/IT_Department_Committees_Roles.pdf" target="_blank">
                                    Click here for Committee Roles and Responsibilities (PDF)
                                </a>
                            </p>
                        </div>
                        
                        <div className="clr"></div>
                    </div>

                    {/* Right Content Area (Navigation Bar) */}
                    <DepartmentNavigation activeLink={pageTitle} />
                    
                    <div className="clr"></div>
                </div>
            </div>
            
            {/* The rest of your page layout (footer, etc.) would follow here */}
            
        </div>
    );
};

export default ITDepartmentalCommitteesPage;