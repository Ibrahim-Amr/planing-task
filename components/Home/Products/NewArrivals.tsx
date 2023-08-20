import Wrapper from "@/components/Wrapper";
import SectionHeader from "../SectionHeader";
import ProductCard from "./ProductCard";
import products from "@/data/Products";

const NewArrivals = () => {
  return (
    <section className="py-5">
      <Wrapper>
        <SectionHeader label="New Arrivals" />
        <div className="grid grid-cols-1 place-content-center place-items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default NewArrivals;
