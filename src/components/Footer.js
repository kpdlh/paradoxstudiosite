import React from 'react';
import '../styles/Footer.css'; // Import the custom CSS for Footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="footer-section contact-info">
          <h3>Contacto</h3>
          <p>Email: paradoxstudiospt@gmail.com</p>
          <p>Telefone: +351 961 847 868</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61566135315280" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> {/* FontAwesome icon */}
            </a>
            <a href="https://www.instagram.com/paradoxstudios_lx?igsh=bXRjMDR1OTRnMzRv" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> {/* FontAwesome icon */}
            </a>
            <a href="https://www.tiktok.com/@paradoxstudioslx?_t=8q7uFbAHh4d&_r=1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i> {/* FontAwesome icon */}
            </a>
            <a href="https://www.linkedin.com/company/paradox-studiospt/" target="_blank" rel="noopener noreferrer">
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

