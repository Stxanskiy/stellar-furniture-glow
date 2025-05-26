
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-orange-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">Топ продаж 2024</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Создайте дом
                <span className="text-orange-600 block">вашей мечты</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Эксклюзивная мебель, стильные люстры и комплекты для спальни. 
                Качество, которому доверяют более 50,000 семей.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-medium group transition-all duration-300 hover:scale-105"
              >
                Смотреть каталог
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300"
              >
                Консультация дизайнера
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Товаров в наличии</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative animate-scale-in">
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
                alt="Современная мебель"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">В наличии</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">-25%</div>
                <div className="text-xs text-gray-600">Скидка</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-100 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-orange-200 to-transparent opacity-30 rounded-tr-full"></div>
    </section>
  );
};

export default Hero;
