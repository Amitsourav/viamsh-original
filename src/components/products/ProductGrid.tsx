'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, List } from 'lucide-react';
import type { Product } from '@/types';
import ProductCard from '@/components/products/ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-medium text-gray-500">No products found</p>
        <p className="text-sm text-gray-400 mt-1">
          Try adjusting your filters or search query.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* View Toggle */}
      <div className="flex items-center justify-end gap-1 mb-6">
        <button
          type="button"
          onClick={() => setView('grid')}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            view === 'grid'
              ? 'bg-[#2E7D32] text-white'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
          aria-label="Grid view"
        >
          <LayoutGrid size={18} />
        </button>
        <button
          type="button"
          onClick={() => setView('list')}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            view === 'list'
              ? 'bg-[#2E7D32] text-white'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
          aria-label="List view"
        >
          <List size={18} />
        </button>
      </div>

      {/* Products */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={view}
        className={
          view === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'flex flex-col gap-4'
        }
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
