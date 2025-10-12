import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ashDepartmentTabs, ashLaboratories, allASHFacultyData } from './ashConstants';

const ASHLaboratoryPage = () => {
  const location = useLocation();
  const basePath = "/academics/applied-science";

  const getFacultyIdByName = (name) => {
    const faculty = allASHFacultyData.find(f => f.name === name);
    return faculty ? faculty.id : null;
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Laboratories</h1>
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

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sr. No.</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Laboratory Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Area</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Incharge</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {ashLaboratories.map((lab, index) => {
              const inchargeId = getFacultyIdByName(lab.incharge);
              return (
                <tr key={lab.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lab.srNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link to={`${basePath}/labs/${lab.id}`} className="text-indigo-600 hover:underline">{lab.name}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.area}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {inchargeId ? <Link to={`${basePath}/faculty/${inchargeId}`} className="text-indigo-600 hover:underline">{lab.incharge}</Link> : lab.incharge}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ASHLaboratoryPage;