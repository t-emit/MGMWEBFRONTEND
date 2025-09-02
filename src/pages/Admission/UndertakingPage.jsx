// src/pages/admissions/UndertakingPage.jsx

import React from 'react';

// Data for the undertaking links
const undertakingLinks = [
  { 
    text: "UNDERTAKING FOR STUDENT", 
    href: "http://mgmcen.ac.in/docs/UNDERTAKING FOR STUDENT.pdf",
    description: "Download the mandatory undertaking form for students."
  },
  { 
    text: "UNDERTAKING FOR PARENTS", 
    href: "http://mgmcen.ac.in/docs/UNDERTAKING FOR PARENTS.pdf",
    description: "Download the essential undertaking form for parents/guardians."
  },
  { 
    text: "AFFIDAVIT BY THE STUDENT ON ANTI-RAGGING", 
    href: "http://mgmcen.ac.in/docs/Anti-ragging declaration of students.doc 2020-21.pdf",
    description: "Access the anti-ragging affidavit, a crucial document for a safe campus environment."
  },
];

const UndertakingPage = () => {
  return (
    // Outer container for consistent page background and padding
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with other pages' h1 styling */}
        <header className="mb-8" aria-labelledby="undertaking-title">
          <h1 id="undertaking-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            Undertaking
          </h1>
        </header>

        {/* Main content section wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="Important Undertaking and Affidavit Documents">
          {/* Introductory paragraph for better context and SEO */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Below you will find important undertaking forms and affidavits required for students and parents. 
            These documents are essential for completing the admission process and ensuring adherence to our institutional policies, 
            especially concerning anti-ragging regulations. Please download and fill them out as instructed.
          </p>

          <div className="space-y-4"> {/* Adds vertical spacing between list items/hr */}
            {undertakingLinks.map((item, index) => (
              <React.Fragment key={index}>
                {/* Each link is within a list item for semantic correctness */}
                <ul className="list-none p-0 m-0"> {/* Remove default ul styling */}
                  <li>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-red-600 font-bold hover:underline block py-2 text-lg" // Styled for visibility and clickability
                      aria-label={`${item.text}: ${item.description}`} // Enhanced accessibility
                    >
                      {item.text}
                    </a>
                    {/* Optional: Add a small descriptive text if helpful */}
                    {item.description && <p className="text-sm text-gray-600 mt-1 ml-4">{item.description}</p>}
                  </li>
                </ul>
                {/* Add a horizontal rule between links, except after the last one */}
                {index < undertakingLinks.length - 1 && <hr className="border-gray-200 my-4" />}
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UndertakingPage;