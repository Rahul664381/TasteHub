import React, { useState } from "react";
import {
  FaHome,
  FaUtensils,
  FaInfoCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useSpring, animated } from "react-spring";

// Hover animation component
const Boop = ({ rotation = 0, scale = 1.05, timing = 150, children }) => {
  const [isBooped, setIsBooped] = useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped
      ? `rotate(${rotation}deg) scale(${scale})`
      : "rotate(0deg) scale(1)",
    config: {
      tension: 300,
      friction: 10,
    },
  });

  const trigger = () => {
    setIsBooped(true);
    setTimeout(() => setIsBooped(false), timing);
  };

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

// Animated link component
const AnimatedLink = ({ href, children, icon: Icon }) => {
  const [hover, setHover] = useState(false);

  const springProps = useSpring({
    transform: hover ? "translateX(5px)" : "translateX(0px)",
    color: hover ? "#ffffff" : "#9ca3af",
    config: { tension: 300, friction: 20 },
  });

  return (
    <li className="mb-2">
      <animated.a
        href={href}
        className="flex items-center transition-all duration-300"
        style={springProps}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {Icon && <Icon className="mr-2 text-amber-500" />}
        {children}
      </animated.a>
    </li>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-3xl mr-2">🍴</span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              TasteHub
            </span>
          </h2>
          <p className="text-gray-400 mb-4">
            Serving you the best taste in town. Fresh ingredients, authentic
            recipes, and a touch of love in every bite.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <Boop rotation={5} scale={1.1}>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-amber-500 transition-colors duration-300 block"
              >
                <FaFacebookF className="text-white" />
              </a>
            </Boop>
            <Boop rotation={5} scale={1.1}>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-amber-500 transition-colors duration-300 block"
              >
                <FaInstagram className="text-white" />
              </a>
            </Boop>
            <Boop rotation={5} scale={1.1}>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-amber-500 transition-colors duration-300 block"
              >
                <FaTwitter className="text-white" />
              </a>
            </Boop>
            <Boop rotation={5} scale={1.1}>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-amber-500 transition-colors duration-300 block"
              >
                <FaYoutube className="text-white" />
              </a>
            </Boop>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaInfoCircle className="text-amber-500 mr-2" />
            Quick Links
          </h3>
          <ul className="space-y-2">
            <AnimatedLink href="#" icon={FaHome}>
              Home
            </AnimatedLink>
            <AnimatedLink href="#" icon={FaUtensils}>
              Menu
            </AnimatedLink>
            <AnimatedLink href="#" icon={FaInfoCircle}>
              About Us
            </AnimatedLink>
            <AnimatedLink href="#" icon={FaPhone}>
              Contact
            </AnimatedLink>
            <AnimatedLink href="#">Reservations</AnimatedLink>
            <AnimatedLink href="#">Gallery</AnimatedLink>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaClock className="text-amber-500 mr-2" />
            Opening Hours
          </h3>
          <div className="text-gray-400 space-y-2">
            <p className="flex justify-between">
              <span>Mon - Thu:</span>
              <span>11:00 AM - 10:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Friday:</span>
              <span>11:00 AM - 11:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Saturday:</span>
              <span>10:00 AM - 11:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Sunday:</span>
              <span>10:00 AM - 9:00 PM</span>
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaMapMarkerAlt className="text-amber-500 mr-2" />
            Contact Us
          </h3>
          <div className="text-gray-400 space-y-3">
            <p className="flex items-start">
              <FaMapMarkerAlt className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
              <span>123 Food Restaurant, Mumbai, India - 400001</span>
            </p>
            <p className="flex items-center">
              <FaPhone className="text-amber-500 mr-2" />
              <span>+91 7651820239</span>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="text-amber-500 mr-2" />
              <span>rm4888752@gmail.com</span>
            </p>

            {/* Newsletter Subscription */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2 text-amber-400">
                Subscribe to Our Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700 text-white px-3 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-amber-500 w-full"
                />
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} TasteHub. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
