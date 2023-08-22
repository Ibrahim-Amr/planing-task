import Layout from "@/components/productPage/Layout";
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
  };
};
const Product = ({ params }: { params: { Id: string } }) => {
  return <Layout params={params} />;
};

export default Product;
