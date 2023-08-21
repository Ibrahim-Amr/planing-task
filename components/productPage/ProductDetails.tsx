import { ProductType } from "@/types/types";
import { AiFillStar } from "react-icons/ai";

const ProductDetails = ({ product }: { product: ProductType }) => {
  return (
    <>
      <div className="space-y-5 border-b  pb-5">
        <h2 className="text-fluid-sm font-bold">{product?.title}</h2>
        <div className="flex w-fit items-center justify-between gap-x-5">
          <div className="flex items-center justify-start gap-1 text-orange-300">
            {Array.from({ length: Math.round(product?.rating) }, () => 0)
              .slice(0, 9)
              .map((n) => (
                <AiFillStar size={25} key={n} />
              ))}
          </div>
          <p className="font-medium">
            {Math.round(product?.rating || 1)}/
            <span className="dark:text-neutral-100">5</span>
          </p>
        </div>
        <p className="text-2xl font-bold">${product?.price}</p>
        <p className="text-sm font-bold dark:text-neutral-100">
          {product?.description}
        </p>
      </div>
    </>
  );
};

export default ProductDetails;
