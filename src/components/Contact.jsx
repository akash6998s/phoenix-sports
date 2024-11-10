// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <p className="text-lg mb-6">
        If you have any questions or would like to make a booking, please fill out the form below, and we'll get back to you as soon as possible.
      </p>

      <form className="space-y-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg">Name:</label>
          <input type="text" id="name" className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg">Email:</label>
          <input type="email" id="email" className="w-full p-2 mt-2 border border-gray-300 rounded-lg" />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg">Message:</label>
          <textarea id="message" className="w-full p-2 mt-2 border border-gray-300 rounded-lg"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
