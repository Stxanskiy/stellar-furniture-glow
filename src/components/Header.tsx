import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Menu, X, Home, Lamp, Sofa, Bed, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const categories = [
    { name: 'Главная', icon: Home, href: '#' },
    { name: 'Мебель', icon: Sofa, href: '#furniture' },
    { name: 'Освещение', icon: Lamp, href: '#lighting' },
    { name: 'Спальни', icon: Bed, href: '#bedroom' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const
      }
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-slate-100">
          <div className="hidden md:flex items-center space-x-6 text-slate-600">
            <span>📞 +7 (999) 969-07-68</span>
            <span>🚚 Бесплатная доставка от 15,000 ₽</span>
          </div>
          <div className="flex items-center space-x-4 text-slate-600">
            <a href="#" className="hover:text-orange-600 transition-colors">Помощь</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Контакты</a>
          </div>
        </div>

        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent hover:from-orange-700 hover:to-orange-600 transition-all cursor-pointer">
              FurniHome
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="flex items-center space-x-2 text-slate-700 hover:text-orange-600 transition-all duration-200 group py-2 px-3 rounded-lg hover:bg-orange-50"
              >
                <category.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{category.name}</span>
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Поиск мебели, декора, освещения..."
                className="pl-12 pr-4 py-3 w-full border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl bg-slate-50 hover:bg-white transition-colors"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-600 hover:bg-orange-700 px-4 py-1.5 rounded-lg">
                Найти
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-orange-50 hover:text-orange-600 transition-colors p-3 rounded-xl"
            >
              <Heart className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-orange-50 hover:text-orange-600 transition-colors p-3 rounded-xl"
            >
              <User className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-orange-50 hover:text-orange-600 transition-colors p-3 rounded-xl"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold animate-pulse">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-3 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-slate-200 py-4 bg-white/95 backdrop-blur-md"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Поиск..."
                    className="pl-12 pr-4 py-3 w-full rounded-xl bg-slate-50"
                  />
                </div>

                {/* Mobile Menu Items */}
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="flex items-center space-x-3 text-slate-700 hover:text-orange-600 transition-colors py-3 px-4 rounded-xl hover:bg-orange-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
