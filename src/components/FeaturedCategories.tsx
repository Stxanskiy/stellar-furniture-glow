import React from 'react';
import { motion } from 'framer-motion';
import { Sofa, Lamp, Bed, LayoutGrid, ChefHat, Bath } from 'lucide-react';

const FeaturedCategories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const categories = [
    {
      name: 'Мебель для гостиной',
      icon: Sofa,
      image: 'https://i.pinimg.com/736x/93/4f/e9/934fe9965f6955098cda51afe015e9a0.jpg',
      itemCount: '2,400+ товаров',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-700'
    },
    {
      name: 'Освещение',
      icon: Lamp,
      image: 'https://i.pinimg.com/736x/49/df/68/49df68a5a20ea281bfa21342d19d017d.jpg',
      itemCount: '1,800+ товаров',
      color: 'from-amber-500 to-orange-500',
      hoverColor: 'group-hover:from-amber-600 group-hover:to-orange-600'
    },
    {
      name: 'Спальни',
      icon: Bed,
      image: 'https://i.pinimg.com/736x/b6/f4/bf/b6f4bf15c6cd1ee61f12baa7a76cd28f.jpg',
      itemCount: '1,200+ товаров',
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'group-hover:from-purple-600 group-hover:to-pink-600'
    },
    {
      name: 'Кухни',
      icon: ChefHat,
      image: 'https://i.pinimg.com/736x/04/f7/a2/04f7a24d8c1ffdbd280cd871a330386d.jpg',
      itemCount: '900+ товаров',
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'group-hover:from-green-600 group-hover:to-emerald-600'
    },
    {
      name: 'Ванные комнаты',
      icon: Bath,
      image: 'https://i.pinimg.com/736x/3b/9a/73/3b9a73750c01dd16a17db5b65c1ed230.jpg',
      itemCount: '600+ товаров',
      color: 'from-cyan-500 to-blue-500',
      hoverColor: 'group-hover:from-cyan-600 group-hover:to-blue-600'
    },
    {
      name: 'Все категории',
      icon: LayoutGrid,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80',
      itemCount: '10,000+ товаров',
      color: 'from-slate-600 to-slate-700',
      hoverColor: 'group-hover:from-slate-700 group-hover:to-slate-800'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Популярные категории
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Откройте для себя наши тщательно отобранные коллекции мебели и декора, 
            созданные для воплощения ваших самых смелых дизайнерских идей
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="group relative overflow-hidden rounded-3xl bg-slate-100 aspect-[4/5] cursor-pointer transform transition-all duration-700 hover:scale-105 hover:shadow-2xl border border-slate-200"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} ${category.hoverColor} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <category.icon className="w-7 h-7" />
                  </div>
                </div>
                
                <div className="space-y-3 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="text-2xl font-bold group-hover:text-orange-300 transition-colors leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-90 font-medium">{category.itemCount}</p>
                  
                  {/* Hover Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30">
                      Смотреть все →
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-8 right-4 w-1 h-1 bg-white rounded-full opacity-40 group-hover:opacity-80 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.3 }}
        >
          <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Посмотреть весь каталог
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
