"use client";
import Wrapper from "@/components/Wrapper";
import Counter from "@/components/productPage/Counter";
import ProductDetails from "@/components/productPage/ProductDetails";
import ProductImage from "@/components/productPage/ProductImage";
import Taps from "@/components/productPage/Taps/Taps";
import { ProductType } from "@/types/types";
import axios from "axios";
import { Metadata } from "next";
import { useCallback, useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

const ProductPage = ({ params }: { params: { Id: string } }) => {
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${params.Id}`,
      );
      setProduct(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setLoading(false);
    }
  }, [params.Id]);

  useEffect(() => {
    fetchProducts();
  }, [params.Id, fetchProducts]);

  if (!product || loading)
    return (
      <section className="mx-auto max-w-[1536px] space-y-10 overflow-hidden p-2  py-5">
        <div className="flex items-start justify-center gap-x-4">
          <div className="flex-1">
            <Skeleton className="h-[50vh] w-full" />
          </div>
          <div className="flex-1 space-y-32 py-5">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <Skeleton className="h-[20px] w-full" />
              <Skeleton className="h-[20px] w-full" />
              <Skeleton className="h-[20px] w-full" />
              <Skeleton className="h-[20px] w-full" />
            </div>

            <div>
              <Skeleton className="h-[40px] w-1/2" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Skeleton className="h-[30px] w-1/3" />
          <Skeleton className="h-[30px] w-1/3" />
          <Skeleton className="h-[30px] w-1/3" />
        </div>
      </section>
    );

  return (
    <section className="min-h-screen py-2">
      <Wrapper>
        <div className="mb-10 flex flex-col items-start justify-between gap-10 p-2 lg:flex-row">
          <ProductImage product={product} />
          <div className="w-full flex-1 space-y-10">
            <ProductDetails product={product} />
            <Counter product={product} />
          </div>
        </div>
        <div>
          <Taps product={product} setProduct={setProduct} />
        </div>
      </Wrapper>
    </section>
  );
};

export default ProductPage;
