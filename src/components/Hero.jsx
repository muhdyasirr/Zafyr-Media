import React from "react";
import image7 from "../assets/image7.png";
import image10 from "../assets/image10.jpeg";
import image9 from "../assets/image9.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Hero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full min-h-screen bg-black flex justify-center items-center px-4 py-14 sm:py-20 overflow-hidden">
      <div
        className="
          w-full max-w-7xl rounded-3xl
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

          <button
            className="
              mx-auto md:mx-0 w-fit px-8 py-4 rounded-full bg-[#DFFF5E]
              text-black font-semibold text-lg
              transition duration-300 hover:bg-[#cbea52]
            "
            onClick={handleScrollToContact}
          >
            Talk to Us
          </button>
        </div>

        {/* RIGHT IMAGE CAROUSEL */}
        <div className="w-full max-w-md sm:max-w-lg rounded-[30px] overflow-hidden">
  <Swiper
    modules={[Autoplay]}
    autoplay={{
      delay: 2800, // ⏱️ 2 seconds
      disableOnInteraction: false,
    }}
    loop={true}
    slidesPerView={1}   // ✅ Full image only
    spaceBetween={0}
    className="rounded-[30px]"
  >
    {[image7,image9,image10].map((img, index) => (
      <SwiperSlide key={index}>
        <div className="h-[460px] sm:h-[520px] rounded-[30px] overflow-hidden">
          <img
            src={img}
            alt={`hero-slide-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      </div>
    </section>
  );
};

export default Hero;
