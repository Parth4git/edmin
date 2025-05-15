import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const counters = [
  { value: 2000, label: "Students Enrolled", suffix: "+" },
  { value: 10, label: "Year's Of Legacy", suffix: "+" },

  { value: 1000, label: "Placed Students", suffix: "k+" },
  { value: 20, label: "Awards in the field of Occult", suffix: "+" },
];

const Count = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const duration = 4000; // ms

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = Math.ceil(end / (duration / 16)); // ~60fps

    const step = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(start);
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  const formatCount = () => {
    if (value >= 1000 && suffix.includes("k")) {
      return `${Math.floor(count / 1000)}k${suffix.includes("+") ? "+" : ""}`;
    }
    return `${count}${suffix}`;
  };

  return (
    <div className="text-center">
      <motion.h3
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {formatCount()}
      </motion.h3>
      <p className="text-cyan-500 mt-2 text-lg max-w-xs mx-auto">{label}</p>
    </div>
  );
};

const Counter = () => {
  return (
    <section className="bg-gray-900 py-8 items-center flex flex-col justify-center ">
      <h2 className="text-5xl font-semibold text-white text-center mb-12">
        Our Success Stories
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {counters.map((item, idx) => (
          <Count
            key={idx}
            value={item.value}
            label={item.label}
            suffix={item.suffix || ""}
          />
        ))}
      </div>
    </section>
  );
};

export default Counter;
