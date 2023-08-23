import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const ProductImage = ({ product }: { product: ProductType }) => {
  return (
    <div className="relative flex h-[400px] w-full flex-1 items-center justify-center overflow-hidden">
      <Image
        src={product.images[0]}
        alt={product.title}
        fill
        className="rounded-xl object-contain"
        property="true"
      />
    </div>
  );
};

export default ProductImage;
