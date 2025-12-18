import React from "react";
import zafyr3 from "../assets/zafyr3.png";

const services = [
  {
    title: "Thoughtful Creator Casting",
    desc:
      "We work closely with creators who have built real trust with their audiences. Every collaboration is chosen for voice, values, and cultural fit — not just reach.",
    bg: "bg-[#F4F6FF]",
  },
  {
    title: "Campaigns Built Around Story",
    desc:
      "Every campaign starts with understanding your brand, audience, and culture. We shape creator-led ideas that feel natural, engaging, and aligned — not forced posting schedules.",
    bg: "bg-[#FFF4E8]",
  },
  {
    title: "From Brief to Delivery — We’ve Got It",
    desc:
      "We manage creator outreach, contracts, briefs, timelines, approvals, and delivery, so your team can focus on the bigger picture while we keep everything running smoothly.",
    bg: "bg-[#F1FAF7]",
  },
  {
    title: "Creator-Led Content Production",
    desc:
      "From influencer-led shoots to brand content and UGC, we support production end to end — concepts, shoots, edits, and final assets designed for social-first platforms.",
    bg: "bg-[#F9F2FF]",
  },
];

const Services = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-black  py-24 sm:py-28 px-4 sm:px-8 md:px-20">

      {/* TITLE */}
      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-6xl font-extrabold mb-20 tracking-wide">
        SERVICES
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">

        {/* Service Cards */}
        {services.map((item, idx) => (
          <div
            key={idx}
            className={`
              ${item.bg}
              p-6 sm:p-8 rounded-2xl border border-black/5
              min-h-[240px] flex flex-col
              shadow-sm

              sm:cursor-pointer
              sm:transition sm:duration-300
              sm:hover:shadow-xl
              sm:hover:-translate-y-2
            `}
          >
            <h2 className="text-xl font-semibold mb-3 text-black">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              {item.desc}
            </p>
          </div>
        ))}

        {/* IMAGE BOX — FIXED DISPLAY */}
        <div
          className="
             p-6 rounded-2xl border border-white           flex justify-center items-center
            shadow-md

            sm:transition sm:duration-300
            sm:hover:shadow-xl
            sm:hover:-translate-y-2
          "
        >
          <img
            src={zafyr3}
            alt="Zafyr Media"
            className="
              max-w-full max-h-[280px]
              object-contain
            "
          />
        </div>

        {/* LAST CARD */}
        <div
          className="
            bg-[#FFF1F2] p-6 sm:p-8 rounded-2xl border border-black/5
            min-h-[240px] flex flex-col
            shadow-sm

            sm:transition sm:duration-300
            sm:hover:shadow-xl
            sm:hover:-translate-y-2
          "
        >
          <h2 className="text-xl font-semibold mb-3 text-black">
            Content That Converts
          </h2>
          <p className="text-gray-700 leading-relaxed text-[16px]">
            We work with influencers to produce high-impact creative content designed to captivate and drive measurable sales.
          </p>
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="flex justify-center mt-20">
        <button
          onClick={handleScrollToContact}
          className="
            px-10 py-4 w-full sm:w-auto rounded-full
            font-semibold text-lg text-white
            bg-[#6C7CFF]

            transition duration-300
            hover:bg-[#5561d9]
            shadow-lg hover:shadow-xl
          "
        >
          Contact Us to Boost Your Influencer Campaigns
        </button>
      </div>
    </section>
  );
};

export default Services;
