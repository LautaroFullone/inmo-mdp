import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-content">
        <div className="about-text">
          <h2 className="section-title" style={{textAlign: 'left'}}>Nuestra Historia</h2>
          <p>
            Con más de 30 años de experiencia en el mercado inmobiliario de Mar del Plata, 
            somos referentes en la comercialización de propiedades de alta gama. 
            Conocemos cada rincón de la ciudad, desde los chalets tradicionales de Los Troncos 
            hasta los departamentos más modernos frente a Playa Grande.
          </p>
          <p>
            Nuestra misión es conectar a las personas con su hogar ideal, brindando un 
            servicio personalizado, transparente y profesional.
          </p>
          <button className="btn-about">Conocenos Más</button>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" alt="Oficina Inmobiliaria" />
        </div>
      </div>
    </section>
  );
};

export default About;
