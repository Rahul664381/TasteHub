import React from "react";

export default function StatsSection() {
  return (
    <section className="bg-orange-50 text-gray-800 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {/* Happy Customers */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
            <h2 className="text-3xl font-bold text-orange-500">10k+</h2>
            <p className="mt-2 text-gray-600">Happy Diners</p>
          </div>

          {/* Orders Served */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
            <h2 className="text-3xl font-bold text-orange-500">500k+</h2>
            <p className="mt-2 text-gray-600">Dishes Served</p>
          </div>

          {/* Satisfaction */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
            <h2 className="text-3xl font-bold text-orange-500">99.9%</h2>
            <p className="mt-2 text-gray-600">Satisfaction Rate</p>
          </div>

          {/* Menu Items */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
            <h2 className="text-3xl font-bold text-orange-500">200+</h2>
            <p className="mt-2 text-gray-600">Delicious Dishes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
