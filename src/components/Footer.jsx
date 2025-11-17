// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs - requires installation

const Footer = () => {
  // --- MANUAL UPDATE REQUIRED: WEBSITE LAST UPDATED ON ---
  // For a pure front-end React app, the most reliable way to display
  // the "last updated" date is to manually update this string when
  // you make significant changes and re-deploy your website.
  const websiteLastUpdatedDate = "17/11/2025"; // <<<--- !!! YOU MUST UPDATE THIS DATE MANUALLY !!!

  // --- UNIQUE BROWSER VISITS (Client-Side Persistent Count) ---
  // This counts how many times *this specific browser* has visited your site,
  // once per new session. It is NOT a global total across all users.
  const [uniqueBrowserVisits, setUniqueBrowserVisits] = useState(0);

  useEffect(() => {
    // --- Initialize/Update Unique Browser Visits ---
    const VISITOR_ID_KEY = "mgm_unique_visitor_id";
    const BROWSER_VISIT_COUNT_KEY = "mgm_browser_visit_count";
    const SESSION_VISITED_FLAG_KEY = "mgm_session_visited_flag";

    // Get current count from localStorage or initialize
    let currentBrowserVisitCount = parseInt(
      localStorage.getItem(BROWSER_VISIT_COUNT_KEY) || "0",
      10
    );

    // Get unique visitor ID for this browser
    let visitorId = localStorage.getItem(VISITOR_ID_KEY);
    if (!visitorId) {
      // If no ID, this is a truly new browser, generate one
      visitorId = uuidv4(); // Generate a unique ID (requires 'uuid' package)
      localStorage.setItem(VISITOR_ID_KEY, visitorId);
    }

    // Check if this browser has already been counted for the current session
    // This prevents incrementing on page refresh within the same session,
    // and also mitigates double-runs of useEffect in React Strict Mode.
    const hasVisitedThisSession = sessionStorage.getItem(SESSION_VISITED_FLAG_KEY);

    if (!hasVisitedThisSession) {
      // If it's a new session for this browser, increment the count
      currentBrowserVisitCount += 1;
      localStorage.setItem(BROWSER_VISIT_COUNT_KEY, currentBrowserVisitCount.toString());
      sessionStorage.setItem(SESSION_VISITED_FLAG_KEY, "true"); // Mark session as visited
    }

    // Update the state with the latest count
    setUniqueBrowserVisits(currentBrowserVisitCount);

    // --- Cleanup function (optional, but good practice for effects) ---
    // In this specific case, no cleanup is strictly necessary as we're just setting values.
    // However, if you had event listeners or timers, you'd clean them up here.
    return () => {
      // For instance, if you wanted to remove the session flag if the component unmounts
      // (though typically we want it to persist for the session duration).
    };
  }, []); // Empty dependency array ensures this runs once per component mount

  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Your existing content for logo, description, social links */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/mgm2.webp" // Ensure this path is correct relative to your 'public' folder
                alt="MGM College Logo"
                className="h-12 w-auto rounded-full"
              />
              <span className="text-xl font-bold">
                MGM's College of Engineering
              </span>
            </div>
            <p className="mb-6 leading-relaxed">
              MGM's College of Engineering at Nanded was established in 1983,
              with the objective of imparting quality education in the field of
              Engineering and Technology.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-blue-900 transition-all"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-blue-900 transition-all"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-blue-900 transition-all"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-blue-900 transition-all"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-blue-900 transition-all"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"
                >
                  <i className="fas fa-chevron-right text-xs"></i> Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"
                >
                  <i className="fas fa-chevron-right text-xs"></i> About Us
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"
                >
                  <i className="fas fa-chevron-right text-xs"></i> Courses
                </a>
              </li>
              <li>
                <a
                  href="/admission/under-graduate"
                  className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"
                >
                  <i className="fas fa-chevron-right text-xs"></i> Admission
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"
                >
                  <i className="fas fa-chevron-right text-xs"></i> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">
              Important Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://dbatu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"
                >
                  <i className="fas fa-chevron-right text-xs"></i> DBATU
                </a>
              </li>
              <li>
                <a
                  href="https://www.aicte-india.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"
                >
                  <i className="fas fa-chevron-right text-xs"></i> AICTE
                </a>
              </li>
              <li>
                <a
                  href="https://www.ugc.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"
                >
                  <i className="fas fa-chevron-right text-xs"></i> UGC
                </a>
              </li>
              <li>
                <a
                  href="https://www.mhrd.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"
                >
                  <i className="fas fa-chevron-right text-xs"></i> MHRD
                </a>
              </li>
              <li>
                <a
                  href="https://www.maharashtra.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"
                >
                  <i className="fas fa-chevron-right text-xs"></i> Maharashtra Govt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <i className="fas fa-map-marker-alt text-yellow-500 mt-1"></i>
                <p>
                  MGM's College of Engineering, Nanded - 431605, Maharashtra,
                  India
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <i className="fas fa-phone-alt text-yellow-500"></i>
                <p>+91-2462-229001, 229002</p>
              </div>
              <div className="flex gap-4 items-center">
                <i className="fas fa-envelope text-yellow-500"></i>
                <p>principal@mgmcen.ac.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright on left, dates on right */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          {/* Copyright - Left Corner */}
          <p>
            &copy; {new Date().getFullYear()} MGM's College of Engineering,
            Nanded. All Rights Reserved.
          </p>

          {/* Last Updated & Visitors - Right Corner, stacked */}
          <div className="text-sm text-center md:text-right space-y-1">
            <span>
              Website last updated on :{" "}
              <span className="font-semibold">{websiteLastUpdatedDate}</span>
            </span>
            <br /> {/* Ensures a new line */}
            <span>
              Visitors :{" "}
              <span className="font-semibold">{uniqueBrowserVisits}</span>
            </span>
            {/* VERY IMPORTANT NOTE FOR "TOTAL VISITORS" */}
            {/* <p className="text-xs text-white/70 mt-1">
              (This count tracks visits from *this specific browser* only. For a global total, see steps below.)
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;