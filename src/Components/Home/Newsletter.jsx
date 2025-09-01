import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 py-16 mt-10">
      <div className="container mx-auto px-4 md:px-12 text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Get Fresh <span className="text-green-300">Food Updates</span>
        </h2>
        <p className="text-white/90 mb-6 text-sm md:text-base">
          Subscribe to our newsletter for delicious recipes, exclusive
          discounts, and the latest restaurant offers.
        </p>

        {/* Newsletter Form */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button className="bg-green-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-green-500 transition duration-300 shadow-md hover:shadow-lg">
            Subscribe
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#"
            className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-red-500 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-blue-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Extra Note */}
        <p className="text-white/80 text-xs mt-3">
          We care about your taste! No spam ever.
        </p>
      </div>
    </section>
  );
}
