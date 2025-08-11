// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const tabs = [
//   {
//     title: "Reliable",
//     description: (
//       <>
//         <p className="font-semibold text-lg mb-2">Insights That Drive Action</p>
//         <ul className="list-none space-y-2 text-sm">
//           <li>
//             <span className="text-blue-500">🔹</span> Automated QA across 100%
//             of conversations
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Real-time anomaly
//             detection and alerts
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Identify customer trends,
//             sentiment, and bottlenecks
//           </li>
//         </ul>
//       </>
//     ),
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
//   },
//   {
//     title: "Actionable",
//     description: (
//       <>
//         <p className="font-semibold text-lg mb-2">Insights That Drive Action</p>
//         <ul className="list-none space-y-2 text-sm">
//           <li>
//             <span className="text-blue-500">🔹</span> Automated QA across 100%
//             of conversations
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Real-time anomaly
//             detection and alerts
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Identify customer trends,
//             sentiment, and bottlenecks
//           </li>
//         </ul>
//       </>
//     ),
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81673f1b1f3544c75a_super.money%20-%20new.avif",
//   },
//   {
//     title: "Adaptive",
//     description: (
//       <>
//         <p className="font-semibold text-lg mb-2">Insights That Drive Action</p>
//         <ul className="list-none space-y-2 text-sm">
//           <li>
//             <span className="text-blue-500">🔹</span> Automated QA across 100%
//             of conversations
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Real-time anomaly
//             detection and alerts
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Identify customer trends,
//             sentiment, and bottlenecks
//           </li>
//         </ul>
//       </>
//     ),
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81bb07e2af7289629b_First%20Mid%20-%20new.avif",
//   },
// ];

// export default function FeatureTabs() {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [loadingIndex, setLoadingIndex] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextIndex = (activeIndex + 1) % tabs.length;
//       setLoadingIndex(nextIndex);
//       setActiveIndex(nextIndex);

//       setTimeout(() => {
//         setLoadingIndex(null);
//       }, 2000); // match loader animation
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   const handleTabClick = (index) => {
//     if (index === activeIndex || loadingIndex !== null) return;
//     setActiveIndex(index);

//     setLoadingIndex(index);

//     setTimeout(() => {
//       setLoadingIndex(null);
//     }, 300);
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
//         className="bg-white py-12 px-4 md:px-16 w-[1100px] ml-52"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-700">
//             For Enterprises
//           </span>
//           <div className="flex items-center gap-8">
//             <h2 className="text-xl md:text-2xl font-medium mt-4 mb-6 w-[400px]">
//               Built to Scale and Perform with Enterprise-grade Excellence
//             </h2>
//             <p className="text-gray-700 w-80 mb-8 ml-20 text-sm">
//               From secure deployment to continuous optimization, Nurix ensures
//               your AI journey is guided, reliable, and delivers lasting impact.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Left image section */}
//             <div className="w-full h-[400px] md:h-[250px] bg-white flex items-center justify-center shadow mt-4">
//               <img
//                 src={tabs[activeIndex].image}
//                 alt={tabs[activeIndex].title}
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* Right text section */}
//             <div>
//               <div className="flex space-x-6 mb-4">
//                 {tabs.map((tab, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleTabClick(index)}
//                     className={`pb-2 transition-all relative text-sm font-medium text-gray-500 hover:text-black ${
//                       activeIndex === index ? "text-black" : ""
//                     }`}
//                   >
//                     {tab.title}
//                     {loadingIndex === index && (
//                       <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 animate-loader"></span>
//                     )}
//                     {activeIndex === index && loadingIndex === null && (
//                       <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
//                     )}
//                   </button>
//                 ))}
//               </div>

//               <div className="text-gray-800 text-sm leading-relaxed">
//                 {tabs[activeIndex].description}
//               </div>

//               <button className="mt-12 px-4 py-2 rounded-full text-xs font-medium shadow-md bg-white hover:bg-gray-100 border border-gray-200">
//                 KNOW MORE
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//       <div className="border-b border-gray-200 mt-12"></div>
//     </>
//   );
// }
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const tabs = [
//   {
//     title: "Reliable",
//     description: (
//       <>
//         <p className="font-semibold text-lg mb-2">Insights That Drive Action</p>
//         <ul className="list-none space-y-2 text-sm">
//           <li>
//             <span className="text-blue-500">🔹</span> Automated QA across 100%
//             of conversations
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Real-time anomaly
//             detection and alerts
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Identify customer trends,
//             sentiment, and bottlenecks
//           </li>
//         </ul>
//       </>
//     ),
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
//   },
//   {
//     title: "Actionable",
//     description: (
//       <>
//         <p className="font-semibold text-lg mb-2">Insights That Drive Action</p>
//         <ul className="list-none space-y-2 text-sm">
//           <li>
//             <span className="text-blue-500">🔹</span> Automated QA across 100%
//             of conversations
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Real-time anomaly
//             detection and alerts
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Identify customer trends,
//             sentiment, and bottlenecks
//           </li>
//         </ul>
//       </>
//     ),
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81673f1b1f3544c75a_super.money%20-%20new.avif",
//   },
//   {
//     title: "Adaptive",
//     description: (
//       <>
//         <p className="font-semibold text-lg mb-2">Insights That Drive Action</p>
//         <ul className="list-none space-y-2 text-sm">
//           <li>
//             <span className="text-blue-500">🔹</span> Automated QA across 100%
//             of conversations
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Real-time anomaly
//             detection and alerts
//           </li>
//           <li>
//             <span className="text-blue-500">🔹</span> Identify customer trends,
//             sentiment, and bottlenecks
//           </li>
//         </ul>
//       </>
//     ),
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81bb07e2af7289629b_First%20Mid%20-%20new.avif",
//   },
// ];

// export default function FeatureTabs() {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [loadingIndex, setLoadingIndex] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextIndex = (activeIndex + 1) % tabs.length;
//       setLoadingIndex(nextIndex);
//       setActiveIndex(nextIndex);

//       setTimeout(() => {
//         setLoadingIndex(null);
//       }, 2000);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   const handleTabClick = (index) => {
//     if (index === activeIndex || loadingIndex !== null) return;
//     setActiveIndex(index);
//     setLoadingIndex(index);

//     setTimeout(() => {
//       setLoadingIndex(null);
//     }, 300);
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <>
//       <div className="border-b border-gray-200 mt-16"></div>

//       <motion.section
//         className="bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 w-full max-w-[1100px] mx-auto"
//         variants={sectionVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-700">
//             For Enterprises
//           </span>

//           {/* Responsive Header */}
//           <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
//             <h2 className="text-xl md:text-2xl font-medium mt-4 lg:mt-0 w-full lg:w-[400px]">
//               Built to Scale and Perform with Enterprise-grade Excellence
//             </h2>
//             <p className="text-gray-700 text-sm w-full lg:w-80">
//               From secure deployment to continuous optimization, Nurix ensures
//               your AI journey is guided, reliable, and delivers lasting impact.
//             </p>
//           </div>

//           {/* Content */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-8">
//             {/* Left image */}
//             <div className="w-full h-60 sm:h-72 md:h-80 lg:h-[400px] bg-white flex items-center justify-center shadow">
//               <img
//                 src={tabs[activeIndex].image}
//                 alt={tabs[activeIndex].title}
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* Right text */}
//             <div>
//               <div className="flex flex-wrap gap-4 mb-4">
//                 {tabs.map((tab, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleTabClick(index)}
//                     className={`pb-2 transition-all relative text-sm font-medium text-gray-500 hover:text-black ${
//                       activeIndex === index ? "text-black" : ""
//                     }`}
//                   >
//                     {tab.title}
//                     {loadingIndex === index && (
//                       <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 animate-loader"></span>
//                     )}
//                     {activeIndex === index && loadingIndex === null && (
//                       <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
//                     )}
//                   </button>
//                 ))}
//               </div>

//               <div className="text-gray-800 text-sm leading-relaxed">
//                 {tabs[activeIndex].description}
//               </div>

//               <button className="mt-8 md:mt-12 px-4 py-2 rounded-full text-xs font-medium shadow-md bg-white hover:bg-gray-100 border border-gray-200">
//                 KNOW MORE
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       <div className="border-b border-gray-200 mt-12"></div>
//     </>
//   );
// }
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    title: "Reliable",
    description: (
      <>
        <p className="font-semibold text-lg mb-2">Insights That Drive Action</p>
        <ul className="list-none space-y-2 text-sm">
          <li>
            <span className="text-blue-500">🔹</span> Automated QA across 100%
            of conversations
          </li>
          <li>
            <span className="text-blue-500">🔹</span> Real-time anomaly
            detection and alerts
          </li>
          <li>
            <span className="text-blue-500">🔹</span> Identify customer trends,
            sentiment, and bottlenecks
          </li>
        </ul>
      </>
    ),
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
  },
  {
    title: "Actionable",
    description: (
      <>
        <p className="font-semibold text-lg mb-2">Insights That Drive Action</p>
        <ul className="list-none space-y-2 text-sm">
          <li>
            <span className="text-blue-500">🔹</span> Automated QA across 100%
            of conversations
          </li>
          <li>
            <span className="text-blue-500">🔹</span> Real-time anomaly
            detection and alerts
          </li>
          <li>
            <span className="text-blue-500">🔹</span> Identify customer trends,
            sentiment, and bottlenecks
          </li>
        </ul>
      </>
    ),
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81673f1b1f3544c75a_super.money%20-%20new.avif",
  },
  {
    title: "Adaptive",
    description: (
      <>
        <p className="font-semibold text-lg mb-2">Insights That Drive Action</p>
        <ul className="list-none space-y-2 text-sm">
          <li>
            <span className="text-blue-500">🔹</span> Automated QA across 100%
            of conversations
          </li>
          <li>
            <span className="text-blue-500">🔹</span> Real-time anomaly
            detection and alerts
          </li>
          <li>
            <span className="text-blue-500">🔹</span> Identify customer trends,
            sentiment, and bottlenecks
          </li>
        </ul>
      </>
    ),
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81bb07e2af7289629b_First%20Mid%20-%20new.avif",
  },
];

export default function FeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [loadingIndex, setLoadingIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % tabs.length;
      setLoadingIndex(nextIndex);
      setActiveIndex(nextIndex);

      setTimeout(() => {
        setLoadingIndex(null);
      }, 2000);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleTabClick = (index) => {
    if (index === activeIndex || loadingIndex !== null) return;
    setActiveIndex(index);
    setLoadingIndex(index);

    setTimeout(() => {
      setLoadingIndex(null);
    }, 300);
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
        className="bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 w-full max-w-[1300px] mx-auto mt-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <span className="text-xs  bg-gray-200 px-3 py-1 rounded-full text-gray-700">
            For Enterprises
          </span>

          {/* Responsive Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            <h2 className="text-xl md:text-2xl font-medium mt-6 lg:mt-0 flex-1">
              Built to Scale and Perform with Enterprise-grade Excellence
            </h2>
            <p className="text-gray-700 text-sm flex-1">
              From secure deployment to continuous optimization, Olli ensures
              your AI journey is guided, reliable, and delivers lasting impact.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-10 mt-8">
            {/* Left image */}
            <div className="w-full md:w-1/2 h-60 sm:h-72 md:h-80 lg:h-[400px] bg-white flex items-center justify-center shadow">
              <img
                src={tabs[activeIndex].image}
                alt={tabs[activeIndex].title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right text */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-wrap gap-4 mb-4">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`pb-2 transition-all relative text-sm font-medium text-gray-500 hover:text-black ${
                      activeIndex === index ? "text-black" : ""
                    }`}
                  >
                    {tab.title}
                    {loadingIndex === index && (
                      <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 animate-loader"></span>
                    )}
                    {activeIndex === index && loadingIndex === null && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                    )}
                  </button>
                ))}
              </div>

              <div className="text-gray-800 text-sm leading-relaxed">
                {tabs[activeIndex].description}
              </div>

              <button className="mt-8 md:mt-12 px-4 py-2 rounded-full text-xs font-medium shadow-md bg-white hover:bg-gray-100 border border-gray-200">
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="border-b border-gray-200 mt-12"></div>
    </>
  );
}
