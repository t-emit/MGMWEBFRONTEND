// components/Hero.jsx
'use client';
import { useState, useEffect, useCallback } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    "/images/hero/slide4.jpg" ,
    "/images/hero/slide1.jpg",
    "/images/hero/slide2.jpg",
    "/images/hero/slide3.jpg",
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds for a smooth, professional pace

    return () => clearInterval(interval);
  }, [currentSlide, isPaused, nextSlide]);

  // Unified button style class for a consistent look
  const controlButtonClass = "p-2 rounded-full text-gray-700 bg-white shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50";

  return (
    <section className="font-sans bg-white mt-16">
      <div className="py-8 md:py-12 px-4 md:px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">

          {/* Slideshow Container (Responsive Height) */}
          <div className="relative h-96 md:h-[450px] lg:h-[400px] xl:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 bg-white animate-fade-in">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${ // Cinematic animation
                  index === currentSlide
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 z-0'
                  }`}
              >
                <img
                  src={slide}
                  alt={`Campus ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* --- Professional Unified Control Bar (BELOW IMAGE) --- */}
          <div className="flex justify-center items-center mt-3 p-3 ">

            {/* 1. Previous Button */}
            <button
              onClick={prevSlide}
              className={`${controlButtonClass} mr-4`}
              aria-label="Previous slide"
              title="Previous Slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* 2. Slide Indicators (Dots) */}
            <div className="flex space-x-3 mx-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${index === currentSlide
                      ? 'bg-blue-600 scale-125 shadow-md shadow-blue-400/50' // Active indicator
                      : 'bg-gray-400 hover:bg-gray-500'   // Inactive indicator
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* 3. Play/Pause Button */}
            <button
              onClick={togglePause}
              className={`${controlButtonClass} mx-4`}
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
              title={isPaused ? "Play Slideshow" : "Pause Slideshow"}
            >
              {isPaused ? (
                // Play Icon
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                // Pause Icon
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </button>

            {/* 4. Next Button */}
            <button
              onClick={nextSlide}
              className={`${controlButtonClass} ml-4`}
              aria-label="Next slide"
              title="Next Slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
          {/* --- END Professional Unified Control Bar --- */}

        </div>
      </div>

      {/* CSS Animations (Kept for continuity) */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;