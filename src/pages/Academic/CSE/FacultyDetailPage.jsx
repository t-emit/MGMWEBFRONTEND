// src/pages/academics/computer-science-engineering/FacultyDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AccordionItem from '../../../components/AccordionItem';
import axios from 'axios';

const FacultyDetailPage = () => {
    const { facultyId } = useParams();
    const [facultyDetails, setFacultyDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const currentDeptPath = "/academics/computer-science-engineering";

    useEffect(() => {
        const fetchFacultyDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/faculty/${facultyId}`);
                setFacultyDetails(res.data);
            } catch (err) {
                console.error("Error fetching faculty details:", err);
                setError('Faculty member not found or server error.');
            } finally {
                setLoading(false);
            }
        };
        fetchFacultyDetails();
    }, [facultyId]);

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    // Check if section has data to display
    const hasSectionData = (section) => {
        if (!section) return false;
        
        if (Array.isArray(section)) {
            return section.length > 0;
        }
        
        if (typeof section === 'object') {
            return Object.keys(section).some(key => {
                const value = section[key];
                if (Array.isArray(value)) return value.length > 0;
                if (typeof value === 'string') return value.trim() !== '';
                return value !== null && value !== undefined;
            });
        }
        
        return section !== null && section !== undefined && section !== '';
    };

    if (loading) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg font-medium">Loading faculty profile...</p>
            </div>
        </div>
    );
    
    if (error) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h2>
                <p className="text-gray-600 mb-6">{error}</p>
                <Link 
                    to={`${currentDeptPath}/faculty`}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                    Return to Faculty Directory
                </Link>
            </div>
        </div>
    );
    
    if (!facultyDetails) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Unavailable</h2>
                <p className="text-gray-600 mb-6">The requested faculty profile is currently unavailable.</p>
                <Link 
                    to={`${currentDeptPath}/faculty`}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                    Return to Faculty Directory
                </Link>
            </div>
        </div>
    );

    const { detailedProfile } = facultyDetails;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Spacer */}
            <div className="pt-20"></div>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <div className="flex-1">
                            <nav className="flex items-center space-x-2 text-sm text-blue-200 mb-4 flex-wrap">
                                <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
                                <span className="text-blue-300">/</span>
                                <Link to="/academics" className="hover:text-white transition-colors duration-200">Academics</Link>
                                <span className="text-blue-300">/</span>
                                <Link to={currentDeptPath} className="hover:text-white transition-colors duration-200">Computer Science & Engineering</Link>
                                <span className="text-blue-300">/</span>
                                <Link to={`${currentDeptPath}/faculty`} className="hover:text-white transition-colors duration-200">Faculty</Link>
                                <span className="text-blue-300">/</span>
                                <span className="text-white truncate">{facultyDetails.name}</span>
                            </nav>
                            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">{facultyDetails.name}</h1>
                            <p className="text-xl text-blue-100 mb-1">{facultyDetails.designation}</p>
                            <p className="text-blue-200">{facultyDetails.specialization}</p>
                        </div>
                        <div className="mt-6 lg:mt-0 lg:ml-8">
                            <Link 
                                to={`${currentDeptPath}/faculty`}
                                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all duration-200 border border-white/20 font-medium"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Faculty
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col xl:flex-row gap-8">
                    {/* Faculty Profile Card */}
                    <div className="xl:w-1/3 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden sticky top-32">
                            {/* Faculty Image - Improved sizing */}
                            <div className="relative w-full aspect-[4/5] bg-gray-100">
                                {facultyDetails.profileImageUrl ? (
                                    <img
                                        src={facultyDetails.profileImageUrl}
                                        alt={facultyDetails.name}
                                        className="absolute inset-0 w-full h-full object-cover object-top"
                                        onError={(e) => { 
                                            e.target.onerror = null; 
                                            e.target.src = '/images/placeholder-faculty.jpg'; 
                                        }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                        <span className="text-6xl text-gray-400 font-bold">{facultyDetails.name?.charAt(0)}</span>
                                    </div>
                                )}
                            </div>
                            
                            {/* Contact Information */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">Contact Information</h3>
                                
                                <div className="space-y-4">
                                    {facultyDetails.email && facultyDetails.email !== 'NA' && (
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-5 h-5 text-indigo-600 mt-0.5">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                                                <a 
                                                    href={`mailto:${facultyDetails.email}`}
                                                    className="text-indigo-600 hover:text-indigo-800 text-sm break-all transition-colors duration-200"
                                                >
                                                    {facultyDetails.email}
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {facultyDetails.phone && facultyDetails.phone !== 'NA' && (
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-5 h-5 text-indigo-600 mt-0.5">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                                                <p className="text-gray-700 text-sm">{facultyDetails.phone}</p>
                                            </div>
                                        </div>
                                    )}

                                    {facultyDetails.mobile && facultyDetails.mobile !== 'NA' && (
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-5 h-5 text-indigo-600 mt-0.5">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-500 mb-1">Mobile</p>
                                                <p className="text-gray-700 text-sm">{facultyDetails.mobile}</p>
                                            </div>
                                        </div>
                                    )}

                                    {facultyDetails.address && facultyDetails.address !== 'NA' && (
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-5 h-5 text-indigo-600 mt-0.5">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-500 mb-1">Address</p>
                                                <p className="text-gray-700 text-sm leading-relaxed">{facultyDetails.address}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Information */}
                    <div className="xl:w-2/3">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="p-6 lg:p-8">
                                {detailedProfile && (
                                    <div className="space-y-8">
                                        {/* Academic Qualification - Always show if data exists */}
                                        {hasSectionData(detailedProfile.academicQualification) && (
                                            <AccordionItem 
                                                title="Academic Qualification" 
                                                id="academic-qualification"
                                                // Removed defaultOpen={true}
                                                isOpen={activeAccordion === 'academic-qualification'}
                                                onToggle={() => toggleAccordion('academic-qualification')}
                                            >
                                                {/* CHANGE 2: Added max-h and overflow-y-auto for scrolling */}
                                                <div className="max-h-[500px] overflow-y-auto p-4">
                                                    <div className="overflow-x-auto">
                                                        <table className="min-w-full divide-y divide-gray-200">
                                                            <thead className="bg-gray-50">
                                                                <tr>
                                                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Degree</th>
                                                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Institute</th>
                                                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Year</th>
                                                                    {detailedProfile.academicQualification[0]?.grade && (
                                                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Grade</th>
                                                                    )}
                                                                    {detailedProfile.academicQualification[0]?.specialization && (
                                                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Specialization</th>
                                                                    )}
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white divide-y divide-gray-200">
                                                                {detailedProfile.academicQualification.map((item, index) => (
                                                                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                            {item.degree}
                                                                        </td>
                                                                        <td className="px-4 py-4 text-sm text-gray-700 max-w-xs">
                                                                            {item.institute}
                                                                        </td>
                                                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                                                                            {item.year}
                                                                        </td>
                                                                        {item.grade && (
                                                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                                                                                {item.grade}
                                                                            </td>
                                                                        )}
                                                                        {item.specialization && (
                                                                            <td className="px-4 py-4 text-sm text-gray-700">
                                                                                {item.specialization}
                                                                            </td>
                                                                        )}
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </AccordionItem>
                                        )}

                                        {/* Experience - Only show if data exists */}
                                        {hasSectionData(detailedProfile.experience) && (
                                            <AccordionItem 
                                                title="Professional Experience" 
                                                id="experience"
                                                isOpen={activeAccordion === 'experience'}
                                                onToggle={() => toggleAccordion('experience')}
                                            >
                                                {/* CHANGE 3: Added max-h and overflow-y-auto for scrolling */}
                                                <div className="max-h-[500px] overflow-y-auto p-4">
                                                    <div className="overflow-x-auto">
                                                        <table className="min-w-full divide-y divide-gray-200">
                                                            <thead className="bg-gray-50">
                                                                <tr>
                                                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Designation</th>
                                                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Organization</th>
                                                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Period</th>
                                                                    {detailedProfile.experience[0]?.totalExperience && (
                                                                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Duration</th>
                                                                    )}
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white divide-y divide-gray-200">
                                                                {detailedProfile.experience.map((item, index) => (
                                                                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                            {item.designation || item.postHeld}
                                                                        </td>
                                                                        <td className="px-4 py-4 text-sm text-gray-700 max-w-xs">
                                                                            {item.organization || item.employer}
                                                                        </td>
                                                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                                                                            {item.from || item.periodOfService?.split(' to ')[0]} – {' '}
                                                                            {item.to || item.periodOfService?.split(' to ')[1] || 'Present'}
                                                                        </td>
                                                                        {item.totalExperience && (
                                                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                                                                                {item.totalExperience}
                                                                            </td>
                                                                        )}
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </AccordionItem>
                                        )}

                                        {/* Research & Publications - Only show if data exists */}
                                        {hasSectionData(detailedProfile.researchPublications) && (
                                            <AccordionItem 
                                                title="Research & Publications" 
                                                id="research-publications"
                                                isOpen={activeAccordion === 'research-publications'}
                                                onToggle={() => toggleAccordion('research-publications')}
                                            >
                                                {/* CHANGE 4: Added max-h and overflow-y-auto for scrolling */}
                                                <div className="max-h-[500px] overflow-y-auto p-4">
                                                    <div className="space-y-8">
                                                        {/* Summary Section - Only if exists */}
                                                        {hasSectionData(detailedProfile.researchPublications.summary) && (
                                                            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                                                                <h4 className="text-lg font-semibold text-blue-900 mb-4">Research Summary</h4>
                                                                <ul className="space-y-3">
                                                                    {detailedProfile.researchPublications.summary.map((item, index) => (
                                                                        <li key={index} className="text-blue-800 flex items-start">
                                                                            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                                                                            <span className="flex-1">{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {/* International Journals - Only if exists */}
                                                        {hasSectionData(detailedProfile.researchPublications.internationalJournals) && (
                                                            <div>
                                                                <h4 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                                                    International Journal Publications
                                                                </h4>
                                                                <div className="space-y-6">
                                                                    {detailedProfile.researchPublications.internationalJournals.map((item, index) => (
                                                                        <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                                                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                                                                                    Publication #{item.srNo}
                                                                                </span>
                                                                                <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded border border-gray-200">
                                                                                    {item.year}
                                                                                </span>
                                                                            </div>
                                                                            <h5 className="text-lg font-medium text-gray-900 mb-3 leading-relaxed" 
                                                                                dangerouslySetInnerHTML={{ __html: item.title }}>
                                                                            </h5>
                                                                            <div className="space-y-2 text-sm">
                                                                                <p className="text-gray-700">
                                                                                    <strong className="font-semibold text-gray-900">Authors:</strong> {item.authors}
                                                                                </p>
                                                                                <p className="text-gray-700">
                                                                                    <strong className="font-semibold text-gray-900">Journal:</strong> {item.journalName}
                                                                                    {item.volumeNo && `, Volume ${item.volumeNo}`}
                                                                                    {item.issueNo && `, Issue ${item.issueNo}`}
                                                                                    {item.pageNumbers && `, Pages ${item.pageNumbers}`}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* International Conferences - Only if exists */}
                                                        {hasSectionData(detailedProfile.researchPublications.internationalConferences) && (
                                                            <div>
                                                                <h4 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                                                    International Conference Publications
                                                                </h4>
                                                                <div className="space-y-6">
                                                                    {detailedProfile.researchPublications.internationalConferences.map((item, index) => (
                                                                        <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                                                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                                                                    Conference #{item.srNo}
                                                                                </span>
                                                                                <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded border border-gray-200">
                                                                                    {item.duration}
                                                                                </span>
                                                                            </div>
                                                                            <h5 className="text-lg font-medium text-gray-900 mb-3 leading-relaxed"
                                                                                dangerouslySetInnerHTML={{ __html: item.title }}>
                                                                            </h5>
                                                                            <div className="space-y-2 text-sm">
                                                                                <p className="text-gray-700">
                                                                                    <strong className="font-semibold text-gray-900">Authors:</strong> {item.authors}
                                                                                </p>
                                                                                <p className="text-gray-700">
                                                                                    <strong className="font-semibold text-gray-900">Conference:</strong> {item.conferenceName}
                                                                                </p>
                                                                                <p className="text-gray-700">
                                                                                    <strong className="font-semibold text-gray-900">Location:</strong> {item.heldAt}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* National Conferences - Only if exists */}
                                                        {hasSectionData(detailedProfile.researchPublications.nationalConferences) && (
                                                            <div>
                                                                <h4 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                                                    National Conference Publications
                                                                </h4>
                                                                <div className="space-y-6">
                                                                    {detailedProfile.researchPublications.nationalConferences.map((item, index) => (
                                                                        <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                                                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                                                                                    Conference #{item.srNo}
                                                                                </span>
                                                                                <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded border border-gray-200">
                                                                                    {item.duration}
                                                                                </span>
                                                                            </div>
                                                                            <h5 className="text-lg font-medium text-gray-900 mb-3 leading-relaxed"
                                                                                dangerouslySetInnerHTML={{ __html: item.title }}>
                                                                            </h5>
                                                                            <div className="space-y-2 text-sm">
                                                                                <p className="text-gray-700">
                                                                                    <strong className="font-semibold text-gray-900">Authors:</strong> {item.authors}
                                                                                </p>
                                                                                <p className="text-gray-700">
                                                                                    <strong className="font-semibold text-gray-900">Conference:</strong> {item.conferenceName}
                                                                                </p>
                                                                                <p className="text-gray-700">
                                                                                    <strong className="font-semibold text-gray-900">Location:</strong> {item.heldAt}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Awards & Honors - Only if exists */}
                                                        {hasSectionData(detailedProfile.researchPublications.awardsHonors) && (
                                                            <div>
                                                                <h4 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                                                    Awards & Honors
                                                                </h4>
                                                                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                                                                    <ul className="space-y-4">
                                                                        {detailedProfile.researchPublications.awardsHonors.map((item, index) => (
                                                                            <li key={index} className="text-yellow-800 flex items-start">
                                                                                <div className="flex-shrink-0 w-5 h-5 text-yellow-600 mr-3 mt-0.5">
                                                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                                    </svg>
                                                                                </div>
                                                                                <span className="flex-1 text-lg">{item}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Funded Research Projects - Only if exists */}
                                                        {hasSectionData(detailedProfile.researchPublications.fundedResearchProjects) && (
                                                            <div>
                                                                <h4 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                                                    Funded Research Projects
                                                                </h4>
                                                                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                                                                    <ul className="space-y-4">
                                                                        {detailedProfile.researchPublications.fundedResearchProjects.map((item, index) => (
                                                                            <li key={index} className="text-green-800 flex items-start">
                                                                                <div className="flex-shrink-0 w-5 h-5 text-green-600 mr-3 mt-0.5">
                                                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                                                    </svg>
                                                                                </div>
                                                                                <span className="flex-1 text-lg">{item}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </AccordionItem>
                                        )}

                                        {/* Outreach Activities - Only show if data exists */}
                                        {hasSectionData(detailedProfile.outreachActivities) && (
                                            <AccordionItem 
                                                title="Outreach Activities" 
                                                id="outreach-activities"
                                                isOpen={activeAccordion === 'outreach-activities'}
                                                onToggle={() => toggleAccordion('outreach-activities')}
                                            >
                                                {/* CHANGE 5: Added max-h and overflow-y-auto for scrolling */}
                                                <div className="max-h-[500px] overflow-y-auto p-4">
                                                    <div className="space-y-8">
                                                        {hasSectionData(detailedProfile.outreachActivities.seminarsConferences?.attended) && (
                                                            <div>
                                                                <h4 className="text-xl font-semibold text-gray-900 mb-6">Seminars & Conferences Attended</h4>
                                                                <div className="space-y-4">
                                                                    {detailedProfile.outreachActivities.seminarsConferences.attended.map((item, index) => (
                                                                        <div key={index} className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg hover:bg-green-100 transition-colors duration-200">
                                                                            <h5 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h5>
                                                                            <p className="text-gray-700 mb-2">{item.organizerPlace}</p>
                                                                            <p className="text-sm text-gray-500">{item.period}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {hasSectionData(detailedProfile.outreachActivities.seminarsConferences?.organized) && (
                                                            <div>
                                                                <h4 className="text-xl font-semibold text-gray-900 mb-6">Workshops & Conferences Organized</h4>
                                                                <div className="space-y-4">
                                                                    {detailedProfile.outreachActivities.seminarsConferences.organized.map((item, index) => (
                                                                        <div key={index} className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                                                                            <h5 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h5>
                                                                            <p className="text-gray-700 mb-2">{item.place}</p>
                                                                            <p className="text-sm text-gray-500">{item.period}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </AccordionItem>
                                        )}

                                        {/* Academic Environment - Only show if data exists */}
                                        {hasSectionData(detailedProfile.academicEnvironment) && (
                                            <AccordionItem 
                                                title="Academic Activities" 
                                                id="academic-environment"
                                                isOpen={activeAccordion === 'academic-environment'}
                                                onToggle={() => toggleAccordion('academic-environment')}
                                            >
                                                {/* CHANGE 6: Added max-h and overflow-y-auto for scrolling */}
                                                <div className="max-h-[500px] overflow-y-auto p-4">
                                                    <div className="space-y-8">
                                                        {/* Research Scholars - Only if exists */}
                                                        {hasSectionData(detailedProfile.academicEnvironment.researchScholarsPhD?.list) && (
                                                            <div>
                                                                <h4 className="text-xl font-semibold text-gray-900 mb-6">Research Scholars Supervised</h4>
                                                                <div className="grid gap-4 md:grid-cols-2">
                                                                    {detailedProfile.academicEnvironment.researchScholarsPhD.list.map((item, index) => (
                                                                        <div key={index} className="bg-purple-50 rounded-lg p-6 border border-purple-200 hover:border-purple-300 transition-colors duration-200">
                                                                            <h5 className="text-lg font-semibold text-purple-900 mb-2">{item.name}</h5>
                                                                            <p className="text-purple-700 mb-3">{item.titleArea}</p>
                                                                            <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-purple-600">
                                                                                <span className="font-medium">{item.registeredWith}</span>
                                                                                <span>{item.year}</span>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Laboratory Development - Only if exists */}
                                                        {hasSectionData(detailedProfile.academicEnvironment.laboratoryDevelopment) && (
                                                            <div>
                                                                <h4 className="text-xl font-semibold text-gray-900 mb-6">Laboratory Development</h4>
                                                                <ul className="grid gap-3">
                                                                    {detailedProfile.academicEnvironment.laboratoryDevelopment.map((item, index) => (
                                                                        <li key={index} className="text-gray-700 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                                                                            {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {/* ME/MTech Dissertations - Only if exists */}
                                                        {hasSectionData(detailedProfile.academicEnvironment.meMtechDissertations) && (
                                                            <div>
                                                                <h4 className="text-xl font-semibold text-gray-900 mb-6">ME/MTech Dissertations Supervised</h4>
                                                                <div className="space-y-4">
                                                                    {detailedProfile.academicEnvironment.meMtechDissertations.map((item, index) => (
                                                                        <div key={index} className="bg-orange-50 rounded-lg p-6 border border-orange-200 hover:border-orange-300 transition-colors duration-200">
                                                                            <h5 className="text-lg font-semibold text-orange-900 mb-2">{item.name}</h5>
                                                                            <p className="text-orange-800 mb-3" dangerouslySetInnerHTML={{ __html: item.topic }}></p>
                                                                            <p className="text-sm text-orange-600 font-medium">Year: {item.year}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </AccordionItem>
                                        )}
                                    </div>
                                )}

                                {/* Bottom Navigation */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <Link 
                                        to={`${currentDeptPath}/faculty`}
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Back to Faculty List
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyDetailPage;