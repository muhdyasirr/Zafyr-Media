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

  if (isDesktop === null) return null;

  return (
    <section className="w-full bg-white text-black px-4 sm:px-8 md:px-20 py-16 sm:py-20 md:py-28">
      
      {/* TITLE */}
      <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20">
        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug"
          initial={isDesktop ? { opacity: 0, y: 30 } : false}
          whileInView={isDesktop ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Brands Partner With{" "}
          <span className="text-[#4CAF50]">Zafyr Media?</span>
        </motion.h1>

        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          We plan, manage, and produce creator campaigns end-to-end — built on
          cultural fit, thoughtful storytelling, and clear performance insights.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">

        {/* WITHOUT ZAFYR MEDIA */}
        <motion.div
          variants={isDesktop ? slideLeft : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-left"
        >
          <h3 className="uppercase text-gray-500 font-semibold mb-6 tracking-wide text-sm sm:text-base">
            Without Zafyr Media
          </h3>

          <ul className="flex flex-col gap-5 sm:gap-6 text-base sm:text-lg leading-relaxed">
            <li className="flex gap-4">
              <FaTimes className="text-red-500 text-xl mt-1 shrink-0" />
              <span>
                Spend weeks searching for creators who might align, and still end
                up with content that feels forced.
              </span>
            </li>

            <li className="flex gap-4">
              <FaTimes className="text-red-500 text-xl mt-1 shrink-0" />
              <span>
                Juggle outreach, approvals, contracts, and payments across
                spreadsheets, emails, and scattered notes.
              </span>
            </li>

            <li className="flex gap-4">
              <FaTimes className="text-red-500 text-xl mt-1 shrink-0" />
              <span>
                Rely on screenshots and fragmented reporting, with no clear view
                of what actually drove results.
              </span>
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
          className="text-left"
        >
          <h3 className="uppercase text-gray-500 font-semibold mb-6 tracking-wide text-sm sm:text-base">
            With Zafyr Media
          </h3>

          <ul className="flex flex-col gap-5 sm:gap-6 text-base sm:text-lg leading-relaxed">
            <li className="flex gap-4">
              <FaCheck className="text-green-500 text-xl mt-1 shrink-0" />
              <span>
                Thoughtful creator casting: We match you with creators who
                genuinely fit your brand voice, values, and audience — not just
                the biggest reach.
              </span>
            </li>

            <li className="flex gap-4">
              <FaCheck className="text-green-500 text-xl mt-1 shrink-0" />
              <span>
                Creator-led storytelling that performs: Concepts designed to feel
                natural for creators and compelling for audiences.
              </span>
            </li>

            <li className="flex gap-4">
              <FaCheck className="text-green-500 text-xl mt-1 shrink-0" />
              <span>
                Seamless execution from start to finish — outreach, briefs,
                timelines, approvals, and delivery handled for you.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* FOOTER INSIGHT */}
      <div className="max-w-4xl mx-auto text-center mt-14 sm:mt-20">
        <p className="text-base sm:text-lg text-gray-700">
          Clear learnings, not just numbers. After launch, we review outcomes and
          share insights that guide what to do next — so every campaign compounds.
        </p>
      </div>

    </section>
  );
};

export default WhyZafyrMedia;
