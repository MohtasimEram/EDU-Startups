import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as needed

function Header() {
  return (
    <header className="w-full bg-[#F5F5DC] py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={logo} alt="EDU Startups Logo" className="w-12 h-12" />
          <div className="ml-2 flex flex-col">
            <h1 className="text-2xl pl-2 font-poppins font-bold text-[#000000] leading-none">EDU</h1>
            <h1 className="text-2xl pl-2 font-poppins font-bold text-[#000000] leading-none">Startups</h1>
          </div>
        </div>
        {/* Login/Register Buttons */}
        <div className="space-x-4">
          <a href="login.html" className="text-[#000000] font-poppins font-bold font-size-25 hover:text-[#6B1532]">
            Login
          </a>
          <a href="register.html" className="bg-[#3D0301] font-poppins font-bold font-size-25 text-white px-4 py-2 rounded-lg hover:bg-[#6B1532] transition">
            Register
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;