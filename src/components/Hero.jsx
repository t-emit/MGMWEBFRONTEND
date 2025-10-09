// components/Hero.jsx
'use client';
import { useState, useEffect, useCallback } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    { type: 'image', content: "/images/hero/slide4.jpg" },
    { type: 'image', content: "/images/hero/slide2.jpg" },
    { type: 'image', content: "/images/hero/slide1.jpg" },
    {
      type: 'text',
      mainTitle: "M.G.M's College of Engineering, Nanded.",
      subtitle: "(An Autonomous Institute)",
      affiliation: "Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere",
      accreditation: "Accredited by NAAC (2024-2025), Accredited by NBA (2024-2027)",
      approval: "Approved by AICTE, New Delhi"
    },
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
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused, nextSlide]);

  // Set loaded state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const controlButtonClass = "p-2 rounded-full text-gray-700 bg-white shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/50";

  return (
    <section className="font-sans bg-white mt-18">
      <div className="py-4 md:py-6 px-0 bg-gray-50/50">
        <div className="mx-auto">

          {/* Slideshow Container - Perfect Height */}
          <div className={`relative h-[380px] md:h-[440px] lg:h-[460px] xl:h-[490px] overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 w-full transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}>

            {slides.map((slide, index) => {
              const isActive = index === currentSlide;

              if (slide.type === 'image') {
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isActive
                        ? 'opacity-100 z-10 scale-100 translate-x-0'
                        : 'opacity-0 z-0 scale-105 translate-x-4'
                      }`}
                  >
                    {/* Image Container with Perfect Fit */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <img
                        src={slide.content}
                        alt={`Campus ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover object-center min-w-full min-h-full transition-all duration-15000 ease-out ${isActive ? 'scale-110' : 'scale-100'
                          }`}
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center center',
                          width: '100%',
                          height: '100%'
                        }}
                      />
                    </div>
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent pointer-events-none"></div>
                  </div>
                );
              } else {
                // Enhanced Professional Text Slide
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isActive
                        ? 'opacity-100 z-10 scale-100'
                        : 'opacity-0 z-0 scale-105'
                      }`}
                  >
                    {/* Premium Professional Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/95 to-purple-900/95">
                      {/* Animated Gradient Orbs */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-float-1"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-purple-600/20 rounded-full blur-3xl animate-float-2"></div>
                      </div>

                      {/* Professional Shimmer */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent transform -skew-x-12 transition-all duration-4000 ${isActive ? 'translate-x-full' : '-translate-x-full'
                        }`} />
                    </div>

                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(180deg,#fff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

                    {/* Main Content Container */}
                    <div className="relative h-full flex items-center justify-center p-4 md:p-6">
                      <div className="text-center max-w-5xl mx-auto w-full space-y-4 md:space-y-6">

                        {/* Main College Name - Using header-like font */}
                        <div className={`transition-all duration-1000 ease-out delay-200 ${isActive
                            ? 'translate-y-0 opacity-100 blur-0'
                            : 'translate-y-8 opacity-0 blur-sm'
                          }`}>
                          <h1 className="
                            font-bold text-white 
                            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                            leading-tight md:leading-[1.1]
                            tracking-tight
                            drop-shadow-2xl
                            mb-2
                          ">
                            <span className="bg-gradient-to-r from-white via-blue-50 to-purple-100 bg-clip-text text-transparent">
                              {slide.mainTitle}
                            </span>
                          </h1>
                        </div>

                        {/* Autonomous Institute Badge */}
                        <div className={`transition-all duration-1000 ease-out delay-300 ${isActive
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                          }`}>
                          <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-400/30">
                            <span className="text-yellow-100 text-sm md:text-base font-semibold tracking-wide">
                              {slide.subtitle}
                            </span>
                          </div>
                        </div>

                        {/* Affiliation */}
                        <div className={`transition-all duration-1000 ease-out delay-400 ${isActive
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                          }`}>
                          <p className="text-blue-100 text-sm md:text-base font-medium tracking-wide drop-shadow-lg">
                            {slide.affiliation}
                          </p>
                        </div>

                        {/* Accreditations */}
                        <div className={`transition-all duration-1000 ease-out delay-500 ${isActive
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                          }`}>
                          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-6">
                            <div className="flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-400/30">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-100 text-xs md:text-sm font-medium">
                                {slide.accreditation.split(', ')[0]}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-blue-400/30">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                              <span className="text-blue-100 text-xs md:text-sm font-medium">
                                {slide.accreditation.split(', ')[1]}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* AICTE Approval */}
                        <div className={`transition-all duration-1000 ease-out delay-600 ${isActive
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-6 opacity-0'
                          }`}>
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping-slow"></div>
                            <span className="text-white/90 text-xs md:text-sm font-medium tracking-wider">
                              {slide.approval}
                            </span>
                          </div>
                        </div>

                        {/* Enhanced Animated Separator */}
                        <div className={`transition-all duration-1000 delay-700 ease-out ${isActive
                            ? 'opacity-100 scale-x-100'
                            : 'opacity-0 scale-x-0'
                          }`}>
                          <div className="flex items-center justify-center space-x-4">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400 rounded-full"></div>
                            <div className="flex space-x-1">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping-slow"></div>
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping-slow delay-300"></div>
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping-slow delay-600"></div>
                            </div>
                            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Professional Floating Elements */}
                    <div className={`absolute top-6 left-6 w-2 h-2 bg-blue-400/40 rounded-full transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 animate-float-3' : 'opacity-0'
                      }`}></div>
                    <div className={`absolute bottom-6 right-6 w-3 h-3 bg-purple-400/40 rounded-full transition-all duration-1000 delay-500 ${isActive ? 'opacity-100 animate-float-4' : 'opacity-0'
                      }`}></div>
                  </div>
                );
              }
            })}
          </div>

          {/* Enhanced Control Bar */}
          <div className={`flex justify-center items-center mt-2 p-3 max-w-6xl mx-auto transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>

            <button
              onClick={prevSlide}
              className={`${controlButtonClass} mr-3`}
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2 mx-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out focus:outline-none ${index === currentSlide
                      ? 'bg-blue-600 scale-125 shadow-lg shadow-blue-500/40'
                      : 'bg-gray-400 hover:bg-gray-500 hover:scale-110'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={togglePause}
              className={`${controlButtonClass} mx-3`}
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </button>

            <button
              onClick={nextSlide}
              className={`${controlButtonClass} ml-3`}
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -15px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
        }
        
        @keyframes float-2 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(-20px, 15px) scale(1.05);
          }
          66% {
            transform: translate(15px, -15px) scale(0.95);
          }
        }
        
        @keyframes float-3 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes float-4 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        .animate-float-1 {
          animation: float-1 12s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 14s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 4s ease-in-out infinite;
        }
        
        .animate-float-4 {
          animation: float-4 5s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;