import type { Metadata } from "next";
import { getProduct } from "@/data/products/products";
import ProductImageGallery from "./components/product-image-gallery";
import { Product } from "@/types";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { id } = await params;

  // fetch data
  const res = await getProduct(Number(id));

  if (!res.ok)
    return {
      title: `Modern Store`,
    };
  const product = res.product;

  return {
    title: `Modern Store - ${product?.title}`,
    description: product?.description,
  };
}

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

  const product = res?.product as Product;

  return (
    <main className="container mx-auto grid space-y-4 px-8 md:grid-cols-2 gap-4">
      <div className="order-2 space-y-4 md:place-self-center">
        <h1 className="text-3xl font-bold">{product?.title}</h1>
        <p className="">{product?.description}</p>
      </div>
      <ProductImageGallery product={product} />
    </main>
  );
}
