
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/lovable-uploads/6b135259-eb7f-4bd3-bd01-adbeb6630882.png"
                alt="ORA Hotel & SPA"
                className="h-16 w-auto bg-white/10 p-2 rounded-lg"
              />
            </div>
            <p className="text-white/80 mb-4">
              Премиальные апартаменты на берегу Каспийского моря — идеальное решение для инвестиций и отдыха.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2">Разделы сайта</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-primary transition-colors">О комплексе</a>
              </li>
              <li>
                <a href="#pool" className="text-white/80 hover:text-primary transition-colors">Удобства</a>
              </li>
              <li>
                <a href="#apartments" className="text-white/80 hover:text-primary transition-colors">Апартаменты</a>
              </li>
              <li>
                <a href="#location" className="text-white/80 hover:text-primary transition-colors">Расположение</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-primary transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2">Типы апартаментов</h3>
            <ul className="space-y-3">
              <li>
                <a href="#apartments" className="text-white/80 hover:text-primary transition-colors">Апартаменты ЛЮКС</a>
              </li>
              <li>
                <a href="#apartments" className="text-white/80 hover:text-primary transition-colors">Апартаменты ПОЛУ-ЛЮКС</a>
              </li>
              <li>
                <a href="#apartments" className="text-white/80 hover:text-primary transition-colors">Апартаменты СТАНДАРТ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2">Контактная информация</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+78934696969" className="text-white hover:text-primary transition-colors">
                    8 903 469 69 69
                  </a>
                  <p className="text-white/60 text-sm">Ежедневно с 9:00 до 21:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:79034696969@yandex.ru" className="text-white hover:text-primary transition-colors">
                    79034696969@yandex.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">
                    г. Каспийск, ул. Приморская, 21
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-center md:text-left">
              © {new Date().getFullYear()} ORA HOTEL&SPA. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
