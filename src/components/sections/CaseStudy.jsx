// import { ArrowRight, ArrowLeft } from "lucide-react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useRef } from "react";

// const caseStudies = [
//   {
//     id: 1,
//     title: "Cult.fit scaled customer support with AI-Powered Support",
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
//     brand: "cult.fit",
//   },
//   {
//     id: 2,
//     title: "super.money Streamlined Social Media Support with AI",
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81673f1b1f3544c75a_super.money%20-%20new.avif",
//     brand: "super money",
//   },
//   {
//     id: 3,
//     title: "Zappos AI Chat Assistant Boosted Support CSAT",
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81bb07e2af7289629b_First%20Mid%20-%20new.avif",
//     brand: "zappos",
//   },
//   {
//     id: 4,
//     title: "Freshdesk Enabled Smarter Ticket Resolution with Nurix",
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
//     brand: "freshdesk",
//   },
// ];

// export default function CaseStudiesSection() {
//   const scrollRef = useRef();

//   const scroll = (direction) => {
//     const container = scrollRef.current;
//     const scrollAmount = 400;

//     if (direction === "left") {
//       container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   // Animation for the entire section
//   const sectionVariants = {
//     hidden: {
//       opacity: 0,
//       y: 60,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <>
//       <div className="border-b border-gray-200 mt-16"></div>

//       <motion.section
//         className="py-12 bg-white ml-32"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//           <div>
//             <span className="inline-block text-xs font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full mb-2">
//               Case Studies
//             </span>
//             <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 max-w-xl">
//               How leading teams benefit from Nurix
//             </h2>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex gap-2 mt-4 md:mt-0">
//             <button
//               onClick={() => scroll("left")}
//               className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
//             >
//               <ArrowLeft />
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition mr-40"
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* Cards - Horizontal Scroll */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 hide-scrollbar overflow-x-auto scroll-smooth no-scrollbar pb-2"
//         >
//           {caseStudies.map((study) => (
//             <div
//               key={study.id}
//               className="relative custom-cut-corner min-w-[300px] md:min-w-[400px] h-[320px] overflow-hidden group flex-shrink-0 cursor-pointer shadow"
//             >
//               <img
//                 src={study.image}
//                 alt={study.title}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-between p-6">
//                 <div>
//                   <div className="text-white font-semibold text-xl capitalize">
//                     {study.brand}
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-white text-lg font-semibold max-w-sm">
//                     {study.title}
//                   </p>
//                 </div>
//                 <div className="absolute bottom-6 right-6">
//                   <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition">
//                     <ArrowRight size={20} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-col sm:flex-row gap-4">
//           <Link
//             to="/contact"
//             className="px-4 py-3 bg-blue-600 text-white rounded-full font-medium text-xs hover:bg-blue-700 transition"
//           >
//             LET'S TALK
//           </Link>
//           <Link
//             to="/case-studies"
//             className="px-5 py-3 border border-gray-300 text-gray-900 rounded-full font-bold text-xs hover:bg-gray-50 transition"
//           >
//             VIEW ALL
//           </Link>
//         </div>
//       </motion.section>
//     </>
//   );
// }

import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const caseStudies = [
  {
    id: 1,
    title: "Cult.fit scaled customer support with AI-Powered Support",
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
    brand: "cult.fit",
  },
  {
    id: 2,
    title: "super.money Streamlined Social Media Support with AI",
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81673f1b1f3544c75a_super.money%20-%20new.avif",
    brand: "super money",
  },
  {
    id: 3,
    title: "Zappos AI Chat Assistant Boosted Support CSAT",
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81bb07e2af7289629b_First%20Mid%20-%20new.avif",
    brand: "zappos",
  },
  {
    id: 4,
    title: "Freshdesk Enabled Smarter Ticket Resolution with Nurix",
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
    brand: "freshdesk",
  },
];

export default function CaseStudiesSection() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    // Dynamically calculate card width
    const card = container.querySelector("div");
    if (!card) return;

    const cardWidth = card.offsetWidth + 24; // +24px for gap-6
    const scrollAmount = cardWidth;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="border-b border-gray-200 mt-16"></div>

      <motion.section
        className="py-12 bg-white px-4 md:px-12 lg:px-20 xl:px-32 ml-0 md:ml-12 lg:ml-32"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 md:gap-0">
          <div>
            <span className="inline-block text-xs font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full mb-2">
              Case Studies
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 max-w-xl">
              How leading teams benefit from Nurix
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 mt-2 md:mt-0 self-start md:self-center">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Cards - Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative custom-cut-corner min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[280px] sm:h-[300px] md:h-[320px] overflow-hidden group flex-shrink-0 cursor-pointer shadow"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-between p-4 sm:p-6">
                <div>
                  <div className="text-white font-semibold text-lg sm:text-xl capitalize">
                    {study.brand}
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base md:text-lg font-semibold max-w-sm">
                    {study.title}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition">
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact-us"
            className="px-4 py-3 bg-blue-600 text-white rounded-full font-medium text-xs hover:bg-blue-700 transition text-center"
          >
            LET'S TALK
          </Link>
          <Link
            to="/case-studies"
            className="px-5 py-3 border border-gray-300 text-gray-900 rounded-full font-bold text-xs hover:bg-gray-50 transition text-center"
          >
            VIEW ALL
          </Link>
        </div>
      </motion.section>
    </>
  );
}
