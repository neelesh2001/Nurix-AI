import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/Img01.png";
import img2 from "../../assets/images/Img02.png";
import img4 from "../../assets/images/Img04.png";
import img5 from "../../assets/images/Img05.png";

const capabilities = [
  {
    title: "Human-like conversations, powered by AI",
    features: [
      {
        heading: "Talk Like a Human. Respond Like an Expert.",
        points: [
          "✅ 95% of common patient queries auto-resolved without staff.",
          "✅ Average response time: under 1.5 seconds, even for voice.",
        ],
      },
    ],
    image: img1,
  },
  {
    title: "Scalable, intelligent support infrastructure",
    features: [
      {
        heading: "Scale Support Without Scaling Costs",
        points: [
          "✅ Handles 10,000+ patients conversations across voice & WhatsApp",
          "✅ Reduces support staff time by 40%",
        ],
      },
    ],
    image: img2,
  },
  {
    title: "Cut No-Shows and Missed Instructions",
    features: [
      {
        heading: "Automated Follow-Ups That Actually Work",
        points: [
          "✅ Reduce no-shows by 30–45% with timely nudges",
          "✅ 80% patient compliance for post-op instructions via reminders",
        ],
      },
    ],
    image: img4,
  },
  {
    title: "Proven Growth & Satisfaction Impact",
    features: [
      {
        heading: "ROI You Can See in Weeks.",
        points: [
          "✅ Increase patient satisfaction scores by 20%",
          "✅ Boost appointment booking rates by 35% with AI assistant",
        ],
      },
    ],
    image: img5,
  },
];

export default function CapabilitiesSection() {
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
    <section className="px-4 py-16 md:px-12 lg:px-32 bg-white pt-0">
      <motion.section
        className="bg-white"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
          {/* Header Badge */}
          <div className="inline-block bg-gray-200 text-brand-text px-3 py-1 rounded-full text-xs font-normal mb-8">
            Capabilities
          </div>

          <h2 className="text-3xl md:text-5xl font-medium text-brand-text leading-tight mb-6">
            Discover the Olli Advantage
          </h2>
        </div>
      </motion.section>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1100px] mx-auto">
        {capabilities.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-md p-3 md:p-5 flex flex-col gap-6 items-start"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image Section */}
            <div className="w-full h-[220px] md:h-[280px] overflow-hidden bg-gray-100 rounded-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-6 w-full">
              <h3 className="text-xl md:text-2xl font-medium text-brand-text leading-tight">
                {item.title}
              </h3>

              <div className="space-y-5">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex flex-col items-start">
                    <div>
                      <h3 className="text-brand-text font-normal text-lg md:text-xl mb-2">
                        {feature.heading}
                      </h3>
                      <ul className="space-y-2 text-gray-600 text-sm md:text-base leading-relaxed">
                        {feature.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex justify-center md:justify-end">
                <Link
                  to="/contact-us"
                  className="px-4 py-2 bg-brand-primary text-white text-xs rounded-full font-normal transition-colors duration-200 inline-block"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
