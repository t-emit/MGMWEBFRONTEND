// components/NewsEvents.jsx
const NewsEvents = () => {
  const newsItems = [
    {
      id: 1,
      date: "June 15, 2024",
      title: "Vacancy Notice Extended Round",
      excerpt: "The vacancy notice for various positions has been extended until further notice.",
      image: "slide3.jpg",
      link: "newsdetail5f62.html?newsid=120"
    },
    {
      id: 2,
      date: "June 10, 2024",
      title: "Admission for B Tech & M Tech DSE",
      excerpt: "Admissions open for B.Tech and M.Tech Direct Second Year Entry programs.",
      image: "slide1.jpg",
      link: "newsdetail4e19.html?newsid=119"
    },
    {
      id: 3,
      date: "June 5, 2024",
      title: "ACAP NOTICE FOR THE DIRECT SECOND YEAR ADMISSION ROUND",
      excerpt: "Important notice regarding ACAP for Direct Second Year admissions.",
      image: "slide2.jpg",
      link: "newsdetaild8a1.html?newsid=112"
    },
    {
      id: 4,
      date: "May 28, 2024",
      title: "First Year M Tech ACAP admission Round",
      excerpt: "Details about the ACAP admission round for first year M.Tech students.",
      image: "slide4.jpg",
      link: "newsdetail2ce0.html?newsid=110"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 relative">
          News & Events
          <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-gray-500 text-sm">{item.date}</span>
                <h3 className="text-xl font-bold text-blue-900 my-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href={item.link} className="text-red-600 font-semibold flex items-center gap-2 group">
                  Read More <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;