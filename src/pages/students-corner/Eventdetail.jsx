// src/pages/students-corner/EventDetail.jsx

import React from 'react';

const EventDetail = ({ event }) => {
  // --- DYNAMIC GRID LOGIC ---
  // Determine the best grid layout based on the number of images.
  const imageCount = event.images.length;
  let gridClass = '';

  if (imageCount === 1) {
    // If there's only one image, we don't need a grid. We'll center it.
    gridClass = 'single-image-layout'; // This is a flag for our JSX
  } else if (imageCount === 2 || imageCount === 4) {
    // For 2 or 4 images, a 2-column grid looks best (2x1 or 2x2).
    gridClass = 'grid-cols-1 md:grid-cols-2';
  } else {
    // For 3 images (or 5, 6, etc.), a 3-column grid is ideal.
    gridClass = 'grid-cols-1 md:grid-cols-3';
  }

  return (
    <section className="pt-8 mt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h3>
      
      {/* Description Paragraphs (No change here) */}
      {event.description.map((paragraph, index) => (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}

       {/* --- IMAGE GALLERY SECTION - FINAL VERSION --- */}
      <div className="my-6">
        {gridClass === 'single-image-layout' ? (
          // Layout for a single, centered image (no fixed ratio needed)
          <div className="flex justify-center">
            <div className="text-center max-w-xl">
              {event.images[0].caption && <p className="text-gray-600 font-semibold mb-2">{event.images[0].caption}</p>}
              <img 
                src={event.images[0].src} 
                alt={event.images[0].alt || event.title}
                className="rounded-lg shadow-md border w-full h-auto"
              />
            </div>
          </div>
        ) : (
          // The smart grid for 2 or more images
          <div className={`grid ${gridClass} gap-6`}>
            {event.images.map((image, index) => (
              <div key={index} className="text-center">
                {image.caption && <p className="text-gray-600 font-semibold mb-2">{image.caption}</p>}
                
                {/* 1. The Sizer Div: This creates the uniform container */}
                <div className="aspect-[4/3] bg-gray-100 rounded-lg shadow-md border overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt || event.title}
                    // 2. The Filling Image: These classes make the image fill the sizer div
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Results Table for the Event (No change here) */}
      {event.resultsTable && (
        <div className="my-6">
          <h4 className="text-lg font-semibold text-center mb-4">{event.resultsTable.title}</h4>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl mx-auto border-collapse border border-gray-300">
              {/* ... table content ... */}
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDetail;