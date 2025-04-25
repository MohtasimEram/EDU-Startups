import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutUs() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/about`)
      .then(res => setTeamMembers(res.data))
      .catch(err => console.error("Error fetching team data:", err));
  }, []);

  return (
    <section className="w-full bg-[#F5F5DC] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-poppins">About Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-gray-200">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#3D0301] text-white px-5 py-4 rounded-lg w-full">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Want your business to get listed?</h3>
          <a href="mailto:231012712@eastdelta.edu.bd,mohtasimeram73@gmail.com" className="bg-[#3D0301] text-white font-poppins font-bold text-[18px] px-6 py-3 rounded-lg hover:bg-[#6B1532] transition">
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
