// src/pages/SaladsSoups.jsx
import React from "react";

export default function SaladsSoups() {
  const saladsSoupsItems = [
    {
      name: "Caesar Salad",
      description: "Crispy romaine lettuce with Caesar dressing and croutons.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Caesar_salad_%282%29.jpg/960px-Caesar_salad_%282%29.jpg",
    },
    {
      name: "Greek Salad",
      description: "Fresh vegetables with feta cheese, olives, and olive oil.",
      image: "https://noseychef.com/wp-content/uploads/2021/02/IMG_8633123.jpg",
    },
    {
      name: "Tomato Soup",
      description: "Smooth and creamy tomato soup, perfect for lunch.",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg",
    },
    {
      name: "Minestrone Soup",
      description: "Classic Italian vegetable soup with pasta and beans.",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2021/11/minestrone-soup-500x500.jpg",
    },
    {
      name: "Fruit Salad",
      description: "Fresh seasonal fruits served chilled, healthy and tasty.",
      image:
        "https://fortheloveofcooking.net/wp-content/uploads/2013/05/DSC_4449.1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-orange-800 mb-8">
        Salads & Soups
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {saladsSoupsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-orange-900 mb-2">
                {item.name}
              </h2>
              <p className="text-orange-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
