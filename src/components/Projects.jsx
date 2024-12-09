import React from "react";

const Projects = () => {
  return (
    <>
      {/* <!-- Projects Section --> */}
      <section className="bg-gray-100 py-20" id="projects">
        <h2 className="text-3xl font-semibold text-center mb-6">My Projects</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* <!-- Project 1 --> */}
          <div className="bg-white border rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">MERN Stack Todo App</h3>
            <p className="text-gray-700 mb-4">
              A full-stack to-do application built using MongoDB, Express,
              React, and Node.js that allows users to create, edit, and delete
              tasks.
            </p>
            <a href="#" className="text-indigo-600 hover:underline">
              View Project
            </a>
          </div>
          {/* <!-- Project 2 --> */}
          <div className="bg-white border rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Django Blog Platform</h3>
            <p className="text-gray-700 mb-4">
              A blog platform built using Django, where users can create and
              manage blog posts with a rich text editor and image uploads.
            </p>
            <a href="#" className="text-indigo-600 hover:underline">
              View Project
            </a>
          </div>
          {/* <!-- Project 3 --> */}
          <div className="bg-white border rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              E-Commerce Site (MERN)
            </h3>
            <p className="text-gray-700 mb-4">
              An e-commerce platform built with the MERN stack that supports
              user authentication, product listing, cart management, and payment
              integration.
            </p>
            <a href="#" className="text-indigo-600 hover:underline">
              View Project
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
