import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    '../images/oracle.png',
    '../images/modex.png',
    '../images/westerdigital.png',
    '../images/witfoo.png',
    '../images/logzilla.png',
    '../images/morphix.png',
    '../images/reversinglabs.png',
    '../images/ids-international.png',
    '../images/eolian.png',
    '../images/validize.png',
    '../images/securestrux.png',
    '../images/countercraft.png',
    '../images/codehunter-e1673637888478.png',
    '../images/cybermyte-1.png',
    '../images/sightgain.png',
    '../images/uki.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  const currentImages = images.slice(currentIndex, currentIndex + 4);

  return (
    <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Partners</h2>
      <div
        className="slider"
        style={{
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          gap: '20px',
          // border: '2px solid black',
          padding: '10px',
          borderRadius: '10px',
          maxWidth: '90%',
          margin: '0 auto',
        }}
      >
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${currentIndex + index + 1}`}
            style={{
              width: '150px',
              height: '80px',
              borderRadius: '10px',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              objectFit: 'cover', // Ensures consistent size by cropping excess
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .slider {
            flex-wrap: wrap;
            gap: 10px;
          }
          img {
            width: 120px;
            height: 60px;
          }
        }
        @media (max-width: 480px) {
          img {
            width: 100px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
