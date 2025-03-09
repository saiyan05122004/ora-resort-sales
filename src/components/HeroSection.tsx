
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Home, Wallet, Palmtree, Waves } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/82baaea0-8ef3-4249-af81-dceb47dc859e.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent" />
        
        {/* ORA Logo in top left */}
        <div className="absolute top-10 left-10 z-10">
          <span className="text-primary text-3xl font-bold tracking-wider">ORA</span>
        </div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              ПРЕМИАЛЬНЫЕ АПАРТАМЕНТЫ <br />
              <span className="text-primary">ORA HOTEL&SPA</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              Уникальная возможность приобрести апартаменты премиум-класса в 100 метрах от Каспийского моря
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center">
                <Building className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold">Готовый бизнес</h3>
                  <p className="text-white/80 text-sm">Стабильный доход от аренды</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center">
                <Palmtree className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold">Престижное жилье</h3>
                  <p className="text-white/80 text-sm">Для жизни и отдыха</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center">
                <Waves className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold">Выгодное вложение</h3>
                  <p className="text-white/80 text-sm">Рост стоимости недвижимости</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#apartments"
                className="bg-primary hover:bg-primary-light text-secondary-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Выбрать апартаменты
              </a>
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/30 transform hover:scale-105"
              >
                Получить консультацию
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
