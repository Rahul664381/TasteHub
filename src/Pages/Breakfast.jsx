// src/pages/Breakfast.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Breakfast() {
  const breakfastCategories = [
    { name: "Continental Breakfast", link: "/ContinentalBreakfast" },
    { name: "Indian Breakfast", link: "/IndianBreakfast" },
    { name: "Healthy Breakfast", link: "/HealthyBreakfast" },
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-amber-800 mb-8">
        Breakfast Menu
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {breakfastCategories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300"
          >
            <div className="h-24 w-24 bg-amber-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-semibold text-amber-800">
                {category.name.charAt(0)}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-amber-900 text-center">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
