// components/wish-button.tsx

"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/contexts/wishlist-context";
import type { Product } from "@/types";

export default function WishButton({ product }: { product: Product }) {
  const { isWishlisted, addToWishlist, removeFromWishlist } = useWishlist();

  const inWishlist = isWishlisted(product.id.toString());

  const toggleWishlisted = async () => {
    if (inWishlist) {
      removeFromWishlist(product.id.toString());
    } else {
      addToWishlist(product.id.toString());
    }
  };

  return (
    <button
      onClick={toggleWishlisted}
      type="button"
      aria-label={`${inWishlist ? "Add " : "Remove"} ${product.title} to wishlist`}
      className={` ${inWishlist ? "text-red-400" : "text-neutral-400"} z-3 cursor-pointer m-2 hover:text-red-400 w-6`}
    >
      <Heart fill={inWishlist ? "currentColor" : "transparent"} />
    </button>
  );
}
