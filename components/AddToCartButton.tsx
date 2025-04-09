'use client';

import { useCart } from '@/context/CartContext';

export default function AddToCartButton({
  product,
  disabled,
}: {
  product: Product;
  disabled?: boolean;
}) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      disabled={disabled}
      className={`px-6 py-3 rounded-md text-white ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {disabled ? 'Out of Stock' : 'Add to Cart'}
    </button>
  );
}