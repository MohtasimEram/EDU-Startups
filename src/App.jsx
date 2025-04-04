import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './HomePage/Header.jsx';
import Hero from './HomePage/Hero.jsx';
import Login from './LoginPage/login.jsx';
import SignUp from './SignUpPage/SignUp.jsx';
import HomeAfterLogin from './HomeAfterLogin/HomeAfterLogin.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state

  return (
    <Router>
      <div className="min-h-screen">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <HomeAfterLogin /> : <Hero />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;