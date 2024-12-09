import React from "react";

const Contact = () => {
  return (
    <>
      {/* <!-- Contact Section --> */}
      <section className="bg-gray-800 text-white py-20" id="contact">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>
        <form
          action="#"
          method="POST"
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border rounded-lg mb-4"
            required
          />

          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border rounded-lg mb-4"
            required
          />

          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-3 border rounded-lg mb-4"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
