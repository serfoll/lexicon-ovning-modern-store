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

export const getProduct = async (
  id: number,
): Promise<{ ok: boolean; msg?: string; product?: Product }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);

    if (!response.ok) return { ok: false, msg: "Something went wrong..." };

    const product = await response.json();

    return { ok: true, product: product };
  } catch (error) {
    console.error(error);

    return { ok: false, msg: "Something went wrong" };
  }
};
