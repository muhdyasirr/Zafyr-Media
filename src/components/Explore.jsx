import React from "react";
import { motion } from "framer-motion";

const slides = [
  "Build strong influencer relationships with trust",
  "Manage campaigns seamlessly from one platform",
  "Collaborate efficiently with content creators",
  "Track performance using real time insights",
];

const SlideSection = () => {
  return (
    <section className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white">
      {slides.map((text, index) => {
        const words = text.split(" ");
        const firstTwo = words.slice(0, 2).join(" ");
        const rest = words.slice(2).join(" ");

        return (
          <div
            key={index}
            className="h-screen snap-start flex justify-center items-center px-6"
          >
            <motion.div
              className="
                bg-white border border-gray-200
                rounded-3xl shadow-xl
                max-w-3xl w-full
                px-8 py-12 sm:px-14 sm:py-18
                text-center
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* TEXT */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-black">{firstTwo}</span>{" "}
                <span className="relative inline-block text-[#4CAF50]">
                  {rest}
                  {/* animated underline */}
                  <motion.span
                    className="absolute left-0 -bottom-2 h-[3px] bg-[#4CAF50] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </span>
              </h1>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default SlideSection;
