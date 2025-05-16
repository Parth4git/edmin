import React, { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import { FaStar, FaGlobe, FaIndustry } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const initialCards = [
  {
    id: 1,
    icon: <FaStar className="text-5xl text-cyan-500 mb-4" />,
    title: "Expert Guidance",
    text: "Years of experience guiding students to success.",
  },
  {
    id: 2,
    icon: <FaGlobe className="text-5xl text-cyan-500 mb-4" />,
    title: "ISO Certificate",
    text: "We are also certified with ISO 9001:2015.",
  },
  {
    id: 3,
    icon: <FaIndustry className="text-5xl text-cyan-500 mb-4" />,
    title: "Industry Relevant Courses",
    text: "We offer courses that are relevant to the industry.",
  },
  {
    id: 4,
    icon: <FaComputer className="text-5xl text-cyan-500 mb-4" />,
    title: "Placement Assistance",
    text: "We provide placement assistance to our students.",
  },
];

const Info = () => {
  const [cards, setCards] = useState(initialCards);
  const [axis, setAxis] = useState("x");

  // Change axis based on screen size
  useEffect(() => {
    const updateAxis = () => {
      setAxis(window.innerWidth < 640 ? "y" : "x"); // Tailwind's sm breakpoint is 640px
    };

    updateAxis(); // set on mount
    window.addEventListener("resize", updateAxis);

    return () => window.removeEventListener("resize", updateAxis);
  }, []);

  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-16">
      <Reorder.Group
        axis={axis}
        values={cards}
        onReorder={setCards}
        className="flex flex-wrap sm:flex-nowrap gap-8 justify-center"
      >
        {cards.map((card) => (
          <Reorder.Item
            key={card.id}
            value={card}
            className="w-full sm:w-[45%] lg:w-[22%] bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center cursor-grab active:cursor-grabbing"
          >
            {card.icon}
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm text-center">{card.text}</p>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  );
};

export default Info;
