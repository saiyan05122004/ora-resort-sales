
import { motion } from 'framer-motion';
import { Star, Crown, Home } from 'lucide-react';

const ApartmentsSection = () => {
  const apartments = [
    {
      type: "Номера Люкс",
      icon: Crown,
      description: [
        "Просторное и уютное помещение в современном стиле с элементами классики",
        "Большая двуспальная кровать с ортопедическим матрасом",
        "Панорамные окна с видом на море и бассейн",
        "Современная ванная комната со всеми удобствами",
        "Телевизор, кондиционер, мини-бар, сейф, Wi-Fi"
      ],
      image: "/lovable-uploads/ec0cbbbc-428b-4cb4-a521-3adbae86863d.png"
    },
    {
      type: "Номера полу-люкс",
      icon: Star,
      description: [
        "Спальня с большой кроватью",
        "Отдельная комната с двумя односпальными кроватями",
        "Идеально для семьи или группы друзей",
        "Телевизоры, шкафы, письменные столы",
        "Ванная комната с феном и туалетными принадлежностями"
      ],
      image: "/lovable-uploads/60915121-3220-4dfe-af22-01e78eb99c2b.png"
    },
    {
      type: "Номера стандарт",
      icon: Home,
      description: [
        "Просторное помещение в современном стиле",
        "Большая кровать с удобным матрасом",
        "Кресла для отдыха, телевизор, рабочий стол",
        "Wi-Fi, чайник с набором чая и кофе",
        "Ванная комната с феном и туалетными принадлежностями"
      ],
      image: "/lovable-uploads/8e25cbd4-82d2-4e75-96eb-cff818949cec.png"
    }
  ];

  return (
    <section id="apartments" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Наши апартаменты
          </h2>
          <p className="text-xl text-gray-700">
            Выберите идеальный номер для вашего комфортного отдыха
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={apartment.image}
                  alt={apartment.type}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <apartment.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {apartment.type}
                </h3>
                <ul className="space-y-3">
                  {apartment.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentsSection;
