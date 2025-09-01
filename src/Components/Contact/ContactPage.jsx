import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactPage = () => {
  // 🔹 Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Reset form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    alert("✅ Your message has been sent successfully!");
  };

  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <div
        className="bg-cover bg-center h-[70vh] md:h-[90vh] relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center px-4">
          <p className="text-lg md:text-2xl text-yellow-400 font-semibold tracking-wide mb-2">
            Welcome to Spice Delight
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-400 drop-shadow-lg">
            Delicious Food Awaits You
          </h1>

          <p className="mt-4 text-gray-200 text-base md:text-lg max-w-2xl">
            Taste the authentic flavors of India, made with love & served fresh
            at your table. Contact us today for reservations or catering.
          </p>
        </div>
      </div>

      {/* 🔹 Contact Info Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Address */}
        <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition">
          <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Address</h3>
          <p className="text-gray-600">
            123 Food Restaurant Nalasopara mumbai, maharashtra, India
          </p>
        </div>
        {/* Phone */}
        <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition">
          <FaPhoneAlt className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">+91 7651820239</p>
        </div>
        {/* Email */}
        <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition">
          <FaEnvelope className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">rm4888752@gmail.com</p>
        </div>
        {/* Hours */}
        <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition">
          <FaClock className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
          <p className="text-gray-600">Mon - Sun: 05 AM - 11 PM</p>
        </div>
      </div>

      {/* 🔹 Contact Form Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 px-6 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Image */}
        <div className="hidden md:block">
          <img
            src="https://cdn.prod.website-files.com/5fb894860e4980731e5af152/688005b72f6c2bd5c5a39b1c_2025_Push_How%20Gen%20Z%20Food%20Preferences%20Are%20Reshaping%20the%20Restaurant%20Industry_Cover.webp"
            alt="Contact Restaurant"
            className="rounded-xl shadow-lg w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* 🔹 Google Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="restaurant-location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.604407305469!2d72.8125933!3d19.4205726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7abe6891e6e0d%3A0x114832cd830e050f!2sI%20Tech%20Computer%20Education!5e0!3m2!1sen!2sin!4v1692600000000!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
