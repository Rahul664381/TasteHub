import React from "react";
import { FaStar } from "react-icons/fa";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "The food was absolutely delicious! Loved the ambiance and friendly staff.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sarah Smith",
      feedback:
        "Amazing flavors and fast service. I’ll definitely come back with friends!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "David Johnson",
      feedback:
        "Best dining experience in town! Highly recommend the chef’s specials.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 4,
      name: "Emily Brown",
      feedback:
        "Lovely food and great presentation. Perfect for family dinners.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="bg-orange-50 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our <span className="text-orange-600">Guests Love</span>
        </h2>
        <p className="text-gray-700 mb-10">
          Real feedback from our happy guests enjoying our dishes.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 text-center border-t-4 border-orange-200"
            >
              {/* Profile Image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-orange-100"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800">
                {review.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center mt-2 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-sm">{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
