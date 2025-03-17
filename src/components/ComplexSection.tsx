
import { motion } from 'framer-motion';
import { ShieldCheck, Waves, Umbrella } from 'lucide-react';

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
            ИНВЕСТИЦИЯ В КОМФОРТ И ПРЕСТИЖ
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Приобретение апартаментов в ORA HOTEL&SPA — это не только выгодное вложение средств, 
            но и возможность наслаждаться всеми преимуществами курортного комплекса премиум-класса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Umbrella className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Курортный комплекс</h3>
            <p className="text-gray-600 mb-4">
              Современный комплекс с бассейнами, зонами отдыха и развлечений для всей семьи.
              Безупречный сервис и все условия для комфортного отдыха.
            </p>
            <img 
              src="/lovable-uploads/pools.png"
              alt="Бассейн комплекса"
              className="w-full h-48 object-cover rounded-xl mt-4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-secondary/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Waves className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">100 метров до моря</h3>
            <p className="text-gray-600 mb-4">
              Близость к морю делает инвестицию особенно привлекательной. Это идеальное место для отдыха
              и постоянное увеличение стоимости вашей недвижимости.
            </p>
            <img 
              src="/lovable-uploads/ec0cbbbc-428b-4cb4-a521-3adbae86863d.png"
              alt="Вид на море"
              className="w-full h-48 object-cover rounded-xl mt-4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
          >
            <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Надежная инвестиция</h3>
            <p className="text-gray-600 mb-4">
              Апартаменты в курортной зоне - это возможность получать пассивный доход от аренды
              и гарантированное увеличение капитала в долгосрочной перспективе.
            </p>
            <img 
              src="/lovable-uploads/invest.jpg"
              alt="Интерьер апартаментов"
              className="w-full h-48 object-cover rounded-xl mt-4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComplexSection;
