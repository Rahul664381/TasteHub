import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaTimes,
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Premium Basmati Rice",
    price: "₹550",
    description: "Long-grain, aromatic rice perfect for biryani and pulao.",
    images: [
      "https://media.istockphoto.com/id/491090528/photo/cooked-rice.jpg?s=612x612&w=0&k=20&c=WNeDEUEioyyk6FQZQrVMrtFMDVdtbwtK951eZ8q5FNY=",
      "https://images.pexels.com/photos/15879424/pexels-photo-15879424.jpeg",
      "https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg",
      "https://images.pexels.com/photos/8108047/pexels-photo-8108047.jpeg",
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    title: "Classic Dal Tadka",
    price: "₹250",
    description: "Rich and flavorful yellow lentils with ghee tadka.",
    images: [
      "https://www.zaykakatadka.com/wp-content/uploads/2021/05/Untitled-design14.png",
      "https://media.istockphoto.com/id/608002908/photo/toor-dal-skinned-and-split-pigeon-pea.jpg?s=612x612&w=0&k=20&c=jGCfmdkFJvJ7GwZWosJJ8vF8Jv1aNRpwB38HG7ZKsjg=",
      "https://t4.ftcdn.net/jpg/04/37/04/43/360_F_437044374_RNILg4P5Di3J3iZrTBjaFeoPpC6p9mBQ.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXpUTvOz369viqUEUXjzKdv7hXTfTE6jIsdqVskPtWVaH6ShW3xYoFFRtiziI4Po5Z_A&usqp=CAU",
    ],
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    title: "Paneer Butter Masala",
    price: "₹320",
    description: "Creamy, rich curry with soft paneer cubes.",
    images: [
      "https://png.pngtree.com/png-vector/20240803/ourmid/pngtree-delicious-paneer-butter-masala-photography-png-image_13347762.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ypwk3UYh0CXP8qwcmoviVRQy-78tE-Q8noPjrhx0J2rNXFoBb3mBr9bhtO-8Ds8Ufhk&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcczZXrlVqsxSANeq8DsJqpjdkBFbvljKYSEdogkCc_aGhEYzy9kysQ5ox_F80XAx4fo&usqp=CAU",
      "https://c.ndtvimg.com/2025-06/3s8q23es_matar-paneer_625x300_02_June_25.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384",
    ],
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    title: "Masala Dosa",
    price: "₹180",
    description: "Crispy dosa filled with spicy potato masala.",
    images: [
      "https://i.pinimg.com/736x/e8/dc/7f/e8dc7f0b59b8602ba30621dee3c6291c.jpg",
      "https://media.istockphoto.com/id/909906350/photo/masala-dosa-south-indian-food.jpg?s=612x612&w=0&k=20&c=3CI-bw2NhYaX_t0-CZIXIIXsOygFcUaoGSmzbnVB-fU=",
      "https://media.istockphoto.com/id/1156887022/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=612x612&w=0&k=20&c=KPK_ML3oSM-rHqFqTPtOrriOVeNhZZX3OSfkuc5PRug=",
      "https://i.pinimg.com/736x/2a/c1/51/2ac15169850a766390adcba3a6d28eef.jpg",
    ],
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 5,
    title: "Vegetable Thali",
    price: "₹450",
    description: "Complete Indian meal with curry, dal, rice, roti & sweet.",
    images: [
      "https://static.vecteezy.com/system/resources/thumbnails/030/658/826/small_2x/indian-food-with-white-background-high-quality-ultra-free-photo.jpg",
      "https://5.imimg.com/data5/HW/II/SH/SELLER-9770898/veg-thali-500x500.jpg",
      "https://media.assettype.com/homegrown%2Fimport%2Fbook%2Fkuhwlbayxs-1533040300.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
      "https://vps029.manageserver.in/test/wp-content/uploads/2023/12/Lunch.jpg",
    ],
    rating: 4.6,
    reviews: 178,
  },
  {
    id: 6,
    title: "Chicken Biryani",
    price: "₹380",
    description: "Fragrant basmati rice with marinated chicken and spices.",
    images: [
      "https://t4.ftcdn.net/jpg/09/12/10/25/360_F_912102578_dpR2r8IstjbBzQWgn2dAegf6SE2gDPNT.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/028/536/608/small_2x/flavorful-feast-indulge-in-the-goodness-of-chicken-biryani-generative-ai-photo.jpg",
      "https://saihomefood.in/cdn/shop/products/n7.jpg?v=1572348312",
      "https://www.shutterstock.com/image-photo/hyderabadi-chicken-biryani-aromatic-flavorful-600nw-2496773241.jpg",
    ],
    rating: 4.9,
    reviews: 267,
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-orange-100 transition-all duration-300 group hidden md:flex items-center justify-center"
    aria-label="Next products"
  >
    <FaChevronRight className="text-orange-600 group-hover:text-orange-700 text-lg" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-orange-100 transition-all duration-300 group hidden md:flex items-center justify-center"
    aria-label="Previous products"
  >
    <FaChevronLeft className="text-orange-600 group-hover:text-orange-700 text-lg" />
  </button>
);

export default function FoodSlider() {
  const [selectedImage, setSelectedImage] = useState({});
  const [cartItem, setCartItem] = useState(null);
  const [qty, setQty] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handleImageClick = (productId, img) => {
    setSelectedImage((prev) => ({ ...prev, [productId]: img }));
  };

  const handleAddToCart = (product) => {
    setCartItem(product);
    setQty(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      payment: "Cash on Delivery",
    });
    setOrderSuccess(false);
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

  const closeModal = () => {
    setCartItem(null);
    setOrderSuccess(false);
  };

  const closeSuccess = () => {
    setOrderSuccess(false);
    setCartItem(null);
  };

  // Extract price from string like "₹550"
  const getPriceValue = (priceStr) => {
    return parseInt(priceStr.replace("₹", "").replace(",", ""));
  };

  const price = cartItem ? getPriceValue(cartItem.price) : 0;
  const totalPrice = price * qty;

  // Mobile navigation buttons
  const MobileNavButtons = () => (
    <div className="flex justify-center gap-4 mt-6 md:hidden">
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300"
        aria-label="Previous products"
      >
        <FaChevronLeft className="text-lg" />
      </button>
      <button
        onClick={() => sliderRef.current.slickNext()}
        className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300"
        aria-label="Next products"
      >
        <FaChevronRight className="text-lg" />
      </button>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-b from-gray-50 to-white relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-orange-600">
        🍴 Taste the Best Rice & Foods
      </h2>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-2 focus:outline-none">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-3 sm:p-4 mx-auto transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                {/* Main Image */}
                <div className="relative">
                  <img
                    src={selectedImage[product.id] || product.images[0]}
                    alt={product.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3"
                  />
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.rating} ★
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 mb-3 overflow-x-auto">
                  {product.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="thumb"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded cursor-pointer border-2 hover:border-orange-500 flex-shrink-0 transition-all duration-300 object-cover"
                      onClick={() => handleImageClick(product.id, img)}
                    />
                  ))}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-orange-600 font-semibold text-lg">
                      {product.price}
                    </p>
                    <span className="text-gray-500 text-xs">
                      {product.reviews} reviews
                    </span>
                  </div>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-auto w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaShoppingCart className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>

        <MobileNavButtons />
      </div>

      {/* Checkout Modal */}
      {cartItem && !orderSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Complete Your Order
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Product Info */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={selectedImage[cartItem.id] || cartItem.images[0]}
                    alt={cartItem.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{cartItem.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {cartItem.description}
                    </p>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(cartItem.rating)
                                ? "fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        ({cartItem.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQtyChange(-1)}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    >
                      <FaMinus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-semibold w-8 text-center">
                      {qty}
                    </span>
                    <button
                      onClick={() => handleQtyChange(1)}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    >
                      <FaPlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Order Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Price ({qty} items)</span>
                      <span>₹{price}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>Total Amount</span>
                      <span>₹{totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Customer Info */}
              <div>
                <form onSubmit={handleCompletePayment} className="space-y-4">
                  <h4 className="font-semibold mb-4">Customer Information</h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your complete address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Payment Method *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="Cash on Delivery"
                          checked={formData.payment === "Cash on Delivery"}
                          onChange={handleInputChange}
                          className="text-orange-600 focus:ring-orange-500"
                        />
                        <span>Cash on Delivery</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="Online Payment"
                          checked={formData.payment === "Online Payment"}
                          onChange={handleInputChange}
                          className="text-orange-600 focus:ring-orange-500"
                        />
                        <span>Online Payment</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 mt-4"
                  >
                    Complete Payment - ₹{totalPrice}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {orderSuccess && cartItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-2xl text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Order Successful!
            </h2>
            <p className="text-gray-600 mb-6">
              Your order has been placed successfully and will be delivered
              soon.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {/* Order Details */}
              <div className="bg-gray-50 rounded-lg p-4 text-left">
                <h4 className="font-semibold mb-3">Order Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Product:</span>
                    <span className="font-semibold">{cartItem.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span>{qty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Unit Price:</span>
                    <span>{cartItem.price}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total Paid:</span>
                    <span>₹{totalPrice}</span>
                  </div>
                </div>
              </div>

              {/* Customer Details */}
              <div className="bg-gray-50 rounded-lg p-4 text-left">
                <h4 className="font-semibold mb-3">Customer Information</h4>
                <div className="space-y-2 text-sm">
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

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={closeSuccess}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  closeSuccess();
                  setCartItem(null);
                }}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold"
              >
                Order Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
