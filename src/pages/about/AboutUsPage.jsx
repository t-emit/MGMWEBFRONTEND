import React from 'react';
import LocationComponent from '../../components/LocationComponent.jsx';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-6 mt-24">
      {/* Compact Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-6 text-white mb-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">About MGM's College of Engineering</h1>
        <p className="text-lg opacity-90 leading-relaxed">Nurturing innovation and academic excellence to shape future engineers with a vision for sustainable growth and global impact.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="w-full">
          {/* SECTION 1: College Overview */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-800 border-b border-indigo-200 pb-2">Our Legacy</h2>

            <div className="flex flex-col md:flex-row gap-5 items-start mb-6">
              <div className="md:w-1/3">
                <img
                  src='/images/campus-image.jpg'
                  alt="MGM College of Engineering Campus"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                  Mahatma Gandhi Mission started its journey in a modest way with a rural health care center at Nila and a hospital in Nanded, and has emerged as a 5000-member family with more than 50 educational organizations, health care centers and social welfare units.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Spanning a period of 35 years, MGM establishments prove the deep faith of her management in the power of education that leads the society toward prosperity of the nation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Our Affiliation</h3>
                <p className="text-gray-700 text-sm">
                  Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, accredited by NAAC (2024), NBA Accredited (2024-2027), approved by AICTE, New Delhi.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold mb-2 text-green-800">Our Presence</h3>
                <p className="text-gray-700 text-sm">
                  With centers at Aurangabad, Nanded, Navi Mumbai, Noida and Parbhani, MGM has established itself as a premier educational group in India.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 2: Enhanced History and Milestones */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-800 border-b border-indigo-200 pb-2">
              The Journey of MGM College of Engineering
            </h2>

            <div className="text-gray-800 leading-relaxed space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-700">
                <p className="font-bold text-xl text-blue-800">THE COLLEGE</p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-2/5">
                  <img
                    src="images/about-college.jpg"
                    alt="About College"
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="w-full md:w-3/5">
                  <p className="mb-3 text-sm">
                    M.G.M.&rsquo;s College of Engineering started in <strong>1984</strong> is the second institute started by MGM.
                    Situated at around 3km from the heart of the city, on a hill top Located on Nanded-Nagpur highway, M.G.M&rsquo;s campus can be easily distinguished with its greenery and beauty.
                  </p>
                  <p className="mb-3 text-sm">
                    The campus is spread over <strong>20 acres</strong> having built up area more than 1.5 lakhs sq.ft. The serene surroundings and lush greenery with variety of plants make the atmosphere for learning conducive.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mt-6 text-center">
                <img
                  src="images/MGM.jpg"
                  alt="MGM Campus View"
                  className="w-full max-w-2xl h-48 object-cover mx-auto block rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-3 text-gray-600 italic text-sm">A panoramic view of our beautiful campus</p>
              </div>

              {/* Enhanced Timeline Section */}
              <div className="mt-8 pt-6 border-t border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-700 mb-6 text-center">Key Milestones: Our Institutional Timeline</h3>

                <div className="relative max-w-4xl mx-auto">
                  {/* Modern Timeline Line */}
                  <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 transform -translate-x-1/2 shadow-lg rounded-full"></div>

                  {/* Timeline Items */}
                  <div className="space-y-12">
                    {/* Timeline Item 1 */}
                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                        <div className="bg-white p-5 rounded-xl shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300">
                          <div className="flex items-center justify-end md:justify-start md:flex-row-reverse gap-3 mb-2">
                            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                            <h4 className="text-xl font-bold text-blue-800">1984</h4>
                          </div>
                          <p className="text-gray-700 font-medium">College Established</p>
                          <p className="text-gray-600 text-sm mt-1">Second institute started by MGM</p>
                        </div>
                      </div>
                      
                      <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full transform -translate-x-1/2 shadow-xl z-10"></div>
                      
                      <div className="md:w-1/2 md:pl-12">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl shadow-lg border-l-4 border-blue-600 transform hover:scale-105 transition-transform duration-300">
                          <p className="text-gray-800 font-medium">Inception year with foundational vision for engineering education</p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-12 md:text-right md:order-2 mb-4 md:mb-0">
                        <div className="bg-white p-5 rounded-xl shadow-lg border border-indigo-100 transform hover:scale-105 transition-transform duration-300">
                          <div className="flex items-center justify-end md:justify-start md:flex-row-reverse gap-3 mb-2">
                            <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                            <h4 className="text-xl font-bold text-indigo-800">1980s-90s</h4>
                          </div>
                          <p className="text-gray-700 font-medium">Expansion Era</p>
                          <p className="text-gray-600 text-sm mt-1">Growth and development phase</p>
                        </div>
                      </div>
                      
                      <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-indigo-600 rounded-full transform -translate-x-1/2 shadow-xl z-10"></div>
                      
                      <div className="md:w-1/2 md:pl-12 md:order-1">
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-xl shadow-lg border-l-4 border-indigo-600 transform hover:scale-105 transition-transform duration-300">
                          <p className="text-gray-800 font-medium">Development of campus infrastructure and academic programs</p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="relative flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                        <div className="bg-white p-5 rounded-xl shadow-lg border border-purple-100 transform hover:scale-105 transition-transform duration-300">
                          <div className="flex items-center justify-end md:justify-start md:flex-row-reverse gap-3 mb-2">
                            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                            <h4 className="text-xl font-bold text-purple-800">Present</h4>
                          </div>
                          <p className="text-gray-700 font-medium">Modern Excellence</p>
                          <p className="text-gray-600 text-sm mt-1">20-acre autonomous campus</p>
                        </div>
                      </div>
                      
                      <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-purple-600 rounded-full transform -translate-x-1/2 shadow-xl z-10"></div>
                      
                      <div className="md:w-1/2 md:pl-12">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl shadow-lg border-l-4 border-purple-600 transform hover:scale-105 transition-transform duration-300">
                          <p className="text-gray-800 font-medium">Continuing excellence in engineering education with state-of-the-art facilities and prestigious accreditations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Component */}
      <div className="mt-8">
        <LocationComponent />
      </div>
    </div>
  );
};

export default AboutUsPage;