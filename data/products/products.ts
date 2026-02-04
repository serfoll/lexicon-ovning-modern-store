import { API_BASE_URL } from "@/constants";
import type { Product } from "@/types";

export const getProducts = async ({
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
