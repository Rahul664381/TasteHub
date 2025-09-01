import React from "react";

export default function StartersLunch() {
  const startersItems = [
    {
      name: "Spring Rolls",
      description:
        "Crispy rolls stuffed with vegetables and served with sauce.",
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/10/9/4/FNK_Shrimp-Spring-Rolls_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1444481737531.webp",
    },
    {
      name: "Paneer Tikka",
      description: "Grilled paneer cubes marinated in Indian spices.",
      image:
        "https://flavorquotient.com/wp-content/uploads/2022/09/Paneer-Tikka-FQ-2-1432.jpg",
    },
    {
      name: "Chicken Wings",
      description: "Spicy and crispy chicken wings, perfect starter for lunch.",
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/2/19/1/FN_Air-Fryer-Chicken-Wings-H_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1550611553388.webp",
    },
    {
      name: "Garlic Bread",
      description: "Toasted bread with garlic butter, ideal with soups.",
      image:
        "https://i.ytimg.com/vi/Tei_CUznx44/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAWPn_M8Cu29qq9ydtQfl8dPs9coQ",
    },
    {
      name: "Hummus with Veggies",
      description: "Healthy chickpea dip served with fresh vegetable sticks.",
      image:
        "https://www.healthygffamily.com/wp-content/uploads/2017/09/IMG_3702.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-orange-800 mb-8">
        Lunch Starters
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
              <h2 className="text-2xl font-semibold text-orange-900 mb-2">
                {item.name}
              </h2>
              <p className="text-orange-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
