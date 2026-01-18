import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Building2, MessageSquare, Users, Settings, LogOut, LayoutPanelLeft } from 'lucide-react';
import { cn } from '../../lib/utils';

const Sidebar = () => {
  const navItems = [
     { icon: LayoutPanelLeft, label: 'Dashboard', path: '/admin' },
     { icon: Building2, label: 'Propiedades', path: '/admin/properties' },
     { icon: LayoutDashboard, label: 'Landing', path: '/' },
   //  { icon: Users, label: 'Clientes', path: '/admin/clients' },
   //  { icon: MessageSquare, label: 'Consultas', path: '/admin/inquiries' },
    { icon: Settings, label: 'Configuración', path: '/admin/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-100 min-h-screen flex flex-col fixed left-0 top-0 z-50 shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          INMO<span className="text-primary">ADMIN</span>
        </h2>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/admin'}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors">
          <LogOut className="h-5 w-5" />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
