// src/components/Hero.js
import React from 'react';
import Slider from "react-slick";  // You can use a popular package like react-slick for the slider

// Sample images for your hero section
const images = [
  'https://via.placeholder.com/1200x500/FF5733/FFFFFF?text=Cricket+Turf+Facilities',
  'https://via.placeholder.com/1200x500/33A1FF/FFFFFF?text=Book+Your+Slot+Now',
  'https://via.placeholder.com/1200x500/FFBD33/FFFFFF?text=Upcoming+Events'
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="w-full h-96 relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="w-full h-full">
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">Welcome to Our Cricket Turf</h1>
      </div>
    </section>
  );
};

export default Hero;
