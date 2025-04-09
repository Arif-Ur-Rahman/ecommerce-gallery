'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/lib/data';
import ProductCard from './ProductCard';
import Filter from './Filter';

export default function ProductList({ products: initialProducts }: { products: Product[] }) {
  const [products, setProducts] = useState(initialProducts);

  const handleFilter = (filters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    inStock?: boolean;
  }) => {
    let filteredProducts = [...initialProducts];

    if (filters.category) {
      filteredProducts = filteredProducts.filter(
        p => p.category === filters.category
      );
    }

    if (filters.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        p => p.price >= filters.minPrice!
      );
    }

    if (filters.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        p => p.price <= filters.maxPrice!
      );
    }

    if (filters.inStock) {
      filteredProducts = filteredProducts.filter(p => p.inStock);
    }

    setProducts(filteredProducts);
  };

  return (
    <div>
      <Filter onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}