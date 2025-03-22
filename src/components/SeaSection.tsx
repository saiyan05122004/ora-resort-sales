
import { motion } from 'framer-motion';

const SeaSection = () => {
  return (
    <section id="sea" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ВЫХОД К МОРЮ
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Наслаждайтесь живописными видами и прямым доступом к пляжу всего в нескольких минутах ходьбы от вашего апартамента
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <img
              src="/uploads/beach.jpeg"
              alt="Пляж"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <img
              src="/uploads/beach2.jpeg"
              alt="Море"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeaSection;
