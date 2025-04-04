import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as needed

function Header({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation(); // Get the current route

  // Check if the current route is login or signup
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  // If on login or signup page, hide the header

  return (
    <header className="w-full bg-[#F5F5DC] py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo and Title */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="EDU Startups Logo" className="w-12 h-12" />
            <div className="ml-2 flex flex-col">
              <h1 className="text-2xl pl-2 font-poppins font-bold text-[#000000] leading-none">EDU</h1>
              <h1 className="text-2xl pl-2 font-poppins font-bold text-[#000000] leading-none">Startups</h1>
            </div>
          </div>
        </Link>

        {/* Conditional Rendering Based on Login State */}
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search Products or Business"
                className="w-full px-4 py-2 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D0301]"
              />
            </div>
            {/* Profile Button */}
            <button className="bg-[#3D0301] font-poppins font-bold text-[25px] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#6B1532] transition">
              <span>Mohtasim Eram</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login">
              <button className="text-[#000000] font-poppins font-bold text-[20px] hover:text-[#6B1532]">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-[#3D0301] font-poppins font-bold text-[20px] text-white px-4 py-2 rounded-lg hover:bg-[#6B1532] transition">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;