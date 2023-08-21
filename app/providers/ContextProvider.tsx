"use client";

import { ProductsProvider } from "@/context/ProductsContext";

interface Props {
  children: React.ReactNode;
}
const ContextProvider: React.FC<Props> = ({ children }) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default ContextProvider;
