import React, { useState, useEffect } from 'react';
import BouquetCarousel from '../../components/bouquetCarousal';
import banner from '../../images/boquetBanner.jpg'

const BouquetPage = () => {
  const [bouquets, setBouquets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchBouquets = async () => {
      try {
        console.log(1);
        const response = await fetch('https://zuveesbackend.onrender.com/api/products');
        console.log(2);
        const data = await response.json();

        
        const filteredBouquets = data.filter((product) => product.categoryId === 1);
        setBouquets(filteredBouquets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBouquets();
  }, []);

  if (loading) {
    return <div className="text-center p-6">Loading bouquets...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
        <img src={banner} alt='banner' className='w-[1152px] top-[192px] m-auto'/>
    
      <BouquetCarousel bouquets={bouquets} />
    </div>
  );
};

export default BouquetPage;
