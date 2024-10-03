import React from 'react';

import '../styles/General.css'; // We will create this CSS file next for custom styling

import '../styles/PortfolioStyles.css'; // We will create this CSS file next for custom styling

import MediaGrid from './MediaGrid.js';


const Portfolio = () => {
    return (
        <div className="div-bgport">
            <h2 className='title'>Portfólio</h2>
            <MediaGrid/>
        </div>
    );
};
  
  export default Portfolio;