import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            КАК НАС НАЙТИ
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Жилой комплекс ORA HOTEL&SPA расположен в г. Каспийск в непосредственной близости от Каспийского моря
          </p>
        </motion.div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full relative overflow-hidden" style={{ height: '500px' }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=47.620863%2C42.913566&mode=poi&poi%5Bpoint%5D=47.621050%2C42.914025&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D108478460975&z=19.03"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              style={{ position: 'relative' }}
              title="Yandex Map Location"
            />
            <div className="absolute top-0 left-0">
              <a href="https://yandex.ru/maps/org/ora_villa/108478460975/?utm_medium=mapframe&utm_source=maps"
                 style={{ color: '#eee', fontSize: '12px' }}>
                Ora Villa
              </a>
            </div>
            <div className="absolute top-3.5 left-0">
              <a href="https://yandex.ru/maps/11010/republic-of-dagestan/category/hotel/184106414/?utm_medium=mapframe&utm_source=maps"
                 style={{ color: '#eee', fontSize: '12px' }}>
                Гостиница в Республике Дагестан
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
