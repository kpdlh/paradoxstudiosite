import React from 'react';

import heroimg from "../images/Hero.png";

import '../styles/HeroStyle.css'; // We will create this CSS file next for custom styling


const Hero = () => {
    return (
        <div className="hero-section">
            <img src={heroimg} alt="Hero" />
        </div>
    );
};
  
  export default Hero;