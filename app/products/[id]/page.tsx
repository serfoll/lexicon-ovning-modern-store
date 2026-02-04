import type { Product } from "@/types";

export default async function SingleProduct({
  params,
}: PageProps<"/products/[id]">) {
  const { id } = await params;

  return (
    <main>
      <h1>Product Name</h1>
    </main>
  );
}
