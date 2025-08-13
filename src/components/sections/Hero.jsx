import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Convert");

  const tabs = [
    { name: "Convert", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { name: "Engage", video: "https://www.w3schools.com/html/movie.mp4" },
    { name: "Delight", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ];

  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-16">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <span className="inline-block text-xs font-normal text-gray-600 bg-gray-100 px-3 py-1 rounded-full mb-4">
          All-in-One AI Front Desk
        </span>
        <h1 className="text-3xl md:text-5xl font-medium leading-snug text-gray-900">
          AI Agents That Talk, Remind & Book
        </h1>
        <p className="mt-6 text-gray-600 text-sm md:text-base">
          Deliver care instructions, schedule appointments, answer queries,
          collect feedback — all automated with multilingual Voice and Whatsapp
          AI agents.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact-us"
            className="px-6 py-3 border border-gray-400 text-gray-900 rounded-md hover:bg-gray-100 transition"
          >
            Get Started for Free
          </Link>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative mt-16 w-full max-w-6xl bg-gradient-to-r from-purple-200 to-blue-200 rounded-md shadow-lg overflow-hidden">
        {/* Tabs at Top Right */}
        <div
          className="absolute bg-white flex space-x-16 px-6 py-2 rounded-sm border-b border-gray-200 z-20
                left-1/2 transform -translate-x-1/2 md:left-[820px] md:translate-x-0 "
        >
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative pb-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === tab.name
                  ? "text-blue-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.name}
              {activeTab === tab.name && (
                <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-blue-600 rounded-full transition-all duration-300"></span>
              )}
            </button>
          ))}
        </div>

        {/* Video Placeholder */}
        <video
          key={activeTab}
          className="w-full h-[350px] md:h-[500px] object-cover z-10"
          src={tabs.find((tab) => tab.name === activeTab).video}
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  );
};

export default HeroSection;
