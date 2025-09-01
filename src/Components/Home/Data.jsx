import React from "react";
import { FoodList } from "../../Data/Data";

const Data = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-8 w-full bg-gray-50">
      {FoodList.FoodItem.map((item) => (
        <div
          key={item.id}
          className="bg-white w-80 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
        >
          {/* Image */}
          <div className="w-full h-56 overflow-hidden rounded-t-xl">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-500 text-sm">{item.description}</p>

            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-bold text-amber-600">
                ₹{item.price}
              </span>
              <span className="text-sm text-green-500 bg-green-100 px-2 py-1 rounded-md">
                {item.discount} OFF
              </span>
            </div>

            {/* Button */}
            <button className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded-lg transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
