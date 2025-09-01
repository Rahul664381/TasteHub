import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNav = () => setNavOpen(!navOpen);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-red-600 hover:text-red-700 transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            🍴 TasteHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
            <Link
              to="/"
              className="hover:text-red-600 transition-all duration-300 relative group"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Menu Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-red-600 transition-all duration-300 cursor-pointer group">
                Menu
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 w-64 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 text-gray-700 transform group-hover:translate-y-0 translate-y-2">
                {/* Breakfast Submenu */}
                <div className="px-4 py-2 hover:bg-red-50 rounded-md transition-colors duration-300">
                  <Link
                    to="/Breakfast"
                    className="font-semibold hover:text-red-600 block transition-colors duration-300"
                  >
                    Breakfast
                  </Link>
                </div>

                {/* Lunch Submenu */}
                <div className="px-4 py-2 hover:bg-red-50 rounded-md mt-1 transition-colors duration-300">
                  <Link
                    to="/Lunch"
                    className="font-semibold hover:text-red-600 block transition-colors duration-300"
                  >
                    Lunch
                  </Link>
                </div>

                {/* Dinner Submenu */}
                <div className="px-4 py-2 hover:bg-red-50 rounded-md mt-1 transition-colors duration-300">
                  <Link
                    to="/Dinner"
                    className="font-semibold hover:text-red-600 block transition-colors duration-300"
                  >
                    Dinner
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Links */}
            <Link
              to="/about"
              className="hover:text-red-600 transition-all duration-300 relative group"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-600 transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-red-600 transition-all duration-300 cursor-pointer group">
                More
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md py-2 w-44 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 text-gray-700 transform group-hover:translate-y-0 translate-y-2">
                <Link
                  to="/reservation"
                  className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors duration-300"
                >
                  Reservation
                </Link>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors duration-300"
                >
                  Gallery
                </Link>
                <Link
                  to="/offers"
                  className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors duration-300"
                >
                  Offers
                </Link>
                <Link
                  to="/testimonials"
                  className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors duration-300"
                >
                  Testimonials
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors duration-300"
                >
                  Blog
                </Link>
                <Link
                  to="/events"
                  className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors duration-300"
                >
                  Events
                </Link>
              </div>
            </div>

            <Link
              to="/login"
              className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2 rounded-lg shadow-md hover:from-red-700 hover:to-orange-600 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              className="text-gray-700 p-2 rounded-md hover:bg-red-50 transition-colors duration-300"
            >
              {navOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-transform duration-300 rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
          navOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          <Link
            to="/"
            className="block px-4 py-3 rounded-lg hover:bg-red-50 transition-colors duration-300 font-medium text-gray-700 hover:text-red-600"
            onClick={() => setNavOpen(false)}
          >
            Home
          </Link>

          {/* Menu Accordion */}
          <div>
            <button
              onClick={() => toggleDropdown("menu")}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-red-50 transition-colors duration-300 font-medium text-gray-700 hover:text-red-600"
            >
              <span>Menu</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === "menu" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeDropdown === "menu" ? "max-h-96" : "max-h-0"
              }`}
            >
              {/* Breakfast */}
              <div className="pl-6">
                <Link
                  to="/breakfast"
                  className="block px-4 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-700 hover:text-red-600"
                  onClick={() => setNavOpen(false)}
                >
                  Breakfast
                </Link>
                <Link
                  to="/continental-breakfast"
                  className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600 text-sm"
                  onClick={() => setNavOpen(false)}
                >
                  Continental Breakfast
                </Link>
                <Link
                  to="/indian-breakfast"
                  className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600 text-sm"
                  onClick={() => setNavOpen(false)}
                >
                  Indian Breakfast
                </Link>
                <Link
                  to="/healthy-breakfast"
                  className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600 text-sm"
                  onClick={() => setNavOpen(false)}
                >
                  Healthy Options
                </Link>
              </div>

              {/* Lunch */}
              <div className="pl-6 mt-1">
                <Link
                  to="/lunch"
                  className="block px-4 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-700 hover:text-red-600"
                  onClick={() => setNavOpen(false)}
                >
                  Lunch
                </Link>
                <Link
                  to="/starters-lunch"
                  className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600 text-sm"
                  onClick={() => setNavOpen(false)}
                >
                  Starters
                </Link>
                <Link
                  to="/main-course-lunch"
                  className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600 text-sm"
                  onClick={() => setNavOpen(false)}
                >
                  Main Course
                </Link>
                <Link
                  to="/salads-lunch"
                  className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600 text-sm"
                  onClick={() => setNavOpen(false)}
                >
                  Salads & Soups
                </Link>
              </div>

              {/* Dinner */}
              <div className="pl-6 mt-1">
                <Link
                  to="/dinner"
                  className="block px-4 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-700 hover:text-red-600"
                  onClick={() => setNavOpen(false)}
                >
                  Dinner
                </Link>
                <Link
                  to="/starters-dinner"
                  className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600 text-sm"
                  onClick={() => setNavOpen(false)}
                >
                  Starters
                </Link>
                <Link
                  to="/main-course-dinner"
                  className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600 text-sm"
                  onClick={() => setNavOpen(false)}
                >
                  Main Course
                </Link>
                <Link
                  to="/desserts-dinner"
                  className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600 text-sm"
                  onClick={() => setNavOpen(false)}
                >
                  Desserts & Beverages
                </Link>
              </div>
            </div>
          </div>

          {/* More Accordion */}
          <div>
            <button
              onClick={() => toggleDropdown("more")}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-red-50 transition-colors duration-300 font-medium text-gray-700 hover:text-red-600"
            >
              <span>More</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === "more" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeDropdown === "more" ? "max-h-96" : "max-h-0"
              }`}
            >
              <Link
                to="/reservation"
                className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600"
                onClick={() => setNavOpen(false)}
              >
                Reservation
              </Link>
              <Link
                to="/gallery"
                className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600"
                onClick={() => setNavOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/offers"
                className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600"
                onClick={() => setNavOpen(false)}
              >
                Offers
              </Link>
              <Link
                to="/testimonials"
                className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600"
                onClick={() => setNavOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/blog"
                className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600"
                onClick={() => setNavOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/events"
                className="block px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300 text-gray-600 hover:text-red-600"
                onClick={() => setNavOpen(false)}
              >
                Events
              </Link>
            </div>
          </div>

          <Link
            to="/about"
            className="block px-4 py-3 rounded-lg hover:bg-red-50 transition-colors duration-300 font-medium text-gray-700 hover:text-red-600"
            onClick={() => setNavOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-3 rounded-lg hover:bg-red-50 transition-colors duration-300 font-medium text-gray-700 hover:text-red-600"
            onClick={() => setNavOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="block px-4 py-3 mt-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg text-center hover:from-red-700 hover:to-orange-600 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            onClick={() => setNavOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
