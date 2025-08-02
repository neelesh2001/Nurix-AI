import React, { useEffect, useRef } from "react";
import { Linkedin } from "lucide-react";
import SimpleFooter from "../components/sections/SimpleFooter";
import Navbar from "../components/common/Navbar";

const Company = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all elements with the animate-on-scroll class
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-on-scroll:nth-child(1) {
          transition-delay: 0.1s;
        }
        .animate-on-scroll:nth-child(2) {
          transition-delay: 0.2s;
        }
        .animate-on-scroll:nth-child(3) {
          transition-delay: 0.3s;
        }
        .animate-on-scroll:nth-child(4) {
          transition-delay: 0.4s;
        }
        .animate-on-scroll:nth-child(5) {
          transition-delay: 0.5s;
        }
        .animate-on-scroll:nth-child(6) {
          transition-delay: 0.6s;
        }

        .stagger-delay-1 {
          transition-delay: 0.1s;
        }
        .stagger-delay-2 {
          transition-delay: 0.2s;
        }
        .stagger-delay-3 {
          transition-delay: 0.3s;
        }
        .stagger-delay-4 {
          transition-delay: 0.4s;
        }
        .stagger-delay-5 {
          transition-delay: 0.5s;
        }
        .stagger-delay-6 {
          transition-delay: 0.6s;
        }
      `}</style>

      <div className="max-w-7xl px-4 sm:px-6 lg:pl-36 lg:pr-6 mt-12 sm:mt-16 lg:mt-20">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 animate-on-scroll">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
            {/* Left side - Main heading */}
            <div className="lg:w-1/2">
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                Our Story
              </p>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 leading-tight mt-10">
                Putting <span className="">you</span>
                <br />
                at the centre of
                <br />
                healthcare
              </h1>
            </div>

            {/* Right side - Tagline */}
            <div className="lg:w-1/2 lg:text-right lg:pt-20 mt-8 sm:mt-12 lg:mt-40 lg:mr-20">
              <p className="text-gray-600 text-base sm:text-lg font-normal">
                Building from India, for the world
              </p>
            </div>
          </div>
        </div>

        {/* Gradient Background Section */}
        <div className="w-full h-32 sm:h-48 md:h-80 lg:h-[350px] rounded-2xl bg-gradient-to-br from-teal-800 via-amber-600 to-teal-900 shadow-2xl mb-12 sm:mb-16 lg:mb-20 animate-on-scroll">
          {/* You can add content here if needed */}
        </div>

        {/* Story Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start animate-on-scroll">
          {/* Left side - Your health matters */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 leading-tight ">
              <span className="">Your health</span>
              <br />
              matters
            </h2>
          </div>

          {/* Right side - Story content */}
          <div className="space-y-4 sm:space-y-6 ">
            <p className="text-gray-900 text-sm sm:text-sm leading-relaxed">
              Olli is your health companion AI:{" "}
              <strong className="font-semibold">
                "designed not to replace doctors, but to offer clarity and
                reassurance in the chaotic silence between visits"
              </strong>
              .
            </p>

            <p className="text-gray-700 text-sm sm:text-sm leading-relaxed">
              We're a multi-disciplinary team of doctors, engineers, and data
              scientists who've lived both sides of the healthcare experience:
              as practitioners and as patients. Our work is grounded in a deep
              understanding of how healthcare actually unfolds in the real
              world: with ambiguity, overwhelm, and often, silence.
            </p>

            <p className="text-gray-700 text-sm sm:text-sm leading-relaxed">
              The idea for August began in 2022, after one of our founders,
              Anuruddh, went through a painful four-month misdiagnosis for
              rheumatoid arthritis. Despite access to doctors, lab tests, and
              second opinions, the answers never quite added up. It took his own
              deep dive into reports and symptoms to uncover the real issue: a
              simple nutritional imbalance. The system hadn't failed
              maliciously; it had just left him to figure it out alone.
            </p>

            <p className="text-gray-700 text-sm sm:text-sm leading-relaxed">
              That experience wasn't rare. It was far too common.
            </p>

            <p className="text-gray-700 text-sm sm:text-sm leading-relaxed">
              So we started building. Not a chatbot. Not a virtual doctor. But a
              companion: one that could read prescriptions, interpret lab
              reports, explain medical terms, and help you piece things together
              when no one else has the time. We began with computational
              algorithms that make sense of scattered health data and are now
              building toward a future where AI becomes a deeply empathetic
              force in healthcare.
            </p>

            <p className="text-gray-700 text-sm sm:text-sm leading-relaxed">
              We believe AI isn't just about speed or automation. It's about not
              missing the thing that matters, because someone was too tired, too
              rushed, or too human. And that future isn't far away.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 sm:mt-24 lg:mt-32 text-center animate-on-scroll">
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            Our Values
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 leading-tight  mb-12 sm:mb-16">
            We lead with
            <br />
            <span className="">our principles</span>
          </h2>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Passion Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll stagger-delay-1">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                Passion
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-xs">
                We care deeply about your health and the problem that we are
                solving.
              </p>
            </div>

            {/* Customer Focus Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll stagger-delay-2">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                Customer Focus
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-xs">
                Whatever you need, whenever you need - we are here to help.
              </p>
            </div>

            {/* Transparency Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll stagger-delay-3 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                Transparency
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                We accept our strengths and flaws. We know August has a long way
                to go and we'll keep building until it's the way you look at
                your health.
              </p>
            </div>
          </div>
        </div>

        {/* Benchmark Section */}
        <div className="mt-20 sm:mt-24 lg:mt-32 animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
                Benchmarking Successful
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 leading-tight mb-6 sm:mb-8">
                <span>Olli is the</span>
                <br />
                <span>top Health AI</span>
                <br />
                <span>in the world</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 max-w-md">
                We scored 94.8% in the US Medical Licensing Examination. This is
                one of the standard benchmarks used for HealthAIs. Check the
                image to see how August compares
              </p>
              <button className="inline-flex text-gray-900 font-medium text-sm">
                Learn More
                <svg
                  className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* Right side - Benchmark chart */}
            <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="space-y-4 sm:space-y-6">
                {/* Each benchmark item */}
                {[
                  {
                    name: "Olli",
                    score: "94.8",
                    color: "bg-green-400",
                    highlight: true,
                  },
                  {
                    name: "Open Evidence",
                    score: "90.7",
                    color: "bg-gray-400",
                  },
                  {
                    name: "Hippocratic AI",
                    score: "89.9",
                    color: "bg-pink-400",
                  },
                  { name: "GPT-4", score: "87.8", color: "bg-teal-400" },
                  {
                    name: "Anthropic Claude 2",
                    score: "66.5",
                    color: "bg-purple-400",
                  },
                  { name: "ChatGPT", score: "58.7", color: "bg-green-400" },
                ].map((item, index) => (
                  <div
                    key={item.name}
                    className={`animate-on-scroll stagger-delay-${index + 1}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {item.highlight && (
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-400 mr-2 sm:mr-3"></div>
                        )}
                        <span
                          className={`text-xs sm:text-sm ${
                            item.highlight
                              ? "text-white font-medium"
                              : "text-gray-300"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                      <span
                        className={`text-xs sm:text-sm ${
                          item.highlight
                            ? "text-white font-semibold"
                            : "text-gray-300"
                        }`}
                      >
                        {item.score} %
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <div
                        className={`${item.color} h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 sm:mt-24 lg:mt-32 text-center animate-on-scroll">
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            Our Team
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 leading-tight mb-12 sm:mb-16">
            The
            <br />
            <span className="">team behind</span> Olli.AI
          </h2>

          {/* Team Members */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 lg:gap-28 mt-16 sm:mt-20 lg:mt-24 max-w-6xl mx-auto mb-12 sm:mb-16">
            {/* Aayush Garg */}
            <div className="text-center animate-on-scroll stagger-delay-1">
              <div className="mb-4 sm:mb-6">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEi6cXTARR9uw/profile-displayphoto-shrink_800_800/B56ZSdCP4wGsAc-/0/1737801400572?e=1756339200&v=beta&t=HKM70ABdvRj_yMdHu5I_j0Q-AR8xPZcFVLx0C9Z-GOM"
                  alt="Aayush Grag"
                  className="w-48 h-60 sm:w-60 sm:h-72 lg:w-80 lg:h-96 object-cover rounded-2xl mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                Aayush Grag
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Founder and CTO
              </p>
              <a
                href="https://www.linkedin.com/in/aayush-garg-3123a5b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-500 transition-colors inline-block"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 p-1 border rounded-sm" />
              </a>
            </div>

            {/* Samarth Sharma */}
            <div className="text-center animate-on-scroll stagger-delay-2">
              <div className="mb-4 sm:mb-6">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGgcg3ipamtsQ/profile-displayphoto-shrink_800_800/B56ZTPlNYsHwAg-/0/1738649427626?e=1756339200&v=beta&t=REq92zQiJ0oET3sz3Y6M6fQ4ZcrVw1fzT5K9L6DOwDQ"
                  alt="Varun Garg"
                  className="w-48 h-60 sm:w-60 sm:h-72 lg:w-80 lg:h-96 object-cover rounded-2xl mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                Dr. Varun Garg
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                CEO
              </p>
              <a
                href="https://www.linkedin.com/in/dr-varun-garg-903110a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-500 transition-colors inline-block"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 p-1 border rounded-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default Company;
