import React from "react";
import Hero from "./Hero";
import StatsSection from "./StatsSection";
import FeaturedFoods from "./FeaturedFoods";
import CustomerReviews from "./CustomerReviews";
import LandingBanner from "./LandingBanner";
import FoodRestaurant from "./FoodRestaurant";
import LandingFixedBanner from "./LandingFixedBanner";
import CardSlide from "./CardSlide";
import Gallery from "./Gallery";

function Home() {
  return (
    <div>
      <Hero />
      <StatsSection />
      <FeaturedFoods />
      <LandingBanner />
      <FoodRestaurant />
      <CustomerReviews />
      <LandingFixedBanner />
      <CardSlide />
      <Gallery />
    </div>
  );
}

export default Home;
