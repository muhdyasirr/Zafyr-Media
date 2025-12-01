import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png"
import image3 from"../assets/image2.png"
const InfluencerHero = () => {
  return (
    <section className="w-full bg-white text-black px-6 md:px-20 py-32 space-y-40">

      {/* --- SECTION 1 (IMAGE LEFT) --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        <motion.img
          src={image1}
          alt="Influencer Panel"
          className="w-full max-w-md rounded-2xl shadow-xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />

        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Manage <br /> influencer{" "}
            <span className="text-[#4CAF50]">relationships</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            Build your private influencer network and simplify access to
            payments, contracts, contact details, and performance metrics.
          </p>
        </motion.div>
      </div>

      {/* --- SECTION 2 (TEXT LEFT) --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        <motion.div
          className="flex flex-col gap-6 order-2 md:order-1"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            AI-powered <br />{" "}
            <span className="text-[#4CAF50]">creator insights</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            Understand audience demographics, engagement rates, campaign
            history, brand affinity and fraud protection signals with a single
            dashboard.
          </p>
        </motion.div>

        <motion.img
          src={image2}
          alt="Influencer Panel"
          className="w-full max-w-md rounded-2xl shadow-xl mx-auto order-1 md:order-2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>

      {/* --- SECTION 3 (IMAGE LEFT AGAIN) --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        <motion.img
          src={image3}
          alt="Influencer Panel"
          className="w-full max-w-md rounded-2xl shadow-xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />

        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Automate <br />{" "}
            <span className="text-[#4CAF50]">creator campaigns</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            Automate outreach, onboarding, deliverable tracking, approvals,
            payments and reporting — everything from one platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfluencerHero;
