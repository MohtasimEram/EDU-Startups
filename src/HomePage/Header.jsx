import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as needed

// Sample business and product data (this would typically come from a backend API)
const businesses = [
  {
    id: 1,
    name: 'CryoTech',
    logo: '../assets/Businesses/logo1.png',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 2,
    name: 'Waves & Co.',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 3,
    name: 'Scentique',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 4,
    name: 'M. Bake',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 5,
    name: 'Sugar Castle',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 6,
    name: 'Nazarts',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 7,
    name: 'TechTrend',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 8,
    name: 'EcoVibe',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 9,
    name: 'GlowUp',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 10,
    name: 'ArtisanHub',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 11,
    name: 'FreshStart',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
  {
    id: 12,
    name: 'InnovateNow',
    logo: 'https://via.placeholder.com/150',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      website: 'https://example.com',
      whatsapp: 'https://whatsapp.com',
    },
  },
];

const businessProducts = {
  1: [
    { id: 1, name: 'JEDEL KL-114 Mechanical Keyboard', price: '2550 BDT', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'FANTECH WHO2P TRI-Connection Wireless', price: '5999 BDT', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'FANTECH WK895 Wireless Mouse & Keyboard Combo', price: '1600 BDT', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'JEDEL KL-114 Mechanical Keyboard', price: '2550 BDT', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'JEDEL KL-114 Mechanical Keyboard', price: '2550 BDT', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'JEDEL KL-114 Mechanical Keyboard', price: '2550 BDT', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'JEDEL KL-114 Mechanical Keyboard', price: '2550 BDT', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'FANTECH WHO2P TRI-Connection Wireless', price: '5999 BDT', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'FANTECH WK895 Wireless Mouse & Keyboard Combo', price: '1600 BDT', image: 'https://via.placeholder.com/150' },
  ],
  2: [
    { id: 1, name: 'Waves Headphones', price: '3500 BDT', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Waves Wireless Speaker', price: '4500 BDT', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Waves Earbuds', price: '2000 BDT', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Waves Headphones', price: '3500 BDT', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Waves Wireless Speaker', price: '4500 BDT', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Waves Earbuds', price: '2000 BDT', image: 'https://via.placeholder.com/150' },
  ],
};

function Header({ isLoggedIn, setIsLoggedIn, username, handleLogout }) {
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // For redirecting after logout
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [searchResults, setSearchResults] = useState([]); // State for search results

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

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Search businesses and products
    const results = [];

    // Search businesses
    const businessMatches = businesses.filter((business) =>
      business.name.toLowerCase().includes(query)
    );
    businessMatches.forEach((business) => {
      results.push({
        type: 'business',
        id: business.id,
        name: business.name,
        link: `/business/${business.id}/products`, // Navigate directly to products page
      });
    });

    // Search products
    Object.keys(businessProducts).forEach((businessId) => {
      const products = businessProducts[businessId];
      const productMatches = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      const business = businesses.find((b) => b.id === parseInt(businessId));
      productMatches.forEach((product) => {
        results.push({
          type: 'product',
          id: product.id,
          name: product.name,
          businessName: business ? business.name : 'Unknown Business',
          link: `/business/${businessId}/products`,
        });
      });
    });

    setSearchResults(results);
  };

  // Handle clicking a search result
  const handleResultClick = (link) => {
    setSearchQuery('');
    setSearchResults([]);
    navigate(link);
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
                value={searchQuery}
                onChange={handleSearch}
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
              {/* Search Results Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute top-14 left-0 w-full bg-[#F5F5DC] rounded-lg shadow-lg max-h-96 overflow-y-auto z-10">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      onClick={() => handleResultClick(result.link)}
                      className="p-4 border-b border-gray-300 hover:bg-[#3D0301] hover:text-white cursor-pointer transition"
                    >
                      <p className="text-lg font-poppins font-bold">
                        {result.type === 'business' ? result.name : `${result.name} (from ${result.businessName})`}
                      </p>
                      <p className="text-sm font-poppins">
                        {result.type === 'business' ? 'Business' : 'Product'}
                      </p>
                    </div>
                  ))}
                </div>
              )}
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