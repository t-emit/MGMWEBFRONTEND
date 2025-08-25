// components/Hero.jsx
const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden mt-16 font-sans">
      {/* Background Slideshow */}
      <div className="absolute w-full h-full">
        <div
          className="absolute w-full h-full bg-cover bg-center opacity-0 animate-slideShow scale-105"
          style={{ backgroundImage: "url('slide1.jpg')", animationDelay: "0s" }}
        ></div>
        <div
          className="absolute w-full h-full bg-cover bg-center opacity-0 animate-slideShow scale-105"
          style={{ backgroundImage: "url('slide2.jpg')", animationDelay: "8s" }}
        ></div>
        <div
          className="absolute w-full h-full bg-cover bg-center opacity-0 animate-slideShow scale-105"
          style={{ backgroundImage: "url('slide3.jpg')", animationDelay: "16s" }}
        ></div>
      </div>

      {/* Stronger gradient overlay for focus */}
      <div className="absolute w-full h-full bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-indigo-900/85 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-2xl animate-fadeIn">
          MGM's College of Engineering
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-3xl leading-relaxed text-gray-200 animate-fadeIn">
          Nurturing innovation and academic excellence to shape future engineers
          with a vision for sustainable growth and global impact.
        </p>
        <a
          href="about.html"
          className="px-10 py-4 bg-yellow-500 text-blue-950 rounded-lg font-semibold text-lg tracking-wide shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-300 animate-fadeIn"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
