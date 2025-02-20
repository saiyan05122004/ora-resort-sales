
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
            backgroundImage: "url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-primary/90 text-white px-4 py-2 rounded-full text-sm mb-4">
              Премиальные апартаменты у моря
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ORA HOTEL&SPA
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Роскошные апартаменты с дизайнерской отделкой в 100 метрах от Каспийского моря
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apartments"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                Выбрать апартаменты
              </a>
              <a
                href="#about"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Узнать больше
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
