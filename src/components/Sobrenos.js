import React from 'react';

import '../styles/General.css'; // We will create this CSS file next for custom styling
import '../styles/SobreNosStyle.css'; // We will create this CSS file next for custom styling

const Sobrenos = () => {
    return (
        <div className="div-bgsobre">
            <h2 className='title'>Sobre Nós</h2>
            <div className="flexx">
            
                <h2 className='subtitle'>Quem somos?</h2>
                <p className='normal_text'>Na Paradox Studios, somos apaixonados por transformar visões em realidade. Com uma equipa dedicada e criativa, oferecemos soluções inovadoras para a gestão de redes sociais, cobertura de eventos e produção de conteúdo audiovisual.</p>
                <h2 className='subtitle'>O que fazemos?</h2>
                <p className='normal_text'>A nossa missão é criar conteúdo que não apenas ressoe, mas que também inspire e envolva público.</p>   
            </div>
               
        </div>
    );
};
  
  export default Sobrenos;