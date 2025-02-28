
import { motion } from 'framer-motion';
import { Star, Crown, Home, Check } from 'lucide-react';

const ApartmentsSection = () => {
  const apartments = [
    {
      type: "Апартаменты ЛЮКС",
      icon: Crown,
      description: [
        "Просторное помещение (58-65 м²) в современном стиле с элементами классики",
        "Панорамные окна с видом на море и бассейн",
        "Отдельная спальня и гостиная зона",
        "Полностью оборудованная кухня с современной техникой",
        "Премиальная отделка и дизайнерская мебель"
      ],
      amenities: [
        "Большая двуспальная кровать King-size",
        "Два телевизора, кондиционер, мини-бар, сейф",
        "Высокоскоростной Wi-Fi",
        "Современная ванная комната с душевой кабиной и джакузи"
      ],
      image: "/lovable-uploads/ec0cbbbc-428b-4cb4-a521-3adbae86863d.png",
      floorplan: "/lovable-uploads/3231194c-7fbf-45df-9b3e-26acec733b88.png",
      price: "от 8.5 млн ₽",
      roi: "12-15% годовых"
    },
    {
      type: "Апартаменты ПОЛУ-ЛЮКС",
      icon: Star,
      description: [
        "Комфортные апартаменты (45-50 м²) с современным дизайном",
        "Спальня с большой кроватью и отдельная гостиная",
        "Идеально для семьи или небольшой компании",
        "Качественная отделка и стильная мебель",
        "Вид на бассейн или внутренний двор комплекса"
      ],
      amenities: [
        "Удобная двуспальная кровать",
        "Телевизор, кондиционер, холодильник",
        "Высокоскоростной Wi-Fi",
        "Современная ванная комната с душевой кабиной"
      ],
      image: "/lovable-uploads/60915121-3220-4dfe-af22-01e78eb99c2b.png",
      floorplan: "/lovable-uploads/3231194c-7fbf-45df-9b3e-26acec733b88.png",
      price: "от 6.2 млн ₽",
      roi: "10-12% годовых"
    },
    {
      type: "Апартаменты СТАНДАРТ",
      icon: Home,
      description: [
        "Уютные апартаменты (35-40 м²) с функциональной планировкой",
        "Комфортная студия с зонированием пространства",
        "Оптимальный вариант для инвестиций или проживания",
        "Современная отделка и необходимая мебель",
        "Балкон с видом на территорию комплекса"
      ],
      amenities: [
        "Удобная кровать с ортопедическим матрасом",
        "Телевизор, кондиционер, холодильник",
        "Высокоскоростной Wi-Fi",
        "Компактная ванная комната с душем"
      ],
      image: "/lovable-uploads/8e25cbd4-82d2-4e75-96eb-cff818949cec.png",
      floorplan: "/lovable-uploads/3231194c-7fbf-45df-9b3e-26acec733b88.png",
      price: "от 4.9 млн ₽",
      roi: "8-10% годовых"
    }
  ];

  return (
    <section id="apartments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-semibold">ВЫГОДНОЕ ВЛОЖЕНИЕ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Варианты апартаментов для инвестиций
          </h2>
          <p className="text-xl text-gray-700">
            Выберите идеальный вариант для вашего бюджета и инвестиционных целей
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {apartments.map((apartment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <img
                  src={apartment.image}
                  alt={apartment.type}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full p-2">
                  <apartment.icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {apartment.type}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 font-medium">{apartment.price}</span>
                    <span className="bg-secondary/80 text-white px-3 py-1 rounded-full text-sm">
                      Доходность: {apartment.roi}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">Характеристики:</h4>
                  <ul className="space-y-2">
                    {apartment.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="w-5 h-5 mt-0.5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">Удобства:</h4>
                  <ul className="space-y-2">
                    {apartment.amenities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="w-5 h-5 mt-0.5 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center">
                          <Check className="w-3 h-3 text-secondary" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-3 text-gray-800">Планировка:</h4>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <img
                      src={apartment.floorplan}
                      alt={`Планировка ${apartment.type}`}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a 
                    href="#contact" 
                    className="block w-full bg-primary hover:bg-primary-dark text-secondary font-bold py-3 rounded-lg text-center transition-colors"
                  >
                    Узнать подробнее
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentsSection;
