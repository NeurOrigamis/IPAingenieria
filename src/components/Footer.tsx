import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Ingeniería de Procesos Aplicados especializada en el análisis, rediseño y optimización de procesos organizacionales mediante metodologías avanzadas.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:contacto@ipaingenieria.cl" className="hover:text-white transition-colors">
                  contacto@ipaingenieria.cl
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} className="text-blue-400" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navegación</h3>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', id: 'hero' },
                { label: 'Nosotros', id: 'about' },
                { label: 'Servicios', id: 'services' },
                { label: 'Metodología', id: 'methodology' },
                { label: 'Sectores', id: 'sectors' },
                { label: 'Contacto', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Procesos Industriales</li>
              <li>Procesos Organizacionales</li>
              <li>Ingeniería Aplicada</li>
              <li>Gestión y Calidad</li>
              <li>Auditorías ISO</li>
              <li>Mejora Continua</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              {currentYear} IPA Ingeniería. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-slate-400 hover:text-white transition-colors">
                Términos y Condiciones
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
