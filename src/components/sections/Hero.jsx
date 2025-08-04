import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white min-h-[770px] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left px-6 lg:px-12 py-10 order-1 lg:order-1">
          <h3 className="text-blue-600 font-semibold text-xl mb-3">
            Jotform AI Agents
          </h3>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-snug mb-6">
            The Future of <br /> Customer Service
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0">
            Imagine a world where you can respond instantly to any customer,
            anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link
              to="/contact-us"
              className="bg-blue-600 text-white medium px-7 py-4 rounded-xl shadow-lg transition"
            >
              Create Your AI Agent
            </Link>
            {/* <button className="border border-gray-300 text-gray-800 px-7 py-4 rounded-xl hover:bg-gray-100 transition">
              Demo AI Agents
            </button> */}
          </div>

          <p className="mt-5 text-black font-medium text-lg ml-3 ">
            – it’s free! <span className="text-xl"></span>
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 order-2 lg:order-2 w-full h-[50vh] lg:h-auto">
          <img
            src="https://cdn.jotfor.ms/p/ai-agents/assets/img-min/homepage/ai-agent-sara.png?v=1740119955"
            alt="Hero Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
