import React, { useState } from "react";

export default function OrderNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    foodItem: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order Placed!\nName: ${formData.name}\nEmail: ${formData.email}\nFood: ${formData.foodItem}\nQuantity: ${formData.quantity}`
    );
    setFormData({ name: "", email: "", foodItem: "", quantity: 1 });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          Place Your Order
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <input
            type="text"
            name="foodItem"
            placeholder="Food Item"
            value={formData.foodItem}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <input
            type="number"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
