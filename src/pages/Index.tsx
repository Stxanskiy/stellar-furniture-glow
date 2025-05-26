
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <FeaturedCategories />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
