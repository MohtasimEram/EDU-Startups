import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Businesses() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const businessesPerPage = 6;

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/sellers`)
      .then(res => {
        setBusinesses(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching businesses:", err);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(businesses.length / businessesPerPage);
  const currentBusinesses = businesses.slice((currentPage - 1) * businessesPerPage, currentPage * businessesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="w-full bg-[#F5F5DC] min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center font-poppins mb-8">Our Startups</h2>
        {loading ? (
          <p className="text-center text-xl">Loading...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentBusinesses.map((biz) => (
                <div key={biz._id} className="bg-[#B03052] rounded-lg shadow-lg p-6 flex flex-col items-center text-white">
                  <img src={biz.logoUrl} alt={biz.pageName} className="w-24 h-24 rounded-full object-cover mb-4" />
                  <h3 className="text-xl font-bold mb-2">{biz.pageName}</h3>
                  <p className="text-sm mb-4 text-center">{biz.category}</p>
                  <Link to={`/business/${biz.pageName}/products`}>
                    <button className="bg-[#3D0301] px-4 py-2 rounded-lg hover:bg-[#6B1532] transition">View Products</button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} onClick={() => handlePageChange(i + 1)} className={`px-4 py-2 rounded-lg font-poppins font-bold ${currentPage === i + 1 ? 'bg-[#3D0301] text-white' : 'bg-gray-300 text-black'}`}>
                  {i + 1}
                </button>
              ))}
              <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-black">
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Businesses;
