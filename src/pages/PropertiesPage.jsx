import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Filter, MapPin, Bed, Bath, Car, ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';
import { propertiesData } from '../data/properties';
import { Link } from 'react-router-dom';

const PropertiesPage = () => {
    const [operation, setOperation] = useState("all");
    const [type, setType] = useState("all");
    const [zone, setZone] = useState("all");

    const filteredProperties = propertiesData.filter(prop => {
        if (operation !== "all" && prop.type !== operation) return false;
        if (type !== "all" && prop.category !== type) return false;
        if (zone !== "all" && !prop.location.includes(zone)) return false;
        return true;
    });

    // Helper functions for display labels
    const getOperationLabel = (val) => {
        if (val === 'all') return 'Todas las operaciones';
        return val;
    };

    const getTypeLabel = (val) => {
        if (val === 'all') return 'Todos los tipos';
        return val;
    };
    
    const getZoneLabel = (val) => {
        if (val === 'all') return 'Todas las zonas';
        return val;
    };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Propiedades</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Encontrá tu próximo hogar en nuestra selección exclusiva de inmuebles en Mar del Plata.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex-1">
        
        {/* Advanced Filters Bar */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-12 -mt-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Operación</label>
                    <Select value={operation} onValueChange={setOperation}>
                        <SelectTrigger>
                            <SelectValue>{getOperationLabel(operation)}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todas</SelectItem>
                            <SelectItem value="Venta">Venta</SelectItem>
                            <SelectItem value="Alquiler">Alquiler</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Tipo de Propiedad</label>
                    <Select value={type} onValueChange={setType}>
                        <SelectTrigger>
                            <SelectValue>{getTypeLabel(type)}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todos</SelectItem>
                            <SelectItem value="Casa">Casa</SelectItem>
                            <SelectItem value="Departamento">Departamento</SelectItem>
                            <SelectItem value="Local">Local Comercial</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Zona</label>
                    <Select value={zone} onValueChange={setZone}>
                        <SelectTrigger>
                            <SelectValue>{getZoneLabel(zone)}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todas las zonas</SelectItem>
                            <SelectItem value="Playa Grande">Playa Grande</SelectItem>
                            <SelectItem value="Los Troncos">Los Troncos</SelectItem>
                            <SelectItem value="Varese">Varese</SelectItem>
                            <SelectItem value="La Perla">La Perla</SelectItem>
                            <SelectItem value="Centro">Centro</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-end">
                    <Button 
                        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                        onClick={() => { setOperation("all"); setType("all"); setZone("all"); }}
                    >
                        <Filter className="mr-2 h-4 w-4" />
                        Limpiar Filtros
                    </Button>
                </div>
            </div>
            
            {/* More filters expansion (Visual only for now) */}
            <div className="mt-6 pt-4 border-t flex flex-wrap gap-4">
                 <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 py-1.5 px-3">2+ Dormitorios</Badge>
                 <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 py-1.5 px-3">Cochera</Badge>
                 <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 py-1.5 px-3">Con Balcón</Badge>
                 <Badge variant="outline" className="cursor-pointer hover:bg-gray-50 py-1.5 px-3">Apto Crédito</Badge>
            </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'Propiedad encontrada' : 'Propiedades encontradas'}
            </h2>
            <div className="flex gap-2">
                <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">Más recientes</SelectItem>
                        <SelectItem value="price-asc">Menor precio</SelectItem>
                        <SelectItem value="price-desc">Mayor precio</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(prop => (
                <Link to={`/propiedades/${prop.id}`} key={prop.id}>
                    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-gray-100 h-full flex flex-col">
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src={prop.images[0]} 
                                alt={prop.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full font-bold shadow-sm text-sm border border-gray-100">
                                {prop.price}
                            </div>
                            <Badge className="absolute top-4 left-4 bg-accent hover:bg-accent/90 text-white border-none px-3 py-1">
                                {prop.type}
                            </Badge>
                        </div>
                        
                        <CardContent className="p-6 flex flex-col flex-1">
                            <div className="mb-4">
                                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{prop.category}</span>
                                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-1">{prop.title}</h3>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <MapPin className="h-4 w-4 mr-1 text-accent" />
                                    {prop.location}
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                                <div className="flex gap-4 text-gray-600 text-sm">
                                    <span className="flex items-center gap-1" title="Dormitorios">
                                        <Bed className="h-4 w-4" /> {prop.specs.beds}
                                    </span>
                                    <span className="flex items-center gap-1" title="Baños">
                                        <Bath className="h-4 w-4" /> {prop.specs.baths}
                                    </span>
                                    <span className="flex items-center gap-1" title="Cocheras">
                                        <Car className="h-4 w-4" /> {prop.specs.parking}
                                    </span>
                                </div>
                                
                                <Button variant="ghost" size="sm" className="text-primary hover:text-accent p-0 hover:bg-transparent">
                                    Ver Detalle <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default PropertiesPage;
