import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.5
  };

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      <Hero />
      <FeaturedCategories />
      <ProductGrid />
      <Footer />
    </motion.div>
  );
};

export default Index;
