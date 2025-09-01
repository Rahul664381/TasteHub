// src/pages/Events.jsx
import React from "react";

export default function Events() {
  const events = [
    { title: "Wine Tasting Night", date: "Sep 5, 2025" },
    { title: "Live Music Weekend", date: "Sep 12, 2025" },
    { title: "Cooking Workshop", date: "Sep 20, 2025" },
    { title: "Charity Dinner Event", date: "Sep 25, 2025" },
  ];

  return (
    <div className="min-h-screen bg-red-50 py-40 px-5">
      <h1 className="text-4xl font-bold text-center text-red-800 mb-8">
        Events
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-red-900 mb-1">
              {event.title}
            </h2>
            <p className="text-red-700">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
