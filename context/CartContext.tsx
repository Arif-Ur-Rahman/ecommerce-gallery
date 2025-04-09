'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/lib/data';
import toast from 'react-hot-toast';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string, productName?: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    // Prevent rapid multiple clicks
    if (cart.some(item => item.id === product.id)) {
      const existingItem = cart.find(item => item.id === product.id)!;
      toast.success(`Increased ${product.name} quantity to ${existingItem.quantity + 1}`, {
        icon: '🛒',
        position: 'bottom-right',
        style: {
          background: '#6b21a8',
          color: '#faf5ff',
        },
        id: product.id // Unique ID for this product's toast
      });
    } else {
      toast.success(`${product.name} added to cart!`, {
        icon: '✨',
        position: 'bottom-right',
        style: {
          background: '#6b21a8',
          color: '#faf5ff',
        },
        id: product.id // Unique ID for this product's toast
      });
    }
  
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string, productName?: string) => {
    setCart((prev) => {
      const itemToRemove = prev.find(item => item.id === productId);
      const newCart = prev.filter((item) => item.id !== productId);
      
      // Show toast only if item was actually removed
      if (itemToRemove && productName && prev.length !== newCart.length) {
        toast.success(`${productName} removed from cart`, {
          icon: '🗑️',
          position: 'bottom-right',
          style: {
            background: '#6b21a8',
            color: '#faf5ff',
          },
          id: `remove-${productId}` // Unique ID for remove toasts
        });
      }
      
      return newCart;
    });
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Cart cleared successfully', {
      position: 'bottom-right',
      style: {
        background: '#6b21a8',
        color: '#faf5ff',
      }
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity,
        clearCart,
        total,
        itemCount 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};