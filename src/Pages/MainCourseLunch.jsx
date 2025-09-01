// src/pages/MainCourseLunch.jsx
import React from "react";

export default function MainCourseLunch() {
  const mainCourseItems = [
    {
      name: "Butter Chicken",
      description: "Creamy and spicy chicken curry served with naan or rice.",
      image:
        "https://www.rachelphipps.com/wp-content/uploads/2024/09/Indian-Chicken-Makhani-1024x683.jpg",
    },
    {
      name: "Paneer Butter Masala",
      description: "Soft paneer cubes in rich tomato and butter gravy.",
      image: "https://orders.popskitchen.in/storage/2024/09/image-53.png",
    },
    {
      name: "Veg Biryani",
      description: "Aromatic basmati rice cooked with vegetables and spices.",
      image: "https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg",
    },
    {
      name: "Grilled Fish",
      description: "Perfectly grilled fish fillet with herbs and lemon.",
      image:
        "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics/spicy_grilled_fish_in_foil.jpg",
    },
    {
      name: "Chole Bhature",
      description: "Spicy chickpea curry served with fluffy fried bread.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQFP_VHvQOQHXg/article-cover_image-shrink_720_1280/B4DZWxwTQ6HIAI-/0/1742443987904?e=2147483647&v=beta&t=v_eYJKIbBfn-2QObRrFHOeGU2mCnT8ItWvsc1Uz4h7U",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-orange-800 mb-8">
        Main Course
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
