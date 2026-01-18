import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Car } from 'lucide-react';


const properties = [
  {
    id: 1,
    title: "Penthouse en Playa Grande",
    location: "Playa Grande, Mar del Plata",
    price: "USD 350.000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    specs: { beds: 3, baths: 3, parking: 2 }
  },
  {
    id: 2,
    title: "Casa Moderna en Rumencó",
    location: "Barrio Privado Rumencó",
    price: "USD 420.000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    specs: { beds: 4, baths: 4, parking: 2 }
  },
  {
    id: 3,
    title: "Departamento c/ Vista al Mar",
    location: "Varese, Mar del Plata",
    price: "USD 180.000",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    specs: { beds: 2, baths: 1, parking: 1 }
  },
  {
    id: 4,
    title: "Chalet en Los Troncos",
    location: "Los Troncos, Mar del Plata",
    price: "USD 550.000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    specs: { beds: 5, baths: 4, parking: 3 }
  }
];

const FeaturedPropertiesSearch = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Propiedades Destacadas</h2>
            <p className="text-gray-500">Selección exclusiva de las mejores oportunidades.</p>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={scrollPrev}
              className="p-2 rounded-full border border-gray-300 hover:bg-white hover:border-primary hover:text-primary transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-2 rounded-full border border-gray-300 hover:bg-white hover:border-primary hover:text-primary transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {properties.map(prop => (
              <div key={prop.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={prop.image} 
                      alt={prop.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-md font-semibold shadow-md">
                      {prop.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">{prop.title}</h3>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1 text-accent" />
                      <span className="text-sm">{prop.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-4 border-t border-gray-100 text-gray-600">
                      <div className="flex items-center gap-1" title="Dormitorios">
                        <Bed className="h-4 w-4" />
                        <span className="text-sm font-medium">{prop.specs.beds}</span>
                      </div>
                      <div className="flex items-center gap-1" title="Baños">
                        <Bath className="h-4 w-4" />
                        <span className="text-sm font-medium">{prop.specs.baths}</span>
                      </div>
                      <div className="flex items-center gap-1" title="Cocheras">
                        <Car className="h-4 w-4" />
                        <span className="text-sm font-medium">{prop.specs.parking}</span>
                      </div>
                    </div>

                    <button className="w-full mt-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-accent hover:border-accent hover:text-white transition-all">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSearch;
