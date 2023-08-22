import Hero from "@/components/Home/Hero";
import NewArrivals from "@/components/Home/Products/NewArrivals";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShopSpectrum - Home",
  description:
    "Welcome to ShopSpectrum - Your Ultimate Destination for shoping online. Explore a diverse range of high-quality products and more. Shop now for a seamless and delightful shopping journey!",
};

export default function Home() {
  return (
    <section className="overflow-hidden">
      <Hero />
      <NewArrivals />
    </section>
  );
}
