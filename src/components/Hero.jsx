// components/Hero.jsx
const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden mt-16">
      {/* Background Slideshow */}
      <div className="absolute w-full h-full">
        <div
          className="absolute w-full h-full bg-cover bg-center opacity-0 animate-slideShow"
          style={{ backgroundImage: "url('slide1.jpg')", animationDelay: "0s" }}
        ></div>
        <div
          className="absolute w-full h-full bg-cover bg-center opacity-0 animate-slideShow"
          style={{ backgroundImage: "url('slide2.jpg')", animationDelay: "8s" }}
        ></div>
        <div
          className="absolute w-full h-full bg-cover bg-center opacity-0 animate-slideShow"
          style={{ backgroundImage: "url('slide3.jpg')", animationDelay: "16s" }}
        ></div>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute w-full h-full bg-gradient-to-b from-blue-950/80 via-indigo-900/70 to-blue-950/80"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-snug drop-shadow-lg animate-fadeIn">
          MGM's College of Engineering
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl leading-relaxed opacity-90 animate-fadeIn">
          Delivering excellence in engineering education with a multidisciplinary
          approach to meet the evolving needs of industry and society.
        </p>
        <a
          href="about.html"
          className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold tracking-wide hover:bg-white hover:text-indigo-900 transition-all duration-300 shadow-md animate-fadeIn"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
