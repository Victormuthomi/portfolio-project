import React from "react";

const Skills = () => {
  return (
    <>
      {/* <!-- Skills Section --> */}
      <section className="max-w-7xl mx-auto px-6 py-20" id="skills">
        <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="font-semibold text-xl">MERN Stack</h3>
            <p className="text-gray-700">MongoDB, Express, React, Node.js</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl">Python & Django</h3>
            <p className="text-gray-700">Building scalable web applications</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl">Tailwind CSS</h3>
            <p className="text-gray-700">Utility-first CSS framework</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl">Git & GitHub</h3>
            <p className="text-gray-700">Version control and collaboration</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
