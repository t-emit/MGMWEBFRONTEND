// components/MissionVision.jsx
const MissionVision = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 relative">
          Our Vision & Mission
          <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <i className="fas fa-eye text-yellow-500"></i> Vision
            </h3>
            <p>
              To be one of the leading Institutions for Engineering education
              developing proficient Engineers with global acceptance in the
              service of mankind.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <i className="fas fa-bullseye text-yellow-500"></i> Mission
            </h3>
            <ul className="list-none space-y-3">
              <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-yellow-500">
                Providing quality Engineering education to cater the needs of
                industry and society with multidisciplinary approach on
                sustainable basis.
              </li>
              <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-yellow-500">
                Developing globally competent Engineers having ability to
                solve real-life problems addressing environmental issues
                through technological advancements.
              </li>
              <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-yellow-500">
                Inculcating professionalism, teamwork, research, innovation
                and entrepreneurship, maintaining the spirit of continuous
                learning.
              </li>
              <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-yellow-500">
                Fostering the collaboration with industry, academia, research
                organizations, experts and alumni.
              </li>
              <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-yellow-500">
                Imparting employability skills, nurturing leadership qualities
                with ethical and social values among students.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;