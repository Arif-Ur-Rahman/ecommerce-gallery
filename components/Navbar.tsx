'use client';

import CartIcon from './CartIcon';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50 border-b border-neutral-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
          ECOMMERCE
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
            Home
          </Link>
          <Link href="/products" className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
            Products
          </Link>
          <CartIcon />
        </nav>
      </div>
    </header>
  );
}