import React from 'react';
import { Key, TrendingUp, Search, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Búsqueda Personalizada",
    description: "Encontramos la propiedad exacta que estás buscando, filtrando entre miles de opciones."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Tasaciones Profesionales",
    description: "Valoramos tu propiedad con datos reales del mercado para asegurar una venta justa y rápida."
  },
  {
    icon: <Key className="h-8 w-8" />,
    title: "Administración de Alquileres",
    description: "Nos ocupamos de todo: contrato, cobros y mantenimiento para que disfrutes de tu renta."
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Asesoría Legal",
    description: "Acompañamiento integral en todo el proceso de compra-venta para tu tranquilidad."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="text-3xl font-bold mt-2">¿Cómo podemos ayudarte?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
