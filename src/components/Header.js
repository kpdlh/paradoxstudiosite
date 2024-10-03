import React from 'react';
import '../styles/HeaderStyles.css'; // Import the custom CSS file
import Hero from './Hero';
import Navbar from './Navbar';

const Header = ({ contactRef,inicioRef,scrollToSection, sobrenosRef, servicosRef, portfolioRef }) => {
  return (
    <header className="header-bg">
      <div className="overlay">
        <Navbar
                scrollToSection={scrollToSection}
                inicioRef={inicioRef}
                sobrenosRef={sobrenosRef}
                servicosRef={servicosRef}
                portfolioRef={portfolioRef}
                contactRef = {contactRef}
        />
        <Hero/>
      </div>
    </header>
  );
};

export default Header;
