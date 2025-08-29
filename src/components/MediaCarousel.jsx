// src/components/ImageCarousel.jsx

import React, { useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Custom styles for the modal
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'transparent',
    padding: '0',
    overflow: 'visible', // Allow close button to be outside
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)', // Dark semi-transparent background
    zIndex: 1000, // Make sure it's on top
  },
};

const MediaCarousel = ({ slides }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (slide) => {
    setSelectedMedia(slide);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMedia(null);
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }, // Let's use 4 slides for a better look
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="py-8">
              <div className="bg-gray-900 border-2 border-green-500/30 rounded-2xl p-4 flex flex-col items-center text-center h-full transform hover:scale-105 transition-transform duration-300">
                
                {/* --- SMART MEDIA CONTAINER --- */}
                <div
                  onClick={() => openModal(slide)} 
                  className="aspect-square w-full bg-gray-800 rounded-xl overflow-hidden mb-4 relative cursor-pointer group"
                >
                  {/* Check if the slide is a video or image */}
                  {slide.videoSrc ? (
                    <>
                      <video
                        src={slide.videoSrc}
                        className="w-full h-full object-cover"
                        muted // Mute for preview
                        loop
                        playsInline
                      />
                      {/* Play icon overlay for videos */}
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity">
                        <svg className="w-16 h-16 text-white opacity-70" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                      </div>
                    </>
                  ) : (
                    <img
                      src={slide.imageSrc}
                      alt={slide.title || 'Media content'}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-lg text-white">{slide.title}</h3>
                  <p className="text-sm text-green-400">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- SMART MODAL --- */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Media Lightbox"
      >
        {selectedMedia && (
          <div className="relative">
            {/* Check if the selected media is a video or image */}
            {selectedMedia.videoSrc ? (
              <video 
                src={selectedMedia.videoSrc} 
                controls // Show player controls
                autoPlay // Autoplay when opened
                className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={selectedMedia.imageSrc} 
                alt="Enlarged view" 
                className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl"
              />
            )}
            
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-red-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MediaCarousel;