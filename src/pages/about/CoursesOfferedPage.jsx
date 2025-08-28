import React from 'react';

const CoursesOfferedPage = () => {
  // Data extracted from the original HTML
  const ugCourses = [
    { srNo: 1, name: 'B.Tech Civil Engineering', startYear: 1984, duration: 4, type: 'Full Time', intake: 60 },
    { srNo: 2, name: 'B. Tech. Computer Science & Engineering', startYear: 1984, duration: 4, type: 'Full Time', intake: 180 },
    { srNo: 3, name: 'B.Tech Electronics and Telecommunication Engineering', startYear: 1988, duration: 4, type: 'Full Time', intake: 60 },
    { srNo: 4, name: 'B. Tech. Information Technology', startYear: 1999, duration: 4, type: 'Full Time', intake: 120 },
    { srNo: 5, name: 'B. Tech. Mechanical Engineering', startYear: 1988, duration: 4, type: 'Full Time', intake: 60 },
    { srNo: 6, name: 'B.Tech Automation and Robotics', startYear: 2024, duration: 4, type: 'Full Time', intake: 60 },
    { srNo: 7, name: 'B.Tech Artificial Intelligence and Machine Learning', startYear: 2024, duration: 4, type: 'Full Time', intake: 60 },
  ];

  const pgCourses = [
    { srNo: 1, name: 'M.Tech Structural Engineering', startYear: 2010, duration: 2, type: 'Full Time', intake: 18 },
    { srNo: 2, name: 'M.Tech (Electronics and Telecommunication Engineering)', startYear: 2010, duration: 2, type: 'Full Time', intake: 9 },
    { srNo: 3, name: 'M.Tech. (Computer Science & Engineering)', startYear: 2003, duration: 2, type: 'Full Time', intake: 9 },
    { srNo: 4, name: 'M. Tech. (Manufacturing process Engineering)', startYear: 2003, duration: 2, type: 'Full Time', intake: 9 },
  ];

  const renderTable = (courses) => (
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-indigo-700 text-white">
            <th className="py-3 px-4 text-left font-semibold rounded-tl-lg">Sr. No.</th>
            <th className="py-3 px-4 text-left font-semibold">Course Name</th>
            <th className="py-3 px-4 text-center font-semibold">Start Year</th>
            <th className="py-3 px-4 text-center font-semibold">Duration (Years)</th>
            <th className="py-3 px-4 text-center font-semibold">Type</th>
            <th className="py-3 px-4 text-center font-semibold rounded-tr-lg">Intake Capacity</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.srNo} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="py-3 px-4 border-b border-gray-200 text-left">{course.srNo}</td>
              <td className="py-3 px-4 border-b border-gray-200 text-left font-medium text-indigo-700">{course.name}</td>
              <td className="py-3 px-4 border-b border-gray-200 text-center">{course.startYear}</td>
              <td className="py-3 px-4 border-b border-gray-200 text-center">{course.duration}</td>
              <td className="py-3 px-4 border-b border-gray-200 text-center">{course.type}</td>
              <td className="py-3 px-4 border-b border-gray-200 text-center">{course.intake}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white mb-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Courses Offered</h1>
        <p className="text-xl opacity-90">
          A comprehensive list of undergraduate and postgraduate programs available at our esteemed institution.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
          Undergraduate (UG) Courses
        </h2>
        {renderTable(ugCourses)}

        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3 mt-12">
          Postgraduate (PG) Courses
        </h2>
        {renderTable(pgCourses)}
      </div>
    </div>
  );
};

export default CoursesOfferedPage;