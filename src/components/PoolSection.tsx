
import { motion } from 'framer-motion';
import { Waves, Umbrella, Baby, Coffee } from 'lucide-react';

const PoolSection = () => {
  const features = [
    {
      icon: Waves,
      title: "Современная система очистки",
      description: "Безхлорная система очистки воды, подходящая даже для аллергиков"
    },
    {
      icon: Umbrella,
      title: "Зона отдыха",
      description: "Комфортные шезлонги и зоны отдыха вокруг бассейна"
    },
    {
      icon: Baby,
      title: "Детский бассейн",
      description: "Специальный теплый бассейн для детей с игровой зоной"
    },
    {
      icon: Coffee,
      title: "Pool Bar",
      description: "Напитки и закуски прямо у бассейна"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Бассейны и зоны отдыха
          </h2>
          <p className="text-xl text-gray-700">
            Просторные бассейны с современной системой очистки воды и комфортными зонами отдыха
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/lovable-uploads/7724b3b3-63c9-46cf-886c-a8f72f3a0f61.png"
              alt="Бассейн"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </motion.div>
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <feature.icon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoolSection;
