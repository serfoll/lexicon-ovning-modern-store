import type { Product } from "@/types";
import ProductCard from "./product-card";

export default function ProductGriod({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-4">
      {products.map((product: Product) => (
        <li
          key={product.id}
          className="overflow-hidden rounded-xl bg-neutral-200"
        >
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
