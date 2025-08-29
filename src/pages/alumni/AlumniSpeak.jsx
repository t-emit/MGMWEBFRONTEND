// src/pages/alumni/AlumniSpeak.jsx

import React from 'react';
import AlumniPageLayout from './AlumniPageLayout';

// --- DATA FOR VIDEOS ---
// IMPORTANT: Replace the placeholder 'video-filename.mp4' with your actual video filenames.
const videoData = [
  {
    src: '/videos/alumni-testimonials/prashantsingh-bhadoria.mp4',
    name: 'Prashantsingh Bhadoria',
  },
  {
    src: '/videos/alumni-testimonials/deepinder-singh-part1.mp4',
    name: 'Deepinder Singh - Part 1',
    title: 'Former Director, NeGD, Ministry of Electronics & IT',
  },
  {
    src: '/videos/alumni-testimonials/deepinder-singh-part2.mp4',
    name: 'Deepinder Singh - Part 2',
    title: 'Leveraging Voluntary Media Sabaticals for Social Media Evangelism & Activism',
  },
  {
    src: '/videos/alumni-testimonials/gaurav-anand.mp4',
    name: 'Gaurav Anand',
    title: 'General Manager Telecom, Wipro',
  },
  {
    src: '/videos/alumni-testimonials/sonal-sarda.mp4',
    name: 'Sonal Sarda',
    title: 'Freelance Corporate Trainer & Technical Writer',
  },
  {
    src: '/videos/alumni-testimonials/pavan-agrawal.mp4',
    name: 'Pavan Agrawal',
    title: 'Vice President & Global Head of IT, Wipro',
  },
  {
    src: '/videos/alumni-testimonials/mayank-bathija.mp4',
    name: 'Mayank Bathija',
    title: 'Technical Software Lead, SITA',
  },
];

// --- DATA FOR WRITTEN TESTIMONIALS ---
// IMPORTANT: Replace the placeholder 'photo-filename.jpg' with your actual photo filenames.
const testimonialData = [
  {
    image: '/images/alumni-testimonials/gurupreet-kaur.jpg',
    name: 'Gurpreet Kaur',
    details: 'B.E. (CSE), Software Technologist, Newyork, U.S.A.',
    quote: 'It has been a great honour studying at this institution with it\'s unforgettable moments. I always cherish them.',
  },
  {
    image: '/images/alumni-testimonials/gaurav-anand.jpg', // Use a different filename to avoid conflicts
    name: 'Gaurav Anand',
    details: 'B.E. (EXT), Teritory Manager, Wipro',
    quote: 'Studying in this August institution gave me the strong foundation and ingredients to be successful in life. I spent glorious years in this temple of learning.',
  },
  {
    image: '/images/alumni-testimonials/lt-shivanand.jpg',
    name: 'Lt. Shivanand Darbastwar',
    details: 'B.E.(ECT) Indian Navy',
    quote: 'I am graduate of MGM CEN of ECT branch. I am working in Indian Navy. I am proud of MGM CEN.',
  },
  {
    image: '/images/alumni-testimonials/narendrapal-singh.jpg',
    name: 'Narendrapal Singh Sidhu',
    details: 'B.E. (CSE) Indian oil, Panipat',
    quote: 'I thank you MGM CEN for contribution in the development of my career & personality & hence i can claim that MGM has big impact on my overall as a person & in my professional life.',
  },
    {
    image: '/images/alumni-testimonials/deepali-bhargava.jpg',
    name: 'Deepali Bhargava',
    details: ' B.E. (CSE) Consultant IT Services, MindTree Ltd. Bangalore',
    quote: 'MGM provided the perfect environment that helped me reach my goals, while at the same time triggering my learning curve to rise towards knowledge and creativity. The institution’s strength lies in its strong value systems, its Commitment in moulding futures of scores of students and providing a platform that helps every student attain his/her own personal goals. Personally, the education and experience that i gained at MGM helped me make an easy and smooth transition from being a student to taking on challenges in the corporate world.',
  },
  {
    image: '/images/alumni-testimonials/gaurav-kataria.jpg',
    name: 'Gaurav Kataria',
    details: ' B.E. (CSE) Group Manager HCL Tech. Ltd.Bengalore',
    quote: 'My College has given me so much that i just cant thank my stars enough to place me in this institution of studies & overall development.',
  },
  // Add the last two testimonials if you have their assets
];


const AlumniSpeak = () => {
  return (
    <AlumniPageLayout
      title="Alumni Speak"
      subtitle="Hear from our graduates who are making a difference in the world."
    >
      <div className="space-y-16">
        
        {/* Section 1: Event Gallery / Posters */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
            Event Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IMPORTANT: Replace the placeholder filenames below with your actual poster filenames */}
            <div className="bg-white p-2 rounded-lg shadow-lg border">
              <img 
                src="/images/alumni-posters/poster1.jpg" 
                alt="Congratulations Prashantsingh Bhadoria Poster" 
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
            <div className="bg-white p-2 rounded-lg shadow-lg border">
              <img 
                src="/images/alumni-posters/poster2.jpg" 
                alt="Alumni Collage Poster" 
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
                        <div className="bg-white p-2 rounded-lg shadow-lg border">
              <img 
                src="/images/alumni-posters/poster3.jpg" 
                alt="Alumni Collage Poster" 
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Video Testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
            Video Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoData.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border">
                <video src={video.src} controls className="w-full h-auto">
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 text-center">
                  <p className="font-bold text-gray-800">{video.name}</p>
                  {video.title && <p className="text-sm text-gray-600">{video.title}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Written Testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-200">
            Alumni Testimonials
          </h2>
          <div className="space-y-8">
            {testimonialData.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-start gap-6 border">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-indigo-200 flex-shrink-0 mx-auto sm:mx-0"
                />
                <div>
                  <h3 className="text-lg font-bold text-indigo-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.details}</p>
                  <blockquote className="italic text-gray-700 border-l-4 border-indigo-300 pl-4">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </AlumniPageLayout>
  );
};

export default AlumniSpeak;