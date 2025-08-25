// components/Sidebar.jsx
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        id="menu-trigger"
        className={`fixed top-80 left-0 text-3xl cursor-pointer z-50 text-white bg-slate-700 transition-left duration-300 rounded-r-md p-2 ${isOpen ? 'left-64' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        &#8942;
      </div>

      <div 
        id="sidebar"
        className={`fixed top-48 left-[-250px] w-64 h-1/2 overflow-y-auto transition-left duration-300 z-40 bg-slate-700 rounded-r-3xl ${isOpen ? 'left-0' : ''}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul className="list-none p-0 m-0">
          <li><a href="chairman-desk.html" className="block py-3 px-5 text-white no-underline transition-all hover:bg-slate-600">Chairman's Desk</a></li>
          <li><a href="director-desk.html" className="block py-3 px-5 text-white no-underline transition-all hover:bg-slate-600">Director's Desk</a></li>
          <li><a href="trainingandplacement/profile.html" className="block py-3 px-5 text-white no-underline transition-all hover:bg-slate-600">Placements</a></li>
          <li><a href="trainingandplacement/achievement.html" className="block py-3 px-5 text-white no-underline transition-all hover:bg-slate-600">Achievements</a></li>
          <li><a href="photogallery.html" className="block py-3 px-5 text-white no-underline transition-all hover:bg-slate-600">Photo Gallery</a></li>
          <li><a href="download/nirf.html" className="block py-3 px-5 text-white no-underline transition-all hover:bg-slate-600">NIRF</a></li>
          <li><a href="mandatory-disclosure.html" className="block py-3 px-5 text-white no-underline transition-all hover:bg-slate-600">Mandatory Disclosure</a></li>
          <li><a href="IQAC.html" className="block py-3 px-5 text-white no-underline transition-all hover:bg-slate-600">IQAC</a></li>
          <li><a href="swayam-nptel.html" className="block py-3 px-5 text-white no-underline transition-all hover:bg-slate-600">SWAYAM-NPTEL</a></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;