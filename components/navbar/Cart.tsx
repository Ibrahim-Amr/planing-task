"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext } from "react";
import ProductsContext from "@/context/ProductsContext";
import { ProductType } from "@/types/types";
import CartItem from "../CartItem";

interface Cart extends ProductType {
  quantity?: number;
}

const Cart = () => {
  const { cart, totalQuantity }: { cart: Cart[]; totalQuantity: number } =
    useContext<any>(ProductsContext);
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-none bg-transparent outline-none hover:bg-background active:bg-background"
            title="Cart"
          >
            <MdOutlineShoppingCart
              title="search"
              className="h-[1.2rem] w-[1.2rem] cursor-pointer"
            />
            <span className="sr-only">Cart</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="flex min-w-[30rem] flex-col gap-y-2"
          align="end"
        >
          {cart.length > 0 ? (
            cart.map((product: ProductType) => (
              <DropdownMenuItem key={product.id}>
                <CartItem product={product} />
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem>
              <div className="flex w-full items-center justify-center">
                <p>No products in the cart</p>
              </div>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="absolute -right-1 -top-2">
        <span>{totalQuantity}</span>
      </div>
    </div>
  );
};

export default Cart;
