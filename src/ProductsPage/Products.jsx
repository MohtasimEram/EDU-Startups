import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Sample product data for each business (this would typically come from a backend API)
const businessProducts = {
  1: [
    { id: 1, name: 'JEDEL KL-114 Mechanical Keyboard', price: '2550 BDT', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'FANTECH WHO2P TRI-Connection Wireless', price: '5999 BDT', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'FANTECH WK895 Wireless Mouse & Keyboard Combo', price: '1600 BDT', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'JEDEL KL-114 Mechanical Keyboard', price: '2550 BDT', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'JEDEL KL-114 Mechanical Keyboard', price: '2550 BDT', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'JEDEL KL-114 Mechanical Keyboard', price: '2550 BDT', image: 'https://via.placeholder.com/150' },
    // Add more products to simulate pagination
    { id: 7, name: 'JEDEL KL-114 Mechanical Keyboard', price: '2550 BDT', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'FANTECH WHO2P TRI-Connection Wireless', price: '5999 BDT', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'FANTECH WK895 Wireless Mouse & Keyboard Combo', price: '1600 BDT', image: 'https://via.placeholder.com/150' },
  ],
  2: [
    { id: 1, name: 'Waves Headphones', price: '3500 BDT', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Waves Wireless Speaker', price: '4500 BDT', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Waves Earbuds', price: '2000 BDT', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Waves Headphones', price: '3500 BDT', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Waves Wireless Speaker', price: '4500 BDT', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Waves Earbuds', price: '2000 BDT', image: 'https://via.placeholder.com/150' },
  ],
  // Add more businesses as needed
};

// Sample business data to get social links (this would typically come from a backend API)
const businesses = [
  {
    id: 1,
    name: 'CryoTech',
    logo: '../assets/Businesses/logo1.png',
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

function Products() {
  const { id } = useParams(); // Get the business ID from the URL
  const businessId = parseInt(id); // Convert to integer
  const products = businessProducts[businessId] || []; // Get products for the business
  const business = businesses.find((b) => b.id === businessId); // Get business data for social links

  const productsPerPage = 6; // 6 products per page (as shown in the layout)
  const totalPages = Math.ceil(products.length / productsPerPage); // Calculate total pages
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  // Calculate the products to display on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

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

  if (!business) {
    return (
      <div className="w-full bg-[#F5F5DC] min-h-screen flex items-center justify-center py-16">
        <h2 className="text-3xl font-poppins font-bold">Business Not Found</h2>
      </div>
    );
  }

  return (
    <section className="w-full bg-[#F5F5DC] min-h-screen py-8 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 flex-1">
        {/* Title */}
        <h2 className="text-3xl font-poppins font-bold text-center mb-8">Products</h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#B03052] rounded-lg shadow-lg p-10 flex flex-col items-center"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 mb-4"
              />
              {/* Product Name */}
              <h3 className="text-xl font-poppins font-bold text-white mb-2 text-center">{product.name}</h3>
              {/* Product Price */}
              <p className="text-lg font-poppins font-bold text-white mb-4">{product.price}</p>
              {/* Buy Now Button */}
              <a
                href={business.socialLinks.facebook} // Redirect to the business's Facebook page
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3D0301] text-white font-poppins font-bold text-[20px] px-4 py-2 rounded-lg hover:bg-[#6B1532] transition"
              >
                Buy Now
              </a>
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

export default Products;