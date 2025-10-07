// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src="/images/mgm2.webp" alt="MGM College Logo" className="h-12 w-auto rounded-full" />
              <span className="text-xl font-bold">MGM's College of Engineering</span>
            </div>
            <p className="mb-6 leading-relaxed">
              MGM's College of Engineering at Nanded was established in 1983,
              with the objective of imparting quality education in the field of
              Engineering and Technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-blue-900 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-blue-900 transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-blue-900 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-blue-900 transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-yellow-500 hover:text-blue-900 transition-all">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"><i className="fas fa-chevron-right text-xs"></i> Home</a></li>
              <li><a href="/about-us" className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"><i className="fas fa-chevron-right text-xs"></i> About Us</a></li>
              <li><a href="/courses" className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"><i className="fas fa-chevron-right text-xs"></i> Courses</a></li>
              <li><a href="/admission/under-graduate" className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"><i className="fas fa-chevron-right text-xs"></i> Admission</a></li>
              <li><a href="/contact" className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"><i className="fas fa-chevron-right text-xs"></i> Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">
              Important Links
            </h3>
            <ul className="space-y-3">
              <li><a href="https://dbatu.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"><i className="fas fa-chevron-right text-xs"></i> DBATU</a></li>
              <li><a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"><i className="fas fa-chevron-right text-xs"></i> AICTE</a></li>
              <li><a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"><i className="fas fa-chevron-right text-xs"></i> UGC</a></li>
              <li><a href="https://www.mhrd.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"><i className="fas fa-chevron-right text-xs"></i> MHRD</a></li>
              <li><a href="https://www.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-yellow-500 transition-all hover:pl-2"><i className="fas fa-chevron-right text-xs"></i> Maharashtra Govt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <i className="fas fa-map-marker-alt text-yellow-500 mt-1"></i>
                <p>MGM's College of Engineering, Nanded - 431605, Maharashtra, India</p>
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
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p>&copy; 2025 MGM's College of Engineering, Nanded. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;