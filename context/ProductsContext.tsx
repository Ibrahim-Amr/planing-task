import { ProductType } from "@/types/types";
import { createContext, ReactNode, useState } from "react";
import toast from "react-hot-toast";

interface Cart extends ProductType {
  quantity?: number;
}

interface ContextValues {
  cart: Cart[] | undefined;
  addToCart: (product: ProductType) => void;
  productQuantity: (id: number) => number;
  removeFromCart: (product: ProductType) => void;
}

const ProductsContext = createContext<ContextValues | null>(null);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  const productQuantity = (id: number) => {
    const quantity = cart.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  };

  const totalQuantity = cart.reduce((total, item) => {
    return total + (item.quantity as number);
  }, 0);

  const addToCart = (product: ProductType) => {
    const productIndex: any = cart?.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      setCart((prevState) => [
        ...(prevState || []),
        { ...product, quantity: 1 },
      ]);
      toast.success("Product Added Successfully");
    } else {
      setCart((prevState: any) => {
        const updatedCart = [...prevState];
        updatedCart[productIndex].quantity += 1;
        return updatedCart;
      });
    }
  };

  const removeFromCart = (product: ProductType) => {
    const productIndex: any = cart?.findIndex((item) => item.id === product.id);
    const quantity: number = productQuantity(product.id);
    if (quantity === 1) {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
    } else {
      setCart((prevState: any) => {
        const updatedCart = [...prevState];
        updatedCart[productIndex].quantity -= 1;
        return updatedCart;
      });
    }
  };

  const contextValues: ContextValues = {
    cart,
    addToCart,
    productQuantity,
    removeFromCart,
  };
  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
