import ProductPage from "@/components/productPage/ProductPage";
import axios from "axios";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { Id: string };
}): Promise<Metadata> => {
  const { data } = await axios.get(
    `https://dummyjson.com/products/${params.Id}`,
  );
  return {
    title: `ShopSpectrum - ${data.title}`,
    description: `${data.description}`,
    keywords: `${data.title}, ${data.description}`,
    openGraph: {
      type: "website",
      url: `https://planing-task.vercel.app/products/${data.id}`,
      title: `My ShopSpectrum - ${data.title}`,
      description:
        "Your Ultimate Destination for shoping online. Explore a diverse range of high-quality products and more. Shop now for a seamless and delightful shopping journey!",
      siteName: "ShopSpectrum",
      images: [
        {
          url: `${data.thumbnail}`,
          width: 800,
          height: 600,
        },
      ],
    },
    applicationName: `${data.title}`,
    twitter: {
      card: "summary_large_image",
      creator: "@ebrahim_omar4",
      images: `${data.thumbnail}`,
      title: `ShopSpectrum - ${data.title}`,
      description: `${data.description}`,
    },
    viewport: "width=device-width, initial-scale=1",
  };
};
const Product = ({ params }: { params: { Id: string } }) => {
  return <ProductPage params={params} />;
};

export default Product;
