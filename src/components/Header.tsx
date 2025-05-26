
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Home, Lamp, Sofa, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    { name: 'Главная', icon: Home, href: '#' },
    { name: 'Мебель', icon: Sofa, href: '#furniture' },
    { name: 'Люстры', icon: Lamp, href: '#lighting' },
    { name: 'Спальни', icon: Bed, href: '#bedroom' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 hover:text-orange-600 transition-colors cursor-pointer">
              FurniHome
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 group"
              >
                <category.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{category.name}</span>
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Поиск мебели, люстр, декора..."
                className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Поиск..."
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>

              {/* Mobile Menu Items */}
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-orange-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
