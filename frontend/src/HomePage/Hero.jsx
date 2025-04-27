import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image2.png';

function Hero() {
  return (
    <section className="w-full bg-[#B03052] min-h-screen flex items-center justify-center px-4 py-12">
      {/* Container with default width */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start mb-8 md:mb-0 px-4">
          <h1 className="text-4xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight">
            EDU Startups
          </h1>
          <p className="text-2xl md:text-3xl font-bold font-poppins text-white mb-8">
            A place to find all the entrepreneurs of East Delta University in one place.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6">
            <Link
              to="/businesses"
              className="bg-[#3D0301] text-white px-6 py-3 rounded-lg hover:bg-[#6B1532] font-bold font-poppins text-sm md:text-lg transition"
            >
              Browse Businesses
            </Link>
            <Link
              to="/about-us"
              className="bg-[#EBE8DB] text-black px-6 py-3 rounded-lg hover:bg-[#E5E5C5] font-bold font-poppins text-sm md:text-lg transition"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroImage}
            alt="Entrepreneurs working"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>
        
      </div>
    </section>
  );
}

export default Hero;