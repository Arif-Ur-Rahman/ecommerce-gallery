'use client';

import CartIcon from './CartIcon';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-purple-700 shadow-lg py-3 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-white hover:text-purple-200 transition-colors duration-300 flex items-center"
        >
          <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg mr-2">🛍️</span>
          <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-purple-300">
          E-commerce Product Gallery
          </span>
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link 
            href="/" 
            className="text-purple-100 hover:text-white transition-colors duration-200 font-medium px-3 py-1 rounded-lg hover:bg-white/10"
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className="text-purple-100 hover:text-white transition-colors duration-200 font-medium px-3 py-1 rounded-lg hover:bg-white/10"
          >
            Products
          </Link>
          <div className="ml-4">
            <CartIcon />
          </div>
        </nav>
      </div>
    </header>
  );
}