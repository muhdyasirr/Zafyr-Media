import React from "react";

const Hero = () => {

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full min-h-screen bg-black flex justify-center items-center px-4 py-14 sm:py-20 overflow-hidden">
      <div
        className="
          w-full max-w-7xl bg-[#6C7CFF] rounded-3xl
          px-6 sm:px-10 md:px-14 py-14 sm:py-18 md:py-22
          flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16
        "
      >
        {/* LEFT TEXT */}
        <div className="flex flex-col gap-5 sm:gap-6 max-w-xl text-center md:text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Influencer Campaigns
            <br />Built on Human Connection
          </h1>

          <p className="text-white/85 text-base sm:text-lg md:text-xl leading-relaxed">
            We plan, manage, and produce influencer campaigns from start to finish,
            including creator sourcing, content production, and campaign execution,
            guided by culture, creativity, and real human insight.
          </p>

          {/* BUTTON */}
          <button
            className="
              mx-auto md:mx-0 w-fit px-8 py-4 rounded-full bg-[#DFFF5E]
              text-black font-semibold text-lg
              sm:transition sm:duration-300 sm:hover:bg-[#cbea52]
            "
            onClick={handleScrollToContact}
          >
            Talk to Us
          </button>
        </div>

        {/* RIGHT VIDEO */}
        <div className="w-full max-w-sm sm:max-w-md rounded-[30px] overflow-hidden border-[6px] sm:border-[8px] border-black shadow-xl">
          <video
            src="/Main.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
