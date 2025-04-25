import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [business, setBusiness] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/sellers`)
      .then(res => {
        const found = res.data.find((b) => b.pageName === id);
        setBusiness(found || null);
      });

    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/sellers/${id}/items`)
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, [id]);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

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

  if (!business) {
    return <h2 className="text-2xl text-center font-bold py-20">Business Not Found</h2>;
  }

  return (
    <section className="w-full bg-[#F5F5DC] min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold font-poppins text-center mb-8">Products from {business.pageName}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product, index) => (
            <div key={index} className="bg-[#B03052] text-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={product.image} alt={product.productName} className="w-24 h-24 mb-4 rounded-full object-cover" />
              <h3 className="text-xl font-bold mb-2">{product.productName}</h3>
              <a href={product.buyLink || business.facebookPage} target="_blank" rel="noopener noreferrer" className="bg-[#3D0301] text-white px-4 py-2 rounded-lg hover:bg-[#6B1532] transition">Click to Buy</a>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)} className={`px-4 py-2 rounded-lg font-bold ${currentPage === i + 1 ? 'bg-[#3D0301] text-white' : 'bg-gray-300 text-black'}`}>
              {i + 1}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-lg">
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;
