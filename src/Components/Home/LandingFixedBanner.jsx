import React from "react";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LandingFixedBanner() {
  return (
    <section
      className="relative h-screen w-full bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')", // High-quality rice + food bg
      }}
    >
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        {/* Icon */}
        <FaUtensils className="text-6xl mb-4 text-yellow-400 animate-bounce" />

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Taste the Best <span className="text-orange-400">Rice & Foods</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl max-w-3xl mb-8 leading-relaxed">
          Fresh, healthy & delicious meals delivered straight to your home. From{" "}
          <span className="text-yellow-400 font-semibold">Rice</span> to
          <span className="text-orange-400 font-semibold"> Indian Thalis</span>,
          <span className="text-green-400 font-semibold"> Snacks</span> &
          <span className="text-red-400 font-semibold"> Sweets</span> – we’ve
          got it all 🍽️
        </p>

        {/* Button */}
        <Link to="FoodRestaurant">
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 transition text-white rounded-full shadow-lg text-lg font-semibold animate-pulse">
            🍛 Order Now
          </button>
        </Link>
      </div>
    </section>
  );
}
