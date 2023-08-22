"use client";
import { Button } from "../ui/button";
import { HiMinusSm } from "react-icons/hi";
import { BiPlus } from "react-icons/bi";
import { useContext, useState } from "react";
import ProductsContext from "@/context/ProductsContext";
import { ProductType } from "@/types/types";
const Counter = ({ product }: { product: ProductType }) => {
  const { productQuantity, addToCart, removeFromCart } =
    useContext<any>(ProductsContext);
  const quantity = productQuantity(product.id);
  return (
    <div className="flex w-full items-center justify-center gap-5 lg:justify-start">
      {quantity ? (
        <div className="flex w-full items-center justify-between gap-x-8 rounded-[62px] bg-neutral-100 p-3 text-black md:w-[50%]">
          <div onClick={() => removeFromCart(product)}>
            <HiMinusSm
              size={25}
              className="cursor-pointer transition-all duration-200 ease-in-out active:scale-90"
            />
          </div>
          <span className="text-lg font-medium">{quantity}</span>
          <div onClick={() => addToCart(product)}>
            <BiPlus
              size={25}
              className="cursor-pointer transition-all duration-200 ease-in-out active:scale-90"
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={() => addToCart(product)}
          className="w-full rounded-[62px] p-6 text-sm font-medium transition-all duration-300 ease-in-out active:scale-95"
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default Counter;
