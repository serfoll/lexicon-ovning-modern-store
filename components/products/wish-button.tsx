"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types";

export default function WishButton({ product }: { product: Product }) {
  const [inWishlist, setInWishlist] = useState(false);

  return (
    <button
      onClick={() => setInWishlist(!inWishlist)}
      type="button"
      aria-label={`${inWishlist ? "Add " : "Remove"} ${product.title} to wishlist`}
      className={` ${inWishlist ? "text-red-400" : "text-neutral-400"} z-3 cursor-pointer m-2 hover:text-red-400 w-6`}
    >
      <Heart fill={inWishlist ? "currentColor" : "transparent"} />
    </button>
  );
}
