import React, { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://png.pngtree.com/template/20220421/ourmid/pngtree-tiny-business-people-with-magnifier-work-with-document-management-on-computer-image_1316025.jpg",
    heading: "Welcome to Edumin",
    subtext: "We provide the best services to our students.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1333215041/photo/focus-on-fingers-close-up-shot-of-online-professional-gamer-hands-hitting-keyboard-in-fast.jpg?s=612x612&w=0&k=20&c=Zug1pIo8OqB5HlwPNpXNjD7LMMXcONrw31_GHMVBpbE=",
    heading: "We provide 24/7 support",
    subtext: "Our team is always here to help you.",
  },
  {
    image:
      "https://media.istockphoto.com/id/624652586/photo/computers-in-classroom-on-high-school.jpg?s=2048x2048&w=is&k=20&c=XS8M_uooWrNj2HhwXucRi1MKhUFSndBmrBabYBQiCAc=",
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
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 px-6 rounded shadow hover:text-white transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/*marquee*/}
      <div className="absolute bottom-0 left-0 w-full bg-gray-800 text-white py-2">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          Welcome to Edumin! We provide the best services to our students. We
          offer a variety of courses. Choose the one that suits you best. Our
          team is always here to help you. We provide 24/7 support. Join us
          today!
        </marquee>
      </div>
    </section>
  );
};

export default Hero;
