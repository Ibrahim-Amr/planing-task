"use client";
import Wrapper from "@/components/Wrapper";
import Counter from "@/components/productPage/Counter";
import ProductDetails from "@/components/productPage/ProductDetails";
import ProductImage from "@/components/productPage/ProductImage";
import { ProductType } from "@/types/types";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const page = ({ params }: { params: { Id: string } }) => {
  const [product, setProduct] = useState<ProductType>();

  const [loading, setLoading] = useState<boolean>();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
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
  }, [params.Id]);

  if (!product) return;
  return (
    <section className="min-h-[calc(100vh-76px)] pt-20">
      <Wrapper>
        <div className="flex flex-col items-start justify-between gap-10 p-2 md:flex-row">
          <ProductImage product={product} />
          <div className="flex-1 space-y-10">
            <ProductDetails product={product} />
            <Counter />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default page;
