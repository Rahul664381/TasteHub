// src/pages/ContinentalBreakfast.jsx
import React from "react";

export default function ContinentalBreakfast() {
  const continentalItems = [
    {
      name: "Croissant",
      description: "Buttery and flaky French pastry, perfect with coffee.",
      image:
        "https://cdn.shopify.com/s/files/1/0382/1836/7107/t/3/assets/smcroissant_header2-1684179108915.jpg?v=1684179111",
    },
    {
      name: "Pancakes",
      description: "Soft and fluffy pancakes with maple syrup.",
      image:
        "https://www.pillsbury.in/wp-content/uploads/2021/09/Chocolate-Pancake.jpg",
    },
    {
      name: "Omelette",
      description: "Classic European-style omelette with cheese and herbs.",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPC8j8OV_C9_uCp5RT9O3ax2ztWomxfjUvzx5G10jEnEm_k8nNx1nSyvKrdB0tMSSz8K3T-dPKSUPyCQa-YfGv8OlvhOrpi4Rq136HRwykS17P2bNpprLzIM11kGLrTZVF-ZNiPQiGq3Kx6EW1Y_IsbWJTJKo0aOZABkXrBbUcy_YYwZ6jyoXtW7RsWAc/s16000-rw/potato-and-chorizo-omelette.jpg",
    },
    {
      name: "French Toast",
      description: "Golden toast dipped in egg batter and fried to perfection.",
      image:
        "https://foxeslovelemons.com/wp-content/uploads/2023/04/Ice-Cream-French-Toast-6.jpg",
    },
    {
      name: "Bagel with Cream Cheese",
      description: "Soft bagel served with rich and creamy cheese.",
      image:
        "https://www.thespruceeats.com/thmb/HXwXqqJfNtzXR5baD7OxrBWfznE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/open-face-smoked-salmon-bagel-101094-step-02-8810271194f44dbf9c7aec9cf3229dc9.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-amber-800 mb-8">
        Continental Breakfast
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {continentalItems.map((item, index) => (
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
              <h2 className="text-2xl font-semibold text-amber-900 mb-2">
                {item.name}
              </h2>
              <p className="text-amber-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
