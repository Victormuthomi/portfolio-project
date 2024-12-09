import React from "react";

const Hero = () => {
  return (
    <>
      <section
        className="bg-indigo-600 text-white text-center py-20"
        id="hero"
      >
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Victor Muthomi</h1>
        <p className="text-lg mb-6">
          A Full-Stack Developer specializing in MERN stack and Python/Django
        </p>
        <a
          href="#contact"
          className="bg-white text-indigo-600 py-2 px-6 rounded-lg hover:bg-indigo-100"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
};

export default Hero;
