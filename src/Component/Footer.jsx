import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <img
            src="/edumin_logo.png"
            alt="Edumin Logo"
            className="w-36 top-0"
          />
          <p className="text-sm leading-relaxed">
            We provide all computer courses and certified training programs
            including Tally, CCC, and professional teacher training. Our
            institute is known for government-sponsored training and
            industry-ready skills.
          </p>
          <div className="flex gap-4 text-xl mt-2">
            <a href="#" className="hover:text-cyan-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-cyan-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-cyan-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-cyan-500 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-cyan-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-500 transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">123, Main Road, Kanpur, UP</p>
          <p className="text-sm mb-2">Phone: +91 98765 43210</p>
          <p className="text-sm">Email: info@computerschool.com</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Computer Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
