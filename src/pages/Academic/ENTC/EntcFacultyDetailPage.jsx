// src/pages/Academic/Entc/EntcFacultyDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaEnvelope, FaTag, FaFlask, FaUniversity, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

// Import all faculty data for lookup
import { allEntcFacultyData } from './entcConstants'; // Adjust path as needed

// --- Reusable CollapsibleSection Component for this page ---
const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="border-t border-gray-200 pt-4">
            <button
                className="w-full flex justify-between items-center text-left py-3 px-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ease-in-out"
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg md:text-xl font-bold text-indigo-800">
                    {title}
                </h3>
                {isOpen ? (
                    <FaChevronUp className="text-indigo-600 text-sm transition-transform duration-300" />
                ) : (
                    <FaChevronDown className="text-indigo-600 text-sm transition-transform duration-300" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[10000px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                }`}
            >
                <div className="p-4 bg-white rounded-b-lg shadow-inner space-y-4">
                    {children}
                </div>
            </div>
        </section>
    );
};


const EntcFacultyDetailPage = () => {
    const { facultyId } = useParams();
    const [facultyDetails, setFacultyDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const currentDeptPath = "/academics/electronincs-telecommunication-engineering";

    useEffect(() => {
        setLoading(true);
        setError(null);
        const foundFaculty = allEntcFacultyData.find(f => f.id === facultyId);

        if (foundFaculty) {
            setFacultyDetails(foundFaculty);
        } else {
            setError('Faculty member not found.');
        }
        setLoading(false);
    }, [facultyId]);

    if (loading) return <div className="text-center py-8 mt-28 text-gray-700 print:mt-4">Loading faculty profile...</div>;
    if (error) return <div className="text-red-600 text-center py-8 mt-28 print:mt-4">{error}</div>;
    if (!facultyDetails) return <div className="text-center py-8 mt-28 text-gray-700 print:mt-4">Faculty profile not found.</div>;

    const { details } = facultyDetails;

    return (
        <div className="container mx-auto px-4 py-6 mt-24 max-w-6xl print:mt-4 print:max-w-none">
            {/* Compact Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-6 text-white mb-8 shadow-xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2 relative z-10 print:text-2xl">{facultyDetails.name}</h1>
                        <p className="text-lg opacity-90 relative z-10 print:text-base">{facultyDetails.designation}</p>
                        {facultyDetails.specialization && facultyDetails.specialization !== '-' && facultyDetails.specialization !== 'N/A' && (
                            <p className="text-blue-200 mt-1 relative z-10 print:text-sm">{facultyDetails.specialization}</p>
                        )}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 print:hidden">
                        <Link to={`${currentDeptPath}/faculty`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                            &larr; Back to Faculty List
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
            </div>

            {/* Main Content Area - Compact Layout */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
                {/* Faculty Header with Image and Key Info */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    {/* Faculty Image - Smaller and better positioned */}
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                        <img
                            src={facultyDetails.img}
                            alt={facultyDetails.name}
                            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md border border-gray-200 print:shadow-none print:border-none print:rounded-none"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }}
                        />
                    </div>
                    
                    {/* Key Information - Compact and organized */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Contact Information */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center border-b pb-2">
                                    <FaUniversity className="mr-2 text-indigo-500 text-sm" />
                                    Contact Information
                                </h3>
                                {facultyDetails.email && facultyDetails.email !== 'N/A' && facultyDetails.email !== '' && (
                                    <div className="flex items-start">
                                        <FaEnvelope className="mt-1 mr-3 text-indigo-500 text-sm flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Email</p>
                                            <a href={`mailto:${facultyDetails.email}`} className="text-indigo-600 hover:underline text-base font-medium">
                                                {facultyDetails.email}
                                            </a>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Add more contact info here if available */}
                                {/* {facultyDetails.phone && (
                                    <div className="flex items-start">
                                        <FaPhone className="mt-1 mr-3 text-indigo-500 text-sm flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Phone</p>
                                            <p className="text-gray-800 text-base">{facultyDetails.phone}</p>
                                        </div>
                                    </div>
                                )} */}
                            </div>

                            {/* Professional Summary */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center border-b pb-2">
                                    <FaBriefcase className="mr-2 text-indigo-500 text-sm" />
                                    Professional Details
                                </h3>
                                <div className="flex items-start">
                                    <FaTag className="mt-1 mr-3 text-indigo-500 text-sm flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Designation</p>
                                        <p className="text-gray-800 text-base">{facultyDetails.designation}</p>
                                    </div>
                                </div>
                                {facultyDetails.specialization && facultyDetails.specialization !== '-' && facultyDetails.specialization !== 'N/A' && (
                                    <div className="flex items-start">
                                        <FaFlask className="mt-1 mr-3 text-indigo-500 text-sm flex-shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-600">Specialization</p>
                                            <p className="text-gray-800 text-base">{facultyDetails.specialization}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Quick Stats Bar - if you have additional stats */}
                        {/* <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="bg-blue-50 rounded-lg p-3">
                                <p className="text-2xl font-bold text-blue-700">5+</p>
                                <p className="text-xs text-gray-600">Years Exp</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-3">
                                <p className="text-2xl font-bold text-green-700">10+</p>
                                <p className="text-xs text-gray-600">Publications</p>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-3">
                                <p className="text-2xl font-bold text-purple-700">3</p>
                                <p className="text-xs text-gray-600">Projects</p>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-3">
                                <p className="text-2xl font-bold text-orange-700">15+</p>
                                <p className="text-xs text-gray-600">Students</p>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Print-only back button */}
                <div className="hidden print:block mb-4">
                    <Link to={`${currentDeptPath}/faculty`} className="text-sm text-gray-600">
                        &larr; Back to Faculty List
                    </Link>
                </div>

                {/* --- START OF COLLAPSIBLE DETAILED SECTIONS --- */}
                <div className="space-y-6 mt-8">
                    {/* Academic Qualification */}
                    {details && details.academicQualifications && details.academicQualifications.length > 0 && (
                        <CollapsibleSection title="Academic Qualification" defaultOpen={true}>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Degree</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">University / Institution</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Year</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Specialization</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {details.academicQualifications.map((item, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-3 py-2 whitespace-nowrap text-gray-800 font-medium">{item.degree}</td>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800">{item.university}</td>
                                                <td className="px-3 py-2 whitespace-nowrap text-gray-800 text-center">{item.year}</td>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800">{item.specialization}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CollapsibleSection>
                    )}

                    {/* Experience */}
                    {details && details.experience && details.experience.length > 0 && (
                        <CollapsibleSection title="Experience">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Employer</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Position</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Period</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {details.experience.map((item, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800">{item.employer}</td>
                                                <td className="px-3 py-2 whitespace-nowrap text-gray-800 font-medium">{item.postHeld}</td>
                                                <td className="px-3 py-2 whitespace-nowrap text-gray-800 text-center">{item.period}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CollapsibleSection>
                    )}

                    {/* Papers in International Refereed Journals */}
                    {details && details.internationalJournals && details.internationalJournals.length > 0 && (
                        <CollapsibleSection title="Papers in International Refereed Journals">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Journal</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Year</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Pages</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {details.internationalJournals.map((item, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800">
                                                    <div className="font-medium">{item.title}</div>
                                                    <div className="text-xs text-gray-600 mt-1">{item.authors}</div>
                                                </td>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800 text-sm">{item.journalName}</td>
                                                <td className="px-3 py-2 whitespace-nowrap text-gray-800 text-center">{item.year}</td>
                                                <td className="px-3 py-2 whitespace-nowrap text-gray-800 text-center">{item.pageRange}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CollapsibleSection>
                    )}

                    {/* Papers in International Conferences */}
                    {details && details.internationalConferences && details.internationalConferences.length > 0 && (
                        <CollapsibleSection title="Papers in International Conferences">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Conference</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {details.internationalConferences.map((item, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800">
                                                    <div className="font-medium">{item.title}</div>
                                                    <div className="text-xs text-gray-600 mt-1">{item.authors}</div>
                                                </td>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800 text-sm">{item.conferenceName}</td>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800">{item.heldAt}</td>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800 text-center">{item.duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CollapsibleSection>
                    )}

                    {/* M.E. Guidance */}
                    {details && details.meGuidance && details.meGuidance.length > 0 && (
                        <CollapsibleSection title="M.E. Guidance">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Thesis Title</th>
                                            <th scope="col" className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Year</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {details.meGuidance.map((item, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800 font-medium">{item.name}</td>
                                                <td className="px-3 py-2 whitespace-normal text-gray-800">{item.title}</td>
                                                <td className="px-3 py-2 whitespace-nowrap text-gray-800 text-center">{item.year}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CollapsibleSection>
                    )}
                </div>
                {/* --- END OF COLLAPSIBLE DETAILED SECTIONS --- */}
            </div>
        </div>
    );
};

export default EntcFacultyDetailPage;