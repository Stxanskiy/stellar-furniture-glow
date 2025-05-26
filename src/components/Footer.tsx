
import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Каталог',
      links: [
        'Мебель для гостиной',
        'Спальни',
        'Кухни',
        'Освещение',
        'Декор',
        'Аксессуары'
      ]
    },
    {
      title: 'Информация',
      links: [
        'О компании',
        'Доставка и оплата',
        'Гарантия',
        'Возврат товара',
        'Услуги дизайнера',
        'Блог'
      ]
    },
    {
      title: 'Поддержка',
      links: [
        'Помощь',
        'Контакты',
        'Политика конфиденциальности',
        'Пользовательское соглашение',
        'Карта сайта',
        'FAQ'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4">FurniHome</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Ваш надежный партнер в создании уютного и стильного дома. 
                  Мы предлагаем качественную мебель, люстры и декор от ведущих производителей.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span>info@furnihome.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span>Москва, ул. Примерная, д. 123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <span>Пн-Вс: 9:00 - 21:00</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-orange-400">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-orange-400 mb-2">
                Подпишитесь на рассылку
              </h4>
              <p className="text-gray-300">
                Получайте первыми информацию о новинках и специальных предложениях
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-medium transition-colors duration-300">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 FurniHome. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
