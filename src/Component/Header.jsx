import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 md:px-8 py-2 relative">
        {/* Left: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-gray-600" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl hover:text-blue-600" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-xl hover:text-blue-400" />
          </a>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/edumin_logo.png" alt="Logo" className="w-28 h-28" />
        </div>

        {/* Right: Button */}
        <div>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-600">
            Contact
          </button>
        </div>
      </div>

      {/* Bottom Section: Navigation Bar */}
      <nav className="bg-white px-4 md:px-8 py-2 ">
        <ul className="flex flex-wrap gap-4 justify-center md:gap-8 text-sm md:text-xl font-semibold font-serif text-gray-800">
          <li>
            <a href="#home" className="hover:text-cyan-600">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-cyan-600">
              About Us
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-600">
              Courses
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-600">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-600">
              Legal
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-600">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
