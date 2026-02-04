import { ProductsSection } from "@/components/products/products-section";
import { getProducts } from "@/data/products";

export default async function Home() {
  const products = await getProducts({ offset: 0, limit: 16 });

  return (
    <main>
      {/* HERO GOES HERE*/}
      <ProductsSection heading="List of Products" products={products} />
    </main>
  );
}
