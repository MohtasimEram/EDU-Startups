import React from 'react';

// Placeholder images for team members (replace with actual images)
const teamMembers = [
  {
    name: 'Mohtasim Eram',
    role: 'Frontend Developer',
    image: 'https://via.placeholder.com/150', // Replace with actual image path
  },
  {
    name: 'Tafsir Juhan',
    role: 'Backend Developer',
    image: 'https://via.placeholder.com/150', // Replace with actual image path
  },
  {
    name: 'Md. Irfan Ullah',
    role: 'Database',
    image: 'https://via.placeholder.com/150', // Replace with actual image path
  },
  {
    name: 'Nafisa Tabassum',
    role: 'Hosting',
    image: 'https://via.placeholder.com/150', // Replace with actual image path
  },
];

function AboutUs() {
  return (
    <section className="w-full bg-[#F5F5DC] min-h-screen py-16 flex flex-col items-center">
      {/* Title with Horizontal Lines */}
      <div className="flex items-center justify-center w-full max-w-7xl mb-12">
        <div className="flex-1 h-px bg-black"></div>
        <h2 className="text-3xl font-poppins font-bold mx-4">About Us</h2>
        <div className="flex-1 h-px bg-black"></div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Team Member Photo */}
              <div className="w-45 h-45 rounded-full bg-gray-200 mb-5 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Team Member Name and Role in the Same Box */}
              <div className="bg-[#3D0301] text-white px-5 py-4 rounded-lg text-center">
                <h3 className="text-2xl font-poppins font-bold mb-1">{member.name}</h3>
                <p className="text-xl font-poppins">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <h3 className="text-4xl font-poppins font-bold mb-8">
          Want your business to get listed?
        </h3>
        <p className="text-3xl font-bold font-poppins mb-10">We’ll do it for you</p>
        <a
          href="mailto:mohtasimeram73@gmail.com"
          className="bg-[#3D0301] text-white font-poppins font-bold text-[22px] px-6 py-3 rounded-lg hover:bg-[#6B1532] transition"
        >
          Contact Now
        </a>
      </div>
    </section>
  );
}

export default AboutUs;