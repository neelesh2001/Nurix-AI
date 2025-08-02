// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Footer from "../components/sections/Footer";
// import icon from "../assets/icon.svg";
// import UseCases from "../components/sections/UseCases";

// const Sales = () => {
//   const statsVariants = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const statItemVariants = {
//     hidden: {
//       opacity: 0,
//       x: -60,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   // ✅ Added missing sectionVariants
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const items = [
//     "Qualify Lead",
//     "Route & Schedule",
//     "Engage Prospect",
//     "Assist & Upsell",
//     "Discover Intent",
//   ];

//   const radius = 185;
//   const [angle, setAngle] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAngle((prev) => prev + 2);
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full bg-white">
//       {/* --- HERO SECTION WITH ROTATING WHEEL --- */}
//       <div
//         className="flex h-[500px] flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 relative overflow-hidden"
//         style={{
//           backgroundImage:
//             "url('https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6842c12c45ec90209c9b7470_nb-industry-hero-bg.avif')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="text-center md:text-left md:w-1/2 space-y-6 ml-28">
//           <p className="text-blue-600 font-medium">● Sales</p>
//           <h1 className="text-3xl md:text-4xl font-medium leading-tight">
//             Sell Smarter, Close Faster <br />
//             with Our Voice Agents
//           </h1>
//           <p className="text-gray-600 text-sm">
//             Intelligent Voice Agents for Seamless Support and Smarter Sales
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-20">
//             <button className="px-5 py-1 rounded-full text-xs bg-brand-secondary text-white font-normal shadow-md hover:scale-105 transition">
//               BOOK A DEMO
//             </button>
//             <button className="px-6 py-3  text-xs rounded-full border border-gray-300 font-normal hover:bg-gray-100 transition">
//               ● TALK TO OUR AI SUPPORT REP
//             </button>
//           </div>
//         </div>

//         <div className="relative mt-12 md:mt-0 md:w-1/2 flex justify-center">
//           <div className="relative w-[350px] h-[350px] rounded-full border-4 border-brand-primary flex items-center justify-center">
//             {items.map((item, index) => {
//               const angleDeg = (360 / items.length) * index + angle;
//               const x = radius * Math.cos((angleDeg * Math.PI) / 180);
//               const y = radius * Math.sin((angleDeg * Math.PI) / 180);

//               return (
//                 <motion.div
//                   key={index}
//                   className="absolute bg-white px-3 py-1 rounded-md shadow-md text-sm font-medium border whitespace-nowrap"
//                   style={{
//                     transform: `translate(${x}px, ${y}px)`,
//                   }}
//                 >
//                   ● {item}
//                 </motion.div>
//               );
//             })}
//             <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
//               <img
//                 src={icon}
//                 alt="Olli Icon"
//                 className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- IMPACT SECTION --- */}
//       <div className="border-b border-gray-200 mt-16 "></div>

//       <motion.div
//         className="px-6 md:px-16 py-20"
//         style={{
//           backgroundImage:
//             "url('https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6842c12c45ec90209c9b7470_nb-industry-hero-bg.avif')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <p className="text-blue-600 font-medium ml-20 mb-3">● Impact</p>
//         <div className="flex">
//           <h2 className="text-4xl md:text-5xl font-medium mb-8 ml-20">
//             Drive Measurable Impact
//           </h2>
//           <p className="text-gray-700 mb-5 max-w-xs ml-32 text-sm">
//             Consistent, human-like conversations that turn leads into
//             opportunities – and opportunities into revenue.
//           </p>
//         </div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-32"
//           variants={statsVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <motion.div variants={statItemVariants}>
//             <h3 className="text-8xl font-bold text-blue-600">35%</h3>
//             <p className="mt-4 text-xs text-gray-700 uppercase">
//               Increase in SQL Conversion Rates
//             </p>
//           </motion.div>
//           <motion.div variants={statItemVariants}>
//             <h3 className="text-8xl font-bold text-blue-600">25%</h3>
//             <p className="mt-4 text-xs text-gray-700 uppercase">
//               Reduction in Customer Acquisition Cost (CAC)
//             </p>
//           </motion.div>
//           <motion.div variants={statItemVariants}>
//             <h3 className="text-8xl font-bold text-blue-600">3X</h3>
//             <p className="mt-4 text-xs text-gray-700 uppercase">
//               Pipeline Coverage Without Expanding Headcount
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       <div className="border-b border-gray-200"></div>
//       <UseCases />
//       <Footer />
//     </section>
//   );
// };

// export default Sales;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/sections/Footer";
import icon from "../assets/icon.svg";
import UseCases from "../components/sections/UseCases";

const Sales = () => {
  const statsVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const statItemVariants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const items = [
    "Qualify Lead",
    "Route & Schedule",
    "Engage Prospect",
    "Assist & Upsell",
    "Discover Intent",
  ];

  const radius = 120;
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 2);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white">
      <div
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6842c12c45ec90209c9b7470_nb-industry-hero-bg.avif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center md:text-left md:w-1/2 space-y-6 md:ml-20">
          <p className="text-blue-600 font-medium">● Sales</p>
          <h1 className="text-3xl md:text-4xl font-medium leading-tight">
            Sell Smarter, Close Faster <br />
            with Our Voice Agents
          </h1>
          <p className="text-gray-600 text-sm">
            Intelligent Voice Agents for Seamless Support and Smarter Sales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-10">
            <button className="px-5 py-1 rounded-full text-xs bg-brand-secondary text-white font-normal shadow-md hover:scale-105 transition">
              BOOK A DEMO
            </button>
            <button className="px-6 py-3 text-xs rounded-full border border-gray-300 font-normal hover:bg-gray-100 transition">
              ● TALK TO OUR AI SUPPORT REP
            </button>
          </div>
        </div>

        <div className="relative mt-12 md:mt-0 w-full md:w-1/2 flex justify-center">
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] rounded-full border-4 border-brand-primary flex items-center justify-center">
            {items.map((item, index) => {
              const angleDeg = (360 / items.length) * index + angle;
              const x = radius * Math.cos((angleDeg * Math.PI) / 180);
              const y = radius * Math.sin((angleDeg * Math.PI) / 180);

              return (
                <motion.div
                  key={index}
                  className="absolute bg-white px-2 py-1 rounded-md shadow-md text-[10px] sm:text-xs font-medium border whitespace-nowrap"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  ● {item}
                </motion.div>
              );
            })}
            <div className="w-16 h-16  sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              <img
                src={icon}
                alt="Olli Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 mt-16" />

      <motion.div
        className="px-6 md:px-16 py-20"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6842c12c45ec90209c9b7470_nb-industry-hero-bg.avif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-blue-600 font-medium ml-4 md:ml-20 mb-3">● Impact</p>
        <div className="flex flex-col md:flex-row md:items-center">
          <h2 className="text-3xl md:text-5xl font-medium mb-6 md:mb-8 ml-4 md:ml-20">
            Drive Measurable Impact
          </h2>
          <p className="text-gray-700 mb-5 max-w-xs ml-4 md:ml-32 text-sm">
            Consistent, human-like conversations that turn leads into
            opportunities – and opportunities into revenue.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center pt-20"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={statItemVariants}>
            <h3 className="text-5xl md:text-8xl font-bold text-blue-600">
              35%
            </h3>
            <p className="mt-4 text-xs text-gray-700 uppercase">
              Increase in SQL Conversion Rates
            </p>
          </motion.div>
          <motion.div variants={statItemVariants}>
            <h3 className="text-5xl md:text-8xl font-bold text-blue-600">
              25%
            </h3>
            <p className="mt-4 text-xs text-gray-700 uppercase">
              Reduction in Customer Acquisition Cost (CAC)
            </p>
          </motion.div>
          <motion.div variants={statItemVariants}>
            <h3 className="text-5xl md:text-8xl font-bold text-blue-600">3X</h3>
            <p className="mt-4 text-xs text-gray-700 uppercase">
              Pipeline Coverage Without Expanding Headcount
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="border-b border-gray-200" />
      <UseCases />
      <Footer />
    </section>
  );
};

export default Sales;
