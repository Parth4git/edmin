import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/edumin_logo.png"
                alt="Edumin Logo"
                className="w-40 h-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Premier computer education institute offering certified training
              programs in Tally, CCC, programming, and teacher training.
              Empowering students with government-recognized courses and
              industry-ready skills since 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-cyan-600 text-white p-3 rounded-full transition-all duration-300"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-cyan-600 text-white p-3 rounded-full transition-all duration-300"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-cyan-600 text-white p-3 rounded-full transition-all duration-300"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-cyan-600 text-white p-3 rounded-full transition-all duration-300"
              >
                <FaLinkedin className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-700 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "#" },
                { name: "Courses", link: "#" },
                { name: "About Us", link: "#" },
                { name: "Faculty", link: "#" },
                { name: "Placements", link: "#" },
                { name: "Contact", link: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full mr-2"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-700 inline-block">
              Popular Courses
            </h3>
            <ul className="space-y-3">
              {[
                "Tally Prime with GST",
                "CCC Certification",
                "Full Stack Development",
                "Python Programming",
                "Data Science",
                "Cyber Security",
                "Digital Marketing",
              ].map((course, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full mr-2"></span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-700 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-cyan-600 p-2 rounded-full mr-3">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Our Location</h4>
                  <p className="text-gray-400 text-sm">
                    123, Main Road, Civil Lines
                    <br />
                    Kanpur, Uttar Pradesh 208001
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-cyan-600 p-2 rounded-full mr-3">
                  <FaPhoneAlt className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-400 text-sm">
                    +91 98765 43210
                    <br />
                    +91 98765 43211 (Admissions)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-cyan-600 p-2 rounded-full mr-3">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-400 text-sm">
                    info@computerschool.com
                    <br />
                    admissions@computerschool.com
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-cyan-600 p-2 rounded-full mr-3">
                  <FaClock className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Working Hours</h4>
                  <p className="text-gray-400 text-sm">
                    Mon-Sat: 8:00 AM - 8:00 PM
                    <br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Computer Institute. All Rights
              Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-cyan-500 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-cyan-500 text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-cyan-500 text-sm transition-colors duration-300"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
