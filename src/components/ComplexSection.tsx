
import { motion } from 'framer-motion';

const ComplexSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ГОСТИНИЧНЫЙ КОМПЛЕКС
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Комфортабельный гостиничный комплекс с высоким уровнем обслуживания в 100 метрах от побережья Каспийского моря
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary/30 rounded-2xl p-6 backdrop-blur-sm"
          >
            <img 
              src="/lovable-uploads/60915121-3220-4dfe-af22-01e78eb99c2b.png"
              alt="Бассейн комплекса"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">Комфортный отдых</h3>
            <p className="text-gray-600">
              Современный комплекс с бассейнами, зонами отдыха и развлечений для всей семьи
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-secondary/30 rounded-2xl p-6 backdrop-blur-sm"
          >
            <img 
              src="/lovable-uploads/ec0cbbbc-428b-4cb4-a521-3adbae86863d.png"
              alt="Pool bar"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">Pool Bar</h3>
            <p className="text-gray-600">
              Прохладительные напитки, снэки и мороженое у бассейна для приятного отдыха
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary/30 rounded-2xl p-6 backdrop-blur-sm"
          >
            <img 
              src="/lovable-uploads/8e25cbd4-82d2-4e75-96eb-cff818949cec.png"
              alt="Детская площадка"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-3">Для детей</h3>
            <p className="text-gray-600">
              Детские бассейны и игровые зоны для веселого и безопасного отдыха
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComplexSection;
