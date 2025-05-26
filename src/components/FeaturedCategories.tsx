
import React from 'react';
import { Sofa, Lamp, Bed, LayoutGrid } from 'lucide-react';

const FeaturedCategories = () => {
  const categories = [
    {
      name: 'Мебель для гостиной',
      icon: Sofa,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80',
      itemCount: '240+ товаров',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Освещение',
      icon: Lamp,
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80',
      itemCount: '180+ товаров',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Спальни',
      icon: Bed,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80',
      itemCount: '120+ товаров',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Все категории',
      icon: LayoutGrid,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80',
      itemCount: '1000+ товаров',
      color: 'from-gray-600 to-gray-700'
    }
  ];

  return (
    <section className="py-16 bg-white" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Популярные категории
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Откройте для себя наши самые востребованные коллекции мебели и декора
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg transform transition-transform group-hover:scale-110`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-orange-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-90">{category.itemCount}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">Смотреть все</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
