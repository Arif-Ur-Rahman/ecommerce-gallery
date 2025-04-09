import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import AddToCartButton from '@/components/AddToCartButton';
import { getProduct } from '@/lib/data';

interface PageProps {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProduct(params.id);
  if (!product) return {};

  return {
    title: `${product.name} | E-Commerce Gallery`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.image ? [product.image] : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.id);
  if (!product) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>
          {/* Thumbnail gallery would go here */}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-2 flex items-center space-x-4">
              <p className="text-2xl font-semibold text-purple-600">
                ${product.price.toFixed(2)}
              </p>
              {product.originalPrice && (
                <p className="text-lg text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>

          {/* Rating and reviews would go here */}

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Description</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-lg font-semibold text-gray-900">Details</h2>
            <ul className="mt-2 space-y-2">
              <li className="flex">
                <span className="w-24 text-gray-700">Category:</span>
                <span className="text-gray-900 capitalize">
                  {product.category}
                </span>
              </li>
              <li className="flex">
                <span className="w-24 text-gray-700">Availability:</span>
                <span
                  className={
                    product.inStock
                      ? 'text-green-600 font-medium'
                      : 'text-red-600 font-medium'
                  }
                >
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </li>
              {/* Additional details would go here */}
            </ul>
          </div>

          <div className="pt-4">
            <AddToCartButton product={product} disabled={!product.inStock} />
          </div>
        </div>
      </div>

      {/* Product reviews section would go here */}
      {/* Related products section would go here */}
    </div>
  );
}