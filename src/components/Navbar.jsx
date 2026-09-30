import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Testimonials", href: "#testimonials" },
    // { name: "Gallery", href: "#gallery_faq" },
    { name: "Gallery", href: "#gallery" },
  ];

  // ------------------------------------------
  // Detect which section is currently visible
  // ------------------------------------------
  useEffect(() => {
  const handleScroll = () => {
    const navbarHeight = 76;
    const triggerPoint = navbarHeight + 20;

    let currentSection = "home";

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);

      if (section) {
        const sectionTop = section.getBoundingClientRect().top;

        // Section has reached the trigger point
        if (sectionTop <= triggerPoint) {
          currentSection = section.id;
        }
      }
    });

    const currentLink = navLinks.find(
      (link) => link.href === `#${currentSection}`
    );

    if (currentLink) {
      setActiveLink((prev) => {
        // Don't update unnecessarily
        if (prev === currentLink.name) return prev;

        return currentLink.name;
      });
    }
  };

  // Run once when page loads
  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  // ------------------------------------------
  // Handle navbar click
  // ------------------------------------------
  const handleNavClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* Logo */}
        <a
          href="#home"
          className="flex-shrink-0"
          onClick={() => handleNavClick("Home")}
        >
          <img
            src="/images/logo.png"
            alt="ACE English Academy"
            className="h-[52px] w-auto object-contain sm:h-[58px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`relative py-2 text-[14px] font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-[#c20d3c]"
                    : "text-[#0b2b55] hover:text-[#c20d3c]"
                }`}
              >
                {link.name}

                {/* Smooth moving underline */}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-[-9px] left-0 h-[3px] w-full rounded-full bg-[#c20d3c]"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg bg-[#bd0d3d] px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#a30a34] hover:shadow-lg lg:flex"
        >
          <Phone size={17} />
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0b2b55] hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-3">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`block border-b border-gray-100 py-3.5 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-[#c20d3c]"
                    : "text-[#0b2b55]"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#bd0d3d] px-5 py-3.5 text-sm font-bold text-white"
          >
            <Phone size={17} />
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;