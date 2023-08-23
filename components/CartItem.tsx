import ProductsContext from "@/context/ProductsContext";
import { ProductType } from "@/types/types";
import Image from "next/image";
import { useContext } from "react";

const CartItem = ({ product }: { product: ProductType }) => {
  const { productQuantity } = useContext<any>(ProductsContext);
  const quantity = productQuantity(product.id);

  return (
    <div className="flex items-center justify-center gap-x-5">
      <div>
        <Image
          width={100}
          height={100}
          src={product.thumbnail}
          alt={product.title}
          priority={true}
        />
      </div>
      <div className="font-bold capitalize">
        <p className="text-lg">{product.title}</p>
        <p className="text-sm">quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
