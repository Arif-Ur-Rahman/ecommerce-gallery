import { getProducts } from '@/lib/data';
import ProductList from '@/components/ProductList';

export default async function ProductsPage() {
  const products = await getProducts();
  
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <ProductList products={products} />
    </div>
  );
}