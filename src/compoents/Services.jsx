import React from "react";
import zafyr3 from "../assets/zafyr3.png";

const services = [
  {
    title: "Access to Top Creators",
    desc:
      "Partner with pre-vetted influencers trusted by their audiences. We match you with creators who naturally align with your brand."
  },
  {
    title: "Tailored Campaign Strategy",
    desc:
      "We design custom influencer strategies that maximize reach, conversions, and long-term ROI — not generic posting schedules."
  },
  {
    title: "Seamless Collaboration Management",
    desc:
      "We manage creator onboarding, deliverables, deadlines, and approvals from start to finish so your campaigns run stress-free."
  },
  {
    title: "Data-Driven Performance Analytics",
    desc:
      "Monitor real-time insights with transparent metrics that help you optimize spending, reach, and audience engagement."
  }
];

const Services = () => {
  return (
    <section className="w-full bg-black text-white py-28 px-6 md:px-20">
      {/* TITLE */}
      <h1 className="text-center text-4xl md:text-6xl font-extrabold mb-20 tracking-wide">
        SERVICES
      </h1>

      {/* GRID  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

        {/* FIRST 4 SERVICE CARDS */}
        {services.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#101010] p-8 rounded-2xl border border-white/10 shadow-md hover:shadow-[0_0_35px_rgba(108,124,255,0.4)] hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-3">
              {item.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-[17px]">{item.desc}</p>
          </div>
        ))}

        {/* 5th BOX — IMAGE */}
        <div className="bg-[#151515] p-6 rounded-2xl border border-white/10 flex justify-center items-center shadow-lg hover:shadow-[0_0_40px_rgba(108,124,255,0.4)] hover:-translate-y-2 transition duration-300 cursor-pointer">
          <img
            src={zafyr3}
            className="w-[260px] md:w-[300px] object-contain"
            alt="Service Illustration"
          />
        </div>

        {/* LAST SERVICE CARD */}
        <div className="bg-[#101010] p-8 rounded-2xl border border-white/10 shadow-md hover:shadow-[0_0_35px_rgba(108,124,255,0.4)] hover:-translate-y-2 transition duration-300 cursor-pointer">
          <h2 className="text-xl font-semibold mb-3 ">
            Content That Converts
          </h2>
          <p className="text-gray-300 leading-relaxed text-[17px]">
            We work with influencers to produce high-impact creative content designed to captivate and drive measurable sales.
          </p>
        </div>

      </div>

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-20">
        <button className="px-10 py-4 rounded-full bg-[#6C7CFF] hover:bg-[#5a66d6] font-semibold text-lg transition shadow-[0_0_25px_rgba(108,124,255,0.5)]">
          Contact Us to Boost Your Influencer Campaigns
        </button>
      </div>
    </section>
  );
};

export default Services;
