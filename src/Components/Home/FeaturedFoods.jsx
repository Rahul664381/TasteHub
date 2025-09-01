import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaShoppingCart,
  FaTimes,
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaHeart,
  FaFire,
} from "react-icons/fa";

const foods = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 8,
    originalPrice: 12,
    discount: 33,
    description:
      "Classic Margherita pizza with fresh mozzarella, tomato sauce, and basil leaves.",
    image:
      "https://static.vecteezy.com/system/resources/previews/026/996/367/large_2x/delicious-3d-pizza-with-vegetables-isolated-on-black-background-free-photo.jpg",
    rating: 4.8,
    reviews: 124,
    spicy: false,
    featured: true,
  },
  {
    id: 2,
    name: "Veg Burger",
    price: 5,
    originalPrice: 7,
    discount: 28,
    description:
      "Juicy vegetable burger with fresh lettuce, tomato, and cheese.",
    image:
      "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg",
    rating: 4.5,
    reviews: 89,
    spicy: false,
    featured: false,
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    price: 9,
    originalPrice: 13,
    discount: 31,
    description: "Creamy Alfredo pasta with parmesan cheese and fresh herbs.",
    image:
      "https://static.wixstatic.com/media/ae93c3_29ebc44a5e984ee79a94b920d64a1687~mv2.jpg",
    rating: 4.9,
    reviews: 156,
    spicy: true,
    featured: false,
  },
  {
    id: 4,
    name: "Chocolate Cake",
    price: 6,
    originalPrice: 9,
    discount: 33,
    description: "Delicious chocolate cake with creamy chocolate frosting.",
    image:
      "https://i.pinimg.com/736x/02/df/58/02df58565e501ba08402c199f6296eb3.jpg",
    rating: 4.7,
    reviews: 203,
    spicy: false,
    featured: true,
  },
];

export default function FeaturedFoods() {
  const [cartItem, setCartItem] = useState(null);
  const [qty, setQty] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCart = (food) => {
    setCartItem(food);
    setQty(1);
    setShowCheckout(true);
    setOrderSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      payment: "Cash on Delivery",
    });
  };

  const handleQtyChange = (change) => {
    setQty((prev) => Math.max(1, prev + change));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCompletePayment = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
  };

  const closeCheckout = () => {
    setShowCheckout(false);
    setCartItem(null);
  };

  const closeSuccess = () => {
    setOrderSuccess(false);
    setCartItem(null);
  };

  const totalPrice = cartItem ? cartItem.price * qty : 0;
  const totalDiscount = cartItem
    ? (cartItem.originalPrice - cartItem.price) * qty
    : 0;
  const originalTotal = cartItem ? cartItem.originalPrice * qty : 0;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-8 md:w-12 h-0.5 bg-red-600 mr-3 md:mr-4"></div>
            <span className="text-red-600 font-semibold tracking-wider text-sm md:text-base">
              POPULAR DISHES
            </span>
            <div className="w-8 md:w-12 h-0.5 bg-red-600 ml-3 md:ml-4"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our{" "}
            <span className="text-red-600 relative">
              Signature
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></span>
            </span>{" "}
            Dishes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Discover our most loved dishes crafted with premium ingredients and
            passion for authentic flavors.
          </p>
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {foods.map((food) => (
            <div
              key={food.id}
              className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                  Save {food.discount}%
                </span>

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(food.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-all duration-300 ${
                    likedItems[food.id]
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-400 hover:bg-red-50 hover:text-red-500"
                  }`}
                >
                  <FaHeart className="w-3 h-3 md:w-4 md:h-4" />
                </button>

                {/* Featured Badge */}
                {food.featured && (
                  <span className="absolute bottom-3 left-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <FaFire className="mr-1 w-3 h-3" /> Featured
                  </span>
                )}

                {/* Spicy Indicator */}
                {food.spicy && (
                  <span className="absolute bottom-3 right-3 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                    🌶️ Spicy
                  </span>
                )}
              </div>

              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {food.name}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 flex-1">
                  {food.description}
                </p>

                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2">
                    <p className="text-xl md:text-2xl font-bold text-red-600">
                      ${food.price}
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm line-through">
                      ${food.originalPrice}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-3 h-3 md:w-4 md:h-4 ${
                            i < Math.floor(food.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">
                      ({food.reviews})
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(food)}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl font-semibold hover:from-red-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <FaShoppingCart className="w-3 h-3 md:w-4 md:h-4" /> Add to
                  Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 md:mt-12">
          <Link to="FoodRestaurant">
            <button className="bg-white text-red-600 border-2 border-red-600 px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              View All Menu
            </button>
          </Link>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && cartItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Complete Your Order
              </h2>
              <button
                onClick={closeCheckout}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-1 md:p-2"
              >
                <FaTimes className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column - Product Info */}
              <div>
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-base md:text-lg">
                      {cartItem.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {cartItem.description}
                    </p>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-4 md:mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-2 md:gap-3">
                    <button
                      onClick={() => handleQtyChange(-1)}
                      className="p-1 md:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    >
                      <FaMinus className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                    <span className="text-base md:text-lg font-semibold w-6 md:w-8 text-center">
                      {qty}
                    </span>
                    <button
                      onClick={() => handleQtyChange(1)}
                      className="p-1 md:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    >
                      <FaPlus className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                  <h4 className="font-semibold text-sm md:text-base mb-2 md:mb-3">
                    Order Summary
                  </h4>
                  <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                    <div className="flex justify-between">
                      <span>Original Price ({qty} items)</span>
                      <span>${originalTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-${totalDiscount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-red-600 font-semibold">
                      <span>You Save</span>
                      <span>${totalDiscount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-base md:text-lg pt-2 border-t">
                      <span>Total Amount</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Customer Info */}
              <div>
                <form
                  onSubmit={handleCompletePayment}
                  className="space-y-3 md:space-y-4"
                >
                  <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4">
                    Customer Information
                  </h4>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                      Delivery Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="2"
                      className="w-full p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your complete address"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2 md:mb-3">
                      Payment Method *
                    </label>
                    <div className="space-y-1 md:space-y-2">
                      <label className="flex items-center gap-2 p-2 md:p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="Cash on Delivery"
                          checked={formData.payment === "Cash on Delivery"}
                          onChange={handleInputChange}
                          className="text-red-600 focus:ring-red-500 w-3 h-3 md:w-4 md:h-4"
                        />
                        <span className="text-xs md:text-sm">
                          Cash on Delivery
                        </span>
                      </label>
                      <label className="flex items-center gap-2 p-2 md:p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="Online Payment"
                          checked={formData.payment === "Online Payment"}
                          onChange={handleInputChange}
                          className="text-red-600 focus:ring-red-500 w-3 h-3 md:w-4 md:h-4"
                        />
                        <span className="text-xs md:text-sm">
                          Online Payment
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 mt-2 md:mt-4 text-sm md:text-base"
                  >
                    Complete Payment - ${totalPrice.toFixed(2)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {orderSuccess && cartItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-2xl text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <FaCheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Order Successful!
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Your order has been placed successfully and will be delivered
              soon.
            </p>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {/* Order Details */}
              <div className="bg-gray-50 rounded-lg p-3 md:p-4 text-left">
                <h4 className="font-semibold text-sm md:text-base mb-2 md:mb-3">
                  Order Details
                </h4>
                <div className="space-y-1 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span>Product:</span>
                    <span className="font-semibold">{cartItem.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span>{qty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Unit Price:</span>
                    <span>${cartItem.price}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount:</span>
                    <span>
                      -${(cartItem.originalPrice - cartItem.price).toFixed(2)}{" "}
                      per item
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total Paid:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Customer Details */}
              <div className="bg-gray-50 rounded-lg p-3 md:p-4 text-left">
                <h4 className="font-semibold text-sm md:text-base mb-2 md:mb-3">
                  Customer Information
                </h4>
                <div className="space-y-1 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span>Name:</span>
                    <span className="font-semibold">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone:</span>
                    <span>{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Address:</span>
                    <span className="text-right">{formData.address}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span>Payment Method:</span>
                    <span className="capitalize font-semibold">
                      {formData.payment}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
              <button
                onClick={closeSuccess}
                className="bg-red-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold text-xs md:text-sm"
              >
                Close
              </button>
              <button
                onClick={() => {
                  closeSuccess();
                  setShowCheckout(false);
                }}
                className="bg-gray-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold text-xs md:text-sm"
              >
                Order Again
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
