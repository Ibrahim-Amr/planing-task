"use client";
import Wrapper from "@/components/Wrapper";
import SectionHeader from "../SectionHeader";
import ProductCard from "./ProductCard";
import { ProductType } from "@/types/types";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import ProductsSkeleton from "./ProductsSkeleton";

const NewArrivals = () => {
  const [products, setProducts] = useState<ProductType[] | []>([]);
  const [loading, setLoading] = useState<boolean>();
  const [limit, setLimit] = useState<{ limit: number; skip: number }>({
    limit: 8,
    skip: 0,
  });

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=${limit.limit}&skip=${limit.skip}`,
      );
      setProducts((prevState) => [...prevState, ...data.products]);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setLoading(false);
    }
  }, [limit]);

  const loadMore = useCallback(() => {
    setLimit((prevState) => ({
      ...prevState,
      skip: prevState.skip + prevState.limit,
    }));
  }, [limit]);

  useEffect(() => {
    fetchProducts();
  }, [limit]);

  return (
    <section className="py-5">
      <Wrapper>
        <SectionHeader label="New Arrivals" />
        {products.length === 0 ? (
          <div className="flex flex-wrap items-center justify-around gap-4 py-5">
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
            <ProductsSkeleton />
          </div>
        ) : (
          <div>
            <div className="mb-5 grid grid-cols-1 place-content-center place-items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product: ProductType) => (
                <ProductCard
                  key={product.title + product.id}
                  product={product}
                />
              ))}
            </div>
            <div className="text-center">
              <Button
                disabled={loading}
                onClick={loadMore}
                className="inline-block "
              >
                Load More
              </Button>
            </div>
          </div>
        )}
      </Wrapper>
    </section>
  );
};

export default NewArrivals;
