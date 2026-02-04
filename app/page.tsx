import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { checkHostname, formatUrl } from "@/helpers";
import { getProducts } from "@/data/products";

export default async function Home() {
  const products = await getProducts({ offset: 0, limit: 16 });

  return (
    <main>
      {/* HERO GOES HERE*/}
      <section className="container mx-auto px-8 sm:px-0">
        <h2 className="text-2xl font-bold">List of Products</h2>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(30ch,1fr))] gap-4">
          {products.map((product: Product) => (
            <li
              key={product.id}
              className="overflow-hidden rounded-xl bg-neutral-200"
            >
              <article className="group relative isolate grid w-full pb-4 hover:cursor-pointer">
                <div className="order-2 mx-auto mt-4 text-center">
                  <h3 className="font-bold text-neutral-900 group-hover:underline">
                    <Link href={`/products/${product.slug}`}>
                      <span className="absolute inset-0 z-2"></span>
                      {product.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-700">
                    <span>Price: </span>
                    <span className="font-bold">${product.price}</span>
                  </p>
                </div>
                <div className="order-1  h-77 overflow-hidden">
                  {checkHostname(formatUrl(product.images[0])).inConfig ? (
                    <Image
                      className="w-full object-cover transition-all duration-200 group-hover:scale-[1.02]"
                      src={checkHostname(formatUrl(product.images[0])).url}
                      alt={`Product image of ${product.title}`}
                      width={200}
                      height={200}
                    />
                  ) : (
                    <img
                      className="w-full object-cover transition-all duration-200 group-hover:scale-[1.02]"
                      src={checkHostname(formatUrl(product.images[0])).url}
                      alt={`Product ${product.title}`}
                      width={200}
                      height={200}
                    />
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
