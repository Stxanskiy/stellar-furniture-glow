import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Star, ArrowLeft, ChevronLeft, ChevronRight, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProductById } from '@/data/products';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const product = getProductById(Number(id));

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    }
  }, [product]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const nextImage = () => {
    if (product?.images) {
      setSelectedImage((prev) => (prev + 1) % product.images!.length);
    }
  };

  const prevImage = () => {
    if (product?.images) {
      setSelectedImage((prev) => (prev - 1 + product.images!.length) % product.images!.length);
    }
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  if (isLoading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка товара...</p>
        </div>
      </motion.div>
    );
  }

  if (!product) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Товар не найден</h2>
          <Button onClick={() => navigate('/')} className="bg-orange-600 hover:bg-orange-700">
            Вернуться на главную
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-gray-50"
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="bg-white shadow-sm border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад
          </Button>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="space-y-6"
          >
            <motion.div 
              className="relative aspect-square bg-white rounded-2xl shadow-lg overflow-hidden group"
              initial={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              exit={{ boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }}
            >
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="loading-spinner"></div>
                </div>
              )}
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: isImageLoading ? 0 : 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
              />
              
              {product.images && product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </button>
                </>
              )}

              <motion.div 
                className="absolute top-4 left-4 flex flex-col gap-2"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {product.isNew && (
                    <Badge className="bg-green-500 text-white hover:bg-green-600 animate-pulse">
                      Новинка
                    </Badge>
                )}
                {product.isHot && (
                  <Badge className="bg-red-500 text-white hover:bg-red-600 animate-pulse">
                      Хит продаж
                    </Badge>
                )}
                {product.originalPrice && (
                  <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </motion.div>
            </motion.div>

            {product.images && product.images.length > 1 && (
              <motion.div 
              initial={{ opacity: 1}}
              exit={{ opacity: 0 }}
              className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <motion.button
                    exit={{borderColor: 'transparent' }}
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      selectedImage === index
                        ? 'border-orange-500 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - изображение ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm text-orange-600 font-medium">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 transition-all duration-300 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-lg font-semibold text-gray-900">{product.rating}</span>
                </div>
                <span className="text-gray-600">({product.reviews} отзывов)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-green-600 font-medium">
                  Экономия {formatPrice(product.originalPrice - product.price)}
                </p>
              )}
            </div>

            {product.description && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Описание</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )}

            {product.specifications && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Характеристики</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div 
                      key={key} 
                      className="flex justify-between py-2 border-b border-gray-100"
                    >
                      <span className="text-gray-600">{key}</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-lg font-medium text-gray-900">Количество:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300 font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Добавить в корзину
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`px-6 py-4 border-2 transition-all duration-300 hover:scale-105 ${
                    isFavorite
                      ? 'border-red-500 text-red-500 hover:bg-red-50'
                      : 'border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 group">
                <Truck className="w-6 h-6 text-orange-600 transition-all duration-300 group-hover:scale-110" />
                <div>
                  <p className="font-medium text-gray-900">Бесплатная доставка</p>
                  <p className="text-sm text-gray-600">При заказе от 50 000 ₽</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Shield className="w-6 h-6 text-orange-600 transition-all duration-300 group-hover:scale-110" />
                <div>
                  <p className="font-medium text-gray-900">Гарантия качества</p>
                  <p className="text-sm text-gray-600">2 года гарантии</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <RotateCcw className="w-6 h-6 text-orange-600 transition-all duration-300 group-hover:scale-110" />
                <div>
                  <p className="font-medium text-gray-900">Возврат</p>
                  <p className="text-sm text-gray-600">14 дней на возврат</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPage; 