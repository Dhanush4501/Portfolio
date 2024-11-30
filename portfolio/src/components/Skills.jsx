import React from 'react';

const Skills = () => {

    const skills = [
        { name: 'Creativity', percentage: 90 },
        { name: 'Communication', percentage: 75 },
        { name: 'Teamwork', percentage: 65 },
        { name: 'Problem-Solving', percentage: 75 },
      ];

      
  return (
    <section id="Skills" className="flex flex-wrap justify-center bg-[#1f242d] ">
      {/* Technical Skills */}
      <div className="w-full max-w-lg h-auto p-12 mx-auto mb-8">
        <h1 className="text-3xl text-white md:text-5xl font-extrabold text-center mb-4">Technical Skills</h1>
        <div className="space-y-8">
          {/* HTML Skill */}
          <div className="flex items-center">
            <i className="bx bxl-html5 text-orange-600 text-3xl mr-4"></i>
            <div className="flex-1">
              <div className="text-lg font-semibold text-white">HTML - 90%</div>
              <div className="w-full bg-gray-300 h-1 rounded-full">
                <div className="bg-[#90ee90]
                -400 h-1 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
          {/* CSS Skill */}
          <div className="flex items-center">
            <i className="bx bxl-css3 text-blue-600 text-3xl mr-4"></i>
            <div className="flex-1">
              <div className="text-lg font-semibold text-white">CSS - 85%</div>
              <div className="w-full bg-gray-300 h-1 rounded-full">
                <div className="bg-[#90ee90]
                -400 h-1 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
          {/* JavaScript Skill */}
          <div className="flex items-center">
            <i className="bx bxl-javascript text-yellow-600 text-3xl mr-4"></i>
            <div className="flex-1">
              <div className="text-lg font-semibold text-white">JavaScript - 50%</div>
              <div className="w-full bg-gray-300 h-1 rounded-full">
                <div className="bg-[#90ee90]
                -400 h-1 rounded-full w-[50%]"></div>
              </div>
            </div>
          </div>
          {/* React Skill */}
          <div className="flex items-center">
            <i className="bx bxl-react text-blue-500 text-3xl mr-4"></i>
            <div className="flex-1">
              <div className="text-lg font-semibold text-white">React - 50%</div>
              <div className="w-full bg-gray-300 h-1 rounded-full">
                <div className="bg-[#90ee90]
                -400 h-1 rounded-full w-[50%]"></div>
              </div>
            </div>
          </div>
          {/* Arduino Skill */}
          <div className="flex items-center">
            <i className="bx bx-infinite text-teal-500 text-3xl mr-4"></i>
            <div className="flex-1">
              <div className="text-lg font-semibold text-white">Arduino - 40%</div>
              <div className="w-full bg-gray-300 h-1 rounded-full">
                <div className="bg-[#90ee90]
                -400 h-1 rounded-full w-[40%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Skills */}
      <div className="w-full max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
        Professional Skills
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="relative w-36 h-36 mx-auto">
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 transform rotate-[-90deg]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                className="stroke-gray-300 fill-none stroke-[10] w-full h-full"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                className="stroke-[#90ee90] fill-none stroke-[10] w-full h-full"
                style={{
                  strokeDasharray: 502, // Circumference of the circle
                  strokeDashoffset: (502 * (100 - skill.percentage)) / 100,
                  transition: 'stroke-dashoffset 0.5s ease-in-out',
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white font-bold text-xl">
                {skill.percentage}%
              </span>
              <span className="text-white text-sm">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Skills;
