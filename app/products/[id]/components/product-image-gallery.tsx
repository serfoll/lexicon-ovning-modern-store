"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/types";

export default function ProductImageGallery({ product }: { product: Product }) {
  const [currImg, setCurrImg] = useState(product?.images[0]);

  return (
    <div className="order-1 ">
      <Image
        className="mx-auto bg-neutral-100 w-full"
        src={currImg ?? ""}
        alt={product?.title ?? ""}
        width={400}
        height={400}
      />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(4ch,1fr))] gap-2 mt-4 border border-transparent">
        {product?.images &&
          product?.images.length > 1 &&
          product?.images.map((img) => (
            <li
              key={img}
              className={`border-2 ${img === currImg ? "border-rose-300" : "border-neutral-100"} bg-neutral-100`}
            >
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setCurrImg(img)}
              >
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
  );
}
