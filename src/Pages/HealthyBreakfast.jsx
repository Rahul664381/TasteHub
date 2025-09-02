import React from "react";

export default function HealthyBreakfast() {
  const healthyItems = [
    {
      name: "Oatmeal",
      description: "Warm and nutritious oats with fruits and nuts.",
      image:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Oatmeal-Recipe-5.jpg",
    },
    {
      name: "Smoothie Bowl",
      description: "Fruity smoothie topped with seeds and granola.",
      image:
        "https://www.superhealthykids.com/wp-content/uploads/2019/12/Mango-Smoothie-Bowl-1.jpeg",
    },
    {
      name: "Avocado Toast",
      description: "Whole grain toast topped with smashed avocado and spices.",
      image:
        "https://styleblueprint.com/wp-content/uploads/2025/03/SB-All-Avocado-Toast-Bar-Featured-Image-Kate-Feinberg.jpg",
    },
    {
      name: "Greek Yogurt with Fruits",
      description: "High-protein yogurt served with fresh seasonal fruits.",
      image:
        "https://melissamayo.com/wp-content/uploads/2017/04/GREEK-YOGURT-BOWL_.jpg",
    },

    {
      name: "Chia Pudding",
      description: "Healthy pudding made with chia seeds and almond milk.",
      image:
        "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/fc3a3-breakfast-ideas.jpg?fit=1000%2C667&ssl=1",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        Healthy Breakfast
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {healthyItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-49 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-green-900 mb-2">
                {item.name}
              </h2>
              <p className="text-green-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
