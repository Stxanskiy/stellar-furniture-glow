import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';

const ProductGrid = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Рекомендуемые товары
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Специально отобранные для вас предложения с лучшими скидками
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  />
                </Link>
                
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
                  <Link to={`/product/${product.id}`}>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-10 h-10 rounded-full p-0 bg-white/90 hover:bg-white shadow-lg"
                    >
                      <Eye className="w-4 h-4 text-gray-600" />
                    </Button>
                  </Link>
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
                
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>

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
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.3 }}
        >
          <Button 
            size="lg" 
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300"
          >
            Показать больше товаров
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
