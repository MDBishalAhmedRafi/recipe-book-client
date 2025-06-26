import React from 'react';

const ContactUs = () => {
                return (
                                 <div className="min-h-screen bg-gradient-to-r from-yellow-200 via-orange to-red-100 lg:w-11/12 lg:mx-auto mx-2 rounded-2xl lg:mb-10 md:mb-7 mb-5 py-12 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-orange-600">Contact Us</h2>
        <p className="text-gray-700 mt-2">
          Got a question, suggestion, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <form className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-2xl space-y-6">
        <input type="text" placeholder="Your Name" className="w-full border-b-2 p-3 focus:outline-none focus:border-orange-400" />
        <input type="email" placeholder="Your Email" className="w-full border-b-2 p-3 focus:outline-none focus:border-orange-400" />
        <textarea placeholder="Your Message" rows={5} className="w-full border-b-2 p-3 focus:outline-none focus:border-orange-400"></textarea>
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl">
          Send Message
        </button>
      </form>
    </div>
                );
};

export default ContactUs;