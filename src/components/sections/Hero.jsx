import React from "react";
import { motion } from "framer-motion";

const VoiceAIHero = () => {
  return (
    <section className="min-h-[750px] bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto ">
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Supercharge your
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            Call Operations
          </span>{" "}
          with Voice AI
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover the new way to build, test, deploy, and monitor
          <br className="hidden sm:block" />
          production-ready AI voice agents at scale.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="bg-black text-white px-5 py-2 rounded-lg font-medium text-base  "
            whileTap={{ scale: 0.95 }}
          >
            TRY FOR FREE
          </motion.button>
          <motion.button
            className="border-2 border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium text-base tracking-wide hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            whileTap={{ scale: 0.95 }}
          >
            CONTACT SALES
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VoiceAIHero;
