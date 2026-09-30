import React, { useState } from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const form = event.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "30927f41-383b-4037-afc2-16323424aa23"
    );

    formData.append(
      "subject",
      "New Demo Class Enquiry - ACE English Academy"
    );

    formData.append("from_name", "ACE English Academy Website");

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          "Enquiry submitted successfully! We will contact you shortly."
        );

        form.reset();
      } else {
        toast.error(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(error);

      toast.error(
        "Unable to submit the enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="w-full bg-white">

      {/* =========================================================
          DEMO / CONTACT SECTION
      ========================================================== */}
      <section className="bg-white px-4 sm:px-6 lg:px-10 py-4">
        <div
          className="
            max-w-7xl
            mx-auto
            bg-[#06366b]
            rounded-xl
            p-4
            sm:p-5
            lg:p-6
            text-white
          "
        >

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.45fr_0.8fr] gap-5 items-stretch">

            {/* =================================================
                LEFT - CONTACT INFORMATION
            ================================================== */}
            <div className="flex flex-col justify-center">

              <p className="text-[#f20b46] text-[10px] sm:text-xs font-bold uppercase tracking-wide">
                Get In Touch
              </p>

              <h2 className="text-xl sm:text-2xl font-bold mt-1">
                Book Your Free Demo Class
              </h2>

              <p className="text-xs sm:text-sm text-blue-100 mt-2 leading-relaxed max-w-sm">
                Take the first step towards a better you.
                <br />
                Fill the form and our team will contact you shortly.
              </p>


              {/* WhatsApp Number */}
              <div className="flex items-center gap-2 mt-4">

                <img
                  src="./icons/wa.svg"
                  alt="WhatsApp"
                  className="h-[20px] w-[20px]"
                />

                <div className="flex flex-col">

                  <span className="text-[9px] text-blue-200 uppercase tracking-wide">
                    WhatsApp Number
                  </span>

                  <a
                    href="https://wa.me/918955641261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-xs
                      sm:text-sm
                      font-medium
                      hover:text-[#f20b46]
                      transition
                    "
                  >
                    +91 8955641261
                  </a>

                </div>

              </div>


              {/* Email */}
              <div className="flex items-center gap-2 mt-3">

                <span className="text-lg">
                  ✉
                </span>

                <div className="flex flex-col">

                  <span className="text-[9px] text-blue-200 uppercase tracking-wide">
                    Email
                  </span>

                  <a
                    href="mailto:aceenglishacademy2001@gmail.com"
                    className="
                      text-xs
                      sm:text-sm
                      font-medium
                      hover:text-[#f20b46]
                      transition
                      break-all
                    "
                  >
                    aceenglishacademy2001@gmail.com
                  </a>

                </div>

              </div>


              {/* Address */}
              <div className="flex items-start gap-3 mt-3">

                <span className="text-lg">
                  ⌖
                </span>

                <p className="text-xs sm:text-sm leading-relaxed">
                  F-6, Bachpan Plaza, Behind T.P. Nagar Thana,
                  <br />
                  Baghpat Road, Meerut.
                </p>

              </div>

            </div>


            {/* =================================================
                MIDDLE - DEMO FORM
            ================================================== */}
            <div className="bg-white text-[#172554] rounded-lg p-3 sm:p-4">

              <form
                onSubmit={onSubmit}
                className="space-y-3"
              >

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {/* Name */}
                  <div>

                    <label className="block text-[10px] sm:text-xs font-semibold mb-1">
                      Your Name{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="
                        w-full
                        h-9
                        px-3
                        rounded-md
                        border
                        border-slate-300
                        outline-none
                        text-xs
                        transition-all
                        duration-200
                        focus:border-[#06366b]
                        focus:ring-2
                        focus:ring-[#06366b]/20
                      "
                    />

                  </div>


                  {/* Email */}
                  <div>

                    <label className="block text-[10px] sm:text-xs font-semibold mb-1">
                      Email Address{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="
                        w-full
                        h-9
                        px-3
                        rounded-md
                        border
                        border-slate-300
                        outline-none
                        text-xs
                        transition-all
                        duration-200
                        focus:border-[#06366b]
                        focus:ring-2
                        focus:ring-[#06366b]/20
                      "
                    />

                  </div>

                </div>


                {/* WhatsApp + Course */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {/* WhatsApp */}
                  <div>

                    <label className="block text-[10px] sm:text-xs font-semibold mb-1">
                      WhatsApp Number{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="Enter WhatsApp number"
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                      className="
                        w-full
                        h-9
                        px-3
                        rounded-md
                        border
                        border-slate-300
                        outline-none
                        text-xs
                        transition-all
                        duration-200
                        focus:border-[#06366b]
                        focus:ring-2
                        focus:ring-[#06366b]/20
                      "
                    />

                  </div>


                  {/* Course */}
                  <div>

                    <label className="block text-[10px] sm:text-xs font-semibold mb-1">
                      Course Interested In{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <select
                      name="course"
                      required
                      defaultValue=""
                      className="
                        w-full
                        h-9
                        px-3
                        rounded-md
                        border
                        border-slate-300
                        outline-none
                        text-xs
                        bg-white
                        transition-all
                        duration-200
                        focus:border-[#06366b]
                        focus:ring-2
                        focus:ring-[#06366b]/20
                      "
                    >
                      <option value="" disabled>
                        Select course
                      </option>

                      <option value="Spoken English">
                        Spoken English
                      </option>

                      <option value="Communication Skills">
                        Communication Skills
                      </option>

                      <option value="Public Speaking">
                        Public Speaking
                      </option>

                      <option value="Interview Skills">
                        Interview Skills
                      </option>

                      <option value="Presentation Skills">
                        Presentation Skills
                      </option>

                    </select>

                  </div>

                </div>


                {/* Preferred Mode */}
                <div>

                  <label className="block text-[10px] sm:text-xs font-semibold mb-1">
                    Preferred Mode
                  </label>

                  <select
                    name="mode"
                    defaultValue="Online / Offline"
                    className="
                      w-full
                      h-9
                      px-3
                      rounded-md
                      border
                      border-slate-300
                      outline-none
                      text-xs
                      bg-white
                      transition-all
                      duration-200
                      focus:border-[#06366b]
                      focus:ring-2
                      focus:ring-[#06366b]/20
                    "
                  >
                    <option value="Online / Offline">
                      Online / Offline
                    </option>

                    <option value="Online">
                      Online
                    </option>

                    <option value="Offline">
                      Offline
                    </option>

                  </select>

                </div>


                {/* Message */}
                <div>

                  <label className="block text-[10px] sm:text-xs font-semibold mb-1">
                    Message (Optional)
                  </label>

                  <textarea
                    name="message"
                    rows="2"
                    placeholder="Tell us anything..."
                    className="
                      w-full
                      px-3
                      py-2
                      rounded-md
                      border
                      border-slate-300
                      outline-none
                      text-xs
                      resize-none
                      transition-all
                      duration-200
                      focus:border-[#06366b]
                      focus:ring-2
                      focus:ring-[#06366b]/20
                    "
                  />

                </div>


                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                />


                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
                    h-9
                    bg-[#e40046]
                    hover:bg-[#c9003d]
                    disabled:bg-[#e40046]/70
                    text-white
                    rounded-md
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:shadow-lg
                    active:scale-[0.98]
                  "
                >

                  {isSubmitting ? (
                    <>
                      <span
                        className="
                          w-3.5
                          h-3.5
                          border-2
                          border-white/40
                          border-t-white
                          rounded-full
                          animate-spin
                        "
                      />

                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <span className="text-base">
                        →
                      </span>
                    </>
                  )}

                </button>

              </form>

            </div>


            {/* =================================================
                RIGHT - LOCATION / MAP
            ================================================== */}
            <div
              className="
                bg-white
                rounded-lg
                p-2
                text-[#172554]
                flex
                flex-col
              "
            >

              {/* Map */}
              <div
                className="
                  h-[100px]
                  sm:h-[115px]
                  lg:h-[105px]
                  rounded-md
                  overflow-hidden
                  bg-slate-200
                "
              >

                <iframe
                  title="ACE English Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111698.15169625955!2d77.52983369726566!3d28.970557700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65ac024411e1%3A0x17dcf3e45a59d754!2sACE%20English%20Academy!5e0!3m2!1sen!2sus!4v1790425961544!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  loading="lazy"
                />

              </div>


              {/* Location Details */}
              <div className="px-2 pt-2">

                <h3 className="font-bold text-sm sm:text-base">
                  ACE English Academy
                </h3>

                <p className="text-[10px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                  F-6, Bachpan Plaza, Behind T.P. Nagar Thana,
                  <br />
                  Baghpat Road, Meerut.
                </p>


                <a
                  href="https://maps.app.goo.gl/zpr5Sd5xgLst9VVB6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    mt-2
                    border
                    border-[#06366b]
                    text-[#06366b]
                    rounded-md
                    px-3
                    py-1.5
                    text-[10px]
                    sm:text-xs
                    font-semibold
                    hover:bg-[#06366b]
                    hover:text-white
                    transition
                  "
                >
                  ⌖ Get Directions →
                </a>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          BOTTOM NAVIGATION FOOTER
      ========================================================== */}
      <div className="bg-[#062f61] text-white">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            sm:px-8
            lg:px-10
            py-4
          "
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

            {/* Logo */}
            <div className="flex-shrink-0">

              <div className="text-center leading-none">

                <div className="text-2xl sm:text-3xl font-black italic tracking-tight">
                  ACE
                </div>

                <div className="text-[8px] sm:text-[9px] font-semibold tracking-wide">
                  ENGLISH ACADEMY
                </div>

              </div>

            </div>


            {/* Navigation */}
            <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs">

              <a
                href="#home"
                className="hover:text-[#f20b46] transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-[#f20b46] transition"
              >
                About Us
              </a>

              <a
                href="#courses"
                className="hover:text-[#f20b46] transition"
              >
                Courses
              </a>

              <a
                href="#testimonials"
                className="hover:text-[#f20b46] transition"
              >
                Testimonials
              </a>

              <a
                href="#gallery"
                className="hover:text-[#f20b46] transition"
              >
                Gallery
              </a>

              <a
                href="#faq"
                className="hover:text-[#f20b46] transition"
              >
                FAQ
              </a>

              <a
                href="#contact"
                className="hover:text-[#f20b46] transition"
              >
                Contact
              </a>

            </nav>


            {/* Copyright */}
            <div className="flex flex-col items-center lg:items-end gap-2">

              <p className="text-[8px] sm:text-[9px] text-blue-100 whitespace-nowrap">
                © 2026 ACE English Academy. All rights reserved.
                Developed by Aayush Maan
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;