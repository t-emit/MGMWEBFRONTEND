// components/MissionVision.jsx
const MissionVision = () => {
  return (
    <section className="py-16 bg-white overflow-hidden"> {/* Increased padding, added overflow-hidden for good measure */}
      <div className="container mx-auto px-4 max-w-5xl"> {/* Slightly increased max-width for more content space */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12 relative tracking-tight"> {/* Larger, bolder title */}
          Our Vision & Mission
          <span className="absolute bottom-[-0.75rem] left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-yellow-500 rounded-full"></span> {/* Slightly thicker, wider underline */}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"> {/* Increased gap between cards */}
          {/* Vision Card */}
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-md border border-blue-200 transition-all duration-300 hover:shadow-lg hover:border-blue-300"> {/* Richer gradient, larger padding, rounded-2xl, enhanced hover */}
            <div className="flex items-center gap-4 mb-5"> {/* Increased gap, aligned items center */}
              <div className="bg-blue-200 group-hover:bg-blue-300 p-3 rounded-xl transition-colors duration-300 flex-shrink-0"> {/* Larger icon background, transition */}
                <svg className="w-6 h-6 text-blue-700 group-hover:text-blue-800" fill="currentColor" viewBox="0 0 20 20"> {/* Larger icon, stronger color */}
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-blue-900 group-hover:text-blue-800 transition-colors duration-300">Vision</h3> {/* Larger, bolder title */}
            </div>
            <p className="text-lg text-gray-800 leading-relaxed"> {/* Increased font size, better contrast */}
              To be one of the leading Institutions for Engineering education
              developing proficient Engineers with global acceptance in the
              service of mankind.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="group bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-md border border-amber-200 transition-all duration-300 hover:shadow-lg hover:border-amber-300"> {/* Richer gradient, larger padding, rounded-2xl, enhanced hover */}
            <div className="flex items-center gap-4 mb-5"> {/* Increased gap, aligned items center */}
              <div className="bg-amber-200 group-hover:bg-amber-300 p-3 rounded-xl transition-colors duration-300 flex-shrink-0"> {/* Larger icon background, transition */}
                <svg className="w-6 h-6 text-amber-700 group-hover:text-amber-800" fill="currentColor" viewBox="0 0 20 20"> {/* Larger icon, stronger color */}
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-blue-900 group-hover:text-amber-800 transition-colors duration-300">Mission</h3> {/* Larger, bolder title */}
            </div>
            <ul className="space-y-3"> {/* Increased space between list items */}
              {[
                "Providing quality Engineering education with multidisciplinary approach",
                "Developing globally competent Engineers solving real-life problems",
                "Inculcating professionalism, research, innovation and entrepreneurship",
                "Fostering collaboration with industry and academia",
                "Imparting employability skills with ethical and social values"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-base text-gray-800"> {/* Increased font size, better contrast */}
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0 group-hover:text-amber-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20"> {/* Larger icon */}
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;