// src/pages/MainCourseDinner.jsx
import React from "react";

export default function MainCourseDinner() {
  const mainCourseItems = [
    {
      name: "Herb Roasted Chicken",
      description:
        "Juicy roasted hen seasoned with herbs, garlic, and lemon, served with roasted vegetables.",
      image:
        "https://media.istockphoto.com/id/1268693109/photo/roast-chicken.jpg?s=612x612&w=0&k=20&c=zGEkwHXuQD2kRX_ZniFaVKKNYId1_cet9Qb3S4OGusg=",
    },

    {
      name: "Vegetable Lasagna",
      description:
        "Layers of pasta, cheese, and vegetables baked to perfection.",
      image:
        "https://img.freepik.com/free-photo/fresh-homemade-lasagna-leafs-plate-generative-ai_188544-8132.jpg",
    },
    {
      name: "Chicken Alfredo Pasta",
      description: "Creamy pasta with grilled chicken and parmesan cheese.",
      image: "https://i.ytimg.com/vi/0HUqjrwJjUw/maxresdefault.jpg",
    },
    {
      name: "Paneer Lababdar",
      description: "Paneer cooked in rich tomato and cashew gravy.",
      image:
        "https://www.awesomecuisine.com/wp-content/uploads/2022/07/Paneer-Lababdar-500x375.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-purple-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
        Dinner Main Course
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {mainCourseItems.map((item, index) => (
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
              <h2 className="text-2xl font-semibold text-purple-900 mb-2">
                {item.name}
              </h2>
              <p className="text-purple-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
