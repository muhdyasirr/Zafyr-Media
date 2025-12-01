import React from "react";
import Main from "../assets/Main.mp4"


const Hero = () => {
  return (
    <section className="w-full h-screen bg-black py-16 flex justify-center items-center">
      <div className="w-[92%] max-w-7xl bg-[#6C7CFF] rounded-3xl px-6 md:px-14 py-20 md:py-24 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* LEFT TEXT */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Dominate your
            <br /> niche.
          </h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed">
            Go beyond influencer marketing software. Upgrade to AI-powered creator
            marketing with automation and growth-driven analytics.
          </p>
          <button className="w-fit px-8 py-4 rounded-full bg-[#DFFF5E] text-black font-semibold text-lg hover:bg-[#cbea52] transition">
            Get Started
          </button>
        </div>

        {/* RIGHT VIDEO */}
         <div className="w-full max-w-md rounded-[35px] overflow-hidden border-[8px] border-black shadow-2xl">
          <video
            src={Main}
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
