'use client'; // Added 'use client' for consistency with common practices in modern React frameworks
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
  { name: "Home", link: "/", icon: "fa-home" },
  {
    name: "About",
    link: "#",
    icon: "fa-info-circle",
    children: [
      { name: "About Us", link: "/about-us", icon: "fa-building" },
      { name: "Chairman's Desk", link: "/chairman-desk", icon: "fa-chair" },
      { name: "Director's Desk", link: "/director-desk", icon: "fa-user-tie" },
      { name: "Courses Offered", link: "/courses", icon: "fa-graduation-cap" },
      { name: "Governing Council", link: "/governing-council", icon: "fa-users" },
      { name: "Press Coverage", link: "/press-coverage", icon: "fa-newspaper" },
      { name: "Campus", link: "/campus", icon: "fa-map-marker-alt" },
      { name: "Service Rules", link: "/service-rules", icon: "fa-file-contract" },
      { name: "Core values, Code of conduct & Ethics", link: "/core-values-ethics", icon: "fa-gem" },
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
      { name: "Exam Section", link: "/academics/exam-section", icon: "fa-file-alt" },
    ]
  },
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
  { name: "IQAC", link: "/iqac", icon: "fa-award" },
  {
    name: "Admission",
    link: "#",
    icon: "fa-user-graduate",
    children: [
      { name: "Under Graduate (B. Tech)", link: "/admission/under-graduate", icon: "fa-graduation-cap" },
      { name: "Post Graduate (M. Tech)", link: "/admission/post-graduate", icon: "fa-laptop" },
      { name: "Fee Structure", link: "/admission/fee-structure", icon: "fa-money-check-alt" },
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
    name: "Students Corner",
    link: "#",
    icon: "fa-running",
    children: [
      {
        name: "Academic",
        link: "#",
        icon: "fa-graduation-cap",
        children: [
          { name: "VISIOTECH", link: "/students-corner/visiotech", icon: "fa-eye" },
          { name: "GDSC", link: "/pdfs/GDSC/GDSC_MRB_5Oct2024.pdf", icon: "fa-google", target: "_blank" },
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
          { name: "Unnat Bharat Abhiyan", link: "/pdfs/UBA/UBAReport10112024.pdf", icon: "fa-flag", target: "_blank" },
        ]
      },
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
  { name: "NBA", link: "/nba", icon: "fa-award" },
  { name: "NIRF", link: "/download/nirf", icon: "fa-chart-bar" },
  { name: "Contact", link: "/contact", icon: "fa-phone-alt" },
 
  // === MERGED SECTION ENDS HERE ===
];

// Assign IDs once when the component is defined
const menuItemsWithIds = assignIds(rawMenuItems);

// Recursive MenuItem Component
const MenuItem = ({ item, level = 0, activeDropdownPath, updateActiveDropdownPath, isMobile, setIsMenuOpen }) => {
  const hasChildren = item.children && item.children.length > 0;
  const location = useLocation();

  const isOpenOnDesktop = !isMobile && activeDropdownPath.includes(item.id);
  const isCurrentlyClickedOnMobile = isMobile && activeDropdownPath[level] === item.id;

  const isDescendantActive = (currentItem) => {
    if (location.pathname === currentItem.link || (currentItem.link === '/' && location.pathname === '/')) {
      return true;
    }
    if (currentItem.children) {
      return currentItem.children.some(isDescendantActive);
    }
    return false;
  };

  const isActiveRoute = item.link && (location.pathname === item.link || (item.link === '/' && location.pathname === '/'));
  const isParentOrSelfActive = isActiveRoute || (hasChildren && isDescendantActive(item));

  const handleMouseEnter = () => {
    if (!isMobile && hasChildren) {
      updateActiveDropdownPath(item.id, level, 'hover');
    }
  };

  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault();
      updateActiveDropdownPath(item.id, level, 'toggle');
    } else {
      if (isMobile) {
        setIsMenuOpen(false); // Close mobile menu when a final link is clicked
      }
      updateActiveDropdownPath(null, -1, 'clear');
    }
  };

  const isDropdownActive = isCurrentlyClickedOnMobile || isOpenOnDesktop;
  const chevronIcon = hasChildren ? (isDropdownActive ? 'fa-chevron-up' : 'fa-chevron-down') : null;
  const isBrandIcon = ['fa-google', 'fa-mastercard'].includes(item.icon);
  const iconClass = isBrandIcon ? 'fab' : 'fas';

  const linkContent = (
    <>
      {item.icon && <i className={`${iconClass} ${item.icon} mr-1 text-base w-4 text-center`}></i>}
      <span className="flex-1 whitespace-nowrap">{item.name}</span>
      {hasChildren && (
        <i className={`fas ${chevronIcon} text-xs ml-1 transition-transform duration-300 ${isDropdownActive ? 'rotate-180' : ''}`}></i>
      )}
    </>
  );

  const linkClasses = ['flex items-center w-full transition-all duration-300 relative'];

  if (item.isButton) {
    linkClasses.push('bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 justify-center py-2.5'); // Added py-2.5 for consistent height
    if (isMobile) {
      linkClasses.push('mx-4 my-2 px-4 w-auto');
    } else {
      linkClasses.push('px-3 lg:px-2 xl:px-3 2xl:px-4'); // Match padding with other items
    }
  } else {
    if (isMobile) {
      linkClasses.push('px-6 py-3.5 border-b border-gray-100 text-base');
      linkClasses.push('hover:bg-blue-50');
      if (isCurrentlyClickedOnMobile || isParentOrSelfActive) {
        linkClasses.push('bg-blue-50 text-blue-600 font-semibold');
      } else if (level === 0) {
        linkClasses.push('text-gray-800 font-medium');
      } else {
        linkClasses.push('text-gray-700');
      }
    } else {
      if (level === 0) {
        linkClasses.push('py-2.5');
        linkClasses.push('px-2 lg:px-2 xl:px-3 2xl:px-4');
        linkClasses.push('text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold rounded-md');
        linkClasses.push('border border-transparent'); // Use transparent border to prevent layout shift
        if (isDropdownActive || isParentOrSelfActive) {
          linkClasses.push('text-blue-700 bg-blue-50 border-blue-200');
        } else {
          linkClasses.push('text-gray-800 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-200');
        }
      } else {
        linkClasses.push('px-5 py-3 text-base');
        if (isActiveRoute) {
          linkClasses.push('bg-blue-50 text-blue-600 font-medium');
        } else {
          linkClasses.push('text-gray-700 hover:bg-gray-100 hover:text-blue-600');
        }
      }
    }
  }

  const finalLinkClasses = linkClasses.join(' ');
  const LinkComponent = item.target === '_blank' ? 'a' : Link;

  return (
    <li className={`relative flex-shrink-0 ${!isMobile && level === 0 ? 'group' : ''}`} onMouseEnter={handleMouseEnter}>
      <LinkComponent
        to={item.link}
        href={item.target === '_blank' ? item.link : undefined}
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
              ? `bg-white pl-8 overflow-hidden transition-all duration-500 ease-in-out ${isCurrentlyClickedOnMobile ? 'max-h-[500px] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`
              : `absolute mt-1 min-w-[16rem] bg-white shadow-2xl rounded-xl py-2 border border-gray-200 z-[51] transition-all duration-300 origin-top-left
                ${isOpenOnDesktop ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-2 scale-95 pointer-events-none'}
                ${level === 0 ? 'left-0' : 'left-full -top-2'}`
            }
          `}
          style={isMobile && !isCurrentlyClickedOnMobile ? { maxHeight: 0 } : {}}
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
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeDropdownPath, setActiveDropdownPath] = useState([]);
  const headerRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const updateActiveDropdownPath = (itemId, itemLevel, actionType) => {
    setActiveDropdownPath(prevPath => {
      if (actionType === 'clear') return [];
      if (actionType === 'toggle') {
        if (prevPath[itemLevel] === itemId) return prevPath.slice(0, itemLevel);
        return [...prevPath.slice(0, itemLevel), itemId];
      }
      return [...prevPath.slice(0, itemLevel), itemId];
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      setIsSearchFocused(false);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdownPath([]);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navRef = useRef(null);
  const leaveNavTimeoutRef = useRef(null);

  const handleNavMouseEnter = () => clearTimeout(leaveNavTimeoutRef.current);
  const handleNavMouseLeave = () => {
    leaveNavTimeoutRef.current = setTimeout(() => setActiveDropdownPath([]), 200);
  };

  return (
    <header ref={headerRef} className={`relative top-0 left-0 w-full text-white transition-all duration-300 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 shadow-xl`}>
      <div className="max-w-screen-2xl mx-auto px-8 py-4 md:px-10 md:py-5 lg:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-1 min-w-0">
            <Link to="/" className="flex flex-shrink-0 items-center gap-2 sm:gap-3 group">
              <img
                src="/images/mgm2.webp"
                alt="MGM College of Engineering Logo"
                className="h-14 mr-4 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto transition-all duration-300 group-hover:scale-105 rounded-full shadow-lg"
              />
              <div className="flex flex-col flex-grow min-w-0">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-4xl font-extrabold text-white leading-tight py-1 tracking-wide drop-shadow-lg font-serif">
                  M.G.M’s College of Engineering, Nanded.
                </span>
                {/* Text below title: Centered, improved appearance, and responsiveness */}
                <span className="block  text-sm sm:text-base md:text-base text-purple-100 mt-0.5 leading-snug max-w-full lg:max-w-xl  drop-shadow-sm">
                  ( An Autonomous Institute ) <br />
                  Affiliated to Dr. Babasaheb Ambedkar Technological University ,Lonere. <br />
                  Accredited by NAAC (2024-2029), Accredited by NBA (2024-2027), Approved by AICTE, New Delhi
                </span>
              </div>
            </Link>
          </div>
          {/* Search bar: Reduced width and consistent spacing */}
          <div className="w-full sm:w-56 flex-shrink-0 mt-3 sm:mt-0 ">
            <form onSubmit={handleSearch} className="relative w-full">
              <div
                className={`flex items-center bg-white rounded-full pl-4 pr-2 border transition-all duration-200 ${isSearchFocused ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border-gray-300 hover:border-blue-400'}`}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full py-2.5 px-2 focus:outline-none text-gray-800 placeholder-gray-500 bg-transparent text-sm sm:text-base"
                />
                {/* Removed inline comment here */}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-2.5 rounded-full transition-all duration-300 flex items-center justify-center ml-1 flex-shrink-0"
                  aria-label="Submit search"
                >
                  <i className="fas fa-search text-base"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Navigation Bar (untouched as per instructions) */}
      <div className="bg-white shadow-2xl border-t border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2">
          <div className="flex justify-between items-stretch">
            <button
              className="lg:hidden text-indigo-900 px-4 py-3.5 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
                setActiveDropdownPath([]);
              }}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}></i>
            </button>
            <nav ref={navRef} className="hidden lg:block w-full">
              <ul
                className="flex items-center justify-between flex-nowrap w-full h-full gap-x-0.5 lg:gap-x-0.5 xl:gap-x-0.5 2xl:gap-x-0.5"
                onMouseEnter={handleNavMouseEnter}
                onMouseLeave={handleNavMouseLeave}
              >
                {menuItemsWithIds.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    level={0}
                    activeDropdownPath={activeDropdownPath}
                    updateActiveDropdownPath={updateActiveDropdownPath}
                    isMobile={false}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                ))}
              </ul>
            </nav>
            {isMenuOpen && (
              <div className="lg:hidden flex-1 flex items-center justify-end pr-4 py-3.5">
                <div className="text-sm text-gray-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                  Use search above to find content
                </div>
              </div>
            )}
          </div>
          <div className={`lg:hidden bg-white absolute top-full left-0 w-full shadow-2xl z-40 transition-all duration-500 ease-in-out overflow-hidden border-t border-gray-200 ${isMenuOpen ? 'max-h-screen opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
            <ul className="py-4">
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