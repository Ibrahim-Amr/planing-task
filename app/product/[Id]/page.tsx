import Wrapper from "@/components/Wrapper";
import Counter from "@/components/productPage/Counter";
import ProductDetails from "@/components/productPage/ProductDetails";
import ProductImage from "@/components/productPage/ProductImage";
import products from "@/data/Products";
import { ProductType } from "@/types/types";

const page = ({ params }: { params: { Id: string } }) => {
  const product: ProductType[] = products.filter(
    (product) => product.id.toString() === params.Id,
  );

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
