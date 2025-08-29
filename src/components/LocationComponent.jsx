import React from "react";

const LocationComponent = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8 text-indigo-900 border-b-4 border-indigo-200 pb-3">
        Our Location
      </h2>

      {/* Campus Description */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          The Campus is situated in the North-East side of Nanded City,
          conveniently connected by Air, Rail, and Road transport. 
          All these are within <span className="font-semibold text-indigo-600">5 km</span> from the campus.
        </p>
      </div>

      {/* Google Map Section */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-8 shadow-inner border border-gray-100">
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.218112056585!2d77.32700051536124!3d19.18114115325809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd1fe7c020c4db%3A0xd6500b86a2fddf3b!2sMGM%20College%20of%20Engineering%2C%20Nanded!5e0!3m2!1sen!2sin!4v1674567890123!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MGM College of Engineering Location"
          ></iframe>
        </div>

        {/* Map Action Buttons - Premium Redesign */}
        <div className="flex flex-wrap gap-5 mt-8 justify-center">
          <a
            href="https://www.google.com/maps/place/MGM+College+of+Engineering,+Nanded/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-7 py-3.5 bg-white text-indigo-700 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border-2 border-indigo-100 hover:border-indigo-300 group overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-50 to-white group-hover:from-indigo-100 group-hover:to-indigo-50 opacity-100"></div>
            <span className="relative flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              View Larger Map
            </span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </a>
          
          <a
            href="https://www.google.com/maps/dir//MGM+College+of+Engineering,+Nanded/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group overflow-hidden"
          >
            <div className="absolute inset-0 w-0 bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></div>
            <span className="relative flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1v-6a1 1 0 00-.293-.707l-4-4A1 1 0 0016 3H3a1 1 0 00-1 1zm14.707 3L17 4.414V7h.707z" />
              </svg>
              Get Directions
            </span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
          </a>
        </div>
      </div>

      {/* Transport Options */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">By Air</h3>
          <p className="text-gray-700">Nearest airport is within 5 km from the campus</p>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-green-800">By Rail</h3>
          <p className="text-gray-700">Nanded Railway Station is within 5 km from the campus</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">By Road</h3>
          <p className="text-gray-700">Well connected by road transport from all major cities</p>
        </div>
      </div> */}
    </div>
  );
};

export default LocationComponent;