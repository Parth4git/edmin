import React from "react";
import {
  FaAssistiveListeningSystems,
  FaCertificate,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaMoneyCheck,
  FaNetworkWired,
} from "react-icons/fa";
import { FaJ } from "react-icons/fa6";

const ChooseUs = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-10 md:text-4xl text-center">
        Why Choose Edumin
      </h1>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl shadow-cyan-500 transition flex flex-col items-center">
            <FaNetworkWired className="text-5xl text-cyan-500 mb-4" />
            <p className="text-center text-lg font-stretch-semi-expanded">
              100% Placement Assistance
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl shadow-cyan-500 transition flex flex-col items-center">
            <FaGraduationCap className="text-5xl text-cyan-500 mb-4" />
            <p className="text-center text-lg font-stretch-semi-expanded ">
              {" "}
              100% Practical Training
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl shadow-cyan-500 transition flex flex-col items-center">
            <FaChalkboardTeacher className="text-5xl text-cyan-500 mb-4" />
            <p className="text-center text-lg font-stretch-semi-expanded">
              {" "}
              Small Batches for Personalied Attention{" "}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl  shadow-cyan-500 transition flex flex-col items-center">
            <FaMoneyCheck className="text-5xl text-cyan-500 mb-4" />
            <p className="text-center text-lg font-stretch-semi-expanded">
              {" "}
              Quality Training at Affordable Price{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
