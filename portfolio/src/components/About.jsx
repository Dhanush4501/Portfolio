import React from "react";
import DhanushImage from "../assets/Dhanush.jpg"; // Update the path to the image file

const AboutMe = () => {
  return (
    <section
      id="about"
      className="about flex flex-wrap justify-evenly items-center  bg-[#1f242d] text-white p-8"
    >
      {/* About Image */}
      <div className="about-img flex-1 flex justify-center my-5 md:my-10">
        <img
          src={DhanushImage}
          alt="Dhanush"
          className="max-w-[330px] w-full rounded-lg object-cover hidden md:block"
        />
      </div>

      {/* About Text */}
      <div className="about-text  max-w-[600px] mx-5 md:mx-10 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          About <span className="text-[#90ee90]">Me</span>
        </h2>
        <h4 className="text-lg md:text-2xl text-[#ededed] mb-4">
          Full Stack Developer
        </h4>
        <p className="text-base md:text-lg leading-relaxed">
          I am a passionate and dynamic Full Stack Developer with hands-on
          experience in building modern, scalable web applications. Proficient
          in front-end technologies like HTML, CSS, and JavaScript, along with
          frameworks like React and Bootstrap, I create seamless and responsive
          interfaces. On the back-end, I have expertise in Node.js, Express, and
          MongoDB for robust and secure server-side development.
          <br />
          <br />
          Having completed an internship at Codebine Technologies, I gained
          practical knowledge of the complete software development lifecycle.
          My portfolio includes diverse projects, including AI-powered
          chatbots, a blood donor bot, and a robotics scarecrow. I am skilled
          in using version control tools like Git and thrive in collaborative
          environments. With a strong foundation in Python and Java, I also
          focus on problem-solving and clean code practices. I continuously
          upskill by participating in hackathons, workshops, and tech events.
          My goal is to contribute to innovative projects and grow as a
          software developer, bridging the gap between creative ideas and
          functional solutions.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="#contact"
            className="btn-box px-6 py-3 bg-[#90ee90] text-[#081b29] rounded-full font-bold hover:shadow-[0_0_20px_#90ee90]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
