import { log } from "node:console";
import Image from "next/image";
import type { Product } from "@/types";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

const fetchProducts = async (): Promise<Product[]> => {
  let products: Product[] = [];

  try {
    const response = await fetch(`${API_BASE_URL}/products`);

    if (!response.ok) throw new Error(`Error fetching products: ${response}`);

    const data: Product[] = await response.json();

    products = data;
  } catch (error) {
    console.error(error);
  }

  return products;
};

export default async function Home() {
  const products = await fetchProducts();
  return (
    <main>
      <h1>{products[0].title}</h1>
    </main>
  );
}
