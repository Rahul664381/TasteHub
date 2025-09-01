import React, { useState } from "react";

export default function MiniCart() {
  const [isOpen, setIsOpen] = useState(false);

  // Sample cart items
  const cartItems = [
    { id: 1, name: "Paneer Tikka", price: 250, qty: 2 },
    { id: 2, name: "Masala Dosa", price: 120, qty: 1 },
    { id: 3, name: "Cold Coffee", price: 80, qty: 3 },
  ];

  // Total price calculate
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <>
      {/* Cart Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
      >
        🛒
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartItems.length}
        </span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}

      {/* Mini Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-red-600 text-xl"
          >
            ✖
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-3 overflow-y-auto h-[60%]">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.qty} × ₹{item.price}
                  </p>
                </div>
                <p className="font-bold">₹{item.price * item.qty}</p>
              </div>
            ))
          )}
        </div>

        {/* Total & Checkout */}
        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
