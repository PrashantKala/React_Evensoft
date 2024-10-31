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
    // '../images/',
    // '../images/',
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  // Get the images for the current slide
  const currentImages = images.slice(currentIndex, currentIndex + 4);

  return (
    <>
        <h2 style={{display: 'flex',fontSize:"2rem", margin:"0 auto", padding:"2rem", width: '20%'}} >Our Partners</h2>
        <div className="slider" style={{margin:'auto', display: 'flex', overflow: 'hidden', width: '70%', marginBottom:"2rem", gap:'20px'}}>
      {currentImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${currentIndex + index + 1}`}
          style={{width:'250px',  height: '100px', borderRadius:"10px", boxShadow:"0 0 5px 0px" }}
        />
      ))}
    </div>
    </>
  );
};

export default ImageSlider;
