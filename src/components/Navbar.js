import React, { useState } from 'react';
import logo from '../images/logotipo.png';
import '../styles/NavbarStyles.css'; // Custom styling

const Navbar = ({ inicioRef, scrollToSection, sobrenosRef, servicosRef, portfolioRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on item click (mobile)
  const handleMenuClick = (sectionRef) => {
    scrollToSection(sectionRef);
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar bg-black text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button
            className="hamburger focus:outline-none"
            onClick={toggleMenu} // Toggle the menu on click
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <ul className={`mobile-menu ${isOpen ? 'block' : 'hidden'}`}>
          <li><a href="#inicio" onClick={() => handleMenuClick(inicioRef)}>INÍCIO</a></li>
          <li><a href="#sobre-nos" onClick={() => handleMenuClick(sobrenosRef)}>SOBRE NÓS</a></li>
          <li><a href="#servicos" onClick={() => handleMenuClick(servicosRef)}>SERVIÇOS</a></li>
          <li><a href="#portfolio" onClick={() => handleMenuClick(portfolioRef)}>PORTFÓLIO</a></li>
          <li><a href="#contact" onClick={() => handleMenuClick(contactRef)}>Contacte-nos</a></li>
        </ul>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-20">
          <li><a href="#inicio" className="hover:text-teal-400" onClick={() => scrollToSection(inicioRef)}>INÍCIO</a></li>
          <li><a href="#sobre-nos" className="hover:text-teal-400" onClick={() => scrollToSection(sobrenosRef)}>SOBRE NÓS</a></li>
          <li><a href="#servicos" className="hover:text-teal-400" onClick={() => scrollToSection(servicosRef)}>SERVIÇOS</a></li>
          <li><a href="#portfolio" className="hover:text-teal-400" onClick={() => scrollToSection(portfolioRef)}>PORTFÓLIO</a></li>
        </ul>

        {/* Contact Button for Desktop */}
        <div className="hidden md:block contact-btn">
          <a href="#contact" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700" onClick={() => scrollToSection(contactRef)}>
            Contacte-nos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





