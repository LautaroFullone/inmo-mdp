import AdminLayout from '../../components/admin/AdminLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Building2, MessageCircle, FileText, CheckCircle, Clock, Users } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "Propiedades Publicadas",
      value: "12",
      description: "8 activas",
      icon: Building2,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Nuevas Consultas",
      value: "24",
      description: "5 sin leer",
      icon: MessageCircle,
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      title: "Operaciones",
      value: "3",
      description: "Este mes",
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Solicitudes",
      value: "7",
      description: "2 pendientes",
      icon: FileText,
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Panel de Control</h1>
        <p className="text-muted-foreground mt-1">Resumen de la plataforma y actividad reciente.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-400" />
            Actividad Reciente
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-50 last:border-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Building2 className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Nueva propiedad registrada: "Departamento en Playa Grande"</p>
                  <p className="text-xs text-muted-foreground">Hace 2 horas por Admin</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Acciones Rápidas</h2>
          <div className="grid gap-3">
             <Button variant="outline" className="h-auto py-4 justify-start px-4 border-gray-200 hover:border-primary/50 hover:bg-primary/5 group">
                <div className="bg-primary/10 p-2 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Nueva Propiedad</div>
                  <div className="text-xs text-muted-foreground">Publicar un inmueble</div>
                </div>
             </Button>
             
             <Button variant="outline" className="h-auto py-4 justify-start px-4 border-gray-200 hover:border-primary/50 hover:bg-primary/5 group">
                <div className="bg-green-100 p-2 rounded-lg mr-3 group-hover:bg-green-200 transition-colors">
                  <Users className="h-5 w-5 text-green-700" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Nuevo Cliente</div>
                  <div className="text-xs text-muted-foreground">Registrar interesado</div>
                </div>
             </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
