import type { Product } from "@/types";
import ProductGrid from "./product-grid";

export function ProductsSection({
  heading,
  products,
}: {
  heading?: string;
  products: Product[];
}) {
  return (
    <section className="container mx-auto px-8 sm:px-0 mt-8 space-y-4">
      {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
      <ProductGrid products={products} />
    </section>
  );
}
