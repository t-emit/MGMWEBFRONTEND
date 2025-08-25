// components/QuickLinks.jsx
const QuickLinks = () => {
  const links = [
    { icon: "graduation-cap", text: "CASERP", link: "http://mgmerp.ac.in/", target: "_blank" },
    { icon: "book-open", text: "OBE", link: "https://www.vmedulife.com/public/auth/#/login/mgm-cen-nanded", target: "_blank" },
    { icon: "envelope", text: "Mail", link: "https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/", target: "_blank" },
    { icon: "university", text: "DBATU", link: "https://dbatu.ac.in/", target: "_blank" },
    { icon: "file-alt", text: "IEEE", link: "http://www.ieeexplore.ieee.org/xpl/periodicals.jsp", target: "_blank" },
    { icon: "video", text: "NPTEL", link: "http://nptel.ac.in/", target: "_blank" },
    { icon: "brain", text: "Skill Test", link: "https://www.youth4work.com/onlinetalenttest", target: "_blank" },
    { icon: "newspaper", text: "News", link: "viewnews.html" },
    { icon: "file-contract", text: "Tender", link: "download/tender-notice.html" }
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          Quick Links
          <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded"></span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.link} 
              target={link.target || "_self"}
              rel={link.target ? "noopener noreferrer" : ""}
              className="bg-white text-blue-900 p-6 rounded-lg text-center transition-all hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-lg group"
            >
              <i className={`fas fa-${link.icon} text-3xl mb-4 group-hover:text-white`}></i>
              <span className="block font-semibold group-hover:text-white">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
