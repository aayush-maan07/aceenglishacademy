import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="min-h-[60vh] bg-[#f8fafc] flex pt-12 sm:pt-14 pb-0 mb-0 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col justify-center">

            {/* Small Heading */}
            <span className="text-[#e11d48] text-sm sm:text-base font-bold tracking-wide uppercase mb-2">
              About Us
            </span>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#172554] leading-tight">
              About ACE English Academy
            </h1>

            {/* Sub Heading */}
            <h2 className="mt-2 text-xl sm:text-2xl lg:text-[27px] font-semibold text-[#1e3a5f]">
              A Center of English Language
            </h2>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl">
              ACE English Academy is a premier English language training
              institute in Meerut, focused on improving spoken English,
              communication, presentation, public speaking and interview
              skills. We offer online and offline batches for all age groups,
              with special focus on working women and homemakers.
            </p>

            {/* Button */}
            <div className="mt-7">
              <button
                className="
                  inline-flex items-center gap-3
                  bg-[#e11d48] hover:bg-[#be123c]
                  text-white
                  font-semibold
                  px-7 py-3
                  rounded-lg
                  transition-all duration-300
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  cursor-pointer
                "
                onClick={function () {
                  window.location.href = "#courses";
                }}
              >
                Learn More
                <span className="text-xl leading-none"> →</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <img
                src="/images/classroom.png"
                alt="ACE English Academy classroom"
                className="
                  w-full
                  h-[260px]
                  sm:h-[320px]
                  lg:h-[370px]
                  object-cover
                  rounded-xl
                  shadow-sm
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;