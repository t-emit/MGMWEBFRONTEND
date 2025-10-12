import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allASHFacultyData } from './ashConstants';

const ASHFacultyDetailPage = () => {
    const { facultyId } = useParams();
    const faculty = allASHFacultyData.find(f => f.id === facultyId);

    if (!faculty) {
        return (
            <div className="container mx-auto px-4 py-8 mt-28 text-center">
                <h1 className="text-3xl font-bold text-red-600">Faculty Not Found</h1>
                <p className="text-gray-600 mt-2">The faculty member you are looking for does not exist.</p>
                <Link to="/academics/applied-science/faculty" className="mt-6 inline-block px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                    &larr; Back to Faculty List
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 md:flex">
                <div className="md:w-1/3">
                    <img src={faculty.img} alt={`Profile of ${faculty.name}`} className="w-full h-full object-cover object-top" onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg'; }} />
                </div>
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-indigo-900 mb-2">{faculty.name}</h1>
                    <p className="text-xl text-gray-700 font-medium mb-4">{faculty.designation}</p>
                    <div className="border-t border-gray-200 pt-4 space-y-2 text-gray-600">
                        <p><span className="font-semibold text-gray-800">Specialization:</span> {faculty.specialization || 'Not Available'}</p>
                        <p><span className="font-semibold text-gray-800">Email:</span> <a href={`mailto:${faculty.email}`} className="text-indigo-600 hover:underline ml-2">{faculty.email}</a></p>
                    </div>
                    <Link to="/academics/applied-science/faculty" className="mt-6 self-start px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium">
                        &larr; Back to Faculty List
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ASHFacultyDetailPage;