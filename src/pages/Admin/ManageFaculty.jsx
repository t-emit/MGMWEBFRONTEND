import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function ManageFaculty() {
    const { token } = useAuth();
    const [faculty, setFaculty] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    
    // UI State
    const [activeTab, setActiveTab] = useState('basic');
    const [editingId, setEditingId] = useState(null);

    // Form State - Basic
    const [basicInfo, setBasicInfo] = useState({
        name: '', title: '', department: '', designation: '', 
        specialization: '', email: '', phone: '', mobile: '', address: ''
    });
    const [photoFile, setPhotoFile] = useState(null);

    // Form State - Detailed
    const [academicQualification, setAcademicQualification] = useState([]);
    const [experience, setExperience] = useState([]);
    const [researchPublications, setResearchPublications] = useState({
        phdThesisTitle: '', summary: '', awardsHonors: '', fundedResearchProjects: ''
    }); // Using strings for comma-separated or newline-separated arrays for simpler UX

    const fetchFaculty = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/faculty`);
            setFaculty(res.data);
        } catch (err) {
            setError('Failed to fetch faculty.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchFaculty();
    }, []);

    const resetForm = () => {
        setEditingId(null);
        setBasicInfo({
            name: '', title: '', department: '', designation: '', 
            specialization: '', email: '', phone: '', mobile: '', address: ''
        });
        setPhotoFile(null);
        setAcademicQualification([]);
        setExperience([]);
        setResearchPublications({ phdThesisTitle: '', summary: '', awardsHonors: '', fundedResearchProjects: '' });
        if (document.getElementById('photo-input')) document.getElementById('photo-input').value = null;
        setActiveTab('basic');
    };

    const handleEditClick = (member) => {
        setEditingId(member._id);
        setBasicInfo({
            name: member.name || '', title: member.title || '', department: member.department || '',
            designation: member.designation || '', specialization: member.specialization || '',
            email: member.email || '', phone: member.phone || '', mobile: member.mobile || '', address: member.address || ''
        });
        
        const dp = member.detailedProfile || {};
        setAcademicQualification(dp.academicQualification || []);
        setExperience(dp.experience || []);
        
        const rp = dp.researchPublications || {};
        setResearchPublications({
            phdThesisTitle: rp.phdThesisTitle || '',
            summary: Array.isArray(rp.summary) ? rp.summary.join('\n') : (rp.summary || ''),
            awardsHonors: Array.isArray(rp.awardsHonors) ? rp.awardsHonors.join('\n') : (rp.awardsHonors || ''),
            fundedResearchProjects: Array.isArray(rp.fundedResearchProjects) ? rp.fundedResearchProjects.join('\n') : (rp.fundedResearchProjects || '')
        });

        setPhotoFile(null);
        if (document.getElementById('photo-input')) document.getElementById('photo-input').value = null;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Prepare Detailed Profile Payload
        const detailedProfile = {
            academicQualification,
            experience,
            researchPublications: {
                phdThesisTitle: researchPublications.phdThesisTitle,
                summary: researchPublications.summary.split('\n').filter(Boolean),
                awardsHonors: researchPublications.awardsHonors.split('\n').filter(Boolean),
                fundedResearchProjects: researchPublications.fundedResearchProjects.split('\n').filter(Boolean)
            }
        };

        const formData = new FormData();
        Object.keys(basicInfo).forEach(key => formData.append(key, basicInfo[key]));
        formData.append('detailedProfile', JSON.stringify(detailedProfile));
        if (photoFile) formData.append('photo', photoFile);

        try {
            const config = { headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}` } };
            if (editingId) {
                await axios.put(`${import.meta.env.VITE_API_URL}/api/faculty/${editingId}`, formData, config);
            } else {
                await axios.post(`${import.meta.env.VITE_API_URL}/api/faculty`, formData, config);
            }
            fetchFaculty();
            resetForm();
            alert(`Faculty ${editingId ? 'updated' : 'added'} successfully!`);
        } catch (error) {
            setError(editingId ? "Error updating faculty member." : "Error creating faculty member.");
            console.error("Submit Error:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this faculty member?')) {
            try {
                await axios.delete(`${import.meta.env.VITE_API_URL}/api/faculty/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
                setFaculty(faculty.filter(member => member._id !== id));
            } catch (err) {
                setError('Failed to delete faculty member.');
            }
        }
    };

    // --- Dynamic Array Handlers ---
    const addQualification = () => setAcademicQualification([...academicQualification, { degree: '', institute: '', year: '' }]);
    const updateQualification = (index, field, value) => {
        const newArr = [...academicQualification];
        newArr[index][field] = value;
        setAcademicQualification(newArr);
    };
    const removeQualification = (index) => setAcademicQualification(academicQualification.filter((_, i) => i !== index));

    const addExperience = () => setExperience([...experience, { designation: '', organization: '', from: '', to: '', totalExperience: '' }]);
    const updateExperience = (index, field, value) => {
        const newArr = [...experience];
        newArr[index][field] = value;
        setExperience(newArr);
    };
    const removeExperience = (index) => setExperience(experience.filter((_, i) => i !== index));


    // --- UI Renderers ---
    const TabButton = ({ id, label }) => (
        <button
            type="button"
            onClick={() => setActiveTab(id)}
            className={`px-4 py-2 font-semibold rounded-t-lg transition-colors duration-200 ${
                activeTab === id 
                ? 'bg-[#E2F0CB] text-[#5D3A9B] border-t-2 border-[#5D3A9B]' // Pista background, Purple text/border
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
            {label}
        </button>
    );

    return (
        <div className="container mx-auto p-4 min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-[#5D3A9B]">Manage Faculty CMS</h1>

            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-xl mb-8 border border-purple-100 overflow-hidden">
                <div className="bg-[#5D3A9B] text-white p-4">
                    <h2 className="text-xl font-semibold">{editingId ? 'Edit Faculty Profile' : 'Create New Faculty Profile'}</h2>
                </div>
                
                <div className="flex border-b border-gray-200 bg-gray-50 px-4 pt-4 space-x-2">
                    <TabButton id="basic" label="Basic Info" />
                    <TabButton id="academic" label="Qualifications" />
                    <TabButton id="experience" label="Experience" />
                    <TabButton id="research" label="Research & Pubs" />
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">{error}</div>}

                    {/* TAB: BASIC INFO */}
                    {activeTab === 'basic' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                            {['name', 'title', 'department', 'designation', 'specialization', 'email', 'phone', 'mobile'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-[#5D3A9B] uppercase tracking-wider mb-1">
                                        {field} {['name', 'title', 'department'].includes(field) && '*'}
                                    </label>
                                    <input
                                        type="text"
                                        required={['name', 'title', 'department'].includes(field)}
                                        value={basicInfo[field]}
                                        onChange={(e) => setBasicInfo({ ...basicInfo, [field]: e.target.value })}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#E2F0CB] focus:border-[#5D3A9B]"
                                    />
                                </div>
                            ))}
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-[#5D3A9B] uppercase tracking-wider mb-1">Address</label>
                                <textarea
                                    value={basicInfo.address}
                                    onChange={(e) => setBasicInfo({ ...basicInfo, address: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#E2F0CB] focus:border-[#5D3A9B]"
                                    rows="2"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-[#5D3A9B] uppercase tracking-wider mb-1">Profile Photo (Optional)</label>
                                <input
                                    id="photo-input"
                                    type="file"
                                    onChange={(e) => setPhotoFile(e.target.files[0])}
                                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#E2F0CB] file:text-[#5D3A9B] hover:file:bg-[#d4e6b5] cursor-pointer"
                                />
                            </div>
                        </div>
                    )}

                    {/* TAB: ACADEMIC QUALIFICATIONS */}
                    {activeTab === 'academic' && (
                        <div className="space-y-4 animate-fadeIn">
                            <div className="flex justify-between items-center bg-[#f8faeb] p-3 rounded-md border border-[#E2F0CB]">
                                <h3 className="text-lg font-bold text-[#5D3A9B]">Academic Degrees</h3>
                                <button type="button" onClick={addQualification} className="px-3 py-1 bg-[#5D3A9B] text-white rounded hover:bg-purple-800 text-sm">
                                    + Add Degree
                                </button>
                            </div>
                            {academicQualification.map((qual, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4 border border-gray-200 rounded-lg bg-white relative">
                                    <button onClick={() => removeQualification(index)} type="button" className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700 text-xs shadow-md">✕</button>
                                    <input placeholder="Degree (e.g. Ph.D)" value={qual.degree || ''} onChange={(e) => updateQualification(index, 'degree', e.target.value)} className="border p-2 rounded" />
                                    <input placeholder="Institute" value={qual.institute || ''} onChange={(e) => updateQualification(index, 'institute', e.target.value)} className="border p-2 rounded md:col-span-2" />
                                    <input placeholder="Year (e.g. 2020)" value={qual.year || ''} onChange={(e) => updateQualification(index, 'year', e.target.value)} className="border p-2 rounded" />
                                </div>
                            ))}
                            {academicQualification.length === 0 && <p className="text-gray-500 italic p-4 text-center">No qualifications added yet.</p>}
                        </div>
                    )}

                    {/* TAB: EXPERIENCE */}
                    {activeTab === 'experience' && (
                        <div className="space-y-4 animate-fadeIn">
                            <div className="flex justify-between items-center bg-[#f8faeb] p-3 rounded-md border border-[#E2F0CB]">
                                <h3 className="text-lg font-bold text-[#5D3A9B]">Professional Experience</h3>
                                <button type="button" onClick={addExperience} className="px-3 py-1 bg-[#5D3A9B] text-white rounded hover:bg-purple-800 text-sm">
                                    + Add Experience
                                </button>
                            </div>
                            {experience.map((exp, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-3 p-4 border border-gray-200 rounded-lg bg-white relative">
                                    <button onClick={() => removeExperience(index)} type="button" className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700 text-xs shadow-md">✕</button>
                                    <input placeholder="Designation" value={exp.designation || ''} onChange={(e) => updateExperience(index, 'designation', e.target.value)} className="border p-2 rounded md:col-span-2" />
                                    <input placeholder="Organization" value={exp.organization || ''} onChange={(e) => updateExperience(index, 'organization', e.target.value)} className="border p-2 rounded md:col-span-3" />
                                    <input placeholder="From Date" value={exp.from || ''} onChange={(e) => updateExperience(index, 'from', e.target.value)} className="border p-2 rounded" />
                                    <input placeholder="To Date" value={exp.to || ''} onChange={(e) => updateExperience(index, 'to', e.target.value)} className="border p-2 rounded" />
                                    <input placeholder="Total Duration" value={exp.totalExperience || ''} onChange={(e) => updateExperience(index, 'totalExperience', e.target.value)} className="border p-2 rounded md:col-span-3" />
                                </div>
                            ))}
                            {experience.length === 0 && <p className="text-gray-500 italic p-4 text-center">No experience records added yet.</p>}
                        </div>
                    )}

                    {/* TAB: RESEARCH */}
                    {activeTab === 'research' && (
                        <div className="grid grid-cols-1 gap-6 animate-fadeIn">
                             <div>
                                <label className="block text-sm font-bold text-[#5D3A9B] mb-2">Ph.D Thesis Title</label>
                                <input
                                    type="text"
                                    value={researchPublications.phdThesisTitle}
                                    onChange={(e) => setResearchPublications({ ...researchPublications, phdThesisTitle: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 bg-purple-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#5D3A9B] mb-2">Publications Summary (One per line)</label>
                                <textarea
                                    rows="4"
                                    placeholder="Total Number of Papers in International Refereed Journals: 32&#10;Total Number of Papers in International Conferences: 52"
                                    value={researchPublications.summary}
                                    onChange={(e) => setResearchPublications({ ...researchPublications, summary: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md p-2 bg-[#f8faeb] placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#5D3A9B] mb-2">Awards & Honors (One per line)</label>
                                <textarea
                                    rows="4"
                                    value={researchPublications.awardsHonors}
                                    onChange={(e) => setResearchPublications({ ...researchPublications, awardsHonors: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md p-2 bg-purple-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#5D3A9B] mb-2">Funded Research Projects (One per line)</label>
                                <textarea
                                    rows="4"
                                    value={researchPublications.fundedResearchProjects}
                                    onChange={(e) => setResearchPublications({ ...researchPublications, fundedResearchProjects: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md p-2 bg-[#f8faeb]"
                                />
                            </div>
                        </div>
                    )}

                    {/* Submit Area */}
                    <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end gap-4">
                        {editingId && (
                            <button type="button" onClick={resetForm} className="px-6 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 shadow-md">
                                Cancel Edit
                            </button>
                        )}
                        <button type="submit" className="px-8 py-2 bg-[#5D3A9B] text-white font-bold rounded-lg hover:bg-purple-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                            {editingId ? 'Save Changes' : 'Create Profile'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Current Faculty List Area */}
            <div>
                <h2 className="text-2xl font-bold text-[#5D3A9B] mb-6">Directory Preview</h2>
                {isLoading ? (
                    <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5D3A9B]"></div></div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {faculty.map(member => (
                            <div key={member._id} className="bg-white rounded-xl shadow-lg border-t-4 border-[#E2F0CB] overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="p-5 flex items-start gap-4">
                                    {member.profileImageUrl ? (
                                        <img src={member.profileImageUrl} alt={member.name} className="w-16 h-16 object-cover rounded-full border-2 border-[#5D3A9B]" />
                                    ) : (
                                        <div className="w-16 h-16 bg-[#D8BFD8] rounded-full flex items-center justify-center text-[#5D3A9B] font-bold text-xl border-2 border-[#5D3A9B]">
                                            {member.name.charAt(0)}
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-lg text-gray-900 truncate">{member.name}</p>
                                        <p className="text-sm text-purple-600 font-medium truncate">{member.designation || member.title}</p>
                                        <p className="text-xs text-gray-500 truncate mt-1">{member.department}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-5 py-3 flex justify-end gap-3 border-t border-gray-100">
                                    <button onClick={() => handleEditClick(member)} className="text-[#5D3A9B] bg-[#E2F0CB] hover:bg-[#c9dfa5] px-3 py-1 rounded text-sm font-semibold transition-colors">Edit</button>
                                    <button onClick={() => handleDelete(member._id)} className="text-red-700 bg-red-100 hover:bg-red-200 px-3 py-1 rounded text-sm font-semibold transition-colors">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <style jsx>{`
                .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
}

export default ManageFaculty;