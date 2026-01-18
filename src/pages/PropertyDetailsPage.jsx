import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { MapPin, Bed, Bath, Car, Maximize, ArrowLeft, Send, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { propertiesData } from '../data/properties';

const PropertyDetailsPage = () => {
    const { id } = useParams();
    const property = propertiesData.find(p => p.id === parseInt(id));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!property) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Propiedad no encontrada</h2>
                    <Button asChild>
                        <Link to="/propiedades">Volver al listado</Link>
                    </Button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />

            {/* Top Bar / Breadcrumb nav */}
            <div className="bg-primary text-white pt-24 pb-4">
                <div className="container mx-auto px-4">
                    <Link to="/propiedades" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Volver al listado
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold">{property.title}</h1>
                    <div className="flex items-center gap-2 mt-2 text-white/90">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-lg">{property.location}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column (Images, Info) */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            {/* Main Image */}
                            <div className="rounded-xl overflow-hidden shadow-sm h-[400px] md:h-[500px] border border-gray-100 relative">
                                <img 
                                    src={property.images[0]} 
                                    alt={property.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                     <Badge className="bg-accent text-white border-none text-sm px-3 py-1">{property.type}</Badge>
                                     <Badge variant="secondary" className="text-sm px-3 py-1 shadow-sm">{property.category}</Badge>
                                </div>
                            </div>
                            
                            {/* Thumbnails */}
                            {property.images.length > 1 && (
                                <div className="grid grid-cols-4 gap-2 md:gap-4">
                                    {property.images.map((img, idx) => (
                                        <div key={idx} className="rounded-lg overflow-hidden h-24 cursor-pointer hover:opacity-80 transition-opacity border border-gray-100">
                                            <img src={img} alt={`${property.title} ${idx}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Description Section */}
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Descripción</h2>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                {property.description}
                            </p>
                        </div>
                        
                        {/* Features Section */}
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Características</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {property.features && property.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Section Placeholder */}
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                             <h2 className="text-2xl font-bold text-gray-900 mb-6">Ubicación</h2>
                             <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
                                  {/* Just a static image representation for now */}
                                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                                  <div className="z-10 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold text-gray-800">
                                        <MapPin className="h-5 w-5 text-accent" /> 
                                        {property.address}
                                  </div>
                             </div>
                             <p className="mt-4 text-sm text-gray-500">
                                * La ubicación mostrada es aproximada. Contactate para coordinar una visita.
                             </p>
                        </div>

                    </div>

                    {/* Right Column (Sticky details & Contact) */}
                    <div className="space-y-6">
                        
                        {/* Key Specs Card */}
                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 border-t-4 border-t-accent sticky top-24">
                            <div className="text-3xl font-bold text-primary mb-2 text-center md:text-left">{property.price}</div>
                            <div className="text-gray-500 mb-6 text-sm text-center md:text-left">Valor de {property.type === 'Venta' ? 'venta' : 'alquiler'}</div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Bed className="h-6 w-6 text-accent mb-1" />
                                    <span className="font-bold text-gray-900">{property.specs.beds}</span>
                                    <span className="text-xs text-gray-500">Dormitorios</span>
                                </div>
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Bath className="h-6 w-6 text-accent mb-1" />
                                    <span className="font-bold text-gray-900">{property.specs.baths}</span>
                                    <span className="text-xs text-gray-500">Baños</span>
                                </div>
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Car className="h-6 w-6 text-accent mb-1" />
                                    <span className="font-bold text-gray-900">{property.specs.parking}</span>
                                    <span className="text-xs text-gray-500">Cocheras</span>
                                </div>
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Maximize className="h-6 w-6 text-accent mb-1" />
                                    <span className="font-bold text-gray-900">{property.specs.area}</span>
                                    <span className="text-xs text-gray-500">Sup. Total</span>
                                </div>
                            </div>
                            
                            <hr className="border-gray-100 my-6" />

                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-900 text-lg">Contactar Agente</h3>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                         <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80" alt="Agente" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Carlos García</div>
                                        <div className="text-xs text-gray-500">Asesor Comercial</div>
                                    </div>
                                </div>
                                
                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                                    <Phone className="h-4 w-4 mr-2" /> WhatsApp
                                </Button>
                                
                                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                                    <Calendar className="h-4 w-4 mr-2" /> Agendar Visita
                                </Button>

                                <div className="text-xs text-center text-gray-400 mt-2">
                                    Referencia: #{property.id}A-{new Date().getFullYear()}
                                </div>
                            </div>
                        </div>

                        {/* Simple Contact Form */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                             <h4 className="font-bold mb-4">Consulta rápida</h4>
                             <form className="space-y-3">
                                <input type="text" placeholder="Tu nombre" className="w-full p-2 text-sm border rounded-md" />
                                <input type="email" placeholder="Tu email" className="w-full p-2 text-sm border rounded-md" />
                                <input type="tel" placeholder="Tu teléfono" className="w-full p-2 text-sm border rounded-md" />
                                <textarea rows="3" placeholder="Mensaje..." className="w-full p-2 text-sm border rounded-md"></textarea>
                                <Button className="w-full bg-accent hover:bg-accent/90">
                                   <Send className="h-4 w-4 mr-2" /> Enviar
                                </Button>
                             </form>
                        </div>
                    </div>
                </div>

                {/* Similar Properties (Mock logic) */}
                <div className="mt-20">
                     <h2 className="text-2xl font-bold mb-8 pl-2 border-l-4 border-accent">Propiedades Similares</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {propertiesData
                            .filter(p => p.id !== property.id && p.category === property.category)
                            .slice(0, 3)
                            .map(similar => (
                                <Link to={`/propiedades/${similar.id}`} key={similar.id} className="group">
                                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100">
                                         <div className="h-48 overflow-hidden relative">
                                              <img src={similar.images[0]} alt={similar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                                                  <div className="text-white font-bold">{similar.price}</div>
                                              </div>
                                         </div>
                                         <div className="p-4">
                                              <h4 className="font-semibold text-gray-900 line-clamp-1 mb-1">{similar.title}</h4>
                                              <div className="flex items-center text-gray-500 text-xs gap-1">
                                                  <MapPin className="h-3 w-3" /> {similar.location}
                                              </div>
                                         </div>
                                    </div>
                                </Link>
                         ))}
                     </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PropertyDetailsPage;
