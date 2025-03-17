import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold">ОСТАЛИСЬ ВОПРОСЫ?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами для приобретения апартаментов
          </h2>
          <p className="text-xl text-gray-700">
            Наши консультанты подробно расскажут об инвестиционных возможностях и помогут выбрать оптимальный вариант
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="bg-secondary/10 p-8 rounded-2xl max-w-2xl w-full">
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
                  <p className="text-gray-600">г. Каспийск, ул. Коттеджная</p>
                  <p className="text-sm text-gray-500 mt-1">100 метров от побережья Каспийского моря</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 pt-2">
                <a href="https://www.instagram.com/ora_apart/?igsh=MTJ6bWl4YzZoaWx3ag%3D%3D#" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 group-hover:text-primary transition-colors">Instagram</h4>
                    <p className="text-gray-600 group-hover:text-primary transition-colors">Наш профиль в Instagram</p>
                  </div>
                </a>
              </div>
              
              <div className="flex items-start gap-4">
                <a href="https://t.me/oraapartament" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 group-hover:text-primary transition-colors">Telegram</h4>
                    <p className="text-gray-600 group-hover:text-primary transition-colors">Наш канал в Telegram</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;