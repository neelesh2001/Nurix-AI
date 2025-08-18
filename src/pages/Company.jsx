import React, { useEffect, useRef } from "react";
import { Linkedin } from "lucide-react";
import SimpleFooter from "../components/sections/SimpleFooter";
import Navbar from "../components/common/Navbar";
import Footer from "../components/sections/Footer";
import { Link } from "react-router-dom";
import Varun from "../assets/images/Varun.png";
import Aayush from "../assets/images/Aayush.png";

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

      <div className="max-w-7xl px-4 sm:px-6 lg:pl-36 lg:pr-6 mt-12 sm:mt-16 lg:mt-20 bg-white">
        <div className="text-center max-w-5xl mx-auto">
          <span className="inline-block text-xs font-normal text-brand-text bg-gray-100 px-3 py-1  rounded-full mb-6">
            Our Story
          </span>
          <h1 className="text-3xl md:text-5xl font-medium leading-snug text-brand-text">
            Built in India,Trusted Globally — AI-Powered Healthcare with You at
            the Core
          </h1>
          <p className="mt-6 text-brand-text text-sm md:text-base">
            We serve 5M+ patient interactions a year and counting — Olli AI was
            designed from the ground up to empower real-world care, with
            empathy, intelligence, and global scalability.
          </p>
        </div>

        {/* Gradient Background Section */}
        {/* <div className="w-full h-32 sm:h-48 md:h-80 lg:h-[350px] rounded-2xl bg-gradient-to-br from-teal-800 via-amber-600 to-teal-900 shadow-2xl mb-12 sm:mb-16 lg:mb-20 animate-on-scroll">
        </div> */}
        <div className="w-full mt-20 h-44 sm:h-60 md:h-96 lg:h-[500px] rounded-2xl  shadow-2xl mb-12 sm:mb-16 lg:mb-20 animate-on-scroll overflow-hidden">
          <img
            src="https://docplix.com/_next/static/media/about_us_img.94c597c5.svg"
            alt="Team photo"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        <div className="text-center max-w-5xl mx-auto animate-on-scroll">
          <span className="inline-block text-xs font-normal text-brand-text bg-gray-100 px-3 py-1 rounded-full mb-6">
            Our Aim
          </span>
          <h1 className="text-3xl md:text-5xl font-medium leading-snug text-brand-text">
            Your health matters
          </h1>
          <p className="mt-6 text-brand-text text-sm md:text-base">
            <strong className="font-semibold">
              "Your health deserves better than silence between visits. "
            </strong>
            Olli AI is your intelligent healthcare companion — not a chatbot,
            not a virtual doctor — but an always-available ally. Born from
            personal pain and professional insight, Olli was created after a
            4-month diagnostic delay experienced by one of our founders. What
            followed was an AI platform trained not just on symptoms, but on
            human reality: ambiguity, overwhelm, and urgency.
            <br /> <br />
            Built by a team of doctors, engineers, and patients-turned-creators,
            Olli now supports doctors and patients across 800+ clinics and 25+
            hospitals — decoding reports, explaining medical terms, and weaving
            together fragmented data with context-aware AI. We believe AI isn't
            just about speed or automation. It's about not missing the thing
            that matters, because someone was too tired, too rushed, or too
            human. And that future isn't far away.
          </p>
        </div>

        {/* Values Section */}
        <div className="mt-20 sm:mt-24 lg:mt-32 text-center animate-on-scroll">
          <span className="inline-block text-xs font-normal text-brand-text bg-gray-100 px-3 py-1 rounded-full mb-6">
            Our Values
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-brand-text leading-tight  mb-12 sm:mb-16">
            We lead with our principles
          </h2>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Passion Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll stagger-delay-1">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-brand-text"
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
              <h3 className="text-lg sm:text-xl font-medium text-brand-text mb-3 sm:mb-4">
                Passion
              </h3>
              <p className="text-brand-text leading-relaxed text-xs sm:text-sm">
                We're relentless about transforming care — Olli has already
                helped over 200,000+ patients through its AI-driven insights.
              </p>
            </div>

            {/* Customer Focus Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll stagger-delay-2">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-brand-text"
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
              <h3 className="text-lg sm:text-xl font-medium text-brand-text mb-3 sm:mb-4">
                Customer Focus
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Whether you're a doctor, patient, or caregiver — our 24x7 agent
                availability ensures 99.9% uptime, always ready to help.{" "}
              </p>
            </div>

            {/* Transparency Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll stagger-delay-3 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-brand-text"
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
              <h3 className="text-lg sm:text-xl font-medium text-brand-text mb-3 sm:mb-4">
                Transparency
              </h3>
              <p className="text-brand-text leading-relaxed text-xs sm:text-sm">
                From AI explainability to ethical data use, we lead with
                honesty. All AI actions are auditable and medically reviewed.
              </p>
            </div>
          </div>
        </div>

        {/* Benchmark Section */}

        {/* Team Section */}
        <div className="mt-20 sm:mt-24 lg:mt-32 text-center animate-on-scroll">
          <span className="inline-block text-xs font-normal text-brand-text bg-gray-100 px-3 py-1 rounded-full mb-6">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl  font-medium text-brand-text leading-tight mb-12 sm:mb-16">
            Meet the Minds Behind Olli
          </h2>
          <p className="text-brand-text text-sm sm:text-base mb-6 sm:mb-8 max-w-[750px] mx-auto px-4">
            Founded by a doctor-engineer duo, Olli AI blends healthcare depth
            with technical brilliance — ensuring your care is powered by
            compassion, logic, and relentless innovation.
          </p>

          {/* Team Members */}
          <div className="flex ml-6 flex-col gap-16 sm:gap-20 lg:gap-28 mt-16 sm:mt-20 lg:mt-24 mx-auto mb-12 sm:mb-16">
            {/* Member 1 */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left animate-on-scroll stagger-delay-1 gap-8 lg:gap-12">
              <div className="mb-4 sm:mb-6 flex-shrink-0">
                <img
                  src={Varun}
                  alt="Varun Grag"
                  className="w-60 h-72 lg:w-80 lg:h-96 object-cover rounded-xl mx-auto shadow-lg"
                />
                <h3 className="text-xl mt-5 sm:text-2xl font-medium text-brand-text mb-2 lg:ml-20">
                  Varun Garg
                </h3>
                <p className="text-brand-text mb-3 sm:mb-4 text-sm sm:text-base lg:ml-16">
                  CEO, Olli AI, DocPlix
                </p>
                <a
                  href="https://www.linkedin.com/in/dr-varun-garg-903110a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text hover:text-gray-500 transition-colors inline-block lg:ml-28"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 p-1 border rounded-sm mx-auto lg:mx-0 lg:ml-3" />
                </a>
              </div>

              <div className="text-brand-text text-sm sm:text-base leading-relaxed max-w-xl lg:max-w-2xl px-4 lg:px-0">
                A medical doctor and strategic leader, Dr. Varun brings clinical
                depth and operational foresight to Olli AI. With years of
                experience working at the intersection of healthcare delivery,
                policy, and patient advocacy, he ensures the platform stays
                rooted in real-world patient needs and clinical relevance.
                <br />
                <br />
                As CEO of DocPlix and now Olli AI, he has led initiatives across
                public health, digital transformation, and AI adoption at scale
                — especially in underserved regions. His goal: to build
                technology that augments doctors, not replaces them, and creates
                more clarity in every patient journey.
                <br />
                <br />
                <p>
                  <span className="font-bold">Focus Areas</span>: Generative AI,
                  agent architecture, secure infrastructure, and multilingual
                  conversational systems.
                </p>
                <br />
                <p>
                  <span className="font-bold">Vision</span>: A world where every
                  clinical decision and engagement is backed by intelligence,
                  empathy, and context.
                </p>
              </div>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left animate-on-scroll stagger-delay-1 gap-8 lg:gap-12">
              <div className="mb-4 sm:mb-6 flex-shrink-0">
                <img
                  src={Aayush}
                  alt="Aayush Garg"
                  className="w-60 h-72 lg:w-80 lg:h-96 object-cover rounded-xl mx-auto shadow-lg"
                />
                <h3 className="text-xl mt-5 sm:text-2xl font-medium text-brand-text mb-2 lg:ml-20">
                  Aayush Garg
                </h3>
                <p className="text-brand-text mb-3 sm:mb-4 text-sm sm:text-base lg:ml-10 ">
                  Founder & CTO, Olli AI, DocPlix
                </p>
                <a
                  href="https://www.linkedin.com/in/aayush-garg-3123a5b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-500 transition-colors inline-block lg:ml-28"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 p-1 border rounded-sm mx-auto lg:mx-0 lg:ml-5 " />
                </a>
              </div>

              <div className="text-brand-text text-sm sm:text-base leading-relaxed max-w-xl lg:max-w-2xl px-4 lg:px-0">
                Aayush is a tech entrepreneur and AI architect with a mission to
                transform how healthcare systems think, act, and respond. With a
                deep background in building scalable SaaS and AI platforms, he
                leads Olli AI’s product and engineering teams to develop
                intelligent, secure, and empathetic digital agents for clinics
                and hospitals.
                <br />
                <br />
                Aayush previously built DocPlix, a fast-growing healthtech
                company with 4000+ doctors and 2500+ healthcare organisations on
                board, and is now spearheading the AiDa Suite (AI + Data) —
                bringing real-time AI agents to the frontlines of healthcare.
                <br />
                <br />
                <span className="font-bold">
                  He believes great health AI isn’t just smart — it should be
                  trusted, transparent, and truly helpful.
                </span>
                <br />
                <br />
                <p>
                  <span className="font-bold">Focus Areas</span>: Generative AI,
                  agent architecture, secure infrastructure, and multilingual
                  conversational systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;
