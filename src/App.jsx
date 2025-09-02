import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import OurLife from "./Components/About/OurLife";
import AboutPages from "./Components/About/AboutPages";
import Login from "./pagesLogi/Login";
import Breakfast from "./Pages/Breakfast";
import ContinentalBreakfast from "./Pages/ContinentalBreakfast";
import IndianBreakfast from "./Pages/IndianBreakfast";
import HealthyBreakfast from "./Pages/HealthyBreakfast";
import Lunch from "./Pages/Lunch";
import MainCourseLunch from "./Pages/MainCourseLunch";
import StartersLunch from "./Pages/StartersLunch";
import SaladsSoups from "./Pages/SaladsSoups";
import Dinner from "./Pages/Dinner";
import StartersDinner from "./Pages/StartersDinner";
import MainCourseDinner from "./Pages/MainCourseDinner";
import DessertsDinner from "./Pages/DessertsDinner";
import Reservation from "./MorePages/Reservation";
import Gallery from "./MorePages/Gallery";
import Offers from "./MorePages/Offers";
import Testimonials from "./MorePages/Testimonials";
import Blog from "./MorePages/Blog";
import Events from "./MorePages/Events";
import FoodRestaurant from "./Components/Home/FoodRestaurant";

function App() {
  console.log("App Component Rendered");
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Breakfast" element={<Breakfast />} />
        <Route
          path="/ContinentalBreakfast"
          element={<ContinentalBreakfast />}
        />
        <Route path="/IndianBreakfast" element={<IndianBreakfast />} />
        <Route path="/HealthyBreakfast" element={<HealthyBreakfast />} />
        <Route path="/Lunch" element={<Lunch />} />
        <Route path="/MainCourseLunch" element={<MainCourseLunch />} />
        <Route path="/StartersLunch" element={<StartersLunch />} />
        <Route path="/SaladsSoups" element={<SaladsSoups />} />
        <Route path="/Dinner" element={<Dinner />} />
        <Route path="/StartersDinner" element={<StartersDinner />} />
        <Route path="/MainCourseDinner" element={<MainCourseDinner />} />
        <Route path="/DessertsDinner" element={<DessertsDinner />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/OurLife" element={<OurLife />} />
        <Route path="/AboutPages" element={<AboutPages />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/FoodRestaurant" element={<FoodRestaurant />} />
        <Route path="/about/FoodRestaurant" element={<FoodRestaurant />} />
        <Route path="/about/Gallery" element={<Gallery />} />;
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
