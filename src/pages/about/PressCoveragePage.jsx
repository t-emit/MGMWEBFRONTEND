import React from 'react';

const PressCoveragePage = () => {
  // Array of image sources, directly from the original HTML
  const pressImages = [
    'images/IMG-20240923-WA0006.jpg',
    'images/IMG-20240920-WA0017.jpg',
    'images/IMG-20241009-WA0003.jpg',
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Hero Section - Consistent with other pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white mb-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Press Coverage</h1>
        <p className="text-xl opacity-90">
          News and media coverage highlighting achievements and events at our college.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
          Our College in the News
        </h2>

        {/* Press Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressImages.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="aspect-w-4 aspect-h-5 bg-gray-100">
                <img
                  alt={`Press Clipping ${index + 1}`}
                  src={src}
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">Press Coverage {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information (optional) */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Our institution regularly features in local and regional media for our achievements and contributions to education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PressCoveragePage;