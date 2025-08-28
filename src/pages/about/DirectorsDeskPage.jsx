import React from 'react';

const DirectorsDeskPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 pt-32 pb-24 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-0 right-0 -mr-40 mt-10 opacity-20">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M45.1,-58.2C63.3,-47.9,85.5,-41.8,93.5,-27.6C101.5,-13.4,95.4,8.9,83.1,25.9C70.8,42.9,52.4,54.6,33.6,62.3C14.8,70,-4.5,73.7,-20.5,68.3C-36.5,62.9,-49.2,48.4,-59.6,31.5C-70,14.6,-78.1,-4.7,-73.8,-20.9C-69.5,-37.1,-52.8,-50.2,-36.5,-61.2C-20.2,-72.2,-4.3,-81.1,8.6,-77.9C21.5,-74.7,33.1,-59.4,45.1,-58.2Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Director's Desk
            </h1>
            <p className="text-xl text-blue-100 opacity-90 mb-8">
              A message from our esteemed Director, outlining academic excellence and student development.
            </p>
            <div className="w-20 h-1 bg-indigo-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Director Profile Section */}
            <div className="md:w-2/5 bg-gradient-to-b from-blue-50 to-indigo-50 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img
                    alt="Dr. Geeta S. Lathkar, Director"
                    className="w-full h-auto"
                    src="images/director-img.jpg"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">
                    Dr. Geeta S. Lathkar
                  </h3>
                  <p className="text-lg text-indigo-600 font-medium">Director</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="w-10 h-1 bg-indigo-400 rounded-full"></div>
                    <div className="w-4 h-1 bg-indigo-400 rounded-full"></div>
                    <div className="w-10 h-1 bg-indigo-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Institute's Mission</h4>
                <p className="text-gray-600 text-sm">
                  Bringing out the best in students for their total personality development
                </p>
              </div>
            </div>

            {/* Message Content Section */}
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-indigo-800 mb-4 relative pb-3">
                  Message from the Director
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-200 rounded-full"></span>
                </h2>
                <p className="text-gray-500 text-sm mb-2">A Personal Message</p>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="relative pl-6 border-l-2 border-indigo-100">
                  <span className="absolute top-0 left-0 text-indigo-400 text-2xl font-serif">"</span>
                  Being associated with this Institute since last 35 years and being the Principal, this institute carries a very special place in my heart.
                  Recognized as one of the best options to go for engineering education, Mahatma Gandhi Missions College of Engineering, Nanded has its own status in the institutions of Engineering in this region.
                </p>

                <p>
                  We not only cater for engineering education but the purpose is to bring out the best in the students in the interest of their total personality development to contribute to their profession and society at large.
                </p>

                <p>
                  The Institute caters for Under Graduate education for Civil, Computer, Mechanical, Electronics & Telecommunication & Information Technology with six post graduate courses. The Research Centre in Mechanical & Computer Engineering provides the reinforcement for building the career of the engineers.
                </p>

                <p>
                  Our alumni having placed in the top organizations world over speaks itself about the quality of education here. Various alumni meets organized in India and USA gave us immense satisfaction to be the part of the career development of these top performers. Our management with the team of teaching faculty supporting & non-teaching staff are all happy to be the launching pad for these shining stars in global scenario.
                </p>

                <p>
                  The process of education is ever improving phenomenon. Increasing technological advancement and changing market forces put forward the challenges for the competence expected of an engineer and hence the engineering education. Declared non employability of engineering graduates speaks loads about the improvements to be brought in the education process.
                </p>

                <p>
                  Journey is unending. Everywhere an 'edge over' element is to be introduced giving competitive advantage to the students and we always keep exploring new ideas improving teaching-learning process offered in our Institute. Being aware of the fact that improvements have no end and perfection is no destination. It's the continues journey. I have tried to put this in one of my poems.... Exploring new dimensions of progress.
                </p>

                {/* Poem Image Section */}
                <div className="bg-blue-50 p-6 rounded-lg my-8 text-center">
                  <img
                    alt="Poem"
                    src="images/14112016123417-Poem.jpg"
                    className="mx-auto block w-auto max-w-full h-auto rounded-lg shadow-md"
                    style={{ maxHeight: '575px' }}
                  />
                  <p className="mt-4 text-blue-800 italic">Exploring new dimensions of progress</p>
                </div>

                <p className="text-center text-indigo-700 font-medium">
                  - And the journey goes on.... and.... on
                </p>

                <p>
                  I am always happy to welcome the new expecting faces joining the Institute, taking care of the budding engineers and still more happier for sending the trained engineers from the Institute to the outside world over with flying colours at a new potential capable for positive contribution to their profession and society at large. It is aptly said....
                </p>

                <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 my-6">
                  <p className="text-center italic text-indigo-700 font-medium">
                    "Ships are safer in harbour - but they are not meant for it"
                  </p>
                </div>

                <p>
                  And the students going out as engineers prove this attaining new horizons of success... with their achievements making us feel proud to be part of their development.
                  With the existence for more than 30 years & experience of the team, we always see to it that, for our students studying here becomes a unique experience. Dear students we promise for the best possible efforts... After all the very purpose of our existence is...
                </p>

                <div className="text-center my-8">
                  <p className="font-bold text-indigo-800 text-xl mb-2">
                    "To bring out the best in you"
                  </p>
                  <div className="w-16 h-1 bg-indigo-400 rounded-full mx-auto"></div>
                </div>

                {/* Signature */}
                <div className="mt-12 pt-8 border-t border-gray-100 text-right">
                  <p className="text-gray-700 font-semibold">- Dr. Mrs. Geeta Lathkar</p>
                  <p className="text-gray-500 text-sm">Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default DirectorsDeskPage;