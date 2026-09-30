import React from "react";

const courses = [
  {
    title: "Spoken English",
    description:
      "Build vocabulary, grammar, pronunciation and everyday conversation skills.",
    icon: "💬",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    title: "Communication Skills",
    description:
      "Speak confidently, improve conversation, vocabulary, pronunciation and body language.",
    icon: "👥",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "Public Speaking",
    description:
      "Build stage confidence, learn speech preparation, voice modulation and more.",
    icon: "📢",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
  },
  {
    title: "Interview Skills",
    description:
      "Get ready for job interviews, common questions, self-introduction and professional communication.",
    icon: "💼",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    title: "Presentation Skills",
    description:
      "Create impactful presentations with better body language, and audience interaction.",
    icon: "📊",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="min-h-[60vh] w-full bg-white flex pt-16 pb-0 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8">

        {/* Section Heading */}
        <div className="mb-7">
          <p className="text-[#e11d48] text-xs sm:text-sm font-bold uppercase tracking-wide">
            Our Courses
          </p>

          <h1 className="mt-1 text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#172554] leading-tight">
            What We Offer
          </h1>

          <p className="mt-1 text-lg sm:text-xl font-semibold text-[#1e3a5f]">
            Practical Training for Real Life Situations
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`
                ${course.bg}
                rounded-xl
                px-5 py-5
                min-h-[250px]
                flex flex-col
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-md
              `}
            >
              {/* Icon */}
              <div
                className={`
                  ${course.iconBg}
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  mb-5
                `}
              >
                <span
                  className={`text-xl ${course.iconColor}`}
                  role="img"
                  aria-label={course.title}
                >
                  {course.icon}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-bold text-[#172554] leading-snug">
                {course.title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm text-[#334155] leading-relaxed">
                {course.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;