import React from 'react';
import heroImage from '../assets/hero-image2.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-[#F5F5DC] py-10 md:py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D0301] leading-tight font-poppins mb-6">
            Discover and Support <br className="hidden md:block" /> EDU Startups
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 font-poppins mb-6">
            A Place to find all the entrepreneurs of East Delta Univesrity in one place
          </p>
          <Link to="/businesses">
            <button className="bg-[#3D0301] hover:bg-[#6B1532] text-white text-lg font-bold font-poppins px-6 py-3 rounded-lg transition">
              Browse Businesses
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Student Startups"
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
