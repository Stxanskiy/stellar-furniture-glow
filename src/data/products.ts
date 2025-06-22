export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew: boolean;
  isHot: boolean;
  description?: string;
  specifications?: Record<string, string>;
  images?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Стул "Комфорт Люкс"',
    price: 89990,
    originalPrice: 119990,
    image: '/chairs/1.jpg',
    rating: 4.8,
    reviews: 124,
    category: 'Стулья',
    isNew: false,
    isHot: true,
    description: 'Элегантный стул с мягкой обивкой и удобной спинкой. Идеально подходит для гостиной или столовой.',
    specifications: {
      'Материал': 'Массив дерева, ткань',
      'Размеры': '45×55×85 см',
      'Цвет': 'Бежевый',
      'Вес': '8.5 кг'
    },
    images: ['/chairs/1.jpg', '/chairs/1.1.jpg']
  },
  {
    id: 2,
    name: 'Стул "Классик"',
    price: 45990,
    originalPrice: null,
    image: '/chairs/2.jpg',
    rating: 4.9,
    reviews: 89,
    category: 'Стулья',
    isNew: true,
    isHot: false,
    description: 'Классический деревянный стул с резными элементами. Традиционный дизайн для любого интерьера.',
    specifications: {
      'Материал': 'Массив дуба',
      'Размеры': '42×52×90 см',
      'Цвет': 'Натуральный дуб',
      'Вес': '6.2 кг'
    },
    images: ['/chairs/2.jpg', '/chairs/2.1.jpg', '/chairs/2.2.jpg']
  },
  {
    id: 3,
    name: 'Стул "Модерн"',
    price: 159990,
    originalPrice: 199990,
    image: '/chairs/3.jpg',
    rating: 4.7,
    reviews: 67,
    category: 'Стулья',
    isNew: false,
    isHot: true,
    description: 'Современный стул с металлическим каркасом и кожаной обивкой. Стильное решение для офиса или дома.',
    specifications: {
      'Материал': 'Металл, кожа',
      'Размеры': '48×58×88 см',
      'Цвет': 'Черный',
      'Вес': '12.3 кг'
    },
    images: ['/chairs/3.jpg', '/chairs/3.1.jpg']
  },
  {
    id: 4,
    name: 'Стул "Уют"',
    price: 32990,
    originalPrice: null,
    image: '/chairs/4.jpg',
    rating: 4.6,
    reviews: 156,
    category: 'Стулья',
    isNew: true,
    isHot: false,
    description: 'Уютный стул с мягкой обивкой и подлокотниками. Отличный выбор для отдыха и чтения.',
    specifications: {
      'Материал': 'Дерево, велюр',
      'Размеры': '65×75×95 см',
      'Цвет': 'Серый',
      'Вес': '15.8 кг'
    },
    images: ['/chairs/4.jpg']
  },
  {
    id: 5,
    name: 'Стул "Минимализм"',
    price: 78990,
    originalPrice: 94990,
    image: '/chairs/5.jpg',
    rating: 4.8,
    reviews: 93,
    category: 'Стулья',
    isNew: false,
    isHot: false,
    description: 'Минималистичный стул с простыми линиями и качественными материалами. Подходит для любого стиля.',
    specifications: {
      'Материал': 'Береза, лен',
      'Размеры': '40×50×82 см',
      'Цвет': 'Белый',
      'Вес': '4.7 кг'
    },
    images: ['/chairs/5.jpg', '/chairs/5.1.jpg']
  },
  {
    id: 6,
    name: 'Стул "Премиум"',
    price: 189990,
    originalPrice: 249990,
    image: '/chairs/6.jpg',
    rating: 4.5,
    reviews: 78,
    category: 'Стулья',
    isNew: false,
    isHot: true,
    description: 'Премиальный стул с эксклюзивным дизайном и высококачественными материалами. Для ценителей прекрасного.',
    specifications: {
      'Материал': 'Массив ореха, кожа',
      'Размеры': '50×60×92 см',
      'Цвет': 'Коричневый',
      'Вес': '18.5 кг'
    },
    images: ['/chairs/6.jpg', '/chairs/6.1.jpg', '/chairs/6.2.jpg']
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getHotProducts = (): Product[] => {
  return products.filter(product => product.isHot);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
}; 