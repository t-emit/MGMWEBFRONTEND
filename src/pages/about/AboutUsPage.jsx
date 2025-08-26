import React from 'react';
// import campusImage from '../assets/images/campus-image.jpg';
import LocationComponent from '../../components/LocationComponent.jsx';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white mb-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About MGM's College of Engineering</h1>
        <p className="text-xl opacity-90">Nurturing innovation and academic excellence to shape future engineers with a vision for sustainable growth and global impact.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* College Overview */}
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

          {/* Quick Facts */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">Quick Facts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-indigo-600 mb-2">35+</div>
                <div className="text-gray-700">Years of Excellence</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
                <div className="text-gray-700">Educational Organizations</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-indigo-600 mb-2">5000+</div>
                <div className="text-gray-700">Member Family</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-indigo-600 mb-2">5</div>
                <div className="text-gray-700">Centers Across India</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-indigo-600 mb-2">2024</div>
                <div className="text-gray-700">NAAC Accreditation</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-indigo-600 mb-2">2027</div>
                <div className="text-gray-700">NBA Accreditation Until</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
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
                <a href="/history" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-blue-600 hover:text-blue-800">Our History</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Component */}
      <div className="mt-12">
        <LocationComponent />
      </div>
    </div>
  );
};

export default AboutUsPage;