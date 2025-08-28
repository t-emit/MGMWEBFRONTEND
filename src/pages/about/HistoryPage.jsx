import React from 'react';

const HistoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 md:p-12 text-white mb-12 shadow-xl transform transition-transform duration-300 hover:scale-[1.01]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">Our History</h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl text-center md:text-left">
          Learn about the rich history and evolution of our esteemed institution since its inception.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-10 transition-all duration-300 hover:shadow-xl">
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
                M.G.M.&rsquo;s College of Engineering started in 1984 is second institute started by MGM.
                Situated at around 3km from the heart of the city, on a hill top Located on Nanded-Nagpur highway.
                M.G.M&rsquo;s campus can be easily distinguished with its greenery and beauty.
                The campus is spread over 20 acres having built up area more than 1.5 lakhs sq.ft.
                The serene surroundings and lush greenery with variety of plants make the atmosphere for learning conducive.
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

          {/* Timeline Section - Added to enhance historical context */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-6 border-b border-indigo-100 pb-2">Key Milestones</h3>
            
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
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p>Inception year with foundational vision for engineering education</p>
                    </div>
                  </div>
                </li>
                
                <li className="relative pl-10 md:pl-0 md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <h4 className="text-xl font-semibold text-blue-800">1980s-90s</h4>
                    <p className="text-gray-700">Expansion and growth phase</p>
                  </div>
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p>Development of campus infrastructure and academic programs</p>
                    </div>
                  </div>
                </li>
                
                <li className="relative pl-10 md:pl-0 md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <h4 className="text-xl font-semibold text-blue-800">Present</h4>
                    <p className="text-gray-700">Modern institution with 20-acre campus</p>
                  </div>
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p>Continuing excellence in engineering education with state-of-the-art facilities</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;