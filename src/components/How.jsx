import React from "react";

const steps = [
  {
    number: "01",
    title: "Understand the Brand",
    desc:
      "We begin by understanding your brand, audience, and objectives — not just what you want to say, but how you want to show up.",
    color: "bg-[#F4F6FF]",
  },
  {
    number: "02",
    title: "Thoughtful Creator Casting",
    desc:
      "We identify creators who naturally align with your voice and values. Every recommendation is made with intention, cultural fit, and long-term relevance in mind.",
    color: "bg-[#FFF4E8]",
  },
  {
    number: "03",
    title: "Creative Direction",
    desc:
      "We shape campaign ideas and formats that feel authentic to both the brand and the creator — allowing creators to tell the story in their own voice.",
    color: "bg-[#F1FAF7]",
  },
  {
    number: "04",
    title: "Seamless Execution",
    desc:
      "From outreach and contracts to timelines, approvals, and coordination, we manage the entire campaign end to end so nothing feels rushed or chaotic.",
    color: "bg-[#F9F2FF]",
  },
  {
    number: "05",
    title: "Delivery & Learnings",
    desc:
      "Once content goes live, we review outcomes and share clear learnings to help inform what comes next — keeping the focus on growth, not just numbers.",
    color: "bg-[#FFF1F2]",
  },
];

const HowWeWork = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-28 px-4 sm:px-8 md:px-20">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black mb-6">
          HOW WE WORK
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
          A simple, thoughtful approach to influencer campaigns
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-5xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-11/12 w-[2px] bg-gray-200 -translate-x-1/2 hidden md:block" />

        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`relative mb-20 flex flex-col md:flex-row ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center`}
          >
            {/* CONTENT CARD */}
            <div className="w-full md:w-1/2 px-4">
              <div
                className={`
                  ${step.color}
                  rounded-2xl p-6 sm:p-8
                  border border-black/5
                  shadow-sm

                  sm:transition sm:duration-300
                  sm:hover:-translate-y-2
                  sm:hover:shadow-xl
                `}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-black/30">
                    {step.number}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-semibold text-black">
                    {step.title}
                  </h2>
                </div>

                <p className="text-gray-700 text-[16px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>

            {/* DOT */}
            <div className="relative z-10 w-6 h-6 bg-white border-4 border-[#6C7CFF] rounded-full my-8 md:my-0" />
          </div>
        ))}

        {/* GOAL */}
        <div className="flex flex-col items-center text-center mt-25">
          {/* <div className="w-10 h-10 rounded-full bg-[#6C7CFF] flex items-center justify-center text-white text-xl shadow-lg">
            
          </div> */}
          <h3 className="text-2xl font-semibold text-black mt-6">
            Campaigns That Feel Human & Perform
          </h3>
          <p className="text-gray-600 max-w-xl mt-3">
            Authentic creator partnerships, meaningful storytelling, and insights that
            help brands grow with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
