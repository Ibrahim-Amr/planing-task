import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const ProductImage = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex w-full flex-1 items-center justify-center lg:justify-start">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={400}
        height={400}
        className="h-full w-full rounded-xl"
        property="true"
      />
    </div>
  );
};

export default ProductImage;
