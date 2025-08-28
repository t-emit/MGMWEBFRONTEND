import React from 'react';

// Assuming all images are located in the public/images/gallery/ and public/images/ folders.
// For example:
// 'images/gallery/19102016161138-campus.jpg'
// 'images/gallery/19102016163702-Inner-Courtyard.jpg'
// 'images/gallery/19102016163904-InnerCourtyard2.jpg'
// 'images/gallery/19102016182558-img12.jpg'
// 'images/gallery/Canteen-20132812151614.jpg'

const CampusInfoPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 md:p-12 text-white mb-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Information</h1>
        <p className="text-xl opacity-90">
          Explore the vibrant and conducive environment of our college campus.
        </p>
      </div>

      {/* Main Content Area - Consistent with other redesigned pages */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
          About Our Campus
        </h2>

        {/* Content Section - Strict replication of original content and layout intent */}
        <div className="prose max-w-none text-gray-700 leading-relaxed text-base md:text-lg">
          {/* Section 1: About the Campus text */}
          <div className="mb-6"> {/* Mimicking the original 'campus-div' for this section */}
            <p className="text-xl font-bold text-blue-800 mb-2">ABOUT THE CAMPUS:</p> {/* Original bold text as heading */}
            <p className="mb-4">
              The MGM’s Campus spreads over 18 Acre area with fascinating cleanliness and lush green landscape,
              which proves an ideal atmosphere for the process of Teaching and Learning and fulfilling AICTE norms.
            </p>
          </div>

          {/* Section 2: First Image and Caption */}
          <div className="text-center mb-6">
            <img
              alt="MGM Campus View"
              src="images/19102016161138-campus.jpg"
              className="w-full h-auto object-cover rounded-md shadow-md border border-gray-100 mx-auto"
              style={{ maxWidth: '620px', maxHeight: '277px' }} /* Maintain original dimensions, responsive */
            />
            <p className="font-bold text-gray-800 text-lg mt-3">Front view of college</p> {/* Original bold text as caption */}
          </div>

          {/* Section 3: Gallery of smaller images with captions */}
          {/* Using a responsive grid to arrange the images as close to the original "floating left" intent as possible,
              but in a modern, responsive way. Original had implicit side-by-side (2 columns) or stacking. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 justify-items-center">
            {/* Inner Courtyard 1 */}
            <div className="text-center">
              <img
                alt="Inner Courtyard"
                src="images/19102016163702-Inner-Courtyard.jpg"
                className="w-full h-auto object-cover rounded-md shadow-md border border-gray-100 mx-auto"
                style={{ maxWidth: '310px', height: '277px' }} // Original style, adjusting for width from other image
              />
              <p className="font-bold text-gray-800 text-lg mt-3">Inner Courtyard</p>
            </div>

            {/* Inner Courtyard 2 */}
            <div className="text-center">
              <img
                alt="Inner Courtyard"
                src="images/19102016163904-InnerCourtyard2.jpg"
                className="w-full h-auto object-cover rounded-md shadow-md border border-gray-100 mx-auto"
                style={{ maxWidth: '300px', height: '257px' }}
              />
              <p className="font-bold text-gray-800 text-lg mt-3">Inner Courtyard</p>
            </div>

            {/* View of Boys Hostel */}
            <div className="text-center">
              <img
                alt="View of Boys Hostel"
                src="images/19102016182558-img12.jpg"
                className="w-full h-auto object-cover rounded-md shadow-md border border-gray-100 mx-auto"
                style={{ maxWidth: '310px', height: '224px' }}
              />
              <p className="font-bold text-gray-800 text-lg mt-3">View of Boys Hostel</p>
            </div>

            {/* Canteen */}
            <div className="text-center">
              <img
                alt="Canteen"
                src="images/Canteen-20132812151614.jpg"
                className="w-full h-auto object-cover rounded-md shadow-md border border-gray-100 mx-auto"
                style={{ maxWidth: '301px', height: '224px' }}
              />
              <p className="font-bold text-gray-800 text-lg mt-3">Canteen</p>
            </div>
          </div>
          {/* The original HTML had many empty <p> tags after the image gallery for spacing.
              In Tailwind, we manage spacing explicitly with margins/paddings on containers.
              Keeping these as empty divs/paragraphs would replicate the *content*, but not improve design.
              I'm opting to use container spacing to manage the layout cleanly, while making sure all visible
              text/image content is present. If literal empty <p> tags are critical "content", they could be added back,
              but typically they are a legacy layout method. Assuming "content" means visible information.
          */}
        </div>
      </div>
    </div>
  );
};

export default CampusInfoPage;