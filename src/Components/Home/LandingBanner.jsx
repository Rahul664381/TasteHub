import React from "react";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LandingBanner() {
  return (
    <section
      className="relative h-screen w-full bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')", // Delicious food image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
        {/* Icon */}
        <FaUtensils className="text-6xl mb-4 text-yellow-400 animate-bounce" />

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-orange-400">Foodies Heaven</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Enjoy delicious meals delivered fresh to your doorstep. Explore our
          menu of pizzas, burgers, desserts, and more.
        </p>

        {/* Button */}
        <Link to="FoodRestaurant">
          <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 transition text-white rounded-full shadow-lg">
            Order Now
          </button>
        </Link>
      </div>
    </section>
  );
}
