import React from 'react';
import '../styles/NavbarStyles.css'; // We will create this CSS file next for custom styling

import logo from '../images/logotipo.png';

const Navbar = ({ inicioRef,scrollToSection, sobrenosRef, servicosRef, portfolioRef,contactRef }) => {
  return (
    <nav className="navbar bg-black text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" /> {/* Add the correct logo path */}
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-20">
          <li><a href="#inicio" className="hover:text-teal-400" onClick={() => scrollToSection(inicioRef)}>INÍCIO</a></li>
          <li><a href="#sobre-nos" className="hover:text-teal-400" onClick={() => scrollToSection(sobrenosRef)}>SOBRE NÓS</a></li>
          <li><a href="#servicos" className="hover:text-teal-400" onClick={() => scrollToSection(servicosRef)}>SERVIÇOS</a></li>
          <li><a href="#portfolio" className="hover:text-teal-400" onClick={() => scrollToSection(portfolioRef)}>PORTFÓLIO</a></li>
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700" onClick={() => scrollToSection(contactRef)}>
            Contacte-nos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

