
import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductGrid = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: 'Диван "Комфорт Люкс"',
      price: 89990,
      originalPrice: 119990,
      image: 'https://i.pinimg.com/736x/ae/e6/35/aee63548759458749cdb95f7317824e1.jpg',
      rating: 4.8,
      reviews: 124,
      category: 'Мебель',
      isNew: false,
      isHot: true
    },
    {
      id: 2,
      name: 'Люстра "Кристалл"',
      price: 45990,
      originalPrice: null,
      image: 'https://i.pinimg.com/736x/39/68/08/396808ff9555f65c8c06cb96a7824659.jpg',
      rating: 4.9,
      reviews: 89,
      category: 'Освещение',
      isNew: true,
      isHot: false
    },
    {
      id: 3,
      name: 'Спальная гарнитура"Мечта"',
      price: 159990,
      originalPrice: 199990,
      image: 'https://i.pinimg.com/736x/06/9a/28/069a28fa86e643f61d5229bdb50aa0a1.jpg',
      rating: 4.7,
      reviews: 67,
      category: 'Спальня',
      isNew: false,
      isHot: true
    },
    {
      id: 4,
      name: 'Кресло "Релакс"',
      price: 32990,
      originalPrice: null,
      image: 'https://i.pinimg.com/736x/6b/f8/83/6bf883f7b6c90bad7bb0c7e0d1b7f8c6.jpg',
      rating: 4.6,
      reviews: 156,
      category: 'Мебель',
      isNew: true,
      isHot: false
    },
    {
      id: 5,
      name: 'Обеденный стол "Классик"',
      price: 78990,
      originalPrice: 94990,
      image: 'https://i.pinimg.com/736x/d1/65/a2/d165a29cc64e13b224d45ba44d8084f5.jpg',
      rating: 4.8,
      reviews: 93,
      category: 'Мебель',
      isNew: false,
      isHot: false
    },
    {
      id: 6,
      name: 'Торшер "Стиль"',
      price: 18990,
      originalPrice: 24990,
      image: 'https://i.pinimg.com/736x/ab/56/b7/ab56b75ececd221f3a272d96b1efcd3c.jpg',
      rating: 4.5,
      reviews: 78,
      category: 'Освещение',
      isNew: false,
      isHot: true
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Рекомендуемые товары
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Специально отобранные для вас предложения с лучшими скидками
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white hover:bg-green-600">
                      Новинка
                    </Badge>
                  )}
                  {product.isHot && (
                    <Badge className="bg-red-500 text-white hover:bg-red-600">
                      Хит продаж
                    </Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-10 h-10 rounded-full p-0 bg-white/90 hover:bg-white shadow-lg"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        favorites.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      } transition-colors`} 
                    />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-10 h-10 rounded-full p-0 bg-white/90 hover:bg-white shadow-lg"
                  >
                    <Eye className="w-4 h-4 text-gray-600" />
                  </Button>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    В корзину
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-orange-600 font-medium">{product.category}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300"
          >
            Показать больше товаров
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
