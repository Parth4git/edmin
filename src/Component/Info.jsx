import React from "react";
import {
  FaStar,
  FaGlobe,
  FaUserAstronaut,
  FaChartLine,
  FaIndustry,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const cardData = [
  {
    icon: <FaStar className="text-5xl text-cyan-500 mb-4" />,
    title: "Expert Guidance",
    text: "Years of experience guiding  students to success.",
  },
  {
    icon: <FaGlobe className="text-5xl text-cyan-500 mb-4" />,
    title: "ISO Certificate",
    text: "We are also certified with ISO 9001:2015.",
  },
  {
    icon: <FaIndustry className="text-5xl text-cyan-500 mb-4" />,
    title: "Industry Relevant Courses",
    text: "We offer courses that are relevant to the industry.",
  },
  {
    icon: <FaComputer className="text-5xl text-cyan-500 mb-4" />,
    title: "Placement Assistance",
    text: "We provide placement assistance to our students.",
  },
];

const Info = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center"
          >
            {card.icon}
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
