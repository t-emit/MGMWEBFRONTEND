// src/pages/students-corner/CucYearlyData.jsx

import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const CucYearlyData = ({ councilMembers, events, eventTableHeaders }) => {
  return (
    <div className="p-4 space-y-12">
      {/* Student Council Table */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Students' Council</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Sr. No.</th>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Name</th>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Post</th>
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Class</th>
              </tr>
            </thead>
            <tbody>
              {councilMembers.map((member, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                  <td className="border border-gray-300 p-3">{member.name}</td>
                  <td className="border border-gray-300 p-3">{member.post}</td>
                  <td className="border border-gray-300 p-3">{member.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Events List Table */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">The List of Events</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                {eventTableHeaders.map((header, index) => (
                   <th key={index} className="border border-gray-300 p-3 text-left font-semibold text-gray-700">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                  <td className="border border-gray-300 p-3">{event.name}</td>
                  <td className="border border-gray-300 p-3">{event.date}</td>
                  <td className="border border-gray-300 p-3">
                    {event.link === 'Upcoming' ? (
                      <span className="font-semibold text-gray-500">Upcoming</span>
                    ) : (
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-indigo-600 hover:text-indigo-800 hover:underline"
                      >
                        <FaFilePdf className="mr-2" />
                        View PDF
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CucYearlyData;