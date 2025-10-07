// components/MissionVision.jsx
const MissionVision = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8 relative">
          Our Vision & Mission
          <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-500 rounded"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:border-blue-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900">Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              To be one of the leading Institutions for Engineering education
              developing proficient Engineers with global acceptance in the
              service of mankind.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-sm border border-amber-100 transition-all duration-300 hover:shadow-md hover:border-amber-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-amber-100 p-2 rounded-lg">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900">Mission</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Providing quality Engineering education with multidisciplinary approach",
                "Developing globally competent Engineers solving real-life problems",
                "Inculcating professionalism, research, innovation and entrepreneurship",
                "Fostering collaboration with industry and academia",
                "Imparting employability skills with ethical and social values"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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