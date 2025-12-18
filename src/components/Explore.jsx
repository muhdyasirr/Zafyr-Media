import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  "Build strong influencer relationships with trust",
  "Manage campaigns seamlessly from one platform",
  "Collaborate efficiently with content creators",
  "Track performance using real time insights",
];

// Fixed clockwise positions
const positions = [
  { top: "0%", left: "0%" },     // Top Left
  { top: "0%", right: "0%" },    // Top Right
  { bottom: "0%", right: "0%" }, // Bottom Right
  { bottom: "0%", left: "0%" },  // Bottom Left
];

const SlideSection = () => {
  const [order, setOrder] = useState([0, 1, 2, 3]);

  // 🔁 Rotate boxes clockwise every 3500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => [prev[3], prev[0], prev[1], prev[2]]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="relative w-[820px] h-[600px]">

        {/* CLOCKWISE CONNECTOR LINES */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
        >
          <line x1="20" y1="20" x2="80" y2="20" stroke="#BDBDBD" strokeWidth="1.6" strokeDasharray="4 4" />
          <line x1="80" y1="20" x2="80" y2="80" stroke="#BDBDBD" strokeWidth="1.6" strokeDasharray="4 4" />
          <line x1="80" y1="80" x2="20" y2="80" stroke="#BDBDBD" strokeWidth="1.6" strokeDasharray="4 4" />
          <line x1="20" y1="80" x2="20" y2="20" stroke="#BDBDBD" strokeWidth="1.6" strokeDasharray="4 4" />
        </svg>

        {/* ROTATING BOXES */}
        {order.map((itemIndex, positionIndex) => {
          const words = items[itemIndex].split(" ");
          const firstTwo = words.slice(0, 2).join(" ");
          const rest = words.slice(2).join(" ");

          return (
            <motion.div
              key={itemIndex}
              layout
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="
                absolute
                bg-white border border-gray-200
                rounded-3xl shadow-xl
                px-12 py-18
                gap-5
                w-[320px] lg:w-[400px]
                text-center
              "
              style={positions[positionIndex]}
            >
              <h2 className="text-xl lg:text-2xl font-semibold leading-snug">
                <span className="text-black">{firstTwo}</span>{" "}
                <span className="text-[#4CAF50]">{rest}</span>
              </h2>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SlideSection;
