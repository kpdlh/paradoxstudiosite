import React, { useRef } from 'react';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Servicos from './components/Servicos';
import Sobrenos from './components/Sobrenos';

function App() {
  // Create refs for each section
  const inicioRef = useRef(null);
  const sobrenosRef = useRef(null);
  const servicosRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Pass the scroll function and refs to Header */}
      <div ref={inicioRef}>
      <Header
        scrollToSection={scrollToSection}
        inicioRef={inicioRef}
        sobrenosRef={sobrenosRef}
        servicosRef={servicosRef}
        portfolioRef={portfolioRef}
        contactRef = {contactRef}
      />
      </div>
      {/* Components with refs */}
      <div ref={sobrenosRef}>
        <Sobrenos />
      </div>
      <div ref={servicosRef}>
        <Servicos />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={contactRef}>
        <Contactenos />
      </div>
      <Footer />
    </div>
  );
}

export default App;

