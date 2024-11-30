import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const el = useRef(null); // Reference for the element where typing animation will be shown
  const typed = useRef(null); // Reference for the Typed instance

  useEffect(() => {
    // Initialize Typed.js
    typed.current = new Typed(el.current, {
      strings: ["Frontend Developer", "Programmer", "Web Developer"], // Strings to type
      typeSpeed: 100, // Typing speed
      backSpeed: 100, // Backspacing speed
      backDelay: 1000, // Delay before backspacing
      loop: true, // Loop the typing animation
    });

    // Cleanup the Typed instance on unmount
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <h3 className="text-xl md:text-3xl font-bold text-[#90ee90]">
      <span className="text-white"> And I'm a</span> <span ref={el}></span>
    </h3>
  );
};

export default TypedText;
