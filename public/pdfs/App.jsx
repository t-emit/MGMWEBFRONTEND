import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import components that are always visible
import Header from './components/Header';
import Footer from './components/Footer';

// Import main pages
import HomePage from './pages/Home';

// Import About Us sub-pages
import AboutUsPage from './pages/about/AboutUsPage';
import VisionMissionPage from './pages/about/VisionMissionPage';
import CoreValuesEthicsPage from './pages/about/CoreValuesEthicsPage';
import AccreditationsAffiliationsPage from './pages/about/AccreditationsAffiliationsPage';
import ChairmansDeskPage from './pages/about/ChairmansDeskPage';
import DirectorsDeskPage from './pages/about/DirectorsDeskPage';
import CoursesOfferedPage from './pages/about/CoursesOfferedPage';
import HistoryPage from './pages/about/HistoryPage';
import GoverningCouncilPage from './pages/about/GoverningCouncilPage';
import PressCoveragePage from './pages/about/PressCoveragePage';
import LocationPage from './pages/about/LocationPage';
import ServiceRulesPage from './pages/about/ServiceRulesPage';

// ==========================================================
//IMPORT THE NEW  PAGES HERE
// ==========================================================
import EsteemedAlumni from './pages/alumni/EsteemedAlumni';
import AlumniRegistration from './pages/alumni/AlumniRegistration';
import AlumniSpeak from './pages/alumni/AlumniSpeak';
import CesaPage from './pages/students-corner/CesaPage';
import CucPage from './pages/students-corner/cucpage';
// ==========================================================

// Placeholder for other pages you'll create later
const PlaceholderPage = ({ title }) => (
  <div className="container mx-auto px-4 py-8 mt-28"> {/* mt-28 for header offset */}
    <h1 className="text-3xl font-bold mb-4 text-indigo-800">{title}</h1>
    <p className="text-gray-700">This is a placeholder page for {title}.</p>
    <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-6">
      <p>This page is not yet implemented with specific content.</p>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div className="container mx-auto px-4 py-8 mt-28">
    <h1 className="text-3xl font-bold mb-4 text-red-800">404 - Page Not Found</h1>
    <p className="text-gray-700">The page you are looking for does not exist.</p>
  </div>
);


const App = () => {
  return (
    <BrowserRouter>
      {/* Header is outside Routes because it's always present */}
      <Header />

      {/* Main content area. Add padding-top to prevent content from hiding under fixed header.
          Approximate height for the fixed header is around 112px (h-14 top bar + h-14 nav bar on desktop)
          Adjust pt-28 (112px) if your header height changes with different screen sizes or scroll.
      */}
      <main className=" bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* About Us Routes */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/vision-mission" element={<VisionMissionPage />} />
          <Route path="/core-values-ethics" element={<CoreValuesEthicsPage />} />
          <Route path="/accreditations-affiliations" element={<AccreditationsAffiliationsPage />} />
          <Route path="/chairman-desk" element={<ChairmansDeskPage />} />
          <Route path="/director-desk" element={<DirectorsDeskPage />} />
          <Route path="/courses" element={<CoursesOfferedPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/governing-council" element={<GoverningCouncilPage />} />
          <Route path="/press-coverage" element={<PressCoveragePage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/service-rules" element={<ServiceRulesPage />} />


                  {/* ========================================================== */}
          {/* ALUMNI ROUTE       */}
          {/* ========================================================== */}
          <Route path="/alumni/esteemed-alumni" element={<EsteemedAlumni />} />
          <Route path="/alumni/registration" element={<AlumniRegistration />} />
          <Route path="/alumni/speak" element={<AlumniSpeak />} />
          {/* ========================================================== */}

          {/* ROUTE FOR THE CESA PAGE */}
          <Route path="/students-corner/academic/cesa" element={<CesaPage />} />
          <Route path="/students-corner/academic/cuc" element={<CucPage />} />
          {/* Placeholder Routes for other main menu items (you'll replace these later) */}
          <Route path="/academics/*" element={<PlaceholderPage title="Academics Section" />} />
          <Route path="/research" element={<PlaceholderPage title="Research" />} />
          <Route path="/cells-committees/*" element={<PlaceholderPage title="Cells & Committees Section" />} />
          <Route path="/admission/*" element={<PlaceholderPage title="Admission Section" />} />
          <Route path="/facilities/*" element={<PlaceholderPage title="Facilities Section" />} />
          {/* <Route path="/alumni/*" element={<PlaceholderPage title="Alumni Section" />} /> */}
          <Route path="/students-corner/*" element={<PlaceholderPage title="Students Corner Section" />} />
          <Route path="/download/*" element={<PlaceholderPage title="Download Section" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />


          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer is outside Routes because it's always present */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;