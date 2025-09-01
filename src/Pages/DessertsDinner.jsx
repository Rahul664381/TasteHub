// src/pages/DessertsDinner.jsx
import React from "react";

export default function DessertsDinner() {
  const dessertsItems = [
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with gooey molten center.",
      image:
        "https://img.freepik.com/premium-photo/lava-cake-with-glossy-ganache-topping_974629-394110.jpg",
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers.",
      image:
        "https://img.freepik.com/premium-photo/traditional-italian-dessert-tiramisu-glass-light-stone-background_198067-552859.jpg",
    },
    {
      name: "Gulab Jamun",
      description: "Soft milk-based dumplings soaked in sugar syrup.",
      image:
        "https://st3.depositphotos.com/16173130/18764/i/450/depositphotos_187645500-stock-photo-gulab-jamun-pune-india.jpg",
    },
    {
      name: "Fruit Tart",
      description:
        "Crispy tart filled with custard and topped with fresh fruits.",
      image:
        "https://c4.wallpaperflare.com/wallpaper/189/1022/420/dessert-food-mini-fruit-tart-fruit-tart-wallpaper-thumb.jpg",
    },
    {
      name: "Ice Cream Sundae",
      description: "Vanilla ice cream topped with chocolate sauce and nuts.",
      image:
        "https://t3.ftcdn.net/jpg/13/96/21/16/360_F_1396211631_UbZX01EyLKHen8CpQN461q7Yf3QG3j4t.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-purple-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
        Dinner Desserts
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dessertsItems.map((item, index) => (
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
