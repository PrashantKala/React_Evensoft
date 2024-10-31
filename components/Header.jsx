import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css'; // assuming the styles are in App.css

const Header = (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particles = Array.from({ length: 100 });
  const layers = Array.from({ length: 3 });

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setMousePosition({ x, y });
  };

  const navigate=useNavigate()

  return (
    <section className='hero-section' onMouseMove={handleMouseMove}>
      {particles.map((_, index) => (
        <div
          key={`particle-${index}`}
          className="particle"
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            animationDuration: `${Math.random() * 5 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {layers.map((_, index) => (
        <div
          key={`layer-${index}`}
          className="layer"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px) scale(${1 + index * 0.1})`,
          }}
        ></div>
      ))}

      <div style={{ width: '70%', zIndex: 1 }} className="text-center">
        <h1 className='text-white display-5 fw-bold'>{props.heading}</h1>
        <p className='mt-3 text-white fs-5'>{props.subHeading}</p>
        <button onClick={()=>{
          navigate("/ContactUs")
        }}  type="button" className="mt-3 btn btn-outline-secondary w-25 h-25 text-white">Contact Us</button>
      </div>
    </section>
  );
}

export default Header;
