import React, { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://png.pngtree.com/template/20220421/ourmid/pngtree-tiny-business-people-with-magnifier-work-with-document-management-on-computer-image_1316025.jpg",
    heading: "Welcome to Edumin",
    subtext: "We provide the best services to our students.",
  },
  {
    image: "/edmin_banner1.webp",
    heading: "We provide 24/7 support",
    subtext: "Our team is always here to help you.",
  },
  {
    image: "/edmin_banner2.webp",
    heading: "We offer a variety of courses",
    subtext: "Choose the one that suits you best.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { image, heading, subtext } = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Image with fixed aspect ratio */}
      <div className="relative aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/7] w-full">
        <img
          src={image}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.8)", transition: "filter 0.5s ease" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent bg-opacity-80"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:pl-12 lg:pl-24 text-white text-center md:text-left px-4 ">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 font-serif">
            {heading}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-serif mb-5 text-cyan-300">
            {subtext}
          </p>
          <div className="space-x-3">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded shadow">
              Get Started
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
