import React from 'react';

const About = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">About Us</h2>
      <p className="text-lg leading-relaxed mb-4">
        Welcome to our state-of-the-art cricket turf, designed to offer top-notch facilities for players of all skill levels. Whether you are an amateur or a professional cricketer, we provide the perfect environment for your game.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Our facility includes floodlights for night play, a high-quality pitch, and ample seating for spectators. We also offer coaching services, equipment rental, and booking options for tournaments and events.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Our Facilities</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li><strong>High-Quality Pitch</strong> – Perfect for all types of cricket matches.</li>
        <li><strong>Floodlights</strong> – Play at any time, day or night.</li>
        <li><strong>Coaching Services</strong> – Improve your game with professional coaching.</li>
        <li><strong>Seating & Lounge</strong> – Relax with friends and family while enjoying the game.</li>
      </ul>
    </div>
  );
};

export default About;
