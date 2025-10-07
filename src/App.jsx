import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import components that are always visible
import Header from './components/Header';
import Footer from './components/Footer';

// Import main pages
import HomePage from './pages/Home';
import ContactPage from './pages/contact';
import SearchResultsPage from './pages/search';

// Import About Us sub-pages
import AboutUsPage from './pages/about/AboutUsPage';
import CoreValuesEthicsPage from './pages/about/CoreValuesEthicsPage';
import ChairmansDeskPage from './pages/about/ChairmansDeskPage';
import DirectorsDeskPage from './pages/about/DirectorsDeskPage';
import CoursesOfferedPage from './pages/about/CoursesOfferedPage';
import HistoryPage from './pages/about/HistoryPage';
import GoverningCouncilPage from './pages/about/GoverningCouncilPage';
import PressCoveragePage from './pages/about/PressCoveragePage';
import CampusInfoPage from './pages/about/CampusInfoPage';
import ServiceRulesPage from './pages/about/ServiceRulesPage';

// Import Academic CSE pages
import ComputerScienceEngineeringPage from './pages/Academic/CSE/ComputerScienceEngineeringPage';
import ProgrammesPage from './pages/Academic/CSE/ProgrammesPage';
import TrainingPlacementPage from './pages/Academic/CSE/TrainingPlacementPage';
import CSEFacultyProfilePage from './pages/Academic/CSE/FacultyProfilePage';
import CSEFacultyDetailPage from './pages/Academic/CSE/FacultyDetailPage';
import CSELaboratoryPage from './pages/Academic/CSE/CSELaboratoryPage';
import CSELaboratoryDetailPage from './pages/Academic/CSE/CSELaboratoryDetailPage';
import CSEDepartmentalActivityPage from './pages/Academic/CSE/CSEDepartmentalActivityPage';
import CSIIEIPage from './pages/Academic/CSE/CSIIEIPage';
import AchievementsPage from './pages/Academic/CSE/AchievementsPage';

// Import Alumni & Students Corner
import EsteemedAlumni from './pages/alumni/EsteemedAlumni';
import AlumniRegistration from './pages/alumni/AlumniRegistration';
import AlumniSpeak from './pages/alumni/AlumniSpeak';

import CesaPage from './pages/students-corner/academic/CesaPage';
// import CucPage from './pages/students-corner/academic/CucPage';
import EtaPage from './pages/students-corner/academic/EtaPage';
import MesaPage from './pages/students-corner/academic/MesaPage';
import ItsaPage from './pages/students-corner/academic/Itsapage';

import CastActivityPage from './pages/students-corner/co-curricular/castActivity';
import EnglishLanguageClubPage from './pages/students-corner/co-curricular/EngLangClub';

import AchievementsIndoorPage from './pages/students-corner/sports/indoor';
import AchievementsOutdoorPage from './pages/students-corner/sports/outdoor';

import AarohanPage from './pages/students-corner/cultural/Arohan';
import JhankaarPage from './pages/students-corner/cultural/Jankar';
import SynergyPage from './pages/students-corner/cultural/Synergy';

import NssPage from './pages/Social/nss';
import TechLifePage from './pages/Social/techlife';
import MgmHelplinePage from './pages/Social/helpline';

import AboutVisiotechPage from './pages/visiotech/aboutvi';
import VisiotechPosterPage from './pages/visiotech/viposter';

import AcademicCollaborationPage from './pages/collab/acdemic';
import CorporateIndustriesPage from './pages/collab/corporate';

import CurrentAdvertisementPage from './pages/download/currentad';
import NirfPage from './pages/download/nirf';
import FeesRegulatoryAuthorityPage from './pages/download/fra';
import AuditedStatementsPage from './pages/download/AuditedS';
import TenderPage from './pages/download/Tender';
import AcademicCellPage from './pages/cells-committees/Academic Cell';
import AdmissionCellPage from './pages/cells-committees/AdmissionCellPage';
import AntiRaggingSquadPage from './pages/cells-committees/AntiRaggingSquadPage';
import AntiRaggingCommitteePage from './pages/cells-committees/AntiRaggingCommitteePage';
import CASERPCellPage from './pages/cells-committees/CASERPCellPage';
import CollegeDevelopmentCommitteePage from './pages/cells-committees/CollegeDevelopmentCommitteePage';
import CulturalCommitteePage from './pages/cells-committees/CulturalCommitteePage';
import InternalComplaintCommitteePage from './pages/cells-committees/InternalComplaintCommitteePage';
import ExaminationCellPage from './pages/cells-committees/ExaminationCellPage';
import SCSTCellPage from './pages/cells-committees/SCSTCellPage';
import StudentGrievanceRedressalCommitteePage from './pages/cells-committees/StudentGrievanceRedressalCommitteePage';
import TrainingAndPlacementCellPage from './pages/cells-committees/TrainingAndPlacementCellPage';
import UnderGraduatePage from './pages/Admission/UnderGraduatePage';
import PostGraduatePage from './pages/Admission/PostGraduatePage';
import UndertakingPage from './pages/Admission/UndertakingPage';
import VisionMissionPage from './pages/Academic/CSE/VisionMissionPage';

// for facilities page
import ClassroomsPage from './pages/facilities/ClassroomsPage';
import AstronomyPage from './pages/facilities/AstronomyPage';
import HostelsPage from './pages/facilities/HostelsPage';
import InfrastructurePage from './pages/facilities/InfrastructurePage';
import LibraryPage from './pages/facilities/LibraryPage';
import SportsPage from './pages/facilities/SportsPage';
import RemoteCenterPage from './pages/facilities/RemoteCentre';
import LaboratoriesPage from './pages/facilities/Laboratories';
import IQACPage from './pages/IQAC/IQACPage';
import NBACertificatePage from './pages/NBA/NBACertificatePage';

// ==========================================================
// Helper Placeholder Pages
// ==========================================================
const PlaceholderPage = ({ title }) => (
  <div className="container mx-auto px-4 py-8 mt-28">
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

      <main className="bg-gray-50 min-h-screen mt-[-100px]">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* About Us Routes */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/core-values-ethics" element={<CoreValuesEthicsPage />} />
          <Route path="/chairman-desk" element={<ChairmansDeskPage />} />
          <Route path="/director-desk" element={<DirectorsDeskPage />} />
          <Route path="/courses" element={<CoursesOfferedPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/governing-council" element={<GoverningCouncilPage />} />
          <Route path="/press-coverage" element={<PressCoveragePage />} />
          <Route path="/campus" element={<CampusInfoPage />} />
          <Route path="/service-rules" element={<ServiceRulesPage />} />

          {/* Facilities Routes */}
          <Route path="/facilities/classrooms" element={<ClassroomsPage />} />
          <Route path="/facilities/astronomy-space-technology" element={<AstronomyPage />} />
          <Route path="/facilities/hostels" element={<HostelsPage />} />
          <Route path="/facilities/infrastructure" element={<InfrastructurePage />} />
          <Route path="/facilities/library" element={<LibraryPage />} />
          <Route path="/facilities/sports" element={<SportsPage />} />
          <Route path="/facilities/remote-center" element={<RemoteCenterPage />} />
          <Route path="/facilities/laboratories" element={<LaboratoriesPage />} />

          {/* Alumni Routes */}
          <Route path="/alumni/esteemed-alumni" element={<EsteemedAlumni />} />
          <Route path="/alumni/registration" element={<AlumniRegistration />} />
          <Route path="/alumni/speaks" element={<AlumniSpeak />} />

          {/* Students Corner Routes */}
          <Route path="/students-corner/academic/cesa" element={<CesaPage />} />
          <Route path="/students-corner/academic/eta" element={<EtaPage />} />

          {/* ROUTE FOR THE CESA /cuc/eta PAGE */}
          <Route path="/students-corner/academic/cesa" element={<CesaPage />} />
          {/* <Route path="/students-corner/academic/cuc" element={<CucPage />} /> */}
          <Route path="/students-corner/academic/eta" element={<EtaPage />} />
          <Route path="/students-corner/academic/mesa" element={<MesaPage />} />
          <Route path="/students-corner/academic/itsa" element={<ItsaPage />} />

          {/*Co-curricilar pages*/}
          <Route path="/students-corner/co-curricular/cast-activity" element={<CastActivityPage />} />
          <Route path="/students-corner/co-curricular/english-language-club" element={<EnglishLanguageClubPage />} />

          {/* Sports Pages */}
          <Route path="/students-corner/sport/achievements-indoor" element={<AchievementsIndoorPage />} />
          <Route path="/students-corner/sport/achievements-outdoor" element={<AchievementsOutdoorPage />} />

          {/* Cultural Pages */}
          <Route path="/students-corner/cultural/aarohan" element={<AarohanPage />} />
          <Route path="/students-corner/cultural/jhankaar" element={<JhankaarPage />} />
          <Route path="/students-corner/cultural/synergy" element={<SynergyPage />} />

          {/* Social Pages */}
          <Route path="/students-corner/social/nss" element={<NssPage />} />
          <Route path="/students-corner/social/tech-life" element={<TechLifePage />} />
          <Route path="/students-corner/social/mgm-helpline" element={<MgmHelplinePage />} />

          <Route path="/students-corner/visiotech/about-us" element={<AboutVisiotechPage />} />
          <Route path="/students-corner/visiotech/visiotech-poster" element={<VisiotechPosterPage />} />

          <Route path="/collaboration/academic" element={<AcademicCollaborationPage />} />
          <Route path="/collaboration/corporate-industries" element={<CorporateIndustriesPage />} />

          <Route path="/download/current-advertisement" element={<CurrentAdvertisementPage />} />
          <Route path="/download/nirf" element={<NirfPage />} />
          <Route path="/download/fees-regulatory-authority" element={<FeesRegulatoryAuthorityPage />} />
          <Route path="/download/audited-statements" element={<AuditedStatementsPage />} />
          <Route path="/download/tender" element={<TenderPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/search" element={<SearchResultsPage />} />

          {/* Placeholder Routes for other main menu items (you'll replace these later) */}
          {/* STUDENTS CORNER ROUTES */}
          <Route path="/student-activities/academic/cesa" element={<CesaPage />} />
          {/* <Route path="/student-activities/academic/cuc" element={<CucPage />} /> */}
          {/* Add other specific student-activities routes here as they are developed */}


          {/* ACADEMICS ROUTES (Specific CSE Department) */}
          {/* Academics Routes (CSE Department) */}
          <Route path="/academics/computer-science-engineering" element={<ComputerScienceEngineeringPage />} />
          <Route path="/academics/computer-science-engineering/vision-mission" element={<VisionMissionPage />} />
          <Route path="/academics/computer-science-engineering/programmes" element={<ProgrammesPage />} />
          <Route path="/academics/computer-science-engineering/training-placement" element={<TrainingPlacementPage />} />
          <Route path="/academics/computer-science-engineering/faculty" element={<CSEFacultyProfilePage />} />
          <Route path="/academics/computer-science-engineering/faculty/:facultyId" element={<CSEFacultyDetailPage />} />
          <Route path="/academics/computer-science-engineering/labs" element={<CSELaboratoryPage />} />
          <Route path="/academics/computer-science-engineering/labs/:labId" element={<CSELaboratoryDetailPage />} />
          <Route path="/academics/computer-science-engineering/achievements" element={<AchievementsPage />} />
          <Route path="/academics/computer-science-engineering/activities" element={<CSEDepartmentalActivityPage />} />
          {/* <Route path="/academics/computer-science-engineering/cuc" element={<CUCPage />} /> */}
          <Route path="/academics/computer-science-engineering/csi-iei" element={<CSIIEIPage />} />

          {/* Placeholders */}
          <Route path="/academics/computer-science-engineering/research-publication" element={<PlaceholderPage title="CSE Research & Publication" />} />
          <Route path="/academics/computer-science-engineering/downloads" element={<PlaceholderPage title="CSE Downloads" />} />
          <Route path="/academics/computer-science-engineering/resources" element={<PlaceholderPage title="CSE Resources" />} />

          {/* Generic placeholder for any other /academics/... routes not specifically defined above */}
          {/* Keep this generic route LAST in the /academics group */}
          <Route path="/academics/*" element={<PlaceholderPage title="Academics Section" />} />

          {/* Other Main Menu Placeholders */}
          <Route path="/research" element={<PlaceholderPage title="Central Research" />} />

          {/* IQACPage */}
          <Route path="/iqac" element={<IQACPage />} />



          <Route path="/cells-committees/academic-cell" element={<AcademicCellPage />} />
          <Route path="/cells-committees/admission-cell" element={<AdmissionCellPage />} />
          <Route path="/cells-committees/anti-ragging-squad" element={<AntiRaggingSquadPage />} />
          <Route path="/cells-committees/anti-ragging-committee" element={<AntiRaggingCommitteePage />} />
          <Route path="/cells-committees/caserp-cell" element={<CASERPCellPage />} />
          <Route path="/cells-committees/college-development-committee" element={<CollegeDevelopmentCommitteePage />} />
          <Route path="/cells-committees/cultural-committee" element={<CulturalCommitteePage />} />
          <Route path="/cells-committees/examination-cell" element={<ExaminationCellPage />} />
          <Route path="/cells-committees/internal-complaint-committee" element={<InternalComplaintCommitteePage />} />
          <Route path="/cells-committees/sc-st-cell" element={<SCSTCellPage />} />
          <Route path="/cells-committees/student-grievance-redressal-committee" element={<StudentGrievanceRedressalCommitteePage />} />
          <Route path="/cells-committees/training-placement-cell" element={<TrainingAndPlacementCellPage />} />



          <Route path="/admission/under-graduate" element={<UnderGraduatePage />} />
          <Route path="/admission/post-graduate" element={<PostGraduatePage />} />
          <Route path="/admission/fee-structure" element={<PlaceholderPage title="Admission Section" />} />
          <Route path="/admission/undertaking" element={<UndertakingPage />} />

          {/* nba  */}
          <Route path="/nba" element={<NBACertificatePage />} />



          <Route path="/facilities/*" element={<PlaceholderPage title="Facilities Section" />} />
          <Route path="/alumni/*" element={<PlaceholderPage title="Alumni Section" />} />
          <Route path="/students-corner/*" element={<PlaceholderPage title="Students Corner Section" />} />
          <Route path="/download/*" element={<PlaceholderPage title="Download Section" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
