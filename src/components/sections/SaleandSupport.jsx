import { motion } from "framer-motion";

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
      <div className="border-b border-gray-200 "></div>

      <motion.section
        className="w-full min-h-[24rem] px-4 py-12 md:px-12 lg:px-20 -mt-6 bg-white "
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
            <svg
              viewBox="0 0 620 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 w-full h-auto"
            >
              <path
                opacity="0.2"
                d="M130.65 25.4621L126.085 42.5"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M98.0849 147L93.3163 164.797"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M162.852 44.3516L150.204 57"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M74.2065 133L60.8535 146.353"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M181.295 76.8122L163.802 81.5"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M59.5 109.449L41.9609 114.149"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M181.037 114.146L163.5 109.448"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M59 81.4474L41.702 76.8125"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M162.147 146.349L149 133.202"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M72.5 57.207L59.6465 44.3535"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M129.685 164.792L124.918 147"
                stroke="currentColor"
              />
              <path
                opacity="0.2"
                d="M96.9171 42.5L92.3504 25.4574"
                stroke="currentColor"
              />
              <rect
                x="39.5"
                y="22.5"
                width="144"
                height="144"
                rx="72"
                stroke="currentColor"
              />
              <rect
                opacity="0.2"
                x="48.5"
                y="31.5"
                width="126"
                height="126"
                rx="63"
                stroke="currentColor"
              />
              <rect
                x="57.5"
                y="40.5"
                width="108"
                height="108"
                rx="54"
                stroke="currentColor"
              />
              <rect
                x="94.5"
                y="77.5"
                width="34"
                height="34"
                rx="17"
                stroke="currentColor"
              />
              <path
                d="M0 94.5H620"
                stroke="currentColor"
                strokeDasharray="3 3"
              />
              <path
                d="M112 0L112 188"
                stroke="currentColor"
                strokeDasharray="3 3"
              />
            </svg>

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
            <svg
              viewBox="0 0 620 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 w-full h-auto"
            >
              <rect
                x="39.5"
                y="21.5"
                width="144"
                height="144"
                rx="72"
                stroke="currentColor"
              />
              <rect
                opacity="0.2"
                x="61.5"
                y="32.5"
                width="122"
                height="122"
                rx="61"
                stroke="currentColor"
              />
              <rect
                opacity="0.2"
                x="94.5"
                y="49"
                width="89"
                height="89"
                rx="44.5"
                stroke="currentColor"
              />
              <rect
                opacity="0.2"
                x="122.5"
                y="63"
                width="61"
                height="61"
                rx="30.5"
                stroke="currentColor"
              />
              <rect
                opacity="0.2"
                x="136.5"
                y="70"
                width="47"
                height="47"
                rx="23.5"
                stroke="currentColor"
              />
              <rect
                x="150.5"
                y="77"
                width="33"
                height="33"
                rx="16.5"
                stroke="currentColor"
              />
              <path
                d="M0 93.5H620"
                stroke="currentColor"
                strokeDasharray="3 3"
              />
              <line
                x1="167.5"
                y1="0"
                x2="167.5"
                y2="188"
                stroke="currentColor"
                strokeDasharray="3 3"
              />
            </svg>

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

      <div className="border-b border-gray-200 -mt-[47px]"></div>
    </>
  );
}
