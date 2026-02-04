import Image from "next/image";
import { getProduct } from "@/data/products/products";

export default async function SingleProduct({
  params,
}: PageProps<"/products/[id]">) {
  const { id } = await params;

  const res = await getProduct(Number(id));

  if (!res.ok)
    return (
      <div>
        <h1>{res?.msg}</h1>
      </div>
    );

  const product = res?.product;

  return (
    <main className="container mx-auto grid space-y-4 px-8 md:grid-cols-2">
      <div className="order-2 space-y-4 md:place-self-center">
        <h1 className="text-3xl font-bold">{product?.title}</h1>
        <p className="">{product?.description}</p>
      </div>
      <div className="order-1">
        <Image
          className="mx-auto"
          src={product?.images[0] ?? ""}
          alt={product?.title ?? ""}
          width={400}
          height={400}
        />
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(4ch,1fr))]">
          {product?.images &&
            product?.images.length > 1 &&
            product?.images.map((img) => (
              <li key={img}>
                <button type="button" className="cursor-pointer">
                  <Image
                    className="aspect-square object-center"
                    src={img}
                    alt={product?.title}
                    width={300}
                    height={300}
                  />
                </button>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
