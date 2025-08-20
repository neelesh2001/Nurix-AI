import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import SimpleFooter from "../components/sections/SimpleFooter";
import { Link } from "react-router-dom";
import Toast from "../components/common/Toast";

const ContactUs = () => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    message: "",
  });
  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000); // hides after 3s
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
        webpage: window.location.pathname,
        businessname: formData.company,
        hearSource: formData.source,
        message: formData.message,
      };

      const res = await axios.post(
        "https://stag.docplix.online/api/docplix/health-locker-web-url/record-visitor-data",
        payload
      );

      console.log("API Response:", res.data);
      showToast("Your details have been submitted successfully!", "success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        source: "",
        message: "",
      });
      setPrivacyAccepted(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast("Something went wrong. Please try again later.", "error");
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <AnimatePresence>
        {toast.show && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ show: false, message: "", type: "" })}
          />
        )}
      </AnimatePresence>
      <motion.section
        className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 w-full max-w-[1100px] mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <span className="inline-flex items-center text-xs py-2 px-1 mb-2">
            <img
              src="https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/668f703d2aa0bf69a597c3d9_Label%20Arrow.svg"
              alt="Logo"
              className="bg-white p-1 rounded-3xl mr-1 w-4"
            />
            Contact Us
          </span>

          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold text-brand-text leading-tight mb-6">
                Start your AI
                <br />
                transformation today!
              </h1>
            </div>
            <div className="flex items-end">
              <p className="text-sm text-brand-text leading-relaxed">
                Build a reliable, scalable, and secure solution that transforms
                interactions into opportunities for growth.
              </p>
            </div>
          </div>
          <div className="border-b border-gray-200 mb-8"></div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-10">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-normal text-brand-text mb-8 mt-3">
                Let's Talk
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 mt-2">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-brand-text mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full py-3 border-b border-gray-300 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full py-3 border-b border-gray-300 text-xs"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-brand-text mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full py-3 border-b border-gray-300 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-brand-text mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      className="w-full py-3 border-b border-gray-300 text-xs"
                    />
                  </div>
                </div>

                {/* Source Dropdown */}
                <div>
                  <label className="block text-xs font-medium text-brand-text mb-2">
                    Where did you hear about us?
                  </label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    className="w-full py-3 border-b border-gray-300 text-xs"
                  >
                    <option value="">Select one...</option>
                    <option value="google">Google/Search Engine</option>
                    <option value="linkedin">LinkedIn/Social Media</option>
                    <option value="referral">
                      Referral (Colleague/Partner)
                    </option>
                    <option value="event">Event/Webinar</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-brand-text mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Your Message"
                    rows={4}
                    className="w-full py-3 border-b border-gray-300 text-xs"
                  ></textarea>
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start sm:items-center space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-brand-text">
                    I allow Olli to contact me for scheduling and marketing, as
                    per its{" "}
                    <Link
                      to="/privacy"
                      className="text-brand-primary underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!privacyAccepted}
                  className={`px-8 py-3 rounded-full font-medium transition-colors duration-200 ${
                    privacyAccepted
                      ? "bg-brand-primary text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-brand-primary rounded-lg p-8 text-white h-fit w-full sm:w-[400px] mx-auto lg:mx-0 mt-10">
              <h3 className="text-2xl font-normal mb-8">Contact Info</h3>

              <div className="space-y-8">
                {/* Location */}
                <div>
                  <div className="inline-block bg-gray-300 text-brand-text px-3 py-1 rounded-full text-xs font-medium mb-4">
                    Location
                  </div>
                  <p className="text-sm ml-1">
                    RKN Heights C-2/143 Vibhuti Khand, Gomti Nagar , Lucknow
                    Uttar Pradesh-226010
                  </p>
                </div>

                {/* Sales Inquiries */}
                <div>
                  <div className="inline-block bg-gray-300 text-brand-text px-3 py-1 rounded-full text-xs font-medium mb-4">
                    Sales Inquiries
                  </div>
                  <p className="text-sm ml-1">hello@olli.ai</p>
                </div>

                {/* Partners */}
                <div>
                  <div className="inline-block bg-gray-300 text-brand-text px-3 py-1 rounded-full text-xs font-medium mb-4">
                    Partners
                  </div>
                  <p className="text-sm ml-1">partners@olli.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <SimpleFooter />
    </>
  );
};

export default ContactUs;
