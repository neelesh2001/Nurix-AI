import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import icon from "../../assets/logo.svg";

const SimpleFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
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
                className="w-24 h-24 sm:w-30 sm:h-30 object-contain"
              />
            </Link>

            <div>
              <h3 className="text-lg font-normal text-gray-900 mb-4">
                Subscribe to Newsletter
              </h3>

              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 border-b text-xs border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none text-gray-600 placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="ml-2 p-2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-6">
              COMPANY
            </h4>
            <ul className="space-y-4 text-xs">
              <li>
                <Link
                  to="/company"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/dpa"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  DPA
                </Link>
              </li>
              <li>
                <Link
                  to="/baa"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  BAA
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-6">
              SOLUTIONS
            </h4>
            <ul className="space-y-4 text-xs">
              <li>
                <Link
                  to="/sales"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/why-nurix"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Why Olli?
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Links */}
          <div>
            <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-6">
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
            </ul>
          </div>
        </div>

        {/* <div className="mb-16">
          <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-6">
            CERTIFICATES
          </h4>

          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-700">ISO</div>
                  <div className="text-xs text-gray-600">27001</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                ISO
                <br />
                27001
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-700">AICPA</div>
                  <div className="text-xs text-gray-600">SOC 2</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                AICPA
                <br />
                SOC 2
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-700">GDPR</div>
                  <div className="text-xs text-gray-600">compliant</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                GDPR
                <br />
                compliant
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg">⚕</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                HIPAA
                <br />
                compliant
              </div>
            </div>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">© 2024 Nurix</div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
