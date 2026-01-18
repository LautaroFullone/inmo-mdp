import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contactanos</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            ¿Tenés alguna consulta o querés coordinar una visita?
            Escribinos y un asesor se pondrá en contacto con vos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-accent p-3 rounded-xl">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Nuestra Oficina</h3>
                <p className="text-white/70">Av. Colón 1234<br/>B7600 Mar del Plata, Buenos Aires</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-accent p-3 rounded-xl">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Llamanos</h3>
                <p className="text-white/70">+54 223 123-4567<br/>Lunes a Sábados de 9 a 19hs</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-accent p-3 rounded-xl">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Escribinos</h3>
                <p className="text-white/70">info@inmomdp.com<br/>ventas@inmomdp.com</p>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <form className="bg-white rounded-3xl p-8 shadow-2xl text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Envianos un mensaje</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required 
                />
              </div>
              <input 
                type="tel" 
                placeholder="Teléfono" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <textarea 
                placeholder="¿En qué podemos ayudarte?" 
                rows="4" 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                required
              ></textarea>
              <button 
                type="submit" 
                className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
