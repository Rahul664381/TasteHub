// src/pages/Testimonials.jsx
import React from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "Rahul", feedback: "Amazing food and cozy ambiance!" },
    { name: "Sneha", feedback: "Best place for weekend brunch with family." },
    { name: "Amit", feedback: "Highly recommend the desserts here." },
    { name: "Pooja", feedback: "Friendly staff and excellent service." },
  ];

  return (
    <div className="min-h-screen bg-green-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        Testimonials
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <p className="text-green-700 mb-2">"{t.feedback}"</p>
            <h3 className="text-green-900 font-semibold text-right">
              - {t.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
