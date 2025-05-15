import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const OfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Show popup after script loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay to ensure script loads

    return () => {
      clearTimeout(timer);
      document.body.removeChild(script);
    };
  }, []);

  const closePopup = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0  bg-opacity-70 z-[1000] flex items-center justify-center p-4"
      onClick={closePopup}
    >
      <div
        className="relative bg-white rounded-lg max-w-2xl mx-auto shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 transition-colors duration-200"
          aria-label="Close offer popup"
        >
          <FaTimes className="w-6 h-6 hover:scale-110 transition-transform" />
        </button>

        {/* Elfsight Widget Container */}
        <div className="w-full h-full min-h-[400px]">
          <div
            className="elfsight-app-d86ff78e-14d2-4c1f-a572-1c63e50fe3ae"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
