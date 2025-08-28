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
          All these are within <span className="font-semibold">5 km</span> from the campus.
        </p>
      </div>

      {/* Google Map Section */}
      <div className="bg-gray-100 rounded-2xl p-6 mb-8 shadow-inner">
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.218112056585!2d77.32700051536124!3d19.18114115325809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd1fe7c020c4db%3A0xd6500b86a2fddf3b!2sMGM%20College%20of%20Engineering%2C%20Nanded!5e0!3m2!1sen!2sin!4v1674567890123!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MGM College of Engineering Location"
          ></iframe>
        </div>

        {/* Map Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <a
            href="https://www.google.com/maps/place/MGM+College+of+Engineering,+Nanded/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-md"
          >
            View Larger Map
          </a>
          <a
            href="https://www.google.com/maps/dir//MGM+College+of+Engineering,+Nanded/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-md"
          >
            Driving Directions
          </a>
        </div>
      </div>

      {/* Transport Options */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">✈️ By Air</h3>
          <p className="text-gray-700">Nearest airport is within 5 km from the campus</p>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-green-800">🚆 By Rail</h3>
          <p className="text-gray-700">Nanded Railway Station is within 5 km from the campus</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">🚌 By Road</h3>
          <p className="text-gray-700">Well connected by road transport from all major cities</p>
        </div>
      </div> */}
    </div>
  );
};

export default LocationComponent;
