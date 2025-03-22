
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState<string>('');
  const [tokenEntered, setTokenEntered] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;
    
    mapboxgl.accessToken = token;
    
    if (map.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [47.620655, 42.914168], // Longitude, Latitude
      zoom: 14
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Add marker at the specified coordinates
    new mapboxgl.Marker({ color: '#E6B567' })
      .setLngLat([47.620655, 42.914168])
      .setPopup(new mapboxgl.Popup().setHTML('<h3 class="font-bold">ORA HOTEL&SPA</h3><p>г. Каспийск, ул. Коттеджная</p>'))
      .addTo(map.current);
  };

  useEffect(() => {
    if (tokenEntered && mapToken) {
      initializeMap(mapToken);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [tokenEntered, mapToken]);

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

        {!tokenEntered ? (
          <div className="flex flex-col items-center justify-center p-6 bg-secondary/10 rounded-2xl max-w-xl mx-auto mb-10">
            <p className="mb-4 text-center">Для отображения карты необходимо ввести публичный токен Mapbox:</p>
            <div className="flex gap-2 w-full max-w-md">
              <input 
                type="text" 
                value={mapToken}
                onChange={(e) => setMapToken(e.target.value)}
                placeholder="Введите ваш публичный токен Mapbox"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button 
                onClick={() => setTokenEntered(true)}
                disabled={!mapToken}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Применить
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Получить токен можно на сайте <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mapbox</a> после регистрации
            </p>
          </div>
        ) : null}

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <div 
            ref={mapContainer} 
            className={`w-full h-[500px] ${!tokenEntered ? 'hidden' : ''}`}
          />
          {!tokenEntered && (
            <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">Введите токен Mapbox для отображения карты</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
