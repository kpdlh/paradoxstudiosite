import React from 'react';
import '../styles/Footer.css'; // Import the custom CSS for Footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="footer-section contact-info">
          <h3>Contacte-nos</h3>
          <p>Email: contacto@paradoxstudios.com</p>
          <p>Telefone: +351 912 345 678</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> {/* FontAwesome icon */}
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> {/* FontAwesome icon */}
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> {/* FontAwesome icon */}
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> {/* FontAwesome icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Paradox Studios. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

