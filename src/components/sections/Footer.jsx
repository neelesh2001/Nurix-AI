// components/common/Footer.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import icon from "../../assets/logo_light.svg";
import AES from "../../assets/AES.png";
import ABDM from "../../assets/ABDM.png";
import AWS from "../../assets/AWS.png";
import DPIIT from "../../assets/DPIIT.png";
import META from "../../assets/META.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Section - Newsletter */}
          <div className="lg:col-span-2 space-y-8 w-[450px]">
            {/* Logo and Tagline */}
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <img
                  src={icon}
                  alt="Logo"
                  className="w-32 h-32 -mt-5 sm:w-36 sm:h-36 object-contain"
                />{" "}
              </Link>
              <p className="text-gray-400 text-sm">Future of Enterprise AI</p>
            </div>

            {/* Certification Badges */}
            <div className="flex flex-wrap justify-start gap-5 mt-6  ">
              <img src={AES} alt="AES" className="w-12 h-12 sm:w-14 sm:h-14 " />

              <img
                src={ABDM}
                alt="ABDM"
                className="w-12 h-12 sm:w-14 sm:h-14  "
              />

              <img src={AWS} alt="AWS" className="w-12 h-12 sm:w-14 sm:h-14 " />

              <img
                src={DPIIT}
                alt="DPIIT"
                className="w-12 h-12 sm:w-14 sm:h-14 "
              />
              <img
                src={META}
                alt="META"
                className="w-12 h-12 sm:w-14 sm:h-14 "
              />
            </div>

            {/* Newsletter Subscription */}
            {/* <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Subscribe to our</h3>
                <h3 className="text-sm font-semibold">Newsletter</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  SUBMIT
                </button>
              </form>
            </div> */}
          </div>

          {/* Company Links */}
          <div className="space-y-4 mt-6">
            <h4 className="text-brand-secondary font-semibold text-xs tracking-wide">
              RESOURCES
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={handleScrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                  onClick={handleScrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4 mt-5">
            <h4 className="text-brand-secondary font-semibold text-xs tracking-wide">
              LEGAL
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  onClick={handleScrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  onClick={handleScrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry & Resources */}
          <div className="space-y-6"></div>
        </div>

        {/* Resources & Legal Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 pt-6 border-t border-gray-800">
          {/* Social & Copyright */}
          <div className="lg:col-span-2 space-y-6">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/nurix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/docplix/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@DocplixRx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/nurix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              Olli.AI © 2025 <br /> Docplix Solutions Private Limited. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Large NURIX Background Text */}
      <div className="relative overflow-hidden mr-0 md:mr-80">
        <div className="absolute inset-0 flex items-end justify-center md:items-center md:justify-end pr-0 md:pr-8">
          <div className="text-brand-surface font-black text-[6rem] md:text-[12rem] lg:text-[16rem] leading-none opacity-15 select-none">
            Olli.A
          </div>
          {/* Blue Arrow */}
          <div className="text-brand-secondary font-black text-[6rem] md:text-[12rem] lg:text-[16rem] leading-none opacity-20 ml-2 md:ml-4">
            I
          </div>
        </div>
        <div className="h-24 md:h-40 lg:h-48"></div>
      </div>
    </footer>
  );
};

export default Footer;
