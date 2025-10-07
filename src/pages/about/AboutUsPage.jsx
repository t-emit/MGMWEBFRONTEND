import React from 'react';
import LocationComponent from '../../components/LocationComponent.jsx';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Hero Section (from AboutUsPage) */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white mb-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About MGM's College of Engineering</h1>
        <p className="text-xl opacity-90">Nurturing innovation and academic excellence to shape future engineers with a vision for sustainable growth and global impact.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* ---------------------------------------------------- */}
          {/* SECTION 1: College Overview (Our Legacy) - From old AboutUsPage */}
          {/* ---------------------------------------------------- */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">Our Legacy</h2>

            <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
              <div className="md:w-1/3">
                <img
                  src='/images/campus-image.jpg'
                  alt="MGM College of Engineering Campus"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mahatma Gandhi Mission started its journey in a modest way with a rural health care center at Nila and a hospital in Nanded, and has emerged as a 5000-member family with more than 50 educational organizations, health care centers and social welfare units.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Spanning a period of 35 years, MGM establishments prove the deep faith of her management in the power of education that leads the society toward prosperity of the nation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Our Affiliation</h3>
                <p className="text-gray-700">
                  Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, accredited by NAAC (2024), NBA Accredited (2024-2027), approved by AICTE, New Delhi.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-3 text-green-800">Our Presence</h3>
                <p className="text-gray-700">
                  With centers at Aurangabad, Nanded, Navi Mumbai, Noida and Parbhani, MGM has established itself as a premier educational group in India.
                </p>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* SECTION 2: History and Milestones - MERGED from old HistoryPage */}
          {/* ---------------------------------------------------- */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
              The Journey of MGM College of Engineering
            </h2>

            <div className="text-gray-800 leading-relaxed text-lg space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800">
                <p className="font-bold text-2xl text-blue-800 mb-2">THE COLLEGE</p>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src="images/about-college.jpg"
                    alt="About College"
                    className="w-full max-w-xs md:max-w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="w-full md:w-2/3">
                  <p className="mb-4">
                    M.G.M.&rsquo;s College of Engineering started in **1984** is the second institute started by MGM.
                    Situated at around 3km from the heart of the city, on a hill top Located on Nanded-Nagpur highway, M.G.M&rsquo;s campus can be easily distinguished with its greenery and beauty.
                  </p>
                  <p className="mb-4">
                    The campus is spread over **20 acres** having built up area more than 1.5 lakhs sq.ft. The serene surroundings and lush greenery with variety of plants make the atmosphere for learning conducive.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mt-8 text-center">
                <img
                  src="images/MGM.jpg"
                  alt="MGM Campus View"
                  className="w-full max-w-2xl h-auto mx-auto block rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-4 text-gray-600 italic">A panoramic view of our beautiful campus</p>
              </div>

              {/* Timeline Section - Retained and enhanced for better visual separation */}
              <div className="mt-12 pt-6 border-t border-indigo-100">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-8 text-center">Key Milestones: Our Institutional Timeline</h3>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 md:left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>

                  {/* Timeline items */}
                  <ul className="space-y-12">
                    <li className="relative pl-10 md:pl-0 md:flex md:items-center">
                      <div className="md:w-1/2 md:pr-8 md:text-right">
                        <h4 className="text-xl font-semibold text-blue-800">1984</h4>
                        <p className="text-gray-700">College established as the second institute by MGM</p>
                      </div>
                      <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white transform -translate-x-1/2 shadow-md"></div>
                      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                          <p>Inception year with foundational vision for engineering education</p>
                        </div>
                      </div>
                    </li>

                    <li className="relative pl-10 md:pl-0 md:flex md:items-center">
                      <div className="md:w-1/2 md:pr-8 md:text-right md:order-2">
                        <h4 className="text-xl font-semibold text-blue-800">1980s-90s</h4>
                        <p className="text-gray-700">Expansion and growth phase</p>
                      </div>
                      <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white transform -translate-x-1/2 shadow-md"></div>
                      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 md:order-1">
                        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                          <p>Development of campus infrastructure and academic programs</p>
                        </div>
                      </div>
                    </li>

                    <li className="relative pl-10 md:pl-0 md:flex md:items-center">
                      <div className="md:w-1/2 md:pr-8 md:text-right">
                        <h4 className="text-xl font-semibold text-blue-800">Present</h4>
                        <p className="text-gray-700">Modern autonomous institution with 20-acre campus</p>
                      </div>
                      <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white transform -translate-x-1/2 shadow-md"></div>
                      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                          <p>Continuing excellence in engineering education with state-of-the-art facilities and prestigious accreditations</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Remains the same) */}
        <div className="lg:w-1/3">
          <div className="sticky top-32 space-y-6">
            {/* Accreditation Badges */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Accreditations</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">NAAC Accredited (2024)</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">NBA Accredited (2024-2027)</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">AICTE Approved</span>
                </div>
                <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Affiliated to Dr. BATU, Lonere</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h3>
              <div className="space-y-3">
                <a href="/vision-mission" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-blue-600 hover:text-blue-800">Vision & Mission</span>
                </a>
                <a href="/accreditations-affiliations" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-blue-600 hover:text-blue-800">Accreditations</span>
                </a>
                <a href="/courses" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-blue-600 hover:text-blue-800">Courses Offered</span>
                </a>
                {/* Removed /history link as content is merged */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Component (Remains the same) */}
      <div className="mt-12">
        <LocationComponent />
      </div>
    </div>
  );
};

export default AboutUsPage;