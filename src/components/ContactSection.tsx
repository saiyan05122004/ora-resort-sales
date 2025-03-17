
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы код для отправки данных формы
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Сбросить форму через 3 секунды
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-semibold">ОСТАЛИСЬ ВОПРОСЫ?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами для приобретения апартаментов
          </h2>
          <p className="text-xl text-gray-700">
            Наши консультанты подробно расскажут об инвестиционных возможностях и помогут выбрать оптимальный вариант
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary/10 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Наши контакты</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Телефон</h4>
                  <a href="tel:+78934696969" className="text-gray-600 hover:text-primary transition-colors">
                    8 903 469 69 69
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Email</h4>
                  <a href="mailto:79034696969@yandex.ru" className="text-gray-600 hover:text-primary transition-colors">
                    79034696969@yandex.ru
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Мы отвечаем в течение 24 часов</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Адрес</h4>
                  <p className="text-gray-600">
                    г. Каспийск, ул. Приморская, 21
                  </p>
                  <p className="text-sm text-gray-500 mt-1">100 метров от побережья Каспийского моря</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Оставить заявку</h3>
              
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Заявка отправлена!</h4>
                  <p className="text-gray-600 text-center">
                    Спасибо за ваше обращение. Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="example@mail.ru"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="Интересуют апартаменты для инвестиций..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-secondary font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
