// import bg from "../../assets/investor.png";

// const Investors = () => {
//   return (
//     <section className="bg-white">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
//         {/* Header Badge */}
//         <div className="inline-block bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-normal mb-8">
//           Investors
//         </div>

//         {/* Main Heading */}
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight mb-6">
//           Led by Experts, and
//           <br />
//           Backed by Top Investors.
//         </h2>

//         {/* Description */}
//         <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
//           Nurix is built by engineers from top tech companies and institutions —
//           the minds behind the intelligence and precision of our agents.
//         </p>

//         {/* CTA Button */}
//         <button className="inline-flex items-center bg-brand-background text-black border rounded-full px-4 py-3 font-semibold transition-colors duration-200 text-xs">
//           MEET THE TEAM
//         </button>
//       </div>
//       <div className="w-full -mt-12">
//         <img src={bg} alt="Logo" className="w-full h-auto object-cover block" />
//       </div>
//     </section>
//   );
// };

// export default Investors;
import { motion } from "framer-motion";
import bg from "../../assets/investor.png";

const Investors = () => {
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
          Investors
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight mb-6">
          Led by Experts, and
          <br />
          Backed by Top Investors.
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          Nurix is built by engineers from top tech companies and institutions —
          the minds behind the intelligence and precision of our agents.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center bg-brand-background text-black border rounded-full px-4 py-3 font-semibold transition-colors duration-200 text-xs">
          MEET THE TEAM
        </button>
      </div>
      <div className="w-full -mt-12">
        <img src={bg} alt="Logo" className="w-full h-auto object-cover block" />
      </div>
    </motion.section>
  );
};

export default Investors;
