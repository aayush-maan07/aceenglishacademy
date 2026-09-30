import React, { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    course: "Spoken English",
    image: "/images/pp/priya.png",
    review:
      "ACE has really helped me build my confidence. The trainers are supportive and the classes are very interactive. I highly recommend it!",
  },
  {
    name: "Rahul Verma",
    course: "Interview Skills",
    image: "/images/pp/rahul.png",
    review:
      "The communication and interview skills sessions were extremely helpful. I am now much more confident in interviews and group discussions.",
  },
  {
    name: "Neha Gupta",
    course: "Communication Skills",
    image: "/images/pp/neha.png",
    review:
      "The sessions helped me improve my communication and vocabulary. The teaching approach is practical and easy to understand.",
  },
  {
    name: "Aman Singh",
    course: "Public Speaking",
    image: "/images/pp/aman.png",
    review:
      "I was nervous about speaking in front of people. After attending the sessions, I feel much more confident while speaking publicly.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="testimonials min-h-[60vh] w-full bg-[#f1ecf0] flex pt-14 pb-0 mb-0 verflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 lg:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* =====================================================
              LEFT - ABOUT TRAINER
          ====================================================== */}
          <div className="w-full">

            {/* Section Label */}
            <p className="text-[#e11d48]  text-xs sm:text-sm font-bold uppercase tracking-wide mb-2">
              Meet Your Trainer
            </p>

            <div className="flex flex-col pt-2 sm:flex-row items-center sm:items-start gap-6">

              {/* Trainer Image */}
              <div className="flex-shrink-0">
                <img
                  src="/images/trainer.jpg"
                  alt="Yogesh Agarwal"
                  className="
                    w-44
                    h-52
                    sm:w-48
                    sm:h-56
                    object-cover
                    rounded-xl
                    shadow-sm
                  "
                />
              </div>

              {/* Trainer Details */}
              <div className="flex-1 text-center sm:text-left">

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172554] leading-tight">
                  Yogesh Agarwal
                </h1>

                <p className="mt-2 text-sm sm:text-base font-medium text-[#334155]">
                  Language Trainer
                  <span className="mx-2 text-[#e11d48]">|</span>
                  24 Yrs Exp.
                </p>

                <p className="mt-5 text-sm sm:text-base text-[#475569] leading-relaxed">
                  With 24 years of experience in language training,
                  Yogesh Agarwal has helped thousands of students
                  improve their English and communication skills
                  with practical and result-oriented teaching methods.
                </p>

              </div>
            </div>
          </div>


          {/* =====================================================
              RIGHT - TESTIMONIALS
          ====================================================== */}
          <div className="w-full">
            

            {/* Heading */}
            <div className="mb-5">
              <p className="text-[#e11d48] text-xs sm:text-sm font-bold uppercase tracking-wide">
                Student Stories
              </p>

              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#172554]">
                What Our Students Say
              </h2>
            </div>


            {/* Testimonial Slider */}
            <div className="relative">

              {/* Previous Button */}
              <button
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="
                  absolute
                  -left-4
                  sm:-left-5
                  top-1/2
                  -translate-y-1/2
                  z-10
                  w-10
                  h-10
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  shadow-md
                  flex
                  items-center
                  justify-center
                  text-[#172554]
                  hover:bg-[#172554]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                ←
              </button>


              {/* Card */}
              <div
                key={currentIndex}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-xl
                  p-5
                  sm:p-6
                  shadow-sm
                  min-h-[230px]
                  flex
                  flex-col
                  justify-center
                  animate-[fadeIn_0.4s_ease-in-out]
                "
              >

                {/* Student Info */}
                <div className="flex items-center gap-4">

                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="
                      w-14
                      h-14
                      rounded-full
                      object-cover
                      border-2
                      border-slate-100
                    "
                  />

                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="text-[#f59e0b] text-lg"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <h3 className="font-bold text-[#172554] text-base">
                      {testimonials[currentIndex].name}
                    </h3>

                    <p className="text-sm text-[#64748b]">
                      {testimonials[currentIndex].course}
                    </p>
                  </div>

                </div>


                {/* Review */}
                <p className="mt-5 text-sm sm:text-base text-[#475569] leading-relaxed">
                  "{testimonials[currentIndex].review}"
                </p>

              </div>


              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="
                  absolute
                  -right-4
                  sm:-right-5
                  top-1/2
                  -translate-y-1/2
                  z-10
                  w-10
                  h-10
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  shadow-md
                  flex
                  items-center
                  justify-center
                  text-[#172554]
                  hover:bg-[#172554]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                →
              </button>

            </div>


            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentIndex === index
                        ? "w-6 bg-[#e11d48]"
                        : "w-2 bg-slate-300"
                    }
                  `}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;