import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Placeholder for sub-navigation tabs, based on the original file structure
const civilDepartmentTabs = [
    { name: "DEPT Profile", path: "/academics/civil-engineering" },
    { name: "Vision-Mission", path: "/academics/civil-engineering/vision-mission" },
    { name: "Programmes", path: "/academics/civil-engineering/programmes" },
    { name: "Faculty Profile", path: "/academics/civil-engineering/faculty" },
    { name: "Laboratory", path: "/academics/civil-engineering/labs" },
    { name: "Training and Placement", path: "/academics/civil-engineering/training-placement" },
    { name: "Research & Publication", path: "/academics/civil-engineering/research-publication" },
    { name: "Achievements", path: "/academics/civil-engineering/achievements" },
    { name: "Departmental Activity", path: "/academics/civil-engineering/activities" },
];

/**
 * CivilVisionMissionPage
 * Displays the Vision, Mission, PEOs, PSOs, and POs for the Civil Engineering Department.
 * Uses the blue/indigo theme for a clean, professional look, matching the CSE page style.
 * Updated to consistently use the 'Inter' font throughout, aligning with other department pages.
 */
const CivilVisionMissionPage = () => {
    const location = useLocation();

    // Reusable utility function to create icons for cards (based on CSE component)
    const CardIcon = ({ svgPath, colorClass, title }) => (
        <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-opacity-30 mb-3 print:hidden" 
                 style={{ backgroundColor: `${colorClass.replace('text-', '')}20`, color: colorClass }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={svgPath}></path>
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 print:text-xl">{title}</h3>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
            
            {/* Hero Section - Themed to Blue/Indigo (CSE Theme) */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
                    {/* Custom SVG for Civil Engineering theme (e.g., a building structure) - UPDATED FOR BETTER REPRESENTATION */}
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 10h-4V3H8v7H4v2h4v8h2v-8h4v-2zm-6 0v2H4v-2h4zM20 12h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2zM17 20h2v-2h-2v2zM17 4h2v2h-2V4zM7 20h2v-2H7v2zM7 4h2v2H7V4z"/>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Civil Engineering: Vision & Mission</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
                    Our guiding principles and objectives for the Civil Engineering Department.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
            </div>

            {/* Department Sub-Navigation Tabs - Themed to Blue/Indigo */}
            <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden`}>
                <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2">
                    {civilDepartmentTabs.map((tab) => {
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

            {/* Main Content Area - Card Layout */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-yellow-200 print:shadow-none print:border-none print:rounded-none"> {/* Subtle gold-ish border */}
                <h2 className="text-3xl font-bold mb-8 text-indigo-900 border-b-2 border-indigo-200 pb-4 flex items-center print:text-2xl"> {/* Stronger indigo for "gold" importance */}
                    <svg className="w-8 h-8 mr-3 text-indigo-600 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Departmental Guiding Statements
                </h2>

                {/* Vision and Mission Section Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 print:grid-cols-2 print:gap-4 print:mb-6">
                    
                    {/* Vision Section */}
                    <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:p-4">
                        <CardIcon 
                            title="Department Vision" 
                            colorClass="text-blue-700"
                            // Eye icon SVG
                            svgPath="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                        <p className="text-gray-700 text-center leading-relaxed print:text-sm">
                            To be one of the leading Departments for Civil Engineering education developing proficient Civil Engineers with global acceptance in the service of mankind.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:p-4">
                        <CardIcon 
                            title="Department Mission" 
                            colorClass="text-indigo-700"
                            // Lightning/Target icon SVG
                            svgPath="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
                            <li className="pl-2">
                                M1: Providing quality civil engineering education to address infrastructural and environmental challenges, with a focus on sustainable development.
                            </li>
                            <li className="pl-2">
                                M2: Training individuals to become competent planners, designers, and constructors of the future built environment.
                            </li>
                            <li className="pl-2">
                                M3: Offering a learning environment that promotes lifelong learning, research, and innovation for civil engineering solutions benefiting society and industry.
                            </li>
                            <li className="pl-2">
                                M4: Cultivating professional and entrepreneurial skills, stakeholder collaborations, and independent thinking to address civil engineering challenges while protecting human values.
                            </li>
                        </ol>
                    </div>
                </div>

                {/* Program Educational Objectives (PEOs) Section */}
                <div className="mb-10 p-6 bg-purple-50 rounded-xl border border-purple-100 shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:p-4 print:mb-6">
                    <CardIcon 
                        title="Program Educational Objectives (PEOs)" 
                        colorClass="text-purple-700"
                        // Document/Checklist icon SVG
                        svgPath="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                    <p className="text-gray-700 text-center font-semibold mb-4 print:text-sm">
                        Graduates of the program will be able to:
                    </p>
                    <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
                        <li className="pl-2">
                            PEO1: Be involved in surveying, planning, analyzing, designing, and constructing infrastructure projects.
                        </li>
                        <li className="pl-2">
                            PEO2: Address societal needs through a sustainable approach in civil engineering.
                        </li>
                        <li className="pl-2">
                            PEO3: Shape the built environment by delivering responsibilities effectively within a diverse team.
                        </li>
                        <li className="pl-2">
                            PEO4: Engage in lifelong learning, participate in research and innovation and adapt to the demands of the civil engineering profession.
                        </li>
                    </ol>
                </div>

                {/* Program Specific Outcomes (PSOs) Section */}
                <div className="mb-10 p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:p-4 print:mb-6">
                    <CardIcon 
                        title="Program Specific Outcomes (PSOs)" 
                        colorClass="text-blue-700"
                        // Checkmark/Completed icon SVG
                        svgPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <p className="text-gray-700 text-center font-semibold mb-4 print:text-sm">
                        Graduate will be able to:
                    </p>
                    <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
                        <li className="pl-2">
                            PSO1: Conduct surveys and develop plans for infrastructure Projects.
                        </li>
                        <li className="pl-2">
                            PSO2: Analyze and Design Civil Engineering Structures.
                        </li>
                        <li className="pl-2">
                            PSO3: Test and evaluate civil engineering materials and products.
                        </li>
                    </ol>
                </div>

                {/* Program Outcomes (POs) Section - Retained the comprehensive list structure */}
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:p-4">
                    <CardIcon 
                        title="Program Outcomes (POs)" 
                        colorClass="text-gray-700"
                        // Thinking/Mind icon SVG
                        svgPath="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                    <ol className="list-decimal list-inside text-gray-700 space-y-4 pl-4 print:text-sm print:space-y-2">
                        {[
                            "PO1. Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
                            "PO2. Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
                            "PO3. Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
                            "PO4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
                            "PO5. Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
                            "PO6. The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
                            "PO7. Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
                            "PO8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
                            "PO9. Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
                            "PO10. Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
                            "PO11. Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
                            "PO12. Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
                        ].map((item, index) => (
                            <li key={index} className="pl-2 pb-2 border-b border-gray-200 last:border-b-0 print:border-b print:pb-1">
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default CivilVisionMissionPage;