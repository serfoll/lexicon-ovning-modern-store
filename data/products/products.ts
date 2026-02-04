import { API_BASE_URL } from "@/constants";
import type { Product } from "@/types";

export const getProducts = async ({
  limit = 0,
  skip = 0,
}: {
  limit?: number;
  skip?: number;
}): Promise<Product[]> => {
  let products: Product[] = [];

  try {
    const response = await fetch(
      `${API_BASE_URL}/products?limit=${limit}&skip=${skip}`,
    );

    if (!response.ok) throw new Error(`Error fetching products: ${response}`);

    const data = await response.json();

    products = data?.products;
  } catch (error) {
    console.error(error);
  }

  return products;
};
