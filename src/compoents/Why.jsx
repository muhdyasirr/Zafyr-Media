import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaCheck } from "react-icons/fa";

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const WhyZafyrMedia = () => {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 🚨 Prevent rendering Framer Motion until screen size is detected
  if (isDesktop === null) return null;

  return (
    <section className="w-full bg-white text-black px-4 sm:px-8 md:px-20 py-16 sm:py-20 md:py-28">

      {/* TITLE */}
      <motion.h1
        className="text-center text-2xl sm:text-4xl md:text-6xl font-bold mb-10 sm:mb-14 md:mb-20 leading-snug"
        initial={isDesktop ? { opacity: 0, y: 30 } : false}
        whileInView={isDesktop ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why <span className="text-[#4CAF50]">Zafyr Media?</span>
      </motion.h1>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">

        {/* WITHOUT ZAFYR MEDIA */}
        <motion.div
          variants={isDesktop ? slideLeft : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left"
        >
          <h3 className="uppercase text-gray-500 font-semibold mb-6 tracking-wide text-sm sm:text-base">
            Without Zafyr Media
          </h3>
          <ul className="flex flex-col gap-5 sm:gap-6 text-base sm:text-lg leading-relaxed">
            <li className="flex gap-4 text-left">
              <FaTimes className="text-red-500 text-xl shrink-0 mt-1" />
              <span>Spend months trying to manually identify influencers aligned with your brand values and audience.</span>
            </li>
            <li className="flex gap-4 text-left">
              <FaTimes className="text-red-500 text-xl shrink-0 mt-1" />
              <span>Track performance, contracts & payments using messy spreadsheets and scattered emails.</span>
            </li>
            <li className="flex gap-4 text-left">
              <FaTimes className="text-red-500 text-xl shrink-0 mt-1" />
              <span>Depend on manual reporting and screenshots to measure campaign ROI.</span>
            </li>
          </ul>
        </motion.div>

        {/* WITH ZAFYR MEDIA */}
        <motion.div
          variants={isDesktop ? slideRight : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left"
        >
          <h3 className="uppercase text-gray-500 font-semibold mb-6 tracking-wide text-sm sm:text-base">
            With Zafyr Media
          </h3>
          <ul className="flex flex-col gap-5 sm:gap-6 text-base sm:text-lg leading-relaxed">
            <li className="flex gap-4 text-left">
              <FaCheck className="text-green-500 text-xl shrink-0 mt-1" />
              <span>Unlock a verified influencer network curated by niche, industry & audience attributes.</span>
            </li>
            <li className="flex gap-4 text-left">
              <FaCheck className="text-green-500 text-xl shrink-0 mt-1" />
              <span>Access creator details, deliverables, contracts & analytics in a single dashboard.</span>
            </li>
            <li className="flex gap-4 text-left">
              <FaCheck className="text-green-500 text-xl shrink-0 mt-1" />
              <span>Track campaigns in real-time & generate auto-shareable performance reports.</span>
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyZafyrMedia;
