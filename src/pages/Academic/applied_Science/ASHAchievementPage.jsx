import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, ashAchievements } from './ashConstants';

const ASHAchievementPage = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h1>
      </div>
      <nav className="mb-8 bg-white rounded-lg shadow-md p-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {ashDepartmentTabs.map((tab) => (
            <Link key={tab.name} to={tab.path} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === tab.path ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : 'text-gray-700 hover:bg-gray-50 border border-gray-200'}`}>
              {tab.name}
            </Link>
          ))}
        </div>
      </nav>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        {ashAchievements.map((group, index) => (
            <div key={index} className="mb-8 last:mb-0">
                <h2 className="text-2xl font-bold text-indigo-800 mb-4 border-b pb-2">{group.year}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase border">Sr.</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase border">Name</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase border">Activity/Prize</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {group.entries.map((entry, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-2 text-sm text-gray-900 border text-center">{entry.srNo}</td>
                                    <td className="px-4 py-2 text-sm text-gray-900 border font-medium whitespace-pre-wrap">{entry.name}</td>
                                    <td className="px-4 py-2 text-sm text-gray-700 border">
                                        <div>{entry.activity}</div>
                                        <div className="text-xs text-gray-500 mt-1">{entry.heldAt} - <span className="font-semibold text-indigo-600">{entry.prize}</span></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
export default ASHAchievementPage;