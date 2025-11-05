import { BarChart3, Target, RefreshCw, TrendingUp, Database, Shield } from 'lucide-react';

const Methodology = () => {
  const methodologies = [
    {
      icon: TrendingUp,
      title: 'Lean Manufacturing y Kaizen',
      desc: 'Eliminación de desperdicios y mejora continua',
    },
    {
      icon: Target,
      title: 'Six Sigma',
      desc: 'Control de variabilidad y decisiones basadas en datos',
    },
    {
      icon: RefreshCw,
      title: 'PDCA',
      desc: 'Gestión cíclica de mejora continua',
    },
    {
      icon: BarChart3,
      title: 'VSM y BPMN',
      desc: 'Mapeo y visualización de flujos de valor',
    },
    {
      icon: Database,
      title: 'KPIs',
      desc: 'Indicadores de desempeño y control operativo',
    },
    {
      icon: Shield,
      title: 'Gestión de Riesgos',
      desc: 'Análisis y control según ISO 31000',
    },
  ];

  const diagnosticTools = [
    'Mapeo de procesos (BPMN, SIPOC, VSM)',
    'Análisis causa-efecto (Ishikawa, Pareto)',
    'Análisis de riesgos y criticidad',
    'Evaluación de desempeño técnico',
    'Entrevistas y focus groups operativos',
    'Auditorías y revisión documental',
  ];

  return (
    <section id="methodology" className="py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Industrial machinery and processes"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Metodología</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Enfoque Integral y Sistemático
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Aplicamos metodologías reconocidas internacionalmente para garantizar resultados medibles y sostenibles
          </p>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl font-bold text-center mb-14">Metodologías Aplicadas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <method.icon className="text-blue-400" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2">{method.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm"></div>
          <div className="absolute inset-0 border border-blue-400/30 rounded-3xl"></div>
          <div className="relative z-10 p-12 md:p-16">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Herramientas de Diagnóstico
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {diagnosticTools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-blue-400/50 hover:scale-105"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0 shadow-lg shadow-cyan-400/50"></div>
                    <span className="text-slate-100 leading-relaxed font-medium">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="mt-14 text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                  Nuestro enfoque combina herramientas cuantitativas y cualitativas para obtener diagnósticos precisos, jerarquizados y aplicables, facilitando decisiones basadas en evidencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
