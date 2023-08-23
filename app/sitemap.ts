import { ProductType } from "@/types/types";
import axios from "axios";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await axios.get(
    `https://dummyjson.com/products?limit=0&skip=0`,
  );

  return [
    ...data.products.map((product: ProductType) => ({
      url: `https://planing-task.vercel.app/product/${product.id}`,
      lastModified: new Date(),
    })),
  ];
}
