import React from 'react';

const Services = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li><strong>Booking:</strong> Book our cricket turf for practice or tournaments.</li>
        <li><strong>Coaching:</strong> We offer professional coaching sessions for all levels.</li>
        <li><strong>Equipment Rental:</strong> Rent cricket gear and equipment at affordable prices.</li>
        <li><strong>Tournaments:</strong> Participate in exciting cricket tournaments hosted on our turf.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 mt-8">How to Book</h2>
      <p className="text-lg">To book a slot, simply <a href="/contact" className="underline">contact us</a> with your preferred date and time, and we will reserve it for you!</p>
    </div>
  );
};

export default Services;
