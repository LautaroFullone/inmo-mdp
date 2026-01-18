import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Plus, Search, Filter, MoreHorizontal, MapPin, Bed, Bath, Square } from 'lucide-react';

const AdminProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Departamento en Varese",
      address: "Colon y la Costa",
      price: "USD 120,000",
      status: "Activa",
      type: "Venta",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwb2NlYW58ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
      title: "Casa en Los Troncos",
      address: "Rodriguez Peña 1200",
      price: "USD 350,000",
      status: "Activa",
      type: "Venta",
      image: "https://images.unsplash.com/photo-1600596542815-2a4d04774c13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      title: "Local Comercial Centro",
      address: "San Martin 2500",
      price: "$ 450,000 / mes",
      status: "Alquilada",
      type: "Alquiler",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Propiedades</h1>
          <p className="text-muted-foreground mt-1">Gestiona el inventario de inmuebles.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
          <Plus className="h-4 w-4" />
          Nueva Propiedad
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Buscar por título, dirección..." 
            className="pl-9 bg-gray-50 border-gray-200"
          />
        </div>
        <Button variant="outline" className="border-gray-200 gap-2">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          <div className="col-span-5">Propiedad</div>
          <div className="col-span-2">Precio</div>
          <div className="col-span-2">Estado</div>
          <div className="col-span-2">Tipo</div>
          <div className="col-span-1 text-right">Acciones</div>
        </div>

        {properties.map((property) => (
          <div key={property.id} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center last:border-0 hover:bg-gray-50 transition-colors">
            <div className="col-span-5 flex gap-4">
              <img 
                src={property.image} 
                alt={property.title} 
                className="h-16 w-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{property.title}</h3>
                <div className="flex items-center text-muted-foreground text-sm mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {property.address}
                </div>
              </div>
            </div>
            
            <div className="col-span-2 font-medium">
              {property.price}
            </div>

            <div className="col-span-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                property.status === 'Activa' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {property.status}
              </span>
            </div>

            <div className="col-span-2 text-sm text-gray-600">
              {property.type}
            </div>

            <div className="col-span-1 flex justify-end">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminProperties;
