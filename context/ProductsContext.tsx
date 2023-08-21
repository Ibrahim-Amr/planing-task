import { createContext, ReactNode } from "react";

interface ContextValues {}

const ProductsContext = createContext<ContextValues | null>(null);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const contextValues: ContextValues = {};

  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
