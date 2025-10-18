// src/pages/TNP/MajorRecruitersPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tnpTabs, majorRecruitersData } from './tnpConstants';

const MajorRecruitersPage = () => {
  const location = useLocation();
  const { introduction, recruitersPdf, images, prominentRecruitersImage, glanceImages, opportunityImages } = majorRecruitersData;

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Major Recruiters</h1>
        <p className="text-xl opacity-90">Connecting our talent with leading industries.</p>
      </div>

      {/* T&P Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md p-2">
        <div className="flex flex-wrap gap-2 justify-center">
          {tnpTabs.map((tab) => (
            <Link key={tab.name} to={tab.path} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === tab.path ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : 'text-gray-700 hover:bg-gray-50 border border-gray-200'}`}>
              {tab.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4">
          Our Valued Partners
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8 text-justify">
          {introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* PDF Viewer */}
        <div className="mb-10">
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">Recruiters List</h3>
            <div className="w-full h-96 border rounded-lg overflow-hidden shadow-md">
                <iframe 
                    src={recruitersPdf} 
                    title="Major Recruiters PDF"
                    className="w-full h-full"
                >
                    <p>Your browser does not support PDFs. <a href={recruitersPdf}>Download the PDF</a> instead.</p>
                </iframe>
            </div>
        </div>

        {/* Image Sections */}
        <div className="space-y-12">
            {images.map((img, index) => (
                <img key={index} src={img.src} alt={img.alt} className="w-full rounded-lg shadow-md border" />
            ))}
            
            <div>
                <h3 className="text-2xl font-bold text-indigo-800 my-6">Our Prominent Recruiters:</h3>
                <img src={prominentRecruitersImage.src} alt={prominentRecruitersImage.alt} className="w-full rounded-lg shadow-md border" />
            </div>
            
            <hr className="my-8" />

            <div>
                <h3 className="text-2xl font-bold text-indigo-800 my-6">Placements at a Glance:</h3>
                {glanceImages.map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} className="w-full rounded-lg shadow-md border mb-4" />
                ))}
            </div>

            <hr className="my-8" />
            
            <div>
                {opportunityImages.map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} className="w-full rounded-lg shadow-md border mb-4" />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default MajorRecruitersPage;