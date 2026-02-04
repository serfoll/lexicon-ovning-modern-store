import { log } from "node:console";
import type { Product } from "@/types";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

const fetchProduct = async (slug: string): Promise<Product> => { };

export default async function SingleProduct({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;

  return (
    <main>
      <h1>Product Name</h1>
    </main>
  );
}
