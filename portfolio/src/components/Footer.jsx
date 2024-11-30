import React from "react";

const Footer = () => {
  return (
    <div className="relative ">
      {/* Footer Text */}
      <div className="bg-[#1f242d] text-center py-6">
        <p className="text-white font-light">
          Developed by <span className="font-semibold">Dhanush ® 2024</span>
        </p>
      </div>

      {/* Back to Top Button */}
      <a
        href="#"
        className="fixed bottom-8 right-8 bg-[#90ee90] text-black text-xl p-3 rounded-lg shadow-lg hover:bg-[#90ee90] transition-transform transform hover:scale-110"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        <i className="bx bx-up-arrow-alt"></i>
      </a>
    </div>
  );
};

export default Footer;
