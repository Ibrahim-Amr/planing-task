import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const ProductImage = ({ product }: { product: ProductType[] }) => {
  return (
    <div className="flex flex-1 items-center justify-center md:justify-start">
      <Image
        src={product[0].image}
        alt={product[0].title}
        width={400}
        height={400}
        className="rounded-xl"
      />
    </div>
  );
};

export default ProductImage;
