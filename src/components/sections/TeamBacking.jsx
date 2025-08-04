import { motion } from "framer-motion";
import bg from "../../assets/investor.png";
import { Link } from "react-router-dom";

const TeamBacking = () => {
  // Animation for the entire section
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <motion.section
      className="bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
        {/* Header Badge */}
        <div className="inline-block bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-normal mb-8">
          Team & Backing
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight mb-6">
          Built by Healthcare Engineers. <br />
          Backed by Visionary Investors
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          Olli AI is developed by experts from top healthtech & AI companies —
          with backing from global leaders in innovation.
        </p>

        {/* CTA Button */}
        <Link
          to="/company"
          onClick={handleScrollToTop}
          className="inline-flex items-center bg-brand-background text-black border rounded-full px-4 py-3 font-semibold transition-colors duration-200 text-xs"
        >
          MEET THE TEAM
        </Link>
      </div>
      <div className="w-full -mt-12">
        <img src={bg} alt="Logo" className="w-full h-auto object-cover block" />
      </div>
    </motion.section>
  );
};

export default TeamBacking;
