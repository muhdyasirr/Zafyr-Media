import React from "react";


const Hero = () => {
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
            Dominate your
            <br /> niche.
          </h1>

          <p className="text-white/85 text-base sm:text-lg md:text-xl leading-relaxed">
            Go beyond influencer marketing software. Upgrade to AI-powered creator
            marketing with automation and growth-driven analytics.
          </p>

          {/* Button — transition only on bigger screens */}
          <button
            className="
              mx-auto md:mx-0 w-fit px-8 py-4 rounded-full bg-[#DFFF5E] text-black font-semibold text-lg
              sm:transition sm:duration-300 sm:hover:bg-[#cbea52]
            "
          >
            Get Started
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
