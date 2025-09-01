import React from "react";
import { Link } from "react-router-dom";

function OurLife() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto bg-gradient-to-b from-orange-50 to-white">
      {/* Founder Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-20 bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl shadow-inner border border-orange-200">
        <div className="md:w-1/3">
          <img
            src="https://media1.s-nbcnews.com/i/MSNBC/Components/Slideshows/_production/ss-100414-celeb-chefs-NEW/ss-100414-celeb-chefs1-tease.jpg"
            alt="Chef Rahul"
            className="w-full h-auto object-cover rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
            Meet Our Master Chef
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <span className="font-semibold text-orange-600">Chef Rahul</span>{" "}
            brings over 20 years of culinary expertise to Spice Delight. Trained
            in the royal kitchens of Rajasthan and having worked in top
            restaurants across India, Chef Rahul's passion for authentic Indian
            flavors is reflected in every dish we serve.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            "Our recipes are passed down through generations, but we're not
            afraid to add modern touches that today's diners appreciate," says
            Chef Rahul, whose signature Butter Chicken has won multiple awards.
          </p>
        </div>
      </div>

      {/* Page Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-10 animate-fade-in-down">
        Explore Our Menu <span className="animate-bounce inline-block">🍴</span>
      </h1>

      {/* Extended 70-line Paragraph Section */}
      <div className="text-gray-800 text-lg md:text-xl text-center mb-16 max-w-4xl mx-auto leading-relaxed space-y-6">
        <p className="animate-fade-in-up delay-100 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-orange-500">
          At <span className="font-bold text-orange-600">Spice Delight</span>,
          we've dedicated ourselves to preserving the{" "}
          <span className="text-amber-700 font-medium">
            authentic flavors of India
          </span>{" "}
          while creating a dining experience that feels contemporary and
          welcoming. Our journey began in 2010 with a small kitchen and big
          dreams, and today we're proud to serve hundreds of happy customers
          daily across our three locations.
        </p>

        <p className="animate-fade-in-up delay-200 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-amber-500">
          What sets us apart is our{" "}
          <span className="text-amber-700 font-medium">
            commitment to quality ingredients
          </span>
          . We source our spices directly from farmers in Kerala, our dairy
          products come from local cooperatives, and our vegetables are
          purchased fresh daily from the market. This dedication to quality
          means you can taste the difference in every bite.
        </p>

        <p className="animate-fade-in-up delay-300 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-orange-500">
          Our <span className="text-amber-700 font-medium">starters menu</span>{" "}
          is designed to awaken your palate. The Paneer Tikka is marinated for
          24 hours in a secret blend of spices, while our Chicken Kebabs use a
          family recipe that's over 50 years old. The Veg Spring Rolls
          incorporate seasonal vegetables, and the Masala Papad offers the
          perfect crispy introduction to your meal.
        </p>

        <p className="animate-fade-in-up delay-400 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-amber-500">
          The{" "}
          <span className="text-amber-700 font-medium">
            main course selections
          </span>{" "}
          represent the diversity of Indian cuisine. Our Butter Chicken uses a
          tomato-based gravy that simmers for hours to develop depth of flavor.
          The Paneer Butter Masala features homemade paneer in a rich, creamy
          sauce. For meat lovers, the Mutton Rogan Josh is slow-cooked to
          perfection with aromatic spices. Our Dal Tadka is a comforting lentil
          dish tempered with garlic and cumin, while the Veg Biryani layers
          fragrant basmati rice with seasonal vegetables in the traditional dum
          style.
        </p>

        <p className="animate-fade-in-up delay-500 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-orange-500">
          No Indian meal is complete without{" "}
          <span className="text-amber-700 font-medium">desserts</span>, and ours
          are made fresh daily. The Gulab Jamun are soft milk dumplings soaked
          in cardamom-infused syrup. Rasmalai features delicate cheese patties
          floating in sweetened, saffron-flavored milk. For those preferring
          Western-style desserts, our Chocolate Brownie comes warm with vanilla
          ice cream. The Kulfi is our traditional answer to ice cream, denser
          and creamier with flavors like pistachio and mango.
        </p>

        <p className="animate-fade-in-up delay-600 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-amber-500">
          Our{" "}
          <span className="text-amber-700 font-medium">beverage selection</span>{" "}
          complements the meal perfectly. The Mango Lassi is a refreshing
          yogurt-based drink that cools the palate. Masala Chai is brewed with
          fresh ginger and a special spice blend. The Fresh Lime Soda offers a
          tangy counterpoint to rich dishes, while our Cold Coffee provides a
          creamy finish for those who prefer something different.
        </p>

        <p className="animate-fade-in-up delay-700 bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-xl shadow-md border border-orange-200">
          Beyond the food, we've created an{" "}
          <span className="text-orange-600 font-semibold">
            atmosphere that reflects India's warmth and hospitality
          </span>
          . The decor features traditional elements with modern comforts, and
          our staff is trained to make every guest feel special. Whether you're
          celebrating a special occasion or just enjoying a casual meal, we want
          Spice Delight to feel like a home away from home.{" "}
          <span className="text-rose-600 animate-pulse">❤️</span>
        </p>
      </div>

      {/* Menu Sections */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Starters */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-orange-100">
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src="https://blog.venuelook.com/wp-content/uploads/2018/05/party-starters.jpg"
              alt="Starters"
              className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
            <span className="inline-block transform group-hover:rotate-12 transition-transform">
              🥗
            </span>{" "}
            Starters
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Paneer Tikka</span> -{" "}
              <span className="text-amber-700">
                Grilled cottage cheese with spices
              </span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Chicken Kebab</span> -{" "}
              <span className="text-amber-700">Tandoori grilled chicken</span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Veg Spring Rolls</span> -{" "}
              <span className="text-amber-700">Crispy vegetable rolls</span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Masala Papad</span> -{" "}
              <span className="text-amber-700">
                Spiced crispy lentil wafers
              </span>
            </li>
          </ul>
        </div>

        {/* Main Course */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-orange-100">
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src="https://i-media.vyaparify.com/vcards/blogs/209241/Main-Course--Thali,-Borivali-West.png"
              alt="Main Course"
              className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
            <span className="inline-block transform group-hover:rotate-12 transition-transform">
              🍛
            </span>{" "}
            Main Course
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Butter Chicken</span> -{" "}
              <span className="text-amber-700">Creamy tomato-based curry</span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Paneer Butter Masala</span> -{" "}
              <span className="text-amber-700">
                Cottage cheese in rich gravy
              </span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Mutton Rogan Josh</span> -{" "}
              <span className="text-amber-700">Aromatic lamb curry</span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Dal Tadka</span> -{" "}
              <span className="text-amber-700">Tempered lentil soup</span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Veg Biryani</span> -{" "}
              <span className="text-amber-700">
                Fragrant rice with vegetables
              </span>
            </li>
          </ul>
        </div>

        {/* Desserts */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-orange-100">
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/06/LINK-TRAFFIC-18.jpg"
              alt="Desserts"
              className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
            <span className="inline-block transform group-hover:rotate-12 transition-transform">
              🍨
            </span>{" "}
            Desserts
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Gulab Jamun</span> -{" "}
              <span className="text-amber-700">
                Milk dumplings in saffron syrup
              </span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Rasmalai</span> -{" "}
              <span className="text-amber-700">
                Soft cheese patties in sweet milk
              </span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Chocolate Brownie</span> -{" "}
              <span className="text-amber-700">With vanilla ice cream</span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Kulfi</span> -{" "}
              <span className="text-amber-700">
                Traditional Indian ice cream
              </span>
            </li>
          </ul>
        </div>

        {/* Drinks */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-orange-100">
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/050/903/494/small/vibrant-assortment-of-cocktails-and-drinks-with-fresh-citrus-garnishes-in-a-bar-setting-photo.jpg"
              alt="Drinks"
              className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
            <span className="inline-block transform group-hover:rotate-12 transition-transform">
              🍹
            </span>{" "}
            Drinks
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Mango Lassi</span> -{" "}
              <span className="text-amber-700">Yogurt mango drink</span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Masala Chai</span> -{" "}
              <span className="text-amber-700">Spiced Indian tea</span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Fresh Lime Soda</span> -{" "}
              <span className="text-amber-700">Refreshing citrus drink</span>
            </li>
            <li className="hover:text-orange-600 transition-colors pl-2">
              <span className="font-medium">Cold Coffee</span> -{" "}
              <span className="text-amber-700">Iced coffee with cream</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Closing Note */}
      <div className="mt-20 text-center bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl shadow-inner border border-orange-200">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-6 animate-pulse">
          🌟 Taste the Tradition, Feel the Delight 🌟
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
          Whether you crave the smoky aroma of tandoor, the creamy richness of
          curries, or the sweetness of Indian desserts, Spice Delight promises a
          culinary experience like no other. Join us and discover why food here
          is not just about eating – it's about creating memories that last
          forever.
        </p>
        <Link
          to="/about"
          className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Learn About Our Story ←
        </Link>
      </div>
    </div>
  );
}

export default OurLife;
