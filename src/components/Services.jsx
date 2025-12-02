import React from "react";
import zafyr3 from "../assets/zafyr3.png";

const services = [
  {
    title: "Access to Top Creators",
    desc:
      "Partner with pre-vetted influencers trusted by their audiences. We match you with creators who naturally align with your brand.",
  },
  {
    title: "Tailored Campaign Strategy",
    desc:
      "We design custom influencer strategies that maximize reach, conversions, and long-term ROI — not generic posting schedules.",
  },
  {
    title: "Seamless Collaboration Management",
    desc:
      "We manage creator onboarding, deliverables, deadlines, and approvals from start to finish so your campaigns run stress-free.",
  },
  {
    title: "Data-Driven Performance Analytics",
    desc:
      "Monitor real-time insights with transparent metrics that help you optimize spending, reach, and audience engagement.",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-black text-white py-24 sm:py-28 px-4 sm:px-8 md:px-20">
      
      {/* TITLE */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-6xl font-extrabold mb-16 tracking-wide">
        SERVICES
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
        
        {/* First 4 Cards */}
        {services.map((item, idx) => (
          <div
            key={idx}
            className="
              bg-[#101010] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-md
              min-h-[240px] flex flex-col

              /* Hover + transitions enabled only from sm and above */
              sm:cursor-pointer
              sm:transition sm:duration-300
              sm:hover:shadow-[0_0_35px_rgba(108,124,255,0.4)]
              sm:hover:-translate-y-2
            "
          >
            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
            <p className="text-gray-300 leading-relaxed text-[16px]">{item.desc}</p>
          </div>
        ))}

        {/* Image Box */}
        <div
          className="
            bg-[#151515] p-6 rounded-2xl border border-white/10 flex justify-center items-center shadow-lg
            order-last lg:order-none

            /* Hover only from sm */
            sm:cursor-pointer
            sm:transition sm:duration-300
            sm:hover:shadow-[0_0_40px_rgba(108,124,255,0.4)]
            sm:hover:-translate-y-2
          "
        >
          <img
            src={zafyr3}
            className="w-[220px] sm:w-[240px] md:w-[300px] object-contain"
            alt="Service Illustration"
          />
        </div>

        {/* Last Card */}
        <div
          className="
            bg-[#101010] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-md
            min-h-[240px] flex flex-col

            /* Hover only from sm */
            sm:cursor-pointer
            sm:transition sm:duration-300
            sm:hover:shadow-[0_0_35px_rgba(108,124,255,0.4)]
            sm:hover:-translate-y-2
          "
        >
          <h2 className="text-xl font-semibold mb-3">Content That Converts</h2>
          <p className="text-gray-300 leading-relaxed text-[16px]">
            We work with influencers to produce high-impact creative content designed to captivate and drive measurable sales.
          </p>
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-16 md:mt-20">
        <button
          className="
            px-8 sm:px-10 py-4 w-full sm:w-auto text-center rounded-full font-semibold text-lg
            bg-[#6C7CFF]

            /* Hover only from sm */
            sm:hover:bg-[#5a66d6]
            sm:transition sm:duration-300
            sm:shadow-[0_0_25px_rgba(108,124,255,0.5)]
            sm:hover:shadow-[0_0_35px_rgba(108,124,255,0.7)]
          "
        >
          Contact Us to Boost Your Influencer Campaigns
        </button>
      </div>
    </section>
  );
};

export default Services;
