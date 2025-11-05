import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Nosotros', id: 'about' },
    { label: 'Servicios', id: 'services' },
    { label: 'Metodología', id: 'methodology' },
    { label: 'Sectores', id: 'sectors' },
    { label: 'Contacto', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-4">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="http://www.ipaingenieria.cl/wp-content/uploads/2025/11/Logo-IPA-ing-dis-scaled.png"
              alt="IPA Ingeniería"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-slate-900">IPA Ingeniería</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-slate-900" size={24} />
            ) : (
              <Menu className="text-slate-900" size={24} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
