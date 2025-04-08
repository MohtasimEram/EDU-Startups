import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './HomePage/Header.jsx';
import Hero from './HomePage/Hero.jsx';
import Login from './LoginPage/Login.jsx';
import SignUp from './SignUpPage/SignUp.jsx';
import Businesses from './BusinessesPage/Businesses.jsx';
import Products from './ProductsPage/Products.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
  const [username, setUsername] = useState(''); // Store the username

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    setUsername(''); // Reset username
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          username={username}
          handleLogout={handleLogout}
        />
        <Routes>
          {/* Use Hero component for homepage regardless of login state */}
          <Route path="/" element={<Hero />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />}
          />
          <Route
            path="/signup"
            element={<SignUp setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />}
          />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/business/:id/products" element={<Products />} />
          {/* Placeholder for About Us page */}
          <Route
            path="/about-us"
            element={
              <div className="w-full bg-[#F5F5DC] min-h-screen flex items-center justify-center py-16">
                <h2 className="text-3xl font-poppins font-bold">About Us Page (To Be Built)</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;