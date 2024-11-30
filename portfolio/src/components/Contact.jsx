import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className=" bg-[#1f242d]">
        <h2 className="text-5xl text-center font-bold mb-4 text-white">
            Contact <span className="text-[#90ee90]">Us</span>
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 py-16">
        <div className="contact-text text-center">
          
          <h4 className="text-lg text-white mb-4">
            We'd love to hear from you
          </h4>
          <p className="text-white mb-6">
            Fill out the form below to get in touch with us!
          </p>
          <ul className="contact-list">
            <li className="mb-4 text-white">
              <i className="fas fa-map-marker-alt text-cyan-500"></i>
              Arcot,Vellore,Tamilnadu
            </li>
            <li className="mb-4 text-white">
              <i className="fas fa-phone-alt text-cyan-500"></i>
              +91 7604972027
            </li>
            <li className="mb-4 text-white">
              <i className="fas fa-envelope-alt text-cyan-500"></i>
              Dhanush45001@gmail.com
            </li>
          </ul>
          <div className="home-sci flex justify-center md:justify-center mt-6 space-x-4">
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

        </div>

        <div className="contact-form">
          <form action="#">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-4 bg-gray-200 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 bg-gray-200 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 mb-4 bg-gray-200 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="send w-full p-4 bg-[#90ee90] text-black rounded-full shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
