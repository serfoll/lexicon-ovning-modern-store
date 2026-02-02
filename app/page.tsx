import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

const fetchProducts = async ({
  offset = 0,
  limit = 0,
}: {
  offset?: number;
  limit?: number;
}): Promise<Product[]> => {
  let products: Product[] = [];

  try {
    const response = await fetch(
      `${API_BASE_URL}/products?offset=${offset}&limit=${limit}`,
    );

    if (!response.ok) throw new Error(`Error fetching products: ${response}`);

    const data: Product[] = await response.json();

    products = data;
  } catch (error) {
    console.error(error);
  }

  return products;
};

export default async function Home() {
  const products = await fetchProducts({ offset: 0, limit: 16 });

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
              <article className="group grid w-full pb-4 hover:cursor-pointer">
                <div className="order-2 mx-auto mt-4 text-center text-pretty px-2">
                  <h3 className="font-bold text-neutral-900 group-hover:underline">
                    <Link href={`/shop/${product.slug}`}>{product.title}</Link>
                  </h3>
                  <p className="text-neutral-700">
                    <span>Price: </span>
                    <span className="font-bold">${product.price}</span>
                  </p>
                </div>
                <Image
                  className="order-1 mx-auto w-full object-cover"
                  src={product.images[0]}
                  alt={`Product image of ${product.title}`}
                  width={200}
                  height={200}
                />
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
