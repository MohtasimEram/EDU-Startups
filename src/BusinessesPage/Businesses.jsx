import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample business data (this would typically come from a backend API)
const businesses = [
  {
    id: 1,
    name: 'CryoTech',
    logo: '../assets/Businesses/logo1.png', // Replace with actual logo URL
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
  // Add more businesses to simulate multiple pages
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

function Businesses() {
  const businessesPerPage = 6; // 6 businesses per page (as shown in your layout)
  const totalPages = Math.ceil(businesses.length / businessesPerPage); // Calculate total pages
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  // Calculate the businesses to display on the current page
  const startIndex = (currentPage - 1) * businessesPerPage;
  const endIndex = startIndex + businessesPerPage;
  const currentBusinesses = businesses.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  // Handle "Next Page" button
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0); // Scroll to top when changing pages
    }
  };

  return (
    <section className="w-full bg-[#F5F5DC] min-h-screen py-8 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 flex-1">
        {/* Title */}
        <h2 className="text-3xl font-poppins font-bold text-center mb-8">Businesses</h2>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBusinesses.map((business) => (
            <div
              key={business.id}
              className="bg-[#B03052] rounded-lg shadow-lg py-10 px-25 flex flex-col items-center"
            >
              {/* Business Logo */}
              <img
                src={business.logo}
                alt={`${business.name} Logo`}
                className="w-24 h-24 mb-4"
              />
              {/* Business Name */}
              <h3 className="text-3xl font-poppins font-bold text-white mb-5 pt-5">{business.name}</h3>
              {/* Social Links */}
              <div className="flex space-x-5 mb-5">
                <a href={business.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href={business.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.052.072 5.766.132 4.326.398 3.001 1.723 1.676 3.048 1.41 4.488 1.35 5.774c-.059 1.28-.072 1.683-.072 4.948s.013 3.668.072 4.948c.06 1.286.326 2.726 1.651 4.051 1.325 1.325 2.765 1.591 4.051 1.651 1.28.059 1.683.072 4.948.072s3.668-.013 4.948-.072c1.286-.06 2.726-.326 4.051-1.651 1.325-1.325 1.591-2.765 1.651-4.051.059-1.28.072-1.683.072-4.948s-.013-3.668-.072-4.948c-.06-1.286-.326-2.726-1.651-4.051-1.325-1.325-2.765-1.591-4.051-1.651-1.28-.059-1.683-.072-4.948-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
                <a href={business.socialLinks.website} target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 3.055A12 12 0 0121 12a12 12 0 01-17.945 8.945A12 12 0 013.055 3.055zM12 3a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9zm-5 9a5 5 0 015-5 5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5z"
                    />
                  </svg>
                </a>
                <a href={business.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.108.55 4.19 1.598 6.008L0 24l6.15-1.598A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.001a9.95 9.95 0 01-5.092-1.404l-.355-.21-3.65.95.966-3.55-.21-.355a9.95 9.95 0 01-1.404-5.092c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.618-4.92c-.31-.155-1.84-.905-2.126-.998-.287-.094-.496-.102-.705.102-.21.204-.81.998-.996 1.202-.186.204-.372.204-.682.102-.31-.102-1.302-.403-2.48-1.287-1.178-.884-1.972-1.972-2.178-2.282-.204-.31-.021-.48.155-.682.176-.204.372-.465.558-.697.186-.232.248-.403.372-.682.124-.28.062-.465-.031-.697-.094-.232-.836-2.015-.836-2.015s-.31-.094-.527-.094c-.217 0-.465.031-.682.155-.217.124-1.302.403-1.302 1.302 0 .899.682 1.798 1.054 1.972.372.174 2.178 2.356 5.28 3.704 3.102 1.348 3.102.899 3.478.682.372-.217.744-.899.836-1.302.094-.403-.031-.744-.341-.899z" />
                  </svg>
                </a>
              </div>
              {/* View Products Button */}
              <Link to={`/business/${business.id}/products`}>
                <button className="bg-[#3D0301] text-white font-poppins font-bold text-[20px] px-4 py-2 rounded-lg hover:bg-[#6B1532] transition">
                  View Products
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination - Fixed to Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#F5F5DC] py-4">
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 font-poppins font-bold rounded-lg ${
                currentPage === index + 1
                  ? 'bg-[#3D0301] text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 font-poppins font-bold rounded-lg flex items-center ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-black'
            }`}
          >
            Next Page
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Businesses;