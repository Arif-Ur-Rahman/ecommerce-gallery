'use client';

import { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border border-purple-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full bg-white">
      {/* Product Image - Compact Size */}
      <div className="relative aspect-[4/3] bg-purple-50 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 480px) 90vw, (max-width: 640px) 45vw, (max-width: 768px) 30vw, 20vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-purple-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Product Info - Compact Layout */}
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-medium text-base mb-1 line-clamp-2 text-purple-900 leading-tight">
          {product.name}
        </h3>
        <p className="text-purple-700/80 text-xs mb-2 line-clamp-2 leading-snug">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-purple-800">${product.price.toFixed(2)}</span>
            {!product.inStock && (
              <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded-full">
                Out of Stock
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={`w-full py-1.5 px-3 rounded-md text-sm transition-all duration-150 ${
              product.inStock
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-purple-100 text-purple-400 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}