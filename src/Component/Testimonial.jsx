import React, { useState, useEffect } from "react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      course: "Tally",
      content:
        "The hands-on projects and industry-relevant curriculum helped me land my dream job at a tech startup just 2 months after completing the course. The instructors were always available to clarify doubts.",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      batch: "2023 Batch",
    },
    {
      id: 2,
      name: "Priya Patel",
      course: "Ms-Word",
      content:
        "Coming from commerce background, I was nervous about coding. But the step-by-step teaching approach made complex concepts easy. Now I work as a data analyst at an MNC!",
      avatar: "https://randomuser.me/api/portraits/women/13.jpg",
      batch: "2022 Batch",
    },
    {
      id: 3,
      name: "Amit Singh",
      course: "O level",
      content:
        "The practical labs with real-world scenarios gave me confidence to handle security audits. I got certified and doubled my salary within a year of completing the course.",
      avatar: "https://randomuser.me/api/portraits/men/30.jpg",
      batch: "2023 Batch",
    },
    {
      id: 4,
      name: "Neha Gupta",
      course: "CCC",
      content:
        "Built 5 complete apps during the course which became my portfolio. The interview preparation sessions helped me crack 3 job offers before course completion!",
      avatar: "https://randomuser.me/api/portraits/women/84.jpg",
      batch: "2024 Batch",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-cyan-400 font-serif">
            Hear from our successful graduates who have transformed their
            careers with us.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-xl shadow-lg bg-white"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonial Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-12 py-10"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <img
                    className="w-34 h-34 rounded-full object-cover border-4 border-cyan-300"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-gray-800 font-serif">
                      {testimonial.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-lg ">
                      {testimonial.course}
                    </p>
                    <p className="text-md text-gray-500 mb-4">
                      {testimonial.batch}
                    </p>
                    <blockquote className="text-gray-700 italic max-w-4xl">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-cyan-400" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
