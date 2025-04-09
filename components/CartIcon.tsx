'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function CartIcon() {
  const { cart } = useCart();

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-6 h-6" />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {cart.length}
        </span>
      )}
    </Link>
  );
}