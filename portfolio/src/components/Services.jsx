import React from "react";

const Services = () => {
  const services = [
    {
      icon: "bx bxl-figma",
      color: "#90ee90",
      title: "Figma Design",
      description:
        "I specialize in creating user-friendly, visually appealing web interfaces using Figma. My projects showcase a blend of creativity and functionality, ensuring a seamless user experience. Explore my work to see how I bring ideas to life through innovative design solutions. Let's collaborate to craft engaging digital experiences!",
    },
    {
      icon: "bx bxl-react",
      color: "#90ee90",
      title: "Frontend Development",
      description:
        "I specialize in crafting intuitive and responsive web applications using React. With a keen eye for design and functionality, I bring concepts to life, ensuring seamless user experiences across devices. My projects demonstrate proficiency in leveraging React's ecosystem to build scalable, high-performance applications. Dive into my work to see innovative solutions that elevate digital interaction. Let's collaborate to transform your vision into a captivating online presence!",
    },
    {
      icon: "bx bx-laptop",
      color: "#90ee90",
      title: "Web Development",
      description:
        "I specialize in building dynamic, user-centric websites that seamlessly blend aesthetics and functionality. With expertise in both frontend and backend technologies, I create robust solutions that deliver exceptional user experiences. Explore my diverse projects to see how I transform innovative ideas into compelling digital realities. Let's collaborate to turn your vision into an outstanding online presence!",
    },
  ];

  return (
    <section className="services py-12 px-6 bg-[#1f242d] text-white" id="services">
      <div className="container mx-auto">
        <h1 className="sub-title text-center text-5xl md:text-6xl font-bold mb-8">
          My<span className="text-[#90ee90]"> Services</span>
        </h1>
        <div className="services-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl transition-transform transform hover:-translate-y-2 shadow-lg bg-[#424853]"
            >
              <i
                className={`${service.icon} text-5xl mb-6 block`}
                style={{ color: service.color }}
              ></i>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-sm mb-6 leading-relaxed">{service.description}</p>
              <a
                href="#"
                className="read inline-block px-6 py-3 bg-[#90ee90] text-[#081b29] font-bold rounded-full hover:shadow-[0_0_20px_#90ee90]"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
