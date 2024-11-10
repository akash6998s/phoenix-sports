// src/pages/Events.js
import React from 'react';

const Events = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
      <div className="space-y-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Cricket Tournament</h3>
          <p className="text-lg">Join us for an exciting tournament! Date: 15th December 2024</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Coaching Workshop</h3>
          <p className="text-lg">Get coached by professionals! Date: 22nd December 2024</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Night Cricket Match</h3>
          <p className="text-lg">Come and enjoy a match under the lights! Date: 25th December 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
