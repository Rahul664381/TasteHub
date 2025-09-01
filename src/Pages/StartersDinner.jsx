// src/pages/StartersDinner.jsx
import React from "react";

export default function StartersDinner() {
  const startersItems = [
    {
      name: "Bruschetta",
      description: "Grilled bread topped with tomatoes, garlic, and olive oil.",
      image:
        "https://sumptuousliving.net/wp-content/uploads/2016/02/IMG_1356-1024x682.jpg",
    },
    {
      name: "Stuffed Mushrooms",
      description:
        "Mushrooms filled with cheese and herbs, baked to perfection.",
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2024/02/21/FPLF317-mary-berg-crab-stuffed-mushrooms_s4x3.jpg.rend.hgtvcom.616.462.suffix/1708533573378.webp",
    },
    {
      name: "Chicken Satay",
      description: "Skewered grilled chicken served with peanut sauce.",
      image:
        "https://media-cdn2.greatbritishchefs.com/media/p5abv3mz/img82070.whqc_768x512q90.jpg",
    },
    {
      name: "Caprese Salad",
      description:
        "Fresh mozzarella, tomatoes, and basil drizzled with balsamic.",
      image:
        "https://theflyingkitchen.com/wp-content/uploads/2023/04/caprese-salad.png",
    },
    {
      name: "Veg Spring Rolls",
      description:
        "Crispy rolls stuffed with vegetables and served with sauce.",
      image:
        "https://i0.wp.com/s.lightorangebean.com/media/20240914144947/Thai-Veggie-Spring-Rolls_done.png?resize=480%2C270&quality=80&ssl=1",
    },
  ];

  return (
    <div className="min-h-screen bg-purple-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
        Dinner Starters
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {startersItems.map((item, index) => (
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
