import React from 'react';

const Home = () => {
  return (
    <div className="p-6">

      {/* Hero Section */}
      <section className="hero-section relative flex items-center justify-center text-center text-white">
        <div className="hero-overlay"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold leading-tight mb-4 drop-shadow-lg">Welcome to Cricket Turf</h1>
          <p className="text-xl mb-6 drop-shadow-md">Play the game with passion on a world-class cricket pitch.</p>
          <a href="/services" className="bg-blue-600 py-3 px-8 text-2xl text-white rounded-lg shadow-lg hover:bg-blue-700">Book Your Slot</a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-12 grid md:grid-cols-2 gap-12">
        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-3">World-Class Facilities</h3>
          <p>Our state-of-the-art cricket turf is designed to offer the best experience for players of all levels. High-quality pitch, floodlights, and top-notch equipment await you.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-3">Convenient Location</h3>
          <p>Located in the heart of the city, our facility is easily accessible, with ample parking and surrounding green spaces. Play at your convenience!</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-12 bg-gray-50 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Premium Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-4">Top-Quality Turf</h4>
            <p className="text-lg">Our pitches are meticulously maintained for the best playing experience. Whether it's practice or tournaments, you can trust the quality.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-4">Floodlight Facility</h4>
            <p className="text-lg">Enjoy playing under the lights with our state-of-the-art floodlighting system, perfect for evening matches or tournaments.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-semibold mb-4">Coaching Services</h4>
            <p className="text-lg">Get trained by professional coaches to take your game to the next level. We offer sessions for all levels, from beginners to advanced players.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-12 bg-white py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">What Our Players Say</h2>
        <div className="space-y-6">
          <blockquote className="italic text-lg text-gray-700 mx-auto max-w-3xl">
            "Absolutely amazing facility! The pitch is top-notch, and the coaching sessions have helped improve my game significantly." – John D.
          </blockquote>
          <blockquote className="italic text-lg text-gray-700 mx-auto max-w-3xl">
            "Great atmosphere, and the floodlights make evening matches so much more enjoyable. Highly recommend!" – Sarah L.
          </blockquote>
        </div>
      </section>

      {/* Latest Events */}
      <section className="mt-12 bg-gray-50 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Cricket Tournament</h3>
            <p className="text-lg mb-2">Join our annual cricket tournament, a fun and competitive event for players of all skill levels.</p>
            <p className="text-lg mb-2"><strong>Date:</strong> December 15, 2024</p>
            <p className="text-lg mb-2"><strong>Time:</strong> 10:00 AM onwards</p>
            <a href="/contact" className="text-blue-600 hover:underline">Register Now</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Coaching Camp</h3>
            <p className="text-lg mb-2">Our coaching camp is perfect for those who want to improve their skills with the help of professional coaches.</p>
            <p className="text-lg mb-2"><strong>Date:</strong> November 25, 2024</p>
            <p className="text-lg mb-2"><strong>Time:</strong> 9:00 AM – 4:00 PM</p>
            <a href="/contact" className="text-blue-600 hover:underline">Sign Up</a>
          </div>
        </div>
      </section>

      {/* Timings Section */}
      <section className="mt-12 bg-white py-12">
        <h2 className="text-2xl font-semibold mb-4">Our Opening Hours</h2>
        <p className="text-lg mb-4">We are open every day, ensuring you have ample time to book and play. Here's when you can join us:</p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>Monday - Friday:</strong> 6:00 AM – 10:00 PM</li>
          <li><strong>Saturday - Sunday:</strong> 6:00 AM – 10:00 PM</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="mt-12 bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Play?</h2>
        <p className="text-lg mb-6">Get your game on at our top-tier cricket facility. Book a slot today and experience the best cricket turf in town.</p>
        <a href="/services" className="bg-white text-blue-600 py-3 px-8 text-2xl rounded-lg shadow-lg hover:bg-gray-100">Book Now</a>
      </section>

    </div>
  );
};

export default Home;
