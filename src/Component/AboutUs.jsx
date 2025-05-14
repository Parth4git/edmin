import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/realistic-unboxing-illustration_23-2150293270.jpg"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 md:text-5xl ">About Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-lg font-serif">
            Welcome to Edumin, a pioneer in digital transformation for
            educational institutes! As Brain Server Computer & Vocational
            Institute OPC Pvt Ltd, we take pride in our commitment to
            revolutionizing the educational landscape in Uttar Pradesh and
            beyond.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg font-serif">
            We teach all Computer Courses, and we also provide a Computer
            Teacher Training Program. We conduct Tally's professional courses
            here. We have all the courses from Tally's Basic to Advanced here.
            We have done various types of government computer training programs.
            We have trained thousands of students in the last 10 years. We have
            a team of highly qualified and experienced trainers who are experts
            in their respective fields.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 list-none list-inside text-lg font-medium">
            <div className="flex items-center gap-1">
              {" "}
              <FaArrowRight className="text-cyan-500" />{" "}
              <li>Skilled Instructors</li>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <FaArrowRight className="text-cyan-500" /> <li>Daily Classes</li>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <FaArrowRight className="text-cyan-500" />
              <li>Practical Training</li>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <FaArrowRight className="text-cyan-500" />
              <li>International Certificate</li>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <FaArrowRight className="text-cyan-500" />
              <li>Printed Notes</li>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <FaArrowRight className="text-cyan-500" />
              <li>Job Oriented Course</li>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <FaArrowRight className="text-cyan-500" />
              <li>Best Assignment for Practice</li>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <FaArrowRight className="text-cyan-500" />
              <li>Visual Classes with Large LCD</li>
            </div>
          </ul>
          <div className="mt-6">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded shadow">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
