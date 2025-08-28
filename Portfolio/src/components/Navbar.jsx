import React, { useState } from "react";
import { NavLink } from "react-router";
import { Motion, spring } from "react-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-gray-900 shadow-lg">
      <div className="max-w-9xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.postimg.cc/ydF0cBWL/A.png"
            alt="Logo"
            className="w-14 h-14 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-white font-semibold tracking-wide">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-300 transition-colors duration-300 ${
                  isActive ? "text-gray-300" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              My Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button desktop - updated */}
        <div className="hidden md:block">
          <a
            href="/your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-white text-gray-900 font-semibold px-5 py-2 shadow-md hover:shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Hamburger Button mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none text-white hover:text-gray-300 transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with react-motion animation */}
      <Motion
        style={{
          maxHeight: spring(isOpen ? 1000 : 0, { stiffness: 210, damping: 20 }),
          opacity: spring(isOpen ? 1 : 0),
        }}
      >
        {({ maxHeight, opacity }) => (
          <div
            style={{
              maxHeight,
              opacity,
              overflow: "hidden",
            }}
            className="md:hidden bg-gray-900 shadow-inner"
          >
            <ul className="flex flex-col gap-4 px-6 pt-4 pb-8 text-white font-semibold tracking-wide">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleMobileMenu}
                  className="hover:text-gray-300 transition-colors duration-300 block"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={toggleMobileMenu}
                  className="hover:text-gray-300 transition-colors duration-300 block"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={toggleMobileMenu}
                  className="hover:text-gray-300 transition-colors duration-300 block"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={toggleMobileMenu}
                  className="hover:text-gray-300 transition-colors duration-300 block"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={toggleMobileMenu}
                  className="hover:text-gray-300 transition-colors duration-300 block"
                >
                  My Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={toggleMobileMenu}
                  className="hover:text-gray-300 transition-colors duration-300 block"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/your-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block rounded-md bg-white text-gray-900 px-4 py-2 w-full text-center font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </Motion>
    </nav>
  );
};

export default Navbar;
