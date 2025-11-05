import { ArrowRight, Target, TrendingUp, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Industrial manufacturing plant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIxYTJmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMyIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-8 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
            <span className="text-blue-300 text-sm font-medium">Ingeniería de Procesos Aplicados</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            Transformamos procesos en
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> resultados medibles</span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Optimizamos la eficiencia operacional de tu organización mediante metodologías avanzadas de ingeniería, análisis técnico y mejora continua.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20 justify-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicita una consulta
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Conocer servicios
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Target, title: 'Precisión', desc: 'Diagnósticos técnicos basados en datos' },
              { icon: TrendingUp, title: 'Mejora Continua', desc: 'Metodologías Lean, Six Sigma, Kaizen' },
              { icon: Award, title: 'Excelencia', desc: 'Certificaciones ISO 9001, 45001, 31000' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <item.icon className="text-blue-400 mb-4 mx-auto" size={36} />
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
