import React, { useState } from "react";

const Contact = ({ id }) => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Your message has been sent successfully!");
  };

  return (
    <div id={id}  className="p-8 bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <h2 className="text-4xl font-bold text-blue-600 text-center">Contact Me</h2>
      <div className="mt-2 h-1 w-24 mx-auto bg-blue-500 rounded-full"></div>

      {successMessage && (
        <p className="text-center text-green-600 mt-4">{successMessage}</p>
      )}

      <form
        className="mt-8 max-w-md mx-auto space-y-4"
        action="https://formspree.io/f/your-form-id" // Replace with your Formspree URL
        method="POST"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
