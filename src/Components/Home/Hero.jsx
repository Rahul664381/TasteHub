import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
function Hero() {
  const slides = [
    {
      video:
        "https://videos.pexels.com/video-files/5866263/5866263-uhd_2560_1440_25fps.mp4",
      title: "Fresh & Delicious Food",
      subtitle: "Order now and enjoy mouth-watering meals at your doorstep.",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3245641/3245641-uhd_2560_1440_25fps.mp4",
      title: "Taste the Tradition",
      subtitle: "Authentic recipes made with love and fresh ingredients.",
    },
    {
      video:
        "https://videos.pexels.com/video-files/4298651/4298651-uhd_2560_1440_25fps.mp4",
      title: "Healthy & Tasty",
      subtitle: "Start your day with our healthy breakfast specials.",
    },
  ];

  return (
    <div className="w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Video */}
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[600px] object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
                {slide.subtitle}
              </p>

              <Link to="FoodRestaurant">
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
                  Order Now
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
