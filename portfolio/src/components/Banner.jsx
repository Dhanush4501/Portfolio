import React from "react";
import { assets } from "../assets/assets";
import TypedText from "./Typedtext";

const Banner = () => {
  return (
    <div>
      <section
        id="home"
        className="home flex flex-col-reverse md:flex-row items-center justify-between w-full h-screen px-6 sm:px-12 md:px-20 py-12 md:py-20 bg-[#1f242d]"
      >
        {/* Home Content */}
        <div className="home-content text-center md:text-left max-w-lg">
          <h3 className="text-2xl sm:text-3xl font-bold opacity-0 animate-slide-bottom font-color text-white">
            Hello, It's Me
          </h3>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-1 opacity-0 animate-slide-right text-white">
            Dhanush D
          </h1>

          <p className="text-base sm:text-lg mt-4 opacity-0 animate-slide-left text-white">
            <TypedText />
          </p>

          {/* Social Icons */}
          <div className="home-sci flex justify-center md:justify-start mt-6 space-x-4">
            <a
              href="https://api.whatsapp.com/send/?phone=917604972027&text&type=phone_number&app_absent=0"
              className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 border-2 border-[#90ee90] rounded-full text-[#90ee90] transition-all hover:bg-[#90ee90] hover:text-[#081b29] hover:shadow-[0_0_20px_#90ee90]"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/bluedragon_r15_lover/"
              className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 border-2 border-[#90ee90] rounded-full text-[#90ee90] transition-all hover:bg-[#90ee90] hover:text-[#081b29] hover:shadow-[0_0_20px_#90ee90]"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="http://www.linkedin.com/in/dhanush4501"
              className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 border-2 border-[#90ee90] rounded-full text-[#90ee90] transition-all hover:bg-[#90ee90] hover:text-[#081b29] hover:shadow-[0_0_20px_#90ee90]"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/Dhanush4501"
              className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 border-2 border-[#90ee90] rounded-full text-[#90ee90] transition-all hover:bg-[#90ee90] hover:text-[#081b29] hover:shadow-[0_0_20px_#90ee90]"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:dhanush45001@gmail.com"
              className="btn-box px-4 sm:px-6 py-2 sm:py-3 bg-[#90ee90] rounded-full text-[#081b29] font-bold text-sm shadow-[0_0_5px_#90ee90,0_0_25px_#90ee90] hover:shadow-[0_0_100px_#90ee90] transition"
            >
              More About Me
            </a>
            <a download={true}
              href="https://drive.google.com/file/d/1XWeIz0Eb46SZvlLqH02MvnyIQ6R5LkO_/view?usp=sharing"
              className="btn-box px-4 sm:px-6 py-2 sm:py-3 bg-[#90ee90] rounded-full text-[#081b29] font-bold text-sm shadow-[0_0_5px_#90ee90,0_0_25px_#90ee90] hover:shadow-[0_0_100px_#90ee90] transition"
            >
              Download My CV
            </a>
          </div>
        </div>

        {/* Neon Circle */}
        <div className="neon-circle relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#4dffdb] to-[#8e44ad] shadow-[0_0_20px_#8e44ad,0_0_40px_#8e44ad,0_0_60px_#4dffdb] mb-12 md:mb-0">
          <img
            src={assets.dhanush}
            alt="Dhanush"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
