// src/pages/gallery/PhotoGallery.jsx
import React, { useState, useEffect, useCallback } from 'react';

// --- Mock Data for Photo Gallery ---
const mockGalleryData = [
  { id: 'img1', src: '/images/gallery/img1.jpg' },
  { id: 'img2', src: '/images/gallery/img2.jpg' },
  { id: 'img4', src: '/images/gallery/img3.jpg' },
  { id: 'img5', src: '/images/gallery/img4.jpg' },
  { id: 'img6', src: '/images/gallery/img5.jpg' },
  { id: 'img7', src: '/images/gallery/img6.jpg' },
  { id: 'img8', src: '/images/gallery/img7.jpg' },
  { id: 'img9', src: '/images/gallery/img8.jpg' },
  { id: 'img10', src: '/images/gallery/img9.jpg' },
  { id: 'img3', src: '/images/gallery/hostel.jpg' },

  // { id: 'img11', src: '/images/gallery/Cultural_Program.jpg' },
  // { id: 'img12', src: '/images/gallery/Science_Exhibition.jpg' },
  // { id: 'img13', src: '/images/gallery/Guest_Lecture.jpg' },
  // { id: 'img14', src: '/images/gallery/NCC_Camp.jpg' },
  // { id: 'img15', src: '/images/gallery/Blood_Donation_Drive.jpg' },
  //   { id: 'img16', src: '/images/gallery/Alumni_Meet.jpg' },
  //   { id: 'img17', src: '/images/gallery/Robotics_Club.jpg' },
  //   { id: 'img18', src: '/images/gallery/Startup_Pitch.jpg' },
  //   { id: 'img19', src: '/images/gallery/Environmental_Awareness.jpg' },
  //   { id: 'img20', src: '/images/gallery/Faculty_FDP.jpg' },
  //   { id: 'img21', src: '/images/gallery/New_Hostel.jpg' },
  //   { id: 'img22', src: '/images/gallery/Research_Lab.jpg' },
  //   { id: 'img23', src: '/images/gallery/Inter_College.jpg' },
  //   { id: 'img24', src: '/images/gallery/Yoga_Wellness.jpg' },
  //   { id: 'img25', src: '/images/gallery/Farewell_Party.jpg' },
];

const IMAGES_PER_PAGE = 9;

const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Calculate total pages
  const totalPages = Math.ceil(mockGalleryData.length / IMAGES_PER_PAGE);

  // Get images for the current page
  const indexOfLastImage = currentPage * IMAGES_PER_PAGE;
  const indexOfFirstImage = indexOfLastImage - IMAGES_PER_PAGE;
  const currentImages = mockGalleryData.slice(indexOfFirstImage, indexOfLastImage);

  // Handle image load
  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  // Handle page change
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Open lightbox
  const openLightbox = useCallback((index) => {
    const actualIndex = indexOfFirstImage + index;
    setCurrentImageIndex(actualIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, [indexOfFirstImage]);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  // Navigate lightbox images
  const navigateLightbox = useCallback((direction) => {
    setCurrentImageIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = mockGalleryData.length - 1;
      } else if (newIndex >= mockGalleryData.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!lightboxOpen) return;
      if (event.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (event.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (event.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, navigateLightbox, closeLightbox]);

  // Generate page numbers for pagination with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  // --- Enhanced Lightbox Component ---
  const Lightbox = () => {
    if (!lightboxOpen) return null;

    const currentImage = mockGalleryData[currentImageIndex];

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4 backdrop-blur-sm"
        onClick={closeLightbox}
      >
        <button
          onClick={closeLightbox}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl md:text-4xl leading-none font-bold z-50 
                     hover:text-red-400 transition-all duration-300 transform hover:scale-125
                     bg-gray-900 bg-opacity-50 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
          aria-label="Close Lightbox"
        >
          &times;
        </button>

        <div className="relative flex items-center justify-center h-full w-full max-w-6xl max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white 
                       text-xl md:text-2xl p-3 md:p-4 rounded-full hover:bg-opacity-90 transition-all duration-300 
                       z-50 transform hover:scale-110 shadow-2xl border border-gray-700"
            aria-label="Previous Image"
          >
            &#10094;
          </button>

          {/* Main Image with Animation */}
          <div className="relative group">
            <img
              src={currentImage.src}
              alt="Gallery Image"
              className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-xl shadow-2xl 
                         transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white 
                       text-xl md:text-2xl p-3 md:p-4 rounded-full hover:bg-opacity-90 transition-all duration-300 
                       z-50 transform hover:scale-110 shadow-2xl border border-gray-700"
            aria-label="Next Image"
          >
            &#10095;
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm md:text-lg 
                         bg-black bg-opacity-60 px-4 md:px-6 py-2 md:py-3 rounded-2xl backdrop-blur-sm">
            <div className="text-center font-medium">
              {currentImageIndex + 1} / {mockGalleryData.length}
            </div>
          </div>

          {/* Thumbnail Strip - Hidden on mobile, visible on tablet and desktop */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:flex space-x-2 max-w-full overflow-x-auto py-2">
            {mockGalleryData.map((img, index) => (
              <img
                key={img.id}
                src={img.src}
                alt=""
                className={`w-10 h-10 object-cover rounded-lg cursor-pointer transition-all duration-300
                           ${index === currentImageIndex
                    ? 'ring-3 ring-yellow-400 transform scale-110'
                    : 'opacity-60 hover:opacity-100'}
                           hover:transform hover:scale-105`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 md:py-8 mt-24 md:mt-28 max-w-7xl">
      {/* Simplified Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-2xl p-6 md:p-8 text-white mb-8 md:mb-12 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-yellow-400 rounded-full -translate-y-24 md:-translate-y-32 translate-x-24 md:translate-x-32 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-blue-400 rounded-full translate-y-16 md:translate-y-24 -translate-x-16 md:-translate-x-24 opacity-20"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            Photo Gallery
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-95 max-w-2xl mx-auto leading-relaxed">
            Explore the vibrant journey of our campus through captivating moments
          </p>
        </div>
      </div>

      {/* Enhanced Gallery Grid - No Text Below Images */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
        {currentImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden cursor-pointer
                       transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
                       border border-gray-100 hover:border-yellow-300"
            onClick={() => openLightbox(index)}
          >
            {/* Image Container with Loading State */}
            <div className="relative overflow-hidden bg-gray-100 aspect-square">
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${loadedImages[image.id] ? 'opacity-0' : 'opacity-100'
                }`}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 border-3 sm:border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
              </div>

              <img
                src={image.src}
                alt="Gallery Image"
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110
                           ${loadedImages[image.id] ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(image.id)}
              />

              {/* Enhanced Overlay - Only on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black bg-opacity-50 text-white p-3 sm:p-4 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                  </svg>
                </div>
              </div>

              {/* Click Hint - Mobile Only */}
              <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-lg
                            opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to view
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Pagination - Responsive */}
      {totalPages > 1 && (
        <nav className="mt-12 flex justify-center" aria-label="Pagination">
          <ul className="flex items-center space-x-2 sm:space-x-3">
            {/* Previous Button */}
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold 
                           bg-gradient-to-r from-blue-800 to-purple-800 text-white
                           hover:from-blue-700 hover:to-purple-700 disabled:opacity-30 disabled:cursor-not-allowed
                           transition-all duration-300 transform hover:scale-105 shadow-lg
                           flex items-center space-x-1 sm:space-x-2"
                aria-label="Previous Page"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Previous</span>
              </button>
            </li>

            {/* Page Numbers */}
            {getPageNumbers().map((number, index) => (
              <li key={index}>
                {number === '...' ? (
                  <span className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-gray-500 font-semibold text-sm sm:text-base">...</span>
                ) : (
                  <button
                    onClick={() => paginate(number)}
                    className={`px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold 
                                transition-all duration-300 transform hover:scale-110
                                ${currentPage === number
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 shadow-inner font-bold'
                        : 'bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600'}
                                shadow-lg`}
                    aria-current={currentPage === number ? 'page' : undefined}
                  >
                    {number}
                  </button>
                )}
              </li>
            ))}

            {/* Next Button */}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold 
                           bg-gradient-to-r from-blue-800 to-purple-800 text-white
                           hover:from-blue-700 hover:to-purple-700 disabled:opacity-30 disabled:cursor-not-allowed
                           transition-all duration-300 transform hover:scale-105 shadow-lg
                           flex items-center space-x-1 sm:space-x-2"
                aria-label="Next Page"
              >
                <span className="hidden sm:inline">Next</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Page Info */}
      <div className="text-center mt-6 text-gray-600 text-sm sm:text-base font-medium">
        Page {currentPage} of {totalPages} • {currentImages.length} of {mockGalleryData.length} photos
      </div>

      {/* Render Enhanced Lightbox */}
      <Lightbox />
    </div>
  );
};

export default PhotoGallery;