import { ProductsSection } from "@/components";
import { getProducts } from "@/data/products";

export default async function Home() {
  const products = await getProducts({ limit: 0, skip: 0 });
  return (
    <main>
      {/* HERO GOES HERE*/}
      <ProductsSection heading="List of Products" products={products} />
    </main>
  );
}
