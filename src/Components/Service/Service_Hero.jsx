import React, { useState, useEffect } from "react";
import {
  FaUtensils,
  FaTruck,
  FaBox,
  FaConciergeBell,
  FaBirthdayCake,
  FaClock,
  FaLeaf,
  FaHeadset,
  FaCreditCard,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaUtensils className="text-4xl text-red-500" />,
    title: "Dine-In",
    desc: "Enjoy delicious meals in a cozy and welcoming atmosphere.",
  },
  {
    id: 2,
    icon: <FaTruck className="text-4xl text-green-500" />,
    title: "Home Delivery",
    desc: "Get your favorite dishes delivered hot & fresh at your doorstep.",
  },
  {
    id: 3,
    icon: <FaBox className="text-4xl text-yellow-500" />,
    title: "Takeaway",
    desc: "Order online or by phone and pick up your food hassle-free.",
  },
  {
    id: 4,
    icon: <FaConciergeBell className="text-4xl text-purple-500" />,
    title: "Table Reservation",
    desc: "Reserve your table in advance and skip the waiting time.",
  },
  {
    id: 5,
    icon: <FaBirthdayCake className="text-4xl text-pink-500" />,
    title: "Catering Service",
    desc: "Delicious catering for birthdays, parties, and special events.",
  },
];

const features = [
  {
    icon: <FaClock className="text-3xl text-red-500" />,
    title: "Fast Service",
    desc: "Orders ready in 15 minutes",
  },
  {
    icon: <FaLeaf className="text-3xl text-green-500" />,
    title: "Quality Ingredients",
    desc: "Fresh and high-quality ingredients",
  },
  {
    icon: <FaHeadset className="text-3xl text-blue-500" />,
    title: "24/7 Support",
    desc: "Always ready to serve you",
  },
  {
    icon: <FaCreditCard className="text-3xl text-purple-500" />,
    title: "Easy Payment",
    desc: "Cash, UPI and Cards accepted",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    rating: 5,
    comment: "Best taste and service. I've become a regular customer!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    rating: 5,
    comment:
      "Our first choice for family dinners. Food is always fresh and delicious.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Vikas Gupta",
    rating: 4,
    comment: "Delivery is always on time and food comes hot.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Service_Hero = () => {
  const [isWeekly, setIsWeekly] = useState(false);
  const [displayPrices, setDisplayPrices] = useState([5, 12, 20]);

  const plans = [
    {
      name: "Breakfast Combo",
      daily: 5,
      weekly: 30,
      features: ["2 Pancakes", "1 Coffee", "Fresh Juice"],
      popular: false,
    },
    {
      name: "Lunch Special",
      daily: 12,
      weekly: 70,
      features: ["Main Course", "Salad", "Dessert", "Soft Drink"],
      popular: true,
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
      popular: false,
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Exceptional taste and memorable dining experiences
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Explore Menu
            </button>
          </div>
        </div>
      </div>

      {/* Meal Plans Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Delicious Meal Plans
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Choose your perfect meal plan and enjoy fresh, tasty food every day!
          </p>

          {/* Toggle Switch */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <span
              className={
                !isWeekly ? "text-white font-semibold" : "text-gray-400"
              }
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
              className={
                isWeekly ? "text-white font-semibold" : "text-gray-400"
              }
            >
              Weekly
            </span>
          </div>

          {/* Meal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-600 to-pink-500 transform md:-translate-y-4"
                    : "bg-gray-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold py-1 px-3 rounded-full">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-2">
                  ${displayPrices[index]}
                  <span className="text-sm font-normal text-gray-300 block">
                    {isWeekly ? "per week" : "per day"}
                  </span>
                </p>
                <button
                  className={`w-full py-3 rounded-lg mb-6 font-medium ${
                    plan.popular
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                  } transition duration-300`}
                >
                  Order Now
                </button>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a variety of services to make your dining experience
              delightful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Special Offers
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 rounded-xl text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute -right-5 -top-5 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
              <h3 className="text-2xl font-bold mb-4">Family Combo</h3>
              <p className="text-xl mb-6">
                Special thali for 4 people - only ₹999
              </p>
              <button className="bg-white text-red-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">
                Order Now
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-xl text-white relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute -left-5 -bottom-5 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
              <h3 className="text-2xl font-bold mb-4">Lunch Special</h3>
              <p className="text-xl mb-6">Mon-Fri, 12PM-3PM - 20% discount</p>
              <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gray-100">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Customer Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl text-white mb-8">
            Order now and enjoy delicious food delivered to your doorstep or
            visit us for an amazing dine-in experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Order Online
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-600 transition duration-300">
              Reserve a Table
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service_Hero;
