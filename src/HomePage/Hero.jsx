import React from 'react';
import heroImage from '../assets/hero-image2.png'; // Adjust the path as needed

function Hero() {
  return (
    <section className="w-full bg-[#B03052] min-h-screen flex items-stretch">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch px-4 w-full">
        {/* Left Side: Text (aligned to the left and vertically centered) */}
        <div className="md:w-1/2 text-white pl-0 md:pl-0 flex flex-col justify-center">
          <h1 className="text-7xl font-bold font-poppins mb-6">EDU Startups</h1>
          <p className="text-3xl font-bold font-poppins mb-8">
            A place to find all EDU entrepreneurs in one place.
          </p>
          <div className="space-x-4">
            <a href="businesses.html" className="bg-[#3D0301] text-white px-6 py-3 rounded-lg hover:bg-[#6B1532] transition font-bold font-poppins">
              Browse Businesses
            </a>
            <a href="aboutUs.html" className="bg-[#EBE8DB] text-[#000000] px-6 py-3 rounded-lg hover:bg-[#E5E5C5] transition font-bold font-poppins">
              About Us
            </a>
          </div>
        </div>
        {/* Right Side: Image (covering full height) */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-auto flex items-stretch">
          <img
            src={heroImage}
            alt="Two entrepreneurs with a laptop"
            className="w-full h-screen object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;