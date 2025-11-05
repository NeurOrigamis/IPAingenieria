import { Factory, FileText, Cog, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Factory,
      title: 'Procesos Industriales y Productivos',
      items: [
        'Diagnóstico integral de líneas de producción y mantenimiento',
        'Estandarización de procedimientos técnicos',
        'Implementación de herramientas Lean, VSM y Six Sigma',
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: FileText,
      title: 'Procesos Organizacionales y Administrativos',
      items: [
        'Optimización de flujos de trabajo internos',
        'Mejora de la trazabilidad documental',
        'Diseño de tableros de control y KPIs',
      ],
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
    },
    {
      icon: Cog,
      title: 'Ingeniería Aplicada en Servicios',
      items: [
        'Análisis funcional de procesos logísticos y tecnológicos',
        'Digitalización de procesos mediante trazabilidad',
        'Evaluación técnica y operativa de proyectos',
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      icon: Award,
      title: 'Gestión y Calidad Empresarial',
      items: [
        'Implementación de sistemas ISO 9001, 45001 y 31000',
        'Auditorías internas y externas de procesos',
        'Planes de mejora continua y estandarización',
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <section id="services" className="py-28 bg-slate-50 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50"></div>
      </div>
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Servicios</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Áreas de Especialización
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Soluciones integrales de análisis, rediseño y gestión de procesos para distintos sectores organizacionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${service.color} transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`}></div>
              </div>

              <div className="p-10 relative z-10">
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className={service.iconColor} size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`h-1.5 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
          >
            Consulta por nuestros servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
