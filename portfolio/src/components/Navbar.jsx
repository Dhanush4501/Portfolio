import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <div>
      <header className=" fixed top-0 left-0 w-full px-10 py-5 bg-[#000c14] flex justify-between items-center z-50">
        {/* Logo */}
        <a href="#home" className="text-white text-4xl font-bold">
          Myself
        </a>

        {/* Navbar */}
        <nav
          className={`${
            menuOpen
              ? "fixed top-0 left-0 w-full h-full py-5 bg-[#000c14] flex flex-col  items-center"
              : "hidden"
          } md:flex md:gap-10 md:static`}
        >
          <a
            href="#home"
            className="text-white text-lg hover:text-cyan-500 transition"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-lg hover:text-cyan-500 transition"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            About
          </a>
          <a
            href="#Skills"
            className="text-white text-lg hover:text-cyan-500 transition"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            Skills
          </a>
          <a
            href="#Projects"
            className="text-white text-lg hover:text-cyan-500 transition"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white  text-lg hover:text-cyan-500 transition"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            Contact
          </a>
        </nav>

        {/* Hamburger Menu */}
        <div
          className="md:hidden flex flex-col justify-between h-6 w-6 cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <span
            className={`block w-full h-[3px] bg-white rounded transition-transform ${
              menuOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-[3px] bg-white rounded transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-[3px] bg-white rounded transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          ></span>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
