import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, X, Menu } from "lucide-react";
import useClickOutside from "../../hooks/useClickOutside";
import icon from "../../assets/logo/logo.svg";
import logo from "../../assets/logo/docplix.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleMobileDropdown = () => setIsMobileDropdownOpen((prev) => !prev);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Handles mobile link clicks safely
  const handleMobileLinkClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 sm:space-x-10">
            <Link to="/" className="flex items-center">
              <img
                src={icon}
                alt="Logo"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
            </Link>
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Docplix Logo"
                className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Solutions Dropdown */}
            {/* <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="font-normal text-xs">SOLUTIONS</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    to="/sales"
                    className="flex items-center px-4 py-2 font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 text-xs"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="text-blue-600 mr-3 text-sm">📈</span>
                    Sales
                  </Link>
                  <Link
                    to="/support"
                    className="flex items-center font-medium px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 text-xs"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="text-blue-600 mr-3 text-base">🎧</span>
                    Support
                  </Link>
                </div>
              )}
            </div> */}
            <Link
              to="/"
              onClick={handleScrollToTop}
              className="flex items-center space-x-1 text-gray-700 "
            >
              <span className="font-normal text-xs">HOME</span>
            </Link>
            <Link
              to="/company"
              onClick={handleScrollToTop}
              className="text-gray-700  transition-colors duration-200 text-xs"
            >
              COMPANY
            </Link>

            <Link
              to="/contact-us"
              onClick={handleScrollToTop}
              className="bg-brand-primary text-white font-light text-xs border rounded-full px-4 py-2"
            >
              LET'S TALK
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {/* Mobile Solutions Dropdown */}
            {/* <div>
              <button
                onClick={toggleMobileDropdown}
                className="flex justify-between items-center w-full text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="font-normal text-sm">SOLUTIONS</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isMobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileDropdownOpen && (
                <div className="mt-2 space-y-2">
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg text-sm"
                    onClick={() => handleMobileLinkClick("/sales")}
                  >
                    📈 Sales
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg text-sm"
                    onClick={() => handleMobileLinkClick("/support")}
                  >
                    🎧 Support
                  </button>
                </div>
              )}
            </div> */}

            <Link
              to="/"
              onClick={() => {
                handleScrollToTop();
                handleMobileLinkClick("/"); // ✅ closes mobile menu after click
              }}
              className="flex justify-between items-center w-full text-gray-700 "
            >
              <span className="font-normal text-sm">HOME</span>
            </Link>
            <button
              onClick={() => handleMobileLinkClick("/company")}
              className="block text-left text-gray-700  duration-200 text-sm"
            >
              COMPANY
            </button>

            <Link
              to="/contact-us"
              onClick={() => {
                handleScrollToTop();
                handleMobileLinkClick("/contact-us"); // ✅ closes mobile menu after click
              }}
              className="block text-center btn-primary text-white bg-brand-primary font-light text-sm border rounded-full px-4 py-2"
            >
              LET'S TALK
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
