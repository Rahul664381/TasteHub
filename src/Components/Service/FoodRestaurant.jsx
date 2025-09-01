import React, { useState } from "react";
import { FaStar, FaUtensils } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const FoodRestaurant = () => {
  // Categories state
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "Online",
    paymentType: "Credit Card",
  });

  // Food categories
  const categories = [
    { id: "all", name: "All Items" },
    { id: "italian", name: "Italian" },
    { id: "american", name: "American" },
    { id: "japanese", name: "Japanese" },
    { id: "mexican", name: "Mexican" },
    { id: "healthy", name: "Healthy" },
    { id: "dessert", name: "Desserts" },
  ];

  // Food products data
  const foodProducts = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 12.99,
      originalPrice: 15.99,
      category: "italian",
      image:
        "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Cheeseburger",
      price: 8.99,
      originalPrice: 10.99,
      category: "american",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Sushi Platter",
      price: 18.99,
      originalPrice: 22.99,
      category: "japanese",
      image:
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      price: 14.99,
      originalPrice: 17.99,
      category: "italian",
      image:
        "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.4,
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: 9.99,
      originalPrice: 12.99,
      category: "healthy",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.2,
    },
    {
      id: 6,
      name: "Chocolate Sundae",
      price: 5.99,
      originalPrice: 7.99,
      category: "dessert",
      image:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
    },
    {
      id: 7,
      name: "Grilled Steak",
      price: 24.99,
      originalPrice: 29.99,
      category: "american",
      image:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Beef Tacos",
      price: 10.99,
      originalPrice: 12.99,
      category: "mexican",
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.5,
    },
    {
      id: 9,
      name: "Fried Chicken Basket",
      price: 11.99,
      originalPrice: 14.99,
      category: "american",
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
    },
    {
      id: 10,
      name: "Sushi Combo",
      price: 22.99,
      originalPrice: 26.99,
      category: "japanese",
      image:
        "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
    },
  ];

  // Filter products based on active category and search query
  const filteredProducts = foodProducts.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Apply price filter
  const priceFilteredProducts = filteredProducts.filter((product) => {
    if (priceFilter === "low") return product.price < 10;
    if (priceFilter === "medium")
      return product.price >= 10 && product.price < 20;
    if (priceFilter === "high") return product.price >= 20;
    return true;
  });

  // Handle quantity change
  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle payment submission
  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessingPayment(true);

    setTimeout(() => {
      setIsProcessingPayment(false);
      setShowPaymentSuccess(true);

      // Auto close after 30 seconds
      setTimeout(() => {
        setSelectedProduct(null);
        setShowPaymentSuccess(false);
      }, 30000);
    }, 3000);
  };

  // Calculate total price and discount
  const totalPrice = selectedProduct
    ? (selectedProduct.price * quantity).toFixed(2)
    : 0;
  const totalDiscount = selectedProduct
    ? (
        (selectedProduct.originalPrice - selectedProduct.price) *
        quantity
      ).toFixed(2)
    : 0;

  return (
    <div className="container mx-auto py-5 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <FaUtensils className="text-blue-600" /> Food Express
        </h1>
        <p className="text-gray-600 mt-2">
          Delicious food delivered to your door
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap mb-4">
        <div className="w-full">
          <div className="flex flex-wrap md:flex-nowrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`flex-1 py-2 px-4 rounded-md ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Price Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoMdSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search food items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <select
            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Under $10</option>
            <option value="medium">$10 - $20</option>
            <option value="high">$20+</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-gray-600">
        Showing {priceFilteredProducts.length} of {foodProducts.length} items
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {priceFilteredProducts.length > 0 ? (
          priceFilteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              <img
                src={product.image}
                className="w-full h-48 object-cover"
                alt={product.name}
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">{product.name}</h5>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-green-600 font-bold">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="line-through text-gray-500 ml-2 text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : i < product.rating
                            ? "text-yellow-400 opacity-50"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </span>
                </div>
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
                  onClick={() => {
                    setSelectedProduct(product);
                    setQuantity(1);
                    setShowPaymentSuccess(false);
                  }}
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 text-lg">
              No items found matching your criteria.
            </p>
            <button
              className="mt-4 text-blue-600 hover:text-blue-800"
              onClick={() => {
                setActiveCategory("all");
                setPriceFilter("all");
                setSearchQuery("");
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {selectedProduct.name}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() => {
                      setSelectedProduct(null);
                      setShowPaymentSuccess(false);
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-4">
                  {!showPaymentSuccess ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-64 md:h-80 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold mb-3">
                            Order Summary
                          </h5>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="grid grid-cols-2 gap-2 mb-2">
                              <span className="text-gray-600">Item:</span>
                              <span>{selectedProduct.name}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-2">
                              <span className="text-gray-600">Price:</span>
                              <span>${selectedProduct.price}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-2">
                              <span className="text-gray-600">
                                Original Price:
                              </span>
                              <span>${selectedProduct.originalPrice}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <span className="text-gray-600">Discount:</span>
                              <span className="text-green-600">
                                -$
                                {(
                                  selectedProduct.originalPrice -
                                  selectedProduct.price
                                ).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Quantity
                          </label>
                          <div className="flex items-center">
                            <button
                              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-l-md"
                              type="button"
                              onClick={() => handleQuantityChange("decrease")}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              className="w-12 text-center border-t border-b border-gray-300 py-1"
                              value={quantity}
                              readOnly
                            />
                            <button
                              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-r-md"
                              type="button"
                              onClick={() => handleQuantityChange("increase")}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="text-xl font-semibold">
                            Total Price: ${totalPrice}
                          </h5>
                          <p className="text-green-600 text-sm">
                            You save: ${totalDiscount}
                          </p>
                        </div>

                        <form onSubmit={handlePayment}>
                          <div className="mb-4">
                            <label
                              htmlFor="fullName"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Delivery Address
                            </label>
                            <textarea
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                            ></textarea>
                          </div>
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Payment Method
                            </label>
                            <select
                              className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              name="paymentMethod"
                              value={formData.paymentMethod}
                              onChange={handleInputChange}
                            >
                              <option value="Online">Online</option>
                              <option value="Cash on Delivery">
                                Cash on Delivery
                              </option>
                            </select>
                            {formData.paymentMethod === "Online" && (
                              <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                name="paymentType"
                                value={formData.paymentType}
                                onChange={handleInputChange}
                              >
                                <option value="Credit Card">Credit Card</option>
                                <option value="Google Pay">Google Pay</option>
                                <option value="PhonePe">PhonePe</option>
                                <option value="Paytm">Paytm</option>
                              </select>
                            )}
                          </div>
                          <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200 flex justify-center items-center"
                            disabled={isProcessingPayment}
                          >
                            {isProcessingPayment ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Processing Order...
                              </>
                            ) : (
                              "Place Order"
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <div className="mb-6">
                        <div className="text-green-500 text-6xl">✓</div>
                      </div>
                      <h3 className="text-green-600 text-2xl font-semibold mb-4">
                        Order Confirmed!
                      </h3>
                      <p className="mb-6 text-gray-600">
                        Thank you for your order. Your food will be delivered
                        soon.
                      </p>
                      <div className="border border-gray-200 p-4 rounded-lg text-left">
                        <h5 className="font-semibold mb-3">Order Details</h5>
                        <div className="grid grid-cols-2 gap-2 mb-1">
                          <span className="text-gray-600">Item:</span>
                          <span>{selectedProduct.name}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-1">
                          <span className="text-gray-600">Quantity:</span>
                          <span>{quantity}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-1">
                          <span className="text-gray-600">Total Price:</span>
                          <span>${totalPrice}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-1">
                          <span className="text-gray-600">Total Discount:</span>
                          <span>${totalDiscount}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-1">
                          <span className="text-gray-600">Payment Method:</span>
                          <span>{formData.paymentMethod}</span>
                        </div>
                        {formData.paymentMethod === "Online" && (
                          <div className="grid grid-cols-2 gap-2 mb-1">
                            <span className="text-gray-600">Payment Type:</span>
                            <span>{formData.paymentType}</span>
                          </div>
                        )}
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-gray-600">Delivery to:</span>
                          <span>
                            {formData.fullName}, {formData.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {showPaymentSuccess && (
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setSelectedProduct(null);
                      setShowPaymentSuccess(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodRestaurant;
