import { Building2, Users, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img
          src="https://images.pexels.com/photos/3862151/pexels-photo-3862151.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Industrial equipment"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Nosotros</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Ingeniería aplicada al servicio de tu organización
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            IPA Ingeniería es una consultora chilena especializada en el levantamiento, análisis, rediseño y optimización de procesos, aplicando principios de ingeniería avanzada para fortalecer la eficiencia y competitividad organizacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 max-w-7xl mx-auto">
          {[
            {
              icon: Building2,
              title: 'Enfoque Estratégico',
              desc: 'Nos consolidamos como aliado estratégico para empresas de distintos rubros',
            },
            {
              icon: Users,
              title: 'Equipo Experto',
              desc: 'Consultores senior con sólida experiencia en análisis y optimización técnica',
            },
            {
              icon: Lightbulb,
              title: 'Innovación',
              desc: 'Soluciones que combinan análisis técnico, cultura organizacional y estrategia',
            },
            {
              icon: Shield,
              title: 'Calidad Garantizada',
              desc: 'Alineados con estándares ISO 9001, 45001 y 31000',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                <item.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-7xl mx-auto">
          <img
            src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Industrial facility overhead view"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-cyan-900/95"></div>
          <div className="relative z-10 p-12 md:p-16 text-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nuestra Filosofía</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    title: 'Excelencia Técnica',
                    desc: 'Aplicación rigurosa de metodologías de ingeniería para el mejoramiento de procesos',
                  },
                  {
                    title: 'Cultura de Mejora',
                    desc: 'Integración del pensamiento Lean y Kaizen en todos los niveles organizacionales',
                  },
                  {
                    title: 'Valor Sostenible',
                    desc: 'Resultados medibles, replicables y adaptados a la realidad de cada cliente',
                  },
                ].map((item, index) => (
                  <div key={index} className="space-y-3 text-center">
                    <div className="w-12 h-1 bg-cyan-400 rounded-full mx-auto"></div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-blue-100 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
