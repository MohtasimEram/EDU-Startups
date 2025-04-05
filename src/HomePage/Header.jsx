import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as needed

function Header({ isLoggedIn, setIsLoggedIn, username, handleLogout }) {
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // For redirecting after logout
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  // Check if the current route is login or signup
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  // If on login or signup page, hide the header
  if (isAuthPage) {
    return null;
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onLogout = () => {
    handleLogout(); // Call the logout function from App.jsx
    setIsDropdownOpen(false); // Close the dropdown
    navigate('/'); // Redirect to homepage
  };

  return (
    <header className="w-full bg-[#F5F5DC] py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo and Title */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="EDU Startups Logo" className="w-12 h-12" />
            <div className="ml-2 flex flex-col">
              <h1 className="text-2xl pl-2 font-poppins font-bold text-[#000000] leading-none">EDU</h1>
              <h1 className="text-2xl pl-2 font-poppins font-bold text-[# 000000] leading-none">Startups</h1>
            </div>
          </div>
        </Link>

        {/* Conditional Rendering Based on Login State */}
        {isLoggedIn ? (
          <div className="flex-1 flex items-center relative">
            {/* Search Bar with Icon */}
            <div className="w-full max-w-lg mx-auto relative">
              <input
                type="text"
                placeholder="Search Products or Business"
                className="w-full pl-12 pr-6 py-3 rounded-lg bg-white text-black text-lg font-poppins font-bold focus:outline-none focus:ring-2 focus:ring-[#3D0301]"
              />
              {/* Search Icon */}
              <svg
                className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {/* Profile Button with Dropdown */}
            <div className="relative ml-4">
              <button
                onClick={toggleDropdown}
                className="bg-[#3D0301] font-poppins font-bold text-[20px] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#6B1532] transition"
              >
                <span>{username || 'User'}</span>
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
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#3D0301] rounded-lg shadow-lg z-10">
                  <button
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 text-white font-poppins font-bold text-[16px] hover:bg-[#6B1532] transition rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
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