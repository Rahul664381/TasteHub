// src/pages/Lunch.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Lunch() {
  const lunchCategories = [
    { name: "Starters", link: "/StartersLunch" },
    { name: "Main Course", link: "/MainCourseLunch" },
    { name: "Salads & Soups", link: "/SaladsSoups" },
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-orange-800 mb-8">
        Lunch Menu
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {lunchCategories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300"
          >
            <div className="h-24 w-24 bg-orange-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-semibold text-orange-800">
                {category.name.charAt(0)}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-orange-900 text-center">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
