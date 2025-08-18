import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import box1 from "../../assets/videos/Box1.mp4";
import box2 from "../../assets/videos/Box2.mp4";
import box3 from "../../assets/videos/Box3.mp4";

const HeroSection = () => {
  const tabs = [
    { id: 1, video: box1, hasSound: false }, // is video me sound hai
    { id: 2, video: box2, hasSound: false }, // muted video
    { id: 3, video: box3, hasSound: true }, // is video me sound hai
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Next video
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tabs.length);
    setIsMuted(false); // har naye video pe default muted
  };

  // Previous video
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
    setIsMuted(true);
  };

  // Auto play next video when current ends
  // const handleEnded = () => {
  //   handleNext();
  // };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !isMuted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-16">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <span className="inline-block text-xs font-normal text-brand-text bg-gray-100 px-3 py-1 rounded-full mb-6">
          All-in-One AI Front Desk
        </span>
        <h1 className="text-3xl md:text-5xl font-medium leading-snug text-brand-text">
          AI Agents That Talk, Remind & Book
        </h1>
        <p className="mt-6 text-brand-text text-sm md:text-base">
          Deliver care instructions, schedule appointments, answer queries,
          collect feedback — all automated with multilingual Voice and Whatsapp
          AI agents.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact-us"
            className="px-6 py-3 border border-gray-400 bg-brand-primary text-white rounded-md transition"
          >
            Get Started for Free
          </Link>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative mt-16 w-full max-w-6xl overflow-hidden">
        <video
          ref={videoRef}
          key={tabs[currentIndex].id}
          className="w-full h-[350px] md:h-[500px] object-cover z-10"
          src={tabs[currentIndex].video}
          autoPlay
          muted={isMuted}
          // onEnded={handleEnded}
        ></video>

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 pt-3 px-1 rounded-full shadow"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 pt-3 px-1 rounded-full shadow"
        >
          ▶
        </button>

        {tabs[currentIndex].hasSound && (
          <button
            onClick={toggleMute}
            className="absolute bottom-10 right-4 bg-white px-3 py-1 rounded-full shadow -mt-10"
          >
            {isMuted ? "🔇 " : "🔊 "}
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
