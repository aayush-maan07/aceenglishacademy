import React, { useState } from "react";

const galleryImages = [
  {
    src: "/images/gallery/1.png",
    alt: "English training classroom",
  },
  {
    src: "/images/gallery/2.png",
    alt: "Students attending English class",
  },
  {
    src: "/images/gallery/3.png",
    alt: "ACE English Academy classroom",
  },
  {
    src: "/images/gallery/4.png",
    alt: "English communication training",
  },
  {
    src: "/images/gallery/5.png",
    alt: "Public speaking session",
  },
  {
    src: "/images/gallery/6.png",
    alt: "Students at ACE English Academy",
  },
];

const faqs = [
  {
    question: "Who can join ACE English Academy?",
    answer:
      "Our courses are suitable for students, working professionals, homemakers and anyone who wants to improve their English communication skills.",
  },
  {
    question: "Do you offer online and offline classes?",
    answer:
      "Yes. We provide both online and offline training programs so students can choose the learning mode that works best for them.",
  },
  {
    question: "What will I learn in the Spoken English course?",
    answer:
      "You will work on vocabulary, grammar, pronunciation, sentence formation and everyday conversations to become more confident in English.",
  },
  {
    question: "How can I improve my interview skills?",
    answer:
      "Our interview training covers self-introduction, common interview questions, professional communication, body language and mock interview practice.",
  },
  {
    question: "How long does it take to improve communication skills?",
    answer:
      "The improvement period depends on your current level and practice. Regular classes, speaking practice and feedback can help you make consistent progress.",
  },
];

const Gallery = () => {
  const [currentFaq, setCurrentFaq] = useState(0);

  const nextFaq = () => {
    setCurrentFaq((prev) =>
      prev === faqs.length - 1 ? 0 : prev + 1
    );
  };

  const previousFaq = () => {
    setCurrentFaq((prev) =>
      prev === 0 ? faqs.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery" className="min-h-[60vh] w-full bg-white flex pt-14 pb-0items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 lg:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-10 lg:gap-14 items-center">

          {/* =====================================================
              LEFT - GALLERY
          ====================================================== */}
          <div className="w-full">

            {/* Heading */}
            <div className="mb-5">
              <p className="text-[#e11d48] text-xs sm:text-sm font-bold uppercase tracking-wide">
                Our Gallery
              </p>

              <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#172554] leading-tight">
                Gallery
              </h1>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">

              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-lg
                    h-[115px]
                    sm:h-[125px]
                    lg:h-[135px]
                    bg-slate-100
                    border
                    border-slate-100
                  "
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Subtle overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/0
                      group-hover:bg-black/10
                      transition-all
                      duration-300
                    "
                  />
                </div>
              ))}

            </div>
          </div>


          {/* =====================================================
              RIGHT - FAQ
          ====================================================== */}
          <div className="w-full">

            {/* Heading */}
            <div className="mb-5">
              <p className="text-[#e11d48] text-xs sm:text-sm font-bold uppercase tracking-wide">
                Frequently Asked Questions
              </p>

              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#172554]">
                FAQs
              </h2>

              <p className="mt-2 text-sm text-[#64748b]">
                Find answers to some common questions about our courses.
              </p>
            </div>


            {/* FAQ Slider */}
            <div className="relative">

              {/* Previous Button */}
              <button
                onClick={previousFaq}
                aria-label="Previous FAQ"
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


              {/* FAQ Card */}
              <div
                key={currentFaq}
                className="
                  min-h-[320px]
                  bg-[#f8fafc]
                  border
                  border-slate-200
                  rounded-xl
                  p-6 sm:p-7
                  flex
                  flex-col
                  justify-center
                  shadow-sm
                  animate-[faqFade_0.4s_ease-in-out]
                "
              >

                {/* Question Number */}
                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-[#ffe4e6]
                    text-[#e11d48]
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-sm
                    mb-4
                  "
                >
                  {String(currentFaq + 1).padStart(2, "0")}
                </div>

                {/* Question */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#172554] leading-snug">
                  {faqs[currentFaq].question}
                </h3>

                {/* Answer */}
                <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                  {faqs[currentFaq].answer}
                </p>

              </div>


              {/* Next Button */}
              <button
                onClick={nextFaq}
                aria-label="Next FAQ"
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


            {/* FAQ Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {faqs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFaq(index)}
                  aria-label={`Show FAQ ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentFaq === index
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

export default Gallery;