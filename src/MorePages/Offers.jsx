// src/pages/Offers.jsx
import React from "react";

export default function Offers() {
  const offers = [
    {
      title: "Weekend Special",
      description: "Get 20% off on all meals this weekend.",
    },
    {
      title: "Happy Hours",
      description: "Buy 1 Get 1 Free on select beverages.",
    },
    {
      title: "Family Combo",
      description: "Special discounts for family meals.",
    },
    { title: "Dessert Delight", description: "Free dessert with main course." },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-8">
        Offers
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-yellow-900 mb-2">
              {offer.title}
            </h2>
            <p className="text-yellow-700">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
