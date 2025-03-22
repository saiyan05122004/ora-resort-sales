
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Declare the ymaps global variable from Yandex Maps
declare global {
  interface Window {
    ymaps: any;
  }
}

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    // Check if Yandex Maps API is loaded
    if (window.ymaps && mapContainer.current && !mapReady) {
      window.ymaps.ready(() => {
        // Create map once the API is fully loaded
        const map = new window.ymaps.Map(mapContainer.current, {
          center: [42.914168, 47.620655], // Latitude, Longitude
          zoom: 15,
          controls: ['zoomControl', 'fullscreenControl']
        });
        
        // Add marker at the specified coordinates
        const placemark = new window.ymaps.Placemark([42.914168, 47.620655], {
          balloonContent: '<strong>ORA HOTEL&SPA</strong><br>г. Каспийск, ул. Коттеджная'
        }, {
          preset: 'islands#goldIcon' // Gold-colored marker to match the primary color theme
        });
        
        map.geoObjects.add(placemark);
        
        // Open balloon on marker by default
        placemark.balloon.open();
        
        setMapReady(true);
      });
    }
  }, [mapReady]);

  // Function to initialize API loading
  useEffect(() => {
    // Check if script is already added
    const existingScript = document.getElementById('yandex-maps');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'yandex-maps';
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
      script.async = true;
      script.onload = () => setMapReady(false); // Reset to trigger map creation
      document.head.appendChild(script);
    }
  }, []);

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
          <div 
            ref={mapContainer} 
            className="w-full h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
