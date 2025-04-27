import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

function Header({ isLoggedIn, setIsLoggedIn, username, handleLogout }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchQuery('');
    setSearchResults([]);
  }, [location.pathname]);

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  if (isAuthPage) return null;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onLogout = () => {
    handleLogout();
    setIsDropdownOpen(false);
    navigate('/');
  };

  const handleSearch = async (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/search?q=${query}`);
      const { businesses, products } = res.data;
      const results = [];

      businesses.forEach((b) => {
        results.push({ type: 'business', name: b.name, link: `/business/${b.id}/products` });
      });
      products.forEach((p) => {
        const biz = businesses.find(b => b.id === p.businessId);
        results.push({ type: 'product', name: p.name, businessName: biz?.name || 'Unknown', link: `/business/${p.businessId}/products` });
      });

      setSearchResults(results);
    } catch (err) {
      console.error('Search failed:', err.message);
    }
  };

  const handleResultClick = (link) => {
    setSearchQuery('');
    setSearchResults([]);
    navigate(link);
  };

  return (
    <header className="w-full bg-[#F5F5DC] py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between px-4 gap-4 items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="EDU Startups Logo" className="w-10 h-10 md:w-12 md:h-12" />
          <div className="ml-2 flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold font-poppins text-[#000000] leading-tight">EDU</h1>
            <h1 className="text-xl md:text-2xl font-bold font-poppins text-[#000000] leading-tight">Startups</h1>
          </div>
        </Link>

        {/* Search + User Section */}
        {isLoggedIn ? (
          <div className="flex flex-col md:flex-row md:items-center w-full gap-4 md:gap-0 items-center">
            {/* Search Box (Centered on medium screens) */}
            <div className="w-full md:w-[500px] md:mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products or Business"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-14 pr-4 py-3 rounded-lg bg-white text-black text-base md:text-lg font-poppins font-bold focus:outline-none focus:ring-2 focus:ring-[#3D0301]"
                />
                <svg className="w-6 h-6 absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchResults.length > 0 && (
                  <div className="absolute top-14 left-0 w-full bg-[#F5F5DC] rounded-lg shadow-lg max-h-80 overflow-y-auto z-10">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        onClick={() => handleResultClick(result.link)}
                        className="p-3 border-b border-gray-300 hover:bg-[#3D0301] hover:text-white cursor-pointer transition"
                      >
                        <p className="text-sm md:text-base font-bold font-poppins">
                          {result.type === 'business' ? result.name : `${result.name} (Product)`}
                        </p>
                        <p className="text-xs">{result.type}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* User Dropdown (Right on medium screens, centered on small screens) */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center bg-[#3D0301] text-white font-bold font-poppins px-4 py-2.5 rounded-lg hover:bg-[#6B1532] text-base md:text-lg" // Reduced padding to py-2 to make the button slightly shorter
              >
                {username || 'User'}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#3D0301] rounded-lg shadow-lg z-10">
                  <button
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2.5 text-white font-poppins font-bold text-sm hover:bg-[#6B1532] rounded-lg transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login">
              <button className="text-[#000000] font-bold font-poppins mt-2 text-sm md:text-lg hover:text-[#6B1532]">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-[#3D0301] text-white px-4 py-2 rounded-lg font-bold font-poppins hover:bg-[#6B1532] text-sm md:text-lg transition">
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