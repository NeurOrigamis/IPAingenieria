import { Zap, Building, Truck, Package, Server, Droplet, GraduationCap, Wrench } from 'lucide-react';

const Sectors = () => {
  const sectors = [
    { icon: Zap, name: 'Energía y Minería', color: 'from-amber-500 to-orange-500' },
    { icon: Building, name: 'Construcción y Obras Civiles', color: 'from-slate-500 to-slate-600' },
    { icon: Truck, name: 'Logística y Transporte', color: 'from-blue-500 to-blue-600' },
    { icon: Package, name: 'Manufactura Industrial', color: 'from-indigo-500 to-indigo-600' },
    { icon: Server, name: 'Tecnología y Telecomunicaciones', color: 'from-cyan-500 to-cyan-600' },
    { icon: Droplet, name: 'Servicios Sanitarios', color: 'from-sky-500 to-sky-600' },
    { icon: GraduationCap, name: 'Educación y Gestión Pública', color: 'from-emerald-500 to-emerald-600' },
    { icon: Wrench, name: 'Servicios Profesionales', color: 'from-violet-500 to-violet-600' },
  ];

  return (
    <section id="sectors" className="py-28 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Sectores</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Experiencia Multisectorial
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Brindamos servicios de diagnóstico, rediseño y optimización a empresas de múltiples rubros, adaptando nuestras soluciones a las necesidades específicas de cada industria
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-7xl mx-auto">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300 p-8 text-center"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <sector.icon className="text-slate-700" size={32} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight">{sector.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-7xl mx-auto">
          <img
            src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Manufacturing production line"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-blue-900/95"></div>
          <div className="relative z-10 p-12 md:p-16 text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-14">
                <div className="space-y-3 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">15+</div>
                  <div className="text-slate-300 font-medium">Años de experiencia combinada</div>
                </div>
                <div className="space-y-3 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">100+</div>
                  <div className="text-slate-300 font-medium">Proyectos completados</div>
                </div>
                <div className="space-y-3 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">50+</div>
                  <div className="text-slate-300 font-medium">Empresas atendidas</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
                  Nuestro equipo de especialistas cuenta con amplia experiencia multisectorial que permite comprender las particularidades de cada industria y ofrecer soluciones verdaderamente adaptadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
