import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import icon from "../../assets/logo/logo.svg";

const SimpleFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-8">
              <img
                src={icon}
                alt="Logo"
                className="w-24 h-24 -mt-5 sm:w-30 sm:h-30 object-contain"
              />
            </Link>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-medium text-brand-primary uppercase tracking-wide mb-6">
              RESOURCES
            </h4>
            <ul className="space-y-4 text-xs">
              <li>
                <Link
                  to="/"
                  onClick={handleScrollToTop}
                  className="text-brand-text hover:text-brand-text transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                  onClick={handleScrollToTop}
                  className="text-brand-text hover:text-brand-text transition-colors duration-200"
                >
                  Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-medium text-brand-primary uppercase tracking-wide mb-6">
              LEGAL
            </h4>
            <ul className="space-y-4 text-xs">
              <li>
                <Link
                  to="/terms"
                  onClick={handleScrollToTop}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  onClick={handleScrollToTop}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Links */}
          <div>
            <h4 className="text-xs font-medium text-brand-primary uppercase tracking-wide mb-6">
              FOLLOW US
            </h4>
            <ul className="space-y-4 text-xs">
              <li>
                <a
                  href="https://twitter.com/nurix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/nurix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/nurix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/nurix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <div className="text-sm text-brand-text mb-4 md:mb-0">
            Olli.AI © 2025
            <br />
            Docplix Solutions Private Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
