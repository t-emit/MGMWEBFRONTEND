// components/About.jsx
const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 relative">
          About Us
          <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="mb-4 text-lg">
              Mahatma Gandhi Mission, that started its journey in a modest way
              with a rural health care center at Nila and a hospital in
              Nanded: has emerged as a 5000-member family with more than 50
              educational organizations, health care centers and social
              welfare units functioning under its umbrella.
            </p>
            <p className="mb-6 text-lg">
              The MGM's College of Engineering at Nanded was established in
              1983, with the objective of imparting quality education in the
              field of Engineering and Technology. The college is approved by
              AICTE, New Delhi and is affiliated to Dr. Babasaheb Ambedkar
              Technological University, Lonere.
            </p>
            <a href="about.html" className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all inline-block">
              Read More
            </a>
          </div>
          
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
            <img src="/images/image.png" alt="MGM College Campus" className="w-full h-auto transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;