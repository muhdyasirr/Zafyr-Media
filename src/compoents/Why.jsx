import React from "react";
import { motion } from "framer-motion";
import { FaTimes, FaCheck } from "react-icons/fa";

const WhyZafyrMedia = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-20 py-28">
      {/* TITLE */}
      <motion.h1
        className="text-center text-4xl md:text-6xl font-bold mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        Why <span className="text-[#4CAF50]">Zafyr Media?</span>
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT — Without Zafyr Media */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h3 className="uppercase text-gray-500 font-semibold mb-6 tracking-wide">
            Without Zafyr Media
          </h3>

          <ul className="flex flex-col gap-6 text-lg leading-relaxed">
            <li className="flex gap-4">
              <FaTimes className="text-red-500 text-xl mt-1" />
              Spend months trying to manually identify influencers who align
              with your brand values and audience.
            </li>

            <li className="flex gap-4">
              <FaTimes className="text-red-500 text-xl mt-1" />
              Track influencer performance, contracts & payments using messy
              spreadsheets and scattered email threads.
            </li>

            <li className="flex gap-4">
              <FaTimes className="text-red-500 text-xl mt-1" />
              Rely on manual reporting and screenshots to measure campaign ROI.
            </li>
          </ul>
        </motion.div>

        {/* RIGHT — With Zafyr Media */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h3 className="uppercase text-gray-500 font-semibold mb-6 tracking-wide">
            With Zafyr Media
          </h3>

          <ul className="flex flex-col gap-6 text-lg leading-relaxed">
            <li className="flex gap-4">
              <FaCheck className="text-green-500 text-xl mt-1" />
              Unlock a verified influencer network curated around your niche,
              industry & audience attributes.
            </li>

            <li className="flex gap-4">
              <FaCheck className="text-green-500 text-xl mt-1" />
              Access all creator details, deliverables, contracts & analytics
              in one seamless dashboard.
            </li>

            <li className="flex gap-4">
              <FaCheck className="text-green-500 text-xl mt-1" />
              Track campaigns in real time & generate shareable performance
              reports automatically.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyZafyrMedia;
