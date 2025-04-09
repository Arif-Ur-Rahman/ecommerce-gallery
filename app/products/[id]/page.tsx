import AddToCartButton from '@/components/AddToCartButton';
import { getProducts } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const products = await getProducts();
  const product = products.find(p => p.id === params.id);

  if (!product) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl my-4">${product.price.toFixed(2)}</p>
          
          <div className="my-6">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="mt-2 text-gray-700">{product.description}</p>
          </div>

          <div className="my-6">
            <h2 className="text-lg font-semibold">Details</h2>
            <ul className="mt-2 space-y-1">
              <li><strong>Category:</strong> {product.category}</li>
              <li>
                <strong>Availability:</strong> 
                <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                  {product.inStock ? ' In Stock' : ' Out of Stock'}
                </span>
              </li>
            </ul>
          </div>

          <AddToCartButton product={product} disabled={!product.inStock} />
        </div>
      </div>
    </div>
  );
}