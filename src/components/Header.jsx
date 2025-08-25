// components/Header.jsx
import { useState, useEffect, useRef } from 'react';

// IMPORTANT: For Font Awesome icons (fa-search, fa-home, etc.) to be visible,
// you need to include the Font Awesome library in your project.
// The easiest way is to add this line to the <head> section of your public/index.html file:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />


// Utility function to assign unique IDs to menu items for easier state management
const assignIds = (items, parentId = '') => {
  return items.map((item, index) => {
    const id = parentId ? `${parentId}-${index}` : String(index);
    const newItem = { ...item, id };
    if (item.children) {
      newItem.children = assignIds(item.children, id);
    }
    return newItem;
  });
};

// Define the complete menu structure
const rawMenuItems = [
  { name: "Home", link: "default.html", icon: "fa-home" },
  {
    name: "About",
    link: "#",
    icon: "fa-info-circle",
    children: [
      { name: "About Us", link: "about.html", icon: "fa-building" },
      { name: "Vision & Mission", link: "mission-objective.html", icon: "fa-bullseye" },
      { name: "Core values, Code of conduct & Ethics", link: "core-values-ethics.html", icon: "fa-gem" },
      { name: "Accreditations / Affiliations", link: "accreditations-affiliations.html", icon: "fa-award" },
      { name: "Chairman's Desk", link: "chairman-desk.html", icon: "fa-chair" },
      { name: "Director's Desk", link: "director-desk.html", icon: "fa-user-tie" },
      { name: "Courses Offered", link: "courses.html", icon: "fa-graduation-cap" },
      { name: "History", link: "history.html", icon: "fa-history" },
      { name: "Governing Council", link: "local-management-committee.html", icon: "fa-users" },
      { name: "Press Coverage", link: "press-coverage.html", icon: "fa-newspaper" },
      { name: "Location", link: "location.html", icon: "fa-map-marker-alt" },
      { name: "Service Rules", link: "service-rules.html", icon: "fa-file-contract" }
    ]
  },
//   {
//     name: "Campus",
//     link: "#",
//     icon: "fa-university",
//     children: [
//       { name: "Campus Info", link: "campus.html", icon: "fa-info" }
//     ]
//   },
  {
    name: "Academics",
    link: "#",
    icon: "fa-book",
    children: [
      { name: "Applied Science & Humanities", link: "applied-science-humanities/profile.html", icon: "fa-flask" },
      { name: "Civil Engineering", link: "civil-engineering/profile.html", icon: "fa-hard-hat" },
      { name: "Computer Science & Engineering", link: "computer-science-engineering/profile.html", icon: "fa-laptop-code" },
      { name: "Electronics & Telecommunication Engineering", link: "electronincs-telecommunication-engineering/profile.html", icon: "fa-microchip" },
      { name: "Information Technology", link: "information-technology/profile.html", icon: "fa-server" },
      { name: "Mechanical Engineering", link: "mechanical-engineering/profile.html", icon: "fa-cogs" },
      { name: "Artificial Intelligence and Machine Learning", link: "/Artifitalintalligance/profile.html", icon: "fa-brain" },
      { name: "Automation and Robotics", link: "Automation/profile.html", icon: "fa-robot" },
      { name: "Courses in Human Values & Professional Ethics", link: "courses-humanvalues-professionalethics/profile.html", icon: "fa-hands-helping" },
      { name: "Training and Placement Cell", link: "trainingandplacement/profile.html", icon: "fa-briefcase" },
      { name: "Innovation & Entrepreneurship Development Cell", link: "Innovation-Entrepreneurship-Development-Cell/profile.html", icon: "fa-lightbulb" },
      { name: "Research", link: "research/profile.html", icon: "fa-search" },
      { name: "Academic Calendar", link: "academic-calendar.html", icon: "fa-calendar-alt" },
    ]
  },
  {
    name: "Cells & Committees",
    link: "#",
    icon: "fa-users-cog",
    children: [
      { name: "Academic Cell", link: "cells-committees4d7b.html?section=AcademicCell", icon: "fa-chalkboard-teacher" },
      { name: "Admission Cell", link: "cells-committeesc1b1.html?section=AdmissionCell", icon: "fa-sign-in-alt" },
      { name: "Anti Ragging Squad", link: "cells-committees7af5.html?section=AntiRaggingSquad", icon: "fa-shield-alt" },
      { name: "Anti Ragging Committee", link: "cells-committeesb062.html?section=AntiRaggingCommittee", icon: "fa-user-shield" },
      { name: "CASERP Cell", link: "cells-committeesef6c.html?section=CASERPCell", icon: "fa-network-wired" },
      { name: "College Development Committee", link: "cells-committees5f13.html?section=CollegeDevelopmentCommittee", icon: "fa-chart-line" },
      { name: "Cultural Committee", link: "cells-committees5bfb.html?section=CulturalCommittee", icon: "fa-music" },
      { name: "Examination Cell", link: "cells-committees6df9.html?section=ExaminationCell", icon: "fa-file-alt" },
      { name: "Internal Complaint Committee - ICC (Women Grievance Redressal Committee)", link: "cells-committees297d.html?section=InternalComplaintCommittee", icon: "fa-female" },
      { name: "SC_ST Cell", link: "cells-committees4126.html?section=SC_STCell", icon: "fa-hands-helping" },
      { name: "Student Grievance Redressal Committee (SGRC)", link: "cells-committeescdab.html?section=StudentGrievanceRedressalCommittee", icon: "fa-comments" },
      { name: "Training and Placement Cell", link: "cells-committees8b75.html?section=TrainingAndPlacementCell", icon: "fa-briefcase" },
    ]
  },
  {
    name: "Admission",
    link: "#",
    icon: "fa-user-graduate",
    children: [
      { name: "Under Graduate (B. Tech)", link: "under-graduate.html", icon: "fa-graduation-cap" },
      { name: "Post Graduate (M. Tech)", link: "post-graduate.html", icon: "fa-mastercard" },
      { name: "Fee Structure", link: "fee-structure.html", icon: "fa-money-check-alt" },
      { name: "Student Information", link: "student-information.html", icon: "fa-user-circle" },
      { name: "Undertaking", link: "undertaking.html", icon: "fa-signature" },
      { name: "Information Brochure Academic Year 2025-26", link: "https://mgmcen.ac.in/pdf/InformationBrochure_2025-26.pdf", icon: "fa-book-open", target: "_blank" },
      { name: "VidyaLaxmi (Educational Loan) Portal", link: "https://www.vidyalakshmi.co.in/", icon: "fa-university", target: "_blank" },
    ]
  },
  {
    name: "Facilities",
    link: "#",
    icon: "fa-wrench",
    children: [
      { name: "Classrooms", link: "classrooms.html", icon: "fa-chalkboard" },
      { name: "Astronomy and Space Technology", link: "astronomy-space-technology.html", icon: "fa-star" },
      { name: "Hostels", link: "hostels.html", icon: "fa-bed" },
      { name: "Infrastructure", link: "infrastructure.html", icon: "fa-building" },
      { name: "Library", link: "library.html", icon: "fa-book" },
      { name: "Laboratories", link: "laboratories.html", icon: "fa-flask" },
      { name: "Sports", link: "sports.html", icon: "fa-running" },
      { name: "Remote Center", link: "remote-center.html", icon: "fa-satellite-dish" },
      { name: "Ekeeda", link: "https://ekeeda.com/", icon: "fa-external-link-alt", target: "_blank" },
    ]
  },
  {
    name: "Alumni",
    link: "#",
    icon: "fa-user-friends",
    children: [
      { name: "Alumni Registration", link: "alumni/registration.html", icon: "fa-user-plus" },
      { name: "Alumni Speaks", link: "alumni/speaks.html", icon: "fa-comment" },
      { name: "Esteemed Alumni", link: "esteemed-alumni.html", icon: "fa-star" },
    ]
  },
  {
    name: "Student Activities",
    link: "#",
    icon: "fa-running",
    children: [
      {
        name: "Academic",
        link: "#",
        icon: "fa-graduation-cap",
        children: [
          { name: "CESA", link: "cesa.html", icon: "fa-users" },
          { name: "CUC", link: "cuc.html", icon: "fa-users" },
          { name: "ETA", link: "eta.html", icon: "fa-users" },
          { name: "CSI / IEI", link: "csi.html", icon: "fa-users" },
          { name: "MESA", link: "mesa.html", icon: "fa-users" },
          { name: "ITSA", link: "itsa.html", icon: "fa-users" },
        ]
      },
      {
        name: "Co-curricular",
        link: "#",
        icon: "fa-paint-brush",
        children: [
          { name: "CAST Activity", link: "cast-activity.html", icon: "fa-theater-masks" },
          { name: "Open Source", link: "open-source.html", icon: "fa-code" },
          { name: "English Language Club", link: "english-language-club.html", icon: "fa-language" },
        ]
      },
      {
        name: "Sport",
        link: "#",
        icon: "fa-basketball-ball",
        children: [
          { name: "Achievements-Indoor", link: "indoor.html", icon: "fa-trophy" },
          { name: "Achievements-Outdoor", link: "outdoor.html", icon: "fa-medal" },
        ]
      },
      {
        name: "Cultural",
        link: "#",
        icon: "fa-music",
        children: [
          { name: "Aarohan", link: "aarohan.html", icon: "fa-microphone" },
          { name: "Jhankaar", link: "jhankaar.html", icon: "fa-drum" },
          { name: "Synergy", link: "synergy.html", icon: "fa-guitar" },
          { name: "Udaan", link: "udaan.html", icon: "fa-feather" },
        ]
      },
      {
        name: "Social",
        link: "#",
        icon: "fa-hands-helping",
        children: [
          { name: "NSS", link: "nss.html", icon: "fa-hands" },
          { name: "Tech Life", link: "tech-life.html", icon: "fa-mobile-alt" },
          { name: "MGM Helpline", link: "mgm-helpline.html", icon: "fa-phone-alt" },
          { name: "Unnat Bharat Abhiyan", link: "https://mgmcen.ac.in/pdf/UBA Report 10112024.pdf", icon: "fa-flag", target: "_blank" },
        ]
      },
      {
        name: "VISIOTECH",
        link: "#",
        icon: "fa-eye",
        children: [
          { name: "About us", link: "visiontech-aboutus.html", icon: "fa-info-circle" },
          { name: "Visiotech Poster", link: "visiontech-poster.html", icon: "fa-image" },
          { name: "Visiotech report 2023", link: "http://mgmcen.ac.in/docs/VISIOTECH 2023 WEBSITE.pdf", icon: "fa-file-pdf", target: "_blank" },
          { name: "VISIOTECH 2024", link: "http://www.visiotech2024.info/", icon: "fa-globe", target: "_blank" },
        ]
      },
      { name: "GDSC", link: "https://mgmcen.ac.in/pdf/GDSC_MRB_5Oct2024.pdf", icon: "fa-google", target: "_blank" },
    ]
  },
//   {
//     name: "Collaboration",
//     link: "#",
//     icon: "fa-handshake",
//     children: [
//       { name: "Academic", link: "academic-collaboration.html", icon: "fa-graduation-cap" },
//       { name: "Corporate & Industries", link: "corporate-industries.html", icon: "fa-industry" },
//     ]
//   },
  {
    name: "Download",
    link: "#",
    icon: "fa-download",
    children: [
      { name: "Current Advertisement", link: "download/current-advertisement.html", icon: "fa-bullhorn" },
      { name: "NIRF", link: "download/nirf.html", icon: "fa-chart-bar" },
      { name: "Fees Regulatory Authority", link: "download/shikshan-shulk-samiti.html", icon: "fa-money-bill-wave" },
      { name: "Audited Statements", link: "download/audited-statements.html", icon: "fa-file-invoice-dollar" },
      { name: "Tender", link: "download/tender-notice.html", icon: "fa-gavel" },
      { name: "Other", link: "download/other.html", icon: "fa-folder-open" },
    ]
  },
  { name: "Contact", link: "contact.html", icon: "fa-phone-alt" }
];

// Assign IDs once when the component is defined
const menuItemsWithIds = assignIds(rawMenuItems);

// Recursive MenuItem Component
const MenuItem = ({ item, level = 0, activeDropdownId, setActiveDropdownId, isMobile }) => {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = activeDropdownId && activeDropdownId.startsWith(item.id);
  const isDirectlyActive = activeDropdownId === item.id;

  const handleMouseEnter = () => {
    if (!isMobile && hasChildren) {
      setActiveDropdownId(item.id); // Open dropdown on hover
    }
  };

  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault(); // Prevent default link navigation for parent items
      setActiveDropdownId(prevId => prevId === item.id ? null : item.id); // Toggle dropdown on click
    }
  };

  const linkContent = (
    <>
      {item.icon && <i className={`fas ${item.icon} mr-2 text-sm w-4 text-center`}></i>}
      <span className="flex-1">{item.name}</span>
      {hasChildren && (
        <i
          className={`fas fa-chevron-${
            isDirectlyActive && isOpen ? 'up' : 'down'
          } text-xs ml-2 transition-transform duration-300 ${
            isDirectlyActive && isOpen ? 'rotate-180' : ''
          }`}
        ></i>
      )}
    </>
  );

  const linkClasses = `
    flex items-center w-full px-4 py-2 text-sm transition-all duration-300
    ${level === 0
      ? 'text-gray-800 font-semibold hover:text-blue-700'
      : 'text-gray-700 hover:text-blue-600'
    }
    ${isMobile
      ? 'hover:bg-blue-50 border-b border-gray-100'
      : 'hover:bg-gray-100 rounded-md'
    }
    ${isDirectlyActive ? 'text-blue-600 bg-blue-50' : ''}
  `;

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      // onMouseLeave for the entire nav bar is handled by the parent UL
    >
      <a
        href={item.link}
        target={item.target}
        rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
        className={linkClasses}
        onClick={handleClick}
      >
        {linkContent}
      </a>

      {hasChildren && (
        <ul
          className={`
            ${isMobile
              ? `bg-white pl-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[300px] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
                }`
              : `absolute mt-0 min-w-64 max-w-sm bg-white shadow-xl rounded-lg py-2 border border-gray-100 z-50 transition-all duration-300 origin-top-left
                 ${isDirectlyActive
                    ? 'opacity-100 visible translate-y-0 scale-100'
                    : 'opacity-0 invisible translate-y-2 scale-95 pointer-events-none'
                 }
                 ${level === 0 ? 'left-0' : 'left-full top-0'}` // Sub-sub menus open to the right
            }
          `}
          style={isMobile && !isOpen ? { maxHeight: 0 } : {}} // Explicitly set max-height for mobile transition
        >
          {item.children.map((child) => (
            <MenuItem
              key={child.id}
              item={child}
              level={level + 1}
              activeDropdownId={activeDropdownId}
              setActiveDropdownId={setActiveDropdownId}
              isMobile={isMobile}
            />
          ))}
        </ul>
      )}
    </li>
  );
};


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const headerRef = useRef(null); // Ref for the entire header to detect outside clicks

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery('');
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur(); // Blur the input after search
    }
    setIsSearchFocused(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdownId(null);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 w-full text-white transition-all duration-300 z-50 ${
      isScrolled
        ? 'bg-indigo-900 shadow-lg py-0'
        : 'bg-gradient-to-r from-indigo-900 to-blue-900 py-1'
    }`}>
      {/* Top section with logo and search */}
      <div className="container mx-auto px-4 py-2 md:px-6 md:py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="index.html" className="flex items-center gap-3 md:gap-4 group">
            <img
              src="/images/mgm2.webp" // Assuming logo.png is in your public/images folder
              alt="MGM College of Engineering Logo"
              className="h-10 md:h-14 w-auto transition-all duration-300 group-hover:scale-105 rounded-full"
            />
            <div className="flex flex-col text-white">
              <span className="text-lg md:text-xl font-bold group-hover:text-blue-200 transition-colors">
                MGM's College of Engineering
              </span>
              <span className="text-xs text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity">
                Affiliated to Dr. BATU, Approved by AICTE
              </span>
            </div>
          </a>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            {/* Search Bar - Desktop (Visible only on md screens and up) */}
            <form onSubmit={handleSearch} className="relative w-full md:w-64 lg:w-72 hidden md:block">
              <div className={`flex items-center bg-white rounded-full pl-4 pr-2 border-2 ${isSearchFocused ? 'border-blue-400 ring-2 ring-blue-400' : 'border-gray-200'} transition-all duration-300`}>
                <i className="fas fa-search text-gray-500 mr-2 text-base"></i>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full py-2 px-1 focus:outline-none text-gray-800 placeholder-gray-500 bg-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300 flex-shrink-0"
                  aria-label="Submit search"
                >
                  <i className="fas fa-arrow-right text-sm"></i>
                </button>
              </div>
            </form>

            <div className="hidden xl:block text-sm text-blue-100 text-center md:text-right max-w-xs">
              Affiliated to Dr. BATU. Loners, Accredited by NAAC(2024), NBA
              Accredited (2024-2027), Approved by AICTE, New Delhi.
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-4"></div>

      {/* Navigation section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-1">
          <div className="flex justify-between items-center h-14 lg:h-auto"> {/* Added height for mobile consistency */}
            <button
              className="lg:hidden text-indigo-900 p-4 focus:outline-none"
              onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                  setActiveDropdownId(null);
              }}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}></i>
            </button>

            {/* Mobile Search - Visible on screens smaller than md */}
            <div className="md:hidden flex-1 mx-2">
              <form onSubmit={handleSearch} className="relative w-full">
                <div className="flex items-center bg-gray-100 rounded-full pl-4 pr-2 border border-gray-200">
                  <i className="fas fa-search text-gray-500 mr-2 text-base"></i>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-2 px-1 focus:outline-none text-gray-800 bg-transparent placeholder-gray-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300 flex-shrink-0"
                    aria-label="Submit search"
                  >
                    <i className="fas fa-arrow-right text-sm"></i>
                  </button>
                </div>
              </form>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-1"
                // This onMouseLeave handles closing the entire dropdown tree
                // when the mouse leaves the main navigation bar, for desktop only.
                onMouseLeave={() => setActiveDropdownId(null)}
              >
                {menuItemsWithIds.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    activeDropdownId={activeDropdownId}
                    setActiveDropdownId={setActiveDropdownId}
                    isMobile={false}
                  />
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden bg-white absolute top-full left-0 w-full shadow-xl z-40 transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
          }`}>
            <ul className="py-2">
              {menuItemsWithIds.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  activeDropdownId={activeDropdownId}
                  setActiveDropdownId={setActiveDropdownId}
                  isMobile={true}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;