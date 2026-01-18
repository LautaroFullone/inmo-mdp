import React, { useState } from 'react';
import { Search, MapPin, Home } from 'lucide-react';
import heroBg from '../../assets/lobo.jpg';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/Command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { Check, ChevronsUpDown } from "lucide-react";

const zones = [
  { value: "playa-grande", label: "Playa Grande" },
  { value: "varese", label: "Varese" },
  { value: "la-perla", label: "La Perla" },
  { value: "centro", label: "Centro" },
  { value: "guemes", label: "Güemes" },
  { value: "los-troncos", label: "Los Troncos" },
  { value: "constitucion", label: "Constitución" },
  { value: "punta-mogotes", label: "Punta Mogotes" },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState('buy'); // 'buy' | 'rent'
  const [propertyType, setPropertyType] = useState("");
  const [openZone, setOpenZone] = useState(false);
  const [zoneValue, setZoneValue] = useState("");

  return (
    <section id="home" className="relative h-screen flex items-center justify-center -mt-[70px] pt-[70px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4 drop-shadow-md">
          Encontrá tu lugar en <br className="hidden md:block" /> Mar del Plata
        </h1>
        <p className="text-xl text-white/90 text-center mb-8 max-w-2xl drop-shadow-sm">
          Expertos en propiedades exclusivas frente al mar y zonas residenciales.
        </p>
        
        {/* Search Box */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            <button 
              onClick={() => setActiveTab('buy')}
              className={cn(
                "flex-1 py-4 text-center font-semibold transition-colors hover:bg-gray-50",
                activeTab === 'buy' ? "text-accent border-b-2 border-accent bg-accent/5" : "text-gray-500"
              )}
            >
              Comprar
            </button>
            <button 
              onClick={() => setActiveTab('sell')}
              className={cn(
                "flex-1 py-4 text-center font-semibold transition-colors hover:bg-gray-50",
                activeTab === 'sell' ? "text-accent border-b-2 border-accent bg-accent/5" : "text-gray-500"
              )}
            >
            Vender
            </button>
            <button 
              onClick={() => setActiveTab('rent')}
              className={cn(
                "flex-1 py-4 text-center font-semibold transition-colors hover:bg-gray-50",
                activeTab === 'rent' ? "text-accent border-b-2 border-accent bg-accent/5" : "text-gray-500"
              )}
            >
              Alquilar
            </button>
          </div>

          {/* Inputs */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
              <Popover open={openZone} onOpenChange={setOpenZone}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openZone}
                    className="w-full pl-10 h-14 text-base justify-between border-gray-200 hover:bg-transparent font-normal text-muted-foreground"
                  >
                    {zoneValue
                      ? zones.find((framework) => framework.value === zoneValue)?.label
                      : "Zona (ej. Playa Grande)"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Buscar zona..." />
                    <CommandList>
                      <CommandEmpty>No se encontraron zonas.</CommandEmpty>
                      <CommandGroup>
                        {zones.map((zone) => (
                          <CommandItem
                            key={zone.value}
                            value={zone.value}
                            onSelect={(currentValue) => {
                              setZoneValue(currentValue === zoneValue ? "" : currentValue)
                              setOpenZone(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                zoneValue === zone.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {zone.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="md:col-span-4 relative">
              <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10 pointer-events-none" />
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="w-full pl-10 h-14 text-base border-gray-200 focus:ring-primary/20 focus:border-primary">
                  <SelectValue placeholder="Tipo de Propiedad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="departamento">Departamento</SelectItem>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="local">Local</SelectItem>
                  <SelectItem value="ph">PH</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                  <SelectItem value="cochera">Cochera</SelectItem>
                  <SelectItem value="edificio">Edificio</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-3">
              <Button className="w-full h-14 text-base bg-accent hover:bg-accent/90 text-white font-bold rounded-lg gap-2">
                <Search className="h-5 w-5" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
