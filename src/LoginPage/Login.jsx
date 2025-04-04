import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn, setUsername }) {
  const navigate = useNavigate();
  const [formUsername, setFormUsername] = useState(''); // Local state for username input

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted'); // Debug log
    setIsLoggedIn(true); // Update login state
    setUsername(formUsername); // Update username state in App.jsx
    console.log('isLoggedIn set to true, username:', formUsername); // Debug log
    navigate('/'); // Redirect to homepage
  };

  return (
    <section className="w-full bg-[#F5F5DC] min-h-screen flex items-center justify-center py-16">
      <div className="bg-[#B03052] p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold font-poppins text-white text-center mb-10">Login</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Username"
              value={formUsername}
              onChange={(e) => setFormUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white font-bold font-poppins text-black focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white font-bold font-poppins text-black focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#3D0301] text-white px-4 py-3 mt-3 rounded-lg hover:bg-[#6B1532] transition font-bold font-poppins"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;