import { ProductType } from "@/types/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface Cart extends ProductType {
  quantity?: number;
}

interface ContextValues {
  cart: Cart[] | undefined;
  addToCart: (product: ProductType) => void;
}

const ProductsContext = createContext<ContextValues | null>(null);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  const addToCart = (product: ProductType) => {
    const productIndex: any = cart?.findIndex((item) => item.id === product.id);
    console.log(productIndex);
    if (productIndex === -1) {
      setCart((prevState) => [
        ...(prevState || []),
        { ...product, quantity: 1 },
      ]);
    } else {
      setCart((prevState: any) => {
        const updatedCart = [...prevState];
        updatedCart[productIndex].quantity += 1;
        return updatedCart;
      });
    }
  };

  const contextValues: ContextValues = { cart, addToCart };
  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
