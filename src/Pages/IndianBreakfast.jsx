// src/pages/IndianBreakfast.jsx
import React from "react";

export default function IndianBreakfast() {
  const indianItems = [
    {
      name: "Idli & Sambar",
      description: "Soft steamed rice cakes served with spicy lentil soup.",
      image:
        "https://sapanarestaurant.com/wp-content/uploads/2019/11/idli-sambar-900x600.jpg",
    },
    {
      name: "Dosa",
      description:
        "Crispy fermented rice and lentil crepe, served with chutney.",
      image:
        "https://indiaforbeginners.com/wp-content/uploads/2020/04/India-for-Beginners-custom-tours-8.jpg",
    },
    {
      name: "Poha",
      description: "Flattened rice cooked with spices, onions, and peanuts.",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/poha-500x500.jpg",
    },
    {
      name: "Paratha",
      description: "Flaky Indian flatbread, served with butter or curd.",
      image: "https://static.toiimg.com/photo/53109843.cms",
    },
    {
      name: "Upma",
      description:
        "Savory semolina porridge cooked with vegetables and spices.",
      image:
        "https://madhurasrecipe.com/wp-content/uploads/2020/10/Veg-Upma.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-8">
        Indian Breakfast
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {indianItems.map((item, index) => (
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
              <h2 className="text-2xl font-semibold text-yellow-900 mb-2">
                {item.name}
              </h2>
              <p className="text-yellow-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
