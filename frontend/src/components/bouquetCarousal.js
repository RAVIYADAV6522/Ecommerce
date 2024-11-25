import React from 'react';
import { Carousel } from 'primereact/carousel';
import { useNavigate } from 'react-router-dom';

const BouquetCarousel = ({ bouquets }) => {
  const navigate = useNavigate();

  const responsiveOptions = [
    { breakpoint: '1200px', numVisible: 5, numScroll: 1 }, // For large screens
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 }, // Medium screens
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },  // Tablets
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },  // Small screens
  ];

  const bouquetTemplate = (bouquet) => (
    <div
      className="p-4 flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/bouquets/${bouquet.id}`)}
      style={{ gap: '0px', position: 'relative', top: '16px' }}
    >
      {/* Image Styling */}
      <div
        className="border rounded-lg overflow-hidden"
        style={{
          width: '192px',
          height: '228px',
          borderRadius: '8px 8px 8px 0px',
          backgroundColor: 'white', // Optional for background consistency
        }}
      >
        <img
          src={bouquet.imageUrl}
          alt={bouquet.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Bouquet Name Styling */}
      <div className="text-center mt-2">
        <h3
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'black', // Text in black
          }}
        >
          {bouquet.name}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-left px-8">Birthdays</h2>
      <Carousel
        value={bouquets}
        numVisible={5} // Show 5 items by default
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={bouquetTemplate}
        circular
        autoplayInterval={4000}
      />
    </div>
  );
};

export default BouquetCarousel;
