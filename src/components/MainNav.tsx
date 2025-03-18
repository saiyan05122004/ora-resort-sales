
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MainNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'О комплексе', href: '#about' },
    { name: 'Удобства', href: '#pool' },
    { name: 'Апартаменты', href: '#apartments' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || isMobile
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <div className="relative">
              <img
                src="/uploads/6b135259-eb7f-4bd3-bd01-adbeb6630882.png"
                alt="ORA Hotel & SPA"
                className="h-14 md:h-20 w-auto transform transition-transform hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-primary transition-colors drop-shadow-md`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="tel:+78934696969" 
              className="flex items-center gap-2 bg-primary/90 hover:bg-primary text-secondary font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105"
            >
              <Phone size={18} />
              <span>8 903 469 69 69</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'} drop-shadow-md`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-900 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="tel:+78934696969" 
                className="flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-2 px-4 rounded-full"
              >
                <Phone size={18} />
                <span>8 903 469 69 69</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
