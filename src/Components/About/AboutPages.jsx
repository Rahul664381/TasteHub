import React from "react";
import { Link } from "react-router-dom";

function AboutPages() {
  return (
    <>
      <div className="py-20 px-4 max-w-6xl mx-auto bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl my-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src="https://media1.s-nbcnews.com/i/MSNBC/Components/Slideshows/_production/ss-100414-celeb-chefs-NEW/ss-100414-celeb-chefs1-tease.jpg"
              alt="Founder"
              className="rounded-lg shadow-xl w-full h-auto object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-orange-600 mb-6">
              Our <span className="text-amber-800">Story</span>
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Founded in 2010 by Chef Rahul Mishra, Spice Delight started as a
              small family restaurant with just 5 tables. Today, we serve over
              500 customers daily across our 3 locations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to bring authentic Indian flavors with a modern
              twist, using locally sourced ingredients while preserving
              traditional cooking methods.
            </p>
            <Link
              to="/OurLife"
              className="mt-8 inline-block bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Explore Our Menu →
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="relative inline-block">
              Why Choose Us
              <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-200 opacity-50 -z-1"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🍴",
                title: "Authentic Recipes",
                desc: "Traditional recipes passed down for generations, carefully preserved to maintain original flavors",
              },
              {
                icon: "🌱",
                title: "Fresh Ingredients",
                desc: "Locally sourced, organic ingredients delivered fresh daily from trusted farmers",
              },
              {
                icon: "👨‍🍳",
                title: "Expert Chefs",
                desc: "Experienced chefs with 10+ years experience in crafting perfect Indian cuisine",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Meet Our <span className="text-orange-600">Team</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-200 opacity-50 -z-1"></span>
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Rahul Mishra",
              role: "Head Chef",
              img: "https://media1.s-nbcnews.com/i/MSNBC/Components/Slideshows/_production/ss-100414-celeb-chefs-NEW/ss-100414-celeb-chefs1-tease.jpg",
              bio: "Specializes in North Indian cuisine with 15 years experience",
            },
            {
              name: "Priya Sharma",
              role: "Sous Chef",
              img: "https://t4.ftcdn.net/jpg/06/41/88/25/360_F_641882588_QayqH5oM7zcnBBGRwK7TWsCJTM0shfKX.jpg",
              bio: "Expert in South Indian flavors and vegetarian specialties",
            },
            {
              name: "Amit Patel",
              role: "Pastry Chef",
              img: "https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/50e747fb-5a5e-44a2-9132-5dd282a45d81/Chef+Prabir+Image+-+The+Den.jpg",
              bio: "Creates exquisite Indian desserts with modern presentation",
            },
            {
              name: "Neha Gupta",
              role: "Mixologist",
              img: "https://images.yourstory.com/cs/images/undefined/DrNeha-1646540863164.jpg?crop=faces&ar=1%3A1&format=auto&w=256&q=75",
              bio: "Crafts innovative cocktails with Indian spices and flavors",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="text-center group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                  <p className="text-white text-sm">{member.bio}</p>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg text-gray-800">
                  {member.name}
                </h3>
                <p className="text-orange-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-orange-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="relative inline-block">
              What Our <span className="text-orange-600">Customers</span> Say
              <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-200 opacity-50 -z-1"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul K.",
                review:
                  "The best biryani I've had outside of Hyderabad! The flavors are authentic and the meat is always tender. Their service is exceptional.",
                rating: 5,
                date: "2 weeks ago",
              },
              {
                name: "Priya M.",
                review:
                  "Authentic flavors, great service. The butter chicken is to die for! We come here every weekend with our family.",
                rating: 4,
                date: "1 month ago",
              },
              {
                name: "Vikram S.",
                review:
                  "My go-to place for family dinners. The thali is excellent value and the quality is consistently good. Highly recommended!",
                rating: 5,
                date: "3 months ago",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 relative"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400 text-2xl"
                          : "text-gray-300 text-2xl"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">
                  "{testimonial.review}"
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-800">
                    - {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
                </div>
                <div className="absolute top-0 right-0 mt-4 mr-4 text-6xl text-orange-100 opacity-50">
                  ”
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Gallery Section */}
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Our
            <span className="text-orange-300">Restaurant</span>
            <span className="text-orange-600">Gallery</span>
            <p>A visual journey through our culinary space and creations</p>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-200 opacity-50 -z-1"></span>
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              alt: "Restaurant interior",
              caption: "Elegant dining area",
              image:
                "https://images.prismic.io/luxdeco-dev/MDZiYWE5NmUtYTcyNi00YjBjLWIzNjctNzQ3YzNiMTlmNTk2_luxury_dining_room_styles_elegant_dining_room_katharine_pooley_read_more_in_the_luxurist_at_luxdeco.com.jpg?auto=format,compress",
            },
            {
              id: 2,
              alt: "Chef preparing food",
              caption: "Our chefs in action",
              image:
                "https://t4.ftcdn.net/jpg/06/41/88/25/360_F_641882588_QayqH5oM7zcnBBGRwK7TWsCJTM0shfKX.jpg",
            },
            {
              id: 3,
              alt: "Signature dishes",
              caption: "Our specialties",
              image: "https://static.toiimg.com/photo/72023714.cms",
            },
            {
              id: 4,
              alt: "Dessert display",
              caption: "Sweet endings",
              image:
                "https://media.istockphoto.com/id/873169784/photo/cake-display.jpg?s=612x612&w=0&k=20&c=BhbCrlto5V3Y8Qyk3Tx5PbRqQn1khNI4P9arDSHo0nA=",
            },
            {
              id: 5,
              alt: "Bar area",
              caption: "Craft cocktails",
              image:
                "https://www.mashed.com/img/gallery/what-really-makes-craft-cocktails-crafty/l-intro-1692911260.jpg",
            },
            {
              id: 6,
              alt: "Outdoor seating",
              caption: "Al fresco dining",
              image:
                "https://sunslifestyle.com/cdn/shop/articles/Outdoor_seating_ideas_2021.jpg?v=1715865832",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-medium text-lg">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="Gallery">
            <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              View Full Gallery
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutPages;
