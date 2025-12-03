import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const fadeSideRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 },
};

const fadeSideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const InfluencerHero = () => {
  // detect whether screen >= md
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="w-full bg-white text-black px-4 sm:px-8 md:px-16 lg:px-20 py-20 md:py-28 space-y-24 md:space-y-36">

      {/* ------------ SECTION 1 ------------ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
        <motion.img
          src={image1}
          alt="Influencer Panel"
          className="w-full max-w-[420px] md:max-w-full rounded-2xl shadow-xl mx-auto"
          variants={isDesktop ? fadeUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "show" : false}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="flex flex-col gap-3 sm:gap-5 text-center md:text-left"
          variants={isDesktop ? fadeSideRight : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "show" : false}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Manage influencer{" "}
            <span className="text-[#4CAF50]">relationships</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Build your private influencer network and simplify access to contracts, payments, contacts, and performance metrics.
          </p>
        </motion.div>
      </div>

      {/* ------------ SECTION 2 ------------ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
        <motion.div
          className="flex flex-col gap-3 sm:gap-5 text-center md:text-left order-2 md:order-1"
          variants={isDesktop ? fadeSideLeft : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "show" : false}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Seamless creator <span className="text-[#4CAF50]">campaign management</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
Coordinate outreach, track deliverables, approve content, and manage payments — everything you need in one smooth workflow.          </p>
        </motion.div>

        <motion.img
          src={image2}
          alt="AI Insights"
          className="w-full max-w-[420px] md:max-w-full rounded-2xl shadow-xl mx-auto order-1 md:order-2"
          variants={isDesktop ? fadeUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "show" : false}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
      </div>

      {/* ------------ SECTION 3 ------------ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
        <motion.img
          src={image3}
          alt="Campaign Automation"
          className="w-full max-w-[420px] md:max-w-full rounded-2xl shadow-xl mx-auto"
          variants={isDesktop ? fadeUp : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "show" : false}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="flex flex-col gap-3 sm:gap-5 text-center md:text-left"
          variants={isDesktop ? fadeSideRight : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "show" : false}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Manage creator <span className="text-[#4CAF50]">campaigns with ease</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
Handle outreach, deliverables, approvals, payments, and reporting naturally and efficiently from a single platform.          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfluencerHero;
