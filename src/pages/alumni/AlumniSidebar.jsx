// src/pages/alumni/AlumniSidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Photo Gallery', to: '/gallery' }, // Assuming a future gallery route
  { name: 'Courses', to: '/courses' },
  { name: 'Events & News', to: '/events' }, // Assuming a future events route
  { name: 'Alumni', to: '/alumni/speak' }, // Main alumni page
  { name: 'Chairman\'s Desk', to: '/chairman-desk' },
  { name: 'Director\'s Desk', to: '/director-desk' },
  { name: 'Contact Us', to: '/contact' },
];

const AlumniSidebar = () => {
  return (
    <aside className="space-y-8">
      {/* Quick Links Section */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-indigo-800 mb-4 pb-2 border-b-2 border-dotted border-indigo-300">
          Quick Links
        </h2>
        <ul className="space-y-2">
          {quickLinks.map((link) => (
            <li key={link.name} className="border-b border-dotted border-indigo-200 last:border-b-0">
              <Link
                to={link.to}
                className="block py-2 px-3 text-gray-700 font-medium rounded-md hover:bg-indigo-200 hover:text-indigo-900 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Our Alumni Speaks Section */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-indigo-800 mb-4 pb-2 border-b-2 border-dotted border-indigo-300">
          Our Alumni Speaks
        </h2>
        <div className="bg-white p-4 border-l-4 border-indigo-500 shadow-sm">
          <blockquote className="italic text-gray-600 text-sm">
            "It's always been a matter of pride to be called the MGM student, the nostalgia, the memories and those days...aha! I can still feel them, smell them..."
          </blockquote>
          <p className="text-right mt-3 font-bold text-gray-800">- Mukund Sarsar</p>
          <p className="text-right text-sm text-gray-500">B.E. Mech, Major, Indian Army</p>
        </div>
        <Link to="/alumni/speak" className="block text-right mt-4 text-indigo-600 font-semibold hover:underline">
          Read more Alumni Speaks &gt;&gt;
        </Link>
      </div>
    </aside>
  );
};

export default AlumniSidebar;