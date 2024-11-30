import React from "react";
import { assets } from "../assets/assets"; // Importing the image assets

// Card Component
const ProjectCard = ({ title, description, img, readText, gradient }) => {
  return (
    <div
      className={`relative ${gradient} rounded-lg shadow-lg overflow-hidden group`}
    >
      <div className="p-6 text-white relative z-10">
        <h3 className="text-3xl font-bold mb-4 text-center">{title}</h3>
        <p className="opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
          {description}
        </p>
        {readText && (
          <a
            href="#"
            className="opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out underline text-sm mt-4 inline-block"
          >
            {readText}
          </a>
        )}
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 group-hover:opacity-25 transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
    </div>
  );
};

// Section Component
const Project = () => {
  const projects = [
    {
      title: "Ui/UX Design",
      description: "A **Full Stack Developer** is a versatile professional skilled in both front-end and back-end development. They handle the complete software development lifecycle, from designing user interfaces with technologies like HTML, CSS, and JavaScript to managing databases and server-side logic with tools such as Node.js, Python, or PHP. Proficient in frameworks like React for the client-side and Express for the server-side, full stack developers ensure seamless integration between components. They often work with databases like MongoDB or MySQL and manage APIs to enable communication between systems. This diverse expertise makes them invaluable for building robust, scalable, and dynamic web applications.",
      img: assets.laptop,
      gradient: "bg-[#31343a]",
      readText: "Read More",
    },
    {
      title: "Website Development",
      description: "A **Full Stack Developer** is a versatile professional skilled in both front-end and back-end development. They handle the complete software development lifecycle, from designing user interfaces with technologies like HTML, CSS, and JavaScript to managing databases and server-side logic with tools such as Node.js, Python, or PHP. Proficient in frameworks like React for the client-side and Express for the server-side, full stack developers ensure seamless integration between components. They often work with databases like MongoDB or MySQL and manage APIs to enable communication between systems. This diverse expertise makes them invaluable for building robust, scalable, and dynamic web applications.",
      img: assets.laptop,
      gradient: "bg-[#31343a]",
      readText: "Explore",
    },
    {
      title: "Mobile App Design",
      description: "A **Full Stack Developer** is a versatile professional skilled in both front-end and back-end development. They handle the complete software development lifecycle, from designing user interfaces with technologies like HTML, CSS, and JavaScript to managing databases and server-side logic with tools such as Node.js, Python, or PHP. Proficient in frameworks like React for the client-side and Express for the server-side, full stack developers ensure seamless integration between components. They often work with databases like MongoDB or MySQL and manage APIs t ",
      img: assets.laptop, // Using the imported 'laptop.png'
      gradient: "bg-[#31343a]",
      readText: "Discover",
    },
    {
      title: "E-commerce Platform",
      description: "A **Full Stack Developer** is a versatile professional skilled in both front-end and back-end development. They handle the complete software development lifecycle, from designing user interfaces with technologies like HTML, CSS, and JavaScript to managing databases and server-side logic with tools such as Node.js, Python, or PHP. Proficient in frameworks like React for the client-side and Express for the server-side, full stack developers ensure seamless integration between components. They often work with databases like MongoDB or MySQL and manage APIs to enable communication between systems. This diverse expertise makes them invaluable for building robust, scalable, and dynamic web applications.",
      img: assets.laptop,
      gradient: "bg-[#31343a]",
    },
    
    
  ];

  return (
    <section id="Projects" className="bg-dark min-h-screen py-12 bg-[#1f242d]">
      <div className="container mx-auto px-4">
        <h2 className="sub-title text-center text-5xl md:text-6xl font-bold mb-6 text-white">
          Latest <span className="text-[#90ee90]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols- lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              img={project.img}
              gradient={project.gradient}
              readText={project.readText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
