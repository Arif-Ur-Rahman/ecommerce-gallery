import { getProducts } from '@/lib/data';
import ProductList from '@/components/ProductList';

export default async function Home() {
  const products = await getProducts();
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 ">Product Gallery</h1>
      <ProductList products={products} />
    </div>
  );
}