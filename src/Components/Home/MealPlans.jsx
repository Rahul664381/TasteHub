import React, { useState, useEffect } from "react";

export default function MealPlans() {
  const [isWeekly, setIsWeekly] = useState(false);
  const [displayPrices, setDisplayPrices] = useState([5, 12, 20]);

  const plans = [
    {
      name: "Breakfast Combo",
      daily: 5,
      weekly: 30,
      features: ["2 Pancakes", "1 Coffee", "Fresh Juice"],
    },
    {
      name: "Lunch Special",
      daily: 12,
      weekly: 70,
      features: ["Main Course", "Salad", "Dessert", "Soft Drink"],
    },
    {
      name: "Dinner Feast",
      daily: 20,
      weekly: 120,
      features: [
        "Appetizer",
        "Main Course",
        "Dessert",
        "Beverage",
        "Special Surprise",
      ],
    },
  ];

  // Price animation
  useEffect(() => {
    const targetPrices = plans.map((plan) =>
      isWeekly ? plan.weekly : plan.daily
    );

    const interval = setInterval(() => {
      setDisplayPrices((prevPrices) =>
        prevPrices.map((price, i) => {
          if (price < targetPrices[i]) return price + 1;
          if (price > targetPrices[i]) return price - 1;
          return price;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, [isWeekly]);

  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`card-${index}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 20).toFixed(2);
    const rotateY = ((centerX - x) / 20).toFixed(2);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (index) => {
    const card = document.getElementById(`card-${index}`);
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 text-white relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Delicious Meal Plans</h2>
        <p className="text-gray-400 mb-8">
          Choose your perfect meal plan and enjoy fresh, tasty food every day!
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span
            className={!isWeekly ? "text-white font-semibold" : "text-gray-400"}
          >
            Daily
          </span>
          <div
            onClick={() => setIsWeekly(!isWeekly)}
            className="w-20 h-8 bg-gray-700 rounded-full p-1 flex items-center cursor-pointer"
          >
            <div
              className={`w-8 h-6 bg-purple-500 rounded-full transition-transform duration-300 ${
                isWeekly ? "translate-x-12" : ""
              }`}
            ></div>
          </div>
          <span
            className={isWeekly ? "text-white font-semibold" : "text-gray-400"}
          >
            Weekly
          </span>
        </div>

        {/* Meal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              id={`card-${index}`}
              key={index}
              className={`p-8 rounded-2xl shadow-lg transition-transform duration-300 relative overflow-hidden group hover:shadow-glow ${
                plan.name === "Lunch Special"
                  ? "text-gray-900 border-4 border-purple-500"
                  : "bg-gray-800 border-2 border-transparent"
              }`}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {plan.name === "Lunch Special" && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 animate-gradient-x z-0 rounded-2xl"></div>
                  <div className="absolute top-4 right-[-30px] bg-yellow-400 text-black text-sm font-bold py-1 px-12 transform rotate-45 z-20 shadow-lg">
                    CHEF'S PICK
                  </div>
                </>
              )}

              {plan.name !== "Lunch Special" && (
                <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse-glow"></div>
              )}

              <div
                className={`${
                  plan.name === "Lunch Special"
                    ? "relative z-10 bg-white p-6 rounded-xl"
                    : "relative z-10"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p
                  className={`text-4xl font-bold mb-2 ${
                    plan.name === "Lunch Special" ? "text-purple-600" : ""
                  }`}
                >
                  ${displayPrices[index]}
                </p>
                <p className="text-gray-400 mb-6">
                  Billed {isWeekly ? "Weekly" : "Daily"}
                </p>
                <button
                  className={`w-full py-2 rounded-lg mb-6 transition relative overflow-hidden ${
                    plan.name === "Lunch Special"
                      ? "text-white animate-gradient-x"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  style={
                    plan.name === "Lunch Special"
                      ? {
                          backgroundImage:
                            "linear-gradient(90deg, #9333ea, #ec4899, #3b82f6)",
                          backgroundSize: "200% 200%",
                          animation: "gradient-x 6s ease infinite",
                        }
                      : {}
                  }
                >
                  Order Now
                </button>
                <ul className="text-left space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i}>🍽️ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Animation CSS */}
      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease infinite;
          }
          @keyframes pulse-glow {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
          .animate-pulse-glow {
            animation: pulse-glow 2s infinite;
          }
          .hover\\:shadow-glow:hover {
            box-shadow: 0 15px 40px rgba(147, 51, 234, 0.6);
          }
        `}
      </style>
    </section>
  );
}
