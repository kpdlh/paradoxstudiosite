import React from 'react';

import '../styles/General.css'; // We will create this CSS file next for custom styling

import '../styles/ServicosStyles.css'; // We will create this CSS file next for custom styling


const Servicos = () => {
    return (
        <div className="div-bg">
            <h2 className='title'>Serviços</h2>
            <div>
                <h2 className='subtitle'>Cobertura de Eventos</h2>
                <ul className='list'>
                    <li >Eventos Corporativos</li>
                    <li >Eventos Sociais</li>
                    <li >Produção de video e fotografia</li>
                </ul>
                <h2 className='subtitle'>Criação de conteúdo</h2>
                <ul className='list'>
                    <li >Design Gráfico</li>
                    <li >Videos Promocionais</li>
                    <li >Efeitos Visuais e Motion Graphics</li>
                </ul>
                
                
            </div>
        </div>
    );
};
  
  export default Servicos;