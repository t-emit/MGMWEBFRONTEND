// src/pages/cells-committees/TrainingAndPlacementCellPage.jsx

import React from 'react';

// Data for the Training and Placement Cell members
const trainingAndPlacementCellMembers = [
  { srNo: 1, name: "Dr. Geeta S. Lathkar", designation: "Director" },
  { srNo: 2, name: "Dr. S. L. Kotgire", designation: "Vice-Principal" },
  { srNo: 3, name: "Dr. M. G. Harkare", designation: "HOD, Dept. of Mech Engg." },
  { srNo: 4, name: "Dr. A. M. Rajurkar", designation: "HOD, Dept of CSE" },
  { srNo: 5, name: "Dr. K. C. Jondhale", designation: "HOD, Dept of ECT" },
  { srNo: 6, name: "Prof. S. A. Hashmi", designation: "HOD, Dept. of IT" },
  { srNo: 7, name: "Dr. Arshad Hashmi", designation: "HOD, Dept. of Civil Engg." },
  { srNo: 8, name: "Prof. Shivprasad Titare", designation: "Training & Placement Officer" },
  { srNo: 9, name: "Prof. Mohd Aijaz Ahmed", designation: "TPC, Dept. of CSE" },
  { srNo: 10, name: "Dr. V. P. Kude", designation: "TPC, Dept of ECT" },
  { srNo: 11, name: "Prof. R. R. Alurwad", designation: "TPC, Dept. of Civil Engg." },
  { srNo: 12, name: "Prof. R. S. Yadav", designation: "TPC, Dept. of IT" },
  { srNo: 13, name: "Prof. C. V. Bandela", designation: "TPC, Dept. of Mech. Engg." },
];

const TrainingAndPlacementCellPage = () => {
  return (
    // Outer container matching CesaPage's background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with CesaPage's h1 styling */}
        <header className="mb-8" aria-labelledby="training-placement-cell-title">
          <h1 id="training-placement-cell-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Training and Placement Cell
          </h1>
        </header>

        {/* Main content section - Consistent with CesaPage's content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Training and Placement Cell Overview and Members">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About the Training and Placement Cell
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Training & Placement Cell of the Institute strives to help students in pursuing their career goals 
              by providing employability skills. We have a centralized placement activity which gives all programs 
              equal opportunity to grow for sustained excellence in career through training & placement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Members of Training and Placement Cell are as given below:
            </p>
          </div>

          {/* Table with consistent styling from CesaPage */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <caption className="sr-only">List of Training and Placement Cell Members with their designations</caption>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-1/12">SN</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-5/12">Name of Member</th>
                  <th scope="col" className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-6/12">Designation/Position</th>
                </tr>
              </thead>
              <tbody>
                {trainingAndPlacementCellMembers.map((member, index) => (
                  <tr key={member.srNo} className={`transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-600">{member.srNo}</td>
                    <td className="border border-gray-300 p-3 text-left font-medium text-gray-800">{member.name}</td>
                    <td className="border border-gray-300 p-3 text-left text-gray-700">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrainingAndPlacementCellPage;