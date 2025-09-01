import React, { useState } from "react";
import { FaStar, FaUtensils, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const FoodRestaurant = () => {
  // Categories state
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState(new Set());

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
    { id: "all", name: "All Items", icon: "🍽️" },
    { id: "italian", name: "Italian", icon: "🍝" },
    { id: "american", name: "American", icon: "🍔" },
    { id: "japanese", name: "Japanese", icon: "🍣" },
    { id: "mexican", name: "Mexican", icon: "🌮" },
    { id: "healthy", name: "Healthy", icon: "🥗" },
    { id: "dessert", name: "Desserts", icon: "🍰" },
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
      name: "Kale Caesar Salad",
      price: 13.99,
      originalPrice: 16.99,
      category: "american",
      image:
        "https://static01.nyt.com/images/2025/07/21/multimedia/21FD-SALADSREX3-seven-layer-salad-tqzk/21FD-SALADSREX3-seven-layer-salad-tqzk-mediumThreeByTwo440.jpg?quality=75&auto=webp",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Sweet Potato Fries",
      price: 8.49,
      originalPrice: 10.99,
      category: "american",
      image:
        "https://cdn.accentuate.io/393876930717/14976158072989/Sweet-Potato-Fries-v1602185975310.png?1000x714",
      rating: 4.5,
    },
    {
      id: 9,
      name: "Veggie Burger",
      price: 11.99,
      originalPrice: 14.49,
      category: "american",
      image:
        "https://d21klxpge3tttg.cloudfront.net/wp-content/uploads/2013/05/featured-great-american-hamburger.jpg",
      rating: 4.6,
    },
    {
      id: 10,
      name: "Stuffed Bell Peppers",
      price: 12.49,
      originalPrice: 15.49,
      category: "american",
      image: "https://i.ytimg.com/vi/7kgsSdmPA9Q/maxresdefault.jpg",
      rating: 4.7,
    },
    {
      id: 11,
      name: "Spinach & Mushroom Pizza",
      price: 14.99,
      originalPrice: 18.49,
      category: "american",
      image:
        "https://grandecheese.com/wp-content/uploads/2025/02/wild-mushroom-applewood-bacon-pizza.jpg",
      rating: 4.8,
    },
    {
      id: 12,
      name: "Zucchini Noodles",
      price: 10.99,
      originalPrice: 13.49,
      category: "american",
      image:
        "https://diatribe.org/cdn-cgi/image/width=3840,format=auto,dpr=1,fit=cover,height=2667/https://api.diatribe.org/sites/default/files/styles/cke_media_resize_large/public/2024-10/zucchini-noodles-meat-sauce-wide-istock-1279181417-xl.jpg?itok=8Qra_kWt",
      rating: 4.6,
    },
    {
      id: 13,
      name: "Cauliflower Tacos",
      price: 12.99,
      originalPrice: 15.99,
      category: "american",
      image:
        "https://veganerwandel.de/wp-content/uploads/2024/09/08A4776-scaled.jpg",
      rating: 4.7,
    },
    {
      id: 14,
      name: "Roasted Veggie Quesadilla",
      price: 11.49,
      originalPrice: 14.49,
      category: "american",
      image:
        "https://popmenucloud.com/cdn-cgi/image/width=1200,height=630,format=auto,fit=cover/ksdbilug/02f20134-8193-48f5-96ed-8feeca1906dc.jpg",
      rating: 4.6,
    },
    {
      id: 15,
      name: "Broccoli Cheddar Soup",
      price: 9.99,
      originalPrice: 12.49,
      category: "american",
      image:
        "https://www.allrecipes.com/thmb/f5nnlWOYlScAu_nFPRnPHw5LM-U=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-235874-copycat-panera-broccoli-cheddar-soup-ddmfs-beauty-4x3-f787b66d927d44f18633a4499559611c.jpg",
      rating: 4.5,
    },
    {
      id: 16,
      name: "Grilled Corn Salad",
      price: 10.49,
      originalPrice: 13.49,
      category: "american",
      image:
        "https://www.southernkissed.com/wp-content/uploads/2017/04/Chicken_and_corn_salad.jpg",
      rating: 4.7,
    },
    {
      id: 17,
      name: "Beef Tacos",
      price: 10.99,
      originalPrice: 12.99,
      category: "mexican",
      image:
        "https://media.istockphoto.com/id/1333647378/photo/homemade-american-soft-shell-beef-tacos.jpg?s=612x612&w=0&k=20&c=ZHhpFNbH_BO4MaXzmcKLjC4cPRptdXlp6IVUfs1sBEs=",
      rating: 4.5,
    },
    {
      id: 18,
      name: "Fried Chicken Basket",
      price: 11.99,
      originalPrice: 14.99,
      category: "american",
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww",
      rating: 4.7,
    },
    {
      id: 19,
      name: "Sushi Combo",
      price: 22.99,
      originalPrice: 26.99,
      category: "japanese",
      image:
        "https://t4.ftcdn.net/jpg/13/20/68/77/360_F_1320687728_eWSRobxZH2nj68lqlTKuUqzPben6qb66.jpg",
      rating: 4.8,
    },
  ];

  // Toggle favorite
  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

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
  const totalPrice = selectedProduct ? selectedProduct.price * quantity : 0;
  const totalDiscount = selectedProduct
    ? (selectedProduct.originalPrice - selectedProduct.price) * quantity
    : 0;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="container mx-auto py-20 px-4">
      {/* Header with animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          🍴 TasteHub Menu
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our delicious selection of meals prepared with the freshest
          ingredients and authentic recipes.
        </p>
      </motion.div>

      {/* Category Buttons */}
      <motion.div
        className="flex flex-wrap mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-full">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                type="button"
                className={`flex items-center py-2 px-4 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-amber-400 hover:text-amber-600"
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Search and Price Filter */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoMdSearch className="text-gray-400 text-xl" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
              placeholder="Search food items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <select
            className="block w-full py-3 px-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 bg-white"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Under $10</option>
            <option value="medium">$10 - $20</option>
            <option value="high">$20+</option>
          </select>
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {priceFilteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="relative">
              <img
                src={product.image}
                className="w-full h-48 object-cover"
                alt={product.name}
              />
              <button
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-amber-50 transition-colors duration-300"
                onClick={() => toggleFavorite(product.id)}
              >
                <FaHeart
                  className={
                    favorites.has(product.id) ? "text-red-500" : "text-gray-400"
                  }
                />
              </button>
              {product.originalPrice > product.price && (
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </div>
              )}
            </div>
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-2 text-gray-800">
                {product.name}
              </h5>
              <div className="flex justify-between items-center mb-3">
                <div>
                  <span className="text-amber-600 font-bold text-xl">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="line-through text-gray-500 ml-2 text-sm">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <span className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-amber-400"
                          : i < product.rating
                          ? "text-amber-400 opacity-50"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </span>
              </div>
              <motion.button
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                onClick={() => {
                  setSelectedProduct(product);
                  setQuantity(1);
                  setShowPaymentSuccess(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaShoppingCart className="mr-2" />
                Add to Order
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No results message */}
      {priceFilteredProducts.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <FaUtensils className="text-amber-400 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            No items found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
              <motion.div
                className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="bg-white px-6 pt-6 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedProduct.name}
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
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
                  <div className="mt-6">
                    {!showPaymentSuccess ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
                          />
                        </div>
                        <div>
                          <div className="mb-6">
                            <h5 className="text-lg font-semibold mb-4 text-gray-800">
                              Order Summary
                            </h5>
                            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                              <div className="grid grid-cols-2 gap-2 mb-2">
                                <span className="text-gray-600">Item:</span>
                                <span className="font-medium">
                                  {selectedProduct.name}
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 mb-2">
                                <span className="text-gray-600">Price:</span>
                                <span>${selectedProduct.price.toFixed(2)}</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 mb-2">
                                <span className="text-gray-600">
                                  Original Price:
                                </span>
                                <span>
                                  ${selectedProduct.originalPrice.toFixed(2)}
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <span className="text-gray-600">Discount:</span>
                                <span className="text-green-600 font-medium">
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Quantity
                            </label>
                            <div className="flex items-center">
                              <motion.button
                                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-l-md transition-colors duration-300"
                                type="button"
                                onClick={() => handleQuantityChange("decrease")}
                                whileTap={{ scale: 0.95 }}
                              >
                                -
                              </motion.button>
                              <input
                                type="text"
                                className="w-12 text-center border-t border-b border-gray-300 py-2"
                                value={quantity}
                                readOnly
                              />
                              <motion.button
                                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-r-md transition-colors duration-300"
                                type="button"
                                onClick={() => handleQuantityChange("increase")}
                                whileTap={{ scale: 0.95 }}
                              >
                                +
                              </motion.button>
                            </div>
                          </div>

                          <div className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                            <h5 className="text-xl font-bold text-amber-800">
                              Total Price: ${totalPrice.toFixed(2)}
                            </h5>
                            <p className="text-green-600 text-sm font-medium">
                              You save: ${totalDiscount.toFixed(2)}
                            </p>
                          </div>

                          <form onSubmit={handlePayment}>
                            <div className="mb-4">
                              <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
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
                                className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
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
                                className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
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
                                className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                Delivery Address
                              </label>
                              <textarea
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                                rows="3"
                              ></textarea>
                            </div>
                            <div className="mb-6">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Payment Method
                              </label>
                              <select
                                className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
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
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                                  name="paymentType"
                                  value={formData.paymentType}
                                  onChange={handleInputChange}
                                >
                                  <option value="Credit Card">
                                    Credit Card
                                  </option>
                                  <option value="Google Pay">Google Pay</option>
                                  <option value="PhonePe">PhonePe</option>
                                  <option value="Paytm">Paytm</option>
                                </select>
                              )}
                            </div>
                            <motion.button
                              type="submit"
                              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-3 px-4 rounded-lg transition-all duration-300 flex justify-center items-center shadow-md hover:shadow-lg"
                              disabled={isProcessingPayment}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isProcessingPayment ? (
                                <>
                                  <svg
                                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                            </motion.button>
                          </form>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="mb-6">
                          <div className="text-green-500 text-6xl">✓</div>
                        </div>
                        <h3 className="text-green-600 text-2xl font-bold mb-4">
                          Order Confirmed!
                        </h3>
                        <p className="mb-6 text-gray-600">
                          Thank you for your order. Your food will be delivered
                          soon.
                        </p>
                        <div className="border border-gray-200 p-6 rounded-xl text-left bg-gray-50">
                          <h5 className="font-semibold mb-4 text-lg">
                            Order Details
                          </h5>
                          <div className="grid grid-cols-2 gap-3 mb-2">
                            <span className="text-gray-600">Item:</span>
                            <span className="font-medium">
                              {selectedProduct.name}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mb-2">
                            <span className="text-gray-600">Quantity:</span>
                            <span>{quantity}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mb-2">
                            <span className="text-gray-600">Total Price:</span>
                            <span className="font-medium">
                              ${totalPrice.toFixed(2)}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mb-2">
                            <span className="text-gray-600">
                              Total Discount:
                            </span>
                            <span className="text-green-600 font-medium">
                              ${totalDiscount.toFixed(2)}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mb-2">
                            <span className="text-gray-600">
                              Payment Method:
                            </span>
                            <span>{formData.paymentMethod}</span>
                          </div>
                          {formData.paymentMethod === "Online" && (
                            <div className="grid grid-cols-2 gap-3 mb-2">
                              <span className="text-gray-600">
                                Payment Type:
                              </span>
                              <span>{formData.paymentType}</span>
                            </div>
                          )}
                          <div className="grid grid-cols-2 gap-3">
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
                  <div className="bg-gray-50 px-6 py-4 sm:px-6 sm:flex sm:flex-row-reverse">
                    <motion.button
                      type="button"
                      className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-amber-600 text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-300"
                      onClick={() => {
                        setSelectedProduct(null);
                        setShowPaymentSuccess(false);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FoodRestaurant;
