import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
  },
  {
    title: "Scalable, intelligent support infrastructure",
    features: [
      {
        heading: "Scale Support Without Scaling Costs",
        points: [
          "✅ Handles 10,000+ patient conversations/day across voice & WhatsApp",
          "✅ Reduces support staff time by 40%",
        ],
      },
    ],
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81673f1b1f3544c75a_super.money%20-%20new.avif",
  },
  {
    title: "Seamless integration with your tools",
    features: [
      {
        heading: "Plug Into Your Workflow — Instantly",
        points: [
          "✅ Integrated with 400+ tools, including EHR, IVR, CRM",
          "✅ Setup time: <2 hours, no developer needed.",
        ],
      },
    ],
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81bb07e2af7289629b_First%20Mid%20-%20new.avif",
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
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
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
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6864df81ca447d13a748aca5_Cult.fit%20-%20new.avif",
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
            className="bg-white border p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image Section */}
            <div className="w-full md:w-[50%] h-[200px] md:h-[350px] overflow-hidden custom-cut-corner bg-gray-100 rounded-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-6">
              <h3 className="text-xl md:text-4xl font-medium text-gray-900 leading-tight">
                {item.title}
              </h3>

              <div className="space-y-5">
                {item.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex flex-col md:flex-row items-start md:space-x-4"
                  >
                    <div>
                      <h3 className="text-gray-900 font-medium text-lg md:text-xl mb-2">
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

              <div className="pt-5">
                <Link
                  to="/contact"
                  className="mt-6 px-6 py-3 bg-blue-600 text-white text-sm rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
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
