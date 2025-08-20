import { motion } from "framer-motion";
import img1 from "../../assets/images/24-7 Patient Helpline.png";
import img2 from "../../assets/images/Queries into Visits.png";

export default function SaleandSupport() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* 🔹 Top Border */}
      <div className="border-b border-gray-200"></div>

      <motion.section
        className="w-full min-h-[24rem] px-4 py-12 md:px-12 lg:px-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 relative gap-10 md:gap-16 justify-items-center">
          {/* Vertical Line Between Cards */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gray-200 transform -translate-x-1/2 z-10"></div>

          {/* 🔹 Card 1 - Support */}
          <div className="group relative w-full max-w-[500px] p-8 cursor-pointer transition-all duration-300 bg-white hover:bg-brand-primary rounded-lg">
            <img src={img1} alt="Support" className="mb-4 w-full h-auto" />

            <span className="inline-block text-xs bg-gray-200 text-brand-text px-3 py-1 rounded-full mb-4 group-hover:bg-white group-hover:text-blue-700 font-medium transition">
              Support
            </span>

            <h3 className="text-3xl font-medium text-brand-text group-hover:text-white transition">
              24/7 Patient Helpline
            </h3>

            <p className="text-sm text-brand-text mt-2 group-hover:text-blue-100 transition">
              Answer patient questions, book appointments, and handle complaints
              — even while you sleep.
            </p>
          </div>

          {/* 🔸 Card 2 - Sales */}
          <div className="group relative w-full max-w-[500px] p-8 cursor-pointer transition-all duration-300 bg-white hover:bg-brand-primary rounded-lg">
            <img src={img2} alt="Sales" className="mb-4 w-full h-auto" />

            <span className="inline-block text-xs bg-gray-200 text-brand-text px-3 py-1 rounded-full mb-4 group-hover:bg-white group-hover:text-blue-700 font-medium transition">
              Experience
            </span>

            <h3 className="text-3xl font-medium text-brand-text group-hover:text-white transition">
              Turn Queries into Visits
            </h3>

            <p className="text-sm text-brand-text mt-2 group-hover:text-blue-100 transition">
              Capture interest the moment it happens — instantly, automatically.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 🔹 Bottom Border */}
      <div className="border-b border-gray-200"></div>
    </>
  );
}
