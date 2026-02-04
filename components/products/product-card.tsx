import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative isolate grid w-full pb-4 hover:cursor-pointer">
      <div className="order-2 mx-auto mt-4 text-center">
        <h3 className="font-bold text-neutral-900 group-hover:underline">
          <Link href={`/products/${product.id}`}>
            <span className="absolute inset-0 z-2"></span>
            {product.title}
          </Link>
        </h3>
        <p className="text-neutral-700">
          <span>Price: </span>
          <span className="font-bold">${product.price}</span>
        </p>
      </div>
      <div className="order-1 overflow-hidden">
        <Image
          className="mx-auto aspect-square object-contain transition-all duration-200 group-hover:scale-[1.02]"
          src={product.images[0]}
          alt={`Product image of ${product.title}`}
          width={200}
          height={200}
        />
      </div>
    </article>
  );
}
