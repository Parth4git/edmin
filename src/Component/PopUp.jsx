import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const OfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup on page load
    setIsVisible(true);

    // Optional: Set a cookie/localStorage to prevent showing too frequently
    // const hasSeenPopup = localStorage.getItem('seenOfferPopup');
    // if (!hasSeenPopup) {
    //   setIsVisible(true);
    //   localStorage.setItem('seenOfferPopup', 'true');
    // }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0  bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg max-w-2xl mx-auto shadow-xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close offer popup"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Offer Image */}
        <div className="relative">
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            class="elfsight-app-d86ff78e-14d2-4c1f-a572-1c63e50fe3ae"
            data-elfsight-app-lazy
          ></div>

          {/* Optional: Add a call-to-action button */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <a
              href="/enroll-now" // Link to your offer page
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Claim This Offer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
