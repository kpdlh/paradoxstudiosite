import React from 'react';
import '../styles/Contactenos.css'; // Custom styling for Contact section
import '../styles/General.css'; // General styling

const Contactenos = () => {
  return (
    <div className="div-bgcont">
      <h2 className="title">Contacte-nos</h2>

      <form className="contact-form" action="https://formspree.io/f/xjkvbvna" method="POST">
        {/* Email Input Field */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input type="email" name="email" id="email" className="form-input" placeholder="Digite o seu e-mail" required />
        </div>

        {/* Services Details Text Area */}
        <div className="form-group">
          <label htmlFor="serviceDetails" className="form-label">Explique que tipo de serviços que deseja:</label>
          <textarea name="message" id="serviceDetails" className="form-textarea" placeholder="Descreva os serviços que deseja" required></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Contacte-nos</button>
      </form>
    </div>
  );
};

export default Contactenos;

