import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Always solid on non-home pages
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollLink = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (isHome && location.state && location.state.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear state
        window.history.replaceState({}, document.title);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location, isHome]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
      (scrolled || !isHome) ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className={cn(
          "text-2xl font-bold transition-colors",
          (scrolled || !isHome) ? "text-primary" : "text-white"
        )}>
          InmoMDP
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleScrollLink(e, 'home')}
              className={cn(
                "font-medium transition-colors hover:text-accent cursor-pointer",
                (scrolled || !isHome) ? "text-gray-700" : "text-white/90"
              )}
            >
              Inicio
            </a>
          </li>
          <li>
            <Link 
              to="/propiedades" 
              className={cn(
                "font-medium transition-colors hover:text-accent",
                (scrolled || !isHome) ? "text-gray-700" : "text-white/90",
                location.pathname === '/propiedades' && "text-accent font-bold"
              )}
            >
              Propiedades
            </Link>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleScrollLink(e, 'about')}
              className={cn(
                "font-medium transition-colors hover:text-accent cursor-pointer",
                (scrolled || !isHome) ? "text-gray-700" : "text-white/90"
              )}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollLink(e, 'contact')}
              className={cn(
                "font-medium transition-colors hover:text-accent cursor-pointer",
                (scrolled || !isHome) ? "text-gray-700" : "text-white/90"
              )}
            >
              Contacto
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <a href="/admin" className="bg-primary hover:bg-primary-light text-white px-5 py-2 rounded-md font-medium transition-colors">
            Acceso Admin
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 
            <X className={(scrolled || !isHome) ? "text-primary" : "text-white"} /> : 
            <Menu className={(scrolled || !isHome) ? "text-primary" : "text-white"} />
          }
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden">
            <a href="#home" onClick={(e) => handleScrollLink(e, 'home')} className="text-gray-700 font-medium hover:text-primary">Inicio</a>
            <Link to="/propiedades" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium hover:text-primary">Propiedades</Link>
            <a href="#about" onClick={(e) => handleScrollLink(e, 'about')} className="text-gray-700 font-medium hover:text-primary">Nosotros</a>
            <a href="#contact" onClick={(e) => handleScrollLink(e, 'contact')} className="text-gray-700 font-medium hover:text-primary">Contacto</a>
            <a href="/admin" className="bg-primary text-white text-center py-2 rounded-md">
              Acceso Admin
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
