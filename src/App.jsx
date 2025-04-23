import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './HomePage/Header.jsx';
import Hero from './HomePage/Hero.jsx';
import Login from './LoginPage/Login.jsx';
import SignUp from './SignUpPage/SignUp.jsx';
import Businesses from './BusinessesPage/Businesses.jsx';
import Products from './ProductsPage/Products.jsx';
import AboutUs from './AboutUsPage/AboutUs.jsx';

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
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;