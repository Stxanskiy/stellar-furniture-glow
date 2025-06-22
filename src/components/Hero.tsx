import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Truck, Shield, Award } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 0.3
      }
    }
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="flex items-center space-x-3 text-orange-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-sm font-semibold tracking-wide uppercase">Рейтинг 4.9/5</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Дом мечты
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                  начинается здесь
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-xl">
                Превратите свой дом в произведение искусства с нашей эксклюзивной коллекцией мебели и декора премиум-класса.
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Исследовать каталог
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                3D Планировщик
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div className="grid grid-cols-3 gap-8 pt-8" variants={itemVariants}>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Бесплатная доставка</div>
                  <div className="text-xs text-slate-600">от 15,000 ₽</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Гарантия качества</div>
                  <div className="text-xs text-slate-600">до 10 лет</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Премиум качество</div>
                  <div className="text-xs text-slate-600">сертифицировано</div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200" variants={itemVariants}>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">50K+</div>
                <div className="text-sm text-slate-600">Довольных клиентов</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">5000+</div>
                <div className="text-sm text-slate-600">Товаров в наличии</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">24/7</div>
                <div className="text-sm text-slate-600">Поддержка клиентов</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-700">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
                  alt="Современная мебель премиум класса"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
                variants={floatingVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">В наличии</div>
                    <div className="text-xs text-slate-600">Готов к отправке</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl"
                variants={floatingVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.3 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">-35%</div>
                  <div className="text-sm opacity-90">Скидка</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
