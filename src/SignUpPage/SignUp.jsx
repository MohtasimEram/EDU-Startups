import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({ setIsLoggedIn, setUsername }) {
  const navigate = useNavigate();
  const [formUsername, setFormUsername] = useState(''); // Local state for username input

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SignUp form submitted'); // Debug log
    setIsLoggedIn(true); // Update login state
    setUsername(formUsername); // Update username state in App.jsx
    console.log('isLoggedIn set to true, username:', formUsername); // Debug log
    navigate('/'); // Redirect to homepage
  };

  return (
    <section className="w-full bg-[#F5F5DC] min-h-screen flex items-center justify-center py-16">
      <div className="bg-[#B03052] p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold font-poppins text-white text-center mb-8">Create Your Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={formUsername}
              onChange={(e) => setFormUsername(e.target.value)}
              className="w-full px-4 py-3 font-bold font-poppins rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 font-bold font-poppins rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 font-bold font-poppins rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#3D0301] mt-4 text-white px-4 py-3 rounded-lg hover:bg-[#6B1532] transition font-bold font-poppins"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;