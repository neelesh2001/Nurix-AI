// import React from "react";
// import { motion } from "framer-motion";
// import { MessageSquare, Database } from "lucide-react";

// const capabilities = [
//   {
//     title: "Human-like conversations, powered by AI",
//     features: [
//       {
//         icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
//         text: "Enable natural, human-like dialogues with our advanced, low-latency voice stack.",
//       },
//       {
//         icon: <Database className="w-5 h-5 text-blue-600" />,
//         text: "Support real-time responses and interruption handling to keep customers engaged.",
//       },
//     ],
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif", // Add your image path here
//   },
//   {
//     title: "Scalable, intelligent support infrastructure",
//     features: [
//       {
//         icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
//         text: "Leverage scalable AI architecture to handle thousands of queries with minimal delay.",
//       },
//       {
//         icon: <Database className="w-5 h-5 text-blue-600" />,
//         text: "Improve response accuracy with contextual awareness and smart routing.",
//       },
//     ],
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81673f1b1f3544c75a_super.money%20-%20new.avif", // Add your image path here
//   },
//   {
//     title: "Seamless integration with your tools",
//     features: [
//       {
//         icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
//         text: "Instantly connect with your existing CRM, telephony, CCaaS, or internal knowledge systems.",
//       },
//       {
//         icon: <Database className="w-5 h-5 text-blue-600" />,
//         text: "Easily integrate using 400+ pre-built connections—no complicated setups required.",
//       },
//     ],
//     image:
//       "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81bb07e2af7289629b_First%20Mid%20-%20new.avif", // Add your image path here
//   },
// ];

// export default function CapabilitiesSection() {
//   const handleLinkClick = () => {
//     // Replace with your navigation logic
//     console.log("Navigate to contact-us");
//   };

//   // Animation for the header section
//   const headerVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
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

//   // Animation for each capability card
//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 60,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="px-4 py-16 md:px-12 lg:px-32 bg-white">
//       <motion.div
//         className="mb-12 ml-28"
//         variants={headerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <span className="inline-block text-xs font-normal text-gray-600 bg-gray-100 px-3 py-1 rounded-full mb-2">
//           Capabilities
//         </span>
//         <h2 className="text-2xl md:text-3xl font-normal text-gray-900 max-w-xl mt-2">
//           Discover the
//           <br />
//           Olli Advantage
//         </h2>
//       </motion.div>

//       <div className="space-y-8 w-[1000px] mx-auto">
//         {capabilities.map((item, index) => (
//           <motion.div
//             key={index}
//             className="bg-white border p-8 flex flex-col md:flex-row gap-8 items-start"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             {/* Image Section */}
//             <div className="w-full md:w-[50%] h-[300px] overflow-hidden custom-cut-corner bg-gray-100">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   // Fallback if image fails to load
//                   e.target.style.display = "none";
//                   e.target.nextSibling.style.display = "flex";
//                 }}
//               />
//             </div>

//             {/* Content Section */}
//             <div className="flex-1 space-y-6">
//               {/* Our Product Badge */}
//               <h3 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
//                 {item.title}
//               </h3>

//               {/* Feature Points */}
//               <div className="space-y-4">
//                 {item.features.map((feature, featureIndex) => (
//                   <div
//                     key={featureIndex}
//                     className="flex items-start space-x-3"
//                   >
//                     <div className="flex-shrink-0 mt-1">{feature.icon}</div>
//                     <p className="text-gray-600 leading-relaxed text-sm">
//                       {feature.text}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={handleLinkClick}
//                 className="inline-block px-4 py-3 bg-blue-600 text-white text-xs rounded-full font-normal hover:bg-blue-700 transition-colors duration-200"
//               >
//                 LEARN MORE
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Database } from "lucide-react";

const capabilities = [
  {
    title: "Human-like conversations, powered by AI",
    features: [
      {
        icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
        text: "Enable natural, human-like dialogues with our advanced, low-latency voice stack.",
      },
      {
        icon: <Database className="w-5 h-5 text-blue-600" />,
        text: "Support real-time responses and interruption handling to keep customers engaged.",
      },
    ],
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
  },
  {
    title: "Scalable, intelligent support infrastructure",
    features: [
      {
        icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
        text: "Leverage scalable AI architecture to handle thousands of queries with minimal delay.",
      },
      {
        icon: <Database className="w-5 h-5 text-blue-600" />,
        text: "Improve response accuracy with contextual awareness and smart routing.",
      },
    ],
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81673f1b1f3544c75a_super.money%20-%20new.avif",
  },
  {
    title: "Seamless integration with your tools",
    features: [
      {
        icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
        text: "Instantly connect with your existing CRM, telephony, CCaaS, or internal knowledge systems.",
      },
      {
        icon: <Database className="w-5 h-5 text-blue-600" />,
        text: "Easily integrate using 400+ pre-built connections—no complicated setups required.",
      },
    ],
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81bb07e2af7289629b_First%20Mid%20-%20new.avif",
  },
];

export default function CapabilitiesSection() {
  const handleLinkClick = () => {
    console.log("Navigate to contact-us");
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-4 py-16 md:px-12 lg:px-32 bg-white">
      <motion.div
        className="mb-12 md:ml-28 ml-4"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="inline-block text-xs font-normal text-gray-600 bg-gray-100 px-3 py-1 rounded-full mb-2">
          Capabilities
        </span>
        <h2 className="text-2xl md:text-3xl font-normal text-gray-900 max-w-xl mt-2">
          Discover the
          <br />
          Olli Advantage
        </h2>
      </motion.div>

      <div className="space-y-8 w-full max-w-[1000px] mx-auto">
        {capabilities.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border p-8 flex flex-col md:flex-row gap-8 items-start"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image Section */}
            <div className="w-full md:w-[50%] h-[200px] md:h-[300px] overflow-hidden custom-cut-corner bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl md:text-4xl font-medium text-gray-900 leading-tight">
                {item.title}
              </h3>

              <div className="space-y-4">
                {item.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={handleLinkClick}
                className="inline-block px-4 py-3 bg-blue-600 text-white text-xs rounded-full font-normal hover:bg-blue-700 transition-colors duration-200"
              >
                LEARN MORE
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
