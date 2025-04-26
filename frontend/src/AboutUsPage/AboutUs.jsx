import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutUs() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/about`);
        setTeamMembers(res.data);
      } catch (err) {
        console.error("Failed to fetch About Us data:", err);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <section className="w-full bg-[#F5F5DC] min-h-screen py-16 flex flex-col items-center">
      
      {/* Title */}
      <div className="flex items-center justify-center w-full max-w-7xl mb-12 px-4">
        <div className="flex-1 h-px bg-black hidden sm:block"></div>
        <h2 className="text-3xl font-bold font-poppins mx-4">About Us</h2>
        <div className="flex-1 h-px bg-black hidden sm:block"></div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto px-4 w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#3D0301] text-white text-center rounded-lg px-4 py-3 w-full">
                <h3 className="text-lg md:text-2xl font-bold font-poppins">{member.name}</h3>
                <p className="text-sm md:text-lg font-poppins">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center px-4">
        <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Want your business to get listed?</h3>
        <p className="text-2xl md:text-3xl font-bold font-poppins mb-8">We’ll do it for you</p>
        <a href="mailto:231012712@eastdelta.edu.bd, mohtasimeram73@gmail.com" 
           className="bg-[#3D0301] text-white text-lg md:text-2xl font-poppins font-bold px-6 py-3 rounded-lg hover:bg-[#6B1532] transition">
          Contact Now
        </a>
      </div>
    </section>
  );
}

export default AboutUs;
