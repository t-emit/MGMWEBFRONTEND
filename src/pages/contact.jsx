// src/pages/ContactPage.jsx

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';

// --- Reusable Contact Card Component ---
const ContactCard = ({ title, name, details, phone, email }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col h-full">
        <div className="flex-grow">
            {title && <h3 className="text-lg font-bold text-indigo-800 mb-2">{title}</h3>}
            {name && <p className="font-semibold text-gray-800">{name}</p>}
            {details && <p className="text-sm text-gray-600 mb-4">{details}</p>}
        </div>
        <div className="mt-auto border-t pt-4 space-y-2">
            {phone && (
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center text-gray-700 hover:text-indigo-600">
                    <FaPhone className="mr-3 text-indigo-500" />
                    <span>{phone}</span>
                </a>
            )}
            {email && (
                <a href={`mailto:${email}`} className="flex items-center text-gray-700 hover:text-indigo-600 break-all">
                    <FaEnvelope className="mr-3 text-indigo-500" />
                    <span>{email}</span>
                </a>
            )}
        </div>
    </div>
);

// --- Reusable Section Component ---
const Section = ({ title, children }) => (
    <section className="py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {children}
        </div>
    </section>
);


// --- Data for the Contact Page ---
const generalContacts = [
    { title: "OFFICE", phone: "02462 222999, 02462 224101", email: "mgmcen@mgmcen.ac.in" },
    { title: "Admission", phone: "02462 222999, 02462 224101", email: "admission@mgmcen.ac.in" },
    { title: "REGISTRAR", phone: "02462 224101", email: "registrar@mgmcen.ac.in" },
];

const admissionContacts = [
    { name: "Dr. Mrs. S. N. Dachawar", details: "Admission Incharge, Professor & Head, Dept. of Applied Science & Humanities", phone: "9881907979", email: "dachawar_sn@mgmcen.ac.in" },
    { name: "Prof. Mrs. M. R. Banwaskar", details: "Professor, Dept. of Electronics & Telecommunication", phone: "9422148229", email: "banwaskar_mr@mgmcen.ac.in" },
    { name: "Dr. Mr. S. L. Kotgire", details: "Vice-Principal, Professor, Dept. of Electronics & Telecommunication", phone: "9158677555", email: "kotgire_sl@mgmcen.ac.in" },
];

const placementContacts = [
    { name: "Shivprasad Titare", details: "TPO", phone: "9765172399" },
    { name: "Sudhakar Jadhav", details: "T and P Office Assistant", phone: "8552818552" },
];

const rtiContacts = [
    { title: "Central Public Information Officer (CPIO)", name: "The Registrar", details: "MGM’s College of Engineering, Nanded", phone: "02462-222999, 224101", email: "registrar@mgmcen.ac.in" },
    { title: "Appellate Authority", name: "The Director", details: "MGM’s College of Engineering, Nanded", phone: "02462 -22299, 224101", email: "director@mgmcen.ac.in" },
];

const studentQueries = [
    { title: "CASERP Queries", email: "stud_cassupport@mgmcen.ac.in" },
    { title: "Online Payment Queries", email: "stud_onlinepayquery@mgmcen.ac.in" },
];

const hodContacts = [
    { name: "Dr. Mr. S. L. Kotgire", details: "Vice-Principal, Professor, Dept. of Electronics & Telecommunication", email: "kotgire_sl@mgmcen.ac.in" },
    { name: "Dr. Mrs. A. M. Rajurkar", details: "Professor & Head, Dept. of Computer Science & Engineering", email: "rajurkar_am@mgmcen.ac.in" },
    { name: "Dr. A. K. Hashmi", details: "Head, Dept. of Civil Engineering", email: "hasmi_ak@mgmcen.ac.in" },
    { name: "Dr. M. G. Harkare", details: "Professor & Head, Dept. of Mechanical Engineering", email: "harkare_mg@mgmcen.ac.in" },
    { name: "Dr. Mrs. K. C. Jondhale", details: "Professor & Head, Dept. of Electronics & Tel. Comm.", email: "jondhale_kc@mgmcen.ac.in" },
    { name: "Mr. S. A. Hashmi", details: "Head, Dept. of Information Technology", email: "hashmi_sa@mgmcen.ac.in" },
    { name: "Dr. Mrs. S. N. Dachawar", details: "Admission Incharge, Professor & Head, Dept. of Applied Science & Humanities", email: "dachawar_sn@mgmcen.ac.in" },
];


const ContactPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-40">
            <div className="container mx-auto px-4">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-indigo-800">Contact Us</h1>
                    <p className="text-lg text-gray-600 mt-2">We'd love to hear from you. Here's how you can reach us.</p>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg space-y-12">
                    <Section title="General Inquiries">{generalContacts.map((c, i) => <ContactCard key={i} {...c} />)}</Section>
                    <Section title="For Admissions">{admissionContacts.map((c, i) => <ContactCard key={i} {...c} />)}</Section>
                    <Section title="Placement Cell">{placementContacts.map((c, i) => <ContactCard key={i} {...c} />)}</Section>
                    <Section title="For RTI Related Authorities">{rtiContacts.map((c, i) => <ContactCard key={i} {...c} />)}</Section>
                    <Section title="Student Queries (Email)">{studentQueries.map((c, i) => <ContactCard key={i} {...c} />)}</Section>
                    <Section title="Heads of Departments">{hodContacts.map((c, i) => <ContactCard key={i} {...c} />)}</Section>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;