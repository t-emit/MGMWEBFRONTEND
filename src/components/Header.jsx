// components/Header.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation for active link styling

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

// Define the complete menu structure with updated links for React Router
const rawMenuItems = [
  { name: "Home", link: "/", icon: "fa-home" }, // Updated to "/"
  {
    name: "About",
    link: "#",
    icon: "fa-info-circle",
    children: [
      { name: "About Us", link: "/about-us", icon: "fa-building" }, // Updated
      { name: "Vision & Mission", link: "/vision-mission", icon: "fa-bullseye" }, // Updated
      { name: "Core values, Code of conduct & Ethics", link: "/core-values-ethics", icon: "fa-gem" }, // Updated
      { name: "Accreditations / Affiliations", link: "/accreditations-affiliations", icon: "fa-award" }, // Updated
      { name: "Chairman's Desk", link: "/chairman-desk", icon: "fa-chair" }, // Updated
      { name: "Director's Desk", link: "/director-desk", icon: "fa-user-tie" }, // Updated
      { name: "Courses Offered", link: "/courses", icon: "fa-graduation-cap" }, // Updated
      { name: "History", link: "/history", icon: "fa-history" }, // Updated
      { name: "Governing Council", link: "/governing-council", icon: "fa-users" }, // Updated
      { name: "Press Coverage", link: "/press-coverage", icon: "fa-newspaper" }, // Updated
      { name: "Location", link: "/location", icon: "fa-map-marker-alt" }, // Updated
      { name: "Service Rules", link: "/service-rules", icon: "fa-file-contract" } // Updated
    ]
  },
  {
    name: "Academics",
    link: "#",
    icon: "fa-book",
    children: [
      { name: "Applied Science & Humanities", link: "/academics/applied-science-humanities", icon: "fa-flask" },
      { name: "Civil Engineering", link: "/academics/civil-engineering", icon: "fa-hard-hat" },
      { name: "Computer Science & Engineering", link: "/academics/computer-science-engineering", icon: "fa-laptop-code" },
      { name: "Electronics & Telecommunication Engineering", link: "/academics/electronincs-telecommunication-engineering", icon: "fa-microchip" },
      { name: "Information Technology", link: "/academics/information-technology", icon: "fa-server" },
      { name: "Mechanical Engineering", link: "/academics/mechanical-engineering", icon: "fa-cogs" },
      { name: "Artificial Intelligence and Machine Learning", link: "/academics/artificial-intelligence-machine-learning", icon: "fa-brain" },
      { name: "Academic Calendar", link: "/academics/academic-calendar", icon: "fa-calendar-alt" },
    ]
  },
  { name: "Research", link: "/research", icon: "fa-search" },

  {
    name: "Cells & Committees",
    link: "#",
    icon: "fa-users-cog",
    children: [
      { name: "Academic Cell", link: "/cells-committees/academic-cell", icon: "fa-chalkboard-teacher" },
      { name: "Admission Cell", link: "/cells-committees/admission-cell", icon: "fa-sign-in-alt" },
      { name: "Anti Ragging Squad", link: "/cells-committees/anti-ragging-squad", icon: "fa-shield-alt" },
      { name: "Anti Ragging Committee", link: "/cells-committees/anti-ragging-committee", icon: "fa-user-shield" },
      { name: "CASERP Cell", link: "/cells-committees/caserp-cell", icon: "fa-network-wired" },
      { name: "College Development Committee", link: "/cells-committees/college-development-committee", icon: "fa-chart-line" },
      { name: "Cultural Committee", link: "/cells-committees/cultural-committee", icon: "fa-music" },
      { name: "Examination Cell", link: "/cells-committees/examination-cell", icon: "fa-file-alt" },
      { name: "Internal Complaint Committee - ICC (Women Grievance Redressal Committee)", link: "/cells-committees/internal-complaint-committee", icon: "fa-female" },
      { name: "SC_ST Cell", link: "/cells-committees/sc-st-cell", icon: "fa-hands-helping" },
      { name: "Student Grievance Redressal Committee (SGRC)", link: "/cells-committees/student-grievance-redressal-committee", icon: "fa-comments" },
      { name: "Training and Placement Cell", link: "/cells-committees/training-placement-cell", icon: "fa-briefcase" },
    ]
  },
  {
    name: "Admission",
    link: "#",
    icon: "fa-user-graduate",
    children: [
      { name: "Under Graduate (B. Tech)", link: "/admission/under-graduate", icon: "fa-graduation-cap" },
      { name: "Post Graduate (M. Tech)", link: "/admission/post-graduate", icon: "fa-mastercard" },
      { name: "Fee Structure", link: "/admission/fee-structure", icon: "fa-money-check-alt" },
      { name: "Student Information", link: "/admission/student-information", icon: "fa-user-circle" },
      { name: "Undertaking", link: "/admission/undertaking", icon: "fa-signature" },
      { name: "Information Brochure Academic Year 2025-26", link: "https://mgmcen.ac.in/pdf/InformationBrochure_2025-26.pdf", icon: "fa-book-open", target: "_blank" },
      { name: "VidyaLaxmi (Educational Loan) Portal", link: "https://www.vidyalakshmi.co.in/", icon: "fa-university", target: "_blank" },
    ]
  },
  {
    name: "Facilities",
    link: "#",
    icon: "fa-wrench",
    children: [
      { name: "Classrooms", link: "/facilities/classrooms", icon: "fa-chalkboard" },
      { name: "Astronomy and Space Technology", link: "/facilities/astronomy-space-technology", icon: "fa-star" },
      { name: "Hostels", link: "/facilities/hostels", icon: "fa-bed" },
      { name: "Infrastructure", link: "/facilities/infrastructure", icon: "fa-building" },
      { name: "Library", link: "/facilities/library", icon: "fa-book" },
      { name: "Laboratories", link: "/facilities/laboratories", icon: "fa-flask" },
      { name: "Sports", link: "/facilities/sports", icon: "fa-running" },
      { name: "Remote Center", link: "/facilities/remote-center", icon: "fa-satellite-dish" },
      { name: "Ekeeda", link: "https://ekeeda.com/", icon: "fa-external-link-alt", target: "_blank" },
    ]
  },
  {
    name: "Alumni",
    link: "#",
    icon: "fa-user-friends",
    children: [
      { name: "Alumni Registration", link: "/alumni/registration", icon: "fa-user-plus" },
      { name: "Alumni Speaks", link: "/alumni/speaks", icon: "fa-comment" },
      { name: "Esteemed Alumni", link: "/alumni/esteemed-alumni", icon: "fa-star" },
    ]
  },
  {
    name: "Students Corner",
    link: "#",
    icon: "fa-running",
    children: [
      {
        name: "Academic",
        link: "#",
        icon: "fa-graduation-cap",
        children: [
          { name: "CESA", link: "/students-corner/academic/cesa", icon: "fa-users" },
          { name: "CUC", link: "/students-corner/academic/cuc", icon: "fa-users" },
          { name: "ETA", link: "/students-corner/academic/eta", icon: "fa-users" },
          { name: "CSI / IEI", link: "/students-corner/academic/csi", icon: "fa-users" },
          { name: "MESA", link: "/students-corner/academic/mesa", icon: "fa-users" },
          { name: "ITSA", link: "/students-corner/academic/itsa", icon: "fa-users" },
        ]
      },
      {
        name: "Co-curricular",
        link: "#",
        icon: "fa-paint-brush",
        children: [
          { name: "CAST Activity", link: "/students-corner/co-curricular/cast-activity", icon: "fa-theater-masks" },
          { name: "Open Source", link: "/students-corner/co-curricular/open-source", icon: "fa-code" },
          { name: "English Language Club", link: "/students-corner/co-curricular/english-language-club", icon: "fa-language" },
        ]
      },
      {
        name: "Sport",
        link: "#",
        icon: "fa-basketball-ball",
        children: [
          { name: "Achievements-Indoor", link: "/students-corner/sport/achievements-indoor", icon: "fa-trophy" },
          { name: "Achievements-Outdoor", link: "/students-corner/sport/achievements-outdoor", icon: "fa-medal" },
        ]
      },
      {
        name: "Cultural",
        link: "#",
        icon: "fa-music",
        children: [
          { name: "Aarohan", link: "/students-corner/cultural/aarohan", icon: "fa-microphone" },
          { name: "Jhankaar", link: "/students-corner/cultural/jhankaar", icon: "fa-drum" },
          { name: "Synergy", link: "/students-corner/cultural/synergy", icon: "fa-guitar" },
          { name: "Udaan", link: "/students-corner/cultural/udaan", icon: "fa-feather" },
        ]
      },
      {
        name: "Social",
        link: "#",
        icon: "fa-hands-helping",
        children: [
          { name: "NSS", link: "/students-corner/social/nss", icon: "fa-hands" },
          { name: "Tech Life", link: "/students-corner/social/tech-life", icon: "fa-mobile-alt" },
          { name: "MGM Helpline", link: "/students-corner/social/mgm-helpline", icon: "fa-phone-alt" },
          { name: "Unnat Bharat Abhiyan", link: "https://mgmcen.ac.in/pdf/UBA Report 10112024.pdf", icon: "fa-flag", target: "_blank" },
        ]
      },
      {
        name: "VISIOTECH",
        link: "#",
        icon: "fa-eye",
        children: [
          { name: "About us", link: "/students-corner/visiotech/about-us", icon: "fa-info-circle" },
          { name: "Visiotech Poster", link: "/students-corner/visiotech/visiotech-poster", icon: "fa-image" },
          { name: "Visiotech report 2023", link: "http://mgmcen.ac.in/docs/VISIOTECH 2023 WEBSITE.pdf", icon: "fa-file-pdf", target: "_blank" },
          { name: "VISIOTECH 2024", link: "http://www.visiotech2024.info/", icon: "fa-globe", target: "_blank" },
        ]
      },
      { name: "GDSC", link: "https://mgmcen.ac.in/pdf/GDSC_MRB_5Oct2024.pdf", icon: "fa-google", target: "_blank" },
    ]
  },
  {
    name: "Download",
    link: "#",
    icon: "fa-download",
    children: [
      { name: "Current Advertisement", link: "/download/current-advertisement", icon: "fa-bullhorn" },
      { name: "NIRF", link: "/download/nirf", icon: "fa-chart-bar" },
      { name: "Fees Regulatory Authority", link: "/download/fees-regulatory-authority", icon: "fa-money-bill-wave" },
      { name: "Audited Statements", link: "/download/audited-statements", icon: "fa-file-invoice-dollar" },
      { name: "Tender", link: "/download/tender", icon: "fa-gavel" },
      { name: "Other", link: "/download/other", icon: "fa-folder-open" },
    ]
  },
  { name: "Contact", link: "/contact", icon: "fa-phone-alt" } // Updated to "/contact"
];

// Assign IDs once when the component is defined
const menuItemsWithIds = assignIds(rawMenuItems);

// Recursive MenuItem Component
const MenuItem = ({ item, level = 0, activeDropdownPath, updateActiveDropdownPath, isMobile, setIsMenuOpen }) => {
  const hasChildren = item.children && item.children.length > 0;
  const location = useLocation(); // To get current path for active styling
  
  // A menu item is considered 'open' for desktop hover if its ID is in the active path
  const isOpenOnDesktop = !isMobile && activeDropdownPath.includes(item.id);
  // For mobile, an item is 'currently clicked' if it's the specific item at its level in the path
  const isCurrentlyClickedOnMobile = isMobile && activeDropdownPath[level] === item.id;

  // Determine if the current item (or its direct child) is the active route
  const isActiveRoute = item.link && (location.pathname === item.link || (item.link === '/' && location.pathname === '/'));
  // For parent items, check if any of its children's links are active
  const isParentActive = hasChildren && item.children.some(child => {
    // Check direct children
    if (location.pathname === child.link) return true;
    // Recursively check deeper children if needed (for simplicity, we'll just check direct child links against current path)
    // A more robust solution might involve passing 'isActive' down recursively or checking `location.pathname.startsWith(parentPath)`
    return false; // Or implement recursive check if necessary
  });

  const handleMouseEnter = () => {
    if (!isMobile && hasChildren) {
      updateActiveDropdownPath(item.id, level, 'hover');
    }
  };

  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault(); // Prevent default navigation for parent items
      updateActiveDropdownPath(item.id, level, 'toggle'); // Toggle visibility on click (mobile)
    }

    if (!hasChildren) { // If a leaf item is clicked
      // If it's on mobile, close the entire mobile menu
      if (isMobile) {
        setIsMenuOpen(false);
      }
      // Always clear active dropdown path for leaf nodes on any device after navigation
      updateActiveDropdownPath(null, -1, 'clear');
      // Let the default link navigation happen through React Router's <Link>
    }
  };

  // Determine chevron icon direction based on active state
  const isDropdownActive = isCurrentlyClickedOnMobile || isOpenOnDesktop;
  const chevronIcon = isDropdownActive ? 'fa-chevron-up' : 'fa-chevron-down';

  const linkContent = (
    <>
      {item.icon && <i className={`fas ${item.icon} mr-1 text-sm w-4 text-center`}></i>}
      <span className="flex-1 whitespace-nowrap">{item.name}</span>
      {hasChildren && (
        <i
          className={`fas ${chevronIcon} text-xs ml-2 transition-transform duration-300 ${
            isDropdownActive ? 'rotate-180' : ''
          }`}
        ></i>
      )}
    </>
  );

  // Base classes for all links
  const linkClasses = [
    'flex items-center w-full py-2 text-sm transition-all duration-300',
  ];

  if (isMobile) {
    linkClasses.push('px-4 border-b border-gray-100');
    linkClasses.push('hover:bg-blue-50');
    if (isCurrentlyClickedOnMobile || isActiveRoute || isParentActive) { // Active state on mobile
      linkClasses.push('bg-blue-50 text-blue-600');
    } else if (level === 0) {
      linkClasses.push('text-gray-800 font-semibold');
    } else {
      linkClasses.push('text-gray-700');
    }
  } else { // Desktop specific styling
    linkClasses.push('px-2 rounded-md'); // Further reduced padding for desktop items
    if (level === 0) { // Top-level desktop item
      linkClasses.push('font-semibold');
      // For top-level items on desktop, only text color changes on hover/active
      if (isOpenOnDesktop || isActiveRoute || isParentActive) { // Active state (dropdown open OR current route)
        linkClasses.push('text-blue-700');
      } else { // Not active
        linkClasses.push('text-gray-800');
      }
      linkClasses.push('hover:text-blue-700'); // Top-level desktop item hover color
    } else { // Sub-level desktop item
      // For sub-level items, background and text color change on hover/active
      if (isOpenOnDesktop || isActiveRoute) { // Active state (its dropdown is open OR current route)
        linkClasses.push('bg-blue-50 text-blue-600');
      } else { // Not active
        linkClasses.push('text-gray-700');
      }
      linkClasses.push('hover:bg-gray-100 hover:text-blue-600'); // Sub-level desktop item hover styles
    }
  }

  const finalLinkClasses = linkClasses.join(' ');

  // Use Link from react-router-dom for internal navigation
  const LinkComponent = item.target === '_blank' ? 'a' : Link;

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
    >
      <LinkComponent
        to={item.link}
        href={item.target === '_blank' ? item.link : undefined} // href for external links, to for internal
        target={item.target}
        rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
        className={finalLinkClasses}
        onClick={handleClick}
      >
        {linkContent}
      </LinkComponent>

      {hasChildren && (
        <ul
          className={`
            ${isMobile
              ? `bg-white pl-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  isCurrentlyClickedOnMobile ? 'max-h-[300px] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
                }`
              : `absolute mt-0 min-w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100 z-[51] transition-all duration-300 origin-top-left
                 ${isOpenOnDesktop // Show desktop dropdown if this item is in the active path
                    ? 'opacity-100 visible translate-y-0 scale-100'
                    : 'opacity-0 invisible translate-y-2 scale-95 pointer-events-none'
                 }
                 ${level === 0 ? 'left-0' : 'left-full top-0'}` // Sub-sub menus open to the right
            }
          `}
          style={isMobile && !isCurrentlyClickedOnMobile ? { maxHeight: 0 } : {}} // Explicitly set max-height for mobile transition
        >
          {item.children.map((child) => (
            <MenuItem
              key={child.id}
              item={child}
              level={level + 1}
              activeDropdownPath={activeDropdownPath}
              updateActiveDropdownPath={updateActiveDropdownPath}
              isMobile={isMobile}
              setIsMenuOpen={setIsMenuOpen}
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
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeDropdownPath, setActiveDropdownPath] = useState([]); // Stores an array of IDs for the path of open menus

  const headerRef = useRef(null); // Ref for the entire header to detect outside clicks

  // Function to update the active path when a menu item is hovered (desktop) or clicked (mobile)
  const updateActiveDropdownPath = (itemId, itemLevel, actionType) => { // actionType: 'hover', 'toggle', 'clear'
    setActiveDropdownPath(prevPath => {
        if (actionType === 'clear') {
            return [];
        } else if (actionType === 'toggle') {
            // For mobile clicks, we toggle the item's presence at its level
            if (prevPath[itemLevel] === itemId) {
                // If this item is already open, close it and all subsequent children
                return prevPath.slice(0, itemLevel);
            } else {
                // Open this item, closing any siblings at this level and their children
                return [...prevPath.slice(0, itemLevel), itemId];
            }
        } else { // 'hover'
            // When hovering, we always want to set the new path segment
            // and truncate any deeper paths
            return [...prevPath.slice(0, itemLevel), itemId];
        }
    });
  };


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

  // Close dropdowns and mobile menu when clicking outside (entire header or body)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdownPath([]); // Clear all dropdowns
        setIsMenuOpen(false); // Close mobile menu
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Ref and handlers for the main desktop navigation UL to clear dropdowns on mouse leave
  const navRef = useRef(null); // Ref for the main navigation UL
  const leaveNavTimeoutRef = useRef(null); // Ref for the mouse leave timeout

  const handleNavMouseEnter = () => {
      clearTimeout(leaveNavTimeoutRef.current); // Clear any pending hide on re-entry
  };

  const handleNavMouseLeave = () => {
      leaveNavTimeoutRef.current = setTimeout(() => {
          setActiveDropdownPath([]); // Clear all open dropdowns after a short delay
      }, 200); // Small delay to allow moving between top-level items
  };

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 w-full text-white transition-all duration-300 z-50 ${
      isScrolled
        ? 'bg-indigo-900 shadow-lg py-0'
        : 'bg-gradient-to-r from-indigo-900 to-blue-900 py-1'
    }`}>
      {/* Top section with logo and search */}
      <div className="container mx-auto px-4 py-2 md:px-6 md:py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-3 md:gap-4 group"> {/* Changed to Link */}
            <img
              src="/images/mgm2.webp" // Assuming logo.png is in your public/images folder
              alt="MGM College of Engineering Logo"
              className="h-10 md:h-14 w-auto transition-all duration-300 group-hover:scale-105 rounded-full"
            />
            {/* Simplified logo text to a single span, matching the image */}
            <span className="text-lg md:text-xl font-bold text-white transition-colors">
              MGM's College of Engineering
            </span>
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            {/* Search Bar - Desktop (Visible only on md screens and up) */}
            <form onSubmit={handleSearch} className="relative w-full md:w-64 lg:w-72 hidden md:block">
              <div className={`flex items-center bg-white rounded-full pl-4 pr-2 border ${isSearchFocused ? 'border-blue-400' : 'border-gray-300'} transition-all duration-300`}>
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

            {/* Accreditation text - Visible on MD screens and up, as in the image */}
            <div className="text-sm text-blue-100 text-center md:text-right max-w-xs hidden md:block">
              Affiliated to Dr. BATU. Loners, Accredited by NAAC(2024), NBA
              Accredited (2024-2027), Approved by AICTE, New Delhi.
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-4"></div>

      {/* Navigation section */}
      <div className="bg-white shadow-md">
        {/* Adjusted to w-full with responsive padding for maximum horizontal space */}
        <div className="w-full mx-auto px-4 lg:px-6"> 
          <div className="flex justify-between items-center h-14 lg:h-auto"> {/* Added height for mobile consistency */}
            <button
              className="lg:hidden text-indigo-900 p-4 focus:outline-none"
              onClick={(e) => {
                  e.stopPropagation(); // Prevent header's handleClickOutside from closing menu
                  setIsMenuOpen(!isMenuOpen);
                  setActiveDropdownPath([]); // Close any open dropdowns when main mobile menu toggles
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
            <nav ref={navRef} className="hidden lg:block w-full"> {/* Added w-full here to allow flex to spread out */}
              <ul
                className="flex justify-between w-full space-x-1" // Further reduced spacing and added justify-between
                onMouseEnter={handleNavMouseEnter}
                onMouseLeave={handleNavMouseLeave}
              >
                {menuItemsWithIds.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    level={0} // Top level
                    activeDropdownPath={activeDropdownPath}
                    updateActiveDropdownPath={updateActiveDropdownPath}
                    isMobile={false}
                    setIsMenuOpen={setIsMenuOpen}
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
                  level={0}
                  activeDropdownPath={activeDropdownPath}
                  updateActiveDropdownPath={updateActiveDropdownPath}
                  isMobile={true}
                  setIsMenuOpen={setIsMenuOpen}
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