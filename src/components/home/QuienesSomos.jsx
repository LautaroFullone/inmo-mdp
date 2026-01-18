import React from 'react';

const QuienesSomos = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <span className="text-secondary-foreground font-semibold text-sm uppercase tracking-wider text-accent">Sobre Nosotros</span>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">Expertos en cumplir sueños inmobiliarios</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Con más de 30 años de experiencia en el mercado inmobiliario de Mar del Plata, 
            somos referentes en la comercialización de propiedades de alta gama. 
            Conocemos cada rincón de la ciudad, desde los chalets tradicionales de Los Troncos 
            hasta los departamentos más modernos frente a Playa Grande.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-3xl font-bold text-accent mb-1">30+</h4>
              <p className="text-gray-500 text-sm">Años de experiencia</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-accent mb-1">500+</h4>
              <p className="text-gray-500 text-sm">Propiedades vendidas</p>
            </div>
          </div>
          <button className="bg-accent text-white py-3 px-8 rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 mt-4">
            Conocenos Más
          </button>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary rounded-3xl -z-10 opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
            alt="Oficina Inmobiliaria" 
            className="w-full rounded-2xl shadow-2xl z-10 relative"
          />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
