import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemsLeft = ["Home", "About Us", "Courses"];
  const navItemsRight = ["Gallery", "Legal", "Contact Us"];

  return (
    <header className="w-full shadow-md bg-white z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-8 py-2">
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
          <a
            href="https://facebook.com"
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

        {/* Left Nav */}
        <ul className="flex gap-8 text-xl font-medium font-serif text-gray-700">
          {navItemsLeft.map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="hover:text-cyan-600"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="mx-0">
          <img src="/edumin_logo.png" alt="Logo" className="w-40 h-16" />
        </div>

        {/* Right Nav */}
        <ul className="flex gap-8 text-xl font-medium font-serif text-gray-700">
          {navItemsRight.map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="hover:text-cyan-600"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-600">
          Contact Us
        </button>
      </div>

      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        {/* Social Icons */}
        <div className="flex gap-3">
          <FaInstagram className="text-xl" />
          <FaFacebook className="text-xl" />
          <FaXTwitter className="text-xl" />
        </div>

        {/* Logo */}
        <div>
          <img
            src="/edumin_logo.png"
            alt="Logo"
            className="w-20 h-20 mx-auto"
          />
        </div>

        {/* Contact + Menu */}
        <div className="flex items-center gap-2">
          <button className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-blue-600">
            Contact
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-white shadow-md z-40 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 pt-6">
          <ul className="space-y-4 font-medium text-lg">
            {[...navItemsLeft, ...navItemsRight].map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  className="block hover:text-cyan-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button className="mt-4 bg-gray-800 text-white w-full py-2 rounded hover:bg-blue-600">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
